"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary } from "@/data/vocabulary";
import { speak } from "@/lib/tts";
import { saveTestResult, getTestResults, type TestResult } from "@/lib/storage";
import { IconVolume, IconCheck, IconChevron } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

// ── Types ──

interface Question {
  id: number;
  section: "listening" | "reading";
  part: number;
  partLabel: string;
  instruction: string;
  prompt: string;
  context?: string;
  audioText?: string;
  options: string[];
  correctIndex: number;
}

// ── Helpers ──

function pick<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function sameCategoryDistractors(w: typeof vocabulary[0], n: number) {
  const sameCategory = vocabulary.filter((v) => v.id !== w.id && v.category === w.category);
  if (sameCategory.length >= n) return pick(sameCategory, n);
  const rest = vocabulary.filter((v) => v.id !== w.id && v.category !== w.category);
  return [...pick(sameCategory, Math.min(n, sameCategory.length)), ...pick(rest, n - Math.min(n, sameCategory.length))].slice(0, n);
}

// ── Question generator (mirrors real HSK 1 exam structure) ──

function generateExam(): Question[] {
  const pool = shuffle(vocabulary);
  let qi = 0;
  const questions: Question[] = [];

  // ═══════════════════════════════════════
  // 一、听力 LISTENING (20 questions)
  // ═══════════════════════════════════════

  // Part 1 (Q1-5): Listen to a word, judge if it matches the given word — TRUE (√) or FALSE (×)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const isMatch = Math.random() > 0.5;
    const shown = isMatch ? w : pick(vocabulary.filter((v) => v.id !== w.id), 1)[0];
    questions.push({
      id: questions.length + 1,
      section: "listening",
      part: 1,
      partLabel: "第一部分",
      instruction: "Listen to the word. Does it match what is shown?",
      prompt: shown.hanzi,
      audioText: w.hanzi,
      options: ["√  Correct", "×  Incorrect"],
      correctIndex: isMatch ? 0 : 1,
    });
  }

  // Part 2 (Q6-10): Listen to a sentence, choose the word it describes
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2);
    const opts = shuffle([w.hanzi, ...distractors.map((d) => d.hanzi)]);
    questions.push({
      id: questions.length + 1,
      section: "listening",
      part: 2,
      partLabel: "第二部分",
      instruction: "Listen to the sentence. Which word is described?",
      prompt: "",
      audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.hanzi),
    });
  }

  // Part 3 (Q11-15): Listen to a short dialogue, pick what it's about
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2);
    const opts = shuffle([w.english, ...distractors.map((d) => d.english)]);
    questions.push({
      id: questions.length + 1,
      section: "listening",
      part: 3,
      partLabel: "第三部分",
      instruction: "Listen to the dialogue. What is it about?",
      prompt: "",
      audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // Part 4 (Q16-20): Listen to a question, pick the correct answer
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2);
    const questionText = `${w.example.hanzi}`;
    const opts = shuffle([
      w.english,
      ...distractors.map((d) => d.english),
    ]);
    questions.push({
      id: questions.length + 1,
      section: "listening",
      part: 4,
      partLabel: "第四部分",
      instruction: "Listen and choose the correct answer.",
      prompt: "",
      audioText: questionText,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // ═══════════════════════════════════════
  // 二、阅读 READING (20 questions)
  // ═══════════════════════════════════════

  // Part 1 (Q21-25): Match — does the pinyin match the character? TRUE/FALSE
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const isMatch = Math.random() > 0.5;
    const shownPinyin = isMatch ? w.pinyin : pick(vocabulary.filter((v) => v.id !== w.id), 1)[0].pinyin;
    questions.push({
      id: questions.length + 1,
      section: "reading",
      part: 1,
      partLabel: "第一部分",
      instruction: "Does the pinyin match the character?",
      context: w.hanzi,
      prompt: shownPinyin,
      options: ["√  Correct", "×  Incorrect"],
      correctIndex: isMatch ? 0 : 1,
    });
  }

  // Part 2 (Q26-30): Match the word to its meaning
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2);
    const opts = shuffle([w.english, ...distractors.map((d) => d.english)]);
    questions.push({
      id: questions.length + 1,
      section: "reading",
      part: 2,
      partLabel: "第二部分",
      instruction: "Choose the correct meaning.",
      context: w.hanzi,
      prompt: w.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // Part 3 (Q31-35): Choose the correct word to complete the sentence
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2);
    const blank = w.example.hanzi.replace(w.hanzi, "______");
    const opts = shuffle([w.hanzi, ...distractors.map((d) => d.hanzi)]);
    questions.push({
      id: questions.length + 1,
      section: "reading",
      part: 3,
      partLabel: "第三部分",
      instruction: "Choose the word that completes the sentence.",
      prompt: blank,
      context: w.example.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.hanzi),
    });
  }

  // Part 4 (Q36-40): Read the sentence, choose the correct meaning
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2);
    const opts = shuffle([w.example.english, ...distractors.map((d) => d.example.english)]);
    questions.push({
      id: questions.length + 1,
      section: "reading",
      part: 4,
      partLabel: "第四部分",
      instruction: "Read the sentence. What does it mean?",
      prompt: w.example.hanzi,
      context: w.example.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.example.english),
    });
  }

  return questions;
}

