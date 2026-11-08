"use client";

import { useMemo, useState } from "react";
import AppShell from "@/components/AppShell";
import { useProgress } from "@/hooks/useProgress";
import { useLang } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";
import { lessonList } from "@/lib/book";
import { speak } from "@/lib/tts";
import { IconVolume, IconCheck, IconChevron } from "@/components/Icons";
import { Ring } from "@/components/Ring";
import type { DWord } from "@/lib/all-words";

export default function LessonsPage() {
  const { t, lang } = useLang();
  const tr = useTranslation();
  const { progress, markWordLearned } = useProgress();
  const [open, setOpen] = useState<number | null>(null);
  const learned = useMemo(() => new Set(progress?.wordsLearned), [progress?.wordsLearned]);
  const lessons = useMemo(() => lessonList(learned), [learned]);
  const cur = lessons.find((l) => l.n === open);
  const meaningOf = (w: DWord) => tr(w.hanzi)?.meaning ?? (lang === "ru" ? w.ru : undefined) ?? w.english;

  return (
    <AppShell>
      {!cur ? (
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-ink tracking-tight">{t.lessons}</h1>
            <p className="text-[13px] text-ink-secondary mt-0.5">学在中国 · 实践教程 1</p>
          </div>
          <div className="space-y-2">
            {lessons.map((l) => (
              <button key={l.n} onClick={() => setOpen(l.n)} className="w-full flex items-center gap-3 rounded-2xl border border-border bg-bg-raised px-3.5 py-3 text-left active:scale-[0.99] transition-transform">
                <Ring pct={l.total ? (l.done / l.total) * 100 : 0} label={l.n} />
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] font-semibold text-ink truncate">{l.title}</div>
                  <div className="text-[12px] text-ink-tertiary truncate">{l.en} · {l.done}/{l.total}</div>
                </div>
                <IconChevron direction="right" className="w-4 h-4 text-ink-tertiary shrink-0" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <button onClick={() => setOpen(null)} className="flex items-center gap-1 text-[13px] font-semibold text-ink-secondary"><IconChevron direction="left" className="w-4 h-4" /> {t.lessons}</button>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#dc2626] via-[#e2431f] to-[#f97316] p-5 text-white">
            <span aria-hidden className="pointer-events-none absolute -right-2 -bottom-8 text-[150px] font-extrabold leading-none opacity-[0.13]">学</span>
            <div className="text-[12px] font-semibold opacity-85">{t.lessons} {cur.n}</div>
            <div className="mt-1 text-2xl font-extrabold tracking-tight">{cur.title}</div>
            <div className="text-[13px] opacity-90">{cur.en}</div>
            <div className="mt-3 h-1.5 rounded-full bg-white/25 overflow-hidden"><div className="h-full bg-white rounded-full" style={{ width: `${cur.total ? (cur.done / cur.total) * 100 : 0}%` }} /></div>
          </div>
          <div className="space-y-1.5">
            {cur.words.map((w) => {
              const done = learned.has(w.hanzi);
              return (
                <div key={w.hanzi} className="flex items-center gap-2.5 rounded-2xl border border-border bg-bg-raised px-3.5 py-2.5">
                  <div className="min-w-[3.5rem]">
                    <div className="text-[22px] font-bold text-ink leading-tight">{w.hanzi}</div>
                    <div className="text-[11px] text-ink-tertiary leading-tight">{w.pinyin}</div>
                  </div>
                  <div className="flex-1 text-[13px] text-ink-secondary leading-snug">{meaningOf(w)}</div>
                  <button onClick={() => speak(w.hanzi)} aria-label="Play" className="w-10 h-10 flex items-center justify-center rounded-xl text-ink-tertiary hover:text-primary hover:bg-primary-light"><IconVolume className="w-4 h-4" /></button>
                  <button
                    onClick={() => markWordLearned(w.hanzi)}
                    aria-label="Mark learned"
                    className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${done ? "bg-primary text-white" : "bg-bg-sunken text-ink-tertiary hover:text-primary"}`}
                  ><IconCheck className="w-4 h-4" /></button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </AppShell>
  );
}
