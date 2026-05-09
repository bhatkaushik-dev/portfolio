"use client";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "32px", marginBottom: "40px" }}>
          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #7c3aed, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "white", fontSize: "1rem" }}>
                K
              </div>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
                Kaushik<span style={{ color: "var(--accent-purple-light)" }}>.dev</span>
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              Frontend Engineer crafting high-performance, accessible, and beautiful web experiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "14px", fontFamily: "'Fira Code', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)", fontSize: "0.88rem", fontFamily: "'Inter', sans-serif", textAlign: "left", transition: "color 0.2s", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-purple-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact quick links */}
          <div>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "14px", fontFamily: "'Fira Code', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Connect</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "📧 kaushikgb99@gmail.com", href: "mailto:kaushikgb99@gmail.com" },
                { label: "📞 +91-9110691605", href: "tel:+919110691605" },
                { label: "💼 LinkedIn Profile", href: "https://linkedin.com/in/kaushik-bhat" },
                { label: "🌐 annachy.com", href: "https://annachy.com/" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-secondary)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border-subtle)", marginBottom: "24px" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            © {year} Kaushik G Bhat. Built with{" "}
            <span style={{ color: "var(--accent-purple-light)" }}>Next.js</span> &{" "}
            <span style={{ color: "var(--accent-cyan-light)" }}>Tailwind CSS</span>.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontFamily: "'Fira Code', monospace" }}>
            Bengaluru, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
