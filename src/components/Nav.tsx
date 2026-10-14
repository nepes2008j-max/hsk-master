"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconBook, IconBrush, IconCards, IconClipboard, IconCog, IconGlobe, IconPencil, IconGamepad } from "./Icons";
import { useLang, type Lang } from "@/lib/i18n";

const langCycle: Lang[] = ["en", "ru", "tk"];
const langFlag: Record<Lang, string> = { en: "EN", ru: "RU", tk: "TK" };

export default function Nav() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();

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
          <span className="text-xl font-bold text-jade">HSK</span>
          <span className="text-lg font-semibold text-ink">Master</span>
        </Link>

        <div className="flex flex-col gap-0.5 px-3 py-3 flex-1">
          {allLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                isActive(href)
                  ? "bg-jade-light text-jade-text"
                  : "text-ink-secondary hover:text-ink hover:bg-bg-sunken"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              {label}
            </Link>
          ))}
        </div>

        <div className="px-3 pb-3 space-y-0.5">
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
                ? "bg-jade-light text-jade-text"
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
                isActive(href) ? "text-jade" : "text-ink-tertiary active:text-ink"
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
