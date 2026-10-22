"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary } from "@/data/vocabulary";
import { vocabulary2 } from "@/data/vocabulary2";
import { categories as stemCategories, allAcademicWords } from "@/data/academic-vocab";
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

type CardType = "hanzi-meaning" | "meaning-hanzi" | "audio-hanzi" | "hanzi-pinyin";
type ReviewMode = "mixed" | "three-way" | "reading" | "recognition";

interface FlashCard {
  id: string;
  front: string;
  back: string;
  audio?: string;
  type: CardType;
  deck: string;
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

const HSK_CARDS: FlashCard[] = [
  ...buildCards(vocabulary, "hsk", "HSK 1"),
  ...buildCards(vocabulary2, "hsk2", "HSK 2"),
  ...allAcademicWords.flatMap((w) => [
    { id: `stem-hm-${w.id}`, front: w.hanzi, back: `${w.pinyin} — ${w.english}`, audio: w.hanzi, type: "hanzi-meaning" as const, deck: "STEM", hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
    { id: `stem-mh-${w.id}`, front: w.english, back: `${w.hanzi} (${w.pinyin})`, type: "meaning-hanzi" as const, deck: "STEM", hanzi: w.hanzi, pinyin: w.pinyin, english: w.english },
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

  const userDecks = useMemo(() => {
    const deckSet = new Set(userCards.map((c) => c.deck));
    return [...deckSet].sort();
  }, [userCards]);

  const allDecks = useMemo(() => {
    const decks = new Map<string, { total: number; custom: boolean }>();
    decks.set("HSK 1", { total: vocabulary.length * 2, custom: false });
    decks.set("HSK 2", { total: vocabulary2.length * 2, custom: false });
    decks.set("STEM", { total: allAcademicWords.length * 2, custom: false });
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
      ? all.filter((c) => c.deck === reviewDeck)
      : all;

    // For non-mixed modes, only use hanzi-meaning cards (one per word)
    if (reviewMode !== "mixed") {
      reviewable = reviewable.filter((c) => c.type === "hanzi-meaning");
    }

    // Exclude hidden cards
    const hidden = getHidden();
    reviewable = reviewable.filter((c) => !hidden.has(c.id));

    const due = reviewable.filter((card) => {
      const state = stateMap.get(card.id);
      return !state || isDue(state);
    });

    const shuffled = due.sort(() => Math.random() - 0.5).slice(0, 20);
    setDueCards(shuffled);
    setCurrentIdx(0);
    setFlipped(false);
    setFlipStage(0);
  }, [reviewDeck, reviewMode]);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  const changeMode = (mode: ReviewMode) => {
    setReviewMode(mode);
    try { localStorage.setItem("hsk-review-mode", mode); } catch { /* noop */ }
  };

  const currentCard = dueCards[currentIdx];

  const handleRate = async (quality: number) => {
    if (!currentCard) return;
    const existing = (await getSRSState(currentCard.id)) ?? newCardState(currentCard.id);
    await saveSRSState(review(existing, quality));

    if (currentIdx + 1 < dueCards.length) {
      setCurrentIdx(currentIdx + 1);
      setFlipped(false);
      setFlipStage(0);
    } else {
      setDueCards([]);
    }
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
      const deckCardIds = new Set(HSK_CARDS.filter((c) => c.deck === deck).map((c) => c.id));
      const next = new Set([...hiddenIds].filter((id) => !deckCardIds.has(id)));
      setHiddenIds(next);
      saveHidden(next);
    }
  };

  const hiddenCountForDeck = (deck: string) => {
    const deckCardIds = HSK_CARDS.filter((c) => c.deck === deck).map((c) => c.id);
    return deckCardIds.filter((id) => hiddenIds.has(id)).length;
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

  const isRevealed = reviewMode === "three-way" ? flipStage === 2 : flipped;
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

                <button
                  onClick={handleFlip}
                  className="w-full min-h-[220px] rounded-2xl border-2 border-border bg-bg-raised p-8 flex flex-col items-center justify-center gap-4 transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.99]"
                >
                  {isRevealed ? renderCardBack() : renderCardFront()}
                  {!isRevealed && (
                    <div className="text-[13px] text-ink-tertiary">{showHint}</div>
                  )}
                  <div className="text-[11px] text-ink-tertiary/60">{currentCard.deck}</div>
                </button>

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
            {(["HSK 1", "HSK 2", "STEM"] as const).map((deckName) => {
              const hidden = hiddenCountForDeck(deckName);
              const total = deckName === "HSK 1" ? vocabulary.length * 2
                : deckName === "HSK 2" ? vocabulary2.length * 2
                : allAcademicWords.length * 2;
              return (
                <button
                  key={deckName}
                  onClick={() => setOpenDeck(deckName)}
                  className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-4 text-left hover:border-border-strong transition-colors"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${deckName === "STEM" ? "bg-blue-light" : "bg-primary-light"}`}>
                    <IconCards className={`w-5.5 h-5.5 ${deckName === "STEM" ? "text-blue" : "text-primary"}`} />
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
                    ? `${allAcademicWords.length * 2} cards`
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

            {openDeck === "HSK 1" || openDeck === "HSK 2" || openDeck === "STEM" ? (
              <div className="space-y-3">
                <div className="text-[13px] text-ink-tertiary rounded-xl bg-bg-sunken p-4">
                  {openDeck === "STEM"
                    ? `Built-in STEM deck with ${allAcademicWords.length * 2} flashcards — math, science & CS vocabulary for CSCA preparation.`
                    : `Built-in ${openDeck} deck with ${openDeck === "HSK 1" ? vocabulary.length * 2 : vocabulary2.length * 2} flashcards — hanzi-to-meaning and meaning-to-hanzi for all ${openDeck === "HSK 1" ? 300 : 197} words.`}
                </div>
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
