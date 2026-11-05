// Append generated exercises (JSON from local-ai-exercises.mjs) to the grammar-exercises TS files, JSON-style like existing ones.
// Usage: node scripts/merge-exercises.mjs <results.json>   (add --dry to only print counts)
import fs from "node:fs";
const [file, dry] = [process.argv[2], process.argv.includes("--dry")];
const data = JSON.parse(fs.readFileSync(file, "utf8"));
const files = ["src/data/grammar-exercises.ts", "src/data/grammar-exercises2.ts"].map((p) => ({ p, s: fs.readFileSync(p, "utf8") }));
let added = 0;
for (const [id, list] of Object.entries(data)) {
  if (!list.length) continue;
  const lines = list.map((e) => `    ${JSON.stringify(e)},\n`).join("");
  const f = files.find((x) => new RegExp(`^  ${id}: \\[`, "m").test(x.s)) ?? files[1];
  const start = f.s.search(new RegExp(`^  ${id}: \\[`, "m"));
  if (start >= 0) {
    const end = f.s.indexOf("\n  ],", start);
    f.s = f.s.slice(0, end + 1) + lines + f.s.slice(end + 1);
  } else { // point without an exercise block yet
    const end = f.s.lastIndexOf("\n};");
    f.s = f.s.slice(0, end + 1) + `  ${id}: [\n${lines}  ],\n` + f.s.slice(end + 1);
  }
  added += list.length;
}
console.log(`${added} exercises ${dry ? "(dry run, nothing written)" : "merged"}`);
if (!dry) for (const f of files) fs.writeFileSync(f.p, f.s);
