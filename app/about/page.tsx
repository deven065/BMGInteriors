import Link from "next/link";

const team = [
  { name: "B. Ghosh", role: "Founder & Principal Architect", exp: "35+ yrs", initial: "B" },
  { name: "M. Gupta", role: "Lead Interior Designer", exp: "18+ yrs", initial: "M" },
  { name: "R. Bhatt", role: "Project Manager", exp: "12+ yrs", initial: "R" },
];

const milestones = [
  { year: "1989", event: "BMG Interiors founded in Mumbai" },
  { year: "1998", event: "Expanded into commercial & hospitality interiors" },
  { year: "2005", event: "Completed 200+ residential projects milestone" },
  { year: "2012", event: "Launched full turnkey construction services" },
  { year: "2019", event: "500+ projects completed across India" },
  { year: "2024", event: "35 years of architectural & interior excellence" },
];

const clients = [
  "Hiranandani",
  "Shapoorji Pallonji",
  "Hikvision",
  "Coconut Media Box",
  "Dattani Estate",
  "RP Enterprises",
  "Sai Construction Co.",
  "Shraddha Landmark",
  "Navbharat Trading Company",
];

const disciplines = [
  {
    title: "Architects",
    body: "Conceptual design and structural planning from site analysis through construction documentation.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Interior Designers",
    body: "Premium spatial design, curated materials, and end-to-end interior execution for every style.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Contractors",
    body: "Turnkey construction and project management with transparent pricing and on-time delivery.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const stats = [
  { n: "35+", label: "Years of Experience" },
  { n: "500+", label: "Projects Completed" },
  { n: "200+", label: "Happy Clients" },
  { n: "3", label: "Core Disciplines" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#0c0b09",
          paddingTop: "7rem",
          paddingBottom: "5rem",
          minHeight: "68vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="hero-grid-animated absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,204,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 60% at 5% 55%, rgba(255,204,0,0.07) 0%, transparent 65%)" }}
        />
        <div
          className="absolute pointer-events-none select-none"
          style={{
            right: "-2%", top: "50%", transform: "translateY(-50%)",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(12rem, 28vw, 22rem)", fontWeight: 900,
            color: "transparent", WebkitTextStroke: "1px rgba(255,204,0,0.06)", lineHeight: 1,
          }}
        >
          35
        </div>
        <div
          className="absolute pointer-events-none"
          style={{
            left: "calc((100vw - min(1260px, 92vw)) / 2)",
            top: "15%", bottom: "15%", width: "2px",
            background: "linear-gradient(transparent, #FFCC00 30%, #FFCC00 70%, transparent)",
            opacity: 0.15,
          }}
        />
        <div className="shell relative z-10">
          <div style={{ maxWidth: 680 }}>
            <p
              data-reveal="up"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#FFCC00", marginBottom: "1.5rem",
              }}
            >
              <span style={{ display: "block", width: "2.5rem", height: "2px", background: "#FFCC00" }} />
              Who We Are
            </p>
            <h1
              data-reveal="up"
              data-delay="120"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900,
                lineHeight: 1.06, color: "#fff", letterSpacing: "-0.02em",
              }}
            >
              About{" "}
              <em style={{ fontStyle: "normal", color: "#FFCC00" }}>BMG Interiors</em>
            </h1>
            <div
              data-reveal="up"
              data-delay="220"
              style={{ width: 48, height: 3, background: "#FFCC00", borderRadius: 2, margin: "1.75rem 0 1.5rem" }}
            />
            <p
              data-reveal="up"
              data-delay="340"
              style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)", maxWidth: 520 }}
            >
              A full-service architecture, interior design, and contracting studio
              — 35+ years of delivering extraordinary spaces across India.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#FFCC00" }}>
        <div className="shell">
          <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "1.6rem 1rem", textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(0,0,0,0.12)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900,
                    color: "#0c0b09", lineHeight: 1,
                  }}
                >
                  {s.n}
                </p>
                <p
                  style={{
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "rgba(0,0,0,0.55)", marginTop: "0.4rem",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: "#fff", padding: "5.5rem 0" }}>
        <div className="shell">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
            className="about-grid"
          >
            <div data-reveal="left">
              <span className="kicker">Our Story</span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.9rem, 3vw, 2.6rem)", lineHeight: 1.15,
                  color: "#0c0b09", marginTop: "1rem",
                }}
              >
                Designing Extraordinary Spaces{" "}
                <span style={{ color: "#FFCC00" }}>Since 1989</span>
              </h2>
              <span
                style={{
                  display: "block", width: "3rem", height: "3px",
                  background: "#FFCC00", borderRadius: "2px", margin: "1.25rem 0 1.75rem",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", fontSize: "0.95rem", lineHeight: 1.95, color: "#555" }}>
                <p>
                  BMG Interiors is a comprehensive service provider for residential,
                  commercial, hospitality, and bungalow projects — delivering excellent
                  and creative interior work not only for establishment interiors but
                  also for complete building projects.
                </p>
                <p>
                  Known for creating dynamic spaces that enrich the personal and
                  business lives of clients, we build our reputation on professional
                  expertise, customer satisfaction, and innovative design —
                  modern, classical, and contemporary.
                </p>
                <p>
                  Continued referrals from our distinguished clients are the greatest
                  testament to our quality. We focus on the finest workmanship, on-time
                  delivery, and transparent cost management — every single project.
                </p>
              </div>
            </div>
            <div data-reveal="right">
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#999", marginBottom: "1.25rem" }}>
                What We Do
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {disciplines.map((d, i) => (
                  <div
                    key={d.title}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "1.25rem",
                      padding: "1.5rem 0",
                      borderBottom: i < disciplines.length - 1 ? "1px solid #eae7e0" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "3rem", height: "3rem", flexShrink: 0,
                        background: "rgba(255,204,0,0.08)", border: "1px solid rgba(255,204,0,0.25)",
                        borderRadius: "0.75rem", display: "flex", alignItems: "center",
                        justifyContent: "center", color: "#FFCC00",
                      }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0c0b09", marginBottom: "0.3rem" }}>
                        {d.title}
                      </p>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#666" }}>{d.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: "#0c0b09", padding: "5.5rem 0" }}>
        <div className="shell">
          <div data-reveal="up" style={{ marginBottom: "3.5rem" }}>
            <span
              style={{
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#FFCC00",
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
              }}
            >
              <span style={{ width: "1.8rem", height: "2px", background: "#FFCC00", display: "inline-block" }} />
              Our Journey
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#fff",
                marginTop: "0.85rem", lineHeight: 1.15,
              }}
            >
              35 Years of <span style={{ color: "#FFCC00" }}>Milestones</span>
            </h2>
          </div>
          <div data-stagger style={{ display: "grid", gap: "1.1rem", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {milestones.map((m) => (
              <div
                key={m.year}
                style={{
                  background: "#141210", border: "1px solid #2a2720",
                  borderLeft: "3px solid #FFCC00", borderRadius: "0.85rem",
                  padding: "1.5rem 1.6rem", display: "flex", gap: "1.25rem", alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.9rem", fontWeight: 900, lineHeight: 1,
                    color: "#FFCC00", flexShrink: 0, minWidth: 60,
                  }}
                >
                  {m.year}
                </p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", paddingTop: "0.2rem" }}>
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#faf9f6", padding: "5.5rem 0" }}>
        <div className="shell">
          <div data-reveal="up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="kicker">Our People</span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#0c0b09",
                marginTop: "0.85rem", lineHeight: 1.15,
              }}
            >
              Meet the <span style={{ color: "#FFCC00" }}>Team</span>
            </h2>
            <div style={{ width: 48, height: 3, background: "#FFCC00", borderRadius: 2, margin: "1.1rem auto 0" }} />
          </div>
          <div
            data-stagger
            style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.4rem", maxWidth: 860, margin: "0 auto",
            }}
          >
            {team.map((t) => (
              <div
                key={t.name}
                className="card"
                style={{
                  padding: "2rem 1.75rem", textAlign: "center",
                  background: "#fff", border: "1px solid #eae7e0", borderRadius: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "4.5rem", height: "4.5rem", borderRadius: "50%",
                    background: "rgba(255,204,0,0.08)", border: "2px solid rgba(255,204,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "1.5rem", fontWeight: 700, color: "#FFCC00",
                  }}
                >
                  {t.initial}
                </div>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0c0b09", marginBottom: "0.35rem" }}>{t.name}</p>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.6, color: "#888" }}>{t.role}</p>
                <p
                  style={{
                    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#FFCC00", marginTop: "1rem",
                    background: "rgba(255,204,0,0.08)", border: "1px solid rgba(255,204,0,0.2)",
                    borderRadius: "99px", display: "inline-block", padding: "0.3rem 0.85rem",
                  }}
                >
                  {t.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ background: "#0c0b09", padding: "5.5rem 0" }}>
        <div className="shell">
          <div data-reveal="up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FFCC00" }}>
              Clientele
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#fff",
                marginTop: "0.85rem", lineHeight: 1.15,
              }}
            >
              Trusted by <span style={{ color: "#FFCC00" }}>Leading Names</span>
            </h2>
          </div>
          <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0.85rem" }}>
            {clients.map((c) => (
              <div
                key={c}
                style={{
                  background: "#141210", border: "1px solid rgba(255,204,0,0.08)",
                  borderRadius: "0.75rem", padding: "1.1rem 1rem", textAlign: "center",
                }}
              >
                <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FFCC00", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(8rem, 22vw, 18rem)", fontWeight: 900,
            color: "transparent", WebkitTextStroke: "1px rgba(0,0,0,0.06)", lineHeight: 1,
          }}
        >
          BMG
        </div>
        <div className="shell" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <p data-reveal="up" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: "1rem" }}>
            Start a Project
          </p>
          <h2
            data-reveal="up"
            data-delay="130"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900,
              color: "#0c0b09", lineHeight: 1.15, marginBottom: "1rem",
            }}
          >
            Ready to Transform Your Space?
          </h2>
          <p
            data-reveal="up"
            data-delay="240"
            style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(0,0,0,0.55)", maxWidth: 480, margin: "0 auto 2rem" }}
          >
            Let&apos;s discuss your vision. We offer free consultations and detailed
            project estimates — no obligation.
          </p>
          <div data-reveal="up" data-delay="350" style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.85rem 2rem", background: "#0c0b09", color: "#FFCC00",
                borderRadius: "0.4rem", fontWeight: 700, fontSize: "0.82rem",
                letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
              }}
            >
              Get Free Consultation →
            </Link>
            <Link
              href="/projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.85rem 2rem", background: "transparent", color: "#0c0b09",
                border: "2px solid rgba(0,0,0,0.25)", borderRadius: "0.4rem",
                fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em",
                textTransform: "uppercase", textDecoration: "none",
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}