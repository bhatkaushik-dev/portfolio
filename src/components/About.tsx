"use client";

const ABOUT_FACTS = [
  { icon: "📍", label: "Location", value: "Bengaluru, India" },
  { icon: "💼", label: "Role", value: "Frontend Engineer" },
  { icon: "🏢", label: "Company", value: "Invenzo Labs" },
  { icon: "📅", label: "Experience", value: "3+ Years" },
  { icon: "🎓", label: "Degree", value: "B.Tech , BIT" },
  { icon: "🌐", label: "Focus", value: "React & Next.js" },
];

const HIGHLIGHTS = [
  {
    number: "50+",
    label: "Projects",
    color: "var(--accent-purple-light)",
  },
  {
    number: "35%",
    label: "LCP Improvement",
    color: "var(--accent-cyan-light)",
  },
  { number: "5K+", label: "Daily Active Users", color: "#f9a8d4" },
  {
    number: "80%+",
    label: "Test Coverage",
    color: "var(--accent-purple-light)",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label">Get To Know Me</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="about-grid">
          {/* Left — text */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 18px",
                borderRadius: "999px",
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.3)",
                marginBottom: "24px",
                fontSize: "0.85rem",
                color: "var(--accent-purple-light)",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              <span>👋</span> Software Engineer — Frontend
            </div>

            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                marginBottom: "16px",
                lineHeight: 1.3,
              }}
            >
              I build fast, beautiful,{" "}
              <span className="gradient-text-cyan">accessible</span> UIs.
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: "16px",
                fontSize: "0.97rem",
              }}
            >
              I&apos;m a Software Engineer with{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                3+ years of experience
              </strong>{" "}
              specializing in{" "}
              <strong style={{ color: "var(--accent-purple-light)" }}>
                React
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--accent-cyan-light)" }}>
                Next.js
              </strong>
              . I have a proven track record of delivering high-scale consumer
              UIs that serve thousands of users daily.
            </p>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: "24px",
                fontSize: "0.97rem",
              }}
            >
              I&apos;m passionate about performance optimization, design
              systems, and accessibility. I love collaborating with UX and
              Product teams to turn complex requirements into elegant,
              maintainable frontend architectures.
            </p>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: "32px",
                fontSize: "0.97rem",
              }}
            >
              Outside of work, I&apos;m constantly exploring new tech — whether
              it&apos;s experimenting with animation libraries, contributing to
              side projects, or diving into the latest frontend patterns.
            </p>
          </div>

          {/* Right — cards */}
          <div>
            {/* Quick facts */}
            <div
              className="glass-card"
              style={{ padding: "28px", marginBottom: "20px" }}
            >
              <h4
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginBottom: "18px",
                  fontFamily: "'Fira Code', monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Quick Facts
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                {ABOUT_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{fact.icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {fact.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        {fact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="stat-card"
                  style={{ padding: "20px" }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      color: h.color,
                      lineHeight: 1,
                    }}
                  >
                    {h.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      marginTop: "6px",
                    }}
                  >
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 968px) {
          .about-grid {
            gap: 32px;
          }
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
