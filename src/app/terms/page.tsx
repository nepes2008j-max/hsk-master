import Link from "next/link";

export default function TermsPage() {
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
        <h1 className="text-2xl sm:text-3xl font-bold text-ink">Terms of Service</h1>
        <p className="mt-2 text-[13px] text-ink-tertiary">Last updated: October 13, 2026</p>

        <div className="mt-10 space-y-8 text-[14px] text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using HSK Master (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">2. Description of Service</h2>
            <p>HSK Master is a web-based language learning application that provides Chinese language study tools, including vocabulary, grammar, character practice, flashcards, and mock HSK exams. The Service is offered as a paid subscription.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">3. Account Registration</h2>
            <p>You may need to create an account to use certain features. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. You must provide accurate information and promptly update it if it changes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">4. Subscriptions and Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>HSK Master offers paid subscription plans billed monthly, semi-annually, or annually.</li>
              <li>All fees are in Chinese Yuan (CNY) and are non-refundable except as described in our <Link href="/refund" className="text-jade hover:underline">Refund Policy</Link>.</li>
              <li>Subscriptions auto-renew at the end of each billing cycle. You may cancel at any time before the next renewal date.</li>
              <li>We reserve the right to change pricing with 30 days&apos; notice. Price changes do not affect your current billing cycle.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Use the Service for any unlawful purpose.</li>
              <li>Copy, redistribute, or sell any content from the Service.</li>
              <li>Attempt to reverse-engineer, scrape, or interfere with the Service.</li>
              <li>Share your account credentials with others or allow multiple people to use a single account.</li>
              <li>Use automated tools (bots, scrapers) to access the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">6. Intellectual Property</h2>
            <p>All content, design, code, and data on HSK Master is owned by us or our licensors. HSK exam format and content structure is referenced for educational purposes under fair use. You retain ownership of any custom flashcards or content you create.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">7. Disclaimer of Warranties</h2>
            <p>The Service is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or that it will meet your specific learning goals. HSK Master is a study aid and does not guarantee exam results.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, HSK Master and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to loss of data or exam failure.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">9. Termination</h2>
            <p>We may suspend or terminate your access if you violate these Terms. You may cancel your subscription at any time through your account settings. Upon termination, your right to access the Service ceases, but we may retain your data for a reasonable period.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">10. Age Requirement</h2>
            <p>You must be at least 13 years old to use HSK Master. If you are under 18, you must have a parent or guardian&apos;s consent to use the Service and agree to these Terms on your behalf.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">11. Governing Law</h2>
            <p>These Terms are governed by applicable law. Any disputes arising from or related to these Terms or the Service shall be resolved through good-faith negotiation first. If negotiation fails, disputes will be submitted to binding arbitration or the competent courts in the jurisdiction where HSK Master operates.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">12. Changes to Terms</h2>
            <p>We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms. We will notify users of material changes via email or in-app notification.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">13. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:support@hskmaster.com" className="text-jade hover:underline">support@hskmaster.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
