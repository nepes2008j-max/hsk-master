"use client";

import { useState, useMemo } from "react";
import AppShell from "@/components/AppShell";
import { dictionary, topics, type DictEntry } from "@/data/dictionary";
import { speak } from "@/lib/tts";
import { IconSearch, IconVolume, IconChevron } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";

export default function DictionaryPage() {
  const { t } = useLang();
  const tr = useTranslation();
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [hskFilter, setHskFilter] = useState<0 | 1 | 2>(0);
  const [showPinyin, setShowPinyin] = useState(true);

  const filtered = useMemo(() => {
    let words = dictionary;
    if (hskFilter) words = words.filter((w) => w.hsk === hskFilter);
    if (activeTopic) words = words.filter((w) => w.topic === activeTopic);
    if (search) {
      const q = search.toLowerCase();
      words = words.filter(
        (w) =>
          w.hanzi.includes(search) ||
          w.pinyin.toLowerCase().includes(q) ||
          w.english.toLowerCase().includes(q)
      );
    }
    return words;
  }, [search, activeTopic, hskFilter]);

  const topicCounts = useMemo(() => {
    const counts = new Map<string, number>();
    const source = hskFilter ? dictionary.filter((w) => w.hsk === hskFilter) : dictionary;
    for (const w of source) {
      counts.set(w.topic, (counts.get(w.topic) || 0) + 1);
    }
    return counts;
  }, [hskFilter]);

  const currentTopicLabel = activeTopic
    ? topics.find((t) => t.id === activeTopic)?.label
    : null;

  return (
    <AppShell>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ink tracking-tight">
            {t.dictPage.title}
            <span className="text-[14px] font-normal text-ink-tertiary ml-2">
              {filtered.length} {t.dictPage.words}
            </span>
          </h1>
          <div className="flex gap-1.5">
            {([0, 1, 2] as const).map((l) => (
              <button
                key={l}
                onClick={() => setHskFilter(l)}
                className={`rounded-lg px-2.5 py-1 text-[12px] font-medium transition-colors ${
                  hskFilter === l ? "bg-primary text-white" : "bg-bg-sunken text-ink-tertiary"
                }`}
              >
                {l === 0 ? "All" : `HSK ${l}`}
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
        {!search && (
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
                {topics.map((topic) => {
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
        {(activeTopic || search) && (
          <div className="space-y-0.5">
            {filtered.map((word, i) => (
              <div
                key={`${word.hanzi}-${i}`}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 hover:bg-bg-raised active:bg-bg-sunken transition-colors"
              >
                <div className="flex flex-col min-w-[3rem]">
                  <span className="text-[17px] font-semibold text-ink leading-tight">{word.hanzi}</span>
                  {showPinyin && <span className="text-[11px] text-ink-tertiary leading-tight">{word.pinyin}</span>}
                </div>
                <span className="text-[13px] text-ink-secondary flex-1 leading-snug">{tr(word.hanzi)?.meaning ?? word.english}</span>
                {word.hsk && (
                  <span className="text-[10px] font-bold text-primary bg-primary-light rounded px-1.5 py-0.5 shrink-0">
                    HSK{word.hsk}
                  </span>
                )}
                <button
                  onClick={() => speak(word.hanzi)}
                  className="p-2 rounded-lg text-ink-tertiary hover:text-primary hover:bg-primary-light transition-colors shrink-0"
                >
                  <IconVolume className="w-4 h-4" />
                </button>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-12 text-[14px] text-ink-tertiary">
                No words found.
              </div>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
