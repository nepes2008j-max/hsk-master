"use client";
// Opening animation (every time the site opens): a black screen with the logo, then black rectangles
// disappear in a staircase from the bottom-left to the top-right, revealing the app.
import { useEffect, useState } from "react";

const HOLD = 700; // ms the logo is shown before the blocks start to go
const COLS = 6;

export default function Splash() {
  const [grid, setGrid] = useState<{ rows: number; cells: { d: number }[] } | null>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const rows = Math.max(4, Math.ceil(window.innerHeight / (window.innerWidth / COLS)));
    const cells = Array.from({ length: rows * COLS }, (_, i) => {
      const c = i % COLS, r = Math.floor(i / COLS);
      return { d: HOLD + (c + (rows - 1 - r) * 0.7) * 55 + Math.random() * 90 };
    });
    const last = Math.max(...cells.map((x) => x.d)) + 260;
    const t1 = setTimeout(() => setGrid({ rows, cells }), 0);
    const t2 = setTimeout(() => setGone(true), last);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;
  return (
    <div className="splash" aria-hidden>
      {grid ? (
        <div className="splash-grid" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${grid.rows}, 1fr)` }}>
          {grid.cells.map((c, i) => <i key={i} style={{ animationDelay: `${c.d}ms` }} />)}
        </div>
      ) : <div className="splash-solid" />}
      <div className="splash-logo" style={{ animationDelay: `${HOLD - 150}ms` }}>
        <span>汉</span>
        <b>HSK Master</b>
      </div>
    </div>
  );
}
