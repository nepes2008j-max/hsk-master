"use client";

import { useState } from "react";
import AppShell from "@/components/AppShell";
import { categories, mathExpressions, type AcademicCategory } from "@/data/academic-vocab";
import { speak } from "@/lib/tts";
import { saveUserCard, type UserCard } from "@/lib/storage";
import { IconVolume, IconCheck } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import PremiumGate from "@/components/PremiumGate";

export default function AcademicPage() {
  const { t } = useLang();
  const [tab, setTab] = useState<"vocab" | "expressions">("vocab");
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [addedAll, setAddedAll] = useState(false);

  const filtered: AcademicCategory[] =
    selectedCat === "all" ? categories : categories.filter((c) => c.id === selectedCat);

  const handleAddAllToCards = async () => {
    const allWords = selectedCat === "all"
      ? categories.flatMap((c) => c.words)
      : categories.find((c) => c.id === selectedCat)?.words ?? [];

    const deckName = selectedCat === "all"
      ? "STEM"
      : categories.find((c) => c.id === selectedCat)?.nameEn ?? "STEM";

    for (const w of allWords) {
      const card: UserCard = {
        id: `stem-${w.id}`,
        front: w.hanzi,
        back: `${w.pinyin} — ${w.english}`,
        pinyin: w.pinyin,
        deck: deckName,
        created: Date.now(),
      };
      await saveUserCard(card);
    }
    setAddedAll(true);
    setTimeout(() => setAddedAll(false), 2000);
  };

  const tabs = [
    { key: "vocab" as const, label: t.academicPage.categories },
    { key: "expressions" as const, label: t.academicPage.expressions },
  ];

  return (
    <AppShell>
      <PremiumGate>
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-ink tracking-tight">{t.academicPage.title}</h1>
          <p className="text-[13px] text-ink-tertiary mt-1">{t.academicPage.desc}</p>
        </div>

        <div className="flex gap-1 p-1 rounded-xl bg-bg-sunken">
          {tabs.map((tb) => (
            <button
              key={tb.key}
              onClick={() => setTab(tb.key)}
              className={`flex-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                tab === tb.key
                  ? "bg-bg-raised text-ink shadow-sm"
                  : "text-ink-tertiary hover:text-ink-secondary"
              }`}
            >
              {tb.label}
            </button>
          ))}
        </div>

        {/* ── Vocabulary ── */}
        {tab === "vocab" && (
          <div className="space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedCat("all")}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  selectedCat === "all" ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                }`}
              >
                {t.academicPage.allCategories}
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCat(c.id)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    selectedCat === c.id ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <button
              onClick={handleAddAllToCards}
              className="w-full rounded-xl bg-primary hover:bg-primary-hover text-white py-2.5 text-[14px] font-medium transition-colors flex items-center justify-center gap-2"
            >
              {addedAll ? (
                <><IconCheck className="w-4 h-4" /> {t.academicPage.addedToCards}</>
              ) : (
                t.academicPage.addToCards
              )}
            </button>

            {filtered.map((cat) => (
              <div key={cat.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-[15px] font-semibold text-ink">{cat.name} <span className="text-ink-tertiary font-normal">{cat.nameEn}</span></h2>
                  <span className="text-[12px] text-ink-tertiary">{cat.words.length} {t.academicPage.words}</span>
                </div>
                <div className="space-y-1">
                  {cat.words.map((w) => (
                    <div key={w.id} className="flex items-center gap-3 rounded-xl bg-bg-raised border border-border p-3">
                      <button
                        onClick={() => speak(w.hanzi)}
                        className="p-1.5 rounded-lg text-ink-tertiary hover:text-primary hover:bg-primary-light transition-colors shrink-0"
                        aria-label={`Play ${w.hanzi}`}
                      >
                        <IconVolume className="w-4 h-4" />
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="text-[16px] font-medium text-ink">{w.hanzi}</div>
                        <div className="text-[13px] text-primary">{w.pinyin}</div>
                      </div>
                      <div className="text-[13px] text-ink-secondary text-right">{w.english}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Math Expressions ── */}
        {tab === "expressions" && (
          <div className="space-y-3">
            <p className="text-[13px] text-ink-secondary">{t.academicPage.expressionsDesc}</p>
            <div className="space-y-1.5">
              {mathExpressions.map((expr, i) => (
                <div key={i} className="rounded-xl bg-bg-raised border border-border p-3.5">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => speak(expr.chinese)}
                      className="p-1.5 rounded-lg text-ink-tertiary hover:text-primary hover:bg-primary-light transition-colors shrink-0 mt-0.5"
                      aria-label={`Play ${expr.chinese}`}
                    >
                      <IconVolume className="w-4 h-4" />
                    </button>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="text-[18px] font-mono font-medium text-ink">{expr.expression}</div>
                      <div className="text-[16px] text-ink">{expr.chinese}</div>
                      <div className="text-[13px] text-primary">{expr.pinyin}</div>
                      <div className="text-[12px] text-ink-tertiary">{expr.english}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </PremiumGate>
    </AppShell>
  );
}
