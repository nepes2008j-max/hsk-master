// Russian translations of detailedExplanation / tips / comparisons for every grammar point (local Ollama).
// Usage: node --no-warnings --experimental-strip-types scripts/local-ai-grammar-ru.mjs <model> <out.json>
import fs from "node:fs";
const [model, out] = process.argv.slice(2);
const { grammar } = await import("../src/data/grammar.ts");
const { grammar2 } = await import("../src/data/grammar2.ts");
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const cjk = (s) => (s.match(/[一-鿿]/g) ?? []).length;
async function ask(prompt) {
  const r = await fetch("http://localhost:11434/api/generate", { method: "POST", body: JSON.stringify({ model, prompt, stream: false, think: false, format: "json", options: { temperature: 0.2 } }) });
  try { return JSON.parse((await r.json()).response); } catch { return null; }
}
for (const p of [...grammar, ...grammar2]) {
  if (result[p.id] || !p.detailedExplanation) continue;
  const src = { detailedExplanation: p.detailedExplanation, tips: p.tips ?? [], comparisons: p.comparisons ?? [] };
  const srcLen = JSON.stringify(src).length, srcCjk = cjk(JSON.stringify(src));
  for (let tries = 0; tries < 3; tries++) {
    const g = await ask(`Translate this Chinese-grammar lesson from English into natural, clear Russian for a student. Keep ALL Chinese characters and pinyin exactly as they are (do not translate or remove them); translate only the English explanation text. Keep the same structure: same number of tips and comparisons, same order.
Grammar point: ${p.title} (${p.pattern})
JSON to translate:
${JSON.stringify(src)}
Reply ONLY JSON with the same three keys: {"detailedExplanation":"...","tips":["..."],"comparisons":["..."]}`);
    const ok = g && typeof g.detailedExplanation === "string" && Array.isArray(g.tips) && g.tips.length === src.tips.length && Array.isArray(g.comparisons) && g.comparisons.length === src.comparisons.length
      && [g.detailedExplanation, ...g.tips, ...g.comparisons].every((x) => typeof x === "string" && /[а-яё]/i.test(x))
      && cjk(JSON.stringify(g)) >= srcCjk * 0.9
      && JSON.stringify(g).length > srcLen * 0.6 && JSON.stringify(g).length < srcLen * 2.2;
    if (ok) { result[p.id] = g; fs.writeFileSync(out, JSON.stringify(result, null, 1)); console.log(`ok ${p.id} ${p.title}`); break; }
    console.log(`  retry ${p.id} (${tries + 1})`);
  }
}
console.log(`finished: ${Object.keys(result).length}`);