// ── Sections metadata ──

const sectionMeta = [
  { section: "listening" as const, part: 1, label: "第一部分", range: [1, 5] },
  { section: "listening" as const, part: 2, label: "第二部分", range: [6, 10] },
  { section: "listening" as const, part: 3, label: "第三部分", range: [11, 15] },
  { section: "listening" as const, part: 4, label: "第四部分", range: [16, 20] },
  { section: "reading" as const, part: 1, label: "第一部分", range: [21, 25] },
  { section: "reading" as const, part: 2, label: "第二部分", range: [26, 30] },
  { section: "reading" as const, part: 3, label: "第三部分", range: [31, 35] },
  { section: "reading" as const, part: 4, label: "第四部分", range: [36, 40] },
];

// ── Component ──

export default function TestPage() {
  const { t } = useLang();
  const [state, setState] = useState<"intro" | "test" | "results">("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(40 * 60);
  const [pastResults, setPastResults] = useState<TestResult[]>([]);
  const [showNav, setShowNav] = useState(false);
  const [playCount, setPlayCount] = useState<Record<number, number>>({});
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    getTestResults().then(setPastResults);
  }, []);

  const startTest = () => {
    const q = generateExam();
    setQuestions(q);
    setAnswers(new Array(q.length).fill(null));
    setCurrentQ(0);
    setTimeLeft(40 * 60);
    setState("test");
    setShowNav(false);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const selectAnswer = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIdx;
    setAnswers(newAnswers);
  };

  const finishTest = useCallback(async () => {
    if (timerRef.current) clearInterval(timerRef.current);

    let listening = 0;
    let reading = 0;
    const answerDetails: { questionId: number; correct: boolean }[] = [];

    questions.forEach((q, i) => {
      const correct = answers[i] === q.correctIndex;
      answerDetails.push({ questionId: q.id, correct });
      if (correct) {
        if (q.section === "listening") listening++;
        else reading++;
      }
    });

    const listeningScore = Math.round((listening / 20) * 100);
    const readingScore = Math.round((reading / 20) * 100);
    const totalScore = listeningScore + readingScore;

    const result: TestResult = {
      id: `test-${Date.now()}`,
      date: Date.now(),
      score: totalScore,
      total: 200,
      passed: totalScore >= 120,
      answers: answerDetails,
    };

    await saveTestResult(result);
    const results = await getTestResults();
    setPastResults(results);
    setState("results");
  }, [questions, answers]);

  useEffect(() => {
    if (timeLeft === 0 && state === "test") finishTest();
  }, [timeLeft, state, finishTest]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const q = questions[currentQ];
  const latestResult = pastResults[pastResults.length - 1];

  const answeredCount = answers.filter((a) => a !== null).length;
  const currentMeta = q ? sectionMeta.find((m) => q.id >= m.range[0] && q.id <= m.range[1]) : null;
  const prevMeta = currentQ > 0 ? sectionMeta.find((m) => questions[currentQ - 1].id >= m.range[0] && questions[currentQ - 1].id <= m.range[1]) : null;
  const isNewSection = currentMeta && (!prevMeta || currentMeta.section !== prevMeta.section || currentMeta.part !== prevMeta.part);

  return (
    <AppShell>
      <div className="space-y-5">
        {/* ── Intro ── */}
        {state === "intro" && (
          <>
            {/* Official exam header */}
            <div className="text-center space-y-2 pt-2">
              <div className="text-[13px] text-ink-tertiary tracking-[0.2em] uppercase">Mock Examination</div>
              <h1 className="text-2xl font-bold text-ink">汉语水平考试</h1>
              <div className="text-lg font-semibold text-ink-secondary">HSK（一级）</div>
              <div className="text-[13px] text-ink-tertiary">Hànyǔ Shuǐpíng Kǎoshì — Level 1</div>
            </div>

            <div className="border-t border-border" />

            {/* Exam structure */}
            <div className="rounded-xl border border-border bg-bg-raised overflow-hidden">
              <div className="p-4 border-b border-border bg-bg-sunken">
                <div className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">注意事项 Instructions</div>
              </div>
              <div className="p-4 space-y-3 text-[14px] text-ink-secondary leading-relaxed">
                <p>This is a mock HSK Level 1 test following the official exam format.</p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span>一、听力 {t.testPage.listening}</span>
                    <span className="text-ink font-medium">20 questions &middot; 4 parts</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span>二、阅读 {t.testPage.reading}</span>
                    <span className="text-ink font-medium">20 questions &middot; 4 parts</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span>Total time</span>
                    <span className="text-ink font-medium">40 minutes</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Pass score</span>
                    <span className="text-ink font-medium">120 / 200 (60%)</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={startTest}
              className="w-full rounded-xl bg-jade hover:bg-jade-hover text-white py-4 font-semibold text-[16px] transition-colors"
            >
              开始考试 &mdash; {t.testPage.startTest}
            </button>

            {pastResults.length > 0 && (
              <div className="space-y-2">
                <div className="text-[13px] font-semibold text-ink-secondary">Past Results</div>
                {pastResults
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((r) => (
                    <div
                      key={r.id}
                      className={`flex items-center justify-between rounded-xl p-3.5 border ${
                        r.passed
                          ? "bg-jade-light/50 border-jade/20"
                          : "bg-red-light/50 border-red/20"
                      }`}
                    >
                      <span className="text-[13px] text-ink-secondary">
                        {new Date(r.date).toLocaleDateString()}
                      </span>
                      <span className={`text-[14px] font-bold ${r.passed ? "text-jade" : "text-red"}`}>
                        {r.score}/200 {r.passed ? t.testPage.passed : t.testPage.failed}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}

        {/* ── Test ── */}
        {state === "test" && q && (
          <>
            {/* Exam top bar */}
            <div className="flex items-center justify-between">
              <div className="text-[14px] font-semibold text-ink">
                HSK（一级）
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowNav(!showNav)}
                  className="text-[12px] text-ink-tertiary hover:text-ink transition-colors tabular-nums"
                >
                  {answeredCount}/40
                </button>
                <span
                  className={`text-[14px] font-mono font-bold tabular-nums px-2.5 py-1 rounded-lg ${
                    timeLeft < 300 ? "bg-red-light text-red" : "bg-bg-sunken text-ink"
                  }`}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-bg-sunken rounded-full h-1">
              <div
                className="bg-jade h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question navigator overlay */}
            {showNav && (
              <div className="rounded-xl border border-border bg-bg-raised p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-ink-secondary">Question Navigator</span>
                  <button onClick={() => setShowNav(false)} className="text-ink-tertiary hover:text-ink text-[13px]">Close</button>
                </div>
                {sectionMeta.map((s) => (
                  <div key={`${s.section}-${s.part}`}>
                    <div className="text-[11px] text-ink-tertiary uppercase tracking-wide mb-1.5">
                      {s.section === "listening" ? "听力" : "阅读"} {s.label}
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {Array.from({ length: s.range[1] - s.range[0] + 1 }, (_, i) => {
                        const idx = s.range[0] - 1 + i;
                        const answered = answers[idx] !== null;
                        const active = idx === currentQ;
                        return (
                          <button
                            key={idx}
                            onClick={() => { setCurrentQ(idx); setShowNav(false); }}
                            className={`w-8 h-8 rounded-lg text-[12px] font-medium transition-colors ${
                              active
                                ? "bg-jade text-white"
                                : answered
                                ? "bg-jade-light text-jade-text"
                                : "bg-bg-sunken text-ink-tertiary hover:text-ink"
                            }`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <button
                  onClick={finishTest}
                  className="w-full rounded-xl bg-red hover:bg-red/90 text-white py-2.5 text-[13px] font-medium transition-colors mt-2"
                >
                  交卷 — {t.testPage.submit} ({answeredCount}/40)
                </button>
              </div>
            )}

            {/* Section header (shown at part boundaries) */}
            {isNewSection && currentMeta && (
              <div className="rounded-xl bg-bg-sunken border border-border p-3 text-center">
                <div className="text-[11px] text-ink-tertiary uppercase tracking-widest">
                  {currentMeta.section === "listening" ? `一、听力 ${t.testPage.listening}` : `二、阅读 ${t.testPage.reading}`}
                </div>
                <div className="text-[14px] font-semibold text-ink mt-0.5">
                  {currentMeta.label} &mdash; Part {currentMeta.part}
                </div>
                <div className="text-[12px] text-ink-tertiary mt-1">{q.instruction}</div>
              </div>
            )}

            {/* Question content */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-bg-sunken flex items-center justify-center text-[13px] font-bold text-ink tabular-nums">
                  {q.id}
                </span>
                <div className="flex-1 pt-1">
                  <div className="text-[12px] text-ink-tertiary mb-1">{q.instruction}</div>

                  {/* Context (character shown above prompt) */}
                  {q.context && (
                    <div className="mb-1">
                      <div className="text-2xl font-bold text-ink">{q.context}</div>
                      {q.section === "reading" && (
                        <div className="text-[12px] text-jade mt-0.5">{q.context}</div>
                      )}
                    </div>
                  )}

                  {/* Prompt — reading section shows pinyin above characters */}
                  {q.prompt && (
                    <div>
                      <div className={`font-medium text-ink ${q.context ? "text-[14px] text-ink-secondary" : "text-[18px]"}`}>
                        {q.prompt}
                      </div>
                      {q.section === "reading" && q.context && (
                        <div className="text-[11px] text-ink-tertiary mt-0.5 italic">
                          Pinyin shown as in real exam
                        </div>
                      )}
                    </div>
                  )}

                  {/* Audio button — real exam plays each recording twice */}
                  {q.audioText && (() => {
                    const plays = playCount[q.id] || 0;
                    const maxPlays = 2;
                    return (
                      <button
                        onClick={() => {
                          if (plays < maxPlays) {
                            speak(q.audioText!, 0.8);
                            setPlayCount((p) => ({ ...p, [q.id]: (p[q.id] || 0) + 1 }));
                          }
                        }}
                        disabled={plays >= maxPlays}
                        className={`mt-3 flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors ${
                          plays >= maxPlays
                            ? "bg-bg-sunken text-ink-tertiary"
                            : "bg-blue-light text-blue hover:bg-blue/10"
                        }`}
                      >
                        <IconVolume className="w-4.5 h-4.5" />
                        <span>Play Audio</span>
                        <span className="text-[12px] ml-1 opacity-60">{plays}/{maxPlays}</span>
                      </button>
                    );
                  })()}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2 pl-11">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`w-full text-left rounded-xl border p-3.5 text-[14px] transition-all ${
                      answers[currentQ] === i
                        ? "border-jade bg-jade-light/50 text-ink font-medium ring-1 ring-jade/20"
                        : "border-border bg-bg-raised text-ink-secondary hover:border-border-strong hover:text-ink"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-border py-3 text-[14px] text-ink-secondary disabled:opacity-30 hover:border-border-strong transition-colors"
              >
                <IconChevron direction="left" className="w-4 h-4" />
                {t.testPage.prev}
              </button>
              {currentQ < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQ(currentQ + 1)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-jade hover:bg-jade-hover text-white py-3 text-[14px] font-medium transition-colors"
                >
                  {t.testPage.next}
                  <IconChevron direction="right" className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={finishTest}
                  className="flex-1 rounded-xl bg-red hover:bg-red/90 text-white py-3 text-[14px] font-semibold transition-colors"
                >
                  交卷 {t.testPage.submit}
                </button>
              )}
            </div>
          </>
        )}

        {/* ── Results ── */}
        {state === "results" && latestResult && (
          <div className="space-y-6">
            {/* Score header */}
            <div className="text-center pt-2">
              <div className="text-[12px] text-ink-tertiary tracking-[0.2em] uppercase mb-2">
                HSK（一级） Results
              </div>
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${latestResult.passed ? "bg-jade-light" : "bg-red-light"}`}>
                <span className={`text-4xl font-bold ${latestResult.passed ? "text-jade" : "text-red"}`}>
                  {latestResult.score}
                </span>
              </div>
              <div className="text-ink-tertiary text-[14px] mt-1">/ 200</div>
              <div className={`text-lg font-bold mt-2 ${latestResult.passed ? "text-jade" : "text-red"}`}>
                {latestResult.passed ? `合格 ${t.testPage.passed}` : `未通过 ${t.testPage.failed}`}
              </div>
            </div>

            {/* Score breakdown */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-bg-raised border border-border p-4 text-center">
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">听力 {t.testPage.listening}</div>
                <div className="text-2xl font-bold text-ink mt-1 tabular-nums">
                  {Math.round((latestResult.answers.slice(0, 20).filter((a) => a.correct).length / 20) * 100)}
                </div>
                <div className="text-[12px] text-ink-tertiary">/ 100</div>
              </div>
              <div className="rounded-xl bg-bg-raised border border-border p-4 text-center">
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">阅读 {t.testPage.reading}</div>
                <div className="text-2xl font-bold text-ink mt-1 tabular-nums">
                  {Math.round((latestResult.answers.slice(20).filter((a) => a.correct).length / 20) * 100)}
                </div>
                <div className="text-[12px] text-ink-tertiary">/ 100</div>
              </div>
            </div>

            <div className="text-[13px] text-ink-tertiary text-center">
              {latestResult.answers.filter((a) => a.correct).length}/40 correct &middot; Pass mark: 120/200
            </div>

            {/* Wrong answers review */}
            {questions.filter((_, i) => latestResult.answers[i] && !latestResult.answers[i].correct).length > 0 && (
              <div className="space-y-2">
                <div className="text-[13px] font-semibold text-ink-secondary">{t.testPage.reviewAnswers}</div>
                {questions
                  .map((q, i) => ({ q, i }))
                  .filter(({ i }) => latestResult.answers[i] && !latestResult.answers[i].correct)
                  .slice(0, 15)
                  .map(({ q }) => (
                    <div key={q.id} className="rounded-xl bg-bg-raised border border-border p-3.5 text-[13px]">
                      <div className="flex items-center gap-2 text-ink-tertiary mb-1">
                        <span className="font-mono">Q{q.id}</span>
                        <span className="uppercase text-[11px]">{q.section} · Part {q.part}</span>
                      </div>
                      <div className="text-ink">{q.prompt || q.instruction}</div>
                      <div className="text-jade font-medium mt-1.5 flex items-center gap-1.5">
                        <IconCheck className="w-3.5 h-3.5" />
                        {q.options[q.correctIndex]}
                      </div>
                    </div>
                  ))}
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => setState("intro")}
                className="flex-1 rounded-xl border border-border hover:border-border-strong py-3 text-[14px] text-ink-secondary transition-colors"
              >
                Back
              </button>
              <button
                onClick={startTest}
                className="flex-1 rounded-xl bg-jade hover:bg-jade-hover text-white py-3 text-[14px] font-semibold transition-colors"
              >
                {t.testPage.tryAgain}
              </button>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
