"use client";

import Link from "next/link";
import { IconCheck, IconBook, IconBrush, IconCards, IconClipboard, IconPencil, IconStar } from "@/components/Icons";

const features = [
  { Icon: IconBook, title: "497 Vocabulary Words", desc: "Every word you need for HSK 1–2 with pinyin, meaning, and example sentences. Tap any word to hear native pronunciation." },
  { Icon: IconPencil, title: "93 Grammar Points", desc: "Clear pattern explanations with real examples. No textbook jargon — just the structure you need to understand Chinese sentences." },
  { Icon: IconBrush, title: "Stroke Order Practice", desc: "Write characters the right way. Animated stroke demos and interactive quizzes for 100+ essential characters." },
  { Icon: IconCards, title: "Smart Flashcards", desc: "Spaced repetition that adapts to you. Pre-built HSK 1–2 decks plus create your own cards for anything you struggle with." },
  { Icon: IconClipboard, title: "Mock HSK Tests", desc: "Timed exams matching the real HSK format — 40 questions for Level 1, 60 for Level 2. Listening and reading sections scored out of 200." },
  { Icon: IconStar, title: "Your Way", desc: "Switch between gamified mode with XP and streaks, or clean study mode. Your progress syncs across both." },
];

const plans = [
  { name: "Monthly", price: "¥30", period: "/month", desc: "Full access, cancel anytime", save: null },
  { name: "6 Months", price: "¥150", period: "/6 months", desc: "Most popular", save: "Save 17%", featured: true },
  { name: "Annual", price: "¥250", period: "/year", desc: "Best value", save: "Save 31%" },
];

const includes = [
  "497 HSK 1–2 vocabulary words",
  "93 grammar points with examples",
  "Stroke order practice (100+ chars)",
  "Unlimited flashcard decks",
  "Unlimited mock tests",
  "Progress tracking & streaks",
  "Works offline",
  "Phone + laptop access",
];

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-jade">HSK</span>
            <span className="text-lg font-semibold text-ink">Master</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/pricing" className="text-[14px] text-ink-secondary hover:text-ink font-medium hidden sm:block">
              Pricing
            </Link>
            <Link href="/dashboard" className="text-[14px] text-ink-secondary hover:text-ink font-medium hidden sm:block">
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="bg-jade hover:bg-jade-hover text-white text-[13px] sm:text-[14px] font-semibold px-3.5 py-2 rounded-lg transition-colors"
            >
              Start learning
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-jade-text bg-jade-light px-3 py-1 rounded-full mb-5">
            HSK 3.0 — Updated for 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-ink leading-[1.1] tracking-tight">
            Pass your HSK exam.<br />
            <span className="text-ink-secondary">Without the fluff.</span>
          </h1>
          <p className="mt-4 text-[15px] sm:text-lg text-ink-secondary leading-relaxed max-w-xl">
            497 words. 93 grammar points. Stroke order. Mock tests. Everything mapped
            to what&apos;s actually on the exam — nothing that isn&apos;t.
          </p>
          <div className="mt-6 sm:mt-8 flex gap-2.5">
            <Link
              href="/dashboard"
              className="bg-jade hover:bg-jade-hover text-white text-[14px] sm:text-[15px] font-semibold px-5 sm:px-6 py-3 rounded-xl transition-colors"
            >
              Start free trial
            </Link>
            <Link
              href="#pricing"
              className="border border-border-strong hover:bg-bg-sunken text-ink text-[14px] sm:text-[15px] font-medium px-5 sm:px-6 py-3 rounded-xl transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Quick proof */}
        <div className="mt-10 sm:mt-16 grid grid-cols-4 gap-4 sm:gap-6">
          {[
            { n: "497", l: "words" },
            { n: "93", l: "grammar" },
            { n: "100+", l: "characters" },
            { n: "60", l: "test Q's" },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="text-2xl sm:text-3xl font-bold text-jade tabular-nums">{n}</div>
              <div className="text-[11px] sm:text-[13px] text-ink-secondary mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-bg-raised">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">Everything you need. Nothing you don&apos;t.</h2>
          <p className="mt-3 text-ink-secondary max-w-xl">
            Other apps teach you to order coffee. This one teaches you to pass HSK 1.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ Icon, title, desc }) => (
              <div key={title}>
                <div className="w-9 h-9 rounded-lg bg-jade-light flex items-center justify-center mb-3">
                  <Icon className="w-[18px] h-[18px] text-jade" />
                </div>
                <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-[14px] text-ink-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border scroll-mt-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">Simple pricing</h2>
          <p className="mt-3 text-ink-secondary">
            One plan. Everything included. Pick the duration that works for you.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  plan.featured
                    ? "border-jade bg-jade-light ring-1 ring-jade/20"
                    : "border-border bg-bg-raised"
                }`}
              >
                {plan.save && (
                  <span className={`absolute -top-3 right-4 text-[12px] font-semibold px-2.5 py-0.5 rounded-full ${
                    plan.featured ? "bg-jade text-white" : "bg-gold-light text-gold-text"
                  }`}>
                    {plan.save}
                  </span>
                )}
                <div className="text-[14px] font-semibold text-ink-secondary">{plan.name}</div>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-ink">{plan.price}</span>
                  <span className="text-ink-tertiary text-[14px]">{plan.period}</span>
                </div>
                <p className="text-[13px] text-ink-tertiary mt-1">{plan.desc}</p>
                <Link
                  href="/dashboard"
                  className={`mt-6 block text-center text-[14px] font-semibold py-2.5 rounded-lg transition-colors ${
                    plan.featured
                      ? "bg-jade hover:bg-jade-hover text-white"
                      : "bg-bg-sunken hover:bg-border text-ink"
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-md">
            <div className="text-[14px] font-semibold text-ink mb-3">Every plan includes:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-[13px] text-ink-secondary">
                  <IconCheck className="w-4 h-4 text-jade shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-bg-raised">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">Ready to start?</h2>
          <p className="mt-3 text-ink-secondary">
            Most people pass HSK 1 in 2-4 months of daily practice. Start today.
          </p>
          <Link
            href="/dashboard"
            className="inline-block mt-6 bg-jade hover:bg-jade-hover text-white text-[15px] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start 5-day free trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold text-jade">HSK</span>
              <span className="text-[15px] font-semibold text-ink">Master</span>
            </div>
            <div className="flex gap-6 text-[13px] text-ink-tertiary">
              <Link href="/pricing" className="hover:text-ink transition-colors">Pricing</Link>
              <Link href="/dashboard" className="hover:text-ink transition-colors">Log in</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border">
            <div className="flex flex-wrap justify-center gap-4 text-[12px] text-ink-tertiary">
              <Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
              <Link href="/refund" className="hover:text-ink transition-colors">Refund Policy</Link>
            </div>
            <div className="text-[12px] text-ink-tertiary">&copy; 2026 HSK Master. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
