"use client";

import { useState, useEffect } from "react";
import { useLang, type Lang } from "@/lib/i18n";

type TMap = Record<string, { meaning: string; example: string }>;

let cache: Partial<Record<Lang, TMap>> = {};

export function useTranslation() {
  const { lang } = useLang();
  const [map, setMap] = useState<TMap | null>(cache[lang] ?? null);

  useEffect(() => {
    if (lang === "en") { setMap(null); return; }
    if (cache[lang]) { setMap(cache[lang]!); return; }

    (lang === "ru"
      ? import("@/data/translations-ru").then((m) => m.ru)
      : import("@/data/translations-tk").then((m) => m.tk)
    ).then((loaded) => {
      cache[lang] = loaded;
      setMap(loaded);
    }).catch(() => {});
  }, [lang]);

  return (hanzi: string) => {
    if (lang === "en" || !map) return null;
    return map[hanzi] ?? null;
  };
}
