"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import AppShell from "@/components/AppShell";
import { vocabulary } from "@/data/vocabulary";
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

interface FlashCard {
  id: string;
  front: string;
  back: string;
  audio?: string;
  type: CardType;
  deck: string;
}

function buildHSKCards(): FlashCard[] {
  return vocabulary.flatMap((w) => [
    { id: `hsk-hm-${w.id}`, front: w.hanzi, back: `${w.pinyin} — ${w.english}`, audio: w.hanzi, type: "hanzi-meaning" as const, deck: "HSK 1" },
    { id: `hsk-mh-${w.id}`, front: w.english, back: `${w.hanzi} (${w.pinyin})`, type: "meaning-hanzi" as const, deck: "HSK 1" },
  ]);
}

export default function CardsPage() {
  const { t } = useLang();
  const [tab, setTab] = useState<"review" | "decks" | "create">("review");
  const [allCards, setAllCards] = useState<FlashCard[]>([]);
  const [dueCards, setDueCards] = useState<FlashCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userCards, setUserCards] = useState<UserCard[]>([]);
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");
  const [newPinyin, setNewPinyin] = useState("");
  const [newDeck, setNewDeck] = useState("");
  const [newDeckName, setNewDeckName] = useState("");
  const [showNewDeckInput, setShowNewDeckInput] = useState(false);
  const [openDeck, setOpenDeck] = useState<string | null>(null);
  const [reviewDeck, setReviewDeck] = useState<string | null>(null);

  const userDecks = useMemo(() => {
    const deckSet = new Set(userCards.map((c) => c.deck));
    return [...deckSet].sort();
  }, [userCards]);

  const allDecks = useMemo(() => {
    const decks = new Map<string, { total: number; custom: boolean }>();
    decks.set("HSK 1", { total: vocabulary.length * 2, custom: false });
    for (const d of userDecks) {
      decks.set(d, { total: userCards.filter((c) => c.deck === d).length, custom: true });
    }
    return decks;
  }, [userDecks, userCards]);

  const loadCards = useCallback(async () => {
    const hskCards = buildHSKCards();
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

    const reviewable = reviewDeck
      ? all.filter((c) => c.deck === reviewDeck)
      : all;

    const due = reviewable.filter((card) => {
      const state = stateMap.get(card.id);
      return !state || isDue(state);
    });

    const shuffled = due.sort(() => Math.random() - 0.5).slice(0, 20);
    setDueCards(shuffled);
    setCurrentIdx(0);
    setFlipped(false);
  }, [reviewDeck]);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  const currentCard = dueCards[currentIdx];

  const handleRate = async (quality: number) => {
    if (!currentCard) return;
    const existing = (await getSRSState(currentCard.id)) ?? newCardState(currentCard.id);
    await saveSRSState(review(existing, quality));

    if (currentIdx + 1 < dueCards.length) {
      setCurrentIdx(currentIdx + 1);
      setFlipped(false);
    } else {
      setDueCards([]);
    }
  };

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

  const deckCards = openDeck ? userCards.filter((c) => c.deck === openDeck) : [];

  return (
    <AppShell>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-ink tracking-tight">Flashcards</h1>

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
            {/* Deck filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setReviewDeck(null)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  !reviewDeck ? "bg-jade text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                }`}
              >
                All decks
              </button>
              {[...allDecks.keys()].map((d) => (
                <button
                  key={d}
                  onClick={() => setReviewDeck(d)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    reviewDeck === d ? "bg-jade text-white" : "bg-bg-sunken text-ink-secondary hover:text-ink"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {currentCard ? (
              <>
                <div className="text-[13px] text-ink-tertiary text-center">
                  {currentIdx + 1} / {dueCards.length} cards due
                  {reviewDeck && <span className="ml-1">in {reviewDeck}</span>}
                </div>

                <button
                  onClick={() => {
                    setFlipped(!flipped);
                    if (currentCard.audio) speak(currentCard.audio);
                  }}
                  className="w-full min-h-[220px] rounded-2xl border-2 border-border bg-bg-raised p-8 flex flex-col items-center justify-center gap-4 transition-all hover:border-jade/50 hover:shadow-md active:scale-[0.99]"
                >
                  <div className="text-3xl font-bold text-ink">
                    {flipped ? currentCard.back : currentCard.front}
                  </div>
                  {!flipped && (
                    <div className="text-[13px] text-ink-tertiary">{t.cardsPage.showAnswer}</div>
                  )}
                  <div className="text-[11px] text-ink-tertiary/60">{currentCard.deck}</div>
                </button>

                {flipped && (
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => handleRate(1)}
                      className="rounded-xl bg-red-light py-2.5 text-[13px] font-medium text-red-text transition-colors hover:bg-red/10"
                    >
                      {t.cardsPage.again}
                    </button>
                    <button
                      onClick={() => handleRate(3)}
                      className="rounded-xl bg-gold-light py-2.5 text-[13px] font-medium text-gold-text transition-colors hover:bg-gold/10"
                    >
                      {t.cardsPage.hard}
                    </button>
                    <button
                      onClick={() => handleRate(4)}
                      className="rounded-xl bg-jade-light py-2.5 text-[13px] font-medium text-jade-text transition-colors hover:bg-jade/10"
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
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-jade-light mb-4">
                  <IconStar className="w-7 h-7 text-jade" />
                </div>
                <div className="text-[15px] font-semibold text-ink">All caught up!</div>
                <div className="text-[13px] text-ink-tertiary mt-1">{t.cardsPage.noCards}</div>
                <button
                  onClick={loadCards}
                  className="mt-5 rounded-xl bg-jade hover:bg-jade-hover text-white px-5 py-2.5 text-[14px] font-medium transition-colors"
                >
                  Refresh
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Decks ── */}
        {tab === "decks" && !openDeck && (
          <div className="space-y-3">
            {/* HSK 1 built-in deck */}
            <button
              onClick={() => setOpenDeck("HSK 1")}
              className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-4 text-left hover:border-border-strong transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-jade-light flex items-center justify-center shrink-0">
                <IconCards className="w-5.5 h-5.5 text-jade" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-ink">HSK 1</div>
                <div className="text-[13px] text-ink-tertiary">{vocabulary.length * 2} cards &middot; Built-in</div>
              </div>
              <IconChevron direction="right" className="w-4 h-4 text-ink-tertiary" />
            </button>

            {/* User decks */}
            {userDecks.map((deck) => {
              const count = userCards.filter((c) => c.deck === deck).length;
              return (
                <button
                  key={deck}
                  onClick={() => setOpenDeck(deck)}
                  className="w-full flex items-center gap-4 rounded-xl border border-border bg-bg-raised p-4 text-left hover:border-border-strong transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                    <IconCards className="w-5.5 h-5.5 text-gold" />
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
                <div className="text-[13px] text-ink-tertiary">No custom decks yet.</div>
                <button
                  onClick={() => setTab("create")}
                  className="mt-3 rounded-xl bg-jade hover:bg-jade-hover text-white px-5 py-2.5 text-[14px] font-medium transition-colors"
                >
                  Create your first card
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
              className="flex items-center gap-1 text-[13px] text-jade hover:underline"
            >
              <IconChevron direction="left" className="w-3.5 h-3.5" />
              All decks
            </button>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-ink">{openDeck}</div>
                <div className="text-[13px] text-ink-tertiary">
                  {openDeck === "HSK 1"
                    ? `${vocabulary.length * 2} cards`
                    : `${deckCards.length} card${deckCards.length !== 1 ? "s" : ""}`}
                </div>
              </div>
              <button
                onClick={() => { setReviewDeck(openDeck); setTab("review"); }}
                className="rounded-xl bg-jade hover:bg-jade-hover text-white px-4 py-2 text-[13px] font-medium transition-colors"
              >
                {t.cardsPage.reviewDeck}
              </button>
            </div>

            {openDeck === "HSK 1" ? (
              <div className="text-[13px] text-ink-tertiary rounded-xl bg-bg-sunken p-4">
                Built-in HSK 1 deck with {vocabulary.length * 2} flashcards — hanzi-to-meaning and meaning-to-hanzi for all 300 words.
              </div>
            ) : (
              <div className="space-y-1.5">
                {deckCards.map((card) => (
                  <div key={card.id} className="flex items-center gap-3 rounded-xl bg-bg-raised border border-border p-3.5">
                    <div className="flex-1 min-w-0">
                      <div className="text-[15px] font-medium text-ink">{card.front}</div>
                      <div className="text-[13px] text-ink-secondary">{card.back}</div>
                      {card.pinyin && <div className="text-[12px] text-jade mt-0.5">{card.pinyin}</div>}
                    </div>
                    <button
                      onClick={() => handleDeleteCard(card.id)}
                      className="p-1.5 rounded-lg text-ink-tertiary hover:text-red hover:bg-red-light transition-colors shrink-0"
                    >
                      <IconX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {deckCards.length === 0 && (
                  <div className="text-center py-8 text-[13px] text-ink-tertiary">
                    This deck is empty.
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
                Deck
              </label>
              <div className="flex gap-2 flex-wrap">
                {userDecks.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setNewDeck(d); setShowNewDeckInput(false); }}
                    className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      newDeck === d && !showNewDeckInput
                        ? "bg-jade text-white"
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
                      ? "bg-jade text-white"
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
                    placeholder="Deck name (e.g. Food, Travel, Work)"
                    className="flex-1 rounded-xl border border-border bg-bg-raised px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade/20 transition-colors"
                    autoFocus
                  />
                  <button
                    onClick={handleCreateDeck}
                    disabled={!newDeckName.trim()}
                    className="rounded-xl bg-jade hover:bg-jade-hover text-white px-4 py-2.5 text-[14px] font-medium transition-colors disabled:opacity-40"
                  >
                    <IconCheck className="w-4 h-4" />
                  </button>
                </div>
              )}

              {!showNewDeckInput && !newDeck && userDecks.length === 0 && (
                <div className="text-[12px] text-ink-tertiary">
                  Cards without a deck go into &ldquo;My Cards&rdquo;
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
                Card
              </label>
              <input
                value={newFront}
                onChange={(e) => setNewFront(e.target.value)}
                placeholder={t.cardsPage.front}
                className="w-full rounded-xl border border-border bg-bg-raised px-4 py-3 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade/20 transition-colors"
              />
              <input
                value={newPinyin}
                onChange={(e) => setNewPinyin(e.target.value)}
                placeholder={t.cardsPage.pinyin}
                className="w-full rounded-xl border border-border bg-bg-raised px-4 py-3 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade/20 transition-colors"
              />
              <input
                value={newBack}
                onChange={(e) => setNewBack(e.target.value)}
                placeholder={t.cardsPage.back}
                className="w-full rounded-xl border border-border bg-bg-raised px-4 py-3 text-[14px] text-ink placeholder:text-ink-tertiary focus:outline-none focus:border-jade focus:ring-1 focus:ring-jade/20 transition-colors"
              />
              <button
                onClick={handleCreateCard}
                disabled={!newFront.trim() || !newBack.trim()}
                className="w-full rounded-xl bg-jade hover:bg-jade-hover text-white py-3 text-[14px] font-semibold transition-colors disabled:opacity-40 disabled:hover:bg-jade"
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
