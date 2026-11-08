"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import ProgressBar from "@/components/ProgressBar";
import { getProgress, type ProgressData } from "@/lib/storage";
import { IconSearch, IconBook, IconPencil, IconBrush, IconCards, IconClipboard, IconFire, IconStar, IconGlobe, IconGamepad, IconBookOpen, IconBeaker } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const { t } = useLang();

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  const sections = [
    { href: "/learn/vocabulary", title: t.dashboard.vocabulary, desc: t.dashboard.vocabDesc, Icon: IconBook, accent: "bg-primary-light text-primary" },
    { href: "/learn/grammar", title: t.dashboard.grammarLabel, desc: t.dashboard.grammarDesc, Icon: IconPencil, accent: "bg-blue-light text-blue" },
    { href: "/learn/characters", title: t.dashboard.characters, desc: t.dashboard.charsDesc, Icon: IconBrush, accent: "bg-accent-light text-accent" },
    { href: "/dictionary", title: t.dictPage.title, desc: t.dashboard.dictDesc, Icon: IconGlobe, accent: "bg-blue-light text-blue" },
    { href: "/cards", title: t.cards, desc: t.dashboard.cardsDesc, Icon: IconCards, accent: "bg-primary-light text-primary" },
    { href: "/test", title: t.test, desc: t.dashboard.testDesc, Icon: IconClipboard, accent: "bg-warning-light text-warning" },
    { href: "/games", title: t.games, desc: t.gamesPage.desc, Icon: IconGamepad, accent: "bg-accent-light text-accent" },
    { href: "/books", title: t.books, desc: t.booksPage.desc, Icon: IconBookOpen, accent: "bg-primary-light text-primary" },
    { href: "/academic", title: t.academic, desc: t.academicPage.desc, Icon: IconBeaker, accent: "bg-blue-light text-blue" },
  ] as const;

  const isGamified = progress?.mode === "gamified";

  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-xl font-bold text-ink tracking-tight">
          {t.dashboard.title} <span className="text-ink-secondary font-normal text-[15px]">{t.dashboard.subtitle}</span>
        </h1>

        <Link href="/dictionary" className="md:hidden flex items-center gap-2.5 h-12 rounded-2xl border border-border bg-bg-raised px-3.5 text-[15px] text-ink-tertiary shadow-sm">
          <IconSearch className="w-[18px] h-[18px]" />
          {t.vocabPage.search}
        </Link>

        {progress && (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#dc2626] to-[#b91c1c] p-5 text-white">
            <span aria-hidden className="pointer-events-none absolute -right-2 -bottom-8 text-[150px] font-extrabold leading-none opacity-[0.13]">学</span>
            <div className="text-[12px] font-semibold opacity-85">{t.dashboard.vocabulary}</div>
            <div className="mt-1 mb-3 text-3xl font-extrabold tracking-tight tabular-nums">{progress.wordsLearned.length} <span className="text-lg font-semibold opacity-90">{t.vocabPage.learned}</span></div>
            <Link href="/cards" className="inline-block rounded-xl bg-white px-4 py-2.5 text-[14px] font-bold text-[#b91c1c] active:scale-[0.97] transition-transform">{t.cards} →</Link>
          </div>
        )}

        {progress && isGamified && (
          <div className="flex gap-4 p-4 rounded-xl bg-bg-raised border border-border">
            <div className="flex items-center gap-2">
              <IconFire className="w-5 h-5 text-accent" />
              <div>
                <div className="text-lg font-bold text-ink tabular-nums">{progress.streak}</div>
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">{t.dashboard.streak}</div>
              </div>
            </div>
            <div className="w-px bg-border" />
            <div className="flex items-center gap-2">
              <IconStar className="w-5 h-5 text-primary" />
              <div>
                <div className="text-lg font-bold text-ink tabular-nums">{progress.xp}</div>
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">XP</div>
              </div>
            </div>
            <div className="w-px bg-border" />
            <div className="flex-1 flex items-center">
              <ProgressBar value={progress.wordsLearned.length} max={497} label={t.dashboard.vocabulary} className="w-full" />
            </div>
          </div>
        )}

        {progress && !isGamified && (
          <div className="p-4 rounded-xl bg-bg-raised border border-border space-y-3">
            <ProgressBar value={progress.wordsLearned.length} max={497} label={t.dashboard.vocabulary} />
            <ProgressBar value={progress.grammarCompleted.length} max={93} label={t.dashboard.grammarLabel} />
            <ProgressBar value={progress.charactersPracticed.length} max={100} label={t.dashboard.characters} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-2.5">
          {sections.map(({ href, title, desc, Icon, accent }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-bg-raised p-3.5 transition-all hover:border-border-strong hover:shadow-sm active:scale-[0.97]"
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${accent}`}>
                <Icon className="w-[18px] h-[18px]" />
              </div>
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-ink group-hover:text-primary transition-colors leading-tight">{title}</div>
                <div className="text-[12px] text-ink-tertiary mt-0.5 leading-snug line-clamp-2">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
