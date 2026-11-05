// Append translated detailedExplanation/tips/comparisons to src/data/grammar-translations-ru.ts. Usage: node scripts/merge-grammar-ru.mjs <results.json>
import fs from "node:fs";
const data = Object.assign({}, ...process.argv.slice(2).map((f) => JSON.parse(fs.readFileSync(f, "utf8"))));
const p = "src/data/grammar-translations-ru.ts";
let s = fs.readFileSync(p, "utf8"), n = 0;
for (const [id, g] of Object.entries(data)) {
  const re = new RegExp(`^(  ${id}: \\{.*?)( \\},?)$`, "m");
  if (!re.test(s) || s.match(re)[1].includes("detailedExplanation")) continue;
  s = s.replace(re, (_, a, b) => `${a}, detailedExplanation: ${JSON.stringify(g.detailedExplanation)}, tips: ${JSON.stringify(g.tips)}, comparisons: ${JSON.stringify(g.comparisons)}${b}`);
  n++;
}
s = s.replace("examples: string[] }>", "examples: string[]; detailedExplanation?: string; tips?: string[]; comparisons?: string[] }>");
fs.writeFileSync(p, s);
console.log(n, "points updated");
