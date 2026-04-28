"use client";

const PROJECTS = [
  {
    name: "Annachy",
    subtitle: "High-Scale Consumer Platform",
    emoji: "🛒",
    link: "https://annachy.com/",
    linkLabel: "annachy.com",
    color: "purple",
    tags: ["Next.js", "React", "PWA", "TypeScript", "Performance"],
    bullets: [
      "Key contributor for the storefront UI with 5K+ monthly active users.",
      "Implemented optimized image delivery (next/image, CDN) and PWA strategies to boost engagement.",
      "Delivered seamless checkout flows and real-time product listing updates.",
    ],
    metric: { value: "5K+", label: "Monthly Users" },
  },
  {
    name: "Healing Pharma",
    subtitle: "Enterprise Operations Suite",
    emoji: "💊",
    link: null,
    linkLabel: null,
    color: "cyan",
    tags: ["React", "Redux Toolkit", "TypeScript", "Modular CSS", "Form Handling"],
    bullets: [
      "Developed a comprehensive admin dashboard handling 500K+ records.",
      "Focused on modular UI structures and robust form handling for complex enterprise workflows.",
      "Built reusable data-table components with sorting, filtering, and pagination.",
    ],
    metric: { value: "500K+", label: "Records Managed" },
  },
  {
    name: "Izowhiz",
    subtitle: "Real-Time Logistics Ecosystem",
    emoji: "🚚",
    link: "https://www.invenzolabs.com/products/izowhiz",
    linkLabel: "invenzolabs.com",
    color: "pink",
    tags: ["WebSockets", "Mappls Map API", "React", "Real-time", "60FPS"],
    bullets: [
      "Engineered a real-time vehicle tracking interface using WebSockets and Mappls Map API.",
      "Implemented custom throttling logic to maintain 60FPS performance during high-frequency data spikes.",
      "Designed a clean logistics dashboard with live status updates and route visualization.",
    ],
    metric: { value: "60FPS", label: "Under Data Spikes" },
  },
];

const colorMap: Record<string, { accent: string; bg: string; border: string; tag: string }> = {
  purple: {
    accent: "var(--accent-purple-light)",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.25)",
    tag: "tag-purple",
  },
  cyan: {
    accent: "var(--accent-cyan-light)",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.25)",
    tag: "tag-cyan",
  },
  pink: {
    accent: "#f9a8d4",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.25)",
    tag: "tag-pink",
  },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label">What I&apos;ve Built</p>
          <h2 className="section-title">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
            Selected projects that demonstrate my expertise in building production-grade web applications.
          </p>
        </div>

        {/* Project Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {PROJECTS.map((project, idx) => {
            const c = colorMap[project.color];
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.name}
                className="glass-card"
                style={{
                  padding: "36px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  alignItems: "center",
                  background: c.bg,
                  borderColor: c.border,
                }}
              >
                {/* Content side */}
                <div style={{ order: isEven ? 0 : 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{project.emoji}</span>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: 800,
                          color: "var(--text-primary)",
                        }}
                      >
                        {project.name}
                      </h3>
                      <p style={{ fontSize: "0.85rem", color: c.accent, fontWeight: 500 }}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={`tag-chip ${c.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                    {project.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "10px",
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ color: c.accent, flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ textDecoration: "none", display: "inline-flex", fontSize: "0.88rem" }}
                    >
                      <span>🔗</span>
                      <span>Visit {project.linkLabel}</span>
                    </a>
                  )}
                </div>

                {/* Visual / Metric side */}
                <div
                  style={{
                    order: isEven ? 1 : 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "200px",
                  }}
                >
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${c.bg} 0%, transparent 70%)`,
                      border: `2px solid ${c.border}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                    className="animate-pulse-glow"
                  >
                    <span style={{ fontSize: "3rem", marginBottom: "4px" }}>{project.emoji}</span>
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: 900,
                        color: c.accent,
                        lineHeight: 1,
                      }}
                    >
                      {project.metric.value}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        textAlign: "center",
                        marginTop: "4px",
                      }}
                    >
                      {project.metric.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .glass-card[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
