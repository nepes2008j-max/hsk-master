export interface CardState {
  cardId: string;
  ease: number;
  interval: number; // days
  due: number; // timestamp ms
  reps: number;
}

export function newCardState(cardId: string): CardState {
  return { cardId, ease: 2.5, interval: 0, due: 0, reps: 0 };
}

// quality: 0 (fail) to 5 (perfect). Simplified SM-2.
export function review(state: CardState, quality: number): CardState {
  const s = { ...state };
  if (quality < 3) {
    s.reps = 0;
    s.interval = 0;
  } else {
    if (s.reps === 0) s.interval = 1;
    else if (s.reps === 1) s.interval = 3;
    else s.interval = Math.round(s.interval * s.ease);
    s.reps++;
  }
  s.ease = Math.max(1.3, s.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  s.due = Date.now() + s.interval * 86400000;
  return s;
}

export function isDue(state: CardState): boolean {
  return Date.now() >= state.due;
}
