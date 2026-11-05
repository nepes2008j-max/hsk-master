"use client";

import { useEffect, useRef, useState } from "react";

type Writer = { animateCharacter: () => void; quiz: () => void; cancelQuiz: () => void };

// One character with animated stroke order + draw-it practice (Hanzi Writer; stroke data is fetched on demand).
export default function StrokeChar({ ch, size = 112 }: { ch: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const writer = useRef<Writer | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let dead = false;
    (async () => {
      const HanziWriter = (await import("hanzi-writer")).default;
      if (dead || !ref.current) return;
      ref.current.innerHTML = "";
      const w = HanziWriter.create(ref.current, ch, {
        width: size, height: size, padding: 6, showOutline: true,
        strokeAnimationSpeed: 1, delayBetweenStrokes: 250,
        strokeColor: "#DC2626", outlineColor: "#E8E5E0", drawingColor: "#1C1917",
        onLoadCharDataError: () => setFailed(true),
      }) as unknown as Writer;
      writer.current = w;
      w.animateCharacter();
    })();
    return () => { dead = true; };
  }, [ch, size]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div ref={ref} className="rounded-xl border border-border bg-white" style={{ width: size, height: size }} />
      {failed ? (
        <div className="text-[11px] text-ink-secondary">offline</div>
      ) : (
        <div className="flex gap-1.5">
          <button aria-label="Replay stroke order" onClick={() => { writer.current?.cancelQuiz(); writer.current?.animateCharacter(); }} className="w-10 h-10 rounded-lg bg-bg-sunken text-ink-secondary hover:text-ink text-[14px]">▶</button>
          <button aria-label="Practice drawing" onClick={() => writer.current?.quiz()} className="w-10 h-10 rounded-lg bg-bg-sunken text-ink-secondary hover:text-ink text-[14px]">✎</button>
        </div>
      )}
    </div>
  );
}
