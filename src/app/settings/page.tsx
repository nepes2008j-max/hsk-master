"use client";

import AppShell from "@/components/AppShell";
import { useProgress } from "@/hooks/useProgress";
import { IconCog, IconFire, IconStar, IconBook, IconPencil, IconBrush } from "@/components/Icons";
import { useLang, type Lang } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";
import { exportAllData, importAllData } from "@/lib/storage";

const langOptions: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "ru", label: "Русский" },
  { id: "tk", label: "Türkmen" },
];

export default function SettingsPage() {
  const { progress, toggleMode } = useProgress();
  const { lang, setLang, t } = useLang();
  const { user, signInWithGoogle, logout } = useAuth();

  const handleExport = async () => {
    const json = await exportAllData();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hsk-master-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      await importAllData(text);
      window.location.reload();
    } catch {
      alert("Invalid backup file");
    }
  };

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
          <div className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
            Account
          </div>
          {user ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full shrink-0" referrerPolicy="no-referrer" />
                ) : (
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-[16px] font-bold shrink-0">{(user.displayName || user.email || "U")[0]}</span>
                )}
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-ink truncate">{user.displayName}</div>
                  <div className="text-[13px] text-ink-tertiary truncate">{user.email}</div>
                </div>
              </div>
              <button onClick={logout} className="shrink-0 bg-bg-sunken text-ink-secondary px-3 py-1.5 rounded-lg text-[13px] font-medium border border-border hover:border-border-strong transition-colors">
                {t.signOut}
              </button>
            </div>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center gap-2 w-full bg-bg-sunken hover:bg-bg border border-border hover:border-border-strong rounded-xl py-3 text-[14px] font-medium text-ink transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09a6.97 6.97 0 0 1 0-4.17V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.28 5.4l3.56-2.77z" fill="#FBBC05"/><path d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 6.07l3.66 2.84c.87-2.6 3.3-4.16 6.16-4.16z" fill="#EA4335"/></svg>
              {t.signIn}
            </button>
          )}
        </div>

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
                  lang === opt.id ? "bg-primary text-white" : "bg-bg-sunken text-ink-tertiary hover:text-ink"
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
              role="switch"
              aria-checked={progress.mode === "gamified"}
              aria-label={t.settingsPage.uiMode}
              onClick={toggleMode}
              className={`relative w-[52px] h-[28px] rounded-full transition-colors ${
                progress.mode === "gamified" ? "bg-primary" : "bg-border-strong"
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
                {progress.wordsLearned.length}<span className="text-ink-tertiary font-normal text-[13px]">/497</span>
              </div>
            </div>
            <div className="rounded-xl bg-bg-sunken p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-ink-tertiary">
                <IconPencil className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-wide">{t.settingsPage.grammarDone}</span>
              </div>
              <div className="text-xl font-bold text-ink tabular-nums">
                {progress.grammarCompleted.length}<span className="text-ink-tertiary font-normal text-[13px]">/93</span>
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
            <div className="flex items-center gap-2 rounded-xl bg-primary-light/50 p-3">
              <IconStar className="w-4.5 h-4.5 text-primary" />
              <span className="text-[14px] font-semibold text-primary-text">{progress.xp} XP</span>
            </div>
          )}
        </div>

        <div className="rounded-xl border border-border bg-bg-raised p-5 space-y-4">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
            <IconCog className="w-4 h-4" />
            {t.settingsPage.data}
          </div>
          <div className="space-y-3">
            <div>
              <div className="text-[13px] text-ink-tertiary">{t.settingsPage.exportDesc}</div>
              <button
                onClick={handleExport}
                className="mt-2 bg-primary text-white px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-primary-hover transition-colors"
              >
                {t.settingsPage.exportData}
              </button>
            </div>
            <div className="border-t border-border pt-3">
              <div className="text-[13px] text-ink-tertiary">{t.settingsPage.importDesc}</div>
              <label className="mt-2 inline-block bg-bg-sunken text-ink px-4 py-2 rounded-lg text-[13px] font-medium border border-border hover:border-border-strong cursor-pointer transition-colors">
                {t.settingsPage.importData}
                <input type="file" accept=".json" className="hidden" onChange={handleImport} />
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-bg-raised p-5 space-y-2">
          <div className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
            {t.settingsPage.about}
          </div>
          <div className="text-[14px] text-ink-secondary leading-relaxed">
            HSK Master — Chinese Language Learning & Exam Prep
          </div>
          <div className="text-[13px] text-ink-tertiary">
            HSK 3.0 Levels 1–2 &middot; 497 words &middot; 93 grammar points
          </div>
        </div>
      </div>
    </AppShell>
  );
}
