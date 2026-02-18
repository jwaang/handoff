import { TodayViewHeader } from "@/components/ui/TodayViewHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  EmergencyContactBar,
  type EmergencyContact,
} from "@/components/ui/EmergencyContactBar";
import { Input } from "@/components/ui/Input";
import { LocationCard } from "@/components/ui/LocationCard";
import {
  PetProfileCard,
  type PetDetail,
} from "@/components/ui/PetProfileCard";
import { Textarea } from "@/components/ui/Textarea";
import { SearchBar } from "@/components/ui/SearchBar";
import { TaskItem } from "@/components/ui/TaskItem";
import { VaultItem, LockIcon } from "@/components/ui/VaultItem";
import { SectionNav } from "@/components/ui/SectionNav";
import { WizardProgress } from "@/components/ui/WizardProgress";
import { NotificationToast } from "@/components/ui/NotificationToast";
import { BottomNav } from "@/components/ui/BottomNav";
import { TimeSlotDivider } from "@/components/ui/TimeSlotDivider";
import { ActivityFeedItem } from "@/components/ui/ActivityFeedItem";
import { CreatorLayout } from "@/components/layouts/CreatorLayout";
import { SitterLayout } from "@/components/layouts/SitterLayout";

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="8" y1="3" x2="8" y2="13" />
      <line x1="3" y1="8" x2="13" y2="8" />
    </svg>
  );
}

const samplePetDetails: PetDetail[] = [
  { emoji: "🍗", label: "Feeding", value: "2× daily, 1 cup kibble" },
  { emoji: "💊", label: "Medications", value: "Apoquel, 1 tab AM" },
  { emoji: "🦮", label: "Walking", value: "30 min, morning & evening" },
  {
    emoji: "🏥",
    label: "Vet",
    value: "Dr. Rivera · (555) 987-6543",
    phone: "+15559876543",
  },
];

