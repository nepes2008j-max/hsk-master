"use client";

import { useState, useMemo, useCallback } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary, type Word } from "@/data/vocabulary";
import { vocabulary2 } from "@/data/vocabulary2";
import { speak } from "@/lib/tts";
import { useProgress } from "@/hooks/useProgress";
import { IconSearch, IconVolume, IconCheck, IconX } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function VocabularyPage() {
  const { t } = useLang();
  const tr = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [showPinyin, setShowPinyin] = useState(true);
  const [level, setLevel] = useState<1 | 2>(1);
  const { progress, markWordLearned } = useProgress();

  const learnedSet = useMemo(() => new Set(progress?.wordsLearned), [progress?.wordsLearned]);

  const wordList = level === 1 ? vocabulary : vocabulary2;

  const filtered = useMemo(() => {
    if (!search) return wordList;
    const q = search.toLowerCase();
    return wordList.filter(
      (w) =>
        w.hanzi.includes(search) ||
        w.pinyin.toLowerCase().includes(q) ||
        w.english.toLowerCase().includes(q)
    );
  }, [search, wordList]);

  return (
    <AppShell>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ink tracking-tight">{t.vocabPage.title}</h1>
          <span className="text-[13px] text-ink-tertiary">
            {progress?.wordsLearned.length ?? 0}/{wordList.length} {t.vocabPage.learned}
          </span>
        </div>

        <div className="flex gap-1.5">
          {([1, 2] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                level === l
                  ? "bg-jade text-white"
                  : "bg-bg-sunken text-ink-secondary hover:text-ink"
              }`}
            >
              {l === 1 ? t.hsk1 : t.hsk2}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.vocabPage.search}
              className="w-full rounded-lg border border-border bg-bg-raised pl-9 pr-3 py-2.5 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade/20 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowPinyin(!showPinyin)}
            className={`rounded-lg px-3.5 py-2.5 text-[14px] font-medium transition-colors ${
              showPinyin
                ? "bg-jade-light text-jade-text"
                : "bg-bg-sunken text-ink-tertiary"
            }`}
          >
            拼音
          </button>
        </div>

        <div className="space-y-0.5">
          {filtered.map((word) => {
            const learned = learnedSet.has(word.hanzi);
            return (
              <button
                key={word.id}
                onClick={() => setSelectedWord(word)}
                className={`w-full flex items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-colors hover:bg-bg-raised group ${
                  learned ? "border-l-2 border-jade" : ""
                }`}
              >
                <span className="text-lg font-semibold text-ink min-w-[3rem]">{word.hanzi}</span>
                {showPinyin && (
                  <span className="text-[13px] text-ink-tertiary min-w-[4rem]">{word.pinyin}</span>
                )}
                <span className="text-[14px] text-ink-secondary flex-1">{tr(word.hanzi)?.meaning ?? word.english}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(word.hanzi);
                  }}
                  className="p-1.5 rounded-lg text-ink-tertiary hover:text-jade hover:bg-jade-light transition-colors"
                  aria-label={`Play pronunciation of ${word.hanzi}`}
                >
                  <IconVolume className="w-4.5 h-4.5" />
                </button>
              </button>
            );
          })}
        </div>

        {selectedWord && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setSelectedWord(null)}
          >
            <div
              className="w-full max-w-md rounded-2xl bg-bg-raised border border-border shadow-xl p-6 space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-4xl font-bold text-ink">{selectedWord.hanzi}</div>
                  <div className="text-lg text-jade mt-1">{selectedWord.pinyin}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => speak(selectedWord.hanzi)}
                    className="p-2.5 rounded-xl bg-jade-light text-jade hover:bg-jade hover:text-white transition-colors"
                  >
                    <IconVolume className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedWord(null)}
                    className="p-2.5 rounded-xl bg-bg-sunken text-ink-tertiary hover:text-ink transition-colors"
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <div className="text-lg text-ink">{tr(selectedWord.hanzi)?.meaning ?? selectedWord.english}</div>
                <div className="text-[13px] text-ink-tertiary mt-0.5 capitalize">{selectedWord.category}</div>
              </div>

              <div className="rounded-xl bg-bg-sunken p-4 space-y-1.5">
                <div className="text-[15px] text-ink">{selectedWord.example.hanzi}</div>
                <div className="text-[13px] text-jade">{selectedWord.example.pinyin}</div>
                <div className="text-[13px] text-ink-secondary">{tr(selectedWord.hanzi)?.example ?? selectedWord.example.english}</div>
                <button
                  onClick={() => speak(selectedWord.example.hanzi, 0.7)}
                  className="flex items-center gap-1.5 text-[13px] text-blue mt-2 hover:underline"
                >
                  <IconVolume className="w-3.5 h-3.5" />
                  {t.vocabPage.example}
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    markWordLearned(selectedWord.hanzi);
                    setSelectedWord(null);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-jade hover:bg-jade-hover text-white py-3 font-semibold text-[14px] transition-colors"
                >
                  <IconCheck className="w-4 h-4" />
                  {t.vocabPage.markLearned}
                </button>
                <button
                  onClick={() => setSelectedWord(null)}
                  className="rounded-xl border border-border hover:border-border-strong px-5 py-3 text-[14px] text-ink-secondary transition-colors"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
