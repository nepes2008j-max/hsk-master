"use client";

import { useState, useMemo, useCallback } from "react";
import AppShell from "@/components/AppShell";
import { lessons, bookTitle, bookTitleEn, type BookLesson, type BookWord, type BookGrammar } from "@/data/book-hyjc";
import { speak } from "@/lib/tts";
import { useLang } from "@/lib/i18n";
import { IconVolume, IconChevron } from "@/components/Icons";

type View = "lessons" | "detail" | "quiz";
type Tab = "vocab" | "grammar" | "test";
type QuizType = "vocab" | "grammar";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function VocabQuiz({ lesson, allLessons, t }: { lesson: BookLesson; allLessons: BookLesson[]; t: ReturnType<typeof useLang>["t"]["booksPage"] }) {
  const questions = useMemo(() => {
    const pool = allLessons.flatMap((l) => l.words).filter((w) => !lesson.words.some((lw) => lw.hanzi === w.hanzi));
    return shuffle(lesson.words).slice(0, Math.min(10, lesson.words.length)).map((word) => {
      const wrong = shuffle(pool).slice(0, 3).map((w) => w.english);
      const options = shuffle([word.english, ...wrong]);
      return { word, options, correct: word.english };
    });
  }, [lesson, allLessons]);

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const done = idx >= questions.length;
  const q = questions[idx];

  const pick = useCallback((opt: string) => {
    if (picked) return;
    setPicked(opt);
    if (opt === q?.correct) setScore((s) => s + 1);
  }, [picked, q]);

  const next = useCallback(() => {
    setIdx((i) => i + 1);
    setPicked(null);
  }, []);

  const restart = useCallback(() => {
    setIdx(0);
    setPicked(null);
    setScore(0);
  }, []);

  if (done) {
    return (
      <div className="text-center py-10 space-y-4">
        <div className="text-5xl font-bold text-primary">{score}/{questions.length}</div>
        <div className="text-ink-secondary">{t.score}</div>
        <button onClick={restart} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
          {t.tryAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="flex justify-between text-[13px] text-ink-tertiary">
        <span>{t.question} {idx + 1}/{questions.length}</span>
        <span>{t.score}: {score}</span>
      </div>
      <div className="text-center py-6">
        <button onClick={() => speak(q.word.hanzi)} className="text-5xl font-bold text-ink hover:text-primary transition-colors">
          {q.word.hanzi}
        </button>
        <div className="mt-2 text-[14px] text-ink-tertiary">{q.word.pinyin}</div>
      </div>
      <div className="space-y-2">
        {q.options.map((opt) => {
          let cls = "border-border bg-bg-raised text-ink hover:border-primary";
          if (picked) {
            if (opt === q.correct) cls = "border-primary bg-primary-light text-primary-text";
            else if (opt === picked) cls = "border-warning bg-warning-light text-warning-text";
            else cls = "border-border bg-bg-raised text-ink-tertiary";
          }
          return (
            <button key={opt} onClick={() => pick(opt)} className={`w-full text-left border-2 rounded-xl px-4 py-3 text-[14px] font-medium transition-colors ${cls}`}>
              {opt}
            </button>
          );
        })}
      </div>
      {picked && (
        <div className="text-center">
          <button onClick={next} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
            {t.next}
          </button>
        </div>
      )}
    </div>
  );
}

function GrammarQuiz({ lesson, allLessons, t }: { lesson: BookLesson; allLessons: BookLesson[]; t: ReturnType<typeof useLang>["t"]["booksPage"] }) {
  const questions = useMemo(() => {
    const otherExamples = allLessons
      .filter((l) => l.id !== lesson.id)
      .flatMap((l) => l.grammar.flatMap((g) => g.examples.map((ex) => ex.zh)));

    return shuffle(lesson.grammar).map((g) => {
      const correctExample = g.examples[0];
      const wrong = shuffle(otherExamples).slice(0, 3);
      const options = shuffle([correctExample.zh, ...wrong]);
      return { grammar: g, options, correct: correctExample.zh };
    });
  }, [lesson, allLessons]);

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const done = idx >= questions.length;
  const q = questions[idx];

  const pick = useCallback((opt: string) => {
    if (picked) return;
    setPicked(opt);
    if (opt === q?.correct) setScore((s) => s + 1);
  }, [picked, q]);

  const next = useCallback(() => {
    setIdx((i) => i + 1);
    setPicked(null);
  }, []);

  const restart = useCallback(() => {
    setIdx(0);
    setPicked(null);
    setScore(0);
  }, []);

  if (done) {
    return (
      <div className="text-center py-10 space-y-4">
        <div className="text-5xl font-bold text-primary">{score}/{questions.length}</div>
        <div className="text-ink-secondary">{t.score}</div>
        <button onClick={restart} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
          {t.tryAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="flex justify-between text-[13px] text-ink-tertiary">
        <span>{t.question} {idx + 1}/{questions.length}</span>
        <span>{t.score}: {score}</span>
      </div>
      <div className="rounded-xl border border-border bg-bg-raised p-5">
        <div className="text-[13px] text-ink-tertiary uppercase tracking-wide mb-2">{t.pattern}</div>
        <div className="text-lg font-bold text-ink">{q.grammar.pattern}</div>
        <div className="text-[14px] text-ink-secondary mt-1">{q.grammar.explanation}</div>
      </div>
      <div className="text-[14px] text-ink-secondary text-center">{t.pickCorrect}</div>
      <div className="space-y-2">
        {q.options.map((opt) => {
          let cls = "border-border bg-bg-raised text-ink hover:border-primary";
          if (picked) {
            if (opt === q.correct) cls = "border-primary bg-primary-light text-primary-text";
            else if (opt === picked) cls = "border-warning bg-warning-light text-warning-text";
            else cls = "border-border bg-bg-raised text-ink-tertiary";
          }
          return (
            <button key={opt} onClick={() => pick(opt)} className={`w-full text-left border-2 rounded-xl px-4 py-3 text-[15px] transition-colors ${cls}`}>
              {opt}
            </button>
          );
        })}
      </div>
      {picked && (
        <div className="text-center">
          <button onClick={next} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
            {t.next}
          </button>
        </div>
      )}
    </div>
  );
}

export default function BooksPage() {
  const { t } = useLang();
  const bt = t.booksPage;
  const [view, setView] = useState<View>("lessons");
  const [lessonId, setLessonId] = useState(1);
  const [tab, setTab] = useState<Tab>("vocab");
  const [quizType, setQuizType] = useState<QuizType | null>(null);

  const lesson = lessons.find((l) => l.id === lessonId)!;

  const openLesson = (id: number) => {
    setLessonId(id);
    setTab("vocab");
    setQuizType(null);
    setView("detail");
  };

  const backToLessons = () => {
    setView("lessons");
    setQuizType(null);
  };

  // Lesson list
  if (view === "lessons") {
    return (
      <AppShell>
        <div className="space-y-5">
          <div>
            <h1 className="text-2xl font-bold text-ink">{bt.title}</h1>
            <div className="text-[14px] text-ink-secondary mt-1">{bookTitle} · {bookTitleEn}</div>
          </div>

          <div className="space-y-2">
            {lessons.map((l) => (
              <button
                key={l.id}
                onClick={() => openLesson(l.id)}
                className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-4 hover:border-primary transition-colors text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                  <span className="text-[15px] font-bold text-primary">{l.id}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-semibold text-ink group-hover:text-primary transition-colors">{l.title}</div>
                  <div className="text-[13px] text-ink-tertiary">{l.titleEn} · {l.words.length} {bt.words} · {l.grammar.length} {bt.patterns}</div>
                </div>
                <IconChevron direction="right" className="w-4 h-4 text-ink-tertiary shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </AppShell>
    );
  }

  // Lesson detail
  return (
    <AppShell>
      <div className="space-y-5">
        {/* Header */}
        <div>
          <button onClick={backToLessons} className="flex items-center gap-1 text-[13px] text-ink-tertiary hover:text-primary transition-colors mb-2">
            <IconChevron direction="left" className="w-3.5 h-3.5" />
            {bt.backToLessons}
          </button>
          <h1 className="text-2xl font-bold text-ink">
            {bt.lesson} {lesson.id}: {lesson.title}
          </h1>
          <div className="text-[14px] text-ink-secondary">{lesson.titleEn}</div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5">
          {(["vocab", "grammar", "test"] as Tab[]).map((id) => (
            <button
              key={id}
              onClick={() => { setTab(id); setQuizType(null); }}
              className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                tab === id ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
              }`}
            >
              {id === "vocab" ? bt.vocabulary : id === "grammar" ? bt.grammar : bt.test}
            </button>
          ))}
        </div>

        {/* Vocabulary tab */}
        {tab === "vocab" && (
          <div className="space-y-1.5">
            {lesson.words.map((w) => (
              <div key={w.hanzi} className="flex items-center gap-3 rounded-xl border border-border bg-bg-raised px-4 py-3">
                <button onClick={() => speak(w.hanzi)} className="text-primary hover:text-primary-hover transition-colors shrink-0">
                  <IconVolume className="w-4 h-4" />
                </button>
                <div className="flex-1 min-w-0">
                  <span className="text-[16px] font-semibold text-ink">{w.hanzi}</span>
                  <span className="text-[14px] text-ink-tertiary ml-2">{w.pinyin}</span>
                </div>
                <div className="text-[14px] text-ink-secondary text-right">{w.english}</div>
              </div>
            ))}
          </div>
        )}

        {/* Grammar tab */}
        {tab === "grammar" && (
          <div className="space-y-4">
            {lesson.grammar.map((g, i) => (
              <div key={i} className="rounded-xl border border-border bg-bg-raised p-5 space-y-3">
                <div className="text-[16px] font-bold text-ink">{g.pattern}</div>
                <div className="text-[14px] text-ink-secondary">{g.explanation}</div>
                <div className="space-y-2 pt-1">
                  {g.examples.map((ex, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <button onClick={() => speak(ex.zh)} className="text-primary hover:text-primary-hover transition-colors mt-0.5 shrink-0">
                        <IconVolume className="w-3.5 h-3.5" />
                      </button>
                      <div>
                        <div className="text-[15px] text-ink">{ex.zh}</div>
                        <div className="text-[13px] text-ink-tertiary">{ex.en}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Test tab */}
        {tab === "test" && !quizType && (
          <div className="space-y-3 pt-2">
            <div className="text-[14px] text-ink-secondary">{bt.chooseQuiz}</div>
            <button
              onClick={() => setQuizType("vocab")}
              className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-5 hover:border-primary transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-primary">字</span>
              </div>
              <div>
                <div className="text-[15px] font-semibold text-ink group-hover:text-primary transition-colors">{bt.vocabQuiz}</div>
                <div className="text-[13px] text-ink-tertiary">{lesson.words.length} {bt.words}</div>
              </div>
            </button>
            <button
              onClick={() => setQuizType("grammar")}
              className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-5 hover:border-primary transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                <span className="text-xl font-bold text-accent">文</span>
              </div>
              <div>
                <div className="text-[15px] font-semibold text-ink group-hover:text-primary transition-colors">{bt.grammarQuiz}</div>
                <div className="text-[13px] text-ink-tertiary">{lesson.grammar.length} {bt.patterns}</div>
              </div>
            </button>
          </div>
        )}

        {tab === "test" && quizType === "vocab" && (
          <VocabQuiz lesson={lesson} allLessons={lessons} t={bt} />
        )}

        {tab === "test" && quizType === "grammar" && (
          <GrammarQuiz lesson={lesson} allLessons={lessons} t={bt} />
        )}
      </div>
    </AppShell>
  );
}
