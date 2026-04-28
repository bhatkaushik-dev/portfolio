"use client";

const BULLETS = [
  {
    icon: "🏗️",
    text: "Architected and delivered high-responsive UIs for consumer platforms reaching 5,000+ daily active users, ensuring 99.9% uptime and seamless product experiences.",
  },
  {
    icon: "🧩",
    text: "Built 50+ reusable TypeScript components using a modular CSS approach, standardizing the company's internal Design System and reducing development time by 20%.",
  },
  {
    icon: "⚡",
    text: "Resolved critical performance bottlenecks using Chrome DevTools and Lighthouse, leading to a 35% improvement in Largest Contentful Paint (LCP) and First Input Delay (FID).",
  },
  {
    icon: "🤝",
    text: "Collaborated with UX and Product Owners to translate complex business requirements into supportable technical solutions, adhering to WCAG accessibility standards.",
  },
  {
    icon: "🔗",
    text: "Integrated RESTful and GraphQL services with React Query, implementing Optimistic UI updates to provide a low-latency experience for real-time data.",
  },
  {
    icon: "🧪",
    text: "Ensured code quality by maintaining 80%+ unit test coverage using Jest and React Testing Library, reducing production bugs by 15%.",
  },
  {
    icon: "📊",
    text: "Monitored application health using tools like Grafana to proactively identify and debug frontend security vulnerabilities and runtime errors.",
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label">Career Journey</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline Card */}
        <div style={{ position: "relative" }}>
          {/* Timeline connector */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "2px",
              background: "linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)",
              marginLeft: "20px",
              borderRadius: "2px",
            }}
          />

          <div style={{ paddingLeft: "56px" }}>
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "12px",
                top: "24px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                border: "3px solid var(--bg-primary)",
                boxShadow: "0 0 20px rgba(124,58,237,0.6)",
              }}
            />

            {/* Card */}
            <div className="glass-card" style={{ padding: "36px", marginBottom: "32px" }}>
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    Software Engineer{" "}
                    <span className="gradient-text">(Frontend)</span>
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--accent-cyan-light)",
                      fontWeight: 600,
                    }}
                  >
                    Invenzo Labs — Bengaluru, India
                  </p>
                </div>
                <span
                  style={{
                    padding: "6px 16px",
                    borderRadius: "999px",
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    fontSize: "0.82rem",
                    color: "var(--accent-purple-light)",
                    fontFamily: "'Fira Code', monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  Feb 2023 — Present
                </span>
              </div>

              {/* Current badge */}
              <div style={{ marginBottom: "28px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.75rem",
                    color: "#22c55e",
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 8px #22c55e",
                      display: "inline-block",
                    }}
                  />
                  Currently working here
                </span>
              </div>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {BULLETS.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                      padding: "14px 16px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.25s",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: "1px" }}>
                      {b.icon}
                    </span>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: b.text
                          .replace(/(\d+[\+%][\w\s]*)/g, '<strong style="color:var(--text-primary)">$1</strong>')
                          .replace(/(React Query|GraphQL|Jest|React Testing Library|Grafana|Chrome DevTools|Lighthouse|WCAG)/g, '<span style="color:var(--accent-purple-light);font-weight:600">$1</span>'),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
