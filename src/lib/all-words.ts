import { dictionary } from "@/data/dictionary";
import { vocabulary } from "@/data/vocabulary";
import { vocabulary2 } from "@/data/vocabulary2";
import { allAcademicWords, chemLabCategories } from "@/data/academic-vocab";
import { bookWords } from "@/data/book-words";
import { examplesExtra } from "@/data/examples-extra";
import { wordsRuExtra } from "@/data/words-ru-extra";

export interface DWord {
  hanzi: string;
  pinyin: string;
  english: string;
  ru?: string;
  topic?: string;
  hsk?: number;
  decks: string[];
  example?: { hanzi: string; pinyin: string; english: string; ru?: string };
}

// One merged word list: the hand-written dictionary + every flashcard deck word (deduped by hanzi).
const map = new Map<string, DWord>();
function add(w: { hanzi: string; pinyin: string; english: string; ru?: string; topic?: string; hsk?: number; example?: DWord["example"] }, deck?: string) {
  let e = map.get(w.hanzi);
  if (!e) { e = { hanzi: w.hanzi, pinyin: w.pinyin, english: w.english, decks: [] }; map.set(w.hanzi, e); }
  if (deck && !e.decks.includes(deck)) e.decks.push(deck);
  e.topic ??= w.topic;
  e.hsk ??= w.hsk;
  e.ru ??= w.ru;
  e.example ??= w.example;
}
dictionary.forEach((w) => { add(w); if (w.hsk) add(w, `HSK ${w.hsk}`); });
vocabulary.forEach((w) => add(w, "HSK 1"));
vocabulary2.forEach((w) => add(w, "HSK 2"));
allAcademicWords.filter((w) => !w.id.startsWith("cl")).forEach((w) => add(w, "STEM"));
chemLabCategories.forEach((c) => c.words.forEach((w) => add(w, "Special")));
bookWords.forEach((w) => add(w, "Book"));
for (const e of map.values()) {
  e.example ??= examplesExtra[e.hanzi];
  e.ru ??= wordsRuExtra[e.hanzi];
  e.topic ??= e.decks.includes("Special") ? "special" : e.decks.includes("STEM") ? "stem" : "hsk";
}
export const allWords: DWord[] = [...map.values()];
export const DECK_FILTERS = ["HSK 1", "HSK 2", "STEM", "Special", "Book"] as const;
