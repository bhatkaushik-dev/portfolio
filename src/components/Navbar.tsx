"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(5, 5, 15, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                fontWeight: 800,
                color: "white",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              K
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text-primary)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Kaushik<span style={{ color: "var(--accent-purple-light)" }}>.dev</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                style={{ background: "none", border: "none" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="mailto:kaushikgb99@gmail.com"
              className="btn-primary"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "9px 20px" }}
            >
              Hire Me
            </a>
            {/* Hamburger */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer",
                display: "none",
                flexDirection: "column",
                gap: "5px",
              }}
              className="show-mobile"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "20px",
                    height: "2px",
                    background: "var(--text-primary)",
                    borderRadius: "2px",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
            padding: "24px",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              fontSize: "1.6rem",
            }}
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                fontWeight: 600,
                color:
                  activeSection === link.href.replace("#", "")
                    ? "var(--accent-purple-light)"
                    : "var(--text-primary)",
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
