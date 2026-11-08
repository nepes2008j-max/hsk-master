// Merge reviewed Russian for HYJC/XZZG grammar + titles into src/data/book-grammar-ru.ts. Usage: node scripts/merge-book-grammar-ru.mjs <book-grammar-ru.json>
import fs from "node:fs";
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const body = Object.entries(data).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n");
fs.writeFileSync("src/data/book-grammar-ru.ts", `// Russian for the grammar sections + titles of HYJC / XZZG (local AI, reviewed). Key: "<book>-<lesson id>".
export const bookGrammarRu: Record<string, { title: string; points: { pattern: string; explanation: string; examples: string[] }[] }> = {
${body}
};
`);
console.log(Object.keys(data).length, "lessons written");
