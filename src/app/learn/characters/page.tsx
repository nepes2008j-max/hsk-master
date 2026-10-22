"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary } from "@/data/vocabulary";
import { vocabulary2 } from "@/data/vocabulary2";
import { speak } from "@/lib/tts";
import { useProgress } from "@/hooks/useProgress";
import { IconPlay, IconBrush, IconVolume, IconChevron, IconCheck, IconSearch } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";

const allWords = [...vocabulary, ...vocabulary2];

const characters = [...new Set(vocabulary.map((w) => w.hanzi).join(""))].slice(0, 100);

function getRelatedWords(char: string) {
  return allWords.filter((w) => w.hanzi.includes(char)).slice(0, 5);
}

type HanziWriterInstance = {
  animateCharacter: () => void;
  quiz: (opts: { onComplete: (data: { totalMistakes: number }) => void }) => void;
  hideCharacter: () => void;
  showCharacter: () => void;
  setCharacter: (char: string) => void;
};

export default function CharactersPage() {
  const { t } = useLang();
  const tr = useTranslation();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mode, setMode] = useState<"animate" | "quiz">("animate");
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const writerRef = useRef<HanziWriterInstance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress, markCharacterPracticed } = useProgress();

  const char = characters[currentIdx];
  const practicedSet = useMemo(() => new Set(progress?.charactersPracticed), [progress?.charactersPracticed]);
  const related = useMemo(() => getRelatedWords(char), [char]);

  const filteredChars = useMemo(() => {
    if (!search) return characters;
    return characters.filter((c) => {
      if (c.includes(search)) return true;
      const words = getRelatedWords(c);
      return words.some((w) => w.pinyin.toLowerCase().includes(search.toLowerCase()) || w.english.toLowerCase().includes(search.toLowerCase()));
    });
  }, [search]);

  const initWriter = useCallback(async () => {
    if (!containerRef.current) return;
    const HanziWriter = (await import("hanzi-writer")).default;

    containerRef.current.innerHTML = "";
    writerRef.current = HanziWriter.create(containerRef.current, char, {
      width: 250,
      height: 250,
      padding: 10,
      showOutline: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 200,
      strokeColor: "#DC2626",
      outlineColor: "#E8E5E0",
      drawingColor: "#1C1917",
      radicalColor: "#DC2626",
    }) as unknown as HanziWriterInstance;
  }, [char]);

  useEffect(() => {
    initWriter();
  }, [initWriter]);

  const handleAnimate = () => {
    setMode("animate");
    setQuizResult(null);
    writerRef.current?.showCharacter();
    writerRef.current?.animateCharacter();
  };

  const handleQuiz = () => {
    setMode("quiz");
    setQuizResult(null);
    writerRef.current?.hideCharacter();
    writerRef.current?.quiz({
      onComplete: (data) => {
        const mistakes = data.totalMistakes;
        setQuizResult(
          mistakes === 0
            ? t.charsPage.perfect
            : `${mistakes} ${t.charsPage.mistakes}`
        );
        markCharacterPracticed(char);
      },
    });
  };

  const goTo = (delta: number) => {
    setCurrentIdx((i) => {
      const next = i + delta;
      if (next < 0) return characters.length - 1;
      if (next >= characters.length) return 0;
      return next;
    });
    setQuizResult(null);
    setMode("animate");
  };

  const practiced = practicedSet.has(char);

  return (
    <AppShell>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ink tracking-tight">{t.charsPage.title}</h1>
          <span className="text-[13px] text-ink-tertiary">
            {progress?.charactersPracticed.length ?? 0}/{characters.length} {t.charsPage.practiced}
          </span>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => goTo(-1)}
            className="p-2 rounded-xl bg-bg-raised border border-border hover:border-border-strong transition-colors"
          >
            <IconChevron direction="left" className="w-5 h-5 text-ink-secondary" />
          </button>
          <div className="text-center">
            <div className="text-5xl font-bold text-ink">{char}</div>
            <div className="text-[13px] text-ink-tertiary mt-1.5 flex items-center justify-center gap-1.5">
              {currentIdx + 1} / {characters.length}
              {practiced && <IconCheck className="w-3.5 h-3.5 text-primary" />}
            </div>
          </div>
          <button
            onClick={() => goTo(1)}
            className="p-2 rounded-xl bg-bg-raised border border-border hover:border-border-strong transition-colors"
          >
            <IconChevron direction="right" className="w-5 h-5 text-ink-secondary" />
          </button>
        </div>

        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="border-2 border-border rounded-2xl bg-bg-raised"
            style={{ width: 250, height: 250 }}
          />
        </div>

        <div className="flex justify-center gap-2">
          <button
            onClick={handleAnimate}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors ${
              mode === "animate"
                ? "bg-primary text-white"
                : "bg-bg-sunken text-ink-secondary hover:text-ink"
            }`}
          >
            <IconPlay className="w-4 h-4" />
            {t.charsPage.animate}
          </button>
          <button
            onClick={handleQuiz}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors ${
              mode === "quiz"
                ? "bg-primary text-white"
                : "bg-bg-sunken text-ink-secondary hover:text-ink"
            }`}
          >
            <IconBrush className="w-4 h-4" />
            {t.charsPage.quiz}
          </button>
          <button
            onClick={() => speak(char)}
            className="flex items-center gap-1.5 rounded-xl bg-bg-sunken px-4 py-2.5 text-[14px] text-ink-secondary hover:text-ink transition-colors"
          >
            <IconVolume className="w-4 h-4" />
          </button>
        </div>

        {quizResult && (
          <div className="text-center text-[14px] font-semibold text-primary">
            {quizResult}
          </div>
        )}

        {related.length > 0 && (
          <div className="rounded-xl border border-border bg-bg-raised p-4 space-y-2">
            <div className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
              {t.charsPage.relatedWords}
            </div>
            {related.map((w) => (
              <button
                key={w.id}
                onClick={() => speak(w.hanzi)}
                className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-bg-sunken transition-colors"
              >
                <span className="text-lg font-semibold text-ink min-w-[3rem]">{w.hanzi}</span>
                <span className="text-[13px] text-primary min-w-[4rem]">{w.pinyin}</span>
                <span className="text-[13px] text-ink-secondary flex-1">{tr(w.hanzi)?.meaning ?? w.english}</span>
                <IconVolume className="w-3.5 h-3.5 text-ink-tertiary shrink-0" />
              </button>
            ))}
          </div>
        )}

        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.charsPage.searchChars}
            className="w-full rounded-lg border border-border bg-bg-raised pl-9 pr-3 py-2.5 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>

        <div className="grid grid-cols-10 gap-1">
          {filteredChars.map((c) => {
            const done = practicedSet.has(c);
            const idx = characters.indexOf(c);
            return (
              <button
                key={c}
                onClick={() => {
                  setCurrentIdx(idx);
                  setQuizResult(null);
                  setMode("animate");
                  setSearch("");
                }}
                className={`text-[13px] p-1.5 rounded-lg transition-colors ${
                  idx === currentIdx
                    ? "bg-primary text-white"
                    : done
                    ? "bg-primary-light text-primary-text"
                    : "bg-bg-sunken text-ink-secondary hover:text-ink"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
