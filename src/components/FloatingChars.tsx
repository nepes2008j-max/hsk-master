"use client";

import { useEffect, useRef } from "react";

const CHARS = "你好学中文汉语水平考试听说读写词语法练习成功加油努力进步棒厉害对错答题目课本书笔记忆复预习级别分数目标梦想未来希望世界朋友老师同".split("");

interface Particle {
  x: number;
  y: number;
  char: string;
  size: number;
  speed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

export default function FloatingChars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      const count = Math.min(35, Math.floor(canvas.offsetWidth / 30));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        size: 14 + Math.random() * 20,
        speed: 0.15 + Math.random() * 0.4,
        opacity: 0.04 + Math.random() * 0.08,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.005 + Math.random() * 0.01,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.y -= p.speed;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.3;

        if (p.y < -p.size) {
          p.y = h + p.size;
          p.x = Math.random() * w;
          p.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        ctx.font = `${p.size}px sans-serif`;
        ctx.fillStyle = `rgba(220, 38, 38, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
