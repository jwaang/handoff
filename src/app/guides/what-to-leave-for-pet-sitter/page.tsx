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
  title: "What to Leave for Your Pet Sitter: The Complete List",
  description:
    "The complete list of supplies, documents, and information to prepare for your pet sitter before you travel. Food, medication, emergency contacts, access codes, and more.",
  alternates: {
    canonical: "https://vadem.app/guides/what-to-leave-for-pet-sitter",
  },
  openGraph: {
    title: "What to Leave for Your Pet Sitter: The Complete List | Vadem",
    description:
      "The complete list of supplies, documents, and information to prepare for your pet sitter before you travel.",
    url: "https://vadem.app/guides/what-to-leave-for-pet-sitter",
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
      name: "What to Leave for Your Pet Sitter: The Complete List",
      item: "https://vadem.app/guides/what-to-leave-for-pet-sitter",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Leave for Your Pet Sitter: The Complete List",
  description:
    "The complete list of supplies, documents, and information to prepare for your pet sitter before you travel.",
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

const tocItems = [
  { id: "why-preparation-matters", label: "Why preparation matters" },
  { id: "food-and-treats", label: "Food and treats" },
  { id: "medication-and-supplements", label: "Medication and supplements" },
  { id: "comfort-items-and-toys", label: "Comfort items and toys" },
  { id: "cleaning-and-waste-supplies", label: "Cleaning and waste supplies" },
  { id: "documents-and-emergency-info", label: "Documents and emergency info" },
  { id: "keys-codes-and-access", label: "Keys, codes, and access" },
  { id: "a-note-on-organization", label: "A note on organization" },
];

const linkClass =
  "text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150";

export default function WhatToLeaveForPetSitterPage() {
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

      <article>
        <h1 className="font-display text-4xl text-text-primary mb-3">
          What to Leave for Your Pet Sitter: The Complete List
        </h1>
        <p className="font-body text-sm text-text-muted mb-8">
          Updated February 22, 2026
        </p>

        <div className="font-body text-base text-text-secondary leading-relaxed space-y-4 mb-10">
          <p>
            Figuring out what to leave for your pet sitter can feel
            overwhelming, especially the night before a trip when you&apos;re
            already packing your own bags. You know your pet better than anyone,
            and all that knowledge lives in your head. The goal is to get it out
            of your head and into a form your sitter can actually use.
          </p>
          <p>
            This guide walks through every category of supplies, documents, and
            information you should prepare. Some items will be obvious. Others
            are the ones people forget until they&apos;re already on the plane.
            We&apos;ll cover all of them.
          </p>
        </div>

        <GuideNav items={tocItems} />

        {/* ── 1. Why Preparation Matters ─────────────────────────────────── */}

        <Section id="why-preparation-matters" title="Why preparation matters">
          <p>
            A good pet sitter can handle surprises. But every surprise they have
            to figure out on their own is a chance for something to go wrong, or
            for your pet to have a harder time adjusting to your absence. The
            more clearly you set things up, the smoother the experience for
            everyone: your sitter, your pet, and you.
          </p>
          <p>
            Pets are creatures of routine. When their food shows up at the usual
            time, in the usual bowl, with the usual amount, they stay calmer.
            When a sitter has to open three cabinets looking for the right bag of
            food, measure out an uncertain amount, and wonder if it should be
            mixed with water, it introduces stress that didn&apos;t need to exist.
          </p>
          <p>
            Preparation also protects your sitter. If your dog has a food
            allergy and your sitter accidentally offers the wrong treat, that
            could mean an emergency vet visit and a very scared person holding a
            very sick dog. Clear labels, pre-measured meals, and written
            instructions prevent those situations entirely.
          </p>
          <p>
            Think of it this way: every minute you spend preparing is ten minutes
            your sitter doesn&apos;t have to spend guessing.
          </p>
        </Section>

        {/* ── 2. Food and Treats ─────────────────────────────────────────── */}

        <Section id="food-and-treats" title="Food and treats">
          <p>
            Start with the basics. Leave enough food for your entire trip, plus
            two to three extra days in case your return is delayed. Running out
            of your pet&apos;s specific food and having a sitter scramble to find
            a replacement is stressful for everyone, and a sudden diet change can
            upset sensitive stomachs.
          </p>

          <Checklist
            items={[
              "Dry food (enough for the full trip + 2-3 extra days)",
              "Wet food, if used (check expiration dates before you leave)",
              "Treats for training or rewards",
              "Any food toppers, supplements mixed into meals, or oils",
              "Feeding bowls (cleaned and labeled if multiple pets)",
              "Written feeding schedule with exact portions",
            ]}
          />

          <Callout emoji="🐶">
            Pre-measure three days of kibble into labeled ziplock bags so your
            sitter doesn&apos;t have to guess portions. Write the day and meal
            on each bag (e.g., &quot;Tuesday AM&quot;, &quot;Tuesday PM&quot;).
            If your pet eats wet food mixed in, include a note on the bag about
            the ratio.
          </Callout>

          <p>
            Be specific about treats, too. If your dog gets one dental chew per
            day after the evening walk, write that down. If your cat only gets
            treats during play sessions, say so. Sitters who don&apos;t know the
            limits tend to either over-treat (upset stomach) or under-treat
            (missed bonding opportunity).
          </p>
          <p>
            If your pet has food allergies or sensitivities, make this very
            visible. A sticky note on the treat bag that says &quot;NO chicken
            treats - allergy&quot; is worth more than a paragraph buried in a
            three-page instruction document. Put the warning where the sitter
            will see it at the moment it matters.
          </p>
        </Section>

        {/* ── 3. Medication and Supplements ──────────────────────────────── */}

        <Section
          id="medication-and-supplements"
          title="Medication and supplements"
        >
          <p>
            This is the category where being thorough really counts. A missed
            dose of a daily supplement might not matter much. A missed dose of
            heart medication or seizure medication could be dangerous.
          </p>

          <Checklist
            items={[
              "All medications with original labels visible",
              "Written dosage and schedule for each medication",
              "Administration method (in food, by hand, pill pocket, syringe)",
              "Refill info if the trip is long enough to run out",
              "Joint supplements, probiotics, or daily vitamins",
              "Flea, tick, or heartworm preventatives (with next due date)",
              "Any as-needed medications (anxiety meds for storms, etc.)",
            ]}
          />

          <p>
            For each medication, write down the name, the dose, the time of day,
            and how to give it. &quot;Half a pill in the morning&quot; is not
            specific enough. &quot;Carprofen 25mg, one half-tablet (12.5mg),
            wrapped in a pill pocket, given at 7 AM with breakfast&quot; is what
            your sitter needs.
          </p>

          <Callout emoji="💊">
            If your pet is tricky about taking medication, describe your
            technique. &quot;She&apos;ll spit out pills unless they&apos;re
            hidden inside a piece of cheese. Hold her mouth closed and stroke her
            throat until she swallows.&quot; The more honest you are about the
            difficulty, the better your sitter will manage it.
          </Callout>

          <p>
            We have a dedicated guide on this topic if you need more detail:{" "}
            <Link href="/guides/pet-medication-instructions" className={linkClass}>
              How to Write Pet Medication Instructions for Your Sitter
            </Link>
            . It covers everything from creating a medication schedule to
            explaining what to do if a dose is missed.
          </p>
        </Section>

        {/* ── 4. Comfort Items and Toys ──────────────────────────────────── */}

        <Section id="comfort-items-and-toys" title="Comfort items and toys">
          <p>
            Your pet&apos;s comfort items help bridge the gap while you&apos;re
            away. A familiar blanket or a favorite toy can do more for separation
            anxiety than anything else. Don&apos;t underestimate how much these
            small things matter.
          </p>

          <Checklist
            items={[
              "Favorite toys (note which ones are for supervised play only)",
              "Bedding or blankets they sleep with",
              "Crate, if they're crate-trained (with bedding inside)",
              "An item of your clothing for comfort (unwashed, so it carries your scent)",
              "Puzzle toys or enrichment feeders for alone time",
              "Calming aids (pheromone diffusers, calming collars, thunder shirts)",
            ]}
          />

          <p>
            Be clear about which toys are safe to leave out unsupervised and
            which ones need to be put away. That stuffed squeaky toy might be
            fine when you&apos;re watching, but your dog could shred it and
            swallow the squeaker when left alone. Your sitter won&apos;t know
            the difference unless you tell them.
          </p>
          <p>
            If your pet has a specific bedtime routine (last potty break, then
            crate with a Kong, then lights off), write it out step by step. Pets
            find huge comfort in the predictability of a sequence, even when
            the person carrying it out is someone new.
          </p>
        </Section>

        <CtaBanner />

        {/* ── 5. Cleaning and Waste Supplies ─────────────────────────────── */}

        <Section
          id="cleaning-and-waste-supplies"
          title="Cleaning and waste supplies"
        >
          <p>
            Nobody wants to think about this category, but running out of poop
            bags on a walk or not being able to find paper towels during an
            accident is a real problem. Make it easy for your sitter to keep
            things clean.
          </p>

          <Checklist
            items={[
              "Poop bags (more than you think they'll need)",
              "Cat litter and a scoop (for cat owners)",
              "Paper towels and pet-safe cleaning spray",
              "Extra pee pads, if your pet uses them",
              "Location of the outdoor trash bin",
              "Lint rollers (your sitter will thank you)",
              "Stain remover for carpets or furniture, just in case",
            ]}
          />

          <p>
            For cat owners: leave a full bag of litter, even if the box was just
            cleaned. Write down how often you scoop (daily, ideally) and how
            often the litter gets fully replaced. If your cat is particular about
            litter brand or depth, mention it. Some cats will refuse to use a box
            that&apos;s been changed to a different litter.
          </p>
          <p>
            For dog owners: show your sitter exactly where the poop bags live.
            Clip a roll to the leash. Put a backup roll by the door. If you use
            a specific dog waste station in the yard, walk them over to it before
            you leave.
          </p>
          <p>
            If your pet is prone to accidents (puppy, senior dog, cat with
            urinary issues), be upfront about it. Let the sitter know it&apos;s
            normal, show them where the cleaning supplies are, and explain your
            cleanup routine. This is better than having them discover the
            situation and feel unsure about how to handle it.
          </p>
        </Section>

        {/* ── 6. Documents and Emergency Info ────────────────────────────── */}

        <Section
          id="documents-and-emergency-info"
          title="Documents and emergency info"
        >
          <p>
            When something goes wrong, you want your sitter to act quickly, not
            spend twenty minutes calling you to ask which vet to go to. Leave all
            emergency information in one easy-to-find place.
          </p>

          <Checklist
            items={[
              "Your vet's name, phone number, and address",
              "Nearest 24-hour emergency vet clinic (not always the same as your regular vet)",
              "Your phone number and a backup contact's number",
              "Pet insurance policy number and provider phone",
              "Vaccination records (some boarding facilities or emergency vets require these)",
              "Microchip number and registry info",
              "Any known allergies or chronic conditions, written clearly",
              "A signed authorization for veterinary care in your absence",
            ]}
          />

          <Callout emoji="🚨">
            Write a clear line at the top of your emergency info that says:
            &quot;If you&apos;re unsure whether it&apos;s an emergency, call the
            vet. Always err on the side of calling.&quot; Sitters often hesitate
            because they don&apos;t want to overreact. Giving them explicit
            permission to call removes that hesitation.
          </Callout>

          <p>
            That signed authorization for veterinary care matters more than most
            people realize. If your pet needs emergency surgery while you&apos;re
            on a flight with no cell service, your sitter needs to be able to
            authorize treatment. Talk to your vet about how they handle this.
            Some accept a simple signed letter; others have their own forms.
          </p>
          <p>
            Consider including a recent photo of your pet with the documents.
            This sounds strange, but if your pet escapes, your sitter will need a
            clear photo to share on social media or with local shelters. A
            current photo showing any distinguishing markings is genuinely
            useful in an emergency.
          </p>
        </Section>

        {/* ── 7. Keys, Codes, and Access ─────────────────────────────────── */}

        <Section id="keys-codes-and-access" title="Keys, codes, and access">
          <p>
            Your sitter needs to get in and out of your home without calling you
            every time. This means thinking through every lock, code, and gate
            they&apos;ll encounter.
          </p>

          <Checklist
            items={[
              "House keys (front door, back door, any gates)",
              "Garage door opener or code",
              "Alarm system code and instructions to arm/disarm",
              "Smart lock codes or app access",
              "WiFi network name and password",
              "Thermostat instructions (or smart home app access)",
              "Mailbox key, if they're collecting mail",
              "Gate codes for the neighborhood or complex, if any",
            ]}
          />

          <p>
            Walk through the entry routine with your sitter before you leave.
            &quot;Open the front door, step inside, turn left, keypad is on the
            wall, enter 4-7-2-1, press the check mark within 30 seconds.&quot;
            Do it together at least once. Alarm systems that go off because a
            sitter couldn&apos;t find the keypad in time are a very common and
            very avoidable problem.
          </p>

          <Callout>
            Sensitive codes and passwords should be shared securely, not left on
            a sticky note. If you use{" "}
            <Link href="/signup" className={linkClass}>
              Vadem
            </Link>
            , you can store access codes in an encrypted vault that your sitter
            can only unlock after verifying their identity. The codes never
            appear in plain text until they&apos;re needed.
          </Callout>

          <p>
            If any doors are tricky (the back door sticks, the deadbolt needs
            to be lifted while turning), write that down. Your sitter
            shouldn&apos;t have to figure out the quirks of your house by trial
            and error, especially at night with a dog who needs to go out.
          </p>
          <p>
            Don&apos;t forget about outdoor access: Is the yard fenced? Are
            there gates that need to stay latched? Is there a dog door that
            should be locked at night? These details are second nature to you and
            completely unknown to your sitter.
          </p>
        </Section>

        {/* ── 8. A Note on Organization ──────────────────────────────────── */}

        <Section id="a-note-on-organization" title="A note on organization">
          <p>
            Having all the right supplies means nothing if your sitter
            can&apos;t find them. The single biggest thing you can do is put
            everything in one designated spot.
          </p>
          <p>
            Choose a counter, a shelf, or a table near the front door. Lay out
            the food, treats, medication, leash, waste bags, and any printed
            instructions in one visible area. Your sitter should be able to walk
            in and see everything they need without opening a single drawer.
          </p>
          <p>
            Label things. A piece of masking tape and a marker goes a long way.
            &quot;Morning food,&quot; &quot;Evening meds,&quot; &quot;Treats
            (max 3/day).&quot; Labels work better than instructions because
            they&apos;re visible at the moment of use, not buried in a document
            your sitter read two days ago.
          </p>

          <Callout emoji="📋">
            If you have a{" "}
            <Link href="/guides/pet-sitter-checklist" className={linkClass}>
              pet sitter checklist
            </Link>
            , print it out and tape it to the fridge or the spot where you&apos;ve
            organized supplies. A physical checklist in the right location beats
            a digital one that has to be searched for.
          </Callout>

          <p>
            For longer trips, consider organizing supplies by day or by week.
            Pre-measured food bags labeled with dates. A weekly pill organizer
            instead of loose bottles. A calendar on the counter with flea
            medication dates marked. The less your sitter has to think about
            logistics, the more attention they can give to your pet.
          </p>
          <p>
            Alternatively, you can put everything into a digital care manual
            that&apos;s always accessible on your sitter&apos;s phone. Tools
            like{" "}
            <Link href="/signup" className={linkClass}>
              Vadem
            </Link>
            {" "}let you create a single shareable link with feeding schedules,
            medication instructions, emergency contacts, daily task lists, and
            secure access codes. Your sitter gets everything in one place, and
            you can update it anytime without needing to print a new document.
          </p>
        </Section>

        {/* ── Closing ────────────────────────────────────────────────────── */}

        <div className="font-body text-base text-text-secondary leading-relaxed space-y-4 mt-10 mb-6">
          <p>
            Preparing for a pet sitter takes some effort upfront, but it pays
            off enormously. Your sitter feels confident. Your pet stays in their
            routine. And you can actually enjoy your trip instead of fielding
            panicked texts about where the eye drops are.
          </p>
          <p>
            Start with the basics: food, medication, and emergency contacts.
            Then work outward to comfort items, cleaning supplies, and access
            codes. If you can walk through the setup with your sitter in person
            before you leave, do it. A ten-minute walkthrough is worth more than
            ten pages of instructions.
          </p>
          <p>
            Your pet deserves great care while you&apos;re away. A little
            preparation makes that possible.
          </p>
        </div>

        <RelatedGuides
          guides={[
            {
              href: "/guides/pet-sitter-checklist",
              title: "The Complete Pet Sitter Checklist",
            },
            {
              href: "/guides/pet-medication-instructions",
              title: "How to Write Pet Medication Instructions",
            },
            {
              href: "/guides/house-sitter-welcome-pack",
              title: "How to Create a House Sitter Welcome Pack",
            },
          ]}
        />
      </article>
    </>
  );
}
