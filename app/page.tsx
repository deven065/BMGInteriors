import Link from "next/link";

/* ─── Data ─────────────────────────────────────── */

const whoWeAre = [
  {
    title: "Architects",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 21v-4a4 4 0 0 1 8 0v4" />
      </svg>
    ),
    desc: "Conceptual design and structural planning for landmark projects.",
  },
  {
    title: "Interior Designers",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    desc: "Premium spatial design, materials, and end-to-end interior execution.",
  },
  {
    title: "Contractors",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    desc: "Turnkey construction and project management, start to finish.",
  },
];

const services = [
  {
    title: "Residential Interiors",
    desc: "Apartments, villas, bungalows — spaces that feel personal, comfortable, and timeless.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Commercial Spaces",
    desc: "Offices, showrooms, and corporate environments built for productivity and brand impact.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Hospitality & Retail",
    desc: "Hotels, restaurants, and retail spaces with immersive brand-driven atmospheres.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Architecture & Build",
    desc: "Ground-up construction and architectural design for new builds and renovations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

const projects = [
  {
    name: "Media Commercial Space",
    client: "Coconut Media Box",
    type: "Commercial",
    accent: "#2e7d32",
    bg: "#0d1f14",
  },
  {
    name: "Luxury Office Interior",
    client: "Shapoorji Pallonji",
    type: "Corporate",
    accent: "#1565c0",
    bg: "#0a1628",
  },
  {
    name: "Premium Living Room",
    client: "Hiranandani",
    type: "Residential",
    accent: "#b8860b",
    bg: "#1a1205",
  },
  {
    name: "Luxury Retail Store",
    client: "Navbharat Trading",
    type: "Retail",
    accent: "#6a1b9a",
    bg: "#110920",
  },
];

const clients = [
  "Hiranandani", "Shapoorji Pallonji", "Hikvision", "Coconut Media Box",
  "Dattani Estate", "RP Enterprises", "Sai Construction", "Shraddha Landmark", "Navbharat Trading",
  "Hiranandani", "Shapoorji Pallonji", "Hikvision", "Coconut Media Box",
  "Dattani Estate", "RP Enterprises", "Sai Construction", "Shraddha Landmark", "Navbharat Trading",
];

/* ─── Page ─────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO — full viewport, vertically centered
          ══════════════════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          background: "#0c0b09",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* ── Video background ── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            pointerEvents: "none", zIndex: 0,
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
        </video>

        {/* ── Dark overlay over video ── */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "rgba(10, 9, 7, 0.72)",
          }}
        />

        {/* Dark radial spotlight top-right */}
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
            background:
              "radial-gradient(ellipse 75% 65% at 80% 20%, rgba(30,45,60,0.7) 0%, transparent 65%), radial-gradient(ellipse 55% 55% at 15% 85%, rgba(255,204,0,0.06) 0%, transparent 55%)",
          }}
        />

        {/* Fine grid pattern */}
        <div
          className="hero-grid-animated"
          style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
            backgroundImage:
              "linear-gradient(rgba(255,204,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Large decorative circle (top-right) */}
        <div
          style={{
            position: "absolute", top: "-20%", right: "-14%",
            width: "600px", height: "600px", borderRadius: "50%",
            border: "1px solid rgba(255,204,0,0.07)", pointerEvents: "none", zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute", top: "-5%", right: "-5%",
            width: "360px", height: "360px", borderRadius: "50%",
            border: "1px solid rgba(255,204,0,0.1)", pointerEvents: "none", zIndex: 2,
          }}
        />

        {/* Vertical gold line (left accent) */}
        <div
          style={{
            position: "absolute", left: "calc((100vw - min(1260px, 92vw)) / 2)",
            top: "20%", bottom: "20%", width: "2px",
            background: "linear-gradient(transparent, #FFCC00 30%, #FFCC00 70%, transparent)",
            opacity: 0.18, pointerEvents: "none", zIndex: 2,
          }}
        />

        {/* Gold particles */}
        {[
          { left: "12%",  bottom: "15%", dur: "7s",  delay: "0s"   },
          { left: "22%",  bottom: "10%", dur: "9s",  delay: "1.5s" },
          { left: "35%",  bottom: "20%", dur: "6s",  delay: "0.8s" },
          { left: "50%",  bottom: "8%",  dur: "8s",  delay: "2s"   },
          { left: "62%",  bottom: "18%", dur: "10s", delay: "0.3s" },
          { left: "73%",  bottom: "12%", dur: "7.5s",delay: "1.2s" },
          { left: "82%",  bottom: "22%", dur: "6.5s",delay: "2.5s" },
          { left: "90%",  bottom: "9%",  dur: "9.5s",delay: "0.6s" },
        ].map((p, i) => (
          <div
            key={i}
            className="gold-particle"
            style={{ left: p.left, bottom: p.bottom, "--dur": p.dur, "--delay": p.delay } as React.CSSProperties}
          />
        ))}

        {/* Hero content */}
        <div className="shell" style={{ position: "relative", zIndex: 2, padding: "6rem 0" }}>
          <div style={{ maxWidth: "800px" }}>
            {/* Kicker */}
            <p
              className="reveal-up"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#FFCC00",
              }}
            >
              <span style={{ display: "block", width: "2.5rem", height: "2px", background: "#FFCC00" }} />
              35+ Years of Excellence in Mumbai
            </p>

            {/* Main heading */}
            <h1
              className="reveal-up delay-1"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(3.2rem, 6.5vw, 6rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginTop: "1.5rem",
              }}
            >
              Architecture &amp;<br />
              <em style={{ fontStyle: "normal" }} className="text-shimmer">Interior Design</em>
              <br />Redefined.
            </h1>

            {/* Sub text */}
            <p
              className="reveal-up delay-2"
              style={{
                marginTop: "1.5rem",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "520px",
              }}
            >
              A comprehensive service provider for Residential, Commercial, Hospitality &amp; Building projects.{" "}
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.7)" }}>Creativity is limitless.</em>
            </p>

            {/* CTA row */}
            <div
              className="reveal-up delay-3"
              style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}
            >
              <Link href="/contact" className="btn-gold" style={{ fontSize: "0.82rem" }}>
                Get Free Consultation →
              </Link>
              <Link href="/projects" className="btn-outline" style={{ fontSize: "0.82rem" }}>
                View Our Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient into stats strip */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "180px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.6))", pointerEvents: "none", zIndex: 2,
          }}
        />
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP — below hero, distinct
          ══════════════════════════════════════ */}
      <section style={{ background: "#FFCC00" }}>
        <div className="shell">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "none",
            }}
          >
            {[
              { n: "35", suffix: "+", label: "Years of Experience" },
              { n: "500", suffix: "+", label: "Projects Completed" },
              { n: "98", suffix: "%", label: "Client Satisfaction" },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "1.6rem 1.5rem",
                  textAlign: "center",
                  borderRight: i < 2 ? "1px solid rgba(0,0,0,0.15)" : "none",
                }}
              >
                <p
                  data-count={s.n}
                  data-suffix={s.suffix}
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "#0c0b09",
                    lineHeight: 1,
                  }}
                >
                  {s.n}{s.suffix}
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.6)",
                    marginTop: "0.4rem",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT / WHO WE ARE
          ══════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "5rem 0 5.5rem" }}>
        <div className="shell">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4.5rem",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Left text */}
            <div data-reveal="left">
              <span className="kicker">Welcome to BMG Interiors</span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  lineHeight: 1.15,
                  color: "#0c0b09",
                  marginTop: "1rem",
                }}
              >
                35 Years of Creating{" "}
                <span style={{ color: "#FFCC00" }}>Extraordinary</span>{" "}
                Spaces
              </h2>
              <span
                style={{
                  display: "block", width: "3rem", height: "3px",
                  background: "#FFCC00", borderRadius: "2px",
                  margin: "1.25rem 0 1.5rem",
                }}
              />
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#5a5346", marginBottom: "1rem" }}>
                BMG Interiors is a comprehensive service provider for Residential, Commercial, Hospitality, Building &amp; Bungalow projects. We master excellent and creative Interior work services — not just for Interiors but also for complete Building Projects.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#5a5346" }}>
                Known for creating dynamic spaces that enrich personal and business lives with over{" "}
                <strong style={{ color: "#0c0b09" }}>35 years of experience</strong> — we build our reputation on professional expertise, customer satisfaction, and innovative, timeless design.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-gold">Learn More About Us</Link>
                <Link href="/contact" className="btn-dark">Get a Quotation →</Link>
              </div>
            </div>

            {/* Right — Who We Are cards */}
            <div data-reveal="right">
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0c0b09", marginBottom: "1.25rem" }}>
                Who We Are :
              </p>
              <div data-stagger style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {whoWeAre.map((w) => (
                  <div
                    key={w.title}
                    className="card"
                    style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem", padding: "1.1rem 1.25rem" }}
                  >
                    <div
                      style={{
                        width: "2.8rem", height: "2.8rem", flexShrink: 0,
                        background: "rgba(255,204,0,0.1)",
                        border: "1px solid rgba(255,204,0,0.3)",
                        borderRadius: "0.65rem",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#FFCC00",
                      }}
                    >
                      {w.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0c0b09" }}>
                        {w.title}
                      </p>
                      <p style={{ fontSize: "0.83rem", lineHeight: 1.6, color: "#666", marginTop: "0.25rem" }}>
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — dark bg for contrast
          ══════════════════════════════════════ */}
      <section style={{ background: "#0c0b09", padding: "5rem 0 5.5rem" }}>
        <div className="shell">
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <div>
              <span className="kicker" style={{ color: "#FFCC00" }}>
                <span style={{ background: "#FFCC00", width: "1.8rem", height: "2px", display: "inline-block", marginRight: "0.55rem", verticalAlign: "middle" }} />
                What We Offer
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#ffffff",
                  marginTop: "0.75rem",
                  lineHeight: 1.15,
                }}
              >
                Our <span style={{ color: "#FFCC00" }}>Services</span>
              </h2>
            </div>
            <Link href="/services" className="btn-outline" style={{ flexShrink: 0 }}>
              View All Services →
            </Link>
          </div>

          {/* Grid */}
          <div
            data-stagger
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {services.map((s, i) => (
              <article
                key={s.title}
                style={{
                  background: i % 2 === 0 ? "#141310" : "#111009",
                  border: "1px solid #2a2820",
                  borderRadius: "1rem",
                  padding: "2rem 1.6rem",
                  transition: "border-color 0.3s, transform 0.3s",
                  cursor: "default",
                }}
                className="svc-card"
              >
                <div
                  style={{
                    width: "2.8rem", height: "2.8rem",
                    background: "rgba(255,204,0,0.1)",
                    border: "1px solid rgba(255,204,0,0.22)",
                    borderRadius: "0.65rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#FFCC00", marginBottom: "1.25rem",
                  }}
                >
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "0.6rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)" }}>
                  {s.desc}
                </p>
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.3rem",
                    marginTop: "1.25rem", fontSize: "0.72rem", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFCC00",
                  }}
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS
          ══════════════════════════════════════ */}
      <section style={{ background: "#f5f4f0", padding: "5rem 0 5.5rem" }}>
        <div className="shell">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <div>
              <span className="kicker">Portfolio</span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#0c0b09",
                  marginTop: "0.75rem",
                  lineHeight: 1.15,
                }}
              >
                Our <span style={{ color: "#FFCC00" }}>Projects</span>
              </h2>
            </div>
            <Link href="/projects" className="btn-dark" style={{ flexShrink: 0 }}>
              View All Projects
            </Link>
          </div>

          <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem" }}>
            {projects.map((p) => (
              <Link
                key={p.name}
                href="/projects"
                className="proj-card"
                style={{
                  display: "block",
                  borderRadius: "1rem",
                  height: "380px",
                  background: p.bg,
                  border: `1px solid ${p.accent}18`,
                  position: "relative",
                }}
              >
                {/* Accent glow blob */}
                <div
                  style={{
                    position: "absolute", top: "20%", right: "15%",
                    width: "140px", height: "140px", borderRadius: "50%",
                    background: p.accent,
                    opacity: 0.12,
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />
                {/* Category tag */}
                <span
                  style={{
                    position: "absolute", top: "1rem", left: "1rem", zIndex: 10,
                    background: "#FFCC00", color: "#0c0b09",
                    fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase",
                    borderRadius: "999px", padding: "0.3rem 0.8rem",
                  }}
                >
                  {p.type}
                </span>
                {/* Bottom overlay */}
                <div className="proj-card-inner">
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}>{p.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.75rem", marginTop: "0.35rem" }}>{p.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          35 YEARS BANNER
          ══════════════════════════════════════ */}
      <section
        style={{
          background: "#0c0b09",
          padding: "4.5rem 0",
          borderTop: "1px solid #1e1c17",
          borderBottom: "1px solid #1e1c17",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(10rem,25vw,20rem)", fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,204,0,0.08)",
            lineHeight: 1, pointerEvents: "none", userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          35
        </div>
        <div className="shell" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: "0.75rem", textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 900, color: "#FFCC00", lineHeight: 1,
              }}
            >
              35
            </p>
            <p
              style={{
                fontWeight: 700, fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff",
              }}
            >
              Years of Quality Services Delivered
            </p>
            <p
              style={{
                fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(255,204,0,0.7)",
              }}
            >
              To Our Beloved Customers
            </p>
            <Link href="/contact" className="btn-gold" style={{ marginTop: "1.25rem" }}>
              Work With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CLIENTS — white bg, marquee
          ══════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "5rem 0 5.5rem" }}>
        <div className="shell" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="kicker">Trusted By</span>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#0c0b09",
              marginTop: "0.75rem",
            }}
          >
            Our <span style={{ color: "#FFCC00" }}>Clients</span>
          </h2>
          <div
            style={{
              display: "block", width: "3rem", height: "3px",
              background: "#FFCC00", borderRadius: "2px",
              margin: "1.25rem auto 0",
            }}
          />
        </div>

        <div
          style={{
            overflow: "hidden",
            maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="marquee-track">
            {clients.map((name, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0, minWidth: "180px", height: "72px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 1rem",
                }}
              >
                <div
                  style={{
                    border: "1px solid #e8e4dc", borderRadius: "0.75rem",
                    background: "#fafaf8", padding: "0.75rem 1.5rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#555", whiteSpace: "nowrap" }}>
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/about" className="btn-gold">View All Clientele →</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
          ══════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #0c0b09 0%, #1a2533 100%)",
          padding: "5.5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold corner accent */}
        <div
          style={{
            position: "absolute", bottom: "-40px", right: "-40px",
            width: "280px", height: "280px", borderRadius: "50%",
            border: "1px solid rgba(255,204,0,0.12)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "10px", right: "10px",
            width: "180px", height: "180px", borderRadius: "50%",
            border: "1px solid rgba(255,204,0,0.1)",
            pointerEvents: "none",
          }}
        />
        <div className="shell" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <p
            style={{
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "#FFCC00", marginBottom: "1rem",
            }}
          >
            Ready to Transform Your Space?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
              color: "#fff", maxWidth: "600px",
              margin: "0 auto 1.25rem",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s Build Something Extraordinary Together
          </h2>
          <p
            style={{
              fontSize: "0.95rem", lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "480px", margin: "0 auto 2.5rem",
            }}
          >
            From concept to completion — our team handles every detail so you can simply enjoy the result.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">GET QUOTATION →</Link>
            <a href="tel:+919920100053" className="btn-outline">CALL +91 99201 00053</a>
          </div>
        </div>
      </section>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .svc-card:hover {
          border-color: rgba(255,204,0,0.35) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </>
  );
}
