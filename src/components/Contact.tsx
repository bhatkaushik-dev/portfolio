"use client";

const CONTACT_ITEMS = [
  {
    icon: "📧",
    label: "Email",
    value: "kaushikgb99@gmail.com",
    href: "mailto:kaushikgb99@gmail.com",
    color: "purple",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91-9110691605",
    href: "tel:+919110691605",
    color: "cyan",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bengaluru, India",
    href: null,
    color: "pink",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/kaushik-bhat",
    href: "https://www.linkedin.com/in/kaushik-bhat-3368b1195/",
    color: "purple",
  },
];

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  purple: { accent: "var(--accent-purple-light)", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.25)" },
  cyan: { accent: "var(--accent-cyan-light)", bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.25)" },
  pink: { accent: "#f9a8d4", bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.25)" },
};

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 24px", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
      {/* Blobs */}
      <div className="bg-blob" style={{ width: "500px", height: "500px", background: "#7c3aed", top: "-100px", right: "-150px" }} />
      <div className="bg-blob" style={{ width: "350px", height: "350px", background: "#06b6d4", bottom: "-80px", left: "-100px" }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label">Let&apos;s Collaborate</p>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            I&apos;m open to new opportunities, collaborations, or just a friendly chat about frontend engineering. Don&apos;t hesitate to reach out!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {CONTACT_ITEMS.map((item) => {
            const c = colorMap[item.color];
            const content = (
              <div
                className="glass-card"
                style={{
                  padding: "24px",
                  background: c.bg,
                  borderColor: c.border,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "16px",
                  height: "100%",
                  cursor: item.href ? "pointer" : "default",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: c.border,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                      fontFamily: "'Fira Code', monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: item.href ? c.accent : "var(--text-primary)",
                      wordBreak: "break-all",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
                {item.href && (
                  <div style={{ marginTop: "auto", fontSize: "0.8rem", color: c.accent, fontWeight: 500 }}>
                    Connect →
                  </div>
                )}
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        {/* Feedback Badge */}
        <div style={{ marginTop: "64px", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              borderRadius: "999px",
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              color: "#22c55e",
              fontSize: "0.85rem",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 10px #22c55e",
              }}
            />
            ⚡ Usually responds within 24 hours
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .glass-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
