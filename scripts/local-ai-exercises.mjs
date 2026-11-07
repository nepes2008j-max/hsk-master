// Generate + validate + self-check extra grammar exercises with local Ollama.
// Usage: node --no-warnings --experimental-strip-types scripts/local-ai-exercises.mjs <model> <out.json> [pointIds...]
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, out, ...ids] = process.argv.slice(2);
const { grammar } = await import("../src/data/grammar.ts");
const { grammar2 } = await import("../src/data/grammar2.ts");
const { grammarExercises } = await import("../src/data/grammar-exercises.ts");
const { grammarExercises2 } = await import("../src/data/grammar-exercises2.ts");
const TARGET = 10, TYPES = ["mcq", "fill", "translate", "reorder"], DIFF = [3, 3, 3, 2];
const [SI, SN] = (process.env.SHARD ?? "0/1").split("/").map(Number); // SHARD=i/n splits the points over n workers
const points = [...grammar, ...grammar2].filter((p, i) => i % SN === SI && (!ids.length || ids.includes(String(p.id))));
const existing = (id) => grammarExercises[id] ?? grammarExercises2[id] ?? [];
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const cjk = (s) => /[一-鿿]/.test(s);
const uniq = (a) => new Set(a).size === a.length;
const key = (e) => e.type === "mcq" ? e.options[e.answer] + e.prompt : e.type === "fill" ? e.sentence : e.type === "reorder" ? e.answer.join("") : e.answer;

function valid(e) {
  if (![1, 2, 3].includes(e.difficulty)) return false;
  if (e.type === "mcq") return typeof e.prompt === "string" && Array.isArray(e.options) && e.options.length === 4 && e.options.every((o) => typeof o === "string" && o) && uniq(e.options) && Number.isInteger(e.answer) && e.answer >= 0 && e.answer < 4;
  if (e.type === "fill") return typeof e.sentence === "string" && e.sentence.split("___").length === 2 && cjk(e.sentence) && typeof e.answer === "string" && e.answer && Array.isArray(e.distractors) && e.distractors.length === 3 && uniq([...e.distractors, e.answer]);
  if (e.type === "reorder") return typeof e.english === "string" && Array.isArray(e.words) && Array.isArray(e.answer) && e.words.length >= 3 && e.words.length <= 8 && [...e.words].sort().join("|") === [...e.answer].sort().join("|") && e.words.join("|") !== e.answer.join("|") && cjk(e.answer.join(""));
  if (e.type === "translate") return typeof e.english === "string" && typeof e.answer === "string" && cjk(e.answer) && (e.accept === undefined || (Array.isArray(e.accept) && e.accept.every((a) => typeof a === "string")));
  return false;
}
async function ask(prompt) {
  try { return JSON.parse((await generate({ model, prompt, stream: false, think: false, format: "json", options: { temperature: 0.5 } })).response); } catch { return null; }
}
const SHAPES = `mcq: {"type":"mcq","prompt":"<English question>","options":["..","..","..",".."],"answer":<0-3>,"difficulty":<1-3>}
fill: {"type":"fill","sentence":"他___水。","answer":"喝","distractors":["..","..",".."],"difficulty":<1-3>}   (exactly one ___ blank)
reorder: {"type":"reorder","english":"She reads books.","words":["书","她","看"],"answer":["她","看","书"],"difficulty":<1-3>}   (words = shuffled answer tokens, 3-8 tokens)
translate: {"type":"translate","english":"I eat rice.","answer":"我吃饭。","accept":["我吃饭"],"difficulty":<1-3>}`;

for (const p of points) {
  const have = existing(p.id), got = result[p.id] ?? [];
  const seen = new Set([...have, ...got].map(key));
  for (let round = 0; round < 3 && have.length + got.length < TARGET; round++) {
    const need = TARGET - have.length - got.length, start = (have.length + got.length) % 4;
    const spec = Array.from({ length: need }, (_, i) => `${TYPES[(start + i) % 4]} (difficulty ${DIFF[(start + i) % 4]})`).join(", ");
    const gen = await ask(`You write HSK 1-2 Chinese grammar practice for the grammar point below. Use ONLY simple HSK 1-2 vocabulary, Simplified Chinese, natural correct Chinese. Exercises must really test this pattern (difficulty 3 = tricky: contrast with a similar pattern or a common learner mistake). Exactly ONE option/answer must be correct.
Grammar point: ${p.title} | pattern: ${p.pattern}
Explanation: ${p.explanation}
Examples: ${p.examples.map((x) => x.hanzi + " = " + x.english).join(" / ")}
Do NOT repeat these existing sentences: ${[...seen].slice(0, 14).join(" ; ")}
Write exactly ${need} NEW exercises, in this order: ${spec}.
Shapes:\n${SHAPES}
Return ONLY JSON: {"exercises":[...]}`);
    for (const e of gen?.exercises ?? []) {
      if (!valid(e) || seen.has(key(e))) continue;
      const chk = await ask(`Check this Chinese grammar exercise for HSK learners. Grammar point: ${p.title} (${p.pattern}).
Exercise: ${JSON.stringify(e)}
Is the Chinese natural and correct, is exactly ONE answer correct (for mcq/fill the marked one; no other option also works), does it test this pattern, and is the English consistent? Reply ONLY JSON {"ok":true|false,"problem":"short reason if not ok"}`);
      let ok = chk?.ok === true, why = chk?.problem;
      // Solver check: the model answers blind; it must find exactly the one intended answer (catches two-correct-answer items).
      if (ok && (e.type === "mcq" || e.type === "fill")) {
        const cands = e.type === "mcq" ? e.options : [e.answer, ...e.distractors];
        const shown = e.type === "mcq" ? e.options.map((o, i) => `${i}: ${o}`) : cands.map((c, i) => `${i}: ${e.sentence.replace("___", c)}`);
        const sol = await ask(`${e.type === "mcq" ? "Question: " + e.prompt : "Which candidate sentences are correct, natural Chinese (HSK level)? Fill-in sentence: " + e.sentence}
Candidates:\n${shown.join("\n")}
List the index of EVERY candidate that is a correct answer / correct natural Chinese. Reply ONLY JSON {"valid":[indexes]}`);
        const want = e.type === "mcq" ? e.answer : 0;
        if (!(Array.isArray(sol?.valid) && sol.valid.length === 1 && sol.valid[0] === want)) { ok = false; why = `solver found ${JSON.stringify(sol?.valid)} not [${want}]`; }
      }
      if (ok) { got.push(e); seen.add(key(e)); } else console.log(`  drop ${p.id}: ${why ?? "no verdict"} :: ${key(e)}`);
    }
  }
  result[p.id] = got; fs.writeFileSync(out, JSON.stringify(result, null, 1));
  console.log(`point ${p.id} "${p.title}": +${got.length} (now ${have.length + got.length})`);
}
