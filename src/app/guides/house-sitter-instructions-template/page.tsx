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
  title: "House Sitter Instructions Template: What to Include | Vadem",
  description:
    "A room-by-room house sitter instructions template covering appliances, security, mail, plants, and neighborhood info. Practical checklist you can copy and customize.",
  alternates: {
    canonical: "https://vadem.app/guides/house-sitter-instructions-template",
  },
  openGraph: {
    title: "House Sitter Instructions Template: What to Include | Vadem",
    description:
      "A room-by-room template for writing clear house sitting instructions your sitter will actually use.",
    url: "https://vadem.app/guides/house-sitter-instructions-template",
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
      name: "House Sitter Instructions Template: What to Include",
      item: "https://vadem.app/guides/house-sitter-instructions-template",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "House Sitter Instructions Template: What to Include",
  description:
    "A room-by-room template for writing clear house sitting instructions your sitter will actually use.",
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
  { id: "why-written-instructions", label: "Why written instructions matter" },
  { id: "property-basics", label: "Property basics (keys, alarms, WiFi)" },
  { id: "kitchen-and-appliances", label: "Kitchen and appliances" },
  {
    id: "heating-cooling-utilities",
    label: "Heating, cooling, and utilities",
  },
  { id: "outdoor-areas-and-plants", label: "Outdoor areas and plants" },
  {
    id: "mail-packages-deliveries",
    label: "Mail, packages, and deliveries",
  },
  { id: "neighbors-and-local-info", label: "Neighbors and local info" },
  {
    id: "security-and-emergencies",
    label: "Security and emergency procedures",
  },
  { id: "putting-it-all-together", label: "Putting it all together" },
];

