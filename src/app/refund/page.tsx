import Link from "next/link";

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-jade">HSK</span>
            <span className="text-[15px] font-semibold text-ink">Master</span>
          </Link>
          <Link href="/" className="text-[13px] text-ink-tertiary hover:text-ink transition-colors">Back</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink">Refund Policy</h1>
        <p className="mt-2 text-[13px] text-ink-tertiary">Last updated: October 13, 2026</p>

        <div className="mt-10 space-y-8 text-[14px] text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">Free Trial</h2>
            <p>HSK Master offers a free trial period for new users. During the trial, you have full access to all features. You will not be charged until the trial period ends. You may cancel at any time during the trial without being charged.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">Refund Eligibility</h2>
            <p>If you are not satisfied with HSK Master, you may request a full refund within <strong>7 days</strong> of your first payment. This applies to all subscription plans (monthly, semi-annual, and annual).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">How to Request a Refund</h2>
            <p>To request a refund, email us at <a href="mailto:support@hskmaster.com" className="text-jade hover:underline">support@hskmaster.com</a> with:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Your account email address.</li>
              <li>The reason for the refund (optional, helps us improve).</li>
              <li>Your payment confirmation or transaction ID.</li>
            </ul>
            <p className="mt-3">We process refunds within 5-10 business days. The refund will be returned to your original payment method.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">After the 7-Day Window</h2>
            <p>Refunds after the 7-day window are handled on a case-by-case basis. We may offer a refund or credit in cases such as:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Extended service outages or technical issues preventing access.</li>
              <li>Accidental duplicate payments.</li>
              <li>Unauthorized charges (with appropriate verification).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">Cancellation</h2>
            <p>You can cancel your subscription at any time from your account settings. After cancellation:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>You retain access until the end of your current billing period.</li>
              <li>No further charges will be made.</li>
              <li>Your study progress is preserved and available if you resubscribe.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">Plan Changes</h2>
            <p>If you switch from a longer plan (annual) to a shorter plan (monthly), the remaining balance from your current plan will be credited toward the new plan. Upgrades to a longer plan are prorated for the remaining period.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">Contact</h2>
            <p>For billing or refund questions, contact us at <a href="mailto:support@hskmaster.com" className="text-jade hover:underline">support@hskmaster.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
