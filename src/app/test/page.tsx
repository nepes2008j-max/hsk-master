"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary, type Word } from "@/data/vocabulary";
import { vocabulary2 } from "@/data/vocabulary2";
import { speak } from "@/lib/tts";
import { saveTestResult, getTestResults, type TestResult } from "@/lib/storage";
import { IconVolume, IconCheck, IconChevron, IconX } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

// ── Types ──

interface Question {
  id: number;
  section: "listening" | "reading";
  part: number;
  partLabel: string;
  instruction: string;
  prompt: string;
  context?: string;
  audioText?: string;
  options: string[];
  correctIndex: number;
}

// ── Helpers ──

function pick<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function sameCategoryDistractors(w: Word, n: number, wordPool: Word[]) {
  const sameCategory = wordPool.filter((v) => v.id !== w.id && v.category === w.category);
  if (sameCategory.length >= n) return pick(sameCategory, n);
  const rest = wordPool.filter((v) => v.id !== w.id && v.category !== w.category);
  return [...pick(sameCategory, Math.min(n, sameCategory.length)), ...pick(rest, n - Math.min(n, sameCategory.length))].slice(0, n);
}

// ── Question generators matching real HSK exam structure ──

function generateHSK1(wordPool: Word[]): { questions: Question[]; meta: typeof sectionMetaHSK1 } {
  const pool = shuffle(wordPool);
  let qi = 0;
  const questions: Question[] = [];

  // 一、听力 LISTENING (20 questions, ~15 min)

  // Part 1 (5Q): Hear a word — does it match the shown word? (真题: picture match)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const isMatch = Math.random() > 0.5;
    const shown = isMatch ? w : pick(wordPool.filter((v) => v.id !== w.id), 1)[0];
    questions.push({
      id: questions.length + 1, section: "listening", part: 1, partLabel: "第一部分",
      instruction: "Listen to the word. Does it match what is shown?",
      prompt: shown.hanzi, audioText: w.hanzi,
      options: ["√  Correct", "×  Incorrect"], correctIndex: isMatch ? 0 : 1,
    });
  }

  // Part 2 (5Q): Hear a sentence — choose which word is mentioned (真题: choose matching picture)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.hanzi, ...distractors.map((d) => d.hanzi)]);
    questions.push({
      id: questions.length + 1, section: "listening", part: 2, partLabel: "第二部分",
      instruction: "Listen to the sentence. Which word is described?",
      prompt: "", audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.hanzi),
    });
  }

  // Part 3 (5Q): Hear a dialogue — what is the topic? (真题: short dialogue → picture)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.english, ...distractors.map((d) => d.english)]);
    questions.push({
      id: questions.length + 1, section: "listening", part: 3, partLabel: "第三部分",
      instruction: "Listen to the dialogue. What is it about?",
      prompt: "", audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // Part 4 (5Q): Hear a sentence — choose the correct answer (真题: sentence → 3 text choices)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.english, ...distractors.map((d) => d.english)]);
    questions.push({
      id: questions.length + 1, section: "listening", part: 4, partLabel: "第四部分",
      instruction: "Listen and choose the correct answer.",
      prompt: "", audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // 二、阅读 READING (20 questions, 17 min)

  // Part 1 (5Q): Does the pinyin match the character? (真题: word → picture match)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const isMatch = Math.random() > 0.5;
    const shownPinyin = isMatch ? w.pinyin : pick(wordPool.filter((v) => v.id !== w.id), 1)[0].pinyin;
    questions.push({
      id: questions.length + 1, section: "reading", part: 1, partLabel: "第一部分",
      instruction: "Does the pinyin match the character?",
      context: w.hanzi, prompt: shownPinyin,
      options: ["√  Correct", "×  Incorrect"], correctIndex: isMatch ? 0 : 1,
    });
  }

  // Part 2 (5Q): Choose the correct meaning of the word (真题: sentence → picture)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.english, ...distractors.map((d) => d.english)]);
    questions.push({
      id: questions.length + 1, section: "reading", part: 2, partLabel: "第二部分",
      instruction: "Choose the correct meaning.",
      context: w.hanzi, prompt: w.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // Part 3 (5Q): Fill in the blank — choose correct word (真题: fill-in-blank)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const blank = w.example.hanzi.replace(w.hanzi, "______");
    const opts = shuffle([w.hanzi, ...distractors.map((d) => d.hanzi)]);
    questions.push({
      id: questions.length + 1, section: "reading", part: 3, partLabel: "第三部分",
      instruction: "Choose the word that completes the sentence.",
      prompt: blank, context: w.example.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.hanzi),
    });
  }

  // Part 4 (5Q): Read sentence — choose meaning (真题: read sentence → comprehension)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.example.english, ...distractors.map((d) => d.example.english)]);
    questions.push({
      id: questions.length + 1, section: "reading", part: 4, partLabel: "第四部分",
      instruction: "Read the sentence. What does it mean?",
      prompt: w.example.hanzi, context: w.example.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.example.english),
    });
  }

  return { questions, meta: sectionMetaHSK1 };
}

