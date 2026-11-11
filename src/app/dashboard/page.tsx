"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { getProgress, type ProgressData } from "@/lib/storage";
import { IconSearch, IconCards, IconClipboard, IconFire, IconStar, IconGlobe, IconGamepad, IconBeaker } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { books } from "@/lib/books";
import { load as loadStats } from "@/lib/exstats";
import { levelOf } from "@/lib/exercises";

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const { t } = useLang();

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  const isGamified = progress?.mode === "gamified";
  const [exStats, setExStats] = useState<ReturnType<typeof loadStats>>({ words: {}, lessons: {} });
  useEffect(() => { setExStats(loadStats()); }, []);
  // lesson to continue: a started-but-unfinished one first, else the first untouched one (xzzg book first)
  const nextLesson = (() => {
    const all = [books[1], books[0], books[2]].flatMap((b) => b.lessons.filter((l) => l.words.length > 2).map((l) => ({ b, l, lv: levelOf(l.words, exStats, exStats.lessons[`${b.id}-${l.id}`]) })));
    const pick = all.find((x) => x.lv === "attempted" || x.lv === "familiar") ?? all.find((x) => x.lv === "new");
    if (!pick) return null;
    const cov = pick.l.words.filter((w) => (exStats.words[w.hanzi]?.c ?? 0) >= 2).length;
    return { n: pick.l.id, title: pick.l.title, en: pick.l.titleEn, book: pick.b.title, pct: Math.round((cov / pick.l.words.length) * 100), total: pick.l.words.length };
  })();

  // 2x2 tiles (Chinese character icons, like the Sunrise design) + a scrolling row of pills for the rest.
  const quick = [
    { href: "/learn/vocabulary", title: t.dashboard.vocabulary, ch: "字" },
    { href: "/learn/grammar", title: t.dashboard.grammarLabel, ch: "语" },
    { href: "/reading", title: t.reading, ch: "读" },
    { href: "/learn/characters", title: t.dashboard.characters, ch: "写" },
  ] as const;
  const more = [
    { href: "/dictionary", title: t.dictPage.title, Icon: IconGlobe },
    { href: "/cards", title: t.cards, Icon: IconCards },
    { href: "/test", title: t.test, Icon: IconClipboard },
    { href: "/games", title: t.games, Icon: IconGamepad },
    { href: "/academic", title: t.academic, Icon: IconBeaker },
  ] as const;
  const TOTAL = 1200; // HSK 1-2 + book words, for the ring
  const learned = progress?.wordsLearned.length ?? 0;

  return (
    <AppShell>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-[19px] font-extrabold tracking-tight on-glow">HSK Master</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1.5 text-[13px] font-bold on-glow tabular-nums backdrop-blur">
              <IconFire className="w-4 h-4" />{progress?.streak ?? 0}
            </div>
            {isGamified && (
              <div className="flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1.5 text-[13px] font-bold on-glow tabular-nums backdrop-blur">
                <IconStar className="w-4 h-4" />{progress?.xp ?? 0}
              </div>
            )}
          </div>
        </div>

        <Link href="/dictionary" className="flex items-center gap-2.5 h-12 rounded-2xl border border-border bg-bg-raised px-3.5 text-[15px] text-ink-tertiary shadow-md shadow-black/10">
          <IconSearch className="w-[18px] h-[18px]" />
          {t.vocabPage.search}
        </Link>

        <div className="on-glow">
          <div className="text-[13px] opacity-85">{t.dashboard.hello}</div>
          <div className="text-[27px] font-extrabold leading-tight tracking-tight">{t.dashboard.keepGoing}</div>
        </div>

        {progress && (
          <Link href="/cards" className="relative flex items-center justify-between overflow-hidden rounded-[22px] bg-gradient-to-br from-[#e8401c] to-[#dc2626] p-5 text-white shadow-lg shadow-[#e8401c]/25 active:scale-[0.99] transition-transform">
            <div>
              <div className="text-[12px] font-semibold opacity-85">{t.vocabPage.learned}</div>
              <div className="text-[44px] font-extrabold leading-none tabular-nums">{learned}</div>
              <div className="mt-1 text-[12px] opacity-85">{t.dashboard.ofWords} {TOTAL.toLocaleString()} {t.dashboard.wordsWord}</div>
            </div>
            <div className="relative h-[68px] w-[68px] rounded-full" style={{ background: `conic-gradient(#fff ${Math.min(100, (learned / TOTAL) * 100)}%, rgba(255,255,255,.28) 0)` }}>
              <div className="absolute inset-[9px] rounded-full bg-[#e0391d]" />
            </div>
          </Link>
        )}

        {nextLesson && (
          <Link href="/books" className="flex items-center gap-3 rounded-[20px] border border-border bg-bg-raised px-3.5 py-3 shadow-sm active:scale-[0.99] transition-transform">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8401c] text-[19px] font-extrabold text-white">课</div>
            <div className="min-w-0 flex-1">
              <div className="text-[14px] font-bold text-ink leading-snug line-clamp-2">{t.lp.lessonWord} {nextLesson.n} · {nextLesson.en}</div>
              <div className="text-[12px] text-ink-tertiary truncate">{nextLesson.book} · {nextLesson.pct}%</div>
            </div>
            <span className="text-2xl text-ink-tertiary">›</span>
          </Link>
        )}

        <div className="grid grid-cols-2 gap-2.5">
          {quick.map(({ href, title, ch }) => (
            <Link key={href} href={href} className="rounded-[20px] border border-border bg-bg-raised p-4 shadow-sm active:scale-[0.97] transition-transform">
              <div className="mb-1 text-[28px] font-bold leading-none text-[#e8401c]" style={{ fontFamily: "'Noto Serif SC','Noto Serif CJK SC',serif" }}>{ch}</div>
              <div className="text-[15px] font-bold text-ink">{title}</div>
            </Link>
          ))}
        </div>

        <div className="-mx-4 px-4 flex gap-2 overflow-x-auto scrollbar-none pb-1">
          {more.map(({ href, title, Icon }) => (
            <Link key={href} href={href} className="shrink-0 flex items-center gap-2 rounded-full border border-border bg-bg-raised px-4 py-2.5 text-[13px] font-semibold text-ink-secondary active:scale-[0.97] transition-transform">
              <Icon className="w-4 h-4 text-[#e8401c]" />{title}
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
