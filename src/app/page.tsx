import Link from "next/link";
import {
  CheckIcon,
  LockIcon,
  CameraIcon,
  HomeIcon,
  CalendarIcon,
  BellIcon,
  ShareIcon,
  ClockIcon,
} from "@/components/ui/icons";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border-default/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-text-primary">
          Vadem
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="font-body text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150 hidden sm:inline-block"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="font-body text-sm font-semibold bg-primary text-text-on-primary px-4 py-2 rounded-md btn btn-primary transition-[translate,box-shadow,background-color] duration-150 hover:bg-primary-hover"
          >
            Get started free
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-28">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-accent-light text-accent-hover font-body text-xs font-semibold px-3 py-1.5 rounded-pill mb-6">
          <span>✦</span> Free while in early access
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-text-primary leading-tight tracking-tight mb-5">
          Your pets deserve better<br className="hidden sm:block" /> than a text thread
        </h1>
        <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Vadem is the care manual your sitter actually uses. One link with
          everything they need &mdash; daily tasks, photos of where things are,
          secure codes, and real-time updates for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/signup"
            className="font-body text-base font-semibold bg-primary text-text-on-primary px-8 py-4 rounded-lg btn btn-primary transition-[translate,box-shadow,background-color] duration-150 hover:bg-primary-hover"
          >
            Create your Vadem &mdash; it&apos;s free
          </Link>
          <a
            href="#how-it-works"
            className="font-body text-base font-semibold bg-bg-raised text-text-secondary border border-border-default px-8 py-4 rounded-lg btn btn-no-shadow hover:bg-bg-sunken transition-[background-color] duration-150"
          >
            See how it works
          </a>
        </div>
        <p className="font-body text-sm text-text-muted">
          No app download needed. Your sitter just opens a link.
        </p>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      emoji: "📱",
      title: "The midnight text",
      description:
        "\"Where's the dog food?\" \"How do I turn off the alarm?\" \"Which pill is for the morning?\" Your phone buzzes while you're supposed to be relaxing.",
    },
    {
      emoji: "📋",
      title: "The scattered instructions",
      description:
        "A Google Doc here, a text thread there, a sticky note on the fridge. Half of it is outdated. None of it answers the question they actually have.",
    },
    {
      emoji: "🤞",
      title: "The hope-for-the-best",
      description:
        "You leave town and just... hope everything goes okay. No way to know if Luna got her meds. No way to know if the plants got watered. Just silence.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-bg-warm-wash">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl text-text-primary mb-4">
            Sound familiar?
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Every pet owner who travels knows this feeling. You&apos;ve tried
            texts, docs, and detailed notes. It never quite works.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-bg-raised border border-border-default rounded-xl p-6 shadow-sm"
            >
              <div className="text-3xl mb-4">{problem.emoji}</div>
              <h3 className="font-body text-lg font-semibold text-text-primary mb-2">
                {problem.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-text-primary mb-4">
            One link. Every answer.
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Build a care manual once, share it with a link. Your sitter gets a
            daily view with exactly what to do, when, and where everything is.
          </p>
        </div>

        {/* Feature: Location Cards */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary font-body text-xs font-semibold px-3 py-1.5 rounded-pill mb-4">
              <CameraIcon size={14} /> Signature feature
            </div>
            <h3 className="font-display text-3xl text-text-primary mb-4">
              Show them where things are
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
              Attach a photo to any instruction. &ldquo;Luna&apos;s pills are on the
              bottom shelf, behind the cereal.&rdquo; No more guessing, no more
              midnight texts.
            </p>
            <p className="font-handwritten text-xl text-accent">
              &ldquo;Bottom shelf, pantry, behind the cereal&rdquo;
            </p>
          </div>
          <div className="flex justify-center">
            <LocationCardMock />
          </div>
        </div>

        {/* Feature: Today View */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 flex justify-center">
            <TodayViewMock />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-secondary-light text-secondary font-body text-xs font-semibold px-3 py-1.5 rounded-pill mb-4">
              <CalendarIcon size={14} /> Daily view
            </div>
            <h3 className="font-display text-3xl text-text-primary mb-4">
              Only what matters today
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Your sitter lands on a daily checklist &mdash; morning meds,
              afternoon walk, evening feeding. Tasks reset each day. No
              scrolling through a 10-page doc to find what&apos;s relevant right now.
            </p>
          </div>
        </div>

        {/* Feature: Vault */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 bg-vault-light text-vault font-body text-xs font-semibold px-3 py-1.5 rounded-pill mb-4">
              <LockIcon size={14} /> Encrypted
            </div>
            <h3 className="font-display text-3xl text-text-primary mb-4">
              Secure codes, shared safely
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Door codes, WiFi passwords, alarm instructions &mdash; encrypted
              and phone-verified. Auto-expires when your trip ends. You get
              notified every time they&apos;re accessed.
            </p>
          </div>
          <div className="flex justify-center">
            <VaultMock />
          </div>
        </div>

        {/* Feature: Updates */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <UpdatesMock />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent-hover font-body text-xs font-semibold px-3 py-1.5 rounded-pill mb-4">
              <BellIcon size={14} /> Real-time
            </div>
            <h3 className="font-display text-3xl text-text-primary mb-4">
              Know everything got done
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              Task check-offs, photo proof, vault access &mdash; you see it all
              in real time. Optional photo proof for the tasks that matter most.
              Finally, peace of mind on vacation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: <HomeIcon size={24} />,
      title: "Build your manual",
      description:
        "A guided wizard walks you through everything: pets, house instructions, vault codes, emergency contacts. Add photos of where things are.",
    },
    {
      number: "2",
      icon: <ShareIcon size={24} />,
      title: "Share a link",
      description:
        "Create a trip, add your sitter, and send them one link. No app download, no account needed. They just open it.",
    },
    {
      number: "3",
      icon: <CalendarIcon size={24} />,
      title: "Relax and track",
      description:
        "Your sitter follows the daily checklist. You get notified when tasks are done. After the trip, get a full report.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-bg-warm-wash scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl text-text-primary mb-4">
            Three steps to peace of mind
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-text-on-primary flex items-center justify-center mx-auto mb-5 shadow-md">
                {step.icon}
              </div>
              <h3 className="font-body text-lg font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SitterSection() {
  const perks = [
    {
      icon: "🔗",
      text: "No app to download — just a link",
    },
    {
      icon: "👤",
      text: "No account to create",
    },
    {
      icon: "📶",
      text: "Works offline after first visit",
    },
    {
      icon: "📞",
      text: "One-tap emergency contacts",
    },
    {
      icon: "🔍",
      text: "Search anything — \"dog food\", \"thermostat\"",
    },
    {
      icon: "📸",
      text: "Photo proof uploads in seconds",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-bg-raised border border-border-default rounded-2xl p-8 md:p-12 shadow-md">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
              Your sitter will actually love using this
            </h2>
            <p className="font-body text-base text-text-secondary max-w-xl mx-auto">
              No downloads, no signups, no confusion. They open a link and know
              exactly what to do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {perks.map((perk) => (
              <div
                key={perk.text}
                className="flex items-start gap-3 bg-bg p-4 rounded-lg"
              >
                <span className="text-xl shrink-0">{perk.icon}</span>
                <span className="font-body text-sm text-text-primary font-medium">
                  {perk.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PetSection() {
  return (
    <section className="py-20 px-6 bg-bg-warm-wash">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl text-text-primary mb-4">
          Built for pet parents who care deeply
        </h2>
        <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-12">
          Rich pet profiles capture everything &mdash; feeding schedules,
          medications, personality quirks, vet info, and those little things
          only you know.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[
            { emoji: "🍽", label: "Feeding schedules", detail: "What, when, where" },
            { emoji: "💊", label: "Medications", detail: "Dosage, time, location" },
            { emoji: "🐾", label: "Personality notes", detail: "\"Shy with strangers\"" },
            { emoji: "🩺", label: "Vet info", detail: "Tap-to-call" },
            { emoji: "🚶", label: "Walking routine", detail: "Duration, route, leash" },
            { emoji: "⚠️", label: "Behavioral quirks", detail: "\"Escapes through garage\"" },
            { emoji: "🧸", label: "Comfort items", detail: "\"Blue blanket, hall closet\"" },
            { emoji: "🏥", label: "Medical conditions", detail: "Allergies, history" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-bg-raised border border-border-default rounded-lg p-4 shadow-xs"
            >
              <div className="text-2xl mb-2">{item.emoji}</div>
              <div className="font-body text-sm font-semibold text-text-primary">
                {item.label}
              </div>
              <div className="font-body text-xs text-text-muted mt-0.5">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Does my sitter need to download an app?",
      a: "No. They just open the link you send them — it works in any browser. It even works offline after the first visit.",
    },
    {
      q: "Is it really free?",
      a: "Yes. Vadem is completely free during early access. We'll let you know well in advance if that changes.",
    },
    {
      q: "How are my door codes and passwords protected?",
      a: "Vault items are encrypted end-to-end. Your sitter must verify their phone number via SMS to view them. Access auto-expires when your trip ends, and you're notified every time a code is accessed.",
    },
    {
      q: "Can I reuse my manual for multiple trips?",
      a: "Absolutely. You build the manual once and reuse it every time you travel. Each trip gets its own overlay for anything that's different that week.",
    },
    {
      q: "What if my sitter doesn't have cell service at my house?",
      a: "After the first visit, everything — instructions, photos, pet profiles, emergency contacts — is cached offline. Only vault codes require an internet connection for security.",
    },
    {
      q: "What about my privacy? Who can see my information?",
      a: "Only people with your unique link can view instructions. Vault items require phone verification. You can regenerate the link at any time to revoke all access.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl text-text-primary mb-4">
            Common questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-bg-raised border border-border-default rounded-lg p-5"
            >
              <h3 className="font-body text-base font-semibold text-text-primary mb-2">
                {faq.q}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-8 md:p-14 text-center relative overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/[0.06] pointer-events-none" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 relative">
            Your next trip starts with less worry
          </h2>
          <p className="font-body text-base text-white/80 max-w-lg mx-auto mb-8 relative">
            Build your care manual in minutes. Share it with a single link.
            Travel knowing your pets and home are in good hands.
          </p>
          <Link
            href="/signup"
            className="inline-block font-body text-base font-semibold bg-white text-primary px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-[box-shadow] duration-150 relative"
          >
            Create your free Vadem
          </Link>
          <p className="font-body text-sm text-white/60 mt-4 relative">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border-default">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl text-text-primary">Vadem</div>
        <p className="font-body text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Vadem. Made with care for people who
          care.
        </p>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   Mock Components — illustrative, not functional
   ────────────────────────────────────────────── */

function LocationCardMock() {
  return (
    <div
      className="bg-bg-raised rounded-lg p-2 shadow-polaroid w-64 -rotate-1"
    >
      {/* Photo placeholder */}
      <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center mb-3">
        <span className="text-4xl">💊</span>
      </div>
      <p className="font-handwritten text-xl text-text-primary px-1 mb-2">
        Bottom shelf, behind the cereal
      </p>
      <div className="px-1 pb-1">
        <span className="inline-block font-body text-xs font-semibold text-text-secondary bg-bg-sunken border border-border-default px-2.5 py-0.5 rounded-pill">
          Kitchen
        </span>
      </div>
    </div>
  );
}

function TodayViewMock() {
  const tasks = [
    { time: "7:00 AM", text: "Feed Luna — 1 cup kibble + joint supplement", done: true },
    { time: "7:30 AM", text: "Give Luna arthritis pill (white bottle)", done: true },
    { time: "8:00 AM", text: "Let Luna out in backyard (15 min)", done: false },
  ];

  return (
    <div className="bg-bg-raised rounded-2xl shadow-xl overflow-hidden w-72 border border-border-default">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-hover p-5 rounded-b-2xl">
        <p className="font-display text-2xl text-white">Good morning</p>
        <p className="font-body text-sm text-white/70 mt-1">
          Day 2 of 5 &middot; Tuesday
        </p>
      </div>
      {/* Tasks */}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center">
            <span className="text-xs">☀️</span>
          </div>
          <span className="font-body text-xs font-bold text-text-muted uppercase tracking-wide">
            Morning
          </span>
          <div className="flex-1 h-px bg-border-default" />
        </div>
        {tasks.map((task) => (
          <div
            key={task.text}
            className={`flex items-start gap-3 p-3 rounded-lg border ${
              task.done
                ? "bg-secondary-subtle border-secondary-light"
                : "bg-bg-raised border-border-default"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-sm border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                task.done
                  ? "bg-secondary border-secondary"
                  : "border-border-strong"
              }`}
            >
              {task.done && <CheckIcon size={12} className="text-white" />}
            </div>
            <div>
              <p
                className={`font-body text-sm ${
                  task.done
                    ? "text-text-muted line-through"
                    : "text-text-primary"
                }`}
              >
                {task.text}
              </p>
              <span className="inline-block mt-1 font-body text-xs font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-pill">
                {task.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VaultMock() {
  const items = [
    { icon: "🚪", label: "Front Door Code", value: "4 8 2 7" },
    { icon: "📶", label: "WiFi Password", value: "sunnyDay2024" },
    { icon: "🔔", label: "Alarm Code", value: "1 9 7 3" },
  ];

  return (
    <div className="bg-bg-raised rounded-2xl shadow-md border border-border-default w-72 overflow-hidden">
      <div className="bg-vault px-5 py-3">
        <div className="flex items-center gap-2">
          <LockIcon size={16} className="text-white" />
          <span className="font-body text-sm font-semibold text-white">
            Secure Vault
          </span>
        </div>
        <p className="font-body text-xs text-white/60 mt-0.5">
          Phone-verified &middot; Auto-expires
        </p>
      </div>
      <div className="p-3 space-y-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 p-3 bg-vault-subtle rounded-lg border border-vault-light"
          >
            <div className="w-10 h-10 rounded-md bg-vault flex items-center justify-center shrink-0">
              <span className="text-lg">{item.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-xs text-text-muted">{item.label}</p>
              <p className="font-body text-sm font-semibold text-vault tracking-wider">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UpdatesMock() {
  const events = [
    {
      dot: "bg-secondary",
      text: (
        <>
          <strong>Sarah</strong> completed{" "}
          <strong>&ldquo;morning feeding&rdquo;</strong>
        </>
      ),
      time: "7:12 AM",
      hasPhoto: true,
    },
    {
      dot: "bg-vault",
      text: (
        <>
          <strong>Sarah</strong> accessed <strong>alarm code</strong>
        </>
      ),
      time: "6:45 AM",
      hasPhoto: false,
    },
    {
      dot: "bg-primary",
      text: (
        <>
          <strong>Sarah</strong> opened your Vadem
        </>
      ),
      time: "6:30 AM",
      hasPhoto: false,
    },
  ];

  return (
    <div className="bg-bg-raised rounded-2xl shadow-md border border-border-default w-72 overflow-hidden">
      <div className="px-5 py-3 border-b border-border-default">
        <div className="flex items-center gap-2">
          <BellIcon size={16} className="text-text-primary" />
          <span className="font-body text-sm font-semibold text-text-primary">
            Activity Feed
          </span>
        </div>
      </div>
      <div className="p-3 space-y-0">
        {events.map((event, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 px-2 py-3 ${
              i < events.length - 1
                ? "border-b border-border-default"
                : ""
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${event.dot} mt-1.5 shrink-0`}
            />
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm text-text-secondary">
                {event.text}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <ClockIcon size={12} className="text-text-muted" />
                <span className="font-body text-xs text-text-muted">
                  {event.time}
                </span>
                {event.hasPhoto && (
                  <span className="inline-flex items-center gap-1 font-body text-xs text-accent font-medium">
                    <CameraIcon size={12} /> Photo attached
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page Export
   ────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-bg">
      <Nav />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <PetSection />
        <SitterSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
