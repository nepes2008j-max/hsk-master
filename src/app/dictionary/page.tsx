"use client";

import { useState, useMemo, useEffect } from "react";
import AppShell from "@/components/AppShell";
import { topics } from "@/data/dictionary";
import { allWords, DECK_FILTERS, type DWord } from "@/lib/all-words";
import StrokeChar from "@/components/StrokeChar";
import { loadCedict, searchCedict } from "@/lib/cedict";
import { speak } from "@/lib/tts";
import { IconSearch, IconVolume, IconChevron } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";

const noTone = (x: string) => x.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toLowerCase();

export default function DictionaryPage() {
  const { t, lang } = useLang();
  const tr = useTranslation();
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [deckFilter, setDeckFilter] = useState<"all" | (typeof DECK_FILTERS)[number]>("all");
  const [openWord, setOpenWord] = useState<string | null>(null);
  const [cedictState, setCedictState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [cedictHits, setCedictHits] = useState<DWord[]>([]);
  const known = useMemo(() => new Set(allWords.map((w) => w.hanzi)), []);
  useEffect(() => {
    const q = search.trim();
    if (!q) { setCedictHits([]); return; }
    let dead = false;
    setCedictState((s) => (s === "ready" ? s : "loading"));
    loadCedict()
      .then((all) => { if (!dead) { setCedictState("ready"); setCedictHits(searchCedict(all, q, known)); } })
      .catch(() => { if (!dead) setCedictState("error"); });
    return () => { dead = true; };
  }, [search, known]);
  const [showPinyin, setShowPinyin] = useState(true);

  const filtered = useMemo(() => {
    let words = allWords;
    if (deckFilter !== "all") words = words.filter((w) => w.decks.includes(deckFilter));
    if (deckFilter === "Book") words = [...words].sort((a, b) => (a.lesson ?? 0) - (b.lesson ?? 0)); // lesson by lesson
    if (activeTopic) words = words.filter((w) => w.topic === activeTopic);
    if (search) {
      const q = search.toLowerCase();
      words = words.filter(
        (w) =>
          w.hanzi.includes(search) ||
          w.pinyin.toLowerCase().includes(q) ||
          noTone(w.pinyin).includes(noTone(search)) ||
          w.english.toLowerCase().includes(q)
      );
    }
    return words;
  }, [search, activeTopic, deckFilter]);

  const topicCounts = useMemo(() => {
    const counts = new Map<string, number>();
    const source = deckFilter !== "all" ? allWords.filter((w) => w.decks.includes(deckFilter)) : allWords;
    for (const w of source) {
      const tp = w.topic ?? "hsk";
      counts.set(tp, (counts.get(tp) || 0) + 1);
    }
    return counts;
  }, [deckFilter]);

  const allTopics = [...topics, { id: "hsk", label: "HSK 词汇 HSK words", icon: "" }, { id: "stem", label: "STEM / CSCA", icon: "" }, { id: "special", label: "特别 Special", icon: "" }];

  const currentTopicLabel = activeTopic
    ? allTopics.find((t) => t.id === activeTopic)?.label
    : null;

  const meaningOf = (w: DWord) => tr(w.hanzi)?.meaning ?? (lang === "ru" ? w.ru : undefined) ?? w.english;

  const renderWord = (word: DWord, i: number) => {
              const id = `${word.hanzi}|${word.pinyin}`;
              const open = openWord === id;
              const chars = [...new Set([...word.hanzi].filter((c) => /[\u4e00-\u9fff]/.test(c)))].slice(0, 6);
              const exTr = tr(word.hanzi)?.example;
              return (
                <div key={`${word.hanzi}-${i}`}>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={open}
                    onClick={() => setOpenWord(open ? null : id)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenWord(open ? null : id); } }}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-bg-raised active:bg-bg-sunken transition-colors ${open ? "bg-bg-raised" : ""}`}
                  >
                    <div className="flex flex-col min-w-[3rem]">
                      <span className="text-[17px] font-semibold text-ink leading-tight">{word.hanzi}</span>
                      {showPinyin && <span className="text-[11px] text-ink-secondary leading-tight">{word.pinyin}</span>}
                    </div>
                    <span className="text-[13px] text-ink-secondary flex-1 leading-snug">{meaningOf(word)}</span>
                    {word.hsk && (
                      <span className="text-[10px] font-bold text-primary bg-primary-light rounded px-1.5 py-0.5 shrink-0">
                        HSK{word.hsk}
                      </span>
                    )}
                    {deckFilter === "Book" && word.lesson && (
                      <span className="text-[10px] font-bold text-ink-secondary bg-bg-sunken rounded px-1.5 py-0.5 shrink-0">L{word.lesson}</span>
                    )}
                    <button
                      onClick={(e) => { e.stopPropagation(); speak(word.hanzi); }}
                      aria-label="Play audio"
                      className="w-10 h-10 flex items-center justify-center rounded-lg text-ink-secondary hover:text-primary hover:bg-primary-light transition-colors shrink-0"
                    >
                      <IconVolume className="w-4 h-4" />
                    </button>
                  </div>
                  {open && (
                    <div className="mx-1 mb-2 rounded-xl border border-border bg-bg-raised p-4 space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-ink">{word.hanzi}</div>
                        <div className="text-[15px] text-primary">{word.pinyin}</div>
                        <div className="text-[14px] text-ink mt-1">{meaningOf(word)}</div>
                        {meaningOf(word) !== word.english && <div className="text-[13px] text-ink-secondary">{word.english}</div>}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {word.decks.map((d) => (
                            <span key={d} className="text-[11px] font-medium text-ink-secondary bg-bg-sunken rounded px-2 py-0.5">{d}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wide font-semibold text-ink-secondary mb-1.5">{t.dictPage.example}</div>
                        {word.example ? (
                          <div className="space-y-0.5">
                            <div className="flex items-start gap-2">
                              <div className="text-[16px] text-ink flex-1">{word.example.hanzi}</div>
                              <button onClick={() => speak(word.example!.hanzi)} aria-label="Play example" className="w-10 h-10 -mt-2 flex items-center justify-center rounded-lg text-ink-secondary hover:text-primary shrink-0"><IconVolume className="w-4 h-4" /></button>
                            </div>
                            <div className="text-[13px] text-primary">{word.example.pinyin}</div>
                            <div className="text-[13px] text-ink-secondary">{exTr ?? (lang === "ru" ? word.example.ru : undefined) ?? word.example.english}</div>
                          </div>
                        ) : (
                          <div className="text-[13px] text-ink-secondary">{t.dictPage.noExample}</div>
                        )}
                      </div>
                      {chars.length > 0 && (
                        <div>
                          <div className="text-[11px] uppercase tracking-wide font-semibold text-ink-secondary mb-1.5">{t.dictPage.howToWrite}</div>
                          <div className="flex flex-col gap-4">
                            {chars.map((c) => <StrokeChar key={c} ch={c} />)}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            };

  return (
    <AppShell>
      <div className="space-y-5">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-ink tracking-tight">
            {t.dictPage.title}
            <span className="text-[14px] font-normal text-ink-tertiary ml-2">
              {filtered.length} {t.dictPage.words}
            </span>
          </h1>
          <p className="text-[13px] text-ink-secondary">{t.dictPage.searchAll}</p>
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
            {(["all", ...DECK_FILTERS] as const).map((l) => (
              <button
                key={l}
                onClick={() => { setDeckFilter(l); setActiveTopic(null); }}
                className={`shrink-0 rounded-lg px-2.5 py-2 text-[12px] font-medium transition-colors ${
                  deckFilter === l ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary"
                }`}
              >
                {l === "all" ? "All" : l}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-tertiary" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.dictPage.searchPlaceholder}
              className="w-full rounded-xl border border-border bg-bg-raised pl-9 pr-3 py-2.5 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowPinyin(!showPinyin)}
            className={`rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors ${
              showPinyin ? "bg-primary-light text-primary-text" : "bg-bg-sunken text-ink-tertiary"
            }`}
          >
            拼音
          </button>
        </div>

        {/* Topics */}
        {!search && deckFilter === "all" && (
          <div className="space-y-2">
            {activeTopic ? (
              <button
                onClick={() => setActiveTopic(null)}
                className="flex items-center gap-1 text-[13px] text-primary hover:underline"
              >
                <IconChevron direction="left" className="w-3.5 h-3.5" />
                {t.dictPage.allTopics}
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {allTopics.map((topic) => {
                  const count = topicCounts.get(topic.id) || 0;
                  if (count === 0) return null;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setActiveTopic(topic.id)}
                      className="flex items-center justify-between rounded-xl border border-border bg-bg-raised p-3 text-left hover:border-border-strong transition-colors"
                    >
                      <div>
                        <div className="text-[14px] font-semibold text-ink">{topic.label}</div>
                        <div className="text-[12px] text-ink-tertiary">{count} words</div>
                      </div>
                      <IconChevron direction="right" className="w-3.5 h-3.5 text-ink-tertiary" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Active topic header */}
        {currentTopicLabel && !search && (
          <div className="text-lg font-bold text-ink">{currentTopicLabel}</div>
        )}

        {/* Word list (shown when topic selected or searching) */}
        {(activeTopic || search || deckFilter !== "all") && (
          <div className="space-y-0.5">
            {filtered.map(renderWord)}
            {search.trim() && (
              <div className="pt-4 space-y-0.5">
                <div className="px-3 text-[11px] uppercase tracking-wide font-semibold text-ink-secondary">
                  {t.dictPage.moreWords}
                </div>
                {cedictState === "loading" && cedictHits.length === 0 && <div className="px-3 py-3 text-[13px] text-ink-secondary">{t.dictPage.loadingMore}</div>}
                {cedictState === "error" && <div className="px-3 py-3 text-[13px] text-ink-secondary">{t.dictPage.offlineMore}</div>}
                {cedictHits.map((w, i) => renderWord(w, 100000 + i))}
              </div>
            )}
            {filtered.length === 0 && (
              <div className="text-center py-12 text-[14px] text-ink-tertiary">
                No words found.
              </div>
            )}
          </div>
        )}
        <p className="text-[11px] text-ink-secondary pt-2">
          Extra words: CC-CEDICT (CC BY-SA 4.0). Stroke order: Hanzi Writer / Make Me a Hanzi.
        </p>
      </div>
    </AppShell>
  );
}
