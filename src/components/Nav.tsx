"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconBook, IconBrush, IconCards, IconClipboard, IconCog, IconGlobe, IconPencil, IconGamepad, IconBookOpen, IconBeaker } from "./Icons";
import { useLang, type Lang } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";

const langCycle: Lang[] = ["en", "ru", "tk"];
const langFlag: Record<Lang, string> = { en: "EN", ru: "RU", tk: "TK" };

export default function Nav() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();
  const { user, signInWithGoogle, logout } = useAuth();

  const nextLang = () => {
    const i = langCycle.indexOf(lang);
    setLang(langCycle[(i + 1) % langCycle.length]);
  };

  const allLinks = [
    { href: "/dashboard", label: t.home, Icon: IconHome },
    { href: "/learn/vocabulary", label: t.vocab, Icon: IconBook },
    { href: "/learn/grammar", label: t.grammar, Icon: IconPencil },
    { href: "/learn/characters", label: t.hanzi, Icon: IconBrush },
    { href: "/dictionary", label: t.dict, Icon: IconGlobe },
    { href: "/cards", label: t.cards, Icon: IconCards },
    { href: "/test", label: t.test, Icon: IconClipboard },
    { href: "/games", label: t.games, Icon: IconGamepad },
    { href: "/books", label: t.books, Icon: IconBookOpen },
    { href: "/academic", label: t.academic, Icon: IconBeaker },
  ] as const;

  const mobileLinks = [
    { href: "/dashboard", label: t.home, Icon: IconHome },
    { href: "/learn/vocabulary", label: t.vocab, Icon: IconBook },
    { href: "/cards", label: t.cards, Icon: IconCards },
    { href: "/test", label: t.test, Icon: IconClipboard },
    { href: "/games", label: t.games, Icon: IconGamepad },
  ] as const;

  const isActive = (href: string) => pathname === href || (href !== "/dashboard" && pathname.startsWith(href));

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex flex-col w-[220px] min-h-screen border-r border-border bg-bg-raised">
        <Link href="/" className="flex items-center gap-2 px-5 py-5 border-b border-border">
          <span className="text-xl font-bold text-primary">HSK</span>
          <span className="text-lg font-semibold text-ink">Master</span>
        </Link>

        <div className="flex flex-col gap-0.5 px-3 py-3 flex-1">
          {allLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                isActive(href)
                  ? "bg-primary-light text-primary-text"
                  : "text-ink-secondary hover:text-ink hover:bg-bg-sunken"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              {label}
            </Link>
          ))}
        </div>

        <div className="px-3 pb-3 space-y-0.5">
          {user ? (
            <button
              onClick={logout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium text-ink-secondary hover:text-ink hover:bg-bg-sunken transition-colors w-full"
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="w-[18px] h-[18px] rounded-full" referrerPolicy="no-referrer" />
              ) : (
                <span className="w-[18px] h-[18px] rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">{(user.displayName || user.email || "U")[0]}</span>
              )}
              <span className="truncate">{user.displayName || user.email}</span>
            </button>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium text-ink-secondary hover:text-ink hover:bg-bg-sunken transition-colors w-full"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09a6.97 6.97 0 0 1 0-4.17V7.07H2.18A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.28 5.4l3.56-2.77z" fill="#FBBC05"/><path d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 6.07l3.66 2.84c.87-2.6 3.3-4.16 6.16-4.16z" fill="#EA4335"/></svg>
              {t.signIn}
            </button>
          )}
          <button
            onClick={nextLang}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium text-ink-secondary hover:text-ink hover:bg-bg-sunken transition-colors w-full"
          >
            <span className="w-[18px] h-[18px] flex items-center justify-center text-[11px] font-bold rounded border border-current">{langFlag[lang]}</span>
            {t.langName}
          </button>
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
              pathname === "/settings"
                ? "bg-primary-light text-primary-text"
                : "text-ink-secondary hover:text-ink hover:bg-bg-sunken"
            }`}
          >
            <IconCog className="w-[18px] h-[18px]" />
            {t.settings}
          </Link>
        </div>
      </nav>

      {/* Mobile bottom bar — 5 key items only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg-raised/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center h-14 max-w-lg mx-auto px-2">
          {mobileLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-1.5 rounded-lg transition-colors ${
                isActive(href) ? "text-primary" : "text-ink-tertiary active:text-ink"
              }`}
            >
              <Icon className="w-[22px] h-[22px]" />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
