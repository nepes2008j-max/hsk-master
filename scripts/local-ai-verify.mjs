// Second-opinion pass over generated exercises with a (stronger) local model.
// Usage: node scripts/local-ai-verify.mjs <model> <in.json> <out.json>   (writes kept exercises + prints drops)
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, inp, out] = process.argv.slice(2);
const data = JSON.parse(fs.readFileSync(inp, "utf8"));
const { grammar } = await import("../src/data/grammar.ts");
const { grammar2 } = await import("../src/data/grammar2.ts");
const title = Object.fromEntries([...grammar, ...grammar2].map((p) => [p.id, `${p.title} (${p.pattern})`]));
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
async function ask(prompt) {
  try { return JSON.parse((await generate({ model, prompt, stream: false, think: false, format: "json", options: { temperature: 0 } })).response); } catch { return null; }
}
let kept = 0, dropped = 0;
for (const [id, list] of Object.entries(data)) {
  if (result[id]) continue;
  const keep = [];
  for (const e of list) {
    let ok = true, why = "";
    if (e.type === "mcq" || e.type === "fill") {
      const cands = e.type === "mcq" ? e.options : [e.answer, ...e.distractors];
      const shown = e.type === "mcq" ? cands.map((o, i) => `${i}: ${o}`) : cands.map((c, i) => `${i}: ${e.sentence.replace("___", c)}`);
      const v = await ask(`HSK grammar exercise. Grammar point: ${title[id]}.
${e.type === "mcq" ? "Question: " + e.prompt : "Fill-in sentence: " + e.sentence + " (which candidate fills the blank correctly?)"}
Candidates:\n${shown.join("\n")}
Be strict. List the index of EVERY candidate that is a correct answer (grammatical, natural Chinese, and matching the question). Reply ONLY JSON {"valid":[indexes]}`);
      const want = e.type === "mcq" ? e.answer : 0;
      ok = Array.isArray(v?.valid) && v.valid.length === 1 && v.valid[0] === want;
      why = `valid=${JSON.stringify(v?.valid)} want=${want}`;
    } else {
      const zh = e.type === "reorder" ? e.answer.join("") : e.answer;
      const v = await ask(`Check an HSK translation exercise. Grammar point: ${title[id]}.
English: ${e.english}
Chinese answer: ${zh}
Is the Chinese grammatical and natural, an accurate translation of the English (same meaning, not weaker/stronger), and does it use the grammar point? Reply ONLY JSON {"ok":true|false,"problem":"short reason"}`);
      ok = v?.ok === true; why = v?.problem ?? "no verdict";
    }
    if (ok) { keep.push(e); kept++; } else { dropped++; console.log(`drop ${id} ${e.type}: ${e.sentence ?? e.prompt ?? e.english} -> ${why}`); }
  }
  result[id] = keep; fs.writeFileSync(out, JSON.stringify(result, null, 1));
}
console.log(`verified: kept ${kept}, dropped ${dropped}`);
