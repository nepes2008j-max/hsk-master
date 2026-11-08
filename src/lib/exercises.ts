// Exercise engine for the book lesson player: builds a mixed practice session from a lesson's words,
// dialogue lines and grammar examples. Pure functions (no React), so it is easy to test.
export interface BWord { hanzi: string; pinyin: string; english: string }
export interface Sentence { zh: string; en?: string }
export interface LessonInput { words: BWord[]; sentences: Sentence[] }

export type Ex =
  | { t: "meaning"; word: BWord; options: string[]; answer: string }
  | { t: "word"; word: BWord; options: string[]; answer: string }
  | { t: "listen"; word: BWord; options: string[]; answer: string }
  | { t: "pinyin"; word: BWord; options: string[]; answer: string }
  | { t: "match"; pairs: { hanzi: string; english: string }[] }
  | { t: "reorder"; zh: string; en?: string; tokens: string[]; answer: string[] }
  | { t: "blank"; zh: string; en?: string; display: string; options: string[]; answer: string; word: BWord }
  | { t: "typePinyin"; word: BWord; answer: string }
  | { t: "typeHanzi"; word: BWord; answer: string };

export const shuffle = <T,>(a: T[]): T[] => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
};

// ---- pinyin helpers (tone variants make good wrong answers) ----
const TONES: Record<string, string[]> = { a: ["ā", "á", "ǎ", "à"], e: ["ē", "é", "ě", "è"], i: ["ī", "í", "ǐ", "ì"], o: ["ō", "ó", "ǒ", "ò"], u: ["ū", "ú", "ǔ", "ù"], ü: ["ǖ", "ǘ", "ǚ", "ǜ"] };
const MARK = new Map<string, [string, number]>();
for (const [base, arr] of Object.entries(TONES)) arr.forEach((c, i) => MARK.set(c, [base, i]));
export const stripTones = (s: string) => [...s.toLowerCase()].map((c) => MARK.get(c)?.[0] ?? c).join("").replace(/[\s'’]/g, "");

function retone(py: string): string[] {
  const out = new Set<string>();
  const chars = [...py];
  const idx = chars.map((c, i) => (MARK.has(c) ? i : -1)).filter((i) => i >= 0);
  for (const i of shuffle(idx)) {
    const [base, tone] = MARK.get(chars[i])!;
    for (const nt of shuffle([0, 1, 2, 3].filter((x) => x !== tone))) {
      const c2 = [...chars]; c2[i] = TONES[base][nt]; out.add(c2.join(""));
    }
  }
  return [...out];
}

const samePy = (a: string, b: string) => a.toLowerCase().replace(/\s/g, "") === b.toLowerCase().replace(/\s/g, "");

// ---- distractors ----
function pickWrong<T>(pool: T[], correct: T, n: number, key: (x: T) => string, similar?: (x: T) => number): T[] {
  const uniq = new Map<string, T>();
  for (const p of pool) if (key(p) !== key(correct) && !uniq.has(key(p))) uniq.set(key(p), p);
  let c = shuffle([...uniq.values()]);
  if (similar) c = c.sort((a, b) => similar(a) - similar(b) + (Math.random() - 0.5) * 1.5); // prefer similar, keep some randomness
  return c.slice(0, n);
}
const lenGap = (h: string) => (x: BWord) => Math.abs([...x.hanzi].length - [...h].length);

// ---- builders ----
const mcq = (kind: "meaning" | "word" | "listen", w: BWord, pool: BWord[]): Ex => {
  const wrong = pickWrong(pool, w, 3, (x) => x.hanzi, lenGap(w.hanzi));
  if (kind === "meaning") return { t: "meaning", word: w, options: shuffle([w.english, ...wrong.map((x) => x.english)]), answer: w.english };
  return { t: kind, word: w, options: shuffle([w.hanzi, ...wrong.map((x) => x.hanzi)]), answer: w.hanzi };
};

const pinyinEx = (w: BWord, pool: BWord[]): Ex => {
  const tv = retone(w.pinyin).filter((p) => !samePy(p, w.pinyin)).slice(0, 2);
  const others = pickWrong(pool, w, 3, (x) => x.pinyin, lenGap(w.hanzi)).map((x) => x.pinyin).filter((p) => !samePy(p, w.pinyin) && !tv.includes(p));
  const wrong = [...tv, ...others].slice(0, 3);
  return { t: "pinyin", word: w, options: shuffle([w.pinyin, ...wrong]), answer: w.pinyin };
};

const seg = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter("zh", { granularity: "word" }) : null;
export const tokenize = (zh: string): string[] =>
  seg ? [...seg.segment(zh)].map((s) => s.segment).filter((s) => /[一-鿿A-Za-z0-9]/.test(s)) : [...zh].filter((c) => /[一-鿿]/.test(c));

const reorderEx = (s: Sentence): Ex | null => {
  const tokens = tokenize(s.zh);
  if (tokens.length < 3 || tokens.length > 9) return null;
  let sh = shuffle(tokens); let tries = 0;
  while (sh.join("") === tokens.join("") && tries++ < 5) sh = shuffle(tokens);
  return { t: "reorder", zh: s.zh, en: s.en, tokens: sh, answer: tokens };
};

const blankEx = (s: Sentence, words: BWord[], pool: BWord[]): Ex | null => {
  const w = [...words].sort((a, b) => b.hanzi.length - a.hanzi.length).find((x) => s.zh.includes(x.hanzi) && x.hanzi.length <= 4 && x.hanzi !== s.zh.replace(/[，。？！、]/g, ""));
  if (!w) return null;
  const wrong = pickWrong(pool, w, 3, (x) => x.hanzi, lenGap(w.hanzi));
  return { t: "blank", zh: s.zh, en: s.en, display: s.zh.replace(w.hanzi, "＿＿"), options: shuffle([w.hanzi, ...wrong.map((x) => x.hanzi)]), answer: w.hanzi, word: w };
};

export type Mode = "learn" | "test" | "weak";
export interface Stats { words: Record<string, { c: number; w: number }> }

/** Build a session. `learn` = gentle path (recognise -> listen -> recall), `test` = harder mix, `weak` = only weak words. */
export function buildSession(lesson: LessonInput, pool: BWord[], stats: Stats, mode: Mode, size = 20): Ex[] {
  const weakScore = (w: BWord) => { const s = stats.words[w.hanzi]; return s ? (s.w + 1) / (s.c + s.w + 2) : 0.5; };
  let words = shuffle(lesson.words);
  if (mode === "weak") words = words.sort((a, b) => weakScore(b) - weakScore(a)).slice(0, Math.min(8, words.length));
  const exs: Ex[] = [];
  const full = pool.length >= 4 ? pool : lesson.words;
  for (const w of words) {
    if (mode === "test") {
      exs.push(mcq(Math.random() < 0.5 ? "meaning" : "word", w, full));
      if (Math.random() < 0.6) exs.push(pinyinEx(w, full));
    } else {
      const s = stats.words[w.hanzi];
      const known = s && s.c >= 2 && s.c > s.w;
      exs.push(mcq("meaning", w, full));
      if (!known || mode === "weak") exs.push(mcq("listen", w, full));
      exs.push(Math.random() < 0.5 ? pinyinEx(w, full) : mcq("word", w, full));
      if (known || mode === "weak") exs.push({ t: "typePinyin", word: w, answer: w.pinyin });
    }
  }
  const sents = shuffle(lesson.sentences);
  let nS = 0;
  for (const s of sents) {
    if (nS >= (mode === "test" ? 6 : 5)) break;
    const e = (Math.random() < 0.5 ? reorderEx(s) : blankEx(s, lesson.words, full)) ?? blankEx(s, lesson.words, full) ?? reorderEx(s);
    if (e) { exs.push(e); nS++; }
  }
  if (mode !== "test" && lesson.words.length >= 4) exs.push({ t: "match", pairs: shuffle(lesson.words).slice(0, 5).map((w) => ({ hanzi: w.hanzi, english: w.english })) });
  if (mode === "learn" && lesson.words.length) { const w = shuffle(lesson.words)[0]; exs.push({ t: "typeHanzi", word: w, answer: w.hanzi }); }
  return shuffle(exs).slice(0, size); // interleave types, then cap
}

export const wordOf = (e: Ex): BWord | null => ("word" in e ? e.word : null);

// ---- mastery (Khan-style levels) ----
export type Level = "new" | "attempted" | "familiar" | "proficient" | "mastered";
export interface LessonRecord { best?: number; tests?: number; practice?: number }
export function levelOf(words: BWord[], stats: Stats, rec?: LessonRecord): Level {
  if (rec?.best !== undefined && rec.best >= 0.95) return "mastered";
  if (rec?.best !== undefined && rec.best >= 0.8) return "proficient";
  let c = 0, w = 0, covered = 0;
  for (const x of words) { const s = stats.words[x.hanzi]; if (s) { c += s.c; w += s.w; if (s.c >= 2) covered++; } }
  if (!c && !w) return rec?.practice ? "attempted" : "new";
  if (words.length && covered / words.length >= 0.6 && c / (c + w) >= 0.7) return "familiar";
  return "attempted";
}

// ---- tiny self-check (run with: node --experimental-strip-types src/lib/exercises.ts) ----
declare const process: { argv: string[] } | undefined;
if (typeof process !== "undefined" && process.argv[1]?.endsWith("exercises.ts")) {
  const W: BWord[] = [["你好", "nǐ hǎo", "hello"], ["谢谢", "xièxie", "thanks"], ["学校", "xuéxiào", "school"], ["朋友", "péngyou", "friend"], ["老师", "lǎoshī", "teacher"]].map(([hanzi, pinyin, english]) => ({ hanzi, pinyin, english }));
  const ses = buildSession({ words: W, sentences: [{ zh: "我是你的老师。", en: "I am your teacher." }, { zh: "他在学校学习汉语。", en: "He studies Chinese at school." }] }, W, { words: {} }, "learn", 30);
  const bad = ses.filter((e) => ("options" in e && (new Set(e.options).size !== e.options.length || !e.options.includes(e.answer))));
  console.assert(ses.length > 5 && bad.length === 0, "exercise engine self-check failed");
  console.assert(stripTones("xièxie") === "xiexie" && retone("nǐ").every((p) => p !== "nǐ"), "pinyin helpers failed");
  console.log("exercises ok:", ses.length, "items,", [...new Set(ses.map((e) => e.t))].join(","));
}
