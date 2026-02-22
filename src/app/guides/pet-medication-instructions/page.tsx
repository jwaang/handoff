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
  title: "How to Write Pet Medication Instructions for Your Sitter",
  description:
    "A practical guide to writing pet medication instructions for your sitter. Covers dosages, schedules, administration tips, storage, missed doses, and emergencies.",
  alternates: {
    canonical: "https://vadem.app/guides/pet-medication-instructions",
  },
  openGraph: {
    title:
      "How to Write Pet Medication Instructions for Your Sitter | Vadem",
    description:
      "Write medication instructions your pet sitter can follow with confidence. Covers dosages, schedules, storage, and what to do if a dose is missed.",
    url: "https://vadem.app/guides/pet-medication-instructions",
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
      name: "How to Write Pet Medication Instructions for Your Sitter",
      item: "https://vadem.app/guides/pet-medication-instructions",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write Pet Medication Instructions for Your Sitter",
  description:
    "A practical guide to writing medication instructions your pet sitter can follow with confidence, covering dosages, schedules, storage, and missed doses.",
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
  { id: "why-it-matters", label: "Why clear medication instructions matter" },
  { id: "what-to-include", label: "What to include for each medication" },
  { id: "schedule", label: "How to write the schedule" },
  { id: "administration-tips", label: "Administration tips and tricks" },
  { id: "storage-and-refills", label: "Storage and refill information" },
  { id: "missed-dose", label: "What to do if a dose is missed" },
  { id: "emergencies", label: "Emergency medication situations" },
  { id: "staying-organized", label: "Keeping it all organized" },
];

