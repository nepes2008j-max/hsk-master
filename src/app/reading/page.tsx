"use client";

// Reading: graded stories + your own imported texts. Tap any word -> pinyin, meaning (app words first, then CC-CEDICT,
// then free machine translation into Russian/Turkmen). Imported texts never leave this device.
import { useEffect, useRef, useState } from "react";
import AppShell from "@/components/AppShell";
import { stories, type Story } from "@/data/stories";
import { allWords } from "@/lib/all-words";
import { loadCedict, lookupCedict, type CedictEntry } from "@/lib/cedict";
import { translate } from "@/lib/mt";
import { saveUserCard } from "@/lib/storage";
import { speak } from "@/lib/tts";
import { useLang } from "@/lib/i18n";
import { useTranslation } from "@/hooks/useTranslation";
import { IconVolume, IconX, IconChevron } from "@/components/Icons";

interface Tok { w: string; p?: string }
interface Sent { zh: string; en?: string; ru?: string; tokens?: Tok[] }
interface Imported { id: string; title: string; text: string }
const IMPORT_KEY = "hsk-reader-imports", PREF_KEY = "hsk-reader-prefs";
const CJK = /[一-鿿]/;
const wordMap = new Map(allWords.map((w) => [w.hanzi, w]));
const seg = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter("zh", { granularity: "word" }) : null;
const tokenize = (zh: string): Tok[] => (seg ? [...seg.segment(zh)].map((s) => ({ w: s.segment })) : [...zh].map((w) => ({ w })));
const splitSentences = (text: string): Sent[] =>
  (text.replace(/\r/g, "").match(/[^。！？!?\n]+[。！？!?”’」』）)]*|\n/g) ?? []).map((s) => s.trim()).filter((s) => CJK.test(s)).map((zh) => ({ zh }));
// Prefer the ordinary reading: skip capitalised (proper-noun) pinyin and "surname / variant of" senses.
const best = (es: CedictEntry[]) => es.find((e) => /^[a-zāáǎàēéěèīíǐìōóǒòūúǔùü]/.test(e.pinyin) && !/^(surname|variant of|old variant|archaic)/i.test(e.def)) ?? es[0];
const readJSON = <T,>(k: string, d: T): T => { try { return JSON.parse(localStorage.getItem(k) ?? "") as T; } catch { return d; } };

