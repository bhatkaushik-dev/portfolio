"use client";
import { useEffect, useRef } from "react";

const ROLES = [
  "Frontend Engineer",
  "React Developer",
  "UI Engineer",
  "Next.js Developer",
];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = ROLES[roleIndex];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 100);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}
    >
      {/* Background Blobs */}
      <div
        className="bg-blob animate-float"
        style={{
          width: "600px",
          height: "600px",
          background: "#7c3aed",
          top: "-100px",
          right: "-200px",
        }}
      />
      <div
        className="bg-blob"
        style={{
          width: "400px",
          height: "400px",
          background: "#06b6d4",
          bottom: "-100px",
          left: "-150px",
          animationDelay: "2s",
        }}
      />
      <div
        className="bg-blob animate-float"
        style={{
          width: "300px",
          height: "300px",
          background: "#ec4899",
          top: "40%",
          left: "30%",
          opacity: 0.12,
          animationDelay: "1s",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          className="animate-fadeInUp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "999px",
            background: "rgba(124, 58, 237, 0.12)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 10px #22c55e",
            }}
          />
          <span
            style={{
              fontSize: "0.82rem",
              color: "var(--text-secondary)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            Open to opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="animate-fadeInUp delay-100"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "20px",
            opacity: 0,
          }}
        >
          Hi, I&apos;m <span className="gradient-text">Kaushik</span>
        </h1>

        {/* Typed role */}
        <div
          className="animate-fadeInUp delay-200"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.9rem)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "28px",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            opacity: 0,
          }}
        >
          <span style={{ color: "var(--accent-cyan)" }}>{"<"}</span>
          <span
            ref={roleRef}
            style={{ color: "var(--text-primary)", minWidth: "200px" }}
          />
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.4rem",
              background: "var(--accent-cyan)",
              borderRadius: "1px",
              animation: "blink 1s step-end infinite",
            }}
          />
          <span style={{ color: "var(--accent-cyan)" }}>{"/>"}</span>
        </div>

        {/* Description */}
        <p
          className="animate-fadeInUp delay-300"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--text-secondary)",
            maxWidth: "640px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
            opacity: 0,
          }}
        >
          Software Engineer with{" "}
          <strong style={{ color: "var(--text-primary)" }}>3+ years</strong> of
          experience crafting high-scale consumer UIs. I turn complex problems
          into beautiful, performant, and accessible experiences using{" "}
          <strong style={{ color: "var(--accent-purple-light)" }}>React</strong>{" "}
          &{" "}
          <strong style={{ color: "var(--accent-cyan-light)" }}>Next.js</strong>
          .
        </p>

        {/* Stats */}
        <div
          className="animate-fadeInUp delay-300"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "44px",
            opacity: 0,
          }}
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "50+", label: "Components Built" },
            { value: "35%", label: "LCP Improvement" },
            { value: "5K+", label: "Daily Users" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="stat-card"
              style={{ minWidth: "110px" }}
            >
              <div
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="animate-fadeInUp delay-400"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 0,
          }}
        >
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              padding: "14px 32px",
            }}
          >
            <span>View My Work</span>
            <span>→</span>
          </a>
          <a
            href="mailto:kaushikgb99@gmail.com"
            className="btn-secondary"
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              padding: "14px 32px",
            }}
          >
            <span>📬</span>
            <span>Get In Touch</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1cvIeDcmFADQSdHjWMrakKVcNANKK7UVQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              padding: "14px 32px",
              borderColor: "var(--accent-cyan)",
              color: "var(--accent-cyan-light)",
            }}
          >
            <span>📄</span>
            <span>Download Resume</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fadeInUp delay-500"
          style={{
            marginTop: "64px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0,
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            scroll down
          </span>
          <div
            style={{
              width: "24px",
              height: "40px",
              border: "2px solid var(--border-subtle)",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                background: "var(--accent-purple)",
                borderRadius: "2px",
                animation: "float 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.45s; }
        .delay-400 { animation-delay: 0.6s; }
        .delay-500 { animation-delay: 0.75s; }
      `}</style>
    </section>
  );
}
