"use client";

import AppShell from "@/components/AppShell";
import { useProgress } from "@/hooks/useProgress";
import { IconCog, IconFire, IconStar, IconBook, IconPencil, IconBrush } from "@/components/Icons";
import { useLang, type Lang } from "@/lib/i18n";

const langOptions: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "ru", label: "Русский" },
  { id: "tk", label: "Türkmen" },
];

export default function SettingsPage() {
  const { progress, toggleMode } = useProgress();
  const { lang, setLang, t } = useLang();

  if (!progress)
    return (
      <AppShell>
        <div className="text-ink-tertiary text-[14px]">Loading...</div>
      </AppShell>
    );

  return (
    <AppShell>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-ink tracking-tight">{t.settingsPage.title}</h1>

        <div className="rounded-xl border border-border bg-bg-raised p-5 space-y-4">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
            <IconCog className="w-4 h-4" />
            {t.settingsPage.language}
          </div>
          <div className="flex gap-1.5">
            {langOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setLang(opt.id)}
                className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                  lang === opt.id ? "bg-jade text-white" : "bg-bg-sunken text-ink-tertiary hover:text-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-bg-raised p-5 space-y-4">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
            <IconCog className="w-4 h-4" />
            {t.settingsPage.uiMode}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[15px] font-semibold text-ink">{t.settingsPage.uiMode}</div>
              <div className="text-[13px] text-ink-tertiary mt-0.5">
                {progress.mode === "gamified" ? t.settingsPage.gamified : t.settingsPage.clean}
              </div>
            </div>
            <button
              onClick={toggleMode}
              className={`relative w-[52px] h-[28px] rounded-full transition-colors ${
                progress.mode === "gamified" ? "bg-jade" : "bg-border-strong"
              }`}
            >
              <span
                className={`absolute top-[2px] w-[24px] h-[24px] rounded-full bg-white shadow-sm transition-transform ${
                  progress.mode === "gamified" ? "left-[26px]" : "left-[2px]"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-bg-raised p-5 space-y-4">
          <div className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
            {t.settingsPage.stats}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-bg-sunken p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-ink-tertiary">
                <IconBook className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-wide">{t.settingsPage.wordsLearned}</span>
              </div>
              <div className="text-xl font-bold text-ink tabular-nums">
                {progress.wordsLearned.length}<span className="text-ink-tertiary font-normal text-[13px]">/300</span>
              </div>
            </div>
            <div className="rounded-xl bg-bg-sunken p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-ink-tertiary">
                <IconPencil className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-wide">{t.settingsPage.grammarDone}</span>
              </div>
              <div className="text-xl font-bold text-ink tabular-nums">
                {progress.grammarCompleted.length}<span className="text-ink-tertiary font-normal text-[13px]">/58</span>
              </div>
            </div>
            <div className="rounded-xl bg-bg-sunken p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-ink-tertiary">
                <IconBrush className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-wide">{t.settingsPage.charsPracticed}</span>
              </div>
              <div className="text-xl font-bold text-ink tabular-nums">
                {progress.charactersPracticed.length}<span className="text-ink-tertiary font-normal text-[13px]">/100</span>
              </div>
            </div>
            <div className="rounded-xl bg-bg-sunken p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-ink-tertiary">
                <IconFire className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-wide">{t.dashboard.streak}</span>
              </div>
              <div className="text-xl font-bold text-ink tabular-nums">
                {progress.streak}
              </div>
            </div>
          </div>
          {progress.mode === "gamified" && (
            <div className="flex items-center gap-2 rounded-xl bg-jade-light/50 p-3">
              <IconStar className="w-4.5 h-4.5 text-jade" />
              <span className="text-[14px] font-semibold text-jade-text">{progress.xp} XP</span>
            </div>
          )}
        </div>

        <div className="rounded-xl border border-border bg-bg-raised p-5 space-y-2">
          <div className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
            {t.settingsPage.about}
          </div>
          <div className="text-[14px] text-ink-secondary leading-relaxed">
            HSK Master — Chinese Language Learning & Exam Prep
          </div>
          <div className="text-[13px] text-ink-tertiary">
            HSK 3.0 Level 1 &middot; 300 words &middot; 58 grammar points
          </div>
        </div>
      </div>
    </AppShell>
  );
}
