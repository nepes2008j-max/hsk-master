"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary } from "@/data/vocabulary";
import { vocabulary2 } from "@/data/vocabulary2";
import { allAcademicWords, chemLabCategories, chemLabWords, stemCategories as _stemCats } from "@/data/academic-vocab";
import { speak } from "@/lib/tts";
import {
  getSRSState,
  saveSRSState,
  getAllSRSStates,
  saveUserCard,
  getUserCards,
  deleteUserCard,
  type UserCard,
} from "@/lib/storage";
import { newCardState, review, isDue } from "@/lib/srs";
import { IconVolume, IconStar, IconX, IconCheck, IconCards, IconChevron } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { useRef } from "react";

type CardType = "hanzi-meaning" | "meaning-hanzi" | "audio-hanzi" | "hanzi-pinyin";
type ReviewMode = "mixed" | "three-way" | "reading" | "recognition" | "writing" | "mcq";
type WritingTarget = "pinyin" | "hanzi";

interface FlashCard {
  id: string;
  front: string;
  back: string;
  audio?: string;
  type: CardType;
  deck: string;
  sub?: string;
  hanzi?: string;
  pinyin?: string;
  english?: string;
}

function buildCards(
  words: { id: number; hanzi: string; pinyin: string; english: string }[],
  prefix: string,
  deck: string,
): FlashCard[] {
  return words.flatMap((w) => [
    { id: `${prefix}-hm-${w.id}`, front: w.hanzi, back: `${w.pinyin} — ${w.english}`, audio: w.hanzi, type: "hanzi-meaning" as const, deck, hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
    { id: `${prefix}-mh-${w.id}`, front: w.english, back: `${w.hanzi} (${w.pinyin})`, type: "meaning-hanzi" as const, deck, hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
  ]);
}

// Sub-decks are views of the Special deck (same cards, shared progress).
const SPECIAL_SUBS = ["Chemistry", "Math", "Trigonometry"] as const;
const specialWords = (d: string) => (d === "Special" ? chemLabWords : chemLabWords.filter((w) => w.sub === d));
const inDeck = (c: FlashCard, d: string) => c.deck === d || c.sub === d;

const HSK_CARDS: FlashCard[] = [
  ...buildCards(vocabulary, "hsk", "HSK 1"),
  ...buildCards(vocabulary2, "hsk2", "HSK 2"),
  ...allAcademicWords.filter((w) => !w.id.startsWith("cl")).flatMap((w) => [
    { id: `stem-hm-${w.id}`, front: w.hanzi, back: `${w.pinyin} — ${w.english}`, audio: w.hanzi, type: "hanzi-meaning" as const, deck: "STEM", hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
    { id: `stem-mh-${w.id}`, front: w.english, back: `${w.hanzi} (${w.pinyin})`, type: "meaning-hanzi" as const, deck: "STEM", hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
  ]),
  ...chemLabWords.flatMap((w) => [
    { id: `chem-hm-${w.id}`, front: w.hanzi, back: `${w.pinyin} — ${w.english}`, audio: w.hanzi, type: "hanzi-meaning" as const, deck: "Special", sub: w.sub, hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
    { id: `chem-mh-${w.id}`, front: w.english, back: `${w.hanzi} (${w.pinyin})`, type: "meaning-hanzi" as const, deck: "Special", sub: w.sub, hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
  ]),
];

function getHidden(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem("hsk-hidden-cards") || "[]")); } catch { return new Set(); }
}
function saveHidden(ids: Set<string>) {
  try { localStorage.setItem("hsk-hidden-cards", JSON.stringify([...ids])); } catch { /* noop */ }
}

export default function CardsPage() {
  const { t } = useLang();
  const [tab, setTab] = useState<"review" | "decks" | "create">("review");
  const [allCards, setAllCards] = useState<FlashCard[]>([]);
  const [dueCards, setDueCards] = useState<FlashCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [flipStage, setFlipStage] = useState(0);
  const [userCards, setUserCards] = useState<UserCard[]>([]);
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");
  const [newPinyin, setNewPinyin] = useState("");
  const [newDeck, setNewDeck] = useState("");
  const [newDeckName, setNewDeckName] = useState("");
  const [showNewDeckInput, setShowNewDeckInput] = useState(false);
  const [openDeck, setOpenDeck] = useState<string | null>(null);
  const [reviewDeck, setReviewDeck] = useState<string | null>(null);
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(getHidden);
  const [reviewMode, setReviewMode] = useState<ReviewMode>(() => {
    try { return (localStorage.getItem("hsk-review-mode") as ReviewMode) || "mixed"; } catch { return "mixed"; }
  });
  const [swipeClass, setSwipeClass] = useState("");
  const [cardKey, setCardKey] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [writingTarget, setWritingTarget] = useState<WritingTarget>("pinyin");
  const [writingInput, setWritingInput] = useState("");
  const [writingResult, setWritingResult] = useState<"correct" | "incorrect" | null>(null);
  const [cardLimit, setCardLimit] = useState<number>(() => {
    try { const v = localStorage.getItem("hsk-card-limit"); return v !== null ? (parseInt(v) || 0) : 20; } catch { return 20; }
  });
  const writingInputRef = useRef<HTMLInputElement>(null);
  const [mcqChoices, setMcqChoices] = useState<string[]>([]);
  const [mcqSelected, setMcqSelected] = useState<string | null>(null);
  const [mcqShowPinyin, setMcqShowPinyin] = useState(false);

  const userDecks = useMemo(() => {
    const deckSet = new Set(userCards.map((c) => c.deck));
    return [...deckSet].sort();
  }, [userCards]);

  const allDecks = useMemo(() => {
    const decks = new Map<string, { total: number; custom: boolean }>();
    decks.set("HSK 1", { total: vocabulary.length * 2, custom: false });
    decks.set("HSK 2", { total: vocabulary2.length * 2, custom: false });
    const stemCount = allAcademicWords.filter((w) => !w.id.startsWith("cl")).length;
    decks.set("STEM", { total: stemCount * 2, custom: false });
    decks.set("Special", { total: chemLabWords.length * 2, custom: false });
    for (const d of SPECIAL_SUBS) decks.set(d, { total: specialWords(d).length * 2, custom: false });
    for (const d of userDecks) {
      decks.set(d, { total: userCards.filter((c) => c.deck === d).length, custom: true });
    }
    return decks;
  }, [userDecks, userCards]);

  const loadCards = useCallback(async () => {
    const hskCards = HSK_CARDS;
    const custom = await getUserCards();
    setUserCards(custom);

    const customFlash: FlashCard[] = custom.map((c) => ({
      id: c.id,
      front: c.front,
      back: c.back,
      type: "hanzi-meaning" as const,
      deck: c.deck,
    }));

    const all = [...hskCards, ...customFlash];
    setAllCards(all);

    const states = await getAllSRSStates();
    const stateMap = new Map(states.map((s) => [s.cardId, s]));

    let reviewable = reviewDeck
      ? all.filter((c) => inDeck(c, reviewDeck))
      : all;

    // For non-mixed modes, only use hanzi-meaning cards (one per word)
    if (reviewMode !== "mixed" && reviewMode !== "writing" && reviewMode !== "mcq") {
      reviewable = reviewable.filter((c) => c.type === "hanzi-meaning");
    }
    if (reviewMode === "writing" || reviewMode === "mcq") {
      reviewable = reviewable.filter((c) => c.type === "hanzi-meaning" && c.hanzi && c.pinyin);
    }

    // Exclude hidden cards
    const hidden = getHidden();
    reviewable = reviewable.filter((c) => !hidden.has(c.id));

    const due = reviewable.filter((card) => {
      const state = stateMap.get(card.id);
      return !state || isDue(state);
    });

    // Special deck and its sub-decks keep lesson order; everything else is shuffled.
    const ordered = reviewDeck === "Special" || SPECIAL_SUBS.includes(reviewDeck as never);
    const shuffled = ordered ? due : due.sort(() => Math.random() - 0.5);
    setDueCards(cardLimit > 0 ? shuffled.slice(0, cardLimit) : shuffled);
    setCurrentIdx(0);
    setFlipped(false);
    setFlipStage(0);
    setWritingInput("");
    setWritingResult(null);
    setMcqSelected(null);
  }, [reviewDeck, reviewMode, cardLimit]);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  const changeMode = (mode: ReviewMode) => {
    setReviewMode(mode);
    setWritingInput("");
    setWritingResult(null);
    setMcqSelected(null);
    try { localStorage.setItem("hsk-review-mode", mode); } catch { /* noop */ }
  };

  const changeCardLimit = (limit: number) => {
    setCardLimit(limit);
    try { localStorage.setItem("hsk-card-limit", String(limit)); } catch { /* noop */ }
  };

  const currentCard = dueCards[currentIdx];

  const generateMcqChoices = useCallback((card: FlashCard) => {
    // Prefer wrong answers from same deck for relevance
    let pool = HSK_CARDS.filter((c) => c.type === "hanzi-meaning" && c.english && c.id !== card.id && c.deck === card.deck);
    if (pool.length < 3) pool = HSK_CARDS.filter((c) => c.type === "hanzi-meaning" && c.english && c.id !== card.id);
    const wrong: string[] = [];
    const used = new Set([card.english!.toLowerCase()]);
    while (wrong.length < 3 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      const pick = pool[idx].english!;
      if (!used.has(pick.toLowerCase())) { wrong.push(pick); used.add(pick.toLowerCase()); }
      pool.splice(idx, 1);
    }
    const choices = [card.english!, ...wrong].sort(() => Math.random() - 0.5);
    setMcqChoices(choices);
    setMcqSelected(null);
    setMcqShowPinyin(false);
  }, []);

  useEffect(() => {
    if (reviewMode === "mcq" && currentCard?.english) generateMcqChoices(currentCard);
  }, [currentCard, reviewMode, generateMcqChoices]);

  const handleMcqSelect = (choice: string) => {
    if (mcqSelected) return;
    setMcqSelected(choice);
    setFlipped(true);
  };

  const handleRate = async (quality: number) => {
    if (!currentCard) return;
    const existing = (await getSRSState(currentCard.id)) ?? newCardState(currentCard.id);
    await saveSRSState(review(existing, quality));

    setSwipeClass(quality >= 3 ? "card-swipe-right" : "card-swipe-left");
    setTimeout(() => {
      setSwipeClass("");
      setCardKey((k) => k + 1);
      if (currentIdx + 1 < dueCards.length) {
        setCurrentIdx(currentIdx + 1);
        setFlipped(false);
        setFlipStage(0);
        setWritingInput("");
        setWritingResult(null);
        setMcqSelected(null);
      } else {
        setDueCards([]);
      }
    }, 300);
  };

  const handleHide = () => {
    if (!currentCard) return;
    const next = new Set(hiddenIds);
    next.add(currentCard.id);
    setHiddenIds(next);
    saveHidden(next);

    if (currentIdx + 1 < dueCards.length) {
      setDueCards((prev) => prev.filter((_, i) => i !== currentIdx));
      setFlipped(false);
      setFlipStage(0);
    } else {
      setDueCards((prev) => prev.filter((_, i) => i !== currentIdx));
    }
  };

  const resetHidden = (deck?: string) => {
    if (!deck) {
      setHiddenIds(new Set());
      saveHidden(new Set());
    } else {
      const deckCardIds = new Set(HSK_CARDS.filter((c) => inDeck(c, deck)).map((c) => c.id));
      const next = new Set([...hiddenIds].filter((id) => !deckCardIds.has(id)));
      setHiddenIds(next);
      saveHidden(next);
    }
  };

  const hiddenCountForDeck = (deck: string) => {
    const deckCardIds = HSK_CARDS.filter((c) => inDeck(c, deck)).map((c) => c.id);
    return deckCardIds.filter((id) => hiddenIds.has(id)).length;
  };

  const handleWritingCheck = () => {
    if (!currentCard) return;
    const answer = writingInput.trim().toLowerCase();
    const expected = writingTarget === "pinyin"
      ? (currentCard.pinyin || "").toLowerCase()
      : (currentCard.hanzi || "");
    const isCorrect = answer === expected;
    setWritingResult(isCorrect ? "correct" : "incorrect");
    setFlipped(true);
  };

  const handleFlip = () => {
    if (reviewMode === "three-way" && currentCard?.hanzi) {
      if (flipStage < 2) {
        setFlipStage(flipStage + 1);
        if (flipStage === 0 && currentCard.audio) speak(currentCard.audio);
      }
    } else {
      setFlipped(!flipped);
      if (currentCard?.audio) speak(currentCard.audio);
    }
  };

  // Render card content based on mode
  const renderCardFront = () => {
    if (!currentCard) return null;
    const c = currentCard;
    const hasRaw = c.hanzi && c.pinyin && c.english;

    if (!hasRaw) return <div className="text-3xl font-bold text-ink">{c.front}</div>;

    switch (reviewMode) {
      case "reading":
        return (
          <div className="text-center">
            <div className="text-3xl font-bold text-ink">{c.hanzi}</div>
            <div className="text-lg text-primary mt-2">{c.pinyin}</div>
          </div>
        );
      case "recognition":
        return (
          <div className="text-center">
            <div className="text-2xl font-bold text-ink">{c.english}</div>
            <div className="text-lg text-primary mt-2">{c.pinyin}</div>
          </div>
        );
      case "three-way":
        if (flipStage === 0) return <div className="text-3xl font-bold text-ink">{c.hanzi}</div>;
        if (flipStage === 1) return (
          <div className="text-center">
            <div className="text-3xl font-bold text-ink">{c.hanzi}</div>
            <div className="text-lg text-primary mt-2">{c.pinyin}</div>
          </div>
        );
        return (
          <div className="text-center">
            <div className="text-3xl font-bold text-ink">{c.hanzi}</div>
            <div className="text-lg text-primary mt-1">{c.pinyin}</div>
            <div className="text-lg text-ink-secondary mt-1">{c.english}</div>
          </div>
        );
      default:
        return <div className="text-3xl font-bold text-ink">{c.front}</div>;
    }
  };

  const renderCardBack = () => {
    if (!currentCard) return null;
    const c = currentCard;
    const hasRaw = c.hanzi && c.pinyin && c.english;

    if (!hasRaw) return <div className="text-3xl font-bold text-ink">{c.back}</div>;

    switch (reviewMode) {
      case "reading":
        return <div className="text-2xl font-bold text-ink">{c.english}</div>;
      case "recognition":
        return <div className="text-3xl font-bold text-ink">{c.hanzi}</div>;
      default:
        return <div className="text-3xl font-bold text-ink">{c.back}</div>;
    }
  };

  const isRevealed = reviewMode === "three-way" ? flipStage === 2 : reviewMode === "writing" ? writingResult !== null : reviewMode === "mcq" ? mcqSelected !== null : flipped;
  const showHint = reviewMode === "three-way" && flipStage === 0
    ? t.cardsPage.tapPinyin
    : reviewMode === "three-way" && flipStage === 1
    ? t.cardsPage.tapMeaning
    : t.cardsPage.showAnswer;

  const handleCreateDeck = () => {
    const name = newDeckName.trim();
    if (!name) return;
    setNewDeck(name);
    setNewDeckName("");
    setShowNewDeckInput(false);
  };

  const handleCreateCard = async () => {
    if (!newFront.trim() || !newBack.trim()) return;
    const deckName = newDeck.trim() || "My Cards";
    const card: UserCard = {
      id: `user-${Date.now()}`,
      front: newFront.trim(),
      back: newBack.trim(),
      pinyin: newPinyin.trim() || undefined,
      deck: deckName,
      created: Date.now(),
    };
    await saveUserCard(card);
    setNewFront("");
    setNewBack("");
    setNewPinyin("");
    await loadCards();
  };

  const handleDeleteCard = async (id: string) => {
    await deleteUserCard(id);
    await loadCards();
  };

  const tabs = [
    { key: "review" as const, label: t.cardsPage.review },
    { key: "decks" as const, label: t.cardsPage.decks },
    { key: "create" as const, label: t.cardsPage.create },
  ];

  const modes: { key: ReviewMode; label: string }[] = [
    { key: "mixed", label: t.cardsPage.mixed },
    { key: "three-way", label: t.cardsPage.threeWay },
    { key: "reading", label: t.cardsPage.reading },
    { key: "recognition", label: t.cardsPage.recognition },
    { key: "writing", label: t.cardsPage.writing },
    { key: "mcq", label: t.cardsPage.mcq },
  ];

  const deckCards = openDeck ? userCards.filter((c) => c.deck === openDeck) : [];

  return (
    <AppShell>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-ink tracking-tight">{t.cardsPage.title}</h1>

        <div className="flex gap-1 p-1 rounded-xl bg-bg-sunken">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); setOpenDeck(null); }}
              className={`flex-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                tab === t.key
                  ? "bg-bg-raised text-ink shadow-sm"
                  : "text-ink-tertiary hover:text-ink-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Review ── */}
        {tab === "review" && (
          <div className="space-y-4">
            {/* Mode selector */}
            <div>
              <div className="text-[11px] text-ink-tertiary uppercase tracking-wide font-semibold mb-1.5">{t.cardsPage.mode}</div>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {modes.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => changeMode(m.key)}
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      reviewMode === m.key ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Card count */}
            <div className="flex items-center gap-2">
              <div className="text-[11px] text-ink-tertiary uppercase tracking-wide font-semibold">{t.cardsPage.cardCount}</div>
              {[10, 20, 50, 0].map((n) => (
                <button
                  key={n}
                  onClick={() => changeCardLimit(n)}
                  className={`rounded-lg px-2.5 py-1 text-[13px] font-medium transition-colors ${
                    cardLimit === n ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {n === 0 ? t.cardsPage.infinite : n}
                </button>
              ))}
            </div>

            {/* Writing target toggle */}
            {reviewMode === "writing" && (
              <div className="flex gap-1.5">
                <button
                  onClick={() => setWritingTarget("pinyin")}
                  className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    writingTarget === "pinyin" ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {t.cardsPage.typePinyin}
                </button>
                <button
                  onClick={() => setWritingTarget("hanzi")}
                  className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    writingTarget === "hanzi" ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {t.cardsPage.typeHanzi}
                </button>
              </div>
            )}

            {/* Deck filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setReviewDeck(null)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  !reviewDeck ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                }`}
              >
                {t.cardsPage.allDecks}
              </button>
              {[...allDecks.keys()].map((d) => (
                <button
                  key={d}
                  onClick={() => setReviewDeck(d)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    reviewDeck === d ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {currentCard ? (
              <>
                <div className="text-[13px] text-ink-tertiary text-center">
                  {currentIdx + 1} / {dueCards.length} {t.cardsPage.cardsDue}
                  {reviewDeck && <span className="ml-1">in {reviewDeck}</span>}
                </div>

                <div
                  ref={cardRef}
                  key={cardKey}
                  className={`w-full ${swipeClass || "card-enter"}`}
                  onClick={reviewMode === "writing" ? undefined : handleFlip}
                >
                  {reviewMode === "writing" ? (
                    <div className="w-full min-h-[220px] rounded-2xl border-2 border-border bg-bg-raised p-6 flex flex-col items-center justify-center gap-3">
                      <div className="text-[11px] text-ink-tertiary/60">{currentCard.deck}</div>
                      {writingTarget === "pinyin" ? (
                        <div className="text-3xl font-bold text-ink">{currentCard.hanzi}</div>
                      ) : (
                        <div className="text-center">
                          <div className="text-lg text-primary">{currentCard.pinyin}</div>
                          <div className="text-xl font-medium text-ink mt-1">{currentCard.english}</div>
                        </div>
                      )}
                      {writingResult === null ? (
                        <div className="w-full max-w-xs flex gap-2 mt-2" onClick={(e) => e.stopPropagation()}>
                          <input
                            ref={writingInputRef}
                            value={writingInput}
                            onChange={(e) => setWritingInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleWritingCheck()}
                            placeholder={writingTarget === "pinyin" ? t.cardsPage.typePinyin : t.cardsPage.typeHanzi}
                            className="flex-1 rounded-xl border border-border bg-white px-4 py-2.5 text-[14px] text-ink text-center placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                            autoFocus
                          />
                          <button
                            onClick={handleWritingCheck}
                            disabled={!writingInput.trim()}
                            className="rounded-xl bg-primary hover:bg-primary-hover text-white px-4 py-2.5 text-[14px] font-medium transition-colors disabled:opacity-40"
                          >
                            {t.cardsPage.check}
                          </button>
                        </div>
                      ) : (
                        <div className="text-center mt-2">
                          <div className={`text-[15px] font-semibold ${writingResult === "correct" ? "text-green-600" : "text-warning"}`}>
                            {writingResult === "correct" ? t.cardsPage.correct : t.cardsPage.incorrect}
                          </div>
                          {writingResult === "incorrect" && (
                            <div className="text-[14px] text-ink-secondary mt-1">
                              {t.cardsPage.expected}: <span className="font-bold text-ink">{writingTarget === "pinyin" ? currentCard.pinyin : currentCard.hanzi}</span>
                            </div>
                          )}
                          <div className="text-[13px] text-ink-tertiary mt-1">
                            {currentCard.hanzi} · {currentCard.pinyin} · {currentCard.english}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : reviewMode === "mcq" ? (
                    <div className="w-full min-h-[220px] rounded-2xl border-2 border-border bg-bg-raised p-6 flex flex-col items-center justify-center gap-4">
                      <div className="text-[11px] text-ink-tertiary/60">{currentCard.deck}</div>
                      <button type="button" onClick={() => setMcqShowPinyin(true)} className="text-3xl font-bold text-ink cursor-pointer">{currentCard.hanzi}</button>
                      <div className="text-[13px] text-ink-tertiary min-h-[20px]">
                        {mcqShowPinyin || mcqSelected ? currentCard.pinyin : t.cardsPage.tapPinyin}
                      </div>
                      <div className="w-full max-w-xs grid grid-cols-1 gap-2 mt-2">
                        {mcqChoices.map((choice) => {
                          const isCorrect = choice === currentCard.english;
                          const isSelected = mcqSelected === choice;
                          const showResult = mcqSelected !== null;
                          return (
                            <button
                              key={choice}
                              onClick={() => handleMcqSelect(choice)}
                              disabled={showResult}
                              className={`rounded-xl border px-4 py-2.5 text-[14px] font-medium transition-colors text-left ${
                                showResult
                                  ? isCorrect
                                    ? "border-green-500 bg-green-50 text-green-700"
                                    : isSelected
                                    ? "border-warning bg-warning-light text-warning-text"
                                    : "border-border bg-bg-raised text-ink-tertiary"
                                  : "border-border bg-white text-ink hover:border-primary/50"
                              }`}
                            >
                              {choice}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : reviewMode === "three-way" ? (
                    <div className="w-full min-h-[220px] rounded-2xl border-2 border-border bg-bg-raised p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/50 hover:shadow-lg active:scale-[0.98] transition-all">
                      {isRevealed ? renderCardBack() : renderCardFront()}
                      {!isRevealed && <div className="text-[13px] text-ink-tertiary">{showHint}</div>}
                      <div className="text-[11px] text-ink-tertiary/60">{currentCard.deck}</div>
                    </div>
                  ) : (
                    <div className="card-perspective">
                      <div className={`card-inner w-full h-[220px] rounded-2xl border-2 border-border cursor-pointer hover:border-primary/50 hover:shadow-lg ${flipped ? "flipped" : ""}`}>
                        <div className="card-face w-full h-full rounded-2xl bg-bg-raised p-8 flex flex-col items-center justify-center gap-4">
                          {renderCardFront()}
                          <div className="text-[13px] text-ink-tertiary">{showHint}</div>
                          <div className="text-[11px] text-ink-tertiary/60">{currentCard.deck}</div>
                        </div>
                        <div className="card-face card-back w-full h-full rounded-2xl bg-bg-raised p-8 flex flex-col items-center justify-center gap-4">
                          {renderCardBack()}
                          <div className="text-[11px] text-ink-tertiary/60">{currentCard.deck}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {isRevealed && (
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        onClick={() => handleRate(1)}
                        className="rounded-xl bg-warning-light py-2.5 text-[13px] font-medium text-warning-text transition-colors hover:bg-warning/10"
                      >
                        {t.cardsPage.again}
                      </button>
                      <button
                        onClick={() => handleRate(3)}
                        className="rounded-xl bg-accent-light py-2.5 text-[13px] font-medium text-accent-text transition-colors hover:bg-accent/10"
                      >
                        {t.cardsPage.hard}
                      </button>
                      <button
                        onClick={() => handleRate(4)}
                        className="rounded-xl bg-primary-light py-2.5 text-[13px] font-medium text-primary-text transition-colors hover:bg-primary/10"
                      >
                        {t.cardsPage.good}
                      </button>
                      <button
                        onClick={() => handleRate(5)}
                        className="rounded-xl bg-blue-light py-2.5 text-[13px] font-medium text-blue transition-colors hover:bg-blue/10"
                      >
                        {t.cardsPage.easy}
                      </button>
                    </div>
                    <button
                      onClick={handleHide}
                      className="w-full rounded-xl border border-border py-2 text-[13px] font-medium text-ink-tertiary hover:text-warning hover:border-warning/30 transition-colors"
                    >
                      {t.cardsPage.hideCard}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light mb-4">
                  <IconStar className="w-7 h-7 text-primary" />
                </div>
                <div className="text-[15px] font-semibold text-ink">{t.cardsPage.allCaughtUp}</div>
                <div className="text-[13px] text-ink-tertiary mt-1">{t.cardsPage.noCards}</div>
                <button
                  onClick={loadCards}
                  className="mt-5 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-2.5 text-[14px] font-medium transition-colors"
                >
                  {t.cardsPage.refresh}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Decks ── */}
        {tab === "decks" && !openDeck && (
          <div className="space-y-3">
            {(["HSK 1", "HSK 2", "STEM", "Special", ...SPECIAL_SUBS] as const).map((deckName) => {
              const hidden = hiddenCountForDeck(deckName);
              const total = deckName === "HSK 1" ? vocabulary.length * 2
                : deckName === "HSK 2" ? vocabulary2.length * 2
                : deckName === "Special" || SPECIAL_SUBS.includes(deckName as never) ? specialWords(deckName).length * 2
                : allAcademicWords.filter((w) => !w.id.startsWith("cl")).length * 2;
              return (
                <button
                  key={deckName}
                  onClick={() => setOpenDeck(deckName)}
                  className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-4 text-left hover:border-border-strong transition-colors"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${deckName !== "HSK 1" && deckName !== "HSK 2" ? "bg-blue-light" : "bg-primary-light"}`}>
                    <IconCards className={`w-5.5 h-5.5 ${deckName !== "HSK 1" && deckName !== "HSK 2" ? "text-blue" : "text-primary"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold text-ink">{deckName === "STEM" ? "STEM / CSCA" : deckName}</div>
                    <div className="text-[13px] text-ink-tertiary">
                      {total} {t.cardsPage.cardsDue} &middot; {t.cardsPage.builtIn}
                      {hidden > 0 && <span className="ml-1 text-warning">({hidden} {t.cardsPage.hiddenCount})</span>}
                    </div>
                  </div>
                  <IconChevron direction="right" className="w-4 h-4 text-ink-tertiary" />
                </button>
              );
            })}

            {/* User decks */}
            {userDecks.map((deck) => {
              const count = userCards.filter((c) => c.deck === deck).length;
              return (
                <button
                  key={deck}
                  onClick={() => setOpenDeck(deck)}
                  className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-4 text-left hover:border-border-strong transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                    <IconCards className="w-5.5 h-5.5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold text-ink">{deck}</div>
                    <div className="text-[13px] text-ink-tertiary">{count} card{count !== 1 ? "s" : ""}</div>
                  </div>
                  <IconChevron direction="right" className="w-4 h-4 text-ink-tertiary" />
                </button>
              );
            })}

            {userDecks.length === 0 && (
              <div className="text-center py-10">
                <div className="text-[13px] text-ink-tertiary">{t.cardsPage.noCustomDecks}</div>
                <button
                  onClick={() => setTab("create")}
                  className="mt-3 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-2.5 text-[14px] font-medium transition-colors"
                >
                  {t.cardsPage.createFirst}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Deck detail view ── */}
        {tab === "decks" && openDeck && (
          <div className="space-y-3">
            <button
              onClick={() => setOpenDeck(null)}
              className="flex items-center gap-1 text-[13px] text-primary hover:underline"
            >
              <IconChevron direction="left" className="w-3.5 h-3.5" />
              {t.cardsPage.allDecks}
            </button>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-ink">{openDeck === "STEM" ? "STEM / CSCA" : openDeck}</div>
                <div className="text-[13px] text-ink-tertiary">
                  {openDeck === "HSK 1"
                    ? `${vocabulary.length * 2} cards`
                    : openDeck === "HSK 2"
                    ? `${vocabulary2.length * 2} cards`
                    : openDeck === "STEM"
                    ? `${allAcademicWords.filter((w) => !w.id.startsWith("cl")).length * 2} cards`
                    : openDeck === "Special" || SPECIAL_SUBS.includes(openDeck as never)
                    ? `${specialWords(openDeck).length * 2} cards`
                    : `${deckCards.length} card${deckCards.length !== 1 ? "s" : ""}`}
                </div>
              </div>
              <button
                onClick={() => { setReviewDeck(openDeck); setTab("review"); }}
                className="rounded-xl bg-primary hover:bg-primary-hover text-white px-4 py-2 text-[13px] font-medium transition-colors"
              >
                {t.cardsPage.reviewDeck}
              </button>
            </div>

            {openDeck === "HSK 1" || openDeck === "HSK 2" || openDeck === "STEM" || openDeck === "Special" || SPECIAL_SUBS.includes(openDeck as never) ? (
              <div className="space-y-3">
                <div className="text-[13px] text-ink-tertiary rounded-xl bg-bg-sunken p-4">
                  {openDeck === "STEM"
                    ? `Built-in STEM deck with ${allAcademicWords.filter((w) => !w.id.startsWith("cl")).length * 2} flashcards — math, science & CS vocabulary for CSCA preparation.`
                    : openDeck === "Special"
                    ? `Special deck with ${chemLabWords.length * 2} flashcards — chemistry lab, math, geometry & science words from classroom photos.`
                    : SPECIAL_SUBS.includes(openDeck as never)
                    ? `${openDeck} — ${specialWords(openDeck).length * 2} flashcards, a part of the Special deck.`
                    : `Built-in ${openDeck} deck with ${openDeck === "HSK 1" ? vocabulary.length * 2 : vocabulary2.length * 2} flashcards — hanzi-to-meaning and meaning-to-hanzi for all ${openDeck === "HSK 1" ? 300 : 197} words.`}
                </div>
                {(openDeck === "Special" || SPECIAL_SUBS.includes(openDeck as never)) && (
                  <div className="space-y-4">
                    {chemLabCategories.filter((c) => openDeck === "Special" || c.sub === openDeck).map((c) => (
                      <div key={c.id} className="space-y-1.5">
                        <div className="text-[12px] font-semibold uppercase tracking-wide text-ink-tertiary pt-1">{c.nameEn}</div>
                        {c.words.map((w) => (
                          <div key={w.id} className="flex items-center gap-4 rounded-xl bg-bg-raised border border-border p-3.5">
                            <div className="text-2xl font-bold text-ink w-28 shrink-0">{w.hanzi}</div>
                            <div className="min-w-0">
                              <div className="text-[14px] text-primary">{w.pinyin}</div>
                              <div className="text-[13px] text-ink-secondary">{w.english}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {hiddenCountForDeck(openDeck) > 0 && (
                  <div className="flex items-center justify-between rounded-xl border border-warning/20 bg-warning-light/50 p-3">
                    <span className="text-[13px] text-warning-text">
                      {hiddenCountForDeck(openDeck)} {t.cardsPage.hiddenCount}
                    </span>
                    <button
                      onClick={() => resetHidden(openDeck)}
                      className="text-[13px] font-medium text-primary hover:underline"
                    >
                      {t.cardsPage.resetHidden}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-1.5">
                {deckCards.map((card) => (
                  <div key={card.id} className="flex items-center gap-3 rounded-xl bg-bg-raised border border-border p-3.5">
                    <div className="flex-1 min-w-0">
                      <div className="text-[15px] font-medium text-ink">{card.front}</div>
                      <div className="text-[13px] text-ink-secondary">{card.back}</div>
                      {card.pinyin && <div className="text-[12px] text-primary mt-0.5">{card.pinyin}</div>}
                    </div>
                    <button
                      onClick={() => handleDeleteCard(card.id)}
                      className="p-1.5 rounded-lg text-ink-tertiary hover:text-warning hover:bg-warning-light transition-colors shrink-0"
                    >
                      <IconX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {deckCards.length === 0 && (
                  <div className="text-center py-8 text-[13px] text-ink-tertiary">
                    {t.cardsPage.deckEmpty}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Create ── */}
        {tab === "create" && (
          <div className="space-y-4">
            {/* Deck selector */}
            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
                {t.cardsPage.deck}
              </label>
              <div className="flex gap-2 flex-wrap">
                {userDecks.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setNewDeck(d); setShowNewDeckInput(false); }}
                    className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      newDeck === d && !showNewDeckInput
                        ? "bg-primary text-white"
                        : "bg-bg-sunken text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {d}
                  </button>
                ))}
                <button
                  onClick={() => { setShowNewDeckInput(true); setNewDeck(""); }}
                  className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    showNewDeckInput
                      ? "bg-primary text-white"
                      : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  + {t.cardsPage.newDeck}
                </button>
              </div>

              {showNewDeckInput && (
                <div className="flex gap-2">
                  <input
                    value={newDeckName}
                    onChange={(e) => setNewDeckName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCreateDeck()}
                    placeholder={t.cardsPage.deckPlaceholder}
                    className="flex-1 rounded-xl border border-border bg-bg-raised px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                    autoFocus
                  />
                  <button
                    onClick={handleCreateDeck}
                    disabled={!newDeckName.trim()}
                    className="rounded-xl bg-primary hover:bg-primary-hover text-white px-4 py-2.5 text-[14px] font-medium transition-colors disabled:opacity-40"
                  >
                    <IconCheck className="w-4 h-4" />
                  </button>
                </div>
              )}

              {!showNewDeckInput && !newDeck && userDecks.length === 0 && (
                <div className="text-[12px] text-ink-tertiary">
                  {t.cardsPage.cardsWithoutDeck} &ldquo;{t.cardsPage.myCards}&rdquo;
                </div>
              )}
              {newDeck && !showNewDeckInput && (
                <div className="text-[12px] text-ink-tertiary">
                  Adding to <span className="font-medium text-ink-secondary">{newDeck}</span>
                </div>
              )}
            </div>

            {/* Card fields */}
            <div className="space-y-3">
              <label className="text-[13px] font-semibold text-ink-secondary uppercase tracking-wide">
                {t.cardsPage.card}
              </label>
              <input
                value={newFront}
                onChange={(e) => setNewFront(e.target.value)}
                placeholder={t.cardsPage.front}
                className="w-full rounded-xl border border-border bg-bg-raised px-4 py-3 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              />
              <input
                value={newPinyin}
                onChange={(e) => setNewPinyin(e.target.value)}
                placeholder={t.cardsPage.pinyin}
                className="w-full rounded-xl border border-border bg-bg-raised px-4 py-3 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              />
              <input
                value={newBack}
                onChange={(e) => setNewBack(e.target.value)}
                placeholder={t.cardsPage.back}
                className="w-full rounded-xl border border-border bg-bg-raised px-4 py-3 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              />
              <button
                onClick={handleCreateCard}
                disabled={!newFront.trim() || !newBack.trim()}
                className="w-full rounded-xl bg-primary hover:bg-primary-hover text-white py-3 text-[14px] font-semibold transition-colors disabled:opacity-40 disabled:hover:bg-primary"
              >
                {t.cardsPage.addCard}
              </button>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
