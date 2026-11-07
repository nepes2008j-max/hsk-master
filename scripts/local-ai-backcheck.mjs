// Second-opinion check of Russian translations: is each Russian an accurate, natural translation of the English? Flags + suggests a fix.
// Usage: OLLAMA_URL=... node --no-warnings --experimental-strip-types scripts/local-ai-backcheck.mjs <words|ex> <in.json> <out.json>
//   words: in = { hanzi: ru }   (English taken from the data files)      ex: in = { "English text": ru }
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [kind, inp, out] = process.argv.slice(2);
const model = process.env.MODEL ?? "qwen3:30b";
const data = JSON.parse(fs.readFileSync(inp, "utf8"));
let english = (k) => k;
if (kind === "words") {
  const { dictionary } = await import("../src/data/dictionary.ts");
  const { vocabulary } = await import("../src/data/vocabulary.ts");
  const { vocabulary2 } = await import("../src/data/vocabulary2.ts");
  const { allAcademicWords } = await import("../src/data/academic-vocab.ts");
  const m = new Map();
  for (const w of [...vocabulary, ...vocabulary2, ...allAcademicWords, ...dictionary]) if (!m.has(w.hanzi)) m.set(w.hanzi, w);
  english = (k) => { const w = m.get(k); return w ? `${k} (${w.pinyin}) = ${w.english}` : k; };
}
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const keys = Object.keys(data).slice(0, process.env.LIMIT ? +process.env.LIMIT : undefined).filter((k) => !result[k]);
for (let i = 0; i < keys.length; i += 10) {
  const batch = keys.slice(i, i + 10);
  const items = Object.fromEntries(batch.map((k, j) => [String(j), { en: english(k), ru: data[k] }]));
  let g = null;
  try { g = JSON.parse((await generate({ model, stream: false, think: false, format: "json", options: { temperature: 0 }, prompt: `You are a strict Russian-English translation reviewer. For each item, is the Russian an accurate, natural translation of the English (same meaning; nothing important added or lost)? If not, give a better Russian.
Items: ${JSON.stringify(items)}
Reply ONLY JSON with the same keys: {"0":{"ok":true|false,"fix":"better Russian, only if not ok"}}` })).response); } catch { /* next */ }
  batch.forEach((k, j) => { const v = g?.[String(j)]; result[k] = { ru: data[k], ok: v?.ok === true, fix: v?.ok === true ? undefined : v?.fix }; });
  fs.writeFileSync(out, JSON.stringify(result, null, 1));
  console.log(`${Object.keys(result).length}/${Object.keys(data).length} checked, ${Object.values(result).filter((r) => !r.ok).length} flagged`);
}
console.log("finished");
