"use client";

import Link from "next/link";
import { IconCheck, IconChevron } from "@/components/Icons";
import { getCheckoutUrl } from "@/lib/stripe";
import { useLang } from "@/lib/i18n";

export default function PricingPage() {
  const { t } = useLang();
  const p = t.pricingPage;
  const l = t.landing;

  const plans = [
    { id: "monthly", name: l.monthly, price: 30, period: "month", months: 1, desc: p.tryDesc },
    { id: "semi", name: l.sixMonths, price: 150, period: "6 months", months: 6, desc: p.popularDesc, featured: true },
    { id: "annual", name: l.annual, price: 250, period: "year", months: 12, desc: p.bestDesc },
  ];

  const allFeatures = [p.feat1, p.feat2, p.feat3, p.feat4, p.feat5, p.feat6, p.feat7, p.feat8, p.feat9, p.feat10, p.feat11];

  const faqs = [
    { q: p.faq1q, a: p.faq1a },
    { q: p.faq2q, a: p.faq2a },
    { q: p.faq3q, a: p.faq3a },
    { q: p.faq4q, a: p.faq4a },
    { q: p.faq5q, a: p.faq5a },
    { q: p.faq6q, a: p.faq6a },
  ];

  const monthlyRate = (price: number, months: number) => Math.round(price / months);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-bg/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-primary">HSK</span>
            <span className="text-lg font-semibold text-ink">Master</span>
          </Link>
          <Link
            href="/dashboard"
            className="bg-primary hover:bg-primary-hover text-white text-[14px] font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            {p.startTrial}
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="pt-16 sm:pt-24 pb-12 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-ink-secondary leading-relaxed">
            {p.desc}
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
                    ? "border-primary bg-primary-light ring-1 ring-primary/20"
                    : "border-border bg-bg-raised"
                }`}
              >
                {savePercent > 0 && (
                  <span className={`absolute -top-3 right-4 text-[12px] font-bold px-2.5 py-0.5 rounded-full ${
                    plan.featured ? "bg-primary text-white" : "bg-accent-light text-accent-text"
                  }`}>
                    {p.save} {savePercent}%
                  </span>
                )}

                <div className="text-[15px] font-semibold text-ink">{plan.name}</div>

                <div className="mt-4">
                  <span className="text-4xl font-bold text-ink">¥{plan.price}</span>
                  <span className="text-ink-tertiary text-[14px] ml-1">/{plan.period}</span>
                </div>

                {plan.months > 1 && (
                  <div className="text-[13px] text-ink-secondary mt-1">
                    ¥{monthly}{p.perMonth}
                  </div>
                )}

                <p className="text-[13px] text-ink-tertiary mt-2 flex-1">{plan.desc}</p>

                <a
                  href={getCheckoutUrl(plan.id) || "/dashboard"}
                  className={`mt-6 block text-center text-[14px] font-semibold py-3 rounded-lg transition-colors ${
                    plan.featured
                      ? "bg-primary hover:bg-primary-hover text-white"
                      : "bg-bg-sunken hover:bg-border text-ink"
                  }`}
                >
                  {p.startTrial}
                </a>
              </div>
            );
          })}
        </div>

        {/* Feature list */}
        <div className="border-t border-border pt-12 pb-16">
          <h2 className="text-xl font-bold text-ink">{p.included}</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {allFeatures.map((name) => (
              <div key={name} className="flex items-center gap-2.5 text-[14px] text-ink-secondary py-1">
                <IconCheck className="w-4.5 h-4.5 text-primary shrink-0" />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-border pt-12 pb-20">
          <h2 className="text-xl font-bold text-ink">{p.questions}</h2>
          <div className="mt-6 max-w-2xl divide-y divide-border">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer text-[15px] font-medium text-ink hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
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
