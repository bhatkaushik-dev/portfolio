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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>

          {/* Left — contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="glass-card" style={{ padding: "28px", marginBottom: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e", display: "inline-block" }} />
                <span style={{ fontSize: "0.85rem", color: "#22c55e", fontFamily: "'Fira Code', monospace" }}>
                  Available for work
                </span>
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
                Open to new opportunities
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Whether it&apos;s a full-time role, freelance project, or contract work — I&apos;m ready to bring my frontend expertise to your team.
              </p>
            </div>

            {CONTACT_ITEMS.map((item) => {
              const c = colorMap[item.color];
              const content = (
                <div
                  className="glass-card"
                  style={{ padding: "18px 22px", background: c.bg, borderColor: c.border, display: "flex", alignItems: "center", gap: "16px", cursor: item.href ? "pointer" : "default" }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: c.border, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "2px", fontFamily: "'Fira Code', monospace" }}>{item.label}</div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: item.href ? c.accent : "var(--text-primary)" }}>{item.value}</div>
                  </div>
                  {item.href && <span style={{ marginLeft: "auto", color: c.accent, opacity: 0.6 }}>→</span>}
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Right — CTA card */}
          <div className="glass-card" style={{ padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🚀</div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "12px" }}>
              Ready to build something{" "}
              <span className="gradient-text">amazing?</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "32px" }}>
              I bring 3+ years of frontend expertise, a passion for clean code, and a commitment to delivering polished, performant user experiences. Let&apos;s create something great together.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="mailto:kaushikgb99@gmail.com"
                className="btn-primary"
                style={{ textDecoration: "none", justifyContent: "center", fontSize: "1rem", padding: "14px 32px" }}
              >
                <span>📬</span> Send Me An Email
              </a>
              <a
                href="https://www.linkedin.com/in/kaushik-bhat-3368b1195/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: "none", justifyContent: "center", fontSize: "1rem", padding: "14px 32px" }}
              >
                <span>💼</span> Connect on LinkedIn
              </a>
            </div>

            <div style={{ marginTop: "32px", padding: "16px", borderRadius: "10px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontFamily: "'Fira Code', monospace" }}>
                ⚡ Usually responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
