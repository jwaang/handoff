import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet & House Sitter Guides",
  description:
    "Practical guides for pet owners and homeowners: sitter checklists, instruction templates, welcome packs, and more. Everything you need to prepare for your next trip.",
  alternates: {
    canonical: "https://vadem.app/guides",
  },
  openGraph: {
    title: "Pet & House Sitter Guides | Vadem",
    description:
      "Practical guides for pet owners and homeowners: sitter checklists, instruction templates, welcome packs, and more.",
    url: "https://vadem.app/guides",
  },
};

const guides = [
  {
    href: "/guides/pet-sitter-checklist",
    title: "The Complete Pet Sitter Checklist (2026)",
    description:
      "Everything your pet sitter needs to know, organized into one printable checklist. Covers feeding, medication, exercise, emergencies, and daily routines.",
    keyword: "Pet sitter checklist",
  },
  {
    href: "/guides/house-sitter-instructions-template",
    title: "House Sitter Instructions Template: What to Include",
    description:
      "A room-by-room template for writing clear house sitting instructions. Covers appliances, security, mail, plants, and neighborhood info.",
    keyword: "Instructions template",
  },
  {
    href: "/guides/what-to-leave-for-pet-sitter",
    title: "What to Leave for Your Pet Sitter: The Complete List",
    description:
      "The complete list of supplies, documents, and information to leave out for your pet sitter before you travel.",
    keyword: "What to leave",
  },
  {
    href: "/guides/house-sitter-welcome-pack",
    title: "How to Create a House Sitter Welcome Pack",
    description:
      "Make your house sitter feel at home from day one. A step-by-step guide to assembling a thoughtful welcome pack.",
    keyword: "Welcome pack",
  },
  {
    href: "/guides/pet-medication-instructions",
    title: "How to Write Pet Medication Instructions for Your Sitter",
    description:
      "Write medication instructions your sitter can follow confidently. Covers dosages, schedules, storage, and what to do if a dose is missed.",
    keyword: "Medication instructions",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pet & House Sitter Guides",
  description:
    "Practical guides for pet owners and homeowners preparing for sitters.",
  url: "https://vadem.app/guides",
  publisher: {
    "@type": "Organization",
    name: "Vadem",
    url: "https://vadem.app",
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="font-display text-4xl text-text-primary mb-3">
        Pet &amp; House Sitter Guides
      </h1>
      <p className="font-body text-base text-text-secondary leading-relaxed mb-10">
        Practical, actionable guides for pet owners and homeowners. Whether
        you&apos;re leaving your dog with a friend or handing your house keys to
        a professional sitter, these guides help you prepare everything they need
        to know.
      </p>

      <div className="flex flex-col gap-4">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group block bg-bg-raised border border-border-default rounded-lg px-5 py-5 transition-[box-shadow,translate] duration-150 hover:shadow-sm hover:-translate-y-0.5"
          >
            <span className="inline-block font-body text-xs font-semibold text-primary bg-primary-subtle rounded-pill px-2.5 py-0.5 mb-2">
              {guide.keyword}
            </span>
            <h2 className="font-display text-xl text-text-primary mb-1.5 group-hover:text-primary transition-colors duration-150">
              {guide.title}
            </h2>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-primary-subtle border border-primary-light rounded-xl px-6 py-6 text-center">
        <p className="font-display text-xl text-text-primary mb-2">
          Or skip the templates
        </p>
        <p className="font-body text-sm text-text-secondary mb-4">
          Create a Vadem in 10 minutes. One link with everything your sitter
          needs — care instructions, emergency contacts, daily schedules, and
          secure access codes.
        </p>
        <Link
          href="/signup"
          className="inline-block font-body text-sm font-semibold bg-primary text-text-on-primary px-6 py-3 rounded-md btn btn-primary transition-[translate,box-shadow,background-color] duration-150 hover:bg-primary-hover"
        >
          Get started free
        </Link>
      </div>
    </>
  );
}
