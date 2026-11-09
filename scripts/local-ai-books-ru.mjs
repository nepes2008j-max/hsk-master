// Russian glosses for every book word (HYJC, XZZG, Practice 1) that has none yet (local Ollama). Output: { hanzi: "русский перевод" }
// Usage: OLLAMA_URL=... SHARD=i/n node --no-warnings --experimental-strip-types scripts/local-ai-words-ru.mjs <model> <out.json>
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, out] = process.argv.slice(2);
const { dictionary } = await import("../src/data/dictionary.ts");
const { vocabulary } = await import("../src/data/vocabulary.ts");
const { vocabulary2 } = await import("../src/data/vocabulary2.ts");
const { allAcademicWords } = await import("../src/data/academic-vocab.ts");
const { ru } = await import("../src/data/translations-ru.ts");
const [SI, SN] = (process.env.SHARD ?? "0/1").split("/").map(Number);
const { wordsRuExtra } = await import("../src/data/words-ru-extra.ts");
const hy = await import("../src/data/book-hyjc.ts"), xz = await import("../src/data/book-xzzg.ts"), bw = await import("../src/data/book-words.ts");
const { xzzgExtraWords } = await import("../src/data/xzzg-extra-words.ts");
const seen = new Map();
for (const w of [...hy.lessons.flatMap((l) => l.words), ...xz.xzzgLessons.flatMap((l) => l.words), ...bw.bookWords, ...Object.values(xzzgExtraWords).flat()]) if (!seen.has(w.hanzi)) seen.set(w.hanzi, w);
const all = [...seen.values()].filter((w) => !ru[w.hanzi] && !wordsRuExtra[w.hanzi]);
const mine = all.filter((_, i) => i % SN === SI);
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const todo = mine.filter((w) => !result[w.hanzi]);
console.log(`${todo.length} to translate (${all.length} words without Russian)`);
for (let i = 0; i < todo.length; i += 12) {
  const batch = todo.slice(i, i + 12);
  const obj = Object.fromEntries(batch.map((w, j) => [String(j), `${w.hanzi} (${w.pinyin}) = ${w.english}`]));
  let g = null;
  try { g = JSON.parse((await generate({ model, stream: false, think: false, format: "json", options: { temperature: 0.1 }, prompt: `You write a Chinese-Russian dictionary. For each entry give a short, accurate Russian gloss (like a dictionary: 1-3 senses separated by "; ", no explanations, no Chinese characters).
Each value must be ONLY the Russian gloss, e.g. {"0":"квадрат (вторая степень)"}: no Chinese characters, no pinyin, no "=" and do not repeat the input.
Reply ONLY JSON with the same keys: ${JSON.stringify(obj)}` })).response); } catch { /* next loop */ }
  for (const [j, w] of batch.entries()) {
    let r = g?.[String(j)];
    if (typeof r === "string" && r.includes(" = ")) r = r.split(" = ").pop(); // model sometimes echoes "字 (pinyin) = gloss"
    if (typeof r === "string" && /[а-яё]/i.test(r) && r.length <= 90 && !/[一-鿿]/.test(r)) result[w.hanzi] = r.trim();
  }
  fs.writeFileSync(out, JSON.stringify(result, null, 1));
  console.log(`${Object.keys(result).length}/${mine.length}`);
}
console.log("finished");
