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
  "Hiranandani", "Shapoorji Pallonji", "Hikvision", "Coconut Media Box",
  "Dattani Estate", "RP Enterprises", "Sai Construction Co.", "Shraddha Landmark",
  "Navbharat Trading Company",
];

const disciplines = [
  {
    title: "Architects",
    body: "We conceptualise and design buildings that balance beauty, function, and structural integrity â€” from site planning through to construction documentation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>
      </svg>
    ),
  },
  {
    title: "Interior Designers",
    body: "Our design team crafts immersive spaces tailored to each client's lifestyle and brand. Every material, finish, and detail is deliberate.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: "Contractors",
    body: "We manage turnkey construction and renovation with full site supervision, transparent pricing, and on-schedule delivery â€” end to end.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
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
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "#0f0e0c" }}>
        {/* subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(255,204,0,0.06) 0%, transparent 70%)" }} />

        <div className="shell relative z-10">
          <span className="kicker dark-surface">Who We Are</span>
          <h1 className="display-heading text-white mt-5 max-w-2xl">
            About{" "}
            <span style={{ color: "#FFCC00" }}>BMG Interiors</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            A full-service architecture, interior design, and contracting studio â€” 35+ years of delivering extraordinary spaces across India.
          </p>
        </div>
      </section>

      {/* â”€â”€ Story + Stats â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 md:py-28" style={{ background: "#faf9f6" }}>
        <div className="shell grid gap-16 lg:grid-cols-2 items-start">

          {/* Story */}
          <div>
            <span className="kicker">Our Story</span>
            <h2 className="section-heading mt-4">
              Designing Extraordinary<br />
              Spaces Since{" "}
              <span style={{ color: "#FFCC00" }}>1989</span>
            </h2>
            <span className="gold-line mt-5 mb-8" style={{ display: "block" }} />
            <div className="space-y-5 text-[0.95rem] leading-[1.9]" style={{ color: "#505050" }}>
              <p>
                BMG Interiors is a comprehensive service provider for residential, commercial, hospitality, and bungalow projects. We deliver excellent and creative interior work not only for establishment interiors but also for full building projects.
              </p>
              <p>
                Known for creating dynamic spaces that enrich the personal and business lives of clients, we build our reputation on efficient professional expertise, customer satisfaction, and innovative design â€” modern, classical, and contemporary.
              </p>
              <p>
                The continued referrals from our distinguished and satisfied clients are the greatest testament to our quality. We focus on the finest workmanship, on-time delivery, and transparent cost management â€” every single project.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:pt-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-7 flex flex-col items-center text-center"
                style={{ background: "#fff", border: "1px solid #eae7e0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <p className="font-display text-5xl font-bold leading-none" style={{ color: "#FFCC00" }}>{s.n}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#888" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Disciplines â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 md:py-28" style={{ background: "#0f0e0c" }}>
        <div className="shell">
          <div className="text-center mb-14">
            <span className="kicker dark-surface">What We Do</span>
            <h2 className="section-heading text-white mt-4">
              Three Disciplines,{" "}
              <span style={{ color: "#FFCC00" }}>One Studio</span>
            </h2>
            <span className="gold-line mx-auto mt-5" style={{ display: "block" }} />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {disciplines.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#1a1812",
                  border: "1px solid rgba(255,204,0,0.12)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ background: "rgba(255,204,0,0.1)", color: "#FFCC00" }}
                >
                  {d.icon}
                </div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#fff" }}>
                  {d.title}
                </h3>
                <p className="text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.5)" }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Timeline â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 md:py-28" style={{ background: "#faf9f6" }}>
        <div className="shell">
          <div className="mb-14">
            <span className="kicker">Our Journey</span>
            <h2 className="section-heading mt-4">
              35 Years of{" "}
              <span style={{ color: "#FFCC00" }}>Milestones</span>
            </h2>
            <span className="gold-line mt-5" style={{ display: "block" }} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="rounded-xl p-6 flex gap-4 items-start"
                style={{
                  background: "#fff",
                  border: "1px solid #eae7e0",
                  borderLeft: "3px solid #FFCC00",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <p className="font-display text-3xl font-bold leading-none shrink-0" style={{ color: "#FFCC00" }}>{m.year}</p>
                <p className="text-sm leading-[1.75] pt-1" style={{ color: "#555" }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Team â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 md:py-28" style={{ background: "#0f0e0c" }}>
        <div className="shell">
          <div className="text-center mb-14">
            <span className="kicker dark-surface">Our People</span>
            <h2 className="section-heading text-white mt-4">
              Meet the{" "}
              <span style={{ color: "#FFCC00" }}>Team</span>
            </h2>
            <span className="gold-line mx-auto mt-5" style={{ display: "block" }} />
          </div>

          <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
            {team.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-7 text-center"
                style={{ background: "#1a1812", border: "1px solid rgba(255,204,0,0.1)" }}
              >
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5 font-display text-2xl font-bold"
                  style={{ background: "rgba(255,204,0,0.08)", border: "1.5px solid rgba(255,204,0,0.25)", color: "#FFCC00" }}
                >
                  {t.initial}
                </div>
                <p className="font-semibold text-sm text-white">{t.name}</p>
                <p className="text-xs leading-5 mt-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>{t.role}</p>
                <p className="text-xs font-bold mt-3" style={{ color: "#FFCC00" }}>{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Clients â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 md:py-28" style={{ background: "#faf9f6" }}>
        <div className="shell">
          <div className="text-center mb-12">
            <span className="kicker">Clientele</span>
            <h2 className="section-heading mt-4">
              Trusted by{" "}
              <span style={{ color: "#FFCC00" }}>Leading Names</span>
            </h2>
            <span className="gold-line mx-auto mt-5" style={{ display: "block" }} />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c}
                className="rounded-xl p-4 text-center flex items-center justify-center transition hover:border-[#FFCC00]/40"
                style={{ background: "#fff", border: "1px solid #eae7e0", minHeight: "72px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                <p className="text-xs font-semibold leading-snug" style={{ color: "#444" }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20" style={{ background: "#0f0e0c" }}>
        <div className="shell text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#FFCC00" }}>
            Start a Project
          </p>
          <h2 className="section-heading text-white mb-8">
            Ready to Transform Your Space?
          </h2>
          <Link href="/contact" className="btn-gold">
            Get Free Consultation â†’
          </Link>
        </div>
      </section>
    </>
  );
}
