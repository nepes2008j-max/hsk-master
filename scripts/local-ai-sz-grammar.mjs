// Grammar section for the Practice-1 book lessons (pattern, explanation EN+RU, 3 examples zh/en/ru) from the book's table-of-contents language points.
// Usage: OLLAMA_URL=... node --no-warnings --experimental-strip-types scripts/local-ai-sz-grammar.mjs <model> <out.json>
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, out] = process.argv.slice(2);
const toc = JSON.parse(fs.readFileSync(new URL("./sz-toc-points.json", import.meta.url), "utf8"));
const { bookWords } = await import("../src/data/book-words.ts");
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
async function ask(prompt, t = 0.3) {
  try { return JSON.parse((await generate({ model, prompt, stream: false, think: false, format: "json", options: { temperature: t } })).response); } catch { return null; }
}
const cjk = /^[一-鿿，。？！、…“”：；（）\s]+$/;
for (const n of Object.keys(toc).map(Number).sort((a, b) => a - b)) {
  if (result[n]) continue;
  const raw = toc[n].join(" ");
  const words = bookWords.filter((w) => w.lesson === n).map((w) => w.hanzi).join(" ");
  for (let tries = 0; tries < 4; tries++) {
    const g = await ask(`You write the grammar section of lesson ${n} of a Chinese textbook for beginners (HSK 1-3).
The textbook's table of contents lists these language points for the lesson (raw text, may be messy; items are numbered or run together): ${raw}
Lesson vocabulary (use it in examples when natural): ${words}
Return JSON {"points":[{"pattern":"<short Chinese structure, e.g. 是……的 or 动词重叠 VV>","name_en":"<English name>","explanation_en":"<2-3 clear sentences: meaning, word order, typical use>","explanation_ru":"<the same in accurate Russian>","examples":[{"zh":"...","en":"...","ru":"..."},{"zh":"...","en":"...","ru":"..."},{"zh":"...","en":"...","ru":"..."}]}]}
One entry per language point listed (split them correctly). Examples: simple natural sentences that clearly show the pattern, each ending with 。？or ！.`);
    const pts = g?.points;
    if (!Array.isArray(pts) || pts.length < 1 || pts.length > 8) { console.log(`  retry ${n}: points`); continue; }
    const bad = pts.find((p) => !p.pattern || !p.name_en || !p.explanation_en || !/[а-яё]/i.test(p.explanation_ru ?? "") || !Array.isArray(p.examples) || p.examples.length < 3 ||
      p.examples.some((e) => typeof e.zh !== "string" || !cjk.test(e.zh) || !/[。？！]$/.test(e.zh) || !e.en || !/[а-яё]/i.test(e.ru ?? "")));
    if (bad) { console.log(`  retry ${n}: invalid ${JSON.stringify(bad).slice(0, 90)}`); continue; }
    const chk = process.env.NOCHECK ? { bad: [] } : await ask(`You are a strict Chinese-teaching editor. Lesson ${n}, language points: ${raw}
${pts.map((p, i) => `${i + 1}. ${p.pattern} (${p.name_en}): ${p.explanation_en}\n` + p.examples.map((e) => `   ${e.zh} | ${e.en} | ${e.ru}`).join("\n")).join("\n")}
List the numbers of points whose explanation is wrong/misleading, or that have an ungrammatical Chinese example, or an inaccurate English/Russian translation. Reply ONLY JSON {"bad":[numbers],"notes":"short"}`, 0);
    if (!chk || (Array.isArray(chk.bad) && chk.bad.length)) { console.log(`  reject ${n}: ${JSON.stringify(chk?.bad)} ${chk?.notes ?? ""}`); continue; }
    result[n] = pts.map((p) => ({ pattern: p.pattern.trim(), nameEn: p.name_en.trim(), explanation: p.explanation_en.trim(), explanationRu: p.explanation_ru.trim(), examples: p.examples.slice(0, 3).map((e) => ({ zh: e.zh.trim(), en: e.en.trim(), ru: e.ru.trim() })) }));
    fs.writeFileSync(out, JSON.stringify(result, null, 1));
    console.log(`ok lesson ${n}: ${pts.map((p) => p.pattern).join(" | ")}`);
    break;
  }
}
console.log(`finished: ${Object.keys(result).length}/${Object.keys(toc).length}`);
