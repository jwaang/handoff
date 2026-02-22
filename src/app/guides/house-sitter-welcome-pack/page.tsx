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
  title: "How to Create a House Sitter Welcome Pack | Vadem",
  description:
    "A step-by-step guide to assembling a thoughtful house sitter welcome pack. Covers WiFi, keys, contacts, kitchen basics, local tips, and personal touches that help your sitter feel at home.",
  alternates: {
    canonical: "https://vadem.app/guides/house-sitter-welcome-pack",
  },
  openGraph: {
    title: "How to Create a House Sitter Welcome Pack | Vadem",
    description:
      "A step-by-step guide to assembling a thoughtful house sitter welcome pack. Covers WiFi, keys, contacts, kitchen basics, local tips, and personal touches.",
    url: "https://vadem.app/guides/house-sitter-welcome-pack",
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
      name: "How to Create a House Sitter Welcome Pack",
      item: "https://vadem.app/guides/house-sitter-welcome-pack",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create a House Sitter Welcome Pack",
  description:
    "A step-by-step guide to assembling a thoughtful welcome pack that helps your house sitter feel at home from day one.",
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
  { id: "what-is-a-welcome-pack", label: "What is a welcome pack (and why bother)" },
  { id: "essentials", label: "The essentials: keys, WiFi, and contacts" },
  { id: "house-tour-on-paper", label: "A house tour on paper" },
  { id: "kitchen-basics", label: "Kitchen basics and local food" },
  { id: "entertainment-and-comfort", label: "Entertainment and comfort" },
  { id: "neighborhood-tips", label: "Neighborhood tips and recommendations" },
  { id: "personal-touches", label: "Personal touches that make a difference" },
  { id: "digital-vs-physical", label: "Digital vs. physical welcome packs" },
];

const link =
  "text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150";

