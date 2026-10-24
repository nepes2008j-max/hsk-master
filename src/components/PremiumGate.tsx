"use client";

import Link from "next/link";
import { useSubscription } from "@/hooks/useSubscription";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";
import type { ReactNode } from "react";

export default function PremiumGate({ children, feature }: { children: ReactNode; feature?: string }) {
  const { isPremium, trialDaysLeft, loading } = useSubscription();
  const { user } = useAuth();
  const { t } = useLang();

  if (loading) return null;
  if (isPremium) return <>{children}</>;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-ink">{t.premiumGate.title}</h2>
      <p className="mt-2 text-[14px] text-ink-secondary max-w-sm">
        {feature ? `${feature} — ` : ""}{t.premiumGate.desc}
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {!user ? (
          <Link
            href="/settings"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-[14px] font-semibold transition-colors"
          >
            {t.premiumGate.signIn}
          </Link>
        ) : (
          <Link
            href="/pricing"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl text-[14px] font-semibold transition-colors"
          >
            {t.premiumGate.upgrade}
          </Link>
        )}
      </div>
    </div>
  );
}
