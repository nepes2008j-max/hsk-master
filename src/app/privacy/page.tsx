import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-primary">HSK</span>
            <span className="text-[15px] font-semibold text-ink">Master</span>
          </Link>
          <Link href="/" className="text-[13px] text-ink-tertiary hover:text-ink transition-colors">Back</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-[13px] text-ink-tertiary">Last updated: October 13, 2026</p>

        <div className="mt-10 space-y-8 text-[14px] text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">1. Information We Collect</h2>
            <p className="font-medium text-ink mb-2">Information you provide:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Account information (email address, display name) when you register.</li>
              <li>Payment information processed through our third-party payment provider. We do not store your full credit card or payment details.</li>
              <li>Study content you create (custom flashcards, deck names).</li>
            </ul>
            <p className="font-medium text-ink mb-2 mt-4">Information collected automatically:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Usage data: pages visited, features used, study session duration, test scores.</li>
              <li>Device information: browser type, operating system, screen size.</li>
              <li>Cookies and local storage for session management and preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and improve the Service, including personalized study recommendations.</li>
              <li>To process payments and manage your subscription.</li>
              <li>To send you account-related communications (billing confirmations, service updates).</li>
              <li>To analyze usage patterns and improve our content and features.</li>
              <li>To detect and prevent fraud or abuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">3. Data Storage</h2>
            <p>Your study progress (vocabulary learned, test scores, flashcard states) is stored locally on your device using browser storage (IndexedDB). This data stays on your device and is not transmitted to our servers unless you opt into cloud sync. Account and subscription data is stored on our secure servers.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share limited data with:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Payment processors</strong> to handle subscription billing.</li>
              <li><strong>Analytics services</strong> to understand usage patterns (aggregated, non-identifiable data).</li>
              <li><strong>Law enforcement</strong> when required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">5. Cookies and Tracking</h2>
            <p>We use essential cookies for session management and authentication. We may use analytics cookies to understand how the Service is used. You can disable non-essential cookies in your browser settings without affecting core functionality.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Correct</strong> inaccurate personal data.</li>
              <li><strong>Delete</strong> your account and associated data.</li>
              <li><strong>Export</strong> your study data.</li>
              <li><strong>Opt out</strong> of marketing communications.</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:privacy@hskmaster.com" className="text-primary hover:underline">privacy@hskmaster.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">7. Data Retention</h2>
            <p>We retain your account data for as long as your account is active. After account deletion, we remove your personal data within 30 days, except where we are required to retain it for legal or regulatory purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">8. Security</h2>
            <p>We implement industry-standard security measures to protect your data, including encryption in transit (TLS) and at rest. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">9. Children&apos;s Privacy</h2>
            <p>HSK Master is not directed at children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal data, contact us to have it removed.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">10. International Users</h2>
            <p>If you are accessing HSK Master from the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability and the right to restrict processing. We process your data based on contractual necessity (providing the Service) and legitimate interests (improving the Service). For EU-specific requests, contact <a href="mailto:privacy@hskmaster.com" className="text-primary hover:underline">privacy@hskmaster.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of material changes via email or in-app notification. Continued use of the Service after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">12. Contact</h2>
            <p>For privacy-related questions or requests, contact us at <a href="mailto:privacy@hskmaster.com" className="text-primary hover:underline">privacy@hskmaster.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
