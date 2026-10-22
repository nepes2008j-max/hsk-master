"use client";

import { useEffect } from "react";
import { LangProvider } from "@/lib/i18n";
import type { ReactNode } from "react";

export function LangWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const manifestHref = document.querySelector<HTMLLinkElement>("link[rel=manifest]")?.href;
      const base = manifestHref ? manifestHref.replace(/manifest\.json$/, "") : "/";
      navigator.serviceWorker.register(`${base}sw.js`).catch(() => {});
    }
  }, []);

  return <LangProvider>{children}</LangProvider>;
}
