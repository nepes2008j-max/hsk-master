// Opening animation (every time the site opens), after the reference video: black screen with the logo, then
// black blocks collapse into thin bars in a diagonal wave from the bottom-right to the top-left, revealing the app.
// Pure CSS (see .splash* in globals.css): server-rendered, so the screen is black from the very first paint,
// animates only transform/opacity, and hides itself when done. No client JS.
const COLS = 5, ROWS = 14;
const HOLD = 500; // ms the logo is shown before the first block goes
const WAVE = 380; // ms for the wave front to travel corner to corner

const cells = Array.from({ length: COLS * ROWS }, (_, i) => {
  const c = i % COLS, r = Math.floor(i / COLS);
  // distance from the bottom-right corner (0..1), rows weigh more: the front is a staircase climbing from the bottom
  const dist = ((COLS - 1 - c) / (COLS - 1)) * 0.4 + ((ROWS - 1 - r) / (ROWS - 1)) * 0.6;
  const jitter = ((i * 37) % 11) * 5; // deterministic 0-50ms, keeps the wave from looking mechanical
  return Math.round(HOLD + dist * WAVE + jitter);
});

export default function Splash() {
  return (
    <div className="splash" aria-hidden>
      <div className="splash-grid" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}>
        {cells.map((d, i) => <i key={i} style={{ animationDelay: `${d}ms` }} />)}
      </div>
      <div className="splash-logo">
        <span>汉</span>
        <b>HSK Master</b>
      </div>
    </div>
  );
}
