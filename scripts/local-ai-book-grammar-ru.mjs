// Russian for the grammar sections + lesson titles of the two older books (HYJC, XZZG). One grammar point per request (more robust).
// Usage: OLLAMA_URL=... node --no-warnings --experimental-strip-types scripts/local-ai-book-grammar-ru.mjs <model> <out.json>
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, out] = process.argv.slice(2);
const hy = await import("../src/data/book-hyjc.ts"), xz = await import("../src/data/book-xzzg.ts");
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
async function ask(prompt, t = 0.2) {
  try { return JSON.parse((await generate({ model, prompt, stream: false, think: false, format: "json", options: { temperature: t } })).response); } catch { return null; }
}
const cyr = (x) => typeof x === "string" && /[а-яё]/i.test(x);
const [SI, SN] = (process.env.SHARD ?? "0/1").split("/").map(Number);
const skip = process.env.SKIP && fs.existsSync(process.env.SKIP) ? JSON.parse(fs.readFileSync(process.env.SKIP, "utf8")) : {};
const jobs = [...hy.lessons.map((l) => ["hyjc", l]), ...xz.xzzgLessons.map((l) => ["xzzg", l])].filter(([b, l], i) => i % SN === SI && !skip[`${b}-${l.id}`]);
for (const [book, l] of jobs) {
  const key = `${book}-${l.id}`;
  const r = result[key] ?? { title: "", points: [] };
  if (!r.title) {
    const g = await ask(`Translate this textbook lesson title from English into natural Russian. Title: "${l.titleEn}". Reply ONLY JSON {"ru":"..."}`);
    if (cyr(g?.ru)) r.title = g.ru.trim();
  }
  for (let i = r.points.length; i < l.grammar.length; i++) {
    const p = l.grammar[i];
    let done = null;
    for (let tries = 0; tries < 3 && !done; tries++) {
      const g = await ask(`Translate textbook grammar content from English into accurate, natural Russian. Keep Chinese characters and patterns (like 是…的) unchanged.
Pattern: ${p.pattern}
Explanation: ${p.explanation}
Examples (English): ${JSON.stringify(p.examples.map((e) => e.en))}
Reply ONLY JSON {"pattern":"<pattern with English words translated, Chinese kept>","explanation":"<Russian>","examples":[<Russian of each example, same order, ${p.examples.length} items>]}`);
      if (cyr(g?.explanation) && Array.isArray(g.examples) && g.examples.length === p.examples.length && g.examples.every(cyr))
        done = { pattern: (typeof g.pattern === "string" && g.pattern ? g.pattern : p.pattern).trim(), explanation: g.explanation.trim(), examples: g.examples.map((x) => x.trim()) };
    }
    if (!done) { console.log(`  gave up ${key} point ${i + 1}`); break; }
    r.points.push(done);
  }
  if (r.title && r.points.length === l.grammar.length) { result[key] = r; fs.writeFileSync(out, JSON.stringify(result, null, 1)); console.log(`ok ${key}: ${r.title}`); }
}
console.log(`finished: ${Object.keys(result).length}/${jobs.length}`);
