"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { getProgress, type ProgressData } from "@/lib/storage";
import { IconSearch, IconFire, IconStar, IconPlay, IconChevron } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { books } from "@/lib/books";
import { load as loadStats } from "@/lib/exstats";
import { levelOf } from "@/lib/exercises";
import { allWords } from "@/lib/all-words";

const SERIF = { fontFamily: "'Noto Serif SC','Noto Serif CJK SC',serif" };

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  const isGamified = progress?.mode === "gamified";
  const [exStats, setExStats] = useState<ReturnType<typeof loadStats>>({ words: {}, lessons: {} });
  useEffect(() => { setExStats(loadStats()); }, []);
  // lesson to continue: a started-but-unfinished one first, else the first untouched one (xzzg book first)
  const next = (() => {
    const all = [books[1], books[0], books[2]].flatMap((b) => b.lessons.filter((l) => l.words.length > 2).map((l) => ({ b, l, lv: levelOf(l.words, exStats, exStats.lessons[`${b.id}-${l.id}`]) })));
    const pick = all.find((x) => x.lv === "attempted" || x.lv === "familiar") ?? all.find((x) => x.lv === "new");
    if (!pick) return null;
    const cov = pick.l.words.filter((w) => (exStats.words[w.hanzi]?.c ?? 0) >= 2).length;
    return { ...pick, pct: Math.round((cov / pick.l.words.length) * 100) };
  })();

  // Destinations that are NOT bottom-bar tabs (Home / Dict / Lessons / Cards); the rest live under More.
  const quick = [
    { href: "/learn/vocabulary", title: t.dashboard.vocabulary, ch: "字" },
    { href: "/learn/grammar", title: t.dashboard.grammarLabel, ch: "语" },
    { href: "/reading", title: t.reading, ch: "读" },
    { href: "/learn/characters", title: t.dashboard.characters, ch: "写" },
  ] as const;
  const TOTAL = allWords.length; // same list the Vocabulary page counts
  const learned = progress?.wordsLearned.length ?? 0;
  const chip = "flex h-9 items-center gap-1.5 rounded-full bg-white/30 px-3 text-[13px] font-bold on-glow tabular-nums backdrop-blur";

  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-[19px] font-extrabold tracking-tight on-glow">HSK Master</div>
          <div className="flex items-center gap-2">
            <div className={chip} aria-label={t.dashboard.streak}><IconFire className="w-4 h-4" />{progress?.streak ?? 0}</div>
            {isGamified && <div className={chip} aria-label={t.lp.xp}><IconStar className="w-4 h-4" />{progress?.xp ?? 0}</div>}
          </div>
        </div>

        <Link href="/dictionary" className="search-pill flex items-center gap-2.5 h-12 rounded-2xl border border-border bg-bg-raised px-3.5 text-[15px] text-ink-tertiary shadow-md shadow-black/10">
          <IconSearch className="w-[18px] h-[18px]" />
          {t.vocabPage.search}
        </Link>

        {next ? (
          <section aria-labelledby="next-title" className="rounded-[22px] bg-[var(--night)] p-5 text-white shadow-xl shadow-black/20">
            <div className="flex items-center justify-between gap-3 text-[12px] font-semibold uppercase tracking-wider text-white/60">
              <span>{t.dashboard.nextLesson}</span>
              <span className="truncate normal-case tracking-normal">{next.b.title}</span>
            </div>
            <div className="mt-4 flex items-end gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#e8401c] text-[24px] font-bold" style={SERIF} aria-hidden>{next.l.id}</div>
              <div className="min-w-0">
                <h2 id="next-title" className="text-[24px] font-bold leading-tight line-clamp-2" style={SERIF} lang="zh">{next.l.title}</h2>
                <div className="mt-0.5 text-[14px] text-white/70 line-clamp-1">{t.lp.lessonWord} {next.l.id} · {lang === "ru" && next.l.titleRu ? next.l.titleRu : next.l.titleEn}</div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 text-[12px] font-semibold text-white/70 tabular-nums">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-valuenow={next.pct} aria-valuemin={0} aria-valuemax={100} aria-label={t.lp.mastery}>
                <div className="h-full rounded-full bg-[#ff6a3d]" style={{ width: `${Math.max(next.pct, 2)}%` }} />
              </div>
              {next.pct}% · {next.l.words.length} {t.dashboard.wordsWord}
            </div>
            <Link href={`/books?play=${next.b.id}-${next.l.id}`} className="mt-5 flex h-14 items-center justify-between rounded-2xl bg-white pl-5 pr-2 text-[17px] font-extrabold text-ink active:scale-[0.98] transition-transform motion-reduce:transition-none">
              {next.lv === "new" ? t.lp.start : t.continue}
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8401c] text-white" aria-hidden><IconPlay className="h-5 w-5" /></span>
            </Link>
          </section>
        ) : (
          <Link href="/books" className="flex h-14 items-center justify-between rounded-2xl bg-[var(--night)] pl-5 pr-2 text-[17px] font-extrabold text-white">
            {t.lp.chooseBook}
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8401c]" aria-hidden><IconChevron className="h-5 w-5" /></span>
          </Link>
        )}

        <Link href="/learn/vocabulary" className="flex min-h-[52px] items-center gap-3 rounded-[20px] border border-border bg-bg-raised px-4 py-3 shadow-sm active:scale-[0.99] transition-transform motion-reduce:transition-none">
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2 text-[13px]">
              <span className="font-semibold text-ink-secondary">{t.vocabPage.learned}</span>
              <span className="text-ink-tertiary tabular-nums"><b className="text-[15px] text-ink">{learned}</b> {t.dashboard.ofWords} {TOTAL.toLocaleString(lang)} {t.dashboard.wordsWord}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg-sunken">
              <div className="h-full rounded-full bg-[#e8401c]" style={{ width: `${Math.min(100, (learned / TOTAL) * 100)}%` }} />
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-2.5">
          {quick.map(({ href, title, ch }) => (
            <Link key={href} href={href} className="flex min-h-[56px] items-center gap-3 rounded-[20px] border border-border bg-bg-raised px-3.5 py-2.5 shadow-sm active:scale-[0.97] transition-transform motion-reduce:transition-none">
              <span className="text-[24px] font-bold leading-none text-[#e8401c]" style={SERIF} aria-hidden>{ch}</span>
              <span className="min-w-0 text-[14px] font-bold leading-tight text-ink">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
