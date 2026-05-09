"use client";

const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "purple",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js (SSR/ISR)", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Redux Toolkit", level: 88 },
      { name: "Vite / Webpack", level: 85 },
    ],
  },
  {
    category: "API & Data",
    icon: "⚡",
    color: "cyan",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "Axios", level: 92 },
      { name: "React Query", level: 90 },
      { name: "Optimistic UI", level: 88 },
      { name: "WebSockets", level: 82 },
    ],
  },
  {
    category: "Performance",
    icon: "🚀",
    color: "pink",
    skills: [
      { name: "Web Vitals Optimization", level: 90 },
      { name: "Code Splitting", level: 88 },
      { name: "SEO / Semantic HTML", level: 85 },
      { name: "Image Optimization", level: 92 },
      { name: "PWA", level: 80 },
    ],
  },
  {
    category: "Architecture",
    icon: "🏗️",
    color: "purple",
    skills: [
      { name: "Modular UI Design", level: 90 },
      { name: "Component Libraries", level: 92 },
      { name: "Atomic Design", level: 88 },
      { name: "Enterprise Patterns", level: 85 },
      { name: "API Integration", level: 95 },
    ],
  },
  {
    category: "Engineering",
    icon: "🔧",
    color: "cyan",
    skills: [
      { name: "Antigravity Framework", level: 95 },
      { name: "CI/CD (GitHub Actions)", level: 82 },
      { name: "Jest / RTL", level: 85 },
      { name: "Agile / Scrum", level: 90 },
      { name: "Git", level: 92 },
    ],
  },
];

const TECH_TAGS = [
  "React.js", "Next.js", "TypeScript", "Redux Toolkit", "React Query",
  "Antigravity", "Web Vitals", "SEO", "PWA", "WebSockets",
  "Vite", "Webpack", "Jest", "GitHub Actions", "REST APIs",
  "Axios", "Modular UI", "Atomic Design", "Agile", "Optimistic UI",
];

const colorMap: Record<string, { bar: string; label: string; border: string; bg: string }> = {
  purple: {
    bar: "linear-gradient(90deg, #7c3aed, #a78bfa)",
    label: "var(--accent-purple-light)",
    border: "rgba(124,58,237,0.3)",
    bg: "rgba(124,58,237,0.07)",
  },
  cyan: {
    bar: "linear-gradient(90deg, #06b6d4, #67e8f9)",
    label: "var(--accent-cyan-light)",
    border: "rgba(6,182,212,0.3)",
    bg: "rgba(6,182,212,0.07)",
  },
  pink: {
    bar: "linear-gradient(90deg, #ec4899, #f9a8d4)",
    label: "#f9a8d4",
    border: "rgba(236,72,153,0.3)",
    bg: "rgba(236,72,153,0.07)",
  },
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skill Set</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
            A curated stack of technologies I use to build fast, scalable, and accessible web experiences.
          </p>
        </div>

        {/* Tech Tags Cloud */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "64px",
          }}
        >
          {TECH_TAGS.map((tag, i) => (
            <span
              key={tag}
              className={i % 3 === 0 ? "tag-chip tag-purple" : i % 3 === 1 ? "tag-chip tag-cyan" : "tag-chip tag-pink"}
              style={{ cursor: "default" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {SKILLS_DATA.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.category}
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: "16px",
                  padding: "28px",
                  transition: "all 0.3s ease",
                }}
                className="glass-card"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <span style={{ fontSize: "1.6rem" }}>{group.icon}</span>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: c.label,
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <span style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 500 }}>
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.78rem",
                            color: c.label,
                            fontFamily: "'Fira Code', monospace",
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{
                            width: `${skill.level}%`,
                            background: c.bar,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
