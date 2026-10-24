"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { grammar, type Exercise } from "@/data/grammar";
import { grammar2 } from "@/data/grammar2";
import { grammarExercises } from "@/data/grammar-exercises";
import { grammarExercises2 } from "@/data/grammar-exercises2";
import { useLang } from "@/lib/i18n";
import { useProgress } from "@/hooks/useProgress";
import { getSRSState, saveSRSState } from "@/lib/storage";
import { newCardState, review } from "@/lib/srs";
import { IconCheck, IconX, IconChevron } from "@/components/Icons";
import PremiumGate from "@/components/PremiumGate";
import Confetti from "@/components/Confetti";

const SESSION_SIZE = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface SessionExercise {
  exercise: Exercise;
  grammarId: number;
}

export default function GrammarPracticePage() {
  const params = useSearchParams();
  const { t } = useLang();
  const { progress, markGrammarCompleted, refresh } = useProgress();

  const level = (parseInt(params.get("level") ?? "1") as 1 | 2) || 1;
  const specificId = params.get("id") ? parseInt(params.get("id")!) : null;

  const session = useMemo(() => {
    const allGrammar = level === 1 ? grammar : grammar2;
    const allExercises = level === 1 ? grammarExercises : grammarExercises2;
    const pool: SessionExercise[] = [];

    if (specificId) {
      const exercises = allExercises[specificId] ?? [];
      for (const e of exercises) pool.push({ exercise: e, grammarId: specificId });
    } else {
      for (const gp of allGrammar) {
        const exercises = allExercises[gp.id] ?? [];
        for (const e of exercises) pool.push({ exercise: e, grammarId: gp.id });
      }
    }
    return shuffle(pool).slice(0, specificId ? pool.length : SESSION_SIZE);
  }, [level, specificId]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [reorderPicked, setReorderPicked] = useState<string[]>([]);
  const [translateInput, setTranslateInput] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const fillOptions = useMemo(() => {
    const e = session[idx]?.exercise;
    if (e?.type !== "fill") return [];
    const opts = shuffle([e.answer, ...e.distractors]);
    return opts.map((label) => ({ label, isAnswer: label === e.answer }));
  }, [session, idx]);

  const current = session[idx] as SessionExercise | undefined;
  const ex = current?.exercise;

  const allGrammar = level === 1 ? grammar : grammar2;
  const grammarPoint = current ? allGrammar.find((g) => g.id === current.grammarId) : null;

  const resetInputs = useCallback(() => {
    setSelected(null);
    setReorderPicked([]);
    setTranslateInput("");
    setShowFeedback(false);
    setIsCorrect(false);
  }, []);

  const updateSRS = useCallback(async (grammarId: number, correct: boolean) => {
    const cardId = `grammar-${grammarId}`;
    let state = await getSRSState(cardId);
    if (!state) state = newCardState(cardId);
    const quality = correct ? 4 : 1;
    const updated = review(state, quality);
    await saveSRSState(updated);
    if (updated.reps >= 3 && !progress?.grammarCompleted.includes(grammarId)) {
      await markGrammarCompleted(grammarId);
    }
  }, [progress, markGrammarCompleted]);

  const checkAnswer = useCallback(() => {
    if (!ex) return;
    let correct = false;

    if (ex.type === "mcq") {
      correct = selected === ex.answer;
    } else if (ex.type === "fill") {
      correct = selected !== null && fillOptions[selected]?.isAnswer === true;
    } else if (ex.type === "reorder") {
      correct = reorderPicked.join("") === ex.answer.join("");
    } else if (ex.type === "translate") {
      const input = translateInput.trim().replace(/[。？！，、；：""''（）]/g, "");
      const answer = ex.answer.replace(/[。？！，、；：""''（）]/g, "");
      correct = input === answer || (ex.accept ?? []).some(
        (a) => input === a.replace(/[。？！，、；：""''（）]/g, "")
      );
    }

    setIsCorrect(correct);
    setShowFeedback(true);
    setResults((r) => [...r, correct]);
    updateSRS(current!.grammarId, correct);
  }, [ex, selected, reorderPicked, translateInput, current, updateSRS, fillOptions]);

  const next = useCallback(() => {
    if (idx + 1 >= session.length) {
      setDone(true);
      refresh();
    } else {
      setIdx(idx + 1);
      resetInputs();
    }
  }, [idx, session.length, resetInputs, refresh]);

  if (!session.length) {
    return (
      <AppShell>
        <div className="text-center py-12 space-y-4">
          <div className="text-ink-tertiary text-[15px]">No exercises available</div>
          <Link href="/learn/grammar" className="text-primary text-[14px] font-medium">
            {t.practicePage.back}
          </Link>
        </div>
      </AppShell>
    );
  }

  if (done) {
    const correct = results.filter(Boolean).length;
    const pct = Math.round((correct / results.length) * 100);
    return (
      <AppShell>
        <PremiumGate>
        <Confetti active={pct >= 80} />
        <div className="text-center py-12 space-y-6">
          <div className="text-[48px]">{pct >= 80 ? "🎉" : "💪"}</div>
          <h1 className="text-2xl font-bold text-ink">{t.practicePage.complete}</h1>
          <div className="text-[15px] text-ink-secondary">
            {pct >= 80 ? t.practicePage.greatJob : t.practicePage.keepPracticing}
          </div>

          <div className="inline-flex items-center gap-3 bg-bg-raised border border-border rounded-xl px-6 py-4">
            <span className="text-[32px] font-bold text-primary tabular-nums">{correct}</span>
            <span className="text-ink-tertiary text-[15px]">{t.practicePage.of}</span>
            <span className="text-[32px] font-bold text-ink tabular-nums">{results.length}</span>
          </div>

          <div className="flex flex-col gap-2 max-w-xs mx-auto">
            <Link
              href={`/learn/grammar/practice?level=${level}${specificId ? `&id=${specificId}` : ""}`}
              className="bg-primary hover:bg-primary-hover text-white rounded-xl py-3 text-[14px] font-semibold text-center transition-colors"
              onClick={() => { setDone(false); setIdx(0); setResults([]); resetInputs(); }}
            >
              {t.practicePage.tryAgain}
            </Link>
            <Link
              href="/learn/grammar"
              className="bg-bg-sunken hover:bg-bg border border-border rounded-xl py-3 text-[14px] font-medium text-ink-secondary text-center transition-colors"
            >
              {t.practicePage.back}
            </Link>
          </div>
        </div>
        </PremiumGate>
      </AppShell>
    );
  }

  const reorderRemaining = ex?.type === "reorder"
    ? ex.words.filter((w) => {
        const pickedCount = reorderPicked.filter((p) => p === w).length;
        const totalCount = ex.words.filter((x) => x === w).length;
        return pickedCount < totalCount;
      })
    : [];

  return (
    <AppShell>
      <PremiumGate>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <Link href="/learn/grammar" className="flex items-center gap-1 text-ink-tertiary hover:text-ink text-[13px] transition-colors">
            <IconChevron direction="left" className="w-4 h-4" />
            {t.practicePage.back}
          </Link>
          <span className="text-[13px] text-ink-tertiary tabular-nums">
            {t.practicePage.question} {idx + 1} {t.practicePage.of} {session.length}
          </span>
        </div>

        <div className="w-full bg-bg-sunken rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((idx + (showFeedback ? 1 : 0)) / session.length) * 100}%` }}
          />
        </div>

        {grammarPoint && (
          <div className="text-[13px] text-ink-tertiary">
            <span className="font-medium text-ink-secondary">{grammarPoint.title}</span>
            {" · "}
            <span className="font-mono">{grammarPoint.pattern}</span>
          </div>
        )}

        <div className="rounded-xl border border-border bg-bg-raised p-5 space-y-5">
          {ex?.type === "mcq" && (
            <>
              <p className="text-[16px] font-semibold text-ink leading-relaxed">{ex.prompt}</p>
              <div className="space-y-2">
                {ex.options.map((opt, i) => {
                  let cls = "border-border bg-bg-sunken text-ink hover:border-border-strong";
                  if (showFeedback) {
                    if (i === ex.answer) cls = "border-primary bg-primary-light text-primary-text";
                    else if (i === selected && !isCorrect) cls = "border-red-400 bg-red-50 text-red-700";
                  } else if (i === selected) {
                    cls = "border-primary bg-primary-light/50 text-primary-text";
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => !showFeedback && setSelected(i)}
                      disabled={showFeedback}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-[15px] transition-colors ${cls}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {ex?.type === "fill" && (
            <>
              <div>
                <div className="text-[13px] text-ink-tertiary mb-2">{t.practicePage.fillBlank}</div>
                <p className="text-[18px] font-semibold text-ink leading-relaxed">
                  {ex.sentence.replace("___", showFeedback ? ex.answer : "______")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {fillOptions.map((opt, i) => {
                  let cls = "border-border bg-bg-sunken text-ink hover:border-border-strong";
                  if (showFeedback) {
                    if (opt.isAnswer) cls = "border-primary bg-primary-light text-primary-text";
                    else if (i === selected) cls = "border-red-400 bg-red-50 text-red-700";
                  } else if (i === selected) {
                    cls = "border-primary bg-primary-light/50 text-primary-text";
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => !showFeedback && setSelected(i)}
                      disabled={showFeedback}
                      className={`px-4 py-3 rounded-xl border text-[15px] font-medium text-center transition-colors ${cls}`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {ex?.type === "reorder" && (
            <>
              <div>
                <div className="text-[13px] text-ink-tertiary mb-2">{t.practicePage.reorder}</div>
                <p className="text-[16px] font-semibold text-ink">{ex.english}</p>
              </div>
              <div className="min-h-[52px] rounded-xl border-2 border-dashed border-border p-3 flex flex-wrap gap-2">
                {reorderPicked.map((word, i) => (
                  <button
                    key={`p-${i}`}
                    onClick={() => !showFeedback && setReorderPicked((p) => { const n = [...p]; n.splice(i, 1); return n; })}
                    disabled={showFeedback}
                    className={`px-3 py-1.5 rounded-lg text-[15px] font-medium transition-colors ${
                      showFeedback
                        ? isCorrect
                          ? "bg-primary-light text-primary-text border border-primary"
                          : "bg-red-50 text-red-700 border border-red-400"
                        : "bg-primary text-white"
                    }`}
                  >
                    {word}
                  </button>
                ))}
              </div>
              {!showFeedback && (
                <div className="flex flex-wrap gap-2">
                  {reorderRemaining.map((word, i) => (
                    <button
                      key={`r-${i}`}
                      onClick={() => setReorderPicked((p) => [...p, word])}
                      className="px-3 py-1.5 rounded-lg border border-border bg-bg-sunken text-[15px] font-medium text-ink hover:border-border-strong transition-colors"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              )}
              {showFeedback && !isCorrect && (
                <div className="text-[14px] text-ink-secondary">
                  <span className="font-medium">Correct: </span>{ex.answer.join("")}
                </div>
              )}
            </>
          )}

          {ex?.type === "translate" && (
            <>
              <div>
                <div className="text-[13px] text-ink-tertiary mb-2">{t.practicePage.translate}</div>
                <p className="text-[16px] font-semibold text-ink">{ex.english}</p>
              </div>
              <input
                type="text"
                value={translateInput}
                onChange={(e) => setTranslateInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && translateInput.trim() && !showFeedback) checkAnswer(); }}
                disabled={showFeedback}
                placeholder="输入中文..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-sunken text-[16px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary transition-colors"
                autoComplete="off"
                lang="zh"
              />
              {showFeedback && !isCorrect && (
                <div className="text-[14px] text-ink-secondary">
                  <span className="font-medium">Answer: </span>{ex.answer}
                </div>
              )}
            </>
          )}
        </div>

        {showFeedback && (
          <div className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
            isCorrect ? "bg-primary-light/50" : "bg-red-50"
          }`}>
            {isCorrect ? (
              <IconCheck className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <IconX className="w-5 h-5 text-red-500 shrink-0" />
            )}
            <span className={`text-[15px] font-semibold ${isCorrect ? "text-primary-text" : "text-red-700"}`}>
              {isCorrect ? t.practicePage.correct : t.practicePage.incorrect}
            </span>
          </div>
        )}

        {!showFeedback ? (
          <button
            onClick={checkAnswer}
            disabled={
              (ex?.type === "mcq" && selected === null) ||
              (ex?.type === "fill" && selected === null) ||
              (ex?.type === "reorder" && reorderPicked.length === 0) ||
              (ex?.type === "translate" && !translateInput.trim())
            }
            className="w-full bg-primary hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl py-3 text-[15px] font-semibold transition-colors"
          >
            {t.practicePage.check}
          </button>
        ) : (
          <button
            onClick={next}
            className="w-full bg-primary hover:bg-primary-hover text-white rounded-xl py-3 text-[15px] font-semibold transition-colors"
          >
            {idx + 1 >= session.length ? t.practicePage.finish : t.practicePage.next}
          </button>
        )}
      </div>
      </PremiumGate>
    </AppShell>
  );
}
