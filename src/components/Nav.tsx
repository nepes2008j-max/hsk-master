"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconChevron, IconHome, IconBook, IconBrush, IconCards, IconClipboard, IconCog, IconGlobe, IconPencil, IconGamepad, IconBookOpen, IconBeaker, IconSearch, IconX } from "./Icons";
import { useLang, type Lang } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";

const langCycle: Lang[] = ["en", "ru", "tk"];
const langFlag: Record<Lang, string> = { en: "EN", ru: "RU", tk: "TK" };

export default function Nav() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();
  const { user, signInWithGoogle, logout } = useAuth();

  // Desktop sidebar can be hidden; it slides back in when the mouse touches the left edge.
  const [collapsed, setCollapsed] = useState(false);
  const [peek, setPeek] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  useEffect(() => { setMoreOpen(false); }, [pathname]);
  useEffect(() => {
    try { setCollapsed(localStorage.getItem("hsk-nav-collapsed") === "1"); } catch { /* noop */ }
  }, []);
  const toggleNav = () => {
    const next = !collapsed;
    setCollapsed(next);
    setPeek(false);
    try { localStorage.setItem("hsk-nav-collapsed", next ? "1" : "0"); } catch { /* noop */ }
  };

  const nextLang = () => {
    const i = langCycle.indexOf(lang);
    setLang(langCycle[(i + 1) % langCycle.length]);
  };

  const allLinks = [
    { href: "/dashboard", label: t.home, Icon: IconHome },
    { href: "/books", label: t.lessons, Icon: IconBookOpen },
    { href: "/learn/vocabulary", label: t.vocab, Icon: IconBook },
    { href: "/reading", label: t.reading, Icon: IconBookOpen },
    { href: "/learn/grammar", label: t.grammar, Icon: IconPencil },
    { href: "/learn/characters", label: t.hanzi, Icon: IconBrush },
    { href: "/dictionary", label: t.dict, Icon: IconGlobe },
    { href: "/cards", label: t.cards, Icon: IconCards },
    { href: "/test", label: t.test, Icon: IconClipboard },
    { href: "/games", label: t.games, Icon: IconGamepad },
    { href: "/academic", label: t.academic, Icon: IconBeaker },
  ] as const;

  const isActive = (href: string) => pathname === href || (href !== "/dashboard" && pathname.startsWith(href));

  // Phone tabs (Home, Search, Learn, Cards) + "More" sheet with everything else.
  const mobileLinks = [
    { href: "/dashboard", label: t.home, Icon: IconHome },
    { href: "/dictionary", label: t.dict, Icon: IconSearch },
    { href: "/books", label: t.lessons, Icon: IconBookOpen },
    { href: "/cards", label: t.cards, Icon: IconCards },
  ] as const;
  const moreLinks = allLinks.filter((l) => !mobileLinks.some((m) => m.href === l.href));
  const moreActive = moreLinks.some((l) => isActive(l.href)) || pathname === "/settings";

  // Phone bar: hide on scroll down (after 80px, >12px), show on scroll up; hidden while a lesson is played.
  const [scrollHidden, setScrollHidden] = useState(false);
  const [lessonOpen, setLessonOpen] = useState(false);
  useEffect(() => {
    let raf = 0;
    let ref = window.scrollY; // scrollY at the last direction change
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y < 80 || y < ref - 2) { setScrollHidden(false); ref = y; }
      else if (y > ref + 12) setScrollHidden(true);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onLesson = (e: Event) => setLessonOpen((e as CustomEvent<boolean>).detail);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hsk-lesson-focus", onLesson);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hsk-lesson-focus", onLesson);
      cancelAnimationFrame(raf);
    };
  }, []);
  const barHidden = lessonOpen || (scrollHidden && !moreOpen);


  return (
    <>
      {/* Desktop sidebar */}
      {collapsed && (
        <>
          <div className="hidden md:block fixed left-0 top-0 z-30 h-screen w-3" onMouseEnter={() => setPeek(true)} />
          <button
            onClick={toggleNav}
            aria-label="Show sidebar"
            className="hidden md:flex fixed left-3 top-3 z-30 w-9 h-9 items-center justify-center rounded-lg border border-border bg-bg-raised text-ink-secondary hover:text-ink shadow-sm transition-colors"
          >
            <IconChevron direction="right" className="w-4 h-4" />
          </button>
        </>
      )}
      <nav
        onMouseLeave={() => setPeek(false)}
        className={`hidden md:flex flex-col w-[220px] min-h-screen border-r border-border bg-bg-raised ${
          collapsed
            ? `fixed left-0 top-0 z-40 h-screen overflow-y-auto shadow-xl transition-transform duration-200 ${peek ? "translate-x-0" : "-translate-x-full"}`
            : ""
        }`}
      >
        <div className="flex items-center justify-between border-b border-border pr-3">
          <Link href="/" className="flex items-center gap-2 px-5 py-5">
            <span className="text-xl font-bold text-primary">HSK</span>
            <span className="text-lg font-semibold text-ink">Master</span>
          </Link>
          <button
            onClick={toggleNav}
            aria-label={collapsed ? "Pin sidebar" : "Hide sidebar"}
            title={collapsed ? "Pin sidebar" : "Hide sidebar"}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-tertiary hover:text-ink hover:bg-bg-sunken transition-colors"
          >
            <IconChevron direction={collapsed ? "right" : "left"} className="w-4 h-4" />
          </button>
        </div>

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
      <nav
        inert={barHidden}
        className={`md:hidden fixed left-3 right-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 mx-auto max-w-md rounded-[24px] border border-white/10 bg-[rgba(24,24,27,0.84)] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_10px_32px_rgba(0,0,0,0.30)] transition-[transform,opacity] duration-[250ms] ease-out motion-reduce:transition-none ${
          barHidden ? "translate-y-[calc(100%+2rem)] opacity-0 pointer-events-none" : ""
        }`}
      >
        <div className="flex justify-around items-center h-16 px-2">
          {mobileLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-1.5 rounded-lg transition active:scale-90 ${
                isActive(href) ? "text-[var(--sun-bright)]" : "text-white/60 active:text-white"
              }`}
            >
              <Icon className="w-[22px] h-[22px]" />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </Link>
          ))}
          <button
            onClick={() => setMoreOpen(true)}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-1.5 rounded-lg transition active:scale-90 ${moreActive ? "text-[var(--sun-bright)]" : "text-white/60 active:text-white"}`}
          >
            <span className="flex gap-[3px] items-center h-[22px]"><i className="w-1 h-1 rounded-full bg-current" /><i className="w-1 h-1 rounded-full bg-current" /><i className="w-1 h-1 rounded-full bg-current" /></span>
            <span className="text-[10px] font-medium leading-tight">{t.more}</span>
          </button>
        </div>
      </nav>

      {/* Phone "More" sheet */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-black/40 transition-opacity ${moreOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMoreOpen(false)}
      />
      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 z-[61] rounded-t-3xl bg-bg px-5 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-300 ${moreOpen ? "translate-y-0" : "translate-y-full"}`}
        role="dialog"
        aria-label={t.more}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border-strong" />
        <div className="flex items-center justify-between mb-3">
          <div className="text-[15px] font-bold text-ink">{t.more}</div>
          <button onClick={() => setMoreOpen(false)} aria-label="Close" className="p-2 -mr-2 text-ink-tertiary"><IconX className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[...moreLinks, { href: "/settings", label: t.settings, Icon: IconCog }].map(({ href, label, Icon }) => (
            <Link key={href} href={href} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-bg-raised py-4 px-2 text-center active:scale-[0.97] transition-transform">
              <Icon className="w-6 h-6 text-primary" />
              <span className="text-[12px] font-semibold text-ink leading-tight">{label}</span>
            </Link>
          ))}
          <button onClick={nextLang} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-bg-raised py-4 px-2 text-center active:scale-[0.97] transition-transform">
            <span className="w-6 h-6 flex items-center justify-center text-[11px] font-bold rounded border-2 border-primary text-primary">{langFlag[lang]}</span>
            <span className="text-[12px] font-semibold text-ink leading-tight">{t.langName}</span>
          </button>
        </div>
      </div>
    </>
  );
}
