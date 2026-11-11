"use client";
// The orange glow behind the top of every page (reference video): a fixed layer that fades and drifts up as you
// scroll down and comes back at the top. Only opacity/transform change per frame; text sitting on the glow
// (.on-glow) flips white -> ink once, via html[data-scrolled] (see globals.css).
import { useEffect, useRef } from "react";

const FADE = 360;  // px of scroll until the glow is fully gone
const INK_AT = 24; // px of scroll after which white-on-glow text turns dark

export default function Glow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!, root = document.documentElement;
    let raf = 0, last = -1;
    const paint = () => {
      raf = 0;
      const y = Math.min(Math.max(window.scrollY, 0), FADE);
      root.toggleAttribute("data-scrolled", y > INK_AT);
      if (y === last) return;
      last = y;
      el.style.opacity = String(1 - y / FADE);
      el.style.transform = `translate3d(0,${-y * 0.3}px,0)`;
    };
    const onScroll = () => { raf ||= requestAnimationFrame(paint); };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="glow" aria-hidden />;
}