function generateHSK2(wordPool: Word[]): { questions: Question[]; meta: typeof sectionMetaHSK2 } {
  const pool = shuffle(wordPool);
  let qi = 0;
  const questions: Question[] = [];

  // 一、听力 LISTENING (35 questions, ~25 min)

  // Part 1 (10Q): Hear a sentence — does it match the shown word? (真题: sentence → picture T/F)
  for (let i = 0; i < 10; i++) {
    const w = pool[qi++];
    const isMatch = Math.random() > 0.5;
    const shown = isMatch ? w : pick(wordPool.filter((v) => v.id !== w.id && v.category === w.category), 1)[0]
      ?? pick(wordPool.filter((v) => v.id !== w.id), 1)[0];
    questions.push({
      id: questions.length + 1, section: "listening", part: 1, partLabel: "第一部分",
      instruction: "Listen to the sentence. Does it match the word shown?",
      prompt: shown.hanzi, audioText: w.example.hanzi,
      options: ["√  Correct", "×  Incorrect"], correctIndex: isMatch ? 0 : 1,
    });
  }

  // Part 2 (10Q): Hear a dialogue — choose the correct word (真题: dialogue → picture from 3)
  for (let i = 0; i < 10; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.hanzi, ...distractors.map((d) => d.hanzi)]);
    questions.push({
      id: questions.length + 1, section: "listening", part: 2, partLabel: "第二部分",
      instruction: "Listen to the dialogue. Which word is described?",
      prompt: "", audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.hanzi),
    });
  }

  // Part 3 (10Q): Hear two exchanges — what is it about? (真题: longer dialogue → picture)
  for (let i = 0; i < 10; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.english, ...distractors.map((d) => d.english)]);
    questions.push({
      id: questions.length + 1, section: "listening", part: 3, partLabel: "第三部分",
      instruction: "Listen carefully. What is the dialogue about?",
      prompt: "", audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // Part 4 (5Q): Hear a longer passage — answer comprehension question (真题: passage → text choice)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.example.english, ...distractors.map((d) => d.example.english)]);
    questions.push({
      id: questions.length + 1, section: "listening", part: 4, partLabel: "第四部分",
      instruction: "Listen and choose the correct answer.",
      prompt: "", audioText: w.example.hanzi,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.example.english),
    });
  }

  // 二、阅读 READING (25 questions, ~22 min)

  // Part 1 (5Q): Does the pinyin match? (真题: sentence → picture match)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const isMatch = Math.random() > 0.5;
    const shownPinyin = isMatch ? w.pinyin : pick(wordPool.filter((v) => v.id !== w.id), 1)[0].pinyin;
    questions.push({
      id: questions.length + 1, section: "reading", part: 1, partLabel: "第一部分",
      instruction: "Does the pinyin match the character?",
      context: w.hanzi, prompt: shownPinyin,
      options: ["√  Correct", "×  Incorrect"], correctIndex: isMatch ? 0 : 1,
    });
  }

  // Part 2 (5Q): Fill in blank (真题: choose word for blank)
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const blank = w.example.hanzi.replace(w.hanzi, "______");
    const opts = shuffle([w.hanzi, ...distractors.map((d) => d.hanzi)]);
    questions.push({
      id: questions.length + 1, section: "reading", part: 2, partLabel: "第二部分",
      instruction: "Choose the word that completes the sentence.",
      prompt: blank, context: w.example.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.hanzi),
    });
  }

  // Part 3 (5Q): Choose the correct meaning of the word
  for (let i = 0; i < 5; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.english, ...distractors.map((d) => d.english)]);
    questions.push({
      id: questions.length + 1, section: "reading", part: 3, partLabel: "第三部分",
      instruction: "Choose the correct meaning.",
      context: w.hanzi, prompt: w.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.english),
    });
  }

  // Part 4 (10Q): Read comprehension — sentence meaning (真题: read passage → answer question)
  for (let i = 0; i < 10; i++) {
    const w = pool[qi++];
    const distractors = sameCategoryDistractors(w, 2, wordPool);
    const opts = shuffle([w.example.english, ...distractors.map((d) => d.example.english)]);
    questions.push({
      id: questions.length + 1, section: "reading", part: 4, partLabel: "第四部分",
      instruction: "Read the sentence. What does it mean?",
      prompt: w.example.hanzi, context: w.example.pinyin,
      options: opts.map((o, idx) => `${String.fromCharCode(65 + idx)}. ${o}`),
      correctIndex: opts.indexOf(w.example.english),
    });
  }

  return { questions, meta: sectionMetaHSK2 };
}

