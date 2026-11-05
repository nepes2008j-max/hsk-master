// Russian translations of the English text inside grammar exercises (mcq prompts, reorder/translate "english"), keyed by the English string.
// Usage: OLLAMA_URL=... node --no-warnings --experimental-strip-types scripts/local-ai-exercise-ru.mjs <model> <out.json>
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, out] = process.argv.slice(2);
const { grammarExercises } = await import("../src/data/grammar-exercises.ts");
const { grammarExercises2 } = await import("../src/data/grammar-exercises2.ts");
const [SI, SN] = (process.env.SHARD ?? "0/1").split("/").map(Number);
const texts = new Set();
for (const list of [...Object.values(grammarExercises), ...Object.values(grammarExercises2)]) for (const e of list) {
  const t = e.type === "mcq" ? e.prompt : e.english;
  if (t && /[A-Za-z]{3}/.test(t)) texts.add(t);
}
const all = [...texts].sort();
const mine = all.filter((_, i) => i % SN === SI);
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const todo = mine.filter((t) => !result[t]);
console.log(`${todo.length} to translate (${all.length} unique English strings)`);
for (let i = 0; i < todo.length; i += 8) {
  const batch = todo.slice(i, i + 8);
  const obj = Object.fromEntries(batch.map((t, j) => [String(j), t]));
  let g = null;
  try { g = JSON.parse((await generate({ model, stream: false, think: false, format: "json", options: { temperature: 0.1 }, prompt: `Translate these English sentences (from a Chinese grammar exercise) into natural Russian. Keep any Chinese characters and quoted Chinese words exactly as they are. Keep meaning exact (do not add or drop information).
Reply ONLY JSON with the same keys: ${JSON.stringify(obj)}` })).response); } catch { /* retry next loop */ }
  for (const [j, t] of batch.entries()) {
    const r = g?.[String(j)];
    const cjk = (t.match(/[一-鿿]/g) ?? []).length;
    if (typeof r === "string" && /[а-яё]/i.test(r) && (r.match(/[一-鿿]/g) ?? []).length >= cjk) result[t] = r.trim();
  }
  fs.writeFileSync(out, JSON.stringify(result, null, 1));
  console.log(`${Object.keys(result).length}/${mine.length}`);
}
console.log("finished");