const sampleContacts: EmergencyContact[] = [
  { name: "Sarah M.", role: "owner", phone: "+15551234567" },
  { name: "Dr. Rivera", role: "vet", phone: "+15559876543" },
  { name: "Tom K.", role: "neighbor", phone: "+15554567890" },
  { name: "Animal Control", role: "emergency", phone: "+15550001111" },
  { name: "Pet Poison Help", role: "emergency", phone: "+18882324435" },
];

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 768,
        margin: "0 auto",
        padding: "var(--space-8) var(--space-4)",
        paddingBottom: "calc(var(--space-8) + 80px)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-5xl)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--text)",
          marginBottom: "var(--space-2)",
        }}
      >
        Handoff
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-lg)",
          lineHeight: "var(--leading-normal)",
          color: "var(--text-secondary)",
          marginBottom: "var(--space-8)",
        }}
      >
        Component showcase
      </p>

      {/* ── Layout Shells ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Layout Shells
        </h2>
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-muted)",
            marginBottom: "var(--space-4)",
          }}
        >
          Responsive layout containers. Creator: sidebar nav (desktop) + bottom
          nav (mobile). Sitter: full-width mobile-first + bottom nav. Resize
          browser to see breakpoint changes.
        </p>

        {/* Creator Layout Demo */}
        <div style={{ marginBottom: "var(--space-6)" }}>
          <p
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Creator Dashboard Layout
          </p>
          <div
            style={{
              border: "1.5px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              height: 320,
              position: "relative",
            }}
          >
            <CreatorLayout
              style={{
                minHeight: 320,
                height: 320,
              }}
            >
              <div
                style={{
                  padding: "var(--space-6)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                  }}
                >
                  My Property
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Sidebar visible at 1024px+. Bottom nav visible below 1024px.
                  Content max-width: 960px (desktop), 720px (tablet), 768px
                  (mobile).
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-3)",
                    flexWrap: "wrap",
                  }}
                >
                  <Badge variant="room">Kitchen</Badge>
                  <Badge variant="room">Garage</Badge>
                  <Badge variant="success">Active</Badge>
                </div>
              </div>
            </CreatorLayout>
          </div>
        </div>

        {/* Sitter Layout Demo */}
        <div>
          <p
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Sitter View Layout
          </p>
          <div
            style={{
              border: "1.5px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              height: 320,
              position: "relative",
            }}
          >
            <SitterLayout
              style={{
                minHeight: 320,
                height: 320,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                  }}
                >
                  Today View
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Full-width mobile-first layout. Bottom nav always visible.
                  Content max-width: 640px centered. Today view is the default
                  landing.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-3)",
                    flexWrap: "wrap",
                  }}
                >
                  <Badge variant="time">7:00 AM</Badge>
                  <Badge variant="overlay">This Trip Only</Badge>
                  <Badge variant="success">Active</Badge>
                </div>
              </div>
            </SitterLayout>
          </div>
        </div>
      </section>

      {/* ── Today View Header ── */}
      <section style={{ marginBottom: "var(--space-8)", marginLeft: "calc(-1 * var(--space-4))", marginRight: "calc(-1 * var(--space-4))", marginTop: "calc(-1 * var(--space-8))" }}>
        <TodayViewHeader
          sitterName="Jamie"
          currentDay={2}
          totalDays={5}
          tasksToday={6}
          completedTasks={2}
          proofNeeded={3}
        />
      </section>

      {/* ── Time Slot Dividers ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Time Slot Dividers
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <TimeSlotDivider slot="morning" />
          <TimeSlotDivider slot="afternoon" />
          <TimeSlotDivider slot="evening" />
        </div>
      </section>

      {/* ── Activity Feed Items ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Activity Feed
        </h2>
        <div
          style={{
            backgroundColor: "var(--bg-raised)",
            borderRadius: "var(--radius-md)",
            border: "1.5px solid var(--border)",
            padding: "0 var(--space-4)",
          }}
        >
          <ActivityFeedItem
            type="view"
            name="Jamie"
            action="viewed the morning checklist"
            timestamp="2 min ago"
          />
          <ActivityFeedItem
            type="task"
            name="Jamie"
            action={'completed \u201cFeed Luna breakfast\u201d'}
            timestamp="15 min ago"
          />
          <ActivityFeedItem
            type="vault"
            name="Jamie"
            action="accessed the front door code"
            timestamp="1 hour ago"
          />
          <ActivityFeedItem
            type="proof"
            name="Jamie"
            action={'uploaded proof for \u201cWalk Luna\u201d'}
            timestamp="2 hours ago"
          />
          <ActivityFeedItem
            type="view"
            name="Jamie"
            action="opened the pet manual"
            timestamp="3 hours ago"
            hideBorder
          />
        </div>
      </section>

      {/* ── Bottom Navigation (inline demo) ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Bottom Navigation
        </h2>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>Inline demo (non-fixed)</p>
        <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1.5px solid var(--border)" }}>
          <BottomNav style={{ position: "relative" }} />
        </div>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>Active tab: &quot;Manual&quot;</p>
        <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1.5px solid var(--border)", marginTop: "var(--space-2)" }}>
          <BottomNav activeTab="manual" style={{ position: "relative" }} />
        </div>
      </section>

      {/* ── Wizard Progress ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Wizard Progress
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
          }}
        >
          <div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>Step 1 of 6 (Home)</p>
            <WizardProgress currentStep={0} />
          </div>
          <div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>Step 3 of 6 (Access)</p>
            <WizardProgress currentStep={2} />
          </div>
          <div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>Step 6 of 6 (Review)</p>
            <WizardProgress currentStep={5} />
          </div>
        </div>
      </section>

      {/* ── Section Navigation ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Section Navigation
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
          }}
        >
          <div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>Sitter manual sections</p>
            <SectionNav
              sections={[
                { id: "overview", emoji: "🏠", label: "Overview" },
                { id: "feeding", emoji: "🍗", label: "Feeding" },
                { id: "walking", emoji: "🦮", label: "Walking" },
                { id: "medications", emoji: "💊", label: "Medications" },
                { id: "emergency", emoji: "🚨", label: "Emergency" },
                { id: "house-rules", emoji: "📋", label: "House Rules" },
                { id: "vet-info", emoji: "🏥", label: "Vet Info" },
              ]}
              activeId="feeding"
            />
          </div>
          <div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>First section active (default)</p>
            <SectionNav
              sections={[
                { id: "overview", emoji: "🏠", label: "Overview" },
                { id: "feeding", emoji: "🍗", label: "Feeding" },
                { id: "walking", emoji: "🦮", label: "Walking" },
                { id: "medications", emoji: "💊", label: "Medications" },
                { id: "emergency", emoji: "🚨", label: "Emergency" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Notification Toasts ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Notification Toasts
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
            alignItems: "flex-end",
          }}
        >
          <NotificationToast
            variant="success"
            title="Task completed"
            message="Luna's morning walk has been marked as done."
            timestamp="Just now"
            autoDismissMs={0}
          />
          <NotificationToast
            variant="vault"
            title="Vault item revealed"
            message="Front door code is now visible for 10 minutes."
            timestamp="2 min ago"
            autoDismissMs={0}
          />
          <NotificationToast
            variant="warning"
            title="Task overdue"
            message="Evening feeding was due 30 minutes ago."
            timestamp="5 min ago"
            autoDismissMs={0}
          />
        </div>
      </section>

      {/* ── Badges ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Badges &amp; Pills
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            alignItems: "center",
          }}
        >
          <Badge variant="overlay">This Trip Only</Badge>
          <Badge variant="room">Kitchen</Badge>
          <Badge variant="room">Garage</Badge>
          <Badge variant="room">Backyard</Badge>
          <Badge variant="vault">Secure</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Due Today</Badge>
          <Badge variant="danger">Overdue</Badge>
          <Badge variant="time">7:00 AM</Badge>
          <Badge variant="time">6:00 PM</Badge>
        </div>
      </section>

      {/* ── Emergency Contact Bar ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Emergency Contact Bar
        </h2>
        <EmergencyContactBar contacts={sampleContacts} />
      </section>

      {/* ── Pet Profile Cards ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Pet Profile Cards
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          <PetProfileCard
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop"
            alt="Golden Retriever sitting in a field"
            name="Biscuit"
            breed="Golden Retriever"
            age="3 years old"
            details={samplePetDetails}
            personalityNote="Loves belly rubs, hides socks under the couch, and will sit by the door when she needs to go out 🐾"
          />
          <PetProfileCard
            name="Mochi"
            breed="Siamese Cat"
            age="5 years old"
            details={[
              { emoji: "🍗", label: "Feeding", value: "3× daily, wet food" },
              { emoji: "💊", label: "Medications", value: "None" },
            ]}
            personalityNote="Shy at first, then won't leave your lap. Chirps at birds through the window."
          />
        </div>
      </section>

      {/* ── Location Cards ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Location Cards
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          <LocationCard
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=450&fit=crop"
            alt="Modern house with pool"
            caption="Sarah's place on Oak St"
            room="Kitchen"
            tilt="tilted-left"
          />
          <LocationCard
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=450&fit=crop"
            alt="Cozy cottage"
            caption="Grandma's cottage"
            room="Living Room"
            tilt="neutral"
          />
          <LocationCard
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=450&fit=crop"
            alt="Suburban home"
            caption="Tom's backyard oasis"
            room="Backyard"
            tilt="tilted-right"
          />
          <LocationCard
            caption="Awaiting photos..."
            room="Garage"
            tilt="neutral"
          />
        </div>
      </section>

      {/* ── Inputs ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Text Input
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <Input
            label="Location Name"
            placeholder="e.g. Grandma's House"
            hint="Where your pet will be staying"
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
          />
          <Input
            label="Phone Number"
            placeholder="(555) 555-5555"
            error="Please enter a valid phone number"
          />
          <Input placeholder="No label, just placeholder" />
        </div>
      </section>

      {/* ── Textarea ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Textarea
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          <Textarea
            label="Special Instructions"
            placeholder="Any special care instructions for your pet..."
            hint="Include feeding schedule, medications, etc."
          />
          <Textarea
            label="Notes"
            placeholder="Add notes..."
            error="Notes are required for this handoff"
          />
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Search Bar
        </h2>
        <SearchBar placeholder="Search locations, contacts..." />
      </section>

      {/* ── Vault Items ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Vault Items
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          <VaultItem
            state="revealed"
            icon={<LockIcon />}
            label="Front Door Code"
            hint="Enter on keypad, press #"
            value="4 8 2 7"
          />
          <VaultItem
            state="revealed"
            icon={<LockIcon />}
            label="WiFi Password"
            hint="Network: HomeNet-5G"
            value="sunny42!"
          />
          <VaultItem
            state="locked"
            icon={<LockIcon />}
            label="Garage Code"
            hint="Verify your phone number to view"
          />
          <VaultItem
            state="hidden"
            icon={<LockIcon />}
            label=""
          />
        </div>
      </section>

      {/* ── Task Items ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Task Items
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          <TaskItem
            text="Feed Luna breakfast — 1 cup dry food"
            time="7:00 AM"
            room="Kitchen"
          />
          <TaskItem
            text="Walk Luna around the block (15 min)"
            time="8:00 AM"
            room="Backyard"
            showProof
          />
          <TaskItem
            text="Give Luna her joint supplement"
            time="7:00 AM"
            room="Kitchen"
            overlay
          />
          <TaskItem
            text="Refill water bowl"
            defaultCompleted
          />
          <TaskItem
            text="Check that garage door is locked"
            room="Garage"
            overlay
            showProof
          />
        </div>
      </section>

      {/* ── Buttons ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Variants
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            alignItems: "center",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="vault">Vault</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      {/* ── Sizes ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Sizes
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            alignItems: "center",
          }}
        >
          <Button size="lg">Large</Button>
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
        </div>
      </section>

      {/* ── With Icons ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          With Icons
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            alignItems: "center",
          }}
        >
          <Button icon={<PlusIcon />}>Add Location</Button>
          <Button variant="secondary" icon={<PlusIcon />}>
            Confirm
          </Button>
          <Button variant="soft" icon={<PlusIcon />} size="sm">
            Edit
          </Button>
        </div>
      </section>

      {/* ── Disabled ── */}
      <section style={{ marginBottom: "var(--space-8)" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Disabled
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            alignItems: "center",
          }}
        >
          <Button disabled>Primary</Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
          <Button variant="danger" disabled>
            Danger
          </Button>
        </div>
      </section>

      {/* ── All Sizes × All Variants ── */}
      <section>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
          }}
        >
          Size &times; Variant Matrix
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {(["lg", "default", "sm"] as const).map((size) => (
            <div
              key={size}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-2)",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                  minWidth: 60,
                }}
              >
                {size}
              </span>
              <Button variant="primary" size={size}>
                Primary
              </Button>
              <Button variant="secondary" size={size}>
                Secondary
              </Button>
              <Button variant="vault" size={size}>
                Vault
              </Button>
              <Button variant="ghost" size={size}>
                Ghost
              </Button>
              <Button variant="soft" size={size}>
                Soft
              </Button>
              <Button variant="danger" size={size}>
                Danger
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Fixed Bottom Navigation ── */}
      <BottomNav />
    </div>
  );
}
