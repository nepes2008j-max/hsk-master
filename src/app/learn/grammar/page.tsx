"use client";

import { useState, useMemo } from "react";
import AppShell from "@/components/AppShell";
import { grammar, type GrammarPoint } from "@/data/grammar";
import { grammar2 } from "@/data/grammar2";
import { speak } from "@/lib/tts";
import { useProgress } from "@/hooks/useProgress";
import { IconVolume, IconCheck, IconChevron } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { useGrammarTranslation } from "@/hooks/useGrammarTranslation";

export default function GrammarPage() {
  const { t } = useLang();
  const gt = useGrammarTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [level, setLevel] = useState<1 | 2>(1);
  const { progress, markGrammarCompleted } = useProgress();

  const completedSet = useMemo(() => new Set(progress?.grammarCompleted), [progress?.grammarCompleted]);

  const grammarList = level === 1 ? grammar : grammar2;
  const categories = useMemo(() => [...new Set(grammarList.map((g) => g.category))], [grammarList]);

  const filtered = activeCategory
    ? grammarList.filter((g) => g.category === activeCategory)
    : grammarList;

  return (
    <AppShell>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ink tracking-tight">{t.grammarPage.title}</h1>
          <span className="text-[13px] text-ink-tertiary">
            {progress?.grammarCompleted.length ?? 0}/{grammarList.length} {t.testPage.completed}
          </span>
        </div>

        <div className="flex gap-1.5">
          {([1, 2] as const).map((l) => (
            <button
              key={l}
              onClick={() => { setLevel(l); setActiveCategory(null); }}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                level === l
                  ? "bg-primary text-white"
                  : "bg-bg-sunken text-ink-secondary hover:text-ink"
              }`}
            >
              {l === 1 ? t.hsk1 : t.hsk2}
            </button>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
              !activeCategory
                ? "bg-primary text-white"
                : "bg-bg-sunken text-ink-secondary hover:text-ink"
            }`}
          >
            {t.grammarPage.all}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-medium capitalize transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-bg-sunken text-ink-secondary hover:text-ink"
              }`}
            >
              {cat.replace(/-/g, " ")}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((point) => {
            const completed = completedSet.has(point.id);
            const expanded = expandedId === point.id;
            const tr = gt(point.id);

            return (
              <div
                key={point.id}
                className={`rounded-xl border transition-colors ${
                  completed
                    ? "border-primary/30 bg-primary-light/30"
                    : "border-border bg-bg-raised"
                }`}
              >
                <button
                  onClick={() => setExpandedId(expanded ? null : point.id)}
                  className="w-full flex items-center gap-3 p-4 text-left"
                >
                  {completed && <IconCheck className="w-4.5 h-4.5 text-primary shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold text-ink">{tr?.title ?? point.title}</div>
                    <div className="text-[13px] text-ink-tertiary font-mono mt-0.5">{point.pattern}</div>
                  </div>
                  <IconChevron
                    direction={expanded ? "up" : "down"}
                    className="w-4 h-4 text-ink-tertiary shrink-0 transition-transform"
                  />
                </button>

                {expanded && (
                  <div className="border-t border-border px-4 pb-4 pt-3 space-y-4">
                    <p className="text-[14px] text-ink-secondary leading-relaxed">{tr?.explanation ?? point.explanation}</p>

                    <div className="space-y-2">
                      {point.examples.map((ex, i) => (
                        <div
                          key={i}
                          className="rounded-xl bg-bg-sunken p-3.5 flex items-start gap-3"
                        >
                          <div className="flex-1 space-y-0.5">
                            <div className="text-[15px] text-ink">{ex.hanzi}</div>
                            <div className="text-[13px] text-primary">{ex.pinyin}</div>
                            <div className="text-[13px] text-ink-secondary">{tr?.examples[i] ?? ex.english}</div>
                          </div>
                          <button
                            onClick={() => speak(ex.hanzi, 0.7)}
                            className="p-1.5 rounded-lg text-ink-tertiary hover:text-primary hover:bg-primary-light transition-colors shrink-0"
                          >
                            <IconVolume className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {!completed && (
                      <button
                        onClick={() => markGrammarCompleted(point.id)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white py-2.5 text-[14px] font-semibold transition-colors"
                      >
                        <IconCheck className="w-4 h-4" />
                        {t.vocabPage.markLearned}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
