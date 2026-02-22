import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vadem collects, uses, and protects your personal information. Learn about our data practices for pet and house sitter care manuals.",
  alternates: {
    canonical: "https://vadem.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-bg">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-block font-display text-2xl text-primary mb-10"
        >
          Vadem
        </Link>

        <h1 className="font-display text-4xl text-text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-text-muted mb-10">
          Last updated: February 22, 2026
        </p>

        <div className="prose-vadem">
          <Section title="What we collect">
            <p>
              When you create a Vadem account, we collect your email address and
              authentication credentials. When you build a care manual, we store
              the content you provide: property details, pet profiles, care
              instructions, photos, emergency contacts, and vault items.
            </p>
            <p>
              For sitters who verify their phone number to access vault items, we
              collect the phone number solely for SMS verification. We do not use
              it for marketing.
            </p>
          </Section>

          <Section title="How we use your data">
            <p>We use your data to:</p>
            <ul>
              <li>Provide and operate the Vadem service</li>
              <li>
                Share your care manual with sitters via the link you generate
              </li>
              <li>Send SMS verification codes for vault access</li>
              <li>Send push notifications you opt into (task completions, vault access)</li>
              <li>Improve the service based on usage patterns</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your data
              for advertising.
            </p>
          </Section>

          <Section title="Vault encryption">
            <p>
              Vault items (door codes, WiFi passwords, alarm codes) are
              encrypted client-side with AES-256-GCM before being stored. Our
              servers never receive or store plaintext vault values. Sitters must
              verify their phone number via SMS to decrypt vault items, and
              access auto-expires when your trip ends.
            </p>
          </Section>

          <Section title="Data sharing">
            <p>
              Your care manual content is shared only with people who have your
              unique sitter link. You can regenerate this link at any time to
              revoke all existing access.
            </p>
            <p>We use the following third-party services:</p>
            <ul>
              <li>
                <strong>Convex</strong> — database and real-time sync
              </li>
              <li>
                <strong>Vercel</strong> — hosting and content delivery
              </li>
              <li>
                <strong>Prelude</strong> — SMS verification for vault access
              </li>
              <li>
                <strong>Google / Apple</strong> — OAuth sign-in (if you choose
                social login)
              </li>
            </ul>
          </Section>

          <Section title="Data retention">
            <p>
              Your account data and care manuals are stored as long as your
              account is active. Trip activity logs and vault access records are
              retained for the duration of your account. You can delete your
              account and all associated data by contacting us.
            </p>
          </Section>

          <Section title="Cookies and local storage">
            <p>
              We use a session cookie to keep you signed in. Sitter views use
              local storage and service worker caching for offline access. We do
              not use third-party tracking cookies.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You can request access to, correction of, or deletion of your
              personal data at any time by emailing us. If you are in the EU, UK,
              or California, you have additional rights under GDPR, UK GDPR, or
              CCPA respectively.
            </p>
          </Section>

          <Section title="Children">
            <p>
              Vadem is not directed at children under 13. We do not knowingly
              collect personal information from children.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. We will notify you of
              material changes via email or an in-app notice.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this privacy policy? Email us at{" "}
              <a
                href="mailto:privacy@vadem.app"
                className="text-primary hover:text-primary-hover transition-colors duration-150"
              >
                privacy@vadem.app
              </a>
              .
            </p>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-border-default">
          <nav className="flex items-center gap-5">
            <Link
              href="/"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Home
            </Link>
            <Link
              href="/terms"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="font-display text-2xl text-text-primary mb-3">{title}</h2>
      <div className="font-body text-base text-text-secondary leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:text-text-secondary">
        {children}
      </div>
    </section>
  );
}
