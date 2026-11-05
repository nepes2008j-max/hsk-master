"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";

type Writer = { animateCharacter: () => void; quiz: () => void; cancelQuiz: () => void };

// One character with animated stroke order + draw-it practice (Hanzi Writer; stroke data is fetched on demand).
export default function StrokeChar({ ch, size = 112 }: { ch: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const writer = useRef<Writer | null>(null);
  const [failed, setFailed] = useState(false);
  const [strokes, setStrokes] = useState<string[] | null>(null);
  const { t } = useLang();

  // Stroke outlines (Make Me a Hanzi data via Hanzi Writer) for the numbered writing-order steps.
  useEffect(() => {
    let dead = false;
    (async () => {
      try {
        const HanziWriter = (await import("hanzi-writer")).default;
        const d = (await HanziWriter.loadCharacterData(ch)) as unknown as { strokes: string[] } | undefined;
        if (!dead && d?.strokes) setStrokes(d.strokes);
      } catch { /* offline: animation tile shows the message */ }
    })();
    return () => { dead = true; };
  }, [ch]);

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
    <div className="flex items-start gap-3">
    <div className="flex flex-col items-center gap-1.5 shrink-0">
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
    {strokes && (
      <div className="min-w-0">
        <div className="text-[11px] text-ink-secondary mb-1.5">{strokes.length} {t.dictPage.strokes}</div>
        <div className="flex flex-wrap gap-1.5">
          {strokes.map((_, k) => (
            <div key={k} className="flex flex-col items-center">
              <svg viewBox="0 0 1024 1024" width={40} height={40} role="img" aria-label={`Stroke ${k + 1}`} className="rounded-md border border-border bg-white">
                <g transform="scale(1,-1) translate(0,-900)">
                  {strokes.slice(0, k + 1).map((d, j) => <path key={j} d={d} fill={j === k ? "#DC2626" : "#57534E"} />)}
                </g>
              </svg>
              <span className="text-[10px] text-ink-secondary">{k + 1}</span>
            </div>
          ))}
        </div>
      </div>
    )}
    </div>
  );
}
