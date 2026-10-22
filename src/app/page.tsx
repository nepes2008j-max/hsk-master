"use client";

import Link from "next/link";
import { IconCheck, IconBook, IconBrush, IconCards, IconClipboard, IconPencil, IconStar } from "@/components/Icons";
import { useLang } from "@/lib/i18n";

export default function LandingPage() {
  const { t } = useLang();
  const l = t.landing;

  const features = [
    { Icon: IconBook, title: l.feat1, desc: l.feat1d },
    { Icon: IconPencil, title: l.feat2, desc: l.feat2d },
    { Icon: IconBrush, title: l.feat3, desc: l.feat3d },
    { Icon: IconCards, title: l.feat4, desc: l.feat4d },
    { Icon: IconClipboard, title: l.feat5, desc: l.feat5d },
    { Icon: IconStar, title: l.feat6, desc: l.feat6d },
  ];

  const plans = [
    { name: l.monthly, price: "¥30", period: l.perMonth, desc: l.monthDesc, save: null },
    { name: l.sixMonths, price: "¥150", period: l.perSix, desc: l.sixDesc, save: "Save 17%", featured: true },
    { name: l.annual, price: "¥250", period: l.perYear, desc: l.annualDesc, save: "Save 31%" },
  ];

  const includes = [l.incl1, l.incl2, l.incl3, l.incl4, l.incl5, l.incl6, l.incl7, l.incl8];

  return (
    <div className="min-h-[100dvh]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-primary">HSK</span>
            <span className="text-lg font-semibold text-ink">Master</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/pricing" className="text-[14px] text-ink-secondary hover:text-ink font-medium hidden sm:block">
              {l.viewPricing}
            </Link>
            <Link href="/dashboard" className="text-[14px] text-ink-secondary hover:text-ink font-medium hidden sm:block">
              {l.login}
            </Link>
            <Link
              href="/dashboard"
              className="bg-primary hover:bg-primary-hover text-white text-[13px] sm:text-[14px] font-semibold px-3.5 py-2 rounded-lg transition-colors"
            >
              {l.cta}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-primary-text bg-primary-light px-3 py-1 rounded-full mb-5">
            {l.tagline}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-ink leading-[1.1] tracking-tight">
            {l.hero}<br />
            <span className="text-ink-secondary">{l.heroSub}</span>
          </h1>
          <p className="mt-4 text-[15px] sm:text-lg text-ink-secondary leading-relaxed max-w-xl">
            {l.heroDesc}
          </p>
          <div className="mt-6 sm:mt-8 flex gap-2.5">
            <Link
              href="/dashboard"
              className="bg-primary hover:bg-primary-hover text-white text-[14px] sm:text-[15px] font-semibold px-5 sm:px-6 py-3 rounded-xl transition-colors"
            >
              {l.startTrial}
            </Link>
            <Link
              href="#pricing"
              className="border border-border-strong hover:bg-bg-sunken text-ink text-[14px] sm:text-[15px] font-medium px-5 sm:px-6 py-3 rounded-xl transition-colors"
            >
              {l.viewPricing}
            </Link>
          </div>
        </div>

        {/* Quick proof */}
        <div className="mt-10 sm:mt-16 grid grid-cols-4 gap-4 sm:gap-6">
          {[
            { n: "497", label: l.words },
            { n: "93", label: l.grammarStat },
            { n: "100+", label: l.characters },
            { n: "60", label: l.testQs },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">{n}</div>
              <div className="text-[11px] sm:text-[13px] text-ink-secondary mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-bg-raised">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">{l.featuresTitle}</h2>
          <p className="mt-3 text-ink-secondary max-w-xl">
            {l.featuresSub}
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ Icon, title, desc }) => (
              <div key={title}>
                <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center mb-3">
                  <Icon className="w-[18px] h-[18px] text-primary" />
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
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">{l.simplePricing}</h2>
          <p className="mt-3 text-ink-secondary">
            {l.pricingDesc}
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  plan.featured
                    ? "border-primary bg-primary-light ring-1 ring-primary/20"
                    : "border-border bg-bg-raised"
                }`}
              >
                {plan.save && (
                  <span className={`absolute -top-3 right-4 text-[12px] font-semibold px-2.5 py-0.5 rounded-full ${
                    plan.featured ? "bg-primary text-white" : "bg-accent-light text-accent-text"
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
                      ? "bg-primary hover:bg-primary-hover text-white"
                      : "bg-bg-sunken hover:bg-border text-ink"
                  }`}
                >
                  {l.getStarted}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-md">
            <div className="text-[14px] font-semibold text-ink mb-3">{l.everyPlan}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-2 text-[13px] text-ink-secondary">
                  <IconCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
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
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">{l.readyToStart}</h2>
          <p className="mt-3 text-ink-secondary">
            {l.readyDesc}
          </p>
          <Link
            href="/dashboard"
            className="inline-block mt-6 bg-primary hover:bg-primary-hover text-white text-[15px] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {l.startTrialBtn}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold text-primary">HSK</span>
              <span className="text-[15px] font-semibold text-ink">Master</span>
            </div>
            <div className="flex gap-6 text-[13px] text-ink-tertiary">
              <Link href="/pricing" className="hover:text-ink transition-colors">{l.viewPricing}</Link>
              <Link href="/dashboard" className="hover:text-ink transition-colors">{l.login}</Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border">
            <div className="flex flex-wrap justify-center gap-4 text-[12px] text-ink-tertiary">
              <Link href="/terms" className="hover:text-ink transition-colors">{l.terms}</Link>
              <Link href="/privacy" className="hover:text-ink transition-colors">{l.privacy}</Link>
              <Link href="/refund" className="hover:text-ink transition-colors">{l.refund}</Link>
            </div>
            <div className="text-[12px] text-ink-tertiary">&copy; 2026 HSK Master. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
