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
    body: "We conceptualise and design buildings that balance beauty, function, and structural integrity — from site planning through to construction documentation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Interior Designers",
    body: "Our design team crafts immersive spaces tailored to each client's lifestyle and brand. Every material, finish, and detail is deliberate.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Contractors",
    body: "We manage turnkey construction and renovation with full site supervision, transparent pricing, and on-schedule delivery — end to end.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
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
      {/* Hero */}
      <section
        className="relative py-32 md:py-44 overflow-hidden"
        style={{ background: "#0f0e0c" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 55% at 15% 50%, rgba(255,204,0,0.07) 0%, transparent 70%)" }}
        />
        <div className="shell relative z-10 max-w-3xl">
          <span
            className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-6"
            style={{ color: "#FFCC00" }}
          >
            Who We Are
          </span>
          <h1 className="display-heading text-white">
            About <span style={{ color: "#FFCC00" }}>BMG Interiors</span>
          </h1>
          <div className="mt-7" style={{ width: 48, height: 2, background: "#FFCC00" }} />
          <p
            className="mt-8 text-base md:text-lg leading-[1.95] max-w-xl"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            A full-service architecture, interior design, and contracting studio
            — 35+ years of delivering extraordinary spaces across India.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-24 md:py-36" style={{ background: "#faf9f6" }}>
        <div className="shell grid gap-20 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="kicker">Our Story</span>
            <h2 className="section-heading mt-5 mb-0">
              Designing Extraordinary<br />
              Spaces Since <span style={{ color: "#FFCC00" }}>1989</span>
            </h2>
            <span className="gold-line mt-6 mb-9" style={{ display: "block" }} />
            <div className="space-y-6 text-[0.97rem] leading-[2]" style={{ color: "#505050" }}>
              <p>
                BMG Interiors is a comprehensive service provider for residential,
                commercial, hospitality, and bungalow projects. We deliver excellent
                and creative interior work not only for establishment interiors but
                also for full building projects.
              </p>
              <p>
                Known for creating dynamic spaces that enrich the personal and
                business lives of clients, we build our reputation on efficient
                professional expertise, customer satisfaction, and innovative design
                — modern, classical, and contemporary.
              </p>
              <p>
                The continued referrals from our distinguished and satisfied clients
                are the greatest testament to our quality. We focus on the finest
                workmanship, on-time delivery, and transparent cost management
                — every single project.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-8 flex flex-col items-center text-center"
                style={{ background: "#fff", border: "1px solid #eae7e0", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
              >
                <p className="font-display text-5xl font-bold leading-none" style={{ color: "#FFCC00" }}>{s.n}</p>
                <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-widest" style={{ color: "#999" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-24 md:py-36" style={{ background: "#0f0e0c" }}>
        <div className="shell">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#FFCC00" }}
            >
              What We Do
            </span>
            <h2 className="section-heading text-white">
              Three Disciplines, <span style={{ color: "#FFCC00" }}>One Studio</span>
            </h2>
            <div className="mx-auto mt-6" style={{ width: 48, height: 2, background: "#FFCC00" }} />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {disciplines.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#1a1812", border: "1px solid rgba(255,204,0,0.12)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-7"
                  style={{ background: "rgba(255,204,0,0.09)", color: "#FFCC00" }}
                >
                  {d.icon}
                </div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "#fff" }}>
                  {d.title}
                </h3>
                <p className="text-sm leading-[1.95]" style={{ color: "rgba(255,255,255,0.48)" }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-36" style={{ background: "#faf9f6" }}>
        <div className="shell">
          <div className="mb-16">
            <span className="kicker">Our Journey</span>
            <h2 className="section-heading mt-5 mb-0">
              35 Years of <span style={{ color: "#FFCC00" }}>Milestones</span>
            </h2>
            <span className="gold-line mt-6" style={{ display: "block" }} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="rounded-xl p-7 flex gap-5 items-start"
                style={{
                  background: "#fff",
                  border: "1px solid #eae7e0",
                  borderLeft: "3px solid #FFCC00",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                <p className="font-display text-3xl font-bold leading-none shrink-0" style={{ color: "#FFCC00" }}>{m.year}</p>
                <p className="text-sm leading-[1.85] pt-1" style={{ color: "#555" }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-36" style={{ background: "#0f0e0c" }}>
        <div className="shell">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-5"
              style={{ color: "#FFCC00" }}
            >
              Our People
            </span>
            <h2 className="section-heading text-white">
              Meet the <span style={{ color: "#FFCC00" }}>Team</span>
            </h2>
            <div className="mx-auto mt-6" style={{ width: 48, height: 2, background: "#FFCC00" }} />
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {team.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-10 text-center"
                style={{ background: "#1a1812", border: "1px solid rgba(255,204,0,0.1)" }}
              >
                <div
                  className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 font-display text-2xl font-bold"
                  style={{ background: "rgba(255,204,0,0.07)", border: "1.5px solid rgba(255,204,0,0.22)", color: "#FFCC00" }}
                >
                  {t.initial}
                </div>
                <p className="font-semibold text-sm text-white mb-2">{t.name}</p>
                <p className="text-xs leading-6" style={{ color: "rgba(255,255,255,0.42)" }}>{t.role}</p>
                <p className="text-xs font-bold mt-4" style={{ color: "#FFCC00" }}>{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 md:py-36" style={{ background: "#faf9f6" }}>
        <div className="shell">
          <div className="text-center mb-16">
            <span className="kicker">Clientele</span>
            <h2 className="section-heading mt-5">
              Trusted by <span style={{ color: "#FFCC00" }}>Leading Names</span>
            </h2>
            <div className="mx-auto mt-6" style={{ width: 48, height: 2, background: "#CC9900" }} />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c}
                className="rounded-xl p-5 text-center flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "#fff", border: "1px solid #eae7e0", minHeight: "84px", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
              >
                <p className="text-xs font-semibold leading-snug" style={{ color: "#444" }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40" style={{ background: "#0f0e0c" }}>
        <div className="shell text-center max-w-2xl mx-auto">
          <span
            className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-6"
            style={{ color: "#FFCC00" }}
          >
            Start a Project
          </span>
          <h2 className="section-heading text-white mb-10">
            Ready to Transform Your Space?
          </h2>
          <Link href="/contact" className="btn-gold">
            Get Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