// ── Sections metadata ──

const sectionMetaHSK1 = [
  { section: "listening" as const, part: 1, label: "第一部分", range: [1, 5] },
  { section: "listening" as const, part: 2, label: "第二部分", range: [6, 10] },
  { section: "listening" as const, part: 3, label: "第三部分", range: [11, 15] },
  { section: "listening" as const, part: 4, label: "第四部分", range: [16, 20] },
  { section: "reading" as const, part: 1, label: "第一部分", range: [21, 25] },
  { section: "reading" as const, part: 2, label: "第二部分", range: [26, 30] },
  { section: "reading" as const, part: 3, label: "第三部分", range: [31, 35] },
  { section: "reading" as const, part: 4, label: "第四部分", range: [36, 40] },
];

const sectionMetaHSK2 = [
  { section: "listening" as const, part: 1, label: "第一部分", range: [1, 10] },
  { section: "listening" as const, part: 2, label: "第二部分", range: [11, 20] },
  { section: "listening" as const, part: 3, label: "第三部分", range: [21, 30] },
  { section: "listening" as const, part: 4, label: "第四部分", range: [31, 35] },
  { section: "reading" as const, part: 1, label: "第一部分", range: [36, 40] },
  { section: "reading" as const, part: 2, label: "第二部分", range: [41, 45] },
  { section: "reading" as const, part: 3, label: "第三部分", range: [46, 50] },
  { section: "reading" as const, part: 4, label: "第四部分", range: [51, 60] },
];

// ── Component ──

