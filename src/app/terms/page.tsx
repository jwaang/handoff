import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for using Vadem, the care manual platform for pet and house sitters.",
  alternates: {
    canonical: "https://vadem.app/terms",
  },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="font-body text-sm text-text-muted mb-10">
          Last updated: February 22, 2026
        </p>

        <div className="prose-vadem">
          <Section title="Acceptance of terms">
            <p>
              By creating a Vadem account or using the service, you agree to
              these terms. If you do not agree, do not use Vadem.
            </p>
          </Section>

          <Section title="What Vadem is">
            <p>
              Vadem is a web-based platform that lets you create care manuals for
              pet and house sitters, then share them via a unique link. The
              sitter view works in any browser without downloading an app or
              creating an account.
            </p>
          </Section>

          <Section title="Your account">
            <p>
              You are responsible for maintaining the security of your account
              credentials. You are responsible for all activity that occurs under
              your account. Notify us immediately if you suspect unauthorized
              access.
            </p>
          </Section>

          <Section title="Your content">
            <p>
              You retain ownership of all content you create on Vadem, including
              care instructions, photos, pet profiles, and vault items. By using
              the service, you grant us a limited license to store, process, and
              transmit your content as needed to operate the service.
            </p>
            <p>
              You are solely responsible for the accuracy of your care
              instructions. Vadem is a communication tool and does not verify the
              correctness of care instructions or assume responsibility for
              outcomes.
            </p>
          </Section>

          <Section title="Sitter links and access">
            <p>
              When you generate a sitter link, anyone with that link can view
              your care manual (excluding encrypted vault items, which require
              phone verification). You are responsible for sharing links only
              with intended recipients. You can revoke access at any time by
              regenerating the link.
            </p>
          </Section>

          <Section title="Vault items">
            <p>
              Vault items are encrypted client-side before storage. Vadem cannot
              access or recover plaintext vault values. Vault access requires SMS
              phone verification and auto-expires at the end of your trip. You
              are responsible for keeping vault contents accurate and up to date.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>You agree not to:</p>
            <ul>
              <li>Use Vadem for any unlawful purpose</li>
              <li>Attempt to access other users&apos; accounts or data</li>
              <li>
                Reverse engineer, decompile, or otherwise attempt to extract
                source code
              </li>
              <li>
                Use automated systems to scrape or extract data from the service
              </li>
              <li>Upload malicious content or files</li>
            </ul>
          </Section>

          <Section title="Service availability">
            <p>
              We aim to keep Vadem available at all times, but we do not
              guarantee uninterrupted service. We may perform maintenance,
              updates, or experience outages. We are not liable for any loss
              resulting from service interruptions.
            </p>
          </Section>

          <Section title="Pricing">
            <p>
              Vadem is currently free during early access. We will provide
              advance notice before introducing any paid features or changing
              pricing. Existing functionality available during early access will
              remain available to early users.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              Vadem is provided &ldquo;as is&rdquo; without warranties of any
              kind. We are not liable for any indirect, incidental, or
              consequential damages arising from your use of the service. Our
              total liability is limited to the amount you have paid us in the 12
              months preceding the claim, or $50, whichever is greater.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              You may delete your account at any time. We may suspend or
              terminate your account if you violate these terms. Upon
              termination, your data will be deleted in accordance with our
              privacy policy.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may update these terms from time to time. We will notify you of
              material changes via email or an in-app notice. Continued use of
              the service after changes constitutes acceptance.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These terms are governed by the laws of the United States. Any
              disputes will be resolved in the courts of the state where Vadem is
              headquartered.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms? Email us at{" "}
              <a
                href="mailto:legal@vadem.app"
                className="text-primary hover:text-primary-hover transition-colors duration-150"
              >
                legal@vadem.app
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
              href="/privacy"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Privacy
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
