// Adds the words of the book's "Preview the Words" tables that the app's lesson data is missing -> src/data/xzzg-extra-words.ts
// Input: JSON from the PDF text parse ({lesson,hanzi,pinyin,pos,en}[]). Pinyin is recomputed (PDF glyphs are garbled).
import fs from "node:fs";
import { pinyin } from "pinyin-pro";
const [, , inFile] = process.argv;
const words = JSON.parse(fs.readFileSync(inFile, "utf8"));
const src = fs.readFileSync("src/data/book-xzzg.ts", "utf8");
const have = src.split(/\n    id: /).slice(1).map((b) => new Set([...b.matchAll(/hanzi: "([^"]+)"/g)].map((m) => m[1])));
const out = {}; let skipped = 0;
for (const w of words) {
  const en = w.en.replace(/^[一-鿿、]+\s*/, "").replace(/\s+/g, " ").trim();
  if (!en || /Language Point/.test(en) || /[（()）]$/.test(w.hanzi) || have[w.lesson - 1]?.has(w.hanzi)) { skipped++; continue; }
  const list = (out[w.lesson] ??= []);
  if (list.some((x) => x.hanzi === w.hanzi)) continue;
  list.push({ hanzi: w.hanzi, pinyin: pinyin(w.hanzi.replace(/[…]/g, ""), { type: "string" }).replace(/\s+/g, ""), english: en });
}
fs.writeFileSync("src/data/xzzg-extra-words.ts", `// Words from the book's "Preview the Words" tables that were missing from book-xzzg.ts (pinyin recomputed). Key: lesson id.\nexport const xzzgExtraWords: Record<number, { hanzi: string; pinyin: string; english: string }[]> = ${JSON.stringify(out, null, 1)};\n`);
console.log("added", Object.values(out).reduce((a, b) => a + b.length, 0), "skipped", skipped);