export default function TestPage() {
  const { t } = useLang();
  const [state, setState] = useState<"intro" | "test" | "results">("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(40 * 60);
  const [pastResults, setPastResults] = useState<TestResult[]>([]);
  const [showNav, setShowNav] = useState(false);
  const [playCount, setPlayCount] = useState<Record<number, number>>({});
  const [testLevel, setTestLevel] = useState<1 | 2>(1);
  const [examMeta, setExamMeta] = useState(sectionMetaHSK1);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    getTestResults().then(setPastResults);
  }, []);

  const startTest = () => {
    const wordPool = testLevel === 1 ? vocabulary : vocabulary2;
    const { questions: q, meta } = testLevel === 1 ? generateHSK1(wordPool) : generateHSK2(wordPool);
    setQuestions(q);
    setExamMeta(meta);
    setAnswers(new Array(q.length).fill(null));
    setCurrentQ(0);
    setTimeLeft(testLevel === 1 ? 40 * 60 : 55 * 60);
    setState("test");
    setShowNav(false);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const selectAnswer = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIdx;
    setAnswers(newAnswers);
  };

  const finishTest = useCallback(async () => {
    if (timerRef.current) clearInterval(timerRef.current);

    let listening = 0;
    let reading = 0;
    const answerDetails: { questionId: number; correct: boolean }[] = [];

    questions.forEach((q, i) => {
      const correct = answers[i] === q.correctIndex;
      answerDetails.push({ questionId: q.id, correct });
      if (correct) {
        if (q.section === "listening") listening++;
        else reading++;
      }
    });

    const totalListening = questions.filter((q) => q.section === "listening").length;
    const totalReading = questions.filter((q) => q.section === "reading").length;
    const listeningScore = Math.round((listening / totalListening) * 100);
    const readingScore = Math.round((reading / totalReading) * 100);
    const totalScore = listeningScore + readingScore;

    const result: TestResult = {
      id: `test-${Date.now()}`,
      date: Date.now(),
      level: testLevel,
      score: totalScore,
      total: 200,
      passed: totalScore >= 120,
      answers: answerDetails,
    };

    await saveTestResult(result);
    const results = await getTestResults();
    setPastResults(results);
    setState("results");
  }, [questions, answers]);

  useEffect(() => {
    if (timeLeft === 0 && state === "test") finishTest();
  }, [timeLeft, state, finishTest]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const q = questions[currentQ];
  const latestResult = pastResults[pastResults.length - 1];

  const answeredCount = answers.filter((a) => a !== null).length;
  const currentMeta = q ? examMeta.find((m) => q.id >= m.range[0] && q.id <= m.range[1]) : null;
  const prevMeta = currentQ > 0 ? examMeta.find((m) => questions[currentQ - 1].id >= m.range[0] && questions[currentQ - 1].id <= m.range[1]) : null;
  const isNewSection = currentMeta && (!prevMeta || currentMeta.section !== prevMeta.section || currentMeta.part !== prevMeta.part);

  return (
    <AppShell>
      <div className="space-y-5">
        {/* ── Intro ── */}
        {state === "intro" && (
          <>
            {/* Official exam header */}
            <div className="text-center space-y-2 pt-2">
              <div className="text-[13px] text-ink-tertiary tracking-[0.2em] uppercase">Mock Examination</div>
              <h1 className="text-2xl font-bold text-ink">汉语水平考试</h1>
              <div className="text-lg font-semibold text-ink-secondary">HSK（{testLevel === 1 ? "一" : "二"}级）</div>
              <div className="text-[13px] text-ink-tertiary">Hànyǔ Shuǐpíng Kǎoshì — Level {testLevel}</div>
            </div>

            <div className="flex gap-1.5 justify-center">
              {([1, 2] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setTestLevel(l)}
                  className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                    testLevel === l
                      ? "bg-jade text-white"
                      : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {l === 1 ? t.hsk1 : t.hsk2}
                </button>
              ))}
            </div>

            <div className="border-t border-border" />

            {/* Exam structure */}
            <div className="rounded-xl border border-border bg-bg-raised overflow-hidden">
              <div className="p-4 border-b border-border bg-bg-sunken">
                <div className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">注意事项 Instructions</div>
              </div>
              <div className="p-4 space-y-3 text-[14px] text-ink-secondary leading-relaxed">
                <p>This is a mock HSK Level {testLevel} test following the official exam format.</p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span>一、听力 {t.testPage.listening}</span>
                    <span className="text-ink font-medium">{testLevel === 1 ? 20 : 35} questions &middot; 4 parts</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span>二、阅读 {t.testPage.reading}</span>
                    <span className="text-ink font-medium">{testLevel === 1 ? 20 : 25} questions &middot; 4 parts</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span>{t.testPage.totalTime}</span>
                    <span className="text-ink font-medium">{testLevel === 1 ? 40 : 55} minutes</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>{t.testPage.passScore}</span>
                    <span className="text-ink font-medium">120 / 200 (60%)</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={startTest}
              className="w-full rounded-xl bg-jade hover:bg-jade-hover text-white py-4 font-semibold text-[16px] transition-colors"
            >
              开始考试 &mdash; {t.testPage.startTest}
            </button>

            {pastResults.length > 0 && (
              <div className="space-y-2">
                <div className="text-[13px] font-semibold text-ink-secondary">{t.testPage.pastResults}</div>
                {pastResults
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((r) => (
                    <div
                      key={r.id}
                      className={`flex items-center justify-between rounded-xl p-3.5 border ${
                        r.passed
                          ? "bg-jade-light/50 border-jade/20"
                          : "bg-red-light/50 border-red/20"
                      }`}
                    >
                      <span className="text-[13px] text-ink-secondary">
                        {r.level ? `HSK ${r.level} · ` : ""}{new Date(r.date).toLocaleDateString()}
                      </span>
                      <span className={`text-[14px] font-bold ${r.passed ? "text-jade" : "text-red"}`}>
                        {r.score}/200 {r.passed ? t.testPage.passed : t.testPage.failed}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}

        {/* ── Test ── */}
        {state === "test" && q && (
          <>
            {/* Exam top bar */}
            <div className="flex items-center justify-between">
              <div className="text-[14px] font-semibold text-ink">
                HSK（{testLevel === 1 ? "一" : "二"}级）
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowNav(!showNav)}
                  className="text-[12px] text-ink-tertiary hover:text-ink transition-colors tabular-nums"
                >
                  {answeredCount}/{questions.length}
                </button>
                <span
                  className={`text-[14px] font-mono font-bold tabular-nums px-2.5 py-1 rounded-lg ${
                    timeLeft < 300 ? "bg-red-light text-red" : "bg-bg-sunken text-ink"
                  }`}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-bg-sunken rounded-full h-1">
              <div
                className="bg-jade h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question navigator overlay */}
            {showNav && (
              <div className="rounded-xl border border-border bg-bg-raised p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-ink-secondary">{t.testPage.questionNav}</span>
                  <button onClick={() => setShowNav(false)} className="text-ink-tertiary hover:text-ink text-[13px]">{t.testPage.close}</button>
                </div>
                {examMeta.map((s) => (
                  <div key={`${s.section}-${s.part}`}>
                    <div className="text-[11px] text-ink-tertiary uppercase tracking-wide mb-1.5">
                      {s.section === "listening" ? "听力" : "阅读"} {s.label}
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {Array.from({ length: s.range[1] - s.range[0] + 1 }, (_, i) => {
                        const idx = s.range[0] - 1 + i;
                        const answered = answers[idx] !== null;
                        const active = idx === currentQ;
                        return (
                          <button
                            key={idx}
                            onClick={() => { setCurrentQ(idx); setShowNav(false); }}
                            className={`w-8 h-8 rounded-lg text-[12px] font-medium transition-colors ${
                              active
                                ? "bg-jade text-white"
                                : answered
                                ? "bg-jade-light text-jade-text"
                                : "bg-bg-sunken text-ink-tertiary hover:text-ink"
                            }`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <button
                  onClick={finishTest}
                  className="w-full rounded-xl bg-red hover:bg-red/90 text-white py-2.5 text-[13px] font-medium transition-colors mt-2"
                >
                  交卷 — {t.testPage.submit} ({answeredCount}/40)
                </button>
              </div>
            )}

            {/* Section header (shown at part boundaries) */}
            {isNewSection && currentMeta && (
              <div className="rounded-xl bg-bg-sunken border border-border p-3 text-center">
                <div className="text-[11px] text-ink-tertiary uppercase tracking-widest">
                  {currentMeta.section === "listening" ? `一、听力 ${t.testPage.listening}` : `二、阅读 ${t.testPage.reading}`}
                </div>
                <div className="text-[14px] font-semibold text-ink mt-0.5">
                  {currentMeta.label} &mdash; Part {currentMeta.part}
                </div>
                <div className="text-[12px] text-ink-tertiary mt-1">{q.instruction}</div>
              </div>
            )}

            {/* Question content */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-bg-sunken flex items-center justify-center text-[13px] font-bold text-ink tabular-nums">
                  {q.id}
                </span>
                <div className="flex-1 pt-1">
                  <div className="text-[12px] text-ink-tertiary mb-1">{q.instruction}</div>

                  {/* Context (character shown above prompt) */}
                  {q.context && (
                    <div className="mb-1">
                      <div className="text-2xl font-bold text-ink">{q.context}</div>
                      {q.section === "reading" && (
                        <div className="text-[12px] text-jade mt-0.5">{q.context}</div>
                      )}
                    </div>
                  )}

                  {/* Prompt — reading section shows pinyin above characters */}
                  {q.prompt && (
                    <div>
                      <div className={`font-medium text-ink ${q.context ? "text-[14px] text-ink-secondary" : "text-[18px]"}`}>
                        {q.prompt}
                      </div>
                      {q.section === "reading" && q.context && (
                        <div className="text-[11px] text-ink-tertiary mt-0.5 italic">
                          Pinyin shown as in real exam
                        </div>
                      )}
                    </div>
                  )}

                  {/* Audio button — real exam plays each recording twice */}
                  {q.audioText && (() => {
                    const plays = playCount[q.id] || 0;
                    const maxPlays = 2;
                    return (
                      <button
                        onClick={() => {
                          if (plays < maxPlays) {
                            speak(q.audioText!, 0.8);
                            setPlayCount((p) => ({ ...p, [q.id]: (p[q.id] || 0) + 1 }));
                          }
                        }}
                        disabled={plays >= maxPlays}
                        className={`mt-3 flex items-center gap-2 rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors ${
                          plays >= maxPlays
                            ? "bg-bg-sunken text-ink-tertiary"
                            : "bg-blue-light text-blue hover:bg-blue/10"
                        }`}
                      >
                        <IconVolume className="w-4.5 h-4.5" />
                        <span>{t.testPage.playAudio}</span>
                        <span className="text-[12px] ml-1 opacity-60">{plays}/{maxPlays}</span>
                      </button>
                    );
                  })()}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2 pl-11">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`w-full text-left rounded-xl border p-3.5 text-[14px] transition-all ${
                      answers[currentQ] === i
                        ? "border-jade bg-jade-light/50 text-ink font-medium ring-1 ring-jade/20"
                        : "border-border bg-bg-raised text-ink-secondary hover:border-border-strong hover:text-ink"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-border py-3 text-[14px] text-ink-secondary disabled:opacity-30 hover:border-border-strong transition-colors"
              >
                <IconChevron direction="left" className="w-4 h-4" />
                {t.testPage.prev}
              </button>
              {currentQ < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQ(currentQ + 1)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-jade hover:bg-jade-hover text-white py-3 text-[14px] font-medium transition-colors"
                >
                  {t.testPage.next}
                  <IconChevron direction="right" className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={finishTest}
                  className="flex-1 rounded-xl bg-red hover:bg-red/90 text-white py-3 text-[14px] font-semibold transition-colors"
                >
                  交卷 {t.testPage.submit}
                </button>
              )}
            </div>
          </>
        )}

        {/* ── Results ── */}
        {state === "results" && latestResult && (
          <div className="space-y-6">
            {/* Score header */}
            <div className="text-center pt-2">
              <div className="text-[12px] text-ink-tertiary tracking-[0.2em] uppercase mb-2">
                HSK（{testLevel === 1 ? "一" : "二"}级） Results
              </div>
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${latestResult.passed ? "bg-jade-light" : "bg-red-light"}`}>
                <span className={`text-4xl font-bold ${latestResult.passed ? "text-jade" : "text-red"}`}>
                  {latestResult.score}
                </span>
              </div>
              <div className="text-ink-tertiary text-[14px] mt-1">/ 200</div>
              <div className={`text-lg font-bold mt-2 ${latestResult.passed ? "text-jade" : "text-red"}`}>
                {latestResult.passed ? `合格 ${t.testPage.passed}` : `未通过 ${t.testPage.failed}`}
              </div>
            </div>

            {/* Score breakdown */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-bg-raised border border-border p-4 text-center">
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">听力 {t.testPage.listening}</div>
                <div className="text-2xl font-bold text-ink mt-1 tabular-nums">
                  {(() => {
                    const totalL = questions.filter((q) => q.section === "listening").length;
                    return Math.round((latestResult.answers.slice(0, totalL).filter((a) => a.correct).length / totalL) * 100);
                  })()}
                </div>
                <div className="text-[12px] text-ink-tertiary">/ 100</div>
              </div>
              <div className="rounded-xl bg-bg-raised border border-border p-4 text-center">
                <div className="text-[11px] text-ink-tertiary uppercase tracking-wide">阅读 {t.testPage.reading}</div>
                <div className="text-2xl font-bold text-ink mt-1 tabular-nums">
                  {(() => {
                    const totalL = questions.filter((q) => q.section === "listening").length;
                    const totalR = questions.filter((q) => q.section === "reading").length;
                    return Math.round((latestResult.answers.slice(totalL).filter((a) => a.correct).length / totalR) * 100);
                  })()}
                </div>
                <div className="text-[12px] text-ink-tertiary">/ 100</div>
              </div>
            </div>

            <div className="text-[13px] text-ink-tertiary text-center">
              {latestResult.answers.filter((a) => a.correct).length}/{questions.length} {t.testPage.correct} &middot; {t.testPage.passScore}: 120/200
            </div>

            {/* Full review */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-semibold text-ink-secondary">{t.testPage.reviewAnswers}</div>
                <div className="flex gap-2 text-[12px] text-ink-tertiary">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-jade inline-block" /> {latestResult.answers.filter((a) => a.correct).length}</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red inline-block" /> {latestResult.answers.filter((a) => !a.correct).length}</span>
                </div>
              </div>

              {examMeta.map((sec) => (
                <div key={`${sec.section}-${sec.part}`}>
                  <div className="text-[11px] text-ink-tertiary uppercase tracking-wide mb-1.5 mt-3">
                    {sec.section === "listening" ? `听力 ${t.testPage.listening}` : `阅读 ${t.testPage.reading}`} · {sec.label}
                  </div>
                  {questions.slice(sec.range[0] - 1, sec.range[1]).map((q) => {
                    const idx = q.id - 1;
                    const userAnswer = answers[idx];
                    const isCorrect = latestResult.answers[idx]?.correct;
                    const skipped = userAnswer === null;

                    return (
                      <div
                        key={q.id}
                        className={`rounded-xl border p-3.5 text-[13px] mb-1.5 ${
                          isCorrect
                            ? "border-jade/20 bg-jade-light/30"
                            : "border-red/20 bg-red-light/30"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold text-white ${isCorrect ? "bg-jade" : "bg-red"}`}>
                            {q.id}
                          </span>
                          <span className="text-ink-secondary text-[12px]">{q.instruction}</span>
                        </div>

                        {q.prompt && <div className="text-[14px] text-ink mb-2">{q.prompt}</div>}
                        {q.context && <div className="text-lg font-semibold text-ink mb-2">{q.context}</div>}

                        <div className="space-y-1">
                          {q.options.map((opt, oi) => {
                            const isUserPick = userAnswer === oi;
                            const isCorrectOpt = oi === q.correctIndex;
                            let cls = "text-ink-tertiary";
                            if (isCorrectOpt) cls = "text-jade font-medium";
                            else if (isUserPick && !isCorrect) cls = "text-red line-through";

                            return (
                              <div key={oi} className={`flex items-center gap-2 ${cls}`}>
                                {isCorrectOpt && <IconCheck className="w-3.5 h-3.5 text-jade shrink-0" />}
                                {isUserPick && !isCorrect && <IconX className="w-3.5 h-3.5 text-red shrink-0" />}
                                {!isCorrectOpt && !isUserPick && <span className="w-3.5 shrink-0" />}
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>

                        {skipped && (
                          <div className="text-[12px] text-red mt-1.5 italic">Skipped</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setState("intro")}
                className="flex-1 rounded-xl border border-border hover:border-border-strong py-3 text-[14px] text-ink-secondary transition-colors"
              >
                {t.testPage.back}
              </button>
              <button
                onClick={startTest}
                className="flex-1 rounded-xl bg-jade hover:bg-jade-hover text-white py-3 text-[14px] font-semibold transition-colors"
              >
                {t.testPage.tryAgain}
              </button>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
