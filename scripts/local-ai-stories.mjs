// Original graded reader stories (zh + en + ru per sentence + 3 comprehension questions) via local Ollama.
// Usage: OLLAMA_URL=... node --no-warnings --experimental-strip-types scripts/local-ai-stories.mjs <model> <out.json>
import fs from "node:fs";
import { generate } from "./ollama.mjs";
const [model, out] = process.argv.slice(2);
const d = "../src/data/";
const srcs = await Promise.all(["vocabulary", "vocabulary2", "dictionary"].map((f) => import(d + f + ".ts")));
const hy = await import(d + "book-hyjc.ts"), xz = await import(d + "book-xzzg.ts"), bw = await import(d + "book-words.ts");
const known = new Set([...srcs.flatMap((m) => Object.values(m)[0]), ...hy.lessons.flatMap((l) => l.words), ...xz.xzzgLessons.flatMap((l) => l.words), ...bw.bookWords].flatMap((w) => [...w.hanzi]));
const TOPICS = [
  [1, "我的家", "My family"], [1, "我的一天", "My day"], [1, "在饭馆", "At the restaurant"], [1, "我的朋友", "My friend"], [1, "买东西", "Shopping"],
  [2, "周末", "The weekend"], [2, "生病了", "Getting sick"], [2, "坐出租车", "Taking a taxi"], [2, "天气", "The weather"], [2, "学汉语", "Studying Chinese"],
  [3, "去北京旅行", "A trip to Beijing"], [3, "找工作", "Looking for a job"], [3, "一次误会", "A misunderstanding"], [3, "搬家", "Moving house"], [3, "一封信", "A letter"],
  [1, "我的学校", "My school"], [1, "我家的狗", "My dog"], [1, "喝咖啡", "Having coffee"], [1, "去公园", "Going to the park"], [1, "我的房间", "My room"],
  [2, "看电影", "Watching a movie"], [2, "过生日", "A birthday"], [2, "在商店", "At the store"], [2, "我的爱好", "My hobbies"], [2, "迷路了", "Getting lost"],
  [3, "一次面试", "A job interview"], [3, "春节回家", "Going home for Spring Festival"], [3, "新同学", "A new classmate"], [3, "下雨的一天", "A rainy day"], [3, "学做中国菜", "Learning to cook Chinese food"],
];
const LV = { 1: { n: 10, len: 12, hsk: "HSK 1 (about 150 common words, very simple grammar: 是, 有, 在, 很, 不, 吗, 了)" }, 2: { n: 12, len: 18, hsk: "HSK 2 (about 300 common words, simple grammar: 了, 过, 比, 因为, 都, 还)" }, 3: { n: 14, len: 24, hsk: "HSK 3 (about 600 common words, grammar like 把, 被, 虽然...但是, 如果, 一边...一边)" } };
const result = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : [];
async function ask(prompt, t = 0.7) {
  try { return JSON.parse((await generate({ model, prompt, stream: false, think: false, format: "json", options: { temperature: t } })).response); } catch { return null; }
}
for (const [level, zh, en] of TOPICS) {
  if (result.some((s) => s.title.zh === zh)) continue;
  const L = LV[level];
  for (let tries = 0; tries < 5; tries++) {
    const g = await ask(`Write an ORIGINAL short story for adult learners of Chinese, titled "${zh}" (${en}).
Level: ${L.hsk}. Use only very common words. Characters: friendly adults/students such as 小明, 小红, 马克, 艾米丽. Exactly ${L.n} sentences, each at most ${L.len} Chinese characters, ending with 。？or ！. Dialogue is allowed (use plain sentences, no quotation marks). The story must have a beginning, a small event and an end.
For every sentence give a natural English translation and an accurate Russian translation.
Reply ONLY JSON {"title":{"zh":"${zh}","en":"${en}","ru":"<Russian title>"},"sentences":[{"zh":"...","en":"...","ru":"..."}]}`);
    const s = g?.sentences;
    if (!Array.isArray(s) || s.length < L.n - 1 || s.length > L.n + 1) { console.log(`  retry ${zh}: bad sentence count`); continue; }
    const bad = s.find((x) => typeof x.zh !== "string" || !/^[一-鿿，。？！、：“”‘’]+$/.test(x.zh) || !/[。？！]$/.test(x.zh) || x.zh.length > L.len + 4 || !x.en || !/[а-яё]/i.test(x.ru ?? ""));
    if (bad) { console.log(`  retry ${zh}: invalid sentence ${JSON.stringify(bad).slice(0, 80)}`); continue; }
    const unknown = [...new Set([...s.map((x) => x.zh).join("")].filter((c) => /[一-鿿]/.test(c) && !known.has(c)))];
    if (unknown.length > (level === 1 ? 4 : level === 2 ? 8 : 14)) { console.log(`  retry ${zh}: ${unknown.length} unknown chars ${unknown.join("")}`); continue; }
    const chk = await ask(`You are a strict editor for a Chinese graded reader. Level ${L.hsk}.
Story "${zh}":
${s.map((x, i) => `${i + 1}. ${x.zh} | EN: ${x.en} | RU: ${x.ru}`).join("\n")}
List the numbers of sentences that are ungrammatical/unnatural Chinese OR have an inaccurate English or Russian translation. Reply ONLY JSON {"bad":[numbers],"notes":"short"}`, 0);
    if (!chk || (Array.isArray(chk.bad) && chk.bad.length)) { console.log(`  reject ${zh}: ${JSON.stringify(chk?.bad)} ${chk?.notes ?? ""}`); continue; }
    const q = await ask(`Story (English): ${s.map((x) => x.en).join(" ")}
Write 3 multiple-choice reading comprehension questions in English about this story, each with exactly 4 short options and ONE correct answer index (0-3). Reply ONLY JSON {"questions":[{"q":"...","options":["..","..","..",".."],"answer":0}]}`, 0.3);
    const qs = (q?.questions ?? []).filter((x) => x.q && Array.isArray(x.options) && x.options.length === 4 && new Set(x.options).size === 4 && Number.isInteger(x.answer) && x.answer >= 0 && x.answer < 4);
    if (qs.length < 3) { console.log(`  retry ${zh}: questions`); continue; }
    result.push({ id: `${level}-${result.length + 1}`, level, title: { zh, en, ru: g.title?.ru ?? "" }, sentences: s.map((x) => ({ zh: x.zh.trim(), en: x.en.trim(), ru: x.ru.trim() })), questions: qs.slice(0, 3) });
    fs.writeFileSync(out, JSON.stringify(result, null, 1));
    console.log(`ok ${zh} (${s.length} sentences, unknown chars: ${unknown.join("") || "none"})`);
    break;
  }
}
console.log(`finished: ${result.length}/${TOPICS.length}`);
