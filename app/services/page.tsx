import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Residential Interiors",
    sub: "Homes & Villas",
    body: "From cozy apartments to sprawling bungalows — every room crafted with personality, comfort, and contemporary sensibility.",
    features: ["Living & Dining Rooms", "Bedroom & Kitchen Design", "Full Home Packages", "Vastu-Compliant Layouts"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Commercial Spaces",
    sub: "Offices & Corporates",
    body: "Workspaces that amplify brand identity and boost productivity — from open-plan offices to executive suites.",
    features: ["Open Plan Office Design", "Conference & Meeting Rooms", "Reception & Lobby Design", "Brand-aligned Environments"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Hospitality & Retail",
    sub: "Hotels, Cafés & Stores",
    body: "Immersive atmospheres for hotels, restaurants, cafés, and showrooms where branding and experience come alive.",
    features: ["Hotel & Resort Interiors", "Restaurant & Café Design", "Retail Showroom Fit-outs", "Brand Experience Spaces"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Architecture & Build",
    sub: "New Construction",
    body: "Ground-up construction and architectural design — structures beautiful on the outside, brilliantly planned within.",
    features: ["New Construction Design", "Renovation & Extensions", "Elevation & Facade Design", "Construction Documentation"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Turnkey Contracting",
    sub: "End-to-End Delivery",
    body: "Design, procurement, construction, and handover — one team, one point of contact, zero hassle.",
    features: ["Full Project Management", "Material Procurement", "Site Supervision", "Timely Delivery Guarantee"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Furniture & Décor",
    sub: "Custom & Curated",
    body: "Bespoke furniture, curated accessories, and artful lighting — the finishing touches that elevate every space.",
    features: ["Custom Modular Furniture", "Lighting Design", "Art & Accessories Curation", "False Ceiling & Wall Art"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h3" />
        <path d="M8 21v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
        <path d="M8 21h8M12 7v4" />
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "Discovery Call", body: "A detailed consultation to understand your vision, requirements, lifestyle, and budget." },
  { step: "02", title: "Concept & Planning", body: "Floor plans, mood boards, and 3D concepts prepared for your review and feedback." },
  { step: "03", title: "Design Development", body: "Detailed drawings, material specs, and vendor selections finalized with your sign-off." },
  { step: "04", title: "Execution & Build", body: "Our site team executes with precision, keeping you updated at every phase." },
  { step: "05", title: "Final Handover", body: "Quality check, final styling, and a complete handover — ready to move in." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#0c0b09",
          paddingTop: "7rem",
          paddingBottom: "4.5rem",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated grid */}
        <div
          className="hero-grid-animated absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,204,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 65% at 5% 55%, rgba(255,204,0,0.07) 0%, transparent 65%)" }}
        />
        {/* Decorative number watermark */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            right: "-2%", top: "50%", transform: "translateY(-50%)",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(12rem, 28vw, 22rem)", fontWeight: 900,
            color: "transparent", WebkitTextStroke: "1px rgba(255,204,0,0.05)", lineHeight: 1,
          }}
        >
          06
        </div>
        {/* Vertical gold line */}
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
              className="reveal-up"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#FFCC00", marginBottom: "1.5rem",
              }}
            >
              <span style={{ display: "block", width: "2.5rem", height: "2px", background: "#FFCC00" }} />
              What We Do
            </p>
            <h1
              className="reveal-up delay-1"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900,
                lineHeight: 1.06, color: "#fff", letterSpacing: "-0.02em",
              }}
            >
              Our <em style={{ fontStyle: "normal", color: "#FFCC00" }}>Services</em>
            </h1>
            <div
              className="reveal-up delay-2"
              style={{ width: 48, height: 3, background: "#FFCC00", borderRadius: 2, margin: "1.75rem 0 1.5rem" }}
            />
            <p
              className="reveal-up delay-3"
              style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)", maxWidth: 540 }}
            >
              End-to-end design, build, and décor solutions for residential,
              commercial, and hospitality projects across Mumbai and India.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ───────────────────────────────────── */}
      <section style={{ background: "#0f0e0c", padding: "5.5rem 0" }}>
        <div className="shell">
          <div
            data-stagger
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {services.map((s) => (
              <article
                key={s.id}
                style={{
                  background: "#141210",
                  border: "1px solid #252220",
                  borderRadius: "1.25rem",
                  padding: "2rem 1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
                  cursor: "default",
                }}
                className="svc-card"
              >
                {/* Number watermark */}
                <span
                  style={{
                    position: "absolute", top: "1.25rem", right: "1.5rem",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "3.5rem", fontWeight: 900, lineHeight: 1,
                    color: "rgba(255,204,0,0.06)",
                    pointerEvents: "none", userSelect: "none",
                  }}
                >
                  {s.id}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: "3.2rem", height: "3.2rem",
                    background: "rgba(255,204,0,0.08)",
                    border: "1px solid rgba(255,204,0,0.2)",
                    borderRadius: "0.85rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#FFCC00", marginBottom: "1.5rem",
                  }}
                >
                  {s.icon}
                </div>

                {/* Sub-label */}
                <p
                  style={{
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "rgba(255,204,0,0.6)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.sub}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.1rem", fontWeight: 700,
                    color: "#fff", marginBottom: "0.85rem", lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>

                {/* Divider */}
                <div style={{ width: "2.5rem", height: "2px", background: "#FFCC00", borderRadius: 2, marginBottom: "1rem", opacity: 0.6 }} />

                {/* Body */}
                <p style={{ fontSize: "0.85rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)", marginBottom: "1.5rem" }}>
                  {s.body}
                </p>

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.6rem",
                        fontSize: "0.8rem", color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      <span
                        style={{
                          width: "1.1rem", height: "1.1rem", flexShrink: 0,
                          background: "rgba(255,204,0,0.12)", border: "1px solid rgba(255,204,0,0.3)",
                          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "0.55rem", color: "#FFCC00", fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "5.5rem 0" }}>
        <div className="shell">
          {/* Header */}
          <div data-reveal="up" style={{ marginBottom: "4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span
                style={{
                  fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "#FFCC00",
                  display: "inline-flex", alignItems: "center", gap: "0.6rem",
                }}
              >
                <span style={{ width: "1.8rem", height: "2px", background: "#FFCC00", display: "inline-block" }} />
                How We Work
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.9rem, 3vw, 2.6rem)", lineHeight: 1.15,
                  color: "#0c0b09", marginTop: "0.85rem",
                }}
              >
                Our <span style={{ color: "#FFCC00" }}>Process</span>
              </h2>
            </div>
            <Link href="/contact" className="btn-gold" style={{ fontSize: "0.78rem" }}>
              Start Your Project →
            </Link>
          </div>

          {/* Steps — horizontal on desktop, vertical mobile */}
          <div
            data-stagger
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "0",
              position: "relative",
            }}
            className="process-grid"
          >
            {/* Connector line */}
            <div
              className="hidden md:block absolute"
              style={{
                top: "2.2rem", left: "10%", right: "10%", height: "2px",
                background: "linear-gradient(90deg, #FFCC00, rgba(255,204,0,0.15))",
                zIndex: 0,
              }}
            />

            {process.map((p, i) => (
              <div
                key={p.step}
                style={{ padding: "0 1rem", position: "relative", zIndex: 1 }}
              >
                {/* Step circle */}
                <div
                  style={{
                    width: "4rem", height: "4rem", borderRadius: "50%",
                    background: i === 0 ? "#FFCC00" : "#fff",
                    border: `2px solid ${i === 0 ? "#FFCC00" : "#eae7e0"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: i === 0 ? "0 4px 20px rgba(255,204,0,0.35)" : "0 2px 10px rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "1rem", fontWeight: 900,
                      color: i === 0 ? "#0c0b09" : "#FFCC00",
                    }}
                  >
                    {p.step}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "0.88rem", fontWeight: 700, color: "#0c0b09",
                    marginBottom: "0.6rem", lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.8, color: "#777" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BMG ─────────────────────────────────────────── */}
      <section style={{ background: "#0c0b09", padding: "5.5rem 0" }}>
        <div className="shell">
          <div data-reveal="up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span
              style={{
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#FFCC00",
              }}
            >
              Why Choose Us
            </span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#fff",
                marginTop: "0.85rem", lineHeight: 1.15,
              }}
            >
              The <span style={{ color: "#FFCC00" }}>BMG Advantage</span>
            </h2>
          </div>

          <div
            data-stagger
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.1rem",
            }}
          >
            {[
              { icon: "35+", label: "Years Experience", desc: "Three decades of mastered craft and industry relationships." },
              { icon: "500+", label: "Projects Delivered", desc: "From 1 BHK apartments to large-scale commercial complexes." },
              { icon: "1", label: "Point of Contact", desc: "One dedicated team from concept to final handover." },
              { icon: "✦", label: "Vastu & Compliance", desc: "Every design is energy-aligned and plan-approved." },
            ].map((w) => (
              <div
                key={w.label}
                style={{
                  background: "#141210",
                  border: "1px solid rgba(255,204,0,0.08)",
                  borderRadius: "1rem",
                  padding: "1.75rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "2rem", fontWeight: 900, color: "#FFCC00",
                    lineHeight: 1, marginBottom: "0.5rem",
                  }}
                >
                  {w.icon}
                </p>
                <p style={{ fontWeight: 700, fontSize: "0.82rem", color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {w.label}
                </p>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "rgba(255,255,255,0.42)" }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section style={{ background: "#FFCC00", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(8rem, 22vw, 18rem)", fontWeight: 900,
            color: "transparent", WebkitTextStroke: "1px rgba(0,0,0,0.05)", lineHeight: 1,
          }}
        >
          BMG
        </div>
        <div className="shell" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <p
            data-reveal="up"
            style={{
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: "1rem",
            }}
          >
            Ready to Begin?
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
            Let&apos;s Build Something Extraordinary
          </h2>
          <p
            data-reveal="up"
            data-delay="240"
            style={{
              fontSize: "1rem", lineHeight: 1.8, color: "rgba(0,0,0,0.55)",
              maxWidth: 460, margin: "0 auto 2rem",
            }}
          >
            Get a free consultation and detailed project estimate — no commitment required.
          </p>
          <div
            data-reveal="up"
            data-delay="350"
            style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem", background: "#0c0b09", color: "#FFCC00",
                borderRadius: "0.4rem", fontWeight: 700, fontSize: "0.82rem",
                letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
              }}
            >
              Request a Free Quote →
            </Link>
            <Link
              href="/projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.9rem 2rem", background: "transparent", color: "#0c0b09",
                border: "2px solid rgba(0,0,0,0.22)", borderRadius: "0.4rem",
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