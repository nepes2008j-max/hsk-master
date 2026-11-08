"use client";

// Full-screen lesson player (Duolingo-style flow, Khan-style mastery): mixed exercises, instant feedback,
// wrong answers come back at the end, a summary, and a scored lesson test.
import { useEffect, useMemo, useRef, useState } from "react";
import { buildSession, shuffle, stripTones, type BWord, type Ex, type LessonInput, type Mode } from "@/lib/exercises";
import { load, recordLesson, recordWord } from "@/lib/exstats";
import { speak } from "@/lib/tts";
import { useLang } from "@/lib/i18n";
import { getProgress, updateStreak, addXP } from "@/lib/storage";
import { IconVolume, IconX } from "@/components/Icons";

interface Props {
  lessonKey: string;
  title: string;
  lesson: LessonInput;
  pool: BWord[];
  mode: Mode;
  meaningOf: (w: BWord) => string;
  onClose: () => void;
}

const say = (s?: string) => { if (s) speak(s); };

export default function LessonPlayer({ lessonKey, title, lesson, pool, mode, meaningOf, onClose }: Props) {
  const { t } = useLang();
  const lp = t.lp;
  const initial = useMemo(() => buildSession(lesson, pool, load(), mode, mode === "test" ? 15 : 20), [lesson, pool, mode]);
  const [queue, setQueue] = useState<Ex[]>(initial);
  const [i, setI] = useState(0);
  const [firstTry, setFirstTry] = useState(0);
  const [wrongWords, setWrongWords] = useState<BWord[]>([]);
  const [fb, setFb] = useState<null | { ok: boolean; note?: string; answer?: string }>(null);
  const [finished, setFinished] = useState(false);
  const retried = useRef(new Set<number>());
  const total = initial.length;
  const ex = queue[i];
  const loc = useMemo(() => new Map(pool.map((w) => [w.english, meaningOf(w)])), [pool, meaningOf]);
  const L = (english: string) => loc.get(english) ?? english;

  // exercise-local state
  const [sel, setSel] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [built, setBuilt] = useState<string[]>([]);
  const [pairDone, setPairDone] = useState<string[]>([]);
  const [pairSel, setPairSel] = useState<{ side: "l" | "r"; v: string } | null>(null);
  const [pairErr, setPairErr] = useState(0);
  const [flash, setFlash] = useState<string | null>(null);

  // match columns are shuffled once per exercise
  const pairs = ex?.t === "match" ? ex.pairs : [];
  const lefts = useMemo(() => shuffle(pairs.map((p) => p.hanzi)), [ex]); // eslint-disable-line react-hooks/exhaustive-deps
  const rights = useMemo(() => shuffle(pairs.map((p) => p.english)), [ex]); // eslint-disable-line react-hooks/exhaustive-deps

  const reset = () => { setSel(null); setText(""); setBuilt([]); setPairDone([]); setPairSel(null); setPairErr(0); setFlash(null); setFb(null); };
  useEffect(() => { if (ex?.t === "listen") say(ex.word.hanzi); }, [ex]);

  const grade = (ok: boolean, answer?: string, note?: string, words?: BWord[]) => {
    const isRetry = retried.current.has(i);
    if (ok && !isRetry) setFirstTry((n) => n + 1);
    if (!ok) setWrongWords((w) => [...w, ...(words ?? [])]);
    for (const w of words ?? []) recordWord(w.hanzi, ok);
    if (ok && words?.length === 1) say(words[0].hanzi);
    setFb({ ok, answer: ok ? undefined : answer, note });
    if (!ok && mode !== "test" && !isRetry) {
      retried.current.add(queue.length); // the re-queued copy is a retry (only one retry per exercise)
      setQueue((q) => [...q, ex]);
    }
  };

  const check = () => {
    if (!ex || fb) return;
    switch (ex.t) {
      case "meaning": case "word": case "listen": case "pinyin": case "blank":
        if (sel === null) return;
        grade(sel === ex.answer, ex.t === "meaning" ? L(ex.answer) : ex.answer, undefined, [ex.word]);
        break;
      case "reorder":
        grade(built.join("") === ex.answer.join(""), ex.answer.join(""), undefined, []);
        break;
      case "typePinyin": {
        const typed = text.trim().toLowerCase().replace(/\s+/g, "");
        const want = ex.answer.toLowerCase().replace(/\s+/g, "");
        const ok = typed === want || stripTones(typed) === stripTones(want);
        grade(ok, ex.answer, ok && typed !== want ? lp.toneNote : undefined, [ex.word]);
        break;
      }
      case "typeHanzi":
        grade(text.trim() === ex.answer, ex.answer, undefined, [ex.word]);
        break;
      default: break;
    }
  };

  const next = async () => {
    reset();
    if (i + 1 >= queue.length) {
      setFinished(true);
      const acc = total ? firstTry / total : 0;
      recordLesson(lessonKey, (r) => (mode === "test" ? { ...r, tests: (r.tests ?? 0) + 1, best: Math.max(r.best ?? 0, acc) } : { ...r, practice: (r.practice ?? 0) + 1 }));
      try {
        await updateStreak();
        const p = await getProgress();
        if (p.mode === "gamified") await addXP(Math.round(firstTry * 10));
      } catch { /* offline / no auth is fine */ }
    } else setI(i + 1);
  };

  // keyboard: Enter checks / continues, Esc closes
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter" && !finished) { e.preventDefault(); if (fb) next(); else check(); }
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });

  const pct = Math.min(100, Math.round(((finished ? total : Math.min(i, total)) / Math.max(total, 1)) * 100));
  const acc = total ? Math.round((firstTry / total) * 100) : 0;
  const uniqWrong = [...new Map(wrongWords.map((w) => [w.hanzi, w])).values()];

  // ---------- summary ----------
  if (finished) {
    const passed = mode === "test" && acc >= 80;
    return (
      <div className="fixed inset-0 z-[70] flex flex-col bg-bg overflow-y-auto">
        <div className="mx-auto w-full max-w-md flex-1 flex flex-col items-center justify-center px-6 py-10 text-center gap-5">
          <div className="text-6xl">{mode === "test" ? (passed ? "🏆" : "💪") : "🎉"}</div>
          <h1 className="text-2xl font-extrabold text-ink">{mode === "test" ? lp.testDone : lp.done}</h1>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="rounded-2xl border border-border bg-bg-raised p-4"><div className="text-3xl font-extrabold text-primary tabular-nums">{acc}%</div><div className="text-[12px] text-ink-tertiary">{lp.accuracy}</div></div>
            <div className="rounded-2xl border border-border bg-bg-raised p-4"><div className="text-3xl font-extrabold text-accent tabular-nums">+{firstTry * 10}</div><div className="text-[12px] text-ink-tertiary">{lp.xp}</div></div>
          </div>
          {mode === "test" && <div className={`text-[14px] font-semibold ${passed ? "text-[#16a34a]" : "text-warning-text"}`}>{passed ? lp.passed : lp.failed}</div>}
          {uniqWrong.length > 0 && (
            <div className="w-full rounded-2xl border border-border bg-bg-raised p-4 text-left">
              <div className="text-[12px] font-semibold uppercase tracking-wide text-ink-tertiary mb-2">{lp.weak}</div>
              <div className="space-y-1.5">
                {uniqWrong.slice(0, 8).map((w) => (
                  <div key={w.hanzi} className="flex items-center gap-2 text-[14px]">
                    <button onClick={() => say(w.hanzi)} aria-label="Play" className="text-primary"><IconVolume className="w-4 h-4" /></button>
                    <span className="font-bold text-ink">{w.hanzi}</span><span className="text-ink-tertiary">{w.pinyin}</span><span className="text-ink-secondary ml-auto">{meaningOf(w)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <button onClick={onClose} className="w-full rounded-2xl bg-primary py-3.5 text-[15px] font-bold text-white active:scale-[0.98] transition-transform">{lp.cont}</button>
        </div>
      </div>
    );
  }

  if (!ex) return null;

  // ---------- exercise bodies ----------
  const prompt = ex.t === "meaning" ? lp.chooseMeaning : ex.t === "word" ? lp.chooseWord : ex.t === "listen" ? lp.listenChoose : ex.t === "pinyin" ? lp.choosePinyin : ex.t === "match" ? lp.matchPairs : ex.t === "reorder" ? lp.arrange : ex.t === "blank" ? lp.fillBlank : ex.t === "typePinyin" ? lp.typePinyin : lp.typeHanzi;
  const options = "options" in ex ? ex.options : [];
  const optLabel = (o: string) => (ex.t === "meaning" ? L(o) : o);
  const canCheck = !fb && (("options" in ex && sel !== null) || (ex.t === "reorder" && built.length > 0) || ((ex.t === "typePinyin" || ex.t === "typeHanzi") && text.trim() !== ""));

  const tapPair = (side: "l" | "r", v: string) => {
    if (fb) return;
    if (!pairSel || pairSel.side === side) { setPairSel({ side, v }); return; }
    const hanzi = side === "l" ? v : pairSel.v;
    const eng = side === "r" ? v : pairSel.v;
    const ok = pairs.some((p) => p.hanzi === hanzi && p.english === eng);
    setPairSel(null);
    if (ok) {
      const done = [...pairDone, hanzi];
      setPairDone(done);
      if (done.length === pairs.length) grade(pairErr <= 2, pairs.map((p) => `${p.hanzi} = ${L(p.english)}`).join("; "), undefined, []);
    } else { setPairErr((n) => n + 1); setFlash(hanzi + "|" + eng); setTimeout(() => setFlash(null), 450); }
  };

  const optBtn = (o: string, k: number) => {
    const picked = sel === o;
    const right = o === (ex as { answer: string }).answer;
    let cls = "border-border bg-bg-raised text-ink active:scale-[0.98]";
    if (picked) cls = "border-primary bg-primary-light text-primary-text";
    if (fb && right) cls = "border-[#16a34a] bg-[#dcfce7] text-[#166534]";
    else if (fb && picked && !right) cls = "border-[#dc2626] bg-[#fee2e2] text-[#991b1b]";
    const hanziOpt = ex.t === "word" || ex.t === "listen" || ex.t === "blank";
    return (
      <button key={o + k} disabled={!!fb} onClick={() => { setSel(o); if (hanziOpt) say(o); }} className={`w-full rounded-2xl border-2 px-4 py-3.5 text-left transition-all ${hanziOpt ? "text-[22px] font-bold" : "text-[15px] font-medium"} ${cls}`}>
        <span className="mr-3 inline-block w-5 text-[12px] font-bold opacity-50">{k + 1}</span>{optLabel(o)}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-bg">
      <div className="mx-auto w-full max-w-md flex items-center gap-3 px-4 pt-4">
        <button onClick={onClose} aria-label={lp.close} className="p-2 -ml-2 text-ink-tertiary hover:text-ink"><IconX className="w-5 h-5" /></button>
        <div className="flex-1 h-3 rounded-full bg-bg-sunken overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-[#dc2626] to-[#f97316] transition-all duration-300" style={{ width: `${pct}%` }} /></div>
        <div className="text-[12px] font-bold text-ink-tertiary tabular-nums">{Math.min(i + 1, queue.length)}/{queue.length}</div>
      </div>
      <div className="px-4 pt-1 text-center text-[11px] font-semibold uppercase tracking-wide text-ink-tertiary">{title}{mode === "test" ? ` · ${lp.lessonTest}` : ""}</div>

      <div className="mx-auto w-full max-w-md flex-1 overflow-y-auto px-4 pb-44 pt-5">
        <h2 className="text-[20px] font-extrabold text-ink mb-4">{prompt}</h2>

        {(ex.t === "meaning" || ex.t === "pinyin") && (
          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-border bg-bg-raised p-4">
            <button onClick={() => say(ex.word.hanzi)} aria-label="Play" className="w-11 h-11 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0"><IconVolume className="w-5 h-5" /></button>
            <div><div className="text-[34px] font-extrabold leading-tight text-ink">{ex.word.hanzi}</div>{ex.t === "meaning" && <div className="text-[13px] text-ink-tertiary">{ex.word.pinyin}</div>}</div>
          </div>
        )}
        {ex.t === "word" && <div className="mb-4 rounded-2xl border border-border bg-bg-raised p-4 text-[20px] font-bold text-ink">{L(ex.word.english)}</div>}
        {ex.t === "listen" && (
          <button onClick={() => say(ex.word.hanzi)} className="mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg active:scale-95 transition-transform" aria-label="Play"><IconVolume className="w-9 h-9" /></button>
        )}
        {ex.t === "blank" && (
          <div className="mb-4 rounded-2xl border border-border bg-bg-raised p-4">
            <div className="text-[24px] font-bold text-ink leading-snug">{ex.display}</div>
            {ex.en && <div className="mt-1 text-[13px] text-ink-tertiary">{ex.en}</div>}
          </div>
        )}
        {"options" in ex && <div className="space-y-2.5">{options.map(optBtn)}</div>}

        {ex.t === "reorder" && (
          <div>
            {ex.en && <div className="mb-3 rounded-2xl border border-border bg-bg-raised p-4 text-[15px] text-ink-secondary">{ex.en}</div>}
            <div className="min-h-[64px] flex flex-wrap gap-2 rounded-2xl border-2 border-dashed border-border p-3 mb-4">
              {built.map((tk, k) => (
                <button key={k} disabled={!!fb} onClick={() => setBuilt(built.filter((_, x) => x !== k))} className="rounded-xl border border-border bg-bg-raised px-3 py-2 text-[20px] font-bold text-ink">{tk}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {ex.tokens.map((tk, k) => {
                const used = built.filter((b) => b === tk).length;
                const avail = ex.tokens.slice(0, k + 1).filter((b) => b === tk).length > used;
                return <button key={k} disabled={!!fb || !avail} onClick={() => setBuilt([...built, tk])} className={`rounded-xl border border-border px-3 py-2 text-[20px] font-bold ${avail ? "bg-bg-raised text-ink" : "bg-bg-sunken text-transparent"}`}>{tk}</button>;
              })}
            </div>
          </div>
        )}

        {ex.t === "match" && (
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2.5">{lefts.map((h) => {
              const done = pairDone.includes(h), on = pairSel?.side === "l" && pairSel.v === h, bad = flash?.startsWith(h + "|");
              return <button key={h} disabled={done} onClick={() => { tapPair("l", h); say(h); }} className={`w-full rounded-2xl border-2 px-3 py-3 text-[20px] font-bold transition-all ${done ? "border-transparent bg-bg-sunken text-transparent" : bad ? "border-[#dc2626] bg-[#fee2e2]" : on ? "border-primary bg-primary-light text-primary-text" : "border-border bg-bg-raised text-ink"}`}>{h}</button>;
            })}</div>
            <div className="space-y-2.5">{rights.map((e) => {
              const hz = pairs.find((p) => p.english === e)?.hanzi ?? "";
              const done = pairDone.includes(hz), on = pairSel?.side === "r" && pairSel.v === e, bad = flash?.endsWith("|" + e);
              return <button key={e} disabled={done} onClick={() => tapPair("r", e)} className={`w-full rounded-2xl border-2 px-3 py-3 text-[14px] font-medium transition-all ${done ? "border-transparent bg-bg-sunken text-transparent" : bad ? "border-[#dc2626] bg-[#fee2e2]" : on ? "border-primary bg-primary-light text-primary-text" : "border-border bg-bg-raised text-ink"}`}>{L(e)}</button>;
            })}</div>
          </div>
        )}

        {(ex.t === "typePinyin" || ex.t === "typeHanzi") && (
          <div>
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-border bg-bg-raised p-4">
              <button onClick={() => say(ex.word.hanzi)} aria-label="Play" className="w-11 h-11 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0"><IconVolume className="w-5 h-5" /></button>
              <div>
                {ex.t === "typePinyin" && <div className="text-[34px] font-extrabold text-ink leading-tight">{ex.word.hanzi}</div>}
                {ex.t === "typeHanzi" && <><div className="text-[18px] font-bold text-ink">{meaningOf(ex.word)}</div><div className="text-[13px] text-ink-tertiary">{ex.word.pinyin}</div></>}
              </div>
            </div>
            <input autoFocus value={text} onChange={(e) => setText(e.target.value)} disabled={!!fb} placeholder={lp.typeHere} className="w-full rounded-2xl border-2 border-border bg-bg-raised px-4 py-3.5 text-[20px] font-semibold text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary" />
          </div>
        )}
      </div>

      {/* feedback / action bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-[71] px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] transition-colors ${fb ? (fb.ok ? "bg-[#dcfce7]" : "bg-[#fee2e2]") : "bg-bg/95 backdrop-blur"}`}>
        <div className="mx-auto max-w-md">
          {fb && (
            <div className={`mb-3 ${fb.ok ? "text-[#166534]" : "text-[#991b1b]"}`}>
              <div className="text-[17px] font-extrabold">{fb.ok ? lp.correct : lp.nope}</div>
              {!fb.ok && fb.answer && <div className="text-[14px]"><span className="font-semibold">{lp.answerWas}:</span> {fb.answer}</div>}
              {fb.note && <div className="text-[13px] opacity-80">{fb.note}</div>}
              {"word" in ex && ex.t !== "typeHanzi" && <div className="mt-1 text-[13px] opacity-80">{ex.word.hanzi} · {ex.word.pinyin} · {meaningOf(ex.word)}</div>}
            </div>
          )}
          <button
            disabled={!fb && !canCheck}
            onClick={() => (fb ? next() : check())}
            className={`w-full rounded-2xl py-3.5 text-[15px] font-extrabold text-white transition-all active:scale-[0.98] disabled:opacity-40 ${fb ? (fb.ok ? "bg-[#16a34a]" : "bg-[#dc2626]") : "bg-primary"} ${ex.t === "match" && !fb ? "hidden" : ""}`}
          >
            {fb ? lp.cont : lp.check}
          </button>
        </div>
      </div>
    </div>
  );
}
