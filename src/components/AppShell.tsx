"use client";

import { useEffect, useRef } from "react";
import Nav from "./Nav";
import { useLang } from "@/lib/i18n";

// viewKey: pass a different value per in-page view (list / detail) to replay the page-in animation.
export default function AppShell({ children, viewKey }: { children: React.ReactNode; viewKey?: string }) {
  // New in-page view -> start at the top (skip first mount so browser scroll restoration still works).
  const { t } = useLang();
  const first = useRef(true);
  useEffect(() => { if (first.current) { first.current = false; return; } window.scrollTo(0, 0); }, [viewKey]);
  return (
    <div className="flex min-h-[100dvh]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-night focus:px-4 focus:py-2 focus:text-white">{t.skip}</a>
      <Nav />
      <main id="main" className="flex-1 min-w-0 overflow-x-clip pb-28 md:pb-0">
        <div key={viewKey} className="page-in max-w-2xl mx-auto px-4 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-5 md:px-6 md:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
