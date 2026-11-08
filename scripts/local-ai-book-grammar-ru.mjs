// Russian for the grammar sections + lesson titles of the two older books (HYJC, XZZG).
// Usage: OLLAMA_URL=... node --no-warnings --experimental-strip-types scripts/local-ai-book-grammar-ru.mjs <model> <out.json>
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, out] = process.argv.slice(2);
const hy = await import("../src/data/book-hyjc.ts"), xz = await import("../src/data/book-xzzg.ts");
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
async function ask(prompt, t = 0.2) {
  try { return JSON.parse((await generate({ model, prompt, stream: false, think: false, format: "json", options: { temperature: t } })).response); } catch { return null; }
}
const jobs = [...hy.lessons.map((l) => ["hyjc", l]), ...xz.xzzgLessons.map((l) => ["xzzg", l])];
for (const [book, l] of jobs) {
  const key = `${book}-${l.id}`;
  if (result[key]) continue;
  for (let tries = 0; tries < 3; tries++) {
    const g = await ask(`Translate textbook content from English into accurate, natural Russian. Keep Chinese characters, pinyin and patterns (like 是…的) unchanged inside the text.
Lesson title: ${l.titleEn}
Grammar points (JSON): ${JSON.stringify(l.grammar.map((p) => ({ pattern: p.pattern, explanation: p.explanation, examples: p.examples.map((e) => e.en) })))}
Reply ONLY JSON {"title":"<Russian title>","points":[{"pattern":"<pattern, translate only English words in it, keep Chinese>","explanation":"<Russian>","examples":["<Russian of example 1>","..."]}]} with exactly ${l.grammar.length} points and the same number of examples per point.`);
    const ok = g && typeof g.title === "string" && /[а-яё]/i.test(g.title) && Array.isArray(g.points) && g.points.length === l.grammar.length &&
      g.points.every((p, i) => typeof p.explanation === "string" && /[а-яё]/i.test(p.explanation) && Array.isArray(p.examples) && p.examples.length === l.grammar[i].examples.length && p.examples.every((x) => typeof x === "string" && /[а-яё]/i.test(x)));
    if (!ok) { console.log(`  retry ${key}`); continue; }
    result[key] = { title: g.title.trim(), points: g.points.map((p, i) => ({ pattern: (typeof p.pattern === "string" ? p.pattern : l.grammar[i].pattern).trim(), explanation: p.explanation.trim(), examples: p.examples.map((x) => x.trim()) })) };
    fs.writeFileSync(out, JSON.stringify(result, null, 1));
    console.log(`ok ${key}: ${g.title}`);
    break;
  }
}
console.log(`finished: ${Object.keys(result).length}/${jobs.length}`);
