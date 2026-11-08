// Merge reviewed stories (JSON from local-ai-stories.mjs) into src/data/stories.ts, adding per-word pinyin (pinyin-pro, context aware).
// Usage: node --no-warnings --experimental-strip-types scripts/merge-stories.mjs <stories.json>
import fs from "node:fs";
import { createRequire } from "node:module";
const { pinyin } = createRequire(import.meta.url)("pinyin-pro");
const seg = new Intl.Segmenter("zh", { granularity: "word" });
const stories = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const NAMES = new Set(["小明", "小红", "马克", "艾米丽", "北京", "天安门", "长城", "故宫", "中国"]); // proper nouns get a capital letter
const out = stories.map((s) => ({
  ...s,
  sentences: s.sentences.map((x) => {
    // pinyin of the whole sentence (context aware), split back onto the words
    const words = [...seg.segment(x.zh)].map((w) => w.segment);
    const py = pinyin(x.zh, { toneType: "symbol", type: "array", nonZh: "consecutive" });
    let i = 0;
    const tokens = words.map((w) => {
      if (!/[一-鿿]/.test(w)) return { w, p: "" };
      const n = [...w].length; let p = py.slice(i, i + n).join(""); i += n; if (NAMES.has(w)) p = p[0].toUpperCase() + p.slice(1); return { w, p };
    });
    return { ...x, tokens };
  }),
}));
fs.writeFileSync("src/data/stories.ts", `// Original graded stories (written by the local AI, reviewed by hand). Pinyin per word comes from pinyin-pro at merge time.
export interface StoryToken { w: string; p: string }
export interface StorySentence { zh: string; en: string; ru: string; tokens: StoryToken[] }
export interface Story {
  id: string;
  level: 1 | 2 | 3;
  title: { zh: string; en: string; ru: string };
  sentences: StorySentence[];
  questions: { q: string; options: string[]; answer: number }[];
}

export const stories: Story[] = ${JSON.stringify(out, null, 1)};
`);
console.log(out.length, "stories written");
