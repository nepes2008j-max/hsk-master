"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import { getProgress, type ProgressData } from "@/lib/storage";
import { IconSearch, IconBook, IconPencil, IconBrush, IconCards, IconClipboard, IconFire, IconStar, IconGlobe, IconGamepad, IconBookOpen, IconBeaker } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { Ring } from "@/components/Ring";
import { lessonList } from "@/lib/book";

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const { t } = useLang();

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  const isGamified = progress?.mode === "gamified";
  const nextLesson = progress ? (() => { const l = lessonList(new Set(progress.wordsLearned)); return l.find((x) => x.total > 0 && x.done < x.total && x.done > 0) ?? l.find((x) => x.total > 0 && x.done < x.total) ?? null; })() : null;

  // Big tiles: the four things you do most. Everything else is a scrolling row of pills.
  const quick = [
    { href: "/learn/lessons", title: t.lessons, desc: "25 · 339", Icon: IconBookOpen, accent: "bg-primary-light text-primary" },
    { href: "/cards", title: t.cards, desc: t.dashboard.cardsDesc, Icon: IconCards, accent: "bg-accent-light text-accent" },
    { href: "/dictionary", title: t.dictPage.title, desc: "124 000+", Icon: IconGlobe, accent: "bg-blue-light text-blue" },
    { href: "/learn/grammar", title: t.dashboard.grammarLabel, desc: t.dashboard.grammarDesc, Icon: IconPencil, accent: "bg-warning-light text-warning" },
  ] as const;
  const more = [
    { href: "/learn/vocabulary", title: t.dashboard.vocabulary, Icon: IconBook },
    { href: "/learn/characters", title: t.dashboard.characters, Icon: IconBrush },
    { href: "/test", title: t.test, Icon: IconClipboard },
    { href: "/games", title: t.games, Icon: IconGamepad },
    { href: "/books", title: t.books, Icon: IconBook },
    { href: "/academic", title: t.academic, Icon: IconBeaker },
  ] as const;

  return (
    <AppShell>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="text-[22px] font-extrabold tracking-tight text-ink"><span className="text-primary">HSK</span> Master</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-bg-sunken px-3 py-1.5 text-[13px] font-bold text-ink-secondary tabular-nums">
              <IconFire className="w-4 h-4 text-accent" />{progress?.streak ?? 0}
            </div>
            {isGamified && (
              <div className="flex items-center gap-1.5 rounded-full bg-bg-sunken px-3 py-1.5 text-[13px] font-bold text-ink-secondary tabular-nums">
                <IconStar className="w-4 h-4 text-primary" />{progress?.xp ?? 0}
              </div>
            )}
          </div>
        </div>

        <Link href="/dictionary" className="flex items-center gap-2.5 h-12 rounded-2xl border border-border bg-bg-raised px-3.5 text-[15px] text-ink-tertiary shadow-sm">
          <IconSearch className="w-[18px] h-[18px]" />
          {t.vocabPage.search}
        </Link>

        {progress && (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#dc2626] via-[#e2431f] to-[#f97316] p-5 text-white">
            <span aria-hidden className="pointer-events-none absolute -right-2 -bottom-8 text-[150px] font-extrabold leading-none opacity-[0.13]">学</span>
            <div className="text-[12px] font-semibold opacity-85">{t.dashboard.vocabulary}</div>
            <div className="mt-1 mb-3 text-3xl font-extrabold tracking-tight tabular-nums">{progress.wordsLearned.length} <span className="text-lg font-semibold opacity-90">{t.vocabPage.learned}</span></div>
            <Link href="/cards" className="inline-block rounded-xl bg-white px-4 py-2.5 text-[14px] font-bold text-[#b91c1c] active:scale-[0.97] transition-transform">{t.cards} →</Link>
          </div>
        )}

        {nextLesson && (
          <Link href="/learn/lessons" className="flex items-center gap-3 rounded-2xl border border-border bg-bg-raised px-3.5 py-3 active:scale-[0.99] transition-transform">
            <Ring pct={(nextLesson.done / nextLesson.total) * 100} label={`${Math.round((nextLesson.done / nextLesson.total) * 100)}%`} />
            <div className="min-w-0 flex-1">
              <div className="text-[14px] font-semibold text-ink truncate">{t.lessons} {nextLesson.n} · {nextLesson.title}</div>
              <div className="text-[12px] text-ink-tertiary truncate">{nextLesson.en} · {nextLesson.total}</div>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-2 gap-2.5">
          {quick.map(({ href, title, desc, Icon, accent }) => (
            <Link key={href} href={href} className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-raised p-4 transition-all hover:border-border-strong hover:shadow-sm active:scale-[0.97]">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${accent}`}><Icon className="w-5 h-5" /></div>
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-ink leading-tight">{title}</div>
                <div className="text-[12px] text-ink-tertiary mt-0.5 leading-snug line-clamp-1">{desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="-mx-4 px-4 flex gap-2 overflow-x-auto scrollbar-none pb-1">
          {more.map(({ href, title, Icon }) => (
            <Link key={href} href={href} className="shrink-0 flex items-center gap-2 rounded-full border border-border bg-bg-raised px-4 py-2.5 text-[13px] font-semibold text-ink-secondary active:scale-[0.97] transition-transform">
              <Icon className="w-4 h-4 text-primary" />{title}
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
