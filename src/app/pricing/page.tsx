"use client";

import Link from "next/link";
import { IconCheck, IconChevron } from "@/components/Icons";
import { getCheckoutUrl } from "@/lib/stripe";

const plans = [
  { id: "monthly", name: "Monthly", price: 30, period: "month", months: 1, desc: "Try it out, cancel anytime" },
  { id: "semi", name: "6 Months", price: 150, period: "6 months", months: 6, desc: "Most popular choice", featured: true },
  { id: "annual", name: "Annual", price: 250, period: "year", months: 12, desc: "Best value for committed learners" },
];

const allFeatures = [
  { name: "HSK 1 vocabulary (300 words)", all: true },
  { name: "Grammar points (58 patterns)", all: true },
  { name: "Character stroke practice (100+ chars)", all: true },
  { name: "Smart flashcards with SRS", all: true },
  { name: "Custom flashcard decks", all: true },
  { name: "Mock HSK tests (unlimited)", all: true },
  { name: "Pronunciation audio", all: true },
  { name: "Progress tracking", all: true },
  { name: "Gamified & clean UI modes", all: true },
  { name: "Offline access (PWA)", all: true },
  { name: "Phone + laptop", all: true },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes. You get 5 days of full access when you sign up — no credit card required." },
  { q: "What payment methods do you accept?", a: "We accept WeChat Pay, Alipay, and international credit/debit cards via Stripe." },
  { q: "Can I cancel anytime?", a: "Yes. Monthly plans cancel at the end of the billing period. No questions asked." },
  { q: "Does it work offline?", a: "Yes. Install as a PWA on your phone or laptop and all vocabulary, grammar, and flashcard content works without internet." },
  { q: "Is this the new HSK 3.0?", a: "Yes. All content follows the HSK 3.0 standard (300 words for Level 1), which officially launches December 2026." },
  { q: "What if I need more than HSK 1?", a: "HSK 2-6 levels are coming. Your subscription will include new levels as they're added." },
];

export default function PricingPage() {
  const monthlyRate = (price: number, months: number) => Math.round(price / months);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-bg/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-jade">HSK</span>
            <span className="text-lg font-semibold text-ink">Master</span>
          </Link>
          <Link
            href="/dashboard"
            className="bg-jade hover:bg-jade-hover text-white text-[14px] font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Start 5-day free trial
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="pt-16 sm:pt-24 pb-12 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            One plan. Everything included.
          </h1>
          <p className="mt-4 text-lg text-ink-secondary leading-relaxed">
            Every subscription gives you full access to all HSK 1 content.
            Pick the duration that fits your timeline.
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-3 gap-4 pb-16">
          {plans.map((plan) => {
            const monthly = monthlyRate(plan.price, plan.months);
            const savePercent = plan.months > 1 ? Math.round((1 - plan.price / (30 * plan.months)) * 100) : 0;

            return (
              <div
                key={plan.id}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  plan.featured
                    ? "border-jade bg-jade-light ring-1 ring-jade/20"
                    : "border-border bg-bg-raised"
                }`}
              >
                {savePercent > 0 && (
                  <span className={`absolute -top-3 right-4 text-[12px] font-bold px-2.5 py-0.5 rounded-full ${
                    plan.featured ? "bg-jade text-white" : "bg-gold-light text-gold-text"
                  }`}>
                    Save {savePercent}%
                  </span>
                )}

                <div className="text-[15px] font-semibold text-ink">{plan.name}</div>

                <div className="mt-4">
                  <span className="text-4xl font-bold text-ink">¥{plan.price}</span>
                  <span className="text-ink-tertiary text-[14px] ml-1">/{plan.period}</span>
                </div>

                {plan.months > 1 && (
                  <div className="text-[13px] text-ink-secondary mt-1">
                    ¥{monthly}/month
                  </div>
                )}

                <p className="text-[13px] text-ink-tertiary mt-2 flex-1">{plan.desc}</p>

                <a
                  href={getCheckoutUrl(plan.id) || "/dashboard"}
                  className={`mt-6 block text-center text-[14px] font-semibold py-3 rounded-lg transition-colors ${
                    plan.featured
                      ? "bg-jade hover:bg-jade-hover text-white"
                      : "bg-bg-sunken hover:bg-border text-ink"
                  }`}
                >
                  Start 5-day free trial
                </a>
              </div>
            );
          })}
        </div>

        {/* Feature list */}
        <div className="border-t border-border pt-12 pb-16">
          <h2 className="text-xl font-bold text-ink">What&apos;s included</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {allFeatures.map(({ name }) => (
              <div key={name} className="flex items-center gap-2.5 text-[14px] text-ink-secondary py-1">
                <IconCheck className="w-4.5 h-4.5 text-jade shrink-0" />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-border pt-12 pb-20">
          <h2 className="text-xl font-bold text-ink">Questions</h2>
          <div className="mt-6 max-w-2xl divide-y divide-border">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-[15px] font-medium text-ink hover:text-jade transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {q}
                  <IconChevron direction="down" className="w-4 h-4 text-ink-tertiary transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-4 text-[14px] text-ink-secondary leading-relaxed -mt-1">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
