import Link from "next/link";

/* ── Section ─────────────────────────────────────────────────────────── */

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="font-display text-2xl text-text-primary mb-4">{title}</h2>
      <div className="font-body text-base text-text-secondary leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:text-text-secondary">
        {children}
      </div>
    </section>
  );
}

/* ── Checklist ───────────────────────────────────────────────────────── */

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 !list-none !pl-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 bg-bg-raised border border-border-default rounded-lg px-4 py-3 !text-text-primary"
        >
          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-sm border-2 border-border-strong flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-secondary"
            >
              <path
                d="M2.5 6L5 8.5L9.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-body text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Callout ─────────────────────────────────────────────────────────── */

export function Callout({
  emoji = "💡",
  children,
}: {
  emoji?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-accent-subtle border border-accent-light rounded-lg px-5 py-4 flex gap-3">
      <span className="shrink-0 text-lg" aria-hidden="true">
        {emoji}
      </span>
      <div className="font-body text-sm text-text-primary leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </div>
  );
}

/* ── GuideNav (table of contents) ────────────────────────────────────── */

export function GuideNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav className="bg-bg-raised border border-border-default rounded-lg p-5 mb-10">
      <p className="font-body text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">
        In this guide
      </p>
      <ol className="space-y-2 !list-none !pl-0">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="font-body text-sm text-text-secondary hover:text-primary transition-colors duration-150 flex items-center gap-2"
            >
              <span className="shrink-0 w-5 h-5 rounded-full bg-bg-sunken text-text-muted font-body text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── RelatedGuides ───────────────────────────────────────────────────── */

interface GuideLink {
  href: string;
  title: string;
}

export function RelatedGuides({ guides }: { guides: GuideLink[] }) {
  return (
    <div className="border-t border-border-default pt-8 mt-12">
      <p className="font-body text-xs font-semibold text-text-muted uppercase tracking-wide mb-4">
        Related guides
      </p>
      <div className="flex flex-col gap-2">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="font-body text-sm text-primary hover:text-primary-hover transition-colors duration-150 underline underline-offset-2"
          >
            {guide.title} &rarr;
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── CtaBanner (mid-article CTA) ─────────────────────────────────────── */

export function CtaBanner() {
  return (
    <div className="bg-primary-subtle border border-primary-light rounded-xl px-6 py-6 text-center my-10">
      <p className="font-display text-xl text-text-primary mb-2">
        Or skip the template
      </p>
      <p className="font-body text-sm text-text-secondary mb-4">
        Create a Vadem in 10 minutes. One link with everything your sitter
        needs.
      </p>
      <Link
        href="/signup"
        className="inline-block font-body text-sm font-semibold bg-primary text-text-on-primary px-6 py-3 rounded-md btn btn-primary transition-[translate,box-shadow,background-color] duration-150 hover:bg-primary-hover"
      >
        Get started free
      </Link>
    </div>
  );
}
