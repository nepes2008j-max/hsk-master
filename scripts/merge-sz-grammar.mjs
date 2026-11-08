// Merge reviewed grammar of the Practice-1 book lessons into src/data/sz-grammar.ts. Usage: node scripts/merge-sz-grammar.mjs <sz-grammar.json>
import fs from "node:fs";
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const body = Object.entries(data).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join("\n");
fs.writeFileSync("src/data/sz-grammar.ts", `// Grammar of the Practice-1 book lessons (from the book's table of contents; explanations + examples by local AI, reviewed). Key: lesson number.
export const szGrammar: Record<number, { pattern: string; nameEn: string; explanation: string; explanationRu: string; examples: { zh: string; en: string; ru: string }[] }[]> = {
${body}
};
`);
console.log(Object.keys(data).length, "lessons written");
