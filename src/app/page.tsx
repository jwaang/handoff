export default function Home() {
  return (
    <div
      style={{
        maxWidth: 768,
        margin: "0 auto",
        padding: "var(--space-8) var(--space-4)",
      }}
    >
      {/* Hero heading — Instrument Serif */}
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
        Design system tokens loaded successfully.
      </p>

      {/* Handwritten accent — Caveat */}
      <p
        style={{
          fontFamily: "var(--font-handwritten)",
          fontSize: "var(--text-xl)",
          lineHeight: "var(--leading-snug)",
          color: "var(--text)",
          marginBottom: "var(--space-8)",
        }}
      >
        &ldquo;The warmth of a handwritten care note.&rdquo;
      </p>

      {/* Color swatches */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "var(--space-3)",
          marginBottom: "var(--space-8)",
        }}
      >
        {[
          { name: "Primary", bg: "var(--primary)", text: "var(--text-on-primary)" },
          { name: "Secondary", bg: "var(--secondary)", text: "var(--text-on-primary)" },
          { name: "Accent", bg: "var(--accent)", text: "var(--text-on-primary)" },
          { name: "Vault", bg: "var(--vault)", text: "var(--text-on-vault)" },
          { name: "Danger", bg: "var(--danger)", text: "var(--text-on-primary)" },
        ].map((c) => (
          <div
            key={c.name}
            style={{
              background: c.bg,
              color: c.text,
              padding: "var(--space-4)",
              borderRadius: "var(--radius-md)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {c.name}
          </div>
        ))}
      </div>

      {/* Card demo with shadow + radius */}
      <div
        style={{
          background: "var(--bg-raised)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-polaroid)",
          padding: "var(--space-5)",
          border: "1px solid var(--border)",
          marginBottom: "var(--space-8)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            lineHeight: "var(--leading-snug)",
            color: "var(--text)",
            marginBottom: "var(--space-2)",
          }}
        >
          Location Card Preview
        </h2>
        <p
          style={{
            fontFamily: "var(--font-handwritten)",
            fontSize: "var(--text-xl)",
            color: "var(--text-secondary)",
          }}
        >
          Kitchen — main food prep area
        </p>
      </div>

      {/* Badge row */}
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {[
          { label: "Completed", bg: "var(--success-light)", color: "var(--success)" },
          { label: "Due Today", bg: "var(--warning-light)", color: "#8B6420" },
          { label: "Urgent", bg: "var(--danger-light)", color: "var(--danger)" },
          { label: "7:00 AM", bg: "var(--primary-light)", color: "var(--primary)" },
          { label: "Secure", bg: "var(--vault-light)", color: "var(--vault)" },
        ].map((b) => (
          <span
            key={b.label}
            style={{
              background: b.bg,
              color: b.color,
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "var(--radius-pill)",
            }}
          >
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}
