// Example sentences (zh + pinyin + en + ru) for STEM/Special words via local Ollama; pinyin comes from pinyin-pro, not the model.
// Usage: node --no-warnings --experimental-strip-types scripts/local-ai-examples.mjs <model> <out.json> [limit]
import fs from "node:fs";
import { createRequire } from "node:module";
const { pinyin } = createRequire(import.meta.url)("pinyin-pro");
const [model, out, limitArg] = process.argv.slice(2);
const { vocabulary } = await import("../src/data/vocabulary.ts");
const { vocabulary2 } = await import("../src/data/vocabulary2.ts");
const { allAcademicWords, chemLabCategories } = await import("../src/data/academic-vocab.ts");
const have = new Set([...vocabulary, ...vocabulary2].filter((w) => w.example).map((w) => w.hanzi));
const seen = new Set();
const targets = [...allAcademicWords.filter((w) => !w.id.startsWith("cl")), ...chemLabCategories.flatMap((c) => c.words)]
  .filter((w) => !have.has(w.hanzi) && !seen.has(w.hanzi) && seen.add(w.hanzi))
  .slice(0, limitArg ? +limitArg : undefined);
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const seg = new Intl.Segmenter("zh", { granularity: "word" });
const py = (zh) => [...seg.segment(zh)].map((s) => pinyin(s.segment, { toneType: "symbol", type: "array" }).join("")).join(" ").replace(/\s*，\s*/g, ", ").replace(/\s*、\s*/g, ", ").replace(/\s*。/g, ".").replace(/\s*？/g, "?").replace(/\s*！/g, "!").replace(/^./, (c) => c.toUpperCase());
async function ask(prompt, t = 0.4) {
  const r = await fetch("http://localhost:11434/api/generate", { method: "POST", body: JSON.stringify({ model, prompt, stream: false, think: false, format: "json", options: { temperature: t } }) });
  try { return JSON.parse((await r.json()).response); } catch { return null; }
}
console.log(`${targets.length} target words, ${Object.keys(result).length} done`);
for (const w of targets) {
  if (result[w.hanzi]) continue;
  const meaning = w.english;
  let done = false;
  for (let tries = 0; tries < 3 && !done; tries++) {
    const g = await ask(`Write ONE short, natural Chinese example sentence (simple HSK 1-3 grammar, 6-16 characters, classroom/science/everyday context) that contains the word "${w.hanzi}" exactly, used with its meaning: ${meaning}. Also give an accurate English translation and an accurate Russian translation.
Reply ONLY JSON {"zh":"...","en":"...","ru":"..."}`);
    if (!g || typeof g.zh !== "string" || !g.zh.includes(w.hanzi) || g.zh.length > 26 || !/[。？！]$/.test(g.zh) || !/^[一-鿿，。？！、]+$/.test(g.zh) || !g.en || !/[а-яё]/i.test(g.ru ?? "")) continue;
    const chk = await ask(`Check an example sentence for a Chinese learner. Word: ${w.hanzi} (${meaning}).
Chinese: ${g.zh}
English: ${g.en}
Russian: ${g.ru}
Is the Chinese grammatical and natural, does it use the word with that meaning, and are BOTH translations accurate? Be strict. Reply ONLY JSON {"ok":true|false,"problem":"short reason"}`, 0);
    if (chk?.ok !== true) { console.log(`  reject ${w.hanzi}: ${chk?.problem ?? "no verdict"} :: ${g.zh}`); continue; }
    result[w.hanzi] = { hanzi: g.zh, pinyin: py(g.zh), english: g.en.trim(), ru: g.ru.trim() };
    fs.writeFileSync(out, JSON.stringify(result, null, 1));
    console.log(`ok ${w.hanzi}: ${g.zh} | ${result[w.hanzi].pinyin} | ${g.en}`);
    done = true;
  }
}
console.log(`finished: ${Object.keys(result).length}/${targets.length}`);
