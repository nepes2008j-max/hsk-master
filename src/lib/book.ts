import { allWords, bookLessons } from "@/lib/all-words";
import { bookWords } from "@/data/book-words";

const order = new Map(bookWords.map((w, i) => [w.hanzi, i]));

// Book lessons with progress (learned = hanzi in progress.wordsLearned).
export function lessonList(learned: Set<string>) {
  return bookLessons.map((l) => {
    const words = allWords.filter((w) => w.decks.includes("Book") && w.lesson === l.n).sort((a, b) => (order.get(a.hanzi) ?? 0) - (order.get(b.hanzi) ?? 0));
    return { ...l, words, total: words.length, done: words.filter((w) => learned.has(w.hanzi)).length };
  });
}
