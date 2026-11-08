// Lazy-loaded CC-CEDICT (CC BY-SA 4.0). public/data/cedict.txt is built by scripts/build-cedict.py.
import type { DWord } from "@/lib/all-words";

interface Entry { hanzi: string; pinyin: string; def: string; py: string }
let entries: Entry[] | null = null;
let loading: Promise<Entry[]> | null = null;

const strip = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();

export function loadCedict(): Promise<Entry[]> {
  if (entries) return Promise.resolve(entries);
  loading ??= fetch(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/data/cedict.txt`)
    .then((r) => { if (!r.ok) throw new Error("cedict"); return r.text(); })
    .then((text) => {
      entries = text.split("\n").filter(Boolean).map((l) => {
        const [hanzi, pinyin, def] = l.split("\t");
        return { hanzi, pinyin, def, py: strip(pinyin) };
      });
      return entries;
    })
    .catch((e) => { loading = null; throw e; });
  return loading;
}

const CJK = /[\u4e00-\u9fff]/;

// Best matches first: exact hanzi / pinyin, then prefix, then substring / English word.
export function searchCedict(all: Entry[], query: string, skip: Set<string>, limit = 40): DWord[] {
  const q = query.trim();
  if (!q) return [];
  const ql = q.toLowerCase(), qs = strip(q), isZh = CJK.test(q);
  const scored: [number, Entry][] = [];
  const esc = ql.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const startRe = new RegExp(`^${esc}([ ;).,]|$)`), wordRe = new RegExp(`(^|[ ;(])${esc}([ ;).,]|$)`);
  for (const e of all) {
    if (skip.has(e.hanzi)) continue;
    let s = -1;
    if (isZh) s = e.hanzi === q ? 0 : e.hanzi.startsWith(q) ? 1 : e.hanzi.includes(q) ? 2 : -1;
    else if (e.py === qs) s = 0;
    else {
      const d = e.def.toLowerCase();
      if (startRe.test(d)) s = 1;               // meaning starts with the word
      else if (wordRe.test(d)) s = 2;           // word appears in the meaning
      else if (qs.length >= 2 && e.py.startsWith(qs)) s = 3; // pinyin prefix
      else if (d.includes(ql)) s = 4;
    }
    if (s >= 0) scored.push([s * 100 + e.hanzi.length, e]);
  }
  return scored.sort((a, b) => a[0] - b[0]).slice(0, limit).map(([, e]) => ({ hanzi: e.hanzi, pinyin: e.pinyin, english: e.def, decks: ["CC-CEDICT"] }));
}

// Exact-word lookup (built once, on first use): every reading/sense of a word, e.g. 了 -> le / liǎo.
let byWord: Map<string, Entry[]> | null = null;
export function lookupCedict(all: Entry[], word: string): Entry[] {
  if (!byWord) { byWord = new Map(); for (const e of all) { const a = byWord.get(e.hanzi); if (a) a.push(e); else byWord.set(e.hanzi, [e]); } }
  return byWord.get(word) ?? [];
}
export type CedictEntry = Entry;
