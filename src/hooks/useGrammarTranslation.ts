"use client";

import { useState, useEffect } from "react";
import { useLang, type Lang } from "@/lib/i18n";

type GMap = Record<number, { title: string; explanation: string; examples: string[] }>;

let cache: Partial<Record<Lang, GMap>> = {};

export function useGrammarTranslation() {
  const { lang } = useLang();
  const [map, setMap] = useState<GMap | null>(cache[lang] ?? null);

  useEffect(() => {
    if (lang === "en") { setMap(null); return; }
    if (cache[lang]) { setMap(cache[lang]!); return; }

    (lang === "ru"
      ? import("@/data/grammar-translations-ru").then((m) => m.grammarRu)
      : import("@/data/grammar-translations-tk").then((m) => m.grammarTk)
    ).then((loaded) => {
      cache[lang] = loaded;
      setMap(loaded);
    }).catch(() => {});
  }, [lang]);

  return (id: number) => {
    if (lang === "en" || !map) return null;
    return map[id] ?? null;
  };
}
