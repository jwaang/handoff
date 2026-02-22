import type { Metadata } from "next";
import Link from "next/link";

import {
  Section,
  Checklist,
  Callout,
  GuideNav,
  RelatedGuides,
  CtaBanner,
} from "../_components";

export const metadata: Metadata = {
  title: "The Complete Pet Sitter Checklist (2026)",
  description:
    "A printable pet sitter checklist covering feeding, medication, exercise, house rules, and emergency contacts. Everything your sitter needs in one place.",
  alternates: {
    canonical: "https://vadem.app/guides/pet-sitter-checklist",
  },
  openGraph: {
    title: "The Complete Pet Sitter Checklist (2026) | Vadem",
    description:
      "A printable pet sitter checklist covering feeding, medication, exercise, house rules, and emergency contacts. Everything your sitter needs in one place.",
    url: "https://vadem.app/guides/pet-sitter-checklist",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://vadem.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://vadem.app/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "The Complete Pet Sitter Checklist (2026)",
      item: "https://vadem.app/guides/pet-sitter-checklist",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Pet Sitter Checklist (2026)",
  description:
    "A printable pet sitter checklist covering feeding, medication, exercise, house rules, and emergency contacts. Everything your sitter needs in one place.",
  datePublished: "2026-02-22",
  dateModified: "2026-02-22",
  author: {
    "@type": "Organization",
    name: "Vadem",
    url: "https://vadem.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Vadem",
    url: "https://vadem.app",
  },
};

const navItems = [
  { id: "why-you-need-a-checklist", label: "Why you need a pet sitter checklist" },
  { id: "basic-pet-information", label: "Basic pet information" },
  { id: "feeding-instructions", label: "Feeding instructions" },
  { id: "medication-and-health", label: "Medication and health" },
  { id: "daily-routine-and-exercise", label: "Daily routine and exercise" },
  { id: "house-rules-and-boundaries", label: "House rules and boundaries" },
  { id: "emergency-contacts-and-vet-info", label: "Emergency contacts and vet info" },
  { id: "where-to-keep-the-checklist", label: "Where to keep the checklist" },
];

const linkClass =
  "text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150";

export default function PetSitterChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <h1 className="font-display text-4xl text-text-primary mb-4">
        The Complete Pet Sitter Checklist (2026)
      </h1>

      <p className="font-body text-base text-text-secondary leading-relaxed mb-8">
        A good pet sitter checklist is the difference between a relaxing trip and
        a phone buzzing with questions every few hours. Whether you&apos;re
        leaving your dog with a neighbor, hiring a professional, or asking a
        family member to stop by twice a day, your sitter needs the same thing:
        clear, organized information about your pet&apos;s care. This guide
        walks you through every detail worth writing down, with concrete examples
        you can adapt for your own household.
      </p>

      <GuideNav items={navItems} />

      {/* ── Section 1 ──────────────────────────────────────────────────────── */}

      <Section id="why-you-need-a-checklist" title="Why you need a pet sitter checklist">
        <p>
          You already know how to care for your pet. The problem is that most of
          that knowledge lives in your head, scattered across habits you
          don&apos;t even think about anymore. You know that Cooper gets anxious
          when the recycling truck comes on Tuesday mornings. You know the
          kitchen cabinet with the treats has a sticky latch. Your sitter
          doesn&apos;t.
        </p>
        <p>
          Without a written checklist, sitters fill in the gaps with guesswork.
          They might feed the cat twice because they weren&apos;t sure if their
          partner already did it. They might skip a medication because they
          didn&apos;t realize the small brown pill in the drawer was for the dog.
          They might panic when the dog throws up after eating grass, which is
          something your vet has already told you is normal.
        </p>
        <p>
          A checklist isn&apos;t about micromanaging. It&apos;s about giving your
          sitter the confidence to handle every situation without needing to call
          you. That&apos;s better for them, better for your pets, and
          dramatically better for your peace of mind.
        </p>
        <p>
          The checklist below covers the eight areas that matter most. You
          probably won&apos;t need every single item, but scanning through them
          will remind you of things you might otherwise forget to mention.
        </p>
      </Section>

      {/* ── Section 2 ──────────────────────────────────────────────────────── */}

      <Section id="basic-pet-information" title="Basic pet information">
        <p>
          Start with the basics. This might feel obvious, but if your sitter has
          never met your pet (or is caring for multiple animals), having it
          written down prevents mix-ups.
        </p>

        <Checklist
          items={[
            "Pet's full name and any nicknames they respond to",
            "Species, breed, age, and weight",
            "Color and distinguishing features (helpful if the pet escapes)",
            "Microchip number and registration company",
            "Spayed/neutered status",
            "Photo of each pet (a recent one, not the puppy photo)",
          ]}
        />

        <p>
          For multi-pet households, label everything clearly. Something like
          &quot;Luna (grey tabby, 9 lbs)&quot; and &quot;Milo (orange tabby, 14
          lbs)&quot; makes it easy to tell whose food is whose, especially if
          they eat different diets.
        </p>

        <Callout emoji="📸">
          Include a clear, current photo of each pet. If a pet gets loose, your
          sitter can share it immediately on neighborhood apps and flyers instead
          of searching through your social media.
        </Callout>
      </Section>

      {/* ── Section 3 ──────────────────────────────────────────────────────── */}

      <Section id="feeding-instructions" title="Feeding instructions">
        <p>
          Feeding is where most sitters have the most questions, especially
          with pets that are picky, on special diets, or have allergies. Be
          specific about amounts. &quot;A scoop&quot; means different things to
          different people.
        </p>

        <Checklist
          items={[
            "Brand and type of food (dry, wet, raw) for each pet",
            "Exact amount per meal (cups, grams, or cans)",
            "Feeding times and location",
            "Where food is stored and how to prep it",
            "Water bowl locations and how often to refresh",
            "Treats: which ones, how many per day, and any off-limits snacks",
            "Human foods the pet absolutely cannot have",
            "Any food allergies or sensitivities",
          ]}
        />

        <p>
          A concrete example is more useful than a vague one. Instead of writing
          &quot;feed twice a day,&quot; try something like:
        </p>
        <ul>
          <li>
            <strong>Breakfast (7:30 AM):</strong> 3/4 cup of Orijen Original
            kibble + 1 tablespoon pumpkin puree, mixed in the metal bowl by the
            back door.
          </li>
          <li>
            <strong>Dinner (5:30 PM):</strong> Same as breakfast, plus half a
            can of Weruva Paw Lickin&apos; Chicken on top.
          </li>
          <li>
            <strong>Treats:</strong> Up to 3 Zuke&apos;s Mini Naturals per day.
            No rawhide, no chocolate, no grapes.
          </li>
        </ul>

        <Callout emoji="🐱">
          For cats, note whether they free-feed or get measured meals. If you
          have a cat that inhales food and one that grazes, explain the system
          you use to prevent one from eating the other&apos;s share (separate
          rooms, timed feeders, elevated bowls, etc.).
        </Callout>
      </Section>

      {/* ── Section 4 ──────────────────────────────────────────────────────── */}

      <Section id="medication-and-health" title="Medication and health">
        <p>
          Medication instructions deserve extra care. A missed dose or wrong
          amount can have real consequences, and most sitters are understandably
          nervous about getting this right. For a deeper dive on this topic, see
          our{" "}
          <Link href="/guides/pet-medication-instructions" className={linkClass}>
            guide to writing pet medication instructions
          </Link>
          .
        </p>

        <Checklist
          items={[
            "Name of each medication and what it treats",
            "Dosage (exact amount, e.g., '1/2 tablet' or '0.5 mL')",
            "Schedule (time of day, with or without food)",
            "How to administer (in food, pill pocket, syringe, ear drops)",
            "Where medication is stored",
            "What to do if a dose is missed",
            "Side effects to watch for",
            "Known allergies (medications and environmental)",
            "Date of last vet visit and any upcoming appointments",
          ]}
        />

        <p>
          Again, specifics matter. Instead of &quot;give allergy meds in the
          morning,&quot; write:
        </p>
        <ul>
          <li>
            <strong>Apoquel (allergy):</strong> Luna gets 1/2 tablet (8 mg)
            with breakfast. Hide it in a Greenies Pill Pocket. She&apos;ll spit
            it out if you just drop it in the bowl.
          </li>
          <li>
            <strong>If missed:</strong> Give it as soon as you remember unless
            it&apos;s within 4 hours of the next dose. In that case, skip it and
            resume the normal schedule.
          </li>
        </ul>

        <p>
          Even if your pet isn&apos;t on medication right now, note any chronic
          conditions (arthritis, seizure history, sensitive stomach) so your
          sitter has context if something comes up.
        </p>
      </Section>

      <CtaBanner />

      {/* ── Section 5 ──────────────────────────────────────────────────────── */}

      <Section id="daily-routine-and-exercise" title="Daily routine and exercise">
        <p>
          Pets thrive on routine. The more closely your sitter can follow
          your pet&apos;s normal schedule, the less stressed everyone will be.
          Write out a typical day, even if it feels mundane. What&apos;s obvious
          to you is new information to them.
        </p>

        <Checklist
          items={[
            "Morning routine (wake up, potty, feeding, etc.)",
            "Walk schedule: when, how long, which route",
            "Leash and harness details (which hook, which leash, any pulling habits)",
            "Off-leash rules: where it's allowed and any recall commands",
            "Playtime preferences and favorite toys",
            "Nap and rest patterns during the day",
            "Evening wind-down routine and bedtime",
            "Where the pet sleeps (crate, bed, couch, your bed)",
          ]}
        />

        <p>
          A sample daily schedule might look like this:
        </p>
        <ul>
          <li>
            <strong>7:00 AM:</strong> Let out into the backyard. He&apos;ll bark
            once at the back door when he&apos;s ready to come in.
          </li>
          <li>
            <strong>7:30 AM:</strong> Breakfast (see feeding section).
          </li>
          <li>
            <strong>8:30 AM:</strong> Walk, 25-30 minutes. We usually go left on
            Maple St toward the park. He pulls toward squirrels but responds to
            &quot;leave it.&quot;
          </li>
          <li>
            <strong>12:00 PM:</strong> Quick backyard break, 5 minutes.
          </li>
          <li>
            <strong>5:00 PM:</strong> Second walk, 20 minutes. Any route is
            fine.
          </li>
          <li>
            <strong>5:30 PM:</strong> Dinner.
          </li>
          <li>
            <strong>9:00 PM:</strong> Last potty break. He sleeps in his crate in
            the bedroom with the door closed but not latched.
          </li>
        </ul>

        <Callout>
          If your pet has separation anxiety or reacts to specific triggers
          (thunderstorms, fireworks, the doorbell), describe what happens and
          what helps. For example: &quot;Rosie hides under the bed during
          storms. Don&apos;t try to pull her out. Just leave the closet light on
          and put on a podcast at low volume. She&apos;ll come out when
          it&apos;s over.&quot;
        </Callout>
      </Section>

      {/* ── Section 6 ──────────────────────────────────────────────────────── */}

      <Section id="house-rules-and-boundaries" title="House rules and boundaries">
        <p>
          Every pet has rules, and your sitter can&apos;t follow them if they
          don&apos;t know what they are. This section prevents the well-meaning
          sitter from letting your dog on the couch for the first time, then
          having to deal with a dog that refuses to get off it for the rest of
          the trip.
        </p>

        <Checklist
          items={[
            "Rooms or areas that are off-limits",
            "Furniture rules (allowed on the couch? the bed?)",
            "Door and gate rules (which doors stay closed, baby gates)",
            "Counter surfing, begging, or jumping habits to manage",
            "How to handle barking or whining",
            "Behavior with visitors or delivery people",
            "Rules for car rides (if applicable)",
            "Litter box location, type of litter, and cleaning frequency",
          ]}
        />

        <p>
          Be honest about your pet&apos;s bad habits. If your cat knocks things
          off the counter, say so. If your dog bolts for the door when it opens,
          your sitter absolutely needs to know that before they find out the hard
          way. Frame it as practical info, not as a warning.
        </p>

        <p>
          If you have a{" "}
          <Link href="/guides/house-sitter-instructions-template" className={linkClass}>
            house sitter staying overnight
          </Link>
          , include notes about household quirks too: which light switches
          control what, how to work the thermostat, where the flashlights are,
          and whether the smoke detector chirps when the battery is low (it
          probably does).
        </p>
      </Section>

      {/* ── Section 7 ──────────────────────────────────────────────────────── */}

      <Section
        id="emergency-contacts-and-vet-info"
        title="Emergency contacts and vet info"
      >
        <p>
          This is the section you hope your sitter never needs. But if they do
          need it, having it organized and accessible makes all the difference.
          Don&apos;t make them dig through your texts to find a number at 11 PM.
        </p>

        <Checklist
          items={[
            "Your phone number (and your partner's, if applicable)",
            "Primary veterinarian: name, clinic, address, phone number",
            "After-hours emergency vet: name, address, phone, hours",
            "Poison control hotline (ASPCA: 888-426-4435 in the US)",
            "A trusted neighbor or nearby friend who has a spare key",
            "Pet insurance provider and policy number (if applicable)",
            "Authorization note for emergency vet treatment",
          ]}
        />

        <p>
          That last item matters more than you might think. Some emergency
          clinics will hesitate to treat a pet if the person bringing them in
          isn&apos;t the registered owner. A simple written note saying &quot;I
          authorize [sitter name] to approve medical treatment for [pet name] in
          my absence&quot; with your signature and date can prevent delays. Ask
          your vet if they have a preferred format.
        </p>

        <Callout emoji="🚨">
          Tell your sitter what counts as an emergency (not eating for 24+ hours,
          difficulty breathing, seizures, bleeding that won&apos;t stop) versus
          what can wait until you&apos;re reachable (a small scrape, soft stool
          for one day, a skipped meal). This prevents both under-reacting and
          panicking.
        </Callout>
      </Section>

      {/* ── Section 8 ──────────────────────────────────────────────────────── */}

      <Section id="where-to-keep-the-checklist" title="Where to keep the checklist">
        <p>
          A checklist is only useful if your sitter can actually find it. The
          fridge-magnet approach works, but it&apos;s limited. Paper gets buried
          under takeout menus. Text messages get lost in the scroll. And if you
          have a sitter who visits twice a day, they need something they can
          reference from their phone while standing in your kitchen.
        </p>

        <p>
          Here are the most common approaches, with their trade-offs:
        </p>

        <ul>
          <li>
            <strong>Printed sheet on the counter:</strong> Simple, always
            visible, but hard to update. Works well for short trips with a sitter
            who&apos;s been to your home before.
          </li>
          <li>
            <strong>Shared Google Doc or Notes app:</strong> Easy to update, but
            your sitter needs to remember to check it. No structure beyond what
            you build yourself.
          </li>
          <li>
            <strong>A dedicated care manual:</strong> Organized, shareable, and
            designed for exactly this purpose. You write it once, update it as
            things change, and send a single link to any sitter, any time.
          </li>
        </ul>

        <p>
          That third option is what{" "}
          <Link href="/signup" className={linkClass}>
            Vadem
          </Link>{" "}
          is built for. You fill in your pet&apos;s info, daily routine,
          medication details, emergency contacts, and house rules. Your sitter
          gets a clean, mobile-friendly link with everything organized into tabs.
          Sensitive info (alarm codes, lockbox combos) stays encrypted and
          only unlocks after your sitter verifies with a PIN. No app download
          required.
        </p>

        <p>
          Whether you use Vadem, a spreadsheet, or a notebook on the counter,
          the key is making the information easy to find when your sitter
          needs it. Don&apos;t bury critical details (like the emergency vet
          number) three pages deep. Put the most time-sensitive info first.
        </p>

        <Callout>
          Want a head start? Check out our guide on{" "}
          <Link href="/guides/what-to-leave-for-pet-sitter" className={linkClass}>
            what to leave for your pet sitter
          </Link>{" "}
          for a companion list of physical items to set out alongside your
          written instructions.
        </Callout>
      </Section>

      {/* ── Wrap-up ────────────────────────────────────────────────────────── */}

      <section className="mb-10">
        <h2 className="font-display text-2xl text-text-primary mb-4">
          Putting it all together
        </h2>
        <div className="font-body text-base text-text-secondary leading-relaxed space-y-4">
          <p>
            You don&apos;t need to write a novel. A solid pet sitter checklist is
            usually two to three pages, organized so your sitter can scan it
            quickly and find what they need in the moment. If you cover the eight
            areas above, you&apos;ll handle 95% of the questions your sitter
            would otherwise text you about.
          </p>
          <p>
            The best time to write your checklist is before you need it. Sitting
            down the night before a flight and trying to remember your
            cat&apos;s microchip number while packing is not the move.
            Spend 30 minutes on it this weekend, save it somewhere you can
            update, and you&apos;ll have it ready for every trip going forward.
          </p>
          <p>
            Your sitter wants to do a good job. Give them the information to
            make that easy.
          </p>
        </div>
      </section>

      {/* ── Related guides ─────────────────────────────────────────────────── */}

      <RelatedGuides
        guides={[
          {
            href: "/guides/what-to-leave-for-pet-sitter",
            title: "What to Leave for Your Pet Sitter",
          },
          {
            href: "/guides/pet-medication-instructions",
            title: "How to Write Pet Medication Instructions",
          },
          {
            href: "/guides/house-sitter-instructions-template",
            title: "House Sitter Instructions Template",
          },
        ]}
      />
    </>
  );
}