export default function ReadingPage() {
  const { t, lang } = useLang();
  const rd = t.rd;
  const tr = useTranslation();
  const [imports, setImports] = useState<Imported[]>([]);
  const [open, setOpen] = useState<{ title: string; sents: Sent[]; story?: Story } | null>(null);
  const [showPy, setShowPy] = useState(true);
  const [showTr, setShowTr] = useState(false);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState({ title: "", text: "" });
  const [word, setWord] = useState<Tok | null>(null);
  const [cedict, setCedict] = useState<CedictEntry[] | null>(null);
  const [auto, setAuto] = useState<string | null>(null);
  const [sentTr, setSentTr] = useState<Record<number, string>>({});
  const [addedCard, setAddedCard] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImports(readJSON<Imported[]>(IMPORT_KEY, []));
    const p = readJSON<{ py?: boolean; tr?: boolean }>(PREF_KEY, {});
    if (p.py !== undefined) setShowPy(p.py);
    if (p.tr !== undefined) setShowTr(p.tr);
  }, []);
  useEffect(() => { try { localStorage.setItem(PREF_KEY, JSON.stringify({ py: showPy, tr: showTr })); } catch { /* noop */ } }, [showPy, showTr]);
  useEffect(() => { if (open && !cedict) loadCedict().then(setCedict).catch(() => {}); }, [open, cedict]);

  const persist = (list: Imported[]) => { setImports(list); try { localStorage.setItem(IMPORT_KEY, JSON.stringify(list)); } catch { /* quota */ } };

  const pinyinOf = (tk: Tok): string => {
    if (tk.p !== undefined) return tk.p;
    if (!cedict || !CJK.test(tk.w)) return "";
    const e = best(lookupCedict(cedict, tk.w));
    if (e) return e.pinyin.replace(/\s+/g, "");
    return [...tk.w].map((c) => best(lookupCedict(cedict, c))?.pinyin.replace(/\s+/g, "") ?? "").join("");
  };

  // ---- word sheet data ----
  const app = word ? wordMap.get(word.w) : undefined;
  const entries = word && cedict ? lookupCedict(cedict, word.w) : [];
  const localized = word ? tr(word.w)?.meaning ?? (lang === "ru" ? app?.ru : undefined) : undefined;
  const gloss = app?.english ?? entries[0]?.def?.split("; ")[0];
  useEffect(() => {
    setAuto(null);
    if (!word || lang === "en" || localized || !gloss) return;
    let dead = false;
    translate(gloss, "en", lang === "ru" ? "ru" : "tk").then((r) => { if (!dead) setAuto(r); });
    return () => { dead = true; };
  }, [word, lang, localized, gloss]);

  useEffect(() => { setAddedCard(false); }, [word]);
  const wordPy = word ? (app?.pinyin ?? (word.p || pinyinOf(word))) : "";

  const translateSentence = async (i: number, zh: string) => {
    const r = await translate(zh, "zh-CN", lang === "ru" ? "ru" : lang === "tk" ? "tk" : "en");
    if (r) setSentTr((s) => ({ ...s, [i]: r }));
  };

  const openStory = (s: Story) => { setSentTr({}); setOpen({ title: lang === "ru" ? s.title.ru : s.title.en, sents: s.sentences.map((x) => ({ zh: x.zh, en: x.en, ru: x.ru, tokens: x.tokens })), story: s }); };
  const openImport = (im: Imported) => { setSentTr({}); setOpen({ title: im.title, sents: splitSentences(im.text) }); };

  // ---------- reader ----------
  if (open) {
    const sents = open.sents;
    return (
      <AppShell>
        <div className="space-y-4">
          <div>
            <button onClick={() => { setOpen(null); setWord(null); }} className="flex items-center gap-1 text-[13px] font-semibold text-ink-secondary"><IconChevron direction="left" className="w-4 h-4" /> {rd.back}</button>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-ink">{open.story ? open.story.title.zh : open.title}</h1>
            {open.story && <div className="text-[14px] text-ink-secondary">{open.title}</div>}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => setShowPy(!showPy)} aria-pressed={showPy} className={`rounded-full px-3.5 py-2 text-[13px] font-semibold ${showPy ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary"}`}>{rd.pinyin}</button>
            <button onClick={() => setShowTr(!showTr)} aria-pressed={showTr} className={`rounded-full px-3.5 py-2 text-[13px] font-semibold ${showTr ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary"}`}>{rd.translation}</button>
            <button onClick={() => speak(sents.map((s) => s.zh).join(""))} className="ml-auto flex items-center gap-1.5 rounded-full bg-bg-sunken px-3.5 py-2 text-[13px] font-semibold text-ink-secondary"><IconVolume className="w-4 h-4" /> {rd.listen}</button>
          </div>
          <p className="text-[12px] text-ink-tertiary">{rd.tapWord}</p>

          <div className="space-y-3">
            {sents.map((s, i) => {
              const toks = s.tokens ?? tokenize(s.zh);
              const trans = lang === "ru" ? s.ru ?? sentTr[i] : lang === "tk" ? sentTr[i] : s.en ?? sentTr[i];
              return (
                <div key={i} className="rounded-2xl border border-border bg-bg-raised px-4 py-3">
                  <div className="flex items-start gap-2">
                    <div className={`flex-1 flex flex-wrap items-end gap-x-0.5 gap-y-1.5 leading-[2.4] ${showPy ? "" : "[&_rt]:hidden"}`}>
                      {toks.map((tk, k) => (CJK.test(tk.w)
                        ? <button key={k} onClick={() => setWord(tk)} className="rounded-md px-0.5 text-center hover:bg-primary-light active:bg-primary-light transition-colors"><ruby className="text-[26px] font-semibold text-ink">{tk.w}<rt className="text-[11px] font-medium text-primary">{pinyinOf(tk)}</rt></ruby></button>
                        : <span key={k} className="text-[26px] text-ink-secondary">{tk.w}</span>))}
                    </div>
                    <button onClick={() => speak(s.zh)} aria-label={rd.listen} className="p-2 text-ink-tertiary hover:text-primary shrink-0"><IconVolume className="w-4 h-4" /></button>
                  </div>
                  {showTr && (trans
                    ? <div className="mt-1 text-[14px] text-ink-secondary">{trans}{!s.en && <span className="ml-1 text-[11px] text-ink-tertiary">({rd.auto})</span>}</div>
                    : !open.story || lang === "tk" ? <button onClick={() => translateSentence(i, s.zh)} className="mt-1 text-[13px] font-semibold text-primary">{rd.translate}</button> : null)}
                </div>
              );
            })}
          </div>

          {open.story && <Questions key={open.story.id} story={open.story} rd={rd} />}
        </div>

        {word && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40" onClick={() => setWord(null)}>
            <div role="dialog" aria-label={word.w} onClick={(e) => e.stopPropagation()} className="sheet-up w-full sm:max-w-md max-h-[80dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-bg border border-border shadow-2xl px-5 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border-strong sm:hidden" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[52px] leading-none font-extrabold text-ink">{word.w}</div>
                  <div className="mt-2 text-[20px] font-semibold text-primary">{wordPy}</div>
                </div>
                <button onClick={() => setWord(null)} aria-label={rd.hide} className="p-2 -mr-2 text-ink-tertiary hover:text-ink"><IconX className="w-4 h-4" /></button>
              </div>
              <button onClick={() => speak(word.w)} className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-bg-sunken py-3 text-[14px] font-semibold text-ink"><IconVolume className="w-4 h-4" /> {rd.listen}</button>
              <button
                onClick={async () => {
                  if (!word) return;
                  await saveUserCard({ id: `read-${word.w}`, front: word.w, back: `${wordPy} — ${localized ?? auto ?? app?.english ?? entries[0]?.def ?? ""}`, pinyin: wordPy, deck: "Reading", created: Date.now() });
                  setAddedCard(true);
                }}
                className="mt-2 w-full rounded-xl border border-border bg-bg-raised py-3 text-[14px] font-semibold text-primary active:scale-[0.98] transition-transform"
              >{addedCard ? rd.added : rd.addCard}</button>
              <div className="mt-4 space-y-3">
                {(localized || auto) && <div className="text-[18px] text-ink">{localized ?? auto}{!localized && <span className="ml-1.5 text-[11px] font-medium text-ink-tertiary">({rd.auto})</span>}</div>}
                {app && <div className={localized || auto ? "text-[14px] text-ink-secondary" : "text-[18px] text-ink"}>{app.english}</div>}
                {!app && entries.length === 0 && (cedict ? <div className="text-[14px] text-ink-tertiary">{rd.unknown}</div> : <div className="text-[14px] text-ink-tertiary">{rd.lookingUp}</div>)}
                {entries.length > 0 && (
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-tertiary mb-1">{rd.readings}</div>
                    <div className="space-y-1.5">
                      {entries.slice(0, 4).map((e, k) => <div key={k} className="text-[14px]"><span className="font-semibold text-primary mr-2">{e.pinyin}</span><span className="text-ink-secondary">{e.def}</span></div>)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </AppShell>
    );
  }

  // ---------- library ----------
  const byLevel = [1, 2, 3].map((lv) => ({ lv, list: stories.filter((s) => s.level === lv) })).filter((g) => g.list.length);
  return (
    <AppShell>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold tracking-tight text-ink">{rd.title}</h1>

        <button onClick={() => setAdding(true)} className="w-full flex items-center gap-3 rounded-2xl border-2 border-dashed border-border-strong bg-bg-raised px-4 py-4 text-left active:scale-[0.99] transition-transform">
          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center text-2xl font-light">+</div>
          <div><div className="text-[15px] font-bold text-ink">{rd.import}</div><div className="text-[12px] text-ink-tertiary">{rd.importHint}</div></div>
        </button>

        {imports.length > 0 && (
          <div>
            <h2 className="text-[12px] font-bold uppercase tracking-wide text-ink-tertiary mb-2">{rd.yours}</h2>
            <div className="space-y-2">
              {imports.map((im) => (
                <div key={im.id} className="flex items-center gap-2 rounded-2xl border border-border bg-bg-raised pl-4 pr-2 py-3">
                  <button onClick={() => openImport(im)} className="flex-1 text-left min-w-0"><div className="text-[15px] font-semibold text-ink truncate">{im.title}</div><div className="text-[12px] text-ink-tertiary">{splitSentences(im.text).length} {rd.sentences}</div></button>
                  <button onClick={() => persist(imports.filter((x) => x.id !== im.id))} aria-label={rd.del} className="p-2 text-ink-tertiary hover:text-primary"><IconX className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {byLevel.map((g) => (
          <div key={g.lv}>
            <h2 className="text-[12px] font-bold uppercase tracking-wide text-ink-tertiary mb-2">{rd.stories} · HSK {g.lv}</h2>
            <div className="space-y-2">
              {g.list.map((s) => (
                <button key={s.id} onClick={() => openStory(s)} className="w-full flex items-center gap-3 rounded-2xl border border-border bg-bg-raised px-4 py-3 text-left active:scale-[0.99] transition-transform">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#dc2626] to-[#f97316] text-white flex items-center justify-center text-lg font-extrabold shrink-0">{s.title.zh[0]}</div>
                  <div className="min-w-0 flex-1"><div className="text-[15px] font-semibold text-ink truncate">{s.title.zh}</div><div className="text-[12px] text-ink-tertiary truncate">{lang === "ru" ? s.title.ru : s.title.en} · {s.sentences.length} {rd.sentences}</div></div>
                  <IconChevron direction="right" className="w-4 h-4 text-ink-tertiary shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {adding && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40" onClick={() => setAdding(false)}>
          <div role="dialog" onClick={(e) => e.stopPropagation()} className="sheet-up w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-bg border border-border shadow-2xl px-5 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] space-y-3">
            <div className="text-[17px] font-extrabold text-ink">{rd.import}</div>
            <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder={rd.titleField} className="w-full rounded-xl border border-border bg-bg-raised px-3.5 py-3 text-[15px] text-ink focus:outline-none focus:border-primary" />
            <textarea value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} rows={9} placeholder={rd.textField} className="w-full rounded-xl border border-border bg-bg-raised px-3.5 py-3 text-[17px] text-ink focus:outline-none focus:border-primary" />
            <input ref={fileRef} type="file" accept=".txt,text/plain" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (!f) return; f.text().then((txt) => setDraft((d) => ({ title: d.title || f.name.replace(/\.[^.]+$/, ""), text: txt.slice(0, 40000) }))); }} />
            <button onClick={() => fileRef.current?.click()} className="w-full rounded-xl bg-bg-sunken py-3 text-[14px] font-semibold text-ink-secondary">{rd.file}</button>
            <div className="flex gap-2">
              <button onClick={() => setAdding(false)} className="flex-1 rounded-xl bg-bg-sunken py-3 text-[14px] font-semibold text-ink-secondary">{rd.cancel}</button>
              <button
                disabled={!CJK.test(draft.text)}
                onClick={() => { persist([{ id: String(Date.now()), title: draft.title.trim() || draft.text.slice(0, 12), text: draft.text }, ...imports]); setDraft({ title: "", text: "" }); setAdding(false); }}
                className="flex-1 rounded-xl bg-primary py-3 text-[14px] font-bold text-white disabled:opacity-40"
              >{rd.save}</button>
            </div>
            {!CJK.test(draft.text) && draft.text && <div className="text-[12px] text-ink-tertiary">{rd.noText}</div>}
          </div>
        </div>
      )}
    </AppShell>
  );
}

function Questions({ story, rd }: { story: Story; rd: { questions: string; next: string; finish: string; score: string; again: string } }) {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const qs = story.questions;
  if (!qs.length) return null;
  if (i >= qs.length) return (
    <div className="rounded-2xl border border-border bg-bg-raised p-5 text-center space-y-2">
      <div className="text-3xl font-extrabold text-primary">{score}/{qs.length}</div><div className="text-[13px] text-ink-tertiary">{rd.score}</div>
      <button onClick={() => { setI(0); setPick(null); setScore(0); }} className="rounded-xl bg-bg-sunken px-4 py-2.5 text-[14px] font-semibold text-ink-secondary">{rd.again}</button>
    </div>
  );
  const q = qs[i];
  return (
    <div className="rounded-2xl border border-border bg-bg-raised p-4 space-y-3">
      <div className="text-[11px] font-bold uppercase tracking-wide text-ink-tertiary">{rd.questions} · {i + 1}/{qs.length}</div>
      <div className="text-[16px] font-semibold text-ink">{q.q}</div>
      <div className="space-y-2">
        {q.options.map((o, k) => {
          const right = k === q.answer;
          const cls = pick === null ? "border-border bg-bg text-ink" : right ? "border-[#16a34a] bg-[#dcfce7] text-[#166534]" : pick === k ? "border-[#dc2626] bg-[#fee2e2] text-[#991b1b]" : "border-border bg-bg text-ink-tertiary";
          return <button key={k} disabled={pick !== null} onClick={() => { setPick(k); if (right) setScore((s) => s + 1); }} className={`w-full rounded-xl border-2 px-3.5 py-3 text-left text-[14px] font-medium ${cls}`}>{o}</button>;
        })}
      </div>
      {pick !== null && <button onClick={() => { setI(i + 1); setPick(null); }} className="w-full rounded-xl bg-primary py-3 text-[14px] font-bold text-white">{i + 1 >= qs.length ? rd.finish : rd.next}</button>}
    </div>
  );
}