export default function HouseSitterInstructionsTemplatePage() {
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

      <header className="mb-10">
        <p className="font-body text-xs font-semibold text-primary bg-primary-subtle rounded-pill px-2.5 py-0.5 inline-block mb-3">
          Instructions template
        </p>
        <h1 className="font-display text-4xl text-text-primary mb-4">
          House Sitter Instructions Template: What to Include
        </h1>
        <p className="font-body text-base text-text-secondary leading-relaxed">
          A good house sitter instructions template saves you from frantic
          mid-vacation texts. This guide walks through every category of
          information your sitter needs, room by room and system by system, so
          you can write it once and reuse it every time you travel.
        </p>
      </header>

      <GuideNav items={tocItems} />

      <Section id="why-written-instructions" title="Why written instructions matter">
        <p>
          You might think a quick phone call covers everything. It probably
          won&apos;t. Sitters forget verbal instructions the moment they hang up,
          especially when they are juggling details about the thermostat, the
          bins, the tricky back door lock, and which neighbor has the spare key.
        </p>
        <p>
          Written instructions give your sitter something to refer back to at
          2 a.m. when the smoke detector starts chirping or the hot water
          cuts out. They also protect you. If something goes wrong, clear
          documentation means fewer misunderstandings about what was expected.
        </p>
        <p>
          There is also a less obvious benefit: writing things down forces you to
          actually think through what your sitter needs to know. Most homeowners
          discover gaps in their own knowledge during this process. Where{" "}
          <em>is</em> the water shut-off valve? When <em>was</em> the boiler
          last serviced?
        </p>
        <Callout emoji="📝">
          If you have pets too, pair this template with our{" "}
          <Link
            href="/guides/pet-sitter-checklist"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            pet sitter checklist
          </Link>{" "}
          so your sitter has one complete reference for both the house and your
          animals.
        </Callout>
      </Section>

      <Section id="property-basics" title="Property basics: keys, alarms, and WiFi">
        <p>
          Start with the things your sitter needs the moment they walk through
          the door. Nothing else matters if they cannot get in, connect to the
          internet, or figure out the alarm before it wakes the street.
        </p>

        <Checklist
          items={[
            "Front door key location (and any quirks, like needing to lift the handle while turning)",
            "Back door, side gate, garage, and shed keys or codes",
            "Alarm system: code, how to arm/disarm, which panel to use",
            "WiFi network name and password",
            "Spare key location (or which neighbor holds one)",
            "Smart lock instructions and backup entry method if batteries die",
            "Parking instructions: driveway, permit, or street parking rules",
          ]}
        />

        <p>
          Be specific about door quirks. If your front door sticks in humidity
          and you need to shoulder it while turning the deadbolt, say that. Your
          sitter will otherwise assume the key is wrong and call you from the
          porch.
        </p>
        <Callout emoji="🔑">
          For security-sensitive codes like alarms and smart locks, consider
          sharing them through a secure channel rather than a printed sheet.{" "}
          <Link
            href="/signup"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            Vadem&apos;s encrypted vault
          </Link>{" "}
          lets you share codes digitally with time-limited access, so your sitter
          sees them only when they need to.
        </Callout>
      </Section>

      <Section id="kitchen-and-appliances" title="Kitchen and appliances">
        <p>
          Your kitchen probably has at least one appliance with a personality.
          The oven that runs 10 degrees hot. The dishwasher where you have to
          pull the bottom rack out slowly or the mugs tip over. The garbage
          disposal switch that looks exactly like the light switch above the
          sink.
        </p>
        <p>
          Walk through each appliance your sitter might use and note anything
          that is not obvious.
        </p>

        <Checklist
          items={[
            "Oven/stove: how to light it (if gas), any temperature quirks",
            "Dishwasher: preferred cycle, where detergent goes, which items are hand-wash only",
            "Washing machine and dryer: settings for a normal load, where to find detergent",
            "Coffee machine: how to use it, where the beans/pods are, how to descale if needed",
            "Garbage disposal: which switch operates it, what not to put down it",
            "Water filter: how often to change it, where replacements are stored",
            "Fridge/freezer: anything that should stay at a specific temperature",
          ]}
        />

        <p>
          Also mention what food is available for them. Tell them which pantry
          items are fair game and which are off-limits (that jar of high-end
          saffron, for instance). Most sitters feel awkward raiding a
          stranger&apos;s kitchen without explicit permission.
        </p>
      </Section>

      <Section id="heating-cooling-utilities" title="Heating, cooling, and utilities">
        <p>
          Utility systems are where sitters make the most expensive mistakes.
          Not out of carelessness, but because every home works differently.
          A thermostat set wrong for a week can cost you real money and leave
          pipes at risk in winter.
        </p>

        <Checklist
          items={[
            "Thermostat: preferred daytime and nighttime temperatures",
            "How to operate the thermostat (especially smart thermostats with modes or schedules)",
            "Heating system: gas, electric, heat pump? Any pilot light to check?",
            "Air conditioning: how to turn on, recommended settings, filter location",
            "Hot water: how long it takes to heat, whether there is a boost button",
            "Breaker/fuse box location and which breakers control what",
            "Water shut-off valve location (main and any secondary valves)",
            "Gas shut-off valve location",
          ]}
        />

        <p>
          If your boiler has a pressure gauge that occasionally drops, explain
          how to re-pressurize it. Include a photo of the gauge showing the
          correct range. This single detail can prevent a panicked call and a
          plumber visit.
        </p>
        <Callout>
          Smart thermostats like Nest or Ecobee can be tricky for guests. Write
          down the steps to manually adjust temperature, since the app may not be
          available to your sitter.
        </Callout>
      </Section>

      <CtaBanner />

      <Section id="outdoor-areas-and-plants" title="Outdoor areas and plants">
        <p>
          Outdoor responsibilities vary wildly depending on the season and where
          you live. A summer sit might need daily watering. A winter sit might
          need someone who knows to run the taps if the temperature drops below
          freezing.
        </p>

        <Checklist
          items={[
            "Lawn mowing: frequency, mower location, any areas to avoid",
            "Garden watering: which plants, how often, sprinkler system or manual",
            "Indoor plant care: location of each plant, watering schedule, any that are sensitive to direct sunlight",
            "Pool or hot tub: how to check chemicals, cover instructions, when to run the pump",
            "Bins and recycling: collection days, where to put bins, any sorting rules",
            "Compost: what goes in, when to turn it",
            "Outdoor lights: timers or manual switches, which ones to leave on for security",
          ]}
        />

        <p>
          For plants, honestly, a labeled photo goes a long way. Saying
          &quot;water the fern in the living room&quot; is less helpful than a
          photo showing exactly which pot, because your sitter might not know a
          fern from a ficus.
        </p>
        <Callout emoji="🌱">
          If you have a complex watering schedule, consider a simple table:
          plant name, location, how much water, and how often. Tape it to the
          fridge or put it in your{" "}
          <Link
            href="/signup"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            Vadem care manual
          </Link>{" "}
          so it does not get lost.
        </Callout>
      </Section>

      <Section id="mail-packages-deliveries" title="Mail, packages, and deliveries">
        <p>
          A pile of packages on the porch is an advertisement that nobody is
          home. Give your sitter clear instructions on how to handle whatever
          arrives while you are away.
        </p>

        <Checklist
          items={[
            "Where the mailbox is and whether a key is needed",
            "What to do with packages (bring inside, put in garage, text you a photo)",
            "Any expected deliveries with tracking numbers or dates",
            "Newspaper or magazine subscriptions to bring in",
            "Anything to refuse or redirect (junk mail, solicitors)",
            "Whether to hold or forward mail if you are gone longer than a week",
          ]}
        />

        <p>
          If you regularly receive perishable deliveries (meal kits, fresh
          flowers, subscription boxes with food), let your sitter know so they
          can bring them in quickly. A box of raw chicken on the porch in July
          is nobody&apos;s idea of a welcome surprise.
        </p>
      </Section>

      <Section id="neighbors-and-local-info" title="Neighbors and local info">
        <p>
          Your sitter is living in a neighborhood they do not know. The more
          context you give, the more comfortable and capable they will be.
        </p>

        <Checklist
          items={[
            "Nearest grocery store, pharmacy, and gas station",
            "Favorite local takeaway or restaurant recommendations",
            "Friendly neighbors: names, which house, and if they know a sitter is staying",
            "Neighbor with a spare key (name and contact info)",
            "Any neighbors to be aware of (noisy dog next door, shared driveway etiquette)",
            "Nearest hospital or urgent care with address",
            "Local taxi service or rideshare availability",
            "Vet clinic (if pets are involved) with address and phone number",
          ]}
        />

        <p>
          Tell your neighbors that someone will be staying. A concerned neighbor
          who does not recognize the person in your driveway might call the
          police, which is stressful for everyone.
        </p>
        <p>
          Also mention anything about the area that is not obvious: street
          cleaning days that require moving the car, noise curfews, or that the
          creek behind the house floods if it rains heavily for more than a day.
        </p>
      </Section>

      <Section id="security-and-emergencies" title="Security and emergency procedures">
        <p>
          This section is the one your sitter hopes they never need but will be
          most grateful for if they do. Cover both everyday security habits and
          what to do in a real emergency.
        </p>

        <h3 className="font-display text-lg text-text-primary mt-6 mb-3">
          Daily security
        </h3>

        <Checklist
          items={[
            "Which doors and windows to lock at night",
            "Security cameras: where they are, how to check them, what is recorded",
            "Motion sensor lights: where they are and whether they are automatic",
            "Alarm system: how to set it before leaving, what to do if it triggers by accident",
            "Any doors or windows that do not lock properly (and workarounds)",
          ]}
        />

        <h3 className="font-display text-lg text-text-primary mt-6 mb-3">
          Emergency contacts and procedures
        </h3>

        <Checklist
          items={[
            "Your phone number and best way to reach you (call, text, WhatsApp)",
            "A local emergency contact who can come to the house if needed",
            "Plumber, electrician, and general handyman contact details",
            "Insurance company and policy number (for major incidents)",
            "Fire extinguisher location and how to use it",
            "First aid kit location",
            "Water shut-off procedure (in case of burst pipe)",
            "Gas shut-off procedure (in case of suspected leak)",
            "Circuit breaker location (in case of power issues)",
          ]}
        />

        <p>
          Write out actual steps for emergencies, not just contact numbers. For
          a burst pipe: &quot;Turn the blue valve under the kitchen sink
          clockwise until it stops. Then turn off the main at the red handle in
          the utility cupboard. Call Dave (plumber) on 555-0147.&quot; Under
          pressure, people need instructions they can follow without thinking.
        </p>
        <Callout emoji="🚨">
          Keep emergency info at the very top of your instructions document or
          in a clearly labeled section. Sitters should not have to scroll past
          dishwasher tips to find the water shut-off location in a crisis.
        </Callout>
      </Section>

      <Section id="putting-it-all-together" title="Putting it all together">
        <p>
          You now have a solid house sitter instructions template covering every
          major category. Here are a few tips for making the final document
          genuinely useful rather than just thorough.
        </p>

        <h3 className="font-display text-lg text-text-primary mt-6 mb-3">
          Keep it scannable
        </h3>
        <p>
          Your sitter will not read a wall of text. Use headers, bullet points,
          and short paragraphs. Bold the critical details (alarm codes, shut-off
          valves, emergency numbers). Think of it less like a letter and more
          like a reference manual.
        </p>

        <h3 className="font-display text-lg text-text-primary mt-6 mb-3">
          Add photos
        </h3>
        <p>
          A photo of the breaker box with labels. A photo showing which
          recycling bin is which. A photo of the thermostat at the correct
          setting. Words describe things, photos show them. Where possible, use
          both.
        </p>

        <h3 className="font-display text-lg text-text-primary mt-6 mb-3">
          Do a walkthrough
        </h3>
        <p>
          If you can meet your sitter in person before you leave, walk through
          the house together with your instructions in hand. Let them ask
          questions. The document is the backup, not the replacement for face
          time.
        </p>

        <h3 className="font-display text-lg text-text-primary mt-6 mb-3">
          Make it accessible
        </h3>
        <p>
          A printed binder on the kitchen counter is great, but what happens
          when your sitter is out and cannot remember the alarm code? Digital
          access matters. Share instructions somewhere your sitter can pull them
          up on their phone at any time.
        </p>

        <Callout>
          This is exactly what{" "}
          <Link
            href="/signup"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            Vadem
          </Link>{" "}
          was built for. You fill in the details once, and your sitter gets a
          single link with everything organized by category. Security codes live
          in an encrypted vault. You can update instructions any time, even
          mid-trip, and your sitter always sees the latest version.
        </Callout>

        <h3 className="font-display text-lg text-text-primary mt-6 mb-3">
          Update after every trip
        </h3>
        <p>
          After each house sit, ask your sitter what was confusing, what was
          missing, and what they wish they had known sooner. Add their feedback
          to the template. By the third or fourth time, your instructions will
          be bulletproof.
        </p>

        <p>
          If you also want to make your sitter feel genuinely welcome (not just
          informed), take a look at our guide on{" "}
          <Link
            href="/guides/house-sitter-welcome-pack"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
          >
            creating a house sitter welcome pack
          </Link>
          . Good instructions keep things running. A welcome pack makes your
          sitter actually enjoy the experience.
        </p>
      </Section>

      <RelatedGuides
        guides={[
          {
            href: "/guides/house-sitter-welcome-pack",
            title: "How to Create a House Sitter Welcome Pack",
          },
          {
            href: "/guides/pet-sitter-checklist",
            title: "The Complete Pet Sitter Checklist",
          },
          {
            href: "/guides/what-to-leave-for-pet-sitter",
            title: "What to Leave for Your Pet Sitter",
          },
        ]}
      />
    </>
  );
}
