// Russian glosses for Special-deck words via local Ollama. Usage: node scripts/local-ai-ru.mjs <fromNum> <toNum> <out.json>
import fs from "node:fs";
const [from, to, out] = [+process.argv[2], +process.argv[3], process.argv[4]];
const src = fs.readFileSync("src/data/academic-vocab.ts", "utf8");
const rows = [...src.matchAll(/id: "cl(\d+)", hanzi: "([^"]+)", pinyin: "([^"]*)", english: "([^"]*)"/g)]
  .map((m) => ({ n: +m[1], id: "cl" + m[1], hanzi: m[2], pinyin: m[3], english: m[4] }))
  .filter((r) => r.n >= from && r.n <= to);
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : {};
const todo = rows.filter((r) => !result[r.id]);
for (let i = 0; i < todo.length; i += 8) {
  const batch = todo.slice(i, i + 8);
  const prompt = `You translate Chinese science/classroom vocabulary into Russian flashcard meanings.
For each item write a short, natural Russian dictionary gloss (use "; " between two senses, no explanations).
Return ONLY a JSON object mapping each id to its Russian string.
${batch.map((r) => `${r.id} | ${r.hanzi} | ${r.pinyin} | ${r.english}`).join("\n")}`;
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    body: JSON.stringify({ model: "qwen3:14b", prompt, stream: false, think: false, format: "json", options: { temperature: 0.2 } }),
  });
  const obj = JSON.parse((await res.json()).response);
  for (const r of batch) if (typeof obj[r.id] === "string" && obj[r.id].trim()) result[r.id] = obj[r.id].trim();
  fs.writeFileSync(out, JSON.stringify(result, null, 1));
  console.log(`${Object.keys(result).length}/${rows.length}`);
}
