import { lessons as hyjcLessons, bookTitle as hyjcTitle, bookTitleEn as hyjcTitleEn, type BookLesson } from "@/data/book-hyjc";
import { xzzgLessons, xzzgTitle, xzzgTitleEn } from "@/data/book-xzzg";
import { bookGrammarRu } from "@/data/book-grammar-ru";
import { szGrammar } from "@/data/sz-grammar";
import { bookLessons as szLessonMeta, bookWords as szWords } from "@/data/book-words";

// Third book: the companion practice volume (vocabulary lessons only).
const szLessons: BookLesson[] = szLessonMeta.map((l) => ({
  id: l.n, title: l.title, titleEn: l.en,
  grammar: (szGrammar[l.n] ?? []).map((g) => ({ pattern: g.pattern, explanation: g.explanation, explanationRu: g.explanationRu, examples: g.examples })),
  words: szWords.filter((w) => w.lesson === l.n).map(({ hanzi, pinyin, english }) => ({ hanzi, pinyin, english })),
}));

// Russian overlay for the two older books (keeps the English data file untouched).
const withRu = (bookId: string, lessons: BookLesson[]): BookLesson[] => lessons.map((l) => {
  const r = bookGrammarRu[`${bookId}-${l.id}`];
  if (!r) return l;
  return { ...l, titleRu: r.title, grammar: l.grammar.map((g, i) => ({ ...g, patternRu: r.points[i]?.pattern, explanationRu: r.points[i]?.explanation, examples: g.examples.map((e, j) => ({ ...e, ru: r.points[i]?.examples[j] })) })) };
});

export const books: { id: string; title: string; titleEn: string; lessons: BookLesson[] }[] = [
  { id: "hyjc", title: hyjcTitle, titleEn: hyjcTitleEn, lessons: withRu("hyjc", hyjcLessons) },
  { id: "xzzg", title: xzzgTitle, titleEn: xzzgTitleEn, lessons: withRu("xzzg", xzzgLessons) },
  { id: "sz1", title: "学在中国 · 实践教程1", titleEn: "Learning in China — Practice 1", lessons: szLessons },
];

