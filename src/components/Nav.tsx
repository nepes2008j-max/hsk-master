"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconBook, IconPencil, IconBrush, IconCards, IconClipboard, IconCog, IconGlobe } from "./Icons";
import { useLang } from "@/lib/i18n";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLang();

  const links = [
    { href: "/dashboard", label: t.home, Icon: IconHome },
    { href: "/learn/vocabulary", label: t.vocab, Icon: IconBook },
    { href: "/learn/grammar", label: t.grammar, Icon: IconPencil },
    { href: "/learn/characters", label: t.hanzi, Icon: IconBrush },
    { href: "/dictionary", label: t.dict, Icon: IconGlobe },
    { href: "/cards", label: t.cards, Icon: IconCards },
    { href: "/test", label: t.test, Icon: IconClipboard },
  ] as const;

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex flex-col w-[220px] min-h-screen border-r border-border bg-bg-raised">
        <Link href="/" className="flex items-center gap-2 px-5 py-5 border-b border-border">
          <span className="text-xl font-bold text-jade">HSK</span>
          <span className="text-lg font-semibold text-ink">Master</span>
        </Link>

        <div className="flex flex-col gap-0.5 px-3 py-3 flex-1">
          {links.map(({ href, label, Icon }) => {
            const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                  active
                    ? "bg-jade-light text-jade-text"
                    : "text-ink-secondary hover:text-ink hover:bg-bg-sunken"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
                {label}
              </Link>
            );
          })}
        </div>

        <div className="px-3 pb-3">
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

      {/* Mobile bottom bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg-raised/95 backdrop-blur-md safe-area-bottom">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {links.map(({ href, label, Icon }) => {
            const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-0.5 px-1 py-1 min-w-[48px] transition-colors ${
                  active ? "text-jade" : "text-ink-tertiary"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
