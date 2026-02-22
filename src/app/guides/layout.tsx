import Link from "next/link";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-bg">
      <header className="border-b border-border-default/50 bg-bg/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl text-text-primary hover:text-primary transition-colors duration-150"
          >
            Vadem
          </Link>
          <Link
            href="/guides"
            className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            All guides
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">{children}</main>

      <footer className="border-t border-border-default">
        <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col gap-4">
          <nav
            aria-label="Footer"
            className="flex items-center gap-5 flex-wrap"
          >
            <Link
              href="/"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Home
            </Link>
            <Link
              href="/guides"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Guides
            </Link>
            <Link
              href="/signup"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Sign up
            </Link>
            <Link
              href="/privacy"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              Terms
            </Link>
          </nav>
          <p className="font-body text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Vadem. Made with care for people
            who care.
          </p>
        </div>
      </footer>
    </div>
  );
}
