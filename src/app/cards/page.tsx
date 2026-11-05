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
import { newCardState, review, isDue, type CardState } from "@/lib/srs";
import { IconVolume, IconStar, IconX, IconCheck, IconCards, IconChevron, IconCog } from "@/components/Icons";
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
  cat?: string;
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
  ...chemLabWords.flatMap((w) => {
    const meaning = w.ru ?? w.english; // newly added words carry a Russian meaning
    return [
      { id: `chem-hm-${w.id}`, front: w.hanzi, back: `${w.pinyin} — ${meaning}`, audio: w.hanzi, type: "hanzi-meaning" as const, deck: "Special", sub: w.sub, cat: w.cat, hanzi: w.hanzi, pinyin: w.pinyin, english: meaning },
      { id: `chem-mh-${w.id}`, front: meaning, back: `${w.hanzi} (${w.pinyin})`, type: "meaning-hanzi" as const, deck: "Special", sub: w.sub, cat: w.cat, hanzi: w.hanzi, pinyin: w.pinyin, english: meaning },
    ];
  }),
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
  const [showRating, setShowRating] = useState(true);
  const [weakOnly, setWeakOnly] = useState(false);
  const [session, setSession] = useState<Record<number, number>>({ 1: 0, 3: 0, 4: 0, 5: 0 });
  const [curSrs, setCurSrs] = useState<CardState | undefined>(undefined);
  const [canUndo, setCanUndo] = useState(false);
  const undoRef = useRef<{ prev: CardState; queue: FlashCard[]; idx: number } | null>(null);
  const [deckStats, setDeckStats] = useState<Record<string, { due: number; total: number; learned: number }>>({});
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => {
    const next = !showSettings;
    setShowSettings(next);
    try { localStorage.setItem("hsk-settings-open", next ? "1" : "0"); } catch { /* noop */ }
  };
  const [orderMode, setOrderMode] = useState<"auto" | "random" | "ordered">(() => {
    try { const v = localStorage.getItem("hsk-order"); return v === "random" || v === "ordered" ? v : "auto"; } catch { return "auto"; }
  });
  const changeOrder = (m: "auto" | "random" | "ordered") => {
    setOrderMode(m);
    try { localStorage.setItem("hsk-order", m); } catch { /* noop */ }
  };
  const [deckSearch, setDeckSearch] = useState("");
  const poolRef = useRef<FlashCard[]>([]);
  const orderRef = useRef<(l: FlashCard[]) => FlashCard[]>((l) => l);
  useEffect(() => {
    try {
      setShowRating(localStorage.getItem("hsk-show-rating") !== "0");
      setShowSettings(localStorage.getItem("hsk-settings-open") === "1");
    } catch { /* noop */ }
  }, []);
  const toggleRating = () => {
    const next = !showRating;
    setShowRating(next);
    try { localStorage.setItem("hsk-show-rating", next ? "1" : "0"); } catch { /* noop */ }
  };
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

  const searchHits = useMemo(() => {
    const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const q = norm(deckSearch.trim());
    if (!q) return [];
    return allCards
      .filter((c) => c.type === "hanzi-meaning" && (!openDeck || inDeck(c, openDeck)) && norm(`${c.hanzi ?? c.front} ${c.pinyin ?? ""} ${c.english ?? c.back}`).includes(q))
      .slice(0, 60);
  }, [deckSearch, openDeck, allCards]);

  const refreshStats = useCallback(async () => {
    const states = new Map((await getAllSRSStates()).map((s) => [s.cardId, s]));
    const hidden = getHidden();
    const out: Record<string, { due: number; total: number; learned: number }> = {};
    for (const c of HSK_CARDS) {
      if (hidden.has(c.id)) continue;
      const st = states.get(c.id);
      for (const d of [c.deck, c.sub]) {
        if (!d) continue;
        const o = (out[d] ??= { due: 0, total: 0, learned: 0 });
        o.total++;
        if (!st || isDue(st)) o.due++;
        if (st && st.reps >= 3) o.learned++;
      }
    }
    setDeckStats(out);
  }, []);
  useEffect(() => { if (tab === "decks") refreshStats(); }, [tab, refreshStats]);

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

    // "Hard cards only": cards last rated Again/Hard (interval 0), whether or not they are due yet
    const due = weakOnly
      ? reviewable.filter((c) => { const st = stateMap.get(c.id); return !!st && st.interval === 0 && st.due > 0; })
      : reviewable.filter((card) => {
          const state = stateMap.get(card.id);
          return !state || isDue(state);
        });

    // Special deck and its sub-decks keep lesson order (except Quiz, which is always random); everything else is shuffled.
    // Order: "auto" = Special decks in lesson order (Quiz random), others shuffled; or the user forces random / in order.
    const ordered = orderMode === "ordered" || (orderMode === "auto" && (reviewDeck === "Special" || SPECIAL_SUBS.includes(reviewDeck as never)) && reviewMode !== "mcq");
    const shuffled = ordered ? due : due.sort(() => Math.random() - 0.5);
    poolRef.current = reviewable; // used by the endless (∞) mode to keep cycling
    orderRef.current = (l) => (ordered ? [...l] : [...l].sort(() => Math.random() - 0.5));
    setDueCards(cardLimit > 0 ? shuffled.slice(0, cardLimit) : shuffled);
    undoRef.current = null;
    setCanUndo(false);
    setSession({ 1: 0, 3: 0, 4: 0, 5: 0 });
    setCurrentIdx(0);
    setFlipped(false);
    setFlipStage(0);
    setWritingInput("");
    setWritingResult(null);
    setMcqSelected(null);
  }, [reviewDeck, reviewMode, cardLimit, orderMode, weakOnly]);

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
    // Words added later (cl85+) get hard distractors: same group first, then shared characters. Others stay random.
    const hard = !!card.cat && Number(card.id.match(/cl(\d+)$/)?.[1]) >= 85;
    if (hard) {
      const near = (c: FlashCard) => (c.cat === card.cat ? 2 : c.sub === card.sub ? 1 : 0);
      const shared = (c: FlashCard) => [...(c.hanzi || "")].filter((ch) => card.hanzi!.includes(ch)).length;
      pool = pool.map((c) => ({ c, r: Math.random() })).sort((a, b) => near(b.c) - near(a.c) || shared(b.c) - shared(a.c) || a.r - b.r).map((x) => x.c);
    }
    const wrong: string[] = [];
    const used = new Set([card.english!.toLowerCase()]);
    while (wrong.length < 3 && pool.length > 0) {
      const idx = hard ? 0 : Math.floor(Math.random() * pool.length);
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
    undoRef.current = { prev: existing, queue: dueCards, idx: currentIdx };
    setCanUndo(true);
    setSession((s) => ({ ...s, [quality]: (s[quality] ?? 0) + 1 }));
    await saveSRSState(review(existing, quality));

    // Again / Hard come back later in this session (Again sooner than Hard).
    let queue = dueCards;
    if (quality < 4) {
      queue = [...dueCards];
      queue.splice(Math.min(currentIdx + 1 + (quality < 3 ? 3 : 8), queue.length), 0, currentCard);
      setDueCards(queue);
    }

    setSwipeClass(quality >= 3 ? "card-swipe-right" : "card-swipe-left");
    setTimeout(() => {
      setSwipeClass("");
      setCardKey((k) => k + 1);
      const resetFace = () => {
        setFlipped(false);
        setFlipStage(0);
        setWritingInput("");
        setWritingResult(null);
        setMcqSelected(null);
      };
      if (currentIdx + 1 < queue.length) {
        setCurrentIdx(currentIdx + 1);
        resetFace();
      } else if (cardLimit === 0 && poolRef.current.length > 0) {
        // ∞ mode: never run out, start another round
        setDueCards(orderRef.current(poolRef.current));
        setCurrentIdx(0);
        resetFace();
      } else {
        setDueCards([]);
      }
    }, 300);
  };

  const handleUndo = async () => {
    const u = undoRef.current;
    if (!u) return;
    await saveSRSState(u.prev);
    setDueCards(u.queue);
    setCurrentIdx(u.idx);
    setCardKey((k) => k + 1);
    setFlipped(false);
    setFlipStage(0);
    setWritingInput("");
    setWritingResult(null);
    setMcqSelected(null);
    undoRef.current = null;
    setCanUndo(false);
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

  const toggleHidden = (id: string) => {
    const next = new Set(hiddenIds);
    if (!next.delete(id)) next.add(id);
    setHiddenIds(next);
    saveHidden(next);
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
        // full answer: hanzi + pinyin + meaning
        return (
          <div className="text-center">
            <div className="text-3xl font-bold text-ink">{c.hanzi}</div>
            <div className="text-lg text-primary mt-1">{c.pinyin}</div>
            <div className="text-lg text-ink-secondary mt-1">{c.english}</div>
          </div>
        );
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

  // Load the current card's SRS state so the rating buttons can show the next interval.
  useEffect(() => {
    setCurSrs(undefined);
    if (currentCard) getSRSState(currentCard.id).then(setCurSrs);
  }, [currentCard]);
  const intervalHint = (q: number) => {
    if (!currentCard) return "";
    const st = review(curSrs ?? newCardState(currentCard.id), q);
    if (st.interval > 0) return `${st.interval}d`;
    const m = Math.round((st.due - Date.now()) / 60000);
    return m <= 0 ? "<1m" : `${m}m`;
  };

  // Keyboard: space/enter = show answer, 1-4 = rate (or pick a Quiz option)
  useEffect(() => {
    if (tab !== "review") return;
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || e.metaKey || e.ctrlKey || e.altKey || !currentCard) return;
      const digit = /^[1-4]$/.test(e.key) ? Number(e.key) : 0;
      if (reviewMode === "mcq" && !mcqSelected && digit) { const c = mcqChoices[digit - 1]; if (c) handleMcqSelect(c); return; }
      if (!isRevealed) {
        if ((e.key === " " || e.key === "Enter") && reviewMode !== "mcq" && reviewMode !== "writing") { e.preventDefault(); handleFlip(); }
        return;
      }
      if (showRating && digit) handleRate([1, 3, 4, 5][digit - 1]);
      else if (!showRating && (e.key === " " || e.key === "Enter")) { e.preventDefault(); handleRate(4); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

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
            {/* Session summary — settings collapsed by default */}
            <button
              onClick={() => toggleSettings()}
              className="w-full flex items-center gap-2 rounded-xl border border-border bg-bg-raised px-4 py-2.5 text-left min-h-[44px]"
              aria-expanded={showSettings}
            >
              <IconCog className="w-4 h-4 text-ink-tertiary shrink-0" />
              <span className="flex-1 min-w-0 truncate text-[13px] font-medium text-ink">
                {modes.find((m) => m.key === reviewMode)?.label} · {cardLimit === 0 ? t.cardsPage.infinite : cardLimit === -1 ? t.cardsPage.allOnce : cardLimit} · {orderMode === "auto" ? t.cardsPage.orderAuto : orderMode === "random" ? t.cardsPage.orderRandom : t.cardsPage.orderInOrder} · {reviewDeck ?? t.cardsPage.allDecks}
              </span>
              <span className="text-ink-tertiary text-[12px]">{showSettings ? "▴" : "▾"}</span>
            </button>
            {showSettings && (
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
              <div className="text-[12px] text-ink-tertiary mt-1.5">{t.cardsPage.modeDesc[reviewMode]}</div>
            </div>

            {/* Card count */}
            <div className="flex items-center gap-2">
              <div className="text-[11px] text-ink-tertiary uppercase tracking-wide font-semibold">{t.cardsPage.cardCount}</div>
              {[10, 20, 50, -1, 0].map((n) => (
                <button
                  key={n}
                  onClick={() => changeCardLimit(n)}
                  className={`rounded-lg px-2.5 py-1 text-[13px] font-medium transition-colors ${
                    cardLimit === n ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {n === 0 ? t.cardsPage.infinite : n === -1 ? t.cardsPage.allOnce : n}
                </button>
              ))}
            </div>

            {/* Order */}
            <div className="flex items-center gap-2">
              <div className="text-[11px] text-ink-tertiary uppercase tracking-wide font-semibold">{t.cardsPage.order}</div>
              {([["auto", t.cardsPage.orderAuto], ["random", t.cardsPage.orderRandom], ["ordered", t.cardsPage.orderInOrder]] as const).map(([m, label]) => (
                <button
                  key={m}
                  onClick={() => changeOrder(m)}
                  className={`rounded-lg px-2.5 py-1 text-[13px] font-medium transition-colors ${
                    orderMode === m ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setWeakOnly(!weakOnly)}
              className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${weakOnly ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"}`}
            >
              {t.cardsPage.weakOnly}
            </button>

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
                  ref={(el) => { if (el && reviewDeck === d) el.scrollIntoView({ inline: "center", block: "nearest" }); }}
                  onClick={() => setReviewDeck(d)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    reviewDeck === d ? "bg-primary text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
              </div>
            )}

            {currentCard ? (
              <>
                <div className="flex items-center justify-between gap-2 text-[13px] text-ink-tertiary">
                  <span className="min-w-0 truncate">
                    {currentIdx + 1} / {dueCards.length} {t.cardsPage.cardsDue}
                    {reviewDeck && <span className="ml-1">in {reviewDeck}</span>}
                  </span>
                  {canUndo && (
                    <button onClick={handleUndo} className="shrink-0 whitespace-nowrap rounded-lg bg-bg-sunken px-2.5 py-1 text-[12px] font-medium text-ink-secondary hover:text-ink">
                      ↶ {t.cardsPage.undo}
                    </button>
                  )}
                  <button
                    onClick={toggleRating}
                    className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-1 text-[12px] font-medium transition-colors ${
                      showRating ? "bg-primary-light text-primary-text" : "bg-bg-sunken text-ink-tertiary"
                    }`}
                  >
                    {t.cardsPage.ratingButtons} {showRating ? "✓" : "✗"}
                  </button>
                </div>

                <div
                  ref={cardRef}
                  key={cardKey}
                  className={`relative w-full ${swipeClass || "card-enter"}`}
                  onClick={reviewMode === "writing" ? undefined : handleFlip}
                >
                  {(currentCard.audio || currentCard.hanzi) && (
                    <button
                      type="button"
                      aria-label="Play audio"
                      onClick={(e) => { e.stopPropagation(); speak((currentCard.audio ?? currentCard.hanzi)!); }}
                      className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-bg-sunken text-ink-secondary hover:text-ink transition-colors"
                    >
                      <IconVolume className="w-4 h-4" />
                    </button>
                  )}
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

                {!isRevealed && reviewMode !== "mcq" && reviewMode !== "writing" && (
                  <button
                    onClick={handleFlip}
                    className="w-full rounded-xl bg-primary hover:bg-primary-hover py-3 text-[14px] font-medium text-white transition-colors"
                  >
                    {showHint}
                  </button>
                )}
                {isRevealed && (
                  <div className="space-y-2">
                    {showRating ? (
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        onClick={() => handleRate(1)}
                        className="rounded-xl bg-warning-light py-2.5 text-[13px] font-medium text-warning-text transition-colors hover:bg-warning/10"
                      >
                        {t.cardsPage.again}<div className="text-[10px] opacity-70">{intervalHint(1)}</div>
                      </button>
                      <button
                        onClick={() => handleRate(3)}
                        className="rounded-xl bg-accent-light py-2.5 text-[13px] font-medium text-accent-text transition-colors hover:bg-accent/10"
                      >
                        {t.cardsPage.hard}<div className="text-[10px] opacity-70">{intervalHint(3)}</div>
                      </button>
                      <button
                        onClick={() => handleRate(4)}
                        className="rounded-xl bg-primary-light py-2.5 text-[13px] font-medium text-primary-text transition-colors hover:bg-primary/10"
                      >
                        {t.cardsPage.good}<div className="text-[10px] opacity-70">{intervalHint(4)}</div>
                      </button>
                      <button
                        onClick={() => handleRate(5)}
                        className="rounded-xl bg-blue-light py-2.5 text-[13px] font-medium text-blue transition-colors hover:bg-blue/10"
                      >
                        {t.cardsPage.easy}<div className="text-[10px] opacity-70">{intervalHint(5)}</div>
                      </button>
                    </div>
                    ) : (
                      <button
                        onClick={() => handleRate(4)}
                        className="w-full rounded-xl bg-primary hover:bg-primary-hover py-3 text-[14px] font-medium text-white transition-colors"
                      >
                        {t.cardsPage.next}
                      </button>
                    )}
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
                {session[1] + session[3] + session[4] + session[5] > 0 && (
                  <div className="mt-3 text-[13px] text-ink-secondary">
                    {t.cardsPage.reviewed} {session[1] + session[3] + session[4] + session[5]} · {t.cardsPage.again} {session[1]} · {t.cardsPage.hard} {session[3]} · {t.cardsPage.good} {session[4]} · {t.cardsPage.easy} {session[5]}
                  </div>
                )}
                {!weakOnly && session[1] + session[3] > 0 && (
                  <button
                    onClick={() => setWeakOnly(true)}
                    className="mt-4 rounded-xl border border-border px-5 py-2.5 text-[14px] font-medium text-ink hover:border-primary/50 transition-colors"
                  >
                    {t.cardsPage.weakOnly}
                  </button>
                )}
                <button
                  onClick={loadCards}
                  className="mt-5 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-2.5 text-[14px] font-medium transition-colors"
                >
                  {t.cardsPage.refresh}
                </button>
                {canUndo && (
                  <button onClick={handleUndo} className="mt-3 block mx-auto text-[13px] font-medium text-ink-secondary hover:text-ink">
                    ↶ {t.cardsPage.undo}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Decks ── */}
        {tab === "decks" && (
          <input
            value={deckSearch}
            onChange={(e) => setDeckSearch(e.target.value)}
            placeholder={t.cardsPage.searchPlaceholder}
            className="w-full mb-3 rounded-xl border border-border bg-white px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-primary"
          />
        )}
        {tab === "decks" && deckSearch.trim() && (
          <div className="space-y-1.5">
            <div className="text-[12px] text-ink-tertiary">{searchHits.length >= 60 ? "60+" : searchHits.length}{openDeck ? ` · ${openDeck}` : ""}</div>
            {searchHits.length === 0 && <div className="text-center py-8 text-[13px] text-ink-tertiary">{t.cardsPage.noResults}</div>}
            {searchHits.map((c) => {
              const hid = hiddenIds.has(c.id);
              return (
                <div key={c.id} className={`flex items-center gap-3 rounded-xl border border-border bg-bg-raised p-3.5 ${hid ? "opacity-50" : ""}`}>
                  <div className="text-xl font-bold text-ink w-20 shrink-0 break-all">{c.hanzi ?? c.front}</div>
                  <div className="flex-1 min-w-0">
                    {c.pinyin && <div className="text-[13px] text-primary">{c.pinyin}</div>}
                    <div className="text-[13px] text-ink-secondary">{c.english ?? c.back}</div>
                    <div className="text-[11px] text-ink-tertiary/60">{c.deck}</div>
                  </div>
                  <button
                    onClick={() => toggleHidden(c.id)}
                    className="shrink-0 rounded-lg border border-border px-2.5 py-1 text-[12px] font-medium text-ink-secondary hover:text-ink transition-colors"
                  >
                    {hid ? t.cardsPage.unhide : t.cardsPage.hideCard}
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {tab === "decks" && !openDeck && !deckSearch.trim() && (
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
                      {deckStats[deckName] ? deckStats[deckName].due : total} {t.cardsPage.dueWord} &middot; {deckStats[deckName]?.total ?? total} {t.cardsPage.cardsWord} &middot; {deckStats[deckName]?.learned ?? 0} {t.cardsPage.learnedWord}
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
        {tab === "decks" && openDeck && !deckSearch.trim() && (
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
                              <div className="text-[13px] text-ink-secondary">{w.ru ?? w.english}</div>
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
