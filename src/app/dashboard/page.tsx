"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppShell from "@/components/AppShell";
import ProgressBar from "@/components/ProgressBar";
import { getProgress, type ProgressData } from "@/lib/storage";
import { IconBook, IconPencil, IconBrush, IconCards, IconClipboard, IconFire, IconStar, IconGlobe, IconGamepad } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

export default function DashboardPage() {
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const { t } = useLang();

  useEffect(() => {
    getProgress().then(setProgress);
  }, []);

  const sections = [
    { href: "/learn/vocabulary", title: t.dashboard.vocabulary, desc: t.dashboard.vocabDesc, Icon: IconBook, accent: "bg-jade-light text-jade" },
    { href: "/learn/grammar", title: t.dashboard.grammarLabel, desc: t.dashboard.grammarDesc, Icon: IconPencil, accent: "bg-blue-light text-blue" },
    { href: "/learn/characters", title: t.dashboard.characters, desc: t.dashboard.charsDesc, Icon: IconBrush, accent: "bg-gold-light text-gold" },
    { href: "/dictionary", title: t.dictPage.title, desc: t.dashboard.dictDesc, Icon: IconGlobe, accent: "bg-blue-light text-blue" },
    { href: "/cards", title: t.cards, desc: t.dashboard.cardsDesc, Icon: IconCards, accent: "bg-jade-light text-jade" },
    { href: "/test", title: t.test, desc: t.dashboard.testDesc, Icon: IconClipboard, accent: "bg-red-light text-red" },
    { href: "/games", title: t.games, desc: t.gamesPage.desc, Icon: IconGamepad, accent: "bg-gold-light text-gold" },
  ] as const;

  const isGamified = progress?.mode === "gamified";

  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-ink tracking-tight">
            {t.dashboard.title} <span className="text-ink-secondary font-normal">{t.dashboard.subtitle}</span>
          </h1>
        </div>

        {progress && isGamified && (
          <div className="flex gap-4 p-4 rounded-xl bg-bg-raised border border-border">
            <div className="flex items-center gap-2">
              <IconFire className="w-5 h-5 text-gold" />
              <div>
                <div className="text-lg font-bold text-ink tabular-nums">{progress.streak}</div>
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">{t.dashboard.streak}</div>
              </div>
            </div>
            <div className="w-px bg-border" />
            <div className="flex items-center gap-2">
              <IconStar className="w-5 h-5 text-jade" />
              <div>
                <div className="text-lg font-bold text-ink tabular-nums">{progress.xp}</div>
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">XP</div>
              </div>
            </div>
            <div className="w-px bg-border" />
            <div className="flex-1 flex items-center">
              <ProgressBar value={progress.wordsLearned.length} max={300} label={t.dashboard.vocabulary} className="w-full" />
            </div>
          </div>
        )}

        {progress && !isGamified && (
          <div className="p-4 rounded-xl bg-bg-raised border border-border space-y-3">
            <ProgressBar value={progress.wordsLearned.length} max={300} label={t.dashboard.vocabulary} />
            <ProgressBar value={progress.grammarCompleted.length} max={58} label={t.dashboard.grammarLabel} />
            <ProgressBar value={progress.charactersPracticed.length} max={100} label={t.dashboard.characters} />
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          {sections.map(({ href, title, desc, Icon, accent }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-4 transition-all hover:border-border-strong hover:shadow-sm active:scale-[0.98]"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${accent}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] font-semibold text-ink group-hover:text-jade transition-colors">{title}</div>
                <div className="text-[13px] text-ink-tertiary">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
