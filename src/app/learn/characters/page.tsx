"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary } from "@/data/vocabulary";
import { speak } from "@/lib/tts";
import { useProgress } from "@/hooks/useProgress";
import { IconPlay, IconBrush, IconVolume, IconChevron, IconCheck } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

const characters = [...new Set(vocabulary.map((w) => w.hanzi).join(""))].slice(0, 100);

type HanziWriterInstance = {
  animateCharacter: () => void;
  quiz: (opts: { onComplete: (data: { totalMistakes: number }) => void }) => void;
  hideCharacter: () => void;
  showCharacter: () => void;
  setCharacter: (char: string) => void;
};

export default function CharactersPage() {
  const { t } = useLang();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mode, setMode] = useState<"animate" | "quiz">("animate");
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const writerRef = useRef<HanziWriterInstance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress, markCharacterPracticed } = useProgress();

  const char = characters[currentIdx];

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
            ? "Perfect! No mistakes."
            : `Completed with ${mistakes} mistake${mistakes > 1 ? "s" : ""}.`
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

  const practiced = progress?.charactersPracticed.includes(char);

  return (
    <AppShell>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ink tracking-tight">{t.charsPage.title}</h1>
          <span className="text-[13px] text-ink-tertiary">
            {progress?.charactersPracticed.length ?? 0}/{characters.length}
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
              {practiced && <IconCheck className="w-3.5 h-3.5 text-jade" />}
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
                ? "bg-jade text-white"
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
                ? "bg-jade text-white"
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
          <div className="text-center text-[14px] font-semibold text-jade">
            {quizResult}
          </div>
        )}

        <div className="grid grid-cols-10 gap-1 mt-4">
          {characters.map((c, i) => {
            const done = progress?.charactersPracticed.includes(c);
            return (
              <button
                key={c}
                onClick={() => {
                  setCurrentIdx(i);
                  setQuizResult(null);
                  setMode("animate");
                }}
                className={`text-[13px] p-1.5 rounded-lg transition-colors ${
                  i === currentIdx
                    ? "bg-jade text-white"
                    : done
                    ? "bg-jade-light text-jade-text"
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
