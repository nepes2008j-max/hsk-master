// Per-device progress for the lesson player (localStorage). Words: correct/wrong counts. Lessons: best test score, practice count.
import type { LessonRecord, Stats } from "@/lib/exercises";
const KEY = "hsk-ex-v1";
interface Store extends Stats { lessons: Record<string, LessonRecord> }
const empty = (): Store => ({ words: {}, lessons: {} });
export function load(): Store {
  try { const s = JSON.parse(localStorage.getItem(KEY) ?? "null"); return s?.words ? { ...empty(), ...s } : empty(); } catch { return empty(); }
}
export function save(s: Store) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode etc. */ } }
export function recordWord(hanzi: string, ok: boolean) {
  const s = load(); const w = s.words[hanzi] ?? { c: 0, w: 0 };
  if (ok) w.c++; else w.w++;
  s.words[hanzi] = w; save(s);
}
export function recordLesson(key: string, patch: (r: LessonRecord) => LessonRecord) {
  const s = load(); s.lessons[key] = patch(s.lessons[key] ?? {}); save(s);
}
