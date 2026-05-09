"use client";

const EDUCATION = [
  {
    degree: "B.Tech",
    institution: "Bangalore Institute of Technology",
    period: "2017 – 2021",
    icon: "🎓",
    color: "purple",
    description: "",
    tags: [""],
  },
  {
    degree: "Full Stack (MERN) Certification",
    institution: "HCL GUVI Geeks Network",
    period: "2021 – 2022",
    icon: "⚡",
    color: "cyan",
    description:
      "Intensive full-stack training covering MongoDB, Express.js, React, and Node.js. Built real-world projects with the MERN stack.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    certificateLink:
      "https://www.guvi.in/certificate?id=Gw2508Sl662U63m1r7&download=true",
  },
];

const colorMap: Record<
  string,
  { accent: string; bg: string; border: string; tag: string }
> = {
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
};

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {EDUCATION.map((edu) => {
            const c = colorMap[edu.color];
            return (
              <div
                key={edu.degree}
                className="glass-card"
                style={{
                  padding: "32px",
                  background: c.bg,
                  borderColor: c.border,
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: c.border,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    flexShrink: 0,
                  }}
                >
                  {edu.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "0.8rem",
                        color: c.accent,
                        padding: "3px 12px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid ${c.border}`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p
                    style={{
                      color: c.accent,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      marginBottom: "14px",
                    }}
                  >
                    {edu.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {edu.tags.map((tag) => (
                        <span key={tag} className={`tag-chip ${c.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {edu.certificateLink && (
                      <a
                        href={edu.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link"
                        style={{
                          fontSize: "0.85rem",
                          color: c.accent,
                          textDecoration: "none",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        View Certificate ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