export default function HouseSitterWelcomePackPage() {
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

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="font-body text-sm text-text-muted mb-6"
      >
        <ol className="flex items-center gap-1.5 !list-none !pl-0">
          <li>
            <Link href="/" className={link}>
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/guides" className={link}>
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-text-secondary">Welcome pack</li>
        </ol>
      </nav>

      {/* Hero */}
      <h1 className="font-display text-4xl text-text-primary mb-4">
        How to Create a House Sitter Welcome Pack
      </h1>
      <p className="font-body text-base text-text-secondary leading-relaxed mb-10">
        A <strong>house sitter welcome pack</strong> is one of the simplest
        things you can prepare before a trip, and one of the things sitters
        appreciate most. It takes about an hour to put together, saves your
        sitter from texting you questions at midnight, and sets the tone for the
        entire stay. This guide walks you through exactly what to include, how to
        organize it, and a few small touches that turn &quot;fine&quot; into
        genuinely welcoming.
      </p>

      <GuideNav items={tocItems} />

      {/* ── Section 1 ──────────────────────────────────────────────────── */}

      <Section id="what-is-a-welcome-pack" title="What is a welcome pack (and why bother)">
        <p>
          A house sitter welcome pack is a collection of practical information,
          everyday essentials, and a few thoughtful extras gathered in one place
          for the person looking after your home. Think of it as a care manual
          for your house, written by the person who knows it best: you.
        </p>
        <p>
          Why does it matter? Because even a confident, experienced sitter is
          walking into an unfamiliar space. They don&apos;t know which light
          switch controls the porch light, whether the shower runs hot on the
          left or the right, or where you keep the trash bags. Every unanswered
          question is a minor stress point. Multiply those by a dozen and the
          first evening goes from relaxing to frustrating.
        </p>
        <p>
          A good welcome pack removes that friction. Your sitter can settle in
          quickly, find what they need without guessing, and actually enjoy being
          in your home. You get fewer &quot;quick question&quot; texts while
          you&apos;re trying to enjoy your holiday. Everyone wins.
        </p>
        <p>
          It doesn&apos;t need to be elaborate. A printed sheet and a basket on
          the kitchen counter works beautifully. What matters is that the right
          information is there when your sitter needs it.
        </p>
      </Section>

      {/* ── Section 2 ──────────────────────────────────────────────────── */}

      <Section id="essentials" title="The essentials: keys, WiFi, and contacts">
        <p>
          Start with the things your sitter will need within the first five
          minutes of arriving. If they can&apos;t get online or reach you in an
          emergency, nothing else in the welcome pack matters.
        </p>

        <Checklist
          items={[
            "House keys (clearly labeled: front door, back door, garage, mailbox)",
            "WiFi network name and password (written out, not just spoken)",
            "Alarm code or smart lock instructions",
            "Your phone number and a backup contact (neighbor, family, or friend nearby)",
            "Any gate or building access codes",
            "Parking instructions (assigned spot, permit, garage remote)",
          ]}
        />

        <Callout emoji="🔑">
          Write the WiFi password on a card and leave it on the kitchen counter
          or tape it inside a cupboard door. Sitters mention this as the single
          most helpful thing in a welcome pack. Nobody wants to hunt for a
          router sticker while their phone is at 5%.
        </Callout>

        <p>
          For{" "}
          <Link href="/guides/house-sitter-instructions-template" className={link}>
            detailed instructions on covering every room
          </Link>
          , see our house sitter instructions template. The welcome pack is the
          quick-reference version: the facts your sitter needs right now, not
          the full manual.
        </p>
      </Section>

      {/* ── Section 3 ──────────────────────────────────────────────────── */}

      <Section id="house-tour-on-paper" title="A house tour on paper">
        <p>
          Even if you plan to walk your sitter through the house in person, put
          the key points on paper (or in a shared document). People forget
          details the moment you leave, especially when they&apos;re processing
          a lot of new information at once.
        </p>
        <p>
          Room by room, note anything non-obvious:
        </p>
        <ul>
          <li>
            <strong>Thermostat:</strong> Where it is, how to adjust it, and what
            temperature you recommend. (&quot;We usually keep it at 68F / 20C.
            The dial is in the hallway by the stairs.&quot;)
          </li>
          <li>
            <strong>Hot water:</strong> If there&apos;s a boiler that needs
            switching on, or a timer that controls it, explain how.
          </li>
          <li>
            <strong>Quirks:</strong> Every house has them. The bathroom door that
            sticks. The kitchen window you need to lift slightly to lock. The
            dishwasher dial that looks broken but works if you push it in while
            turning. Your sitter will discover these eventually. Better they
            learn from your notes than from a stuck door at midnight.
          </li>
          <li>
            <strong>Bins and recycling:</strong> Which bin is for what, which day
            they go out, and where to put them. This varies hugely between
            neighborhoods and is almost impossible to guess.
          </li>
          <li>
            <strong>Fuse box / circuit breaker:</strong> Where it is and how to
            reset a tripped switch. Label the breakers if you can.
          </li>
          <li>
            <strong>Water shutoff:</strong> Location of the main water valve.
            This is critical in winter or if your home has older plumbing.
          </li>
        </ul>

        <Callout>
          You don&apos;t need to document every outlet and lightbulb. Focus on
          the things that would leave your sitter stuck, confused, or calling a
          plumber.
        </Callout>
      </Section>

      {/* ── Section 4 ──────────────────────────────────────────────────── */}

      <Section id="kitchen-basics" title="Kitchen basics and local food">
        <p>
          Your sitter is going to eat. Making the kitchen feel available and
          welcoming goes a long way. You don&apos;t need to stock a full
          fridge, but a few basics mean your sitter can make a cup of tea or
          cook a simple meal without a grocery run on their first night.
        </p>

        <Checklist
          items={[
            "Coffee, tea, sugar, and milk (or a note saying 'help yourself to anything in the fridge')",
            "Bread, butter, eggs, or whatever you'd consider a basic breakfast",
            "Salt, pepper, olive oil, and a few staple spices",
            "A snack or two: biscuits, fruit, cereal bars",
            "Dish soap, sponge, and clean tea towels",
            "A note about which food is fair game and which is off-limits",
          ]}
        />

        <p>
          Then point your sitter toward the good stuff nearby. A short list of
          local food recommendations makes the stay feel more like a holiday and
          less like a chore.
        </p>
        <ul>
          <li>Nearest supermarket (and hours, if they close early)</li>
          <li>Best coffee shop within walking distance</li>
          <li>A good takeaway spot for a tired evening</li>
          <li>Your favorite restaurant for a treat night</li>
          <li>The farmers&apos; market if there is one (day and location)</li>
        </ul>
        <p>
          A sentence or two per place is enough. &quot;Carlo&apos;s Pizza on
          High Street does the best margherita in town. Cash only.&quot; That
          kind of specificity is what makes a recommendation useful.
        </p>
      </Section>

      <CtaBanner />

      {/* ── Section 5 ──────────────────────────────────────────────────── */}

      <Section id="entertainment-and-comfort" title="Entertainment and comfort">
        <p>
          Your sitter is living in your home, not just maintaining it. A few
          small things make the difference between a house that feels like a
          job and one that feels like a place to relax.
        </p>

        <Checklist
          items={[
            "Streaming logins (Netflix, Spotify, etc.) or a note saying they're welcome to use them",
            "TV remote instructions if your setup involves multiple remotes or an HDMI switch",
            "Book recommendations from your shelves",
            "Board games, puzzles, or anything fun you'd be happy to share",
            "Clean towels (set out clearly, not mixed in with your personal stash)",
            "Extra blankets (note where they are, especially if evenings get cold)",
            "A spare phone charger",
          ]}
        />

        <p>
          Streaming services deserve a special mention. If you&apos;re
          comfortable sharing your login, write it down. If you&apos;d rather
          not, that&apos;s completely fine. Just be clear either way so your
          sitter doesn&apos;t feel awkward asking. Consider setting up a
          separate guest profile so your watchlist stays intact.
        </p>

        <Callout emoji="🛋️">
          Fresh sheets on the bed, a clean bathroom, and a towel that&apos;s
          clearly &quot;theirs&quot; communicate more warmth than any welcome
          note. Cover the basics of comfort first, then add extras.
        </Callout>
      </Section>

      {/* ── Section 6 ──────────────────────────────────────────────────── */}

      <Section id="neighborhood-tips" title="Neighborhood tips and recommendations">
        <p>
          Your sitter might be from another city, another country, or just
          across town. Either way, they don&apos;t know your neighborhood the
          way you do. A brief orientation saves them from wandering around
          looking for a pharmacy at 9 PM.
        </p>
        <ul>
          <li>
            <strong>Walking routes:</strong> If there&apos;s a nice loop for
            morning walks or a park nearby, mention it. If you have a dog, this
            is essential (see our guide on{" "}
            <Link href="/guides/what-to-leave-for-pet-sitter" className={link}>
              what to leave for your pet sitter
            </Link>
            ).
          </li>
          <li>
            <strong>Public transport:</strong> Nearest bus stop or train station,
            and which app to use for schedules.
          </li>
          <li>
            <strong>Medical:</strong> Closest pharmacy, urgent care clinic, and
            the hospital your vet is near (if you have pets). Include addresses,
            not just names.
          </li>
          <li>
            <strong>Safety notes:</strong> Anything your sitter should know. Is
            there a neighborhood watch? Areas to avoid after dark? A friendly
            neighbor who keeps an eye on things?
          </li>
          <li>
            <strong>Mail and packages:</strong> What to do with incoming mail.
            Are you expecting any deliveries? Should they hold packages inside or
            is the porch safe?
          </li>
          <li>
            <strong>Noise:</strong> If there&apos;s regular street noise, early
            garbage collection, or a rooster next door, a heads-up prevents an
            unpleasant surprise at 5 AM.
          </li>
        </ul>

        <Callout emoji="📍">
          Drop a Google Maps list with your favorite local spots pinned. It
          takes two minutes and gives your sitter a ready-made guide to the
          neighborhood. Share the link in your welcome pack or{" "}
          <Link href="/signup" className={link}>
            add it to your Vadem
          </Link>
          .
        </Callout>
      </Section>

      {/* ── Section 7 ──────────────────────────────────────────────────── */}

      <Section id="personal-touches" title="Personal touches that make a difference">
        <p>
          None of these are required. All of them are remembered.
        </p>
        <p>
          Leave a handwritten note on the kitchen counter. It doesn&apos;t need
          to be a letter. A few lines are plenty: &quot;Welcome! There&apos;s
          coffee in the top left cupboard and the best croissants in town are
          at Baker &amp; Co on Elm Street. We hope you feel at home.&quot;
        </p>
        <p>
          Other ideas that sitters consistently mention as standout gestures:
        </p>
        <ul>
          <li>
            A bottle of wine, a pack of local beer, or a nice box of tea. Match
            it to your sitter if you know their preferences.
          </li>
          <li>
            A small basket of local products: honey from the farmers&apos;
            market, chocolate from that shop downtown, a bag of good coffee
            beans.
          </li>
          <li>
            A pre-paid transit card loaded with a few rides (useful in cities).
          </li>
          <li>
            Flowers in a vase. Simple, inexpensive, and surprisingly effective at
            making a space feel lived-in rather than vacant.
          </li>
          <li>
            A small guidebook or local magazine left on the coffee table.
          </li>
        </ul>
        <p>
          The common thread is thoughtfulness, not expense. A handwritten note
          and a bag of coffee beans costs less than dinner out, but it tells your
          sitter: &quot;We care that you&apos;re comfortable here.&quot; That
          feeling shapes the whole sit.
        </p>
        <p>
          If you also have pets, your welcome pack overlaps with your{" "}
          <Link href="/guides/pet-sitter-checklist" className={link}>
            pet sitter checklist
          </Link>
          . Keep the pet information separate and organized so your sitter can
          find feeding schedules without flipping through your restaurant
          recommendations.
        </p>
      </Section>

      {/* ── Section 8 ──────────────────────────────────────────────────── */}

      <Section id="digital-vs-physical" title="Digital vs. physical welcome packs">
        <p>
          Both work. Each has trade-offs. The best approach depends on your
          sitter, your home, and how often you host.
        </p>

        <p>
          <strong>Physical (printed or handwritten):</strong>
        </p>
        <ul>
          <li>Always accessible, even if WiFi is down or a phone dies</li>
          <li>Feels personal, especially with a handwritten note</li>
          <li>Can include physical items (keys, snacks, local maps)</li>
          <li>Harder to update for repeat sitters or changing details</li>
          <li>Easy to misplace in a stack of papers</li>
        </ul>

        <p>
          <strong>Digital (shared doc, PDF, or a dedicated app):</strong>
        </p>
        <ul>
          <li>Searchable and easy to update</li>
          <li>Can include links, maps, and embedded videos</li>
          <li>Shareable before the sitter even arrives</li>
          <li>Sitter can access it from anywhere on their phone</li>
          <li>Lacks the warmth of a physical note or basket</li>
        </ul>

        <Callout>
          The sweet spot is usually both. Send the essential information
          digitally so your sitter can review it before they arrive. Then leave a
          short printed summary, the WiFi password card, and whatever physical
          touches you want on the kitchen counter. Digital for reference,
          physical for welcome.
        </Callout>

        <p>
          If you&apos;re looking for a way to pull it all together without
          wrestling with Google Docs formatting, that&apos;s exactly what{" "}
          <Link href="/signup" className={link}>
            Vadem
          </Link>{" "}
          is built for. You fill in your home details once, and your sitter gets
          a single link with everything they need: house instructions, contacts,
          daily schedules, access codes (encrypted and time-limited), and
          neighborhood recommendations. It&apos;s a digital welcome pack that
          stays up to date across every trip.
        </p>
      </Section>

      {/* ── Wrap-up ────────────────────────────────────────────────────── */}

      <section className="mb-10">
        <h2 className="font-display text-2xl text-text-primary mb-4">
          Putting it all together
        </h2>
        <div className="font-body text-base text-text-secondary leading-relaxed space-y-4">
          <p>
            A great house sitter welcome pack isn&apos;t about being the
            perfect host. It&apos;s about being a clear one. Your sitter
            doesn&apos;t need luxury. They need to know how to work the heating,
            where to take the bins, and that the Thai place around the corner
            delivers until 10 PM.
          </p>
          <p>
            Start with the essentials: keys, WiFi, contacts, and a quick house
            tour on paper. Add kitchen basics so they can eat on night one. Point
            them to your favorite local spots. Then, if you feel like it, add a
            personal touch that makes the house feel less like a job site and
            more like a home.
          </p>
          <p>
            The whole thing can fit on two sides of A4 plus a small basket on
            the counter. And if your sitter feels genuinely welcome from the
            moment they walk in, they&apos;ll take better care of your home.
            That&apos;s not just a nice theory. Every experienced homeowner
            who&apos;s hosted sitters will tell you the same thing.
          </p>
          <p>
            Need a starting structure for the written instructions? Grab our{" "}
            <Link href="/guides/house-sitter-instructions-template" className={link}>
              house sitter instructions template
            </Link>{" "}
            and fill in the blanks. Or{" "}
            <Link href="/signup" className={link}>
              create a free Vadem
            </Link>{" "}
            and build a digital welcome pack your sitter can open on their phone
            before they even arrive.
          </p>
        </div>
      </section>

      <RelatedGuides
        guides={[
          {
            href: "/guides/house-sitter-instructions-template",
            title: "House Sitter Instructions Template",
          },
          {
            href: "/guides/what-to-leave-for-pet-sitter",
            title: "What to Leave for Your Pet Sitter",
          },
          {
            href: "/guides/pet-sitter-checklist",
            title: "The Complete Pet Sitter Checklist",
          },
        ]}
      />
    </>
  );
}
