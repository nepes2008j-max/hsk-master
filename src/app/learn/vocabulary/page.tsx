"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import AppShell from "@/components/AppShell";
import { allWords, DECK_FILTERS, bookLessons, type DWord } from "@/lib/all-words";
import { speak } from "@/lib/tts";
import { useProgress } from "@/hooks/useProgress";
import { saveUserCard } from "@/lib/storage";
import { IconSearch, IconVolume, IconCheck, IconX, IconCards } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function VocabularyPage() {
  const { t, lang } = useLang();
  const tr = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedWord, setSelectedWord] = useState<DWord | null>(null);
  const [showPinyin, setShowPinyin] = useState(true);
  const [deck, setDeck] = useState<"all" | (typeof DECK_FILTERS)[number]>("all");
  const [addedCard, setAddedCard] = useState(false);
  const { progress, markWordLearned } = useProgress();

  useEffect(() => {
    if (!selectedWord) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedWord(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedWord]);

  const learnedSet = useMemo(() => new Set(progress?.wordsLearned), [progress?.wordsLearned]);

  const wordList = useMemo(() => {
    if (deck === "all") return allWords;
    const l = allWords.filter((w) => w.decks.includes(deck));
    return deck === "Book" ? l.sort((a, b) => (a.lesson ?? 0) - (b.lesson ?? 0)) : l; // Book deck: lesson by lesson
  }, [deck]);
  const meaningOf = (w: DWord) => tr(w.hanzi)?.meaning ?? (lang === "ru" ? w.ru : undefined) ?? w.english;

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

        <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
          {(["all", ...DECK_FILTERS] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDeck(d)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                deck === d ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
              }`}
            >
              {d === "all" ? "All" : d === "HSK 1" ? t.hsk1 : d === "HSK 2" ? t.hsk2 : d}
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
              className="w-full rounded-lg border border-border bg-bg-raised pl-9 pr-3 py-2.5 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowPinyin(!showPinyin)}
            className={`rounded-lg px-3.5 py-2.5 text-[14px] font-medium transition-colors ${
              showPinyin
                ? "bg-primary-light text-primary-text"
                : "bg-bg-sunken text-ink-tertiary"
            }`}
          >
            拼音
          </button>
        </div>

        <div className="space-y-0.5">
          {filtered.map((word, idx) => {
            const learned = learnedSet.has(word.hanzi);
            const lessonHead = deck === "Book" && !search && word.lesson !== filtered[idx - 1]?.lesson ? bookLessons.find((l) => l.n === word.lesson) : undefined;
            return (
              <div key={word.hanzi}>
              {lessonHead && (
                <div className="pt-4 pb-1.5 px-1 text-[12px] font-semibold uppercase tracking-wide text-ink-tertiary">
                  {`Lesson ${lessonHead.n}`} · <span className="normal-case">{lessonHead.title} — {lessonHead.en}</span>
                </div>
              )}
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedWord(word); setAddedCard(false); } }}
                onClick={() => { setSelectedWord(word); setAddedCard(false); }}
                className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left cursor-pointer transition-colors hover:bg-bg-raised active:bg-bg-sunken group ${
                  learned ? "border-l-2 border-primary" : ""
                }`}
              >
                <div className="flex flex-col min-w-[3rem]">
                  <span className="text-[17px] font-semibold text-ink leading-tight">{word.hanzi}</span>
                  {showPinyin && <span className="text-[11px] text-ink-tertiary leading-tight">{word.pinyin}</span>}
                </div>
                <span className="text-[13px] text-ink-secondary flex-1 leading-snug">{meaningOf(word)}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(word.hanzi);
                  }}
                  className="p-2 rounded-lg text-ink-tertiary hover:text-primary hover:bg-primary-light transition-colors shrink-0"
                  aria-label={`Play pronunciation of ${word.hanzi}`}
                >
                  <IconVolume className="w-4 h-4" />
                </button>
              </div>
              </div>
            );
          })}
        </div>

        {selectedWord && (
          <div
            role="dialog"
            aria-label={selectedWord.hanzi}
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
                  <div className="text-lg text-primary mt-1">{selectedWord.pinyin}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => speak(selectedWord.hanzi)}
                    aria-label="Play pronunciation"
                    className="p-2.5 rounded-xl bg-primary-light text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <IconVolume className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedWord(null)}
                    aria-label="Close"
                    className="p-2.5 rounded-xl bg-bg-sunken text-ink-tertiary hover:text-ink transition-colors"
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <div className="text-lg text-ink">{meaningOf(selectedWord)}</div>
                <div className="text-[13px] text-ink-tertiary mt-0.5 capitalize">{selectedWord.topic}</div>
              </div>

              {selectedWord.example && (
                <div className="rounded-xl bg-bg-sunken p-4 space-y-1.5">
                  <div className="text-[15px] text-ink">{selectedWord.example.hanzi}</div>
                  <div className="text-[13px] text-primary">{selectedWord.example.pinyin}</div>
                  <div className="text-[13px] text-ink-secondary">{tr(selectedWord.hanzi)?.example ?? (lang === "ru" ? selectedWord.example.ru : undefined) ?? selectedWord.example.english}</div>
                  <button
                    onClick={() => speak(selectedWord.example!.hanzi, 0.7)}
                    className="flex items-center gap-1.5 text-[13px] text-blue mt-2 hover:underline"
                  >
                    <IconVolume className="w-3.5 h-3.5" />
                    {t.vocabPage.example}
                  </button>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    markWordLearned(selectedWord.hanzi);
                    setSelectedWord(null);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white py-3 font-semibold text-[14px] transition-colors"
                >
                  <IconCheck className="w-4 h-4" />
                  {t.vocabPage.markLearned}
                </button>
                <button
                  onClick={async () => {
                    await saveUserCard({
                      id: `vocab-${selectedWord.hanzi}`,
                      front: selectedWord.hanzi,
                      back: `${selectedWord.pinyin} — ${meaningOf(selectedWord)}`,
                      pinyin: selectedWord.pinyin,
                      deck: `${selectedWord.decks[0] ?? "Vocab"} Custom`,
                      created: Date.now(),
                    });
                    setAddedCard(true);
                    setTimeout(() => setAddedCard(false), 1500);
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-border hover:border-primary hover:bg-primary-light px-4 py-3 text-[14px] text-ink-secondary hover:text-primary-text transition-colors"
                >
                  <IconCards className="w-4 h-4" />
                  {addedCard ? t.vocabPage.addedToCards : t.vocabPage.addToCards}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