export default function PetMedicationInstructionsPage() {
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

      <p className="font-body text-sm text-text-muted mb-3">
        <Link
          href="/guides"
          className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
        >
          Guides
        </Link>{" "}
        / Pet Medication Instructions
      </p>

      <h1 className="font-display text-4xl text-text-primary mb-4">
        How to Write Pet Medication Instructions for Your Sitter
      </h1>

      <p className="font-body text-base text-text-secondary leading-relaxed mb-8">
        Writing clear pet medication instructions for your sitter is one of the
        most important things you can do before a trip. A missed dose or the
        wrong amount can mean a flare-up, a seizure, or worse. Your sitter
        wants to get it right. They just need you to make it easy for them.
      </p>

      <GuideNav items={navItems} />

      {/* ── Section 1 ──────────────────────────────────────────────────── */}

      <Section id="why-it-matters" title="Why Clear Medication Instructions Matter">
        <p>
          Most pet sitters are perfectly capable of giving medication. The
          problem is almost never ability. It&apos;s ambiguity. &quot;Give
          Baxter his pill in the morning&quot; sounds simple, but it raises
          questions your sitter won&apos;t want to bother you about on
          vacation: Which pill? How many? Before or after breakfast? What
          if he spits it out?
        </p>
        <p>
          Vague instructions create anxiety. And anxious sitters second-guess
          themselves, skip doses they&apos;re unsure about, or text you at
          2 a.m. wondering if they did it wrong. None of that is good for
          your pet or your peace of mind.
        </p>
        <p>
          Clear, written instructions solve all of this. They give your
          sitter confidence and protect your pet&apos;s health. Even if
          you&apos;ve walked your sitter through everything in person, put
          it in writing anyway. People forget details under pressure,
          especially when they&apos;re caring for someone else&apos;s
          animal.
        </p>
        <Callout emoji="🐾">
          If your pet takes even one daily medication, written instructions
          are non-negotiable. For pets on multiple meds, they&apos;re
          essential. Your vet will thank you too if anything goes sideways.
        </Callout>
      </Section>

      {/* ── Section 2 ──────────────────────────────────────────────────── */}

      <Section id="what-to-include" title="What to Include for Each Medication">
        <p>
          For every medication your pet takes, your sitter needs the same
          core details. Think of it like a label on a prescription bottle,
          but written for a real human who doesn&apos;t know your pet&apos;s
          medical history.
        </p>
        <Checklist
          items={[
            "Medication name (brand and generic if possible)",
            "What it treats or prevents (e.g., \"thyroid regulation\", \"joint pain\")",
            "Exact dosage (number of pills, ml of liquid, drops, etc.)",
            "Frequency and timing (e.g., \"every 12 hours\" or \"twice daily with meals\")",
            "How to give it (with food, on empty stomach, hidden in a treat, applied topically)",
            "What the pill/liquid looks like (color, size, shape)",
            "Where it's stored (kitchen counter, fridge door, bathroom cabinet)",
            "Any side effects to watch for",
            "Your vet's name and phone number",
          ]}
        />
        <p>
          Here&apos;s what a complete entry looks like in practice:
        </p>
        <div className="bg-bg-raised border border-border-default rounded-lg px-5 py-4 font-body text-sm text-text-primary space-y-1">
          <p className="font-semibold">Luna &mdash; Apoquel (oclacitinib)</p>
          <p>
            <span className="text-text-muted">For:</span> Skin allergies /
            itching
          </p>
          <p>
            <span className="text-text-muted">Dose:</span> 1/2 tablet (8mg),
            once daily
          </p>
          <p>
            <span className="text-text-muted">When:</span> Every morning with
            breakfast
          </p>
          <p>
            <span className="text-text-muted">How:</span> Crush the half
            tablet and mix thoroughly into wet food. She won&apos;t eat it if
            she can taste it, so don&apos;t use kibble.
          </p>
          <p>
            <span className="text-text-muted">Looks like:</span> Small white
            round tablet, scored down the middle
          </p>
          <p>
            <span className="text-text-muted">Stored:</span> Kitchen counter,
            in the blue pill organizer next to the coffee maker
          </p>
          <p>
            <span className="text-text-muted">Watch for:</span> Vomiting or
            diarrhea (rare, but call vet if it happens)
          </p>
        </div>
        <p>
          That level of detail takes two minutes to write and saves your
          sitter from guessing. Notice how it includes the &quot;why&quot;
          behind administration choices. Your sitter doesn&apos;t need to
          know the pharmacology, but knowing &quot;she won&apos;t eat it if
          she tastes it&quot; is genuinely useful.
        </p>
      </Section>

      {/* ── Section 3 ──────────────────────────────────────────────────── */}

      <Section id="schedule" title="How to Write the Schedule">
        <p>
          If your pet takes one medication once a day, a schedule is
          straightforward. But plenty of pets take multiple meds at
          different times. This is where things get confusing fast.
        </p>
        <p>
          The best format is a simple time-based table. Don&apos;t organize
          by medication. Organize by when your sitter needs to act. They
          aren&apos;t thinking &quot;it&apos;s time for Baxter&apos;s
          carprofen.&quot; They&apos;re thinking &quot;it&apos;s morning,
          what do I need to give?&quot;
        </p>
        <p>Here&apos;s an example for a dog on three medications:</p>
        <div className="bg-bg-raised border border-border-default rounded-lg overflow-hidden font-body text-sm">
          <div className="grid grid-cols-3 bg-bg-sunken border-b border-border-default px-4 py-2 text-text-muted font-semibold text-xs uppercase tracking-wide">
            <span>Time</span>
            <span>Medication</span>
            <span>Notes</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3 border-b border-border-default text-text-primary">
            <span>7:30 AM</span>
            <span>Apoquel (1/2 tab)</span>
            <span>Crush into wet food</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3 border-b border-border-default text-text-primary">
            <span>7:30 AM</span>
            <span>Cosequin (1 chew)</span>
            <span>Give as treat, she loves these</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3 text-text-primary">
            <span>7:00 PM</span>
            <span>Carprofen (1 tab)</span>
            <span>With dinner, never on empty stomach</span>
          </div>
        </div>
        <Callout>
          Use actual clock times, not vague terms like &quot;morning&quot;
          or &quot;evening.&quot; Your 7 AM and your sitter&apos;s 7 AM
          might be very different. If timing flexibility exists, say so:
          &quot;Anywhere between 7-9 AM is fine.&quot;
        </Callout>
        <p>
          For pets with complex schedules (say, insulin injections plus oral
          meds plus ear drops), consider splitting the schedule into a
          morning routine and an evening routine. Walk your sitter through
          the exact sequence. &quot;First breakfast, then wait 10 minutes,
          then the injection, then the ear drops.&quot; Sequence matters
          more than people realize.
        </p>
      </Section>

      {/* ── Section 4 ──────────────────────────────────────────────────── */}

      <Section id="administration-tips" title="Administration Tips and Tricks">
        <p>
          You know your pet&apos;s quirks. Your sitter doesn&apos;t. This
          is where your instructions go from adequate to genuinely helpful.
          The tricks you&apos;ve learned over months or years of medicating
          your pet are gold. Write them down.
        </p>
        <p>
          <strong>For pills your pet resists:</strong> Describe exactly what
          works. &quot;Wrap it in a small piece of deli turkey and give it
          before dinner when he&apos;s hungry. If you give it after he
          eats, he&apos;ll spit it out.&quot; If you use a pill pocket
          brand, say which one and where it&apos;s kept. If your pet has
          outsmarted pill pockets, say that too.
        </p>
        <p>
          <strong>For liquid medications:</strong> Explain whether you use a
          syringe or a dropper, where to aim it (side of the mouth, back of
          the throat, mixed into food), and how to hold your pet. A photo
          or short video of you doing it is worth a thousand words. Leave
          it on your phone or shared album.
        </p>
        <p>
          <strong>For eye or ear drops:</strong> Describe your positioning.
          &quot;Sit on the floor with Milo between your legs, facing away
          from you. Tilt his head slightly and drop into the inner corner
          of his eye. He&apos;ll blink and shake his head, that&apos;s
          normal.&quot;
        </p>
        <p>
          <strong>For topical treatments:</strong> Mark the exact
          application spot. &quot;Part the fur between her shoulder blades
          and apply the full tube directly to the skin. Don&apos;t let the
          cats near her for 24 hours after application.&quot;
        </p>
        <p>
          <strong>For insulin injections:</strong> This deserves its own
          mini-tutorial. Include the injection site rotation, how to draw
          the correct dose, the angle of the needle, and what to do if
          you&apos;re not sure the full dose went in. If your vet offers
          to do a practice session with your sitter, take them up on it.
        </p>
        <Callout emoji="📱">
          Record a quick video of yourself giving each medication. Nothing
          fancy. Just your phone propped up on the counter. Your sitter
          can replay it as many times as they need.
        </Callout>
      </Section>

      <CtaBanner />

      {/* ── Section 5 ──────────────────────────────────────────────────── */}

      <Section id="storage-and-refills" title="Storage and Refill Information">
        <p>
          Where you store medications seems obvious to you, but your sitter
          is navigating an unfamiliar kitchen (or bathroom, or fridge). Be
          specific. &quot;In the fridge&quot; is not specific.
          &quot;Top shelf of the fridge, left side, in the small plastic
          bin labeled MEDS&quot; is specific.
        </p>
        <p>
          For each medication, note:
        </p>
        <ul>
          <li>
            <strong>Exact location:</strong> Room, shelf, container.
            Labeling the container helps enormously.
          </li>
          <li>
            <strong>Storage requirements:</strong> Room temperature,
            refrigerated, away from light? If a medication needs
            refrigeration and the power goes out, your sitter should know.
          </li>
          <li>
            <strong>Current supply:</strong> How many doses are left? Will
            it last the entire trip?
          </li>
          <li>
            <strong>Refill plan:</strong> If the supply might run out, leave
            a refill ready at the pharmacy or pre-authorize your sitter to
            pick it up. Include the pharmacy name, address, phone number,
            and the name the prescription is under (yours, not your
            pet&apos;s, at some pharmacies).
          </li>
        </ul>
        <Callout emoji="💊">
          Count out the doses before you leave. If your pet takes one pill
          per day and you&apos;re gone for 10 days, put 12 pills in the
          organizer (10 plus 2 extra in case one gets dropped or spit out).
          Tell your sitter the count so they can verify nothing was missed.
        </Callout>
        <p>
          If your pet takes compounded medication (custom-made by a
          specialty pharmacy), include the pharmacy&apos;s contact info
          separately. These can&apos;t be refilled at a regular pharmacy,
          and they often take days to prepare.
        </p>
      </Section>

      {/* ── Section 6 ──────────────────────────────────────────────────── */}

      <Section id="missed-dose" title="What to Do If a Dose Is Missed">
        <p>
          This section might be the most important one in your entire
          instruction set. Because doses do get missed. Your sitter will
          fall asleep early, get the timing mixed up, or simply forget.
          It happens to pet owners too.
        </p>
        <p>
          For each medication, write down what your sitter should do if
          a dose is missed. The answer varies by medication, and your
          sitter won&apos;t know unless you tell them. Call your vet before
          your trip and ask specifically: &quot;If a dose of [medication]
          is missed, what should we do?&quot;
        </p>
        <p>Common scenarios and typical guidance:</p>
        <ul>
          <li>
            <strong>Daily oral medications (most common):</strong> Give it
            as soon as you remember, unless it&apos;s close to the next
            dose. Then skip the missed one and resume the normal schedule.
            Never double up.
          </li>
          <li>
            <strong>Twice-daily medications:</strong> If less than 4 hours
            late, give it. If more than 4 hours late, skip to the next
            scheduled dose.
          </li>
          <li>
            <strong>Insulin:</strong> This needs vet-specific guidance.
            Generally, a missed dose is safer than a double dose. Never
            guess with insulin. Call the vet.
          </li>
          <li>
            <strong>Anti-seizure medication:</strong> Missing even one dose
            can trigger a seizure. Emphasize this clearly: &quot;This is
            the one medication that cannot be missed. Set a phone alarm.&quot;
          </li>
          <li>
            <strong>Flea/tick/heartworm preventatives:</strong> Usually
            monthly. If your sitter needs to give one during your trip,
            note the exact date and that a day or two late is fine.
          </li>
        </ul>
        <Callout emoji="⏰">
          Suggest your sitter set phone alarms for every medication time.
          It sounds simple, but it&apos;s the single most effective way to
          prevent missed doses. Name the alarm clearly: &quot;Luna
          morning meds&quot; not just &quot;7:30 AM.&quot;
        </Callout>
      </Section>

      {/* ── Section 7 ──────────────────────────────────────────────────── */}

      <Section id="emergencies" title="Emergency Medication Situations">
        <p>
          Your sitter needs to know the difference between &quot;this can
          wait until the owner gets back&quot; and &quot;this needs a vet
          right now.&quot; Spell it out. Don&apos;t assume they&apos;ll
          recognize the signs.
        </p>
        <p>
          Write down specific symptoms that mean &quot;call the vet
          immediately&quot;:
        </p>
        <ul>
          <li>
            <strong>Allergic reactions:</strong> Swelling around the face
            or throat, difficulty breathing, hives, sudden vomiting after
            taking medication
          </li>
          <li>
            <strong>Seizures:</strong> What they look like in your
            specific pet (they can vary), how long is normal vs. when to
            call for help
          </li>
          <li>
            <strong>Insulin emergencies:</strong> Signs of low blood sugar
            (shaking, disorientation, collapse) and where the emergency
            glucose gel is stored
          </li>
          <li>
            <strong>Accidental overdose:</strong> If your pet gets into
            the medication bag or another pet eats the wrong medication,
            call poison control immediately
          </li>
        </ul>
        <p>
          Leave these numbers visible and easily accessible:
        </p>
        <Checklist
          items={[
            "Your regular veterinarian (name, phone, address, hours)",
            "Nearest 24-hour emergency vet (name, phone, address, driving directions)",
            "ASPCA Animal Poison Control: (888) 426-4435 (there's a consultation fee)",
            "Your cell phone number",
            "A backup contact who knows your pet (family member, neighbor, friend)",
          ]}
        />
        <p>
          If your pet has a known history of emergencies (past seizures,
          anaphylactic reactions, diabetic episodes), describe what happened
          last time and what the vet did. This gives your sitter context
          and helps the emergency vet act faster.
        </p>
        <Callout emoji="🚨">
          Pre-authorize emergency treatment with your vet. Leave a credit
          card on file or a written note authorizing your sitter to approve
          treatment up to a specified amount. Vets may hesitate to treat
          without owner authorization, and you might not be reachable.
        </Callout>
      </Section>

      {/* ── Section 8 ──────────────────────────────────────────────────── */}

      <Section id="staying-organized" title="Keeping It All Organized">
        <p>
          All of the information above is useless if your sitter can&apos;t
          find it when they need it. Organization is as important as the
          content itself.
        </p>
        <p>
          <strong>Physical organization:</strong> If you&apos;re leaving
          written instructions, keep everything in one place. A binder, a
          folder on the counter, a labeled drawer. Don&apos;t split
          medication info across a note on the fridge, a text message, and
          a Post-it on the bathroom mirror. Consolidate.
        </p>
        <p>
          <strong>Pill organizers:</strong> A weekly pill organizer is one
          of the best investments you can make. Pre-fill it before you
          leave. Label each day. Your sitter opens Monday&apos;s
          compartment, gives what&apos;s inside. No guessing, no counting,
          no reading labels. If your pet takes different meds at different
          times, use an AM/PM organizer.
        </p>
        <p>
          <strong>Photo documentation:</strong> Take photos of each
          medication bottle (showing the label), the pill organizer filled
          and labeled, and the storage location. Send these to your sitter
          or include them in your instructions.
        </p>
        <p>
          <strong>Digital backup:</strong> Paper gets lost, coffee gets
          spilled on it, and your sitter might not be at your house when
          a question comes up. Having a digital copy they can pull up on
          their phone is invaluable. You can share a Google Doc, send
          photos of your written notes, or use a purpose-built tool
          like{" "}
          <Link
            href="/signup"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            Vadem
          </Link>{" "}
          that keeps all your pet&apos;s care info in one shareable link.
        </p>
        <Callout>
          Do a dry run. Before you leave, ask your sitter to give one dose
          while you watch. You&apos;ll spot confusion immediately, and your
          sitter will feel more confident having done it once successfully.
        </Callout>
        <p>
          For a full breakdown of everything else your sitter needs beyond
          medication, check out our{" "}
          <Link
            href="/guides/pet-sitter-checklist"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            complete pet sitter checklist
          </Link>{" "}
          and our guide on{" "}
          <Link
            href="/guides/what-to-leave-for-pet-sitter"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            what to leave for your pet sitter
          </Link>
          .
        </p>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}

      <div className="font-body text-base text-text-secondary leading-relaxed space-y-4 mb-10">
        <p>
          Writing medication instructions takes 15 to 20 minutes. That
          small investment buys your pet consistent care and buys you peace
          of mind while you&apos;re away. Your sitter doesn&apos;t need a
          veterinary degree. They need clear, specific, written instructions
          from the person who knows your pet best. That&apos;s you.
        </p>
      </div>

      <RelatedGuides
        guides={[
          {
            href: "/guides/pet-sitter-checklist",
            title: "The Complete Pet Sitter Checklist",
          },
          {
            href: "/guides/what-to-leave-for-pet-sitter",
            title: "What to Leave for Your Pet Sitter",
          },
          {
            href: "/guides/house-sitter-welcome-pack",
            title: "How to Create a House Sitter Welcome Pack",
          },
        ]}
      />
    </>
  );
}
