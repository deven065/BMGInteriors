import Link from "next/link";

const team = [
  { name: "B. Ghosh", role: "Founder & Principal Architect", exp: "35+ yrs" },
  { name: "M. Gupta", role: "Lead Interior Designer", exp: "18+ yrs" },
  { name: "R. Bhatt", role: "Project Manager", exp: "12+ yrs" },
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

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0f0e0c 0%, #1e1a12 100%)" }}
      >
        <div className="shell">
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#FFCC00" }}>
            Who We Are
          </p>
          <h1 className="display-heading text-white mt-4 max-w-2xl">
            About <span style={{ color: "#FFCC00" }}>BMG Interiors</span>
          </h1>
          <p className="mt-6 max-w-xl leading-8 text-base" style={{ color: "rgba(255,255,255,0.62)" }}>
            A full-service architecture, interior design, and contracting studio — 35+ years of delivering extraordinary spaces across India.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="shell grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <span className="kicker">Our Story</span>
            <h2 className="section-heading mt-4">
              Designing Extraordinary Spaces Since{" "}
              <span style={{ color: "#FFCC00" }}>1989</span>
            </h2>
            <span className="gold-line mt-5 mb-7" style={{ display: "block" }} />
            <div className="space-y-4 text-[0.95rem] leading-8" style={{ color: "#555" }}>
              <p>
                BMG Interiors is a comprehensive service provider for Residential, Commercial, Hospitality, Building &amp; Bungalows — Interiors and Projects. We master excellent and creative Interior work services not only for Interiors and Projects establishment but also for Building Projects.
              </p>
              <p>
                BMG Interiors is known for creating dynamic spaces that enrich the personal and business lives of their clients and staff. With over <strong style={{ color: "#1a1812" }}>35 years of experience</strong>, we build our reputation on our efficient and qualified professional expertise, customer satisfaction and the innovative interior work which aligns with current trends — modern, classical and contemporary.
              </p>
              <p>
                The referrals of our distinguished &amp; satisfied customers prove our reputation. Regardless of the types of establishment, size or designs, our services focus mainly on the quality. We create Best Interior work that are suitable for Residential &amp; Commercial establishments. We provide creatively excel, efficiency, on time schedule, workmanship and professionalism.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { n: "35+", label: "Years of Experience" },
              { n: "500+", label: "Projects Completed" },
              { n: "200+", label: "Happy Clients" },
              { n: "3", label: "Core Disciplines" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 text-center"
                style={{ background: "#fafaf8", border: "1px solid #e8e4dc" }}
              >
                <p className="font-display text-4xl font-bold" style={{ color: "#FFCC00" }}>{s.n}</p>
                <p className="mt-2 text-sm font-medium" style={{ color: "#555" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are — 3 disciplines */}
      <section className="py-20 md:py-28" style={{ background: "#fafaf8" }}>
        <div className="shell">
          <div className="text-center mb-14">
            <span className="kicker">Our Disciplines</span>
            <h2 className="section-heading mt-4">
              WHO WE <span style={{ color: "#FFCC00" }}>ARE</span>
            </h2>
            <span className="gold-line mx-auto mt-5" style={{ display: "block" }} />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Architects",
                body: "We conceptualize and design buildings that balance beauty, function, and structural integrity. Our architectural team handles everything from site planning to construction documentation.",
                icon: "🏛️",
              },
              {
                title: "Interior Designers",
                body: "Our interior design team creates immersive spaces tailored to each client's lifestyle and brand. From material selection to final styling — every detail is intentional.",
                icon: "🪑",
              },
              {
                title: "Contractors",
                body: "We manage turnkey construction and renovation projects with full site supervision, ensuring quality workmanship, timely delivery, and transparent cost management.",
                icon: "🔨",
              },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-base tracking-widest uppercase mb-3" style={{ color: "#1a1812" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-7" style={{ color: "#666" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="shell">
          <div className="mb-12">
            <span className="kicker">Our Journey</span>
            <h2 className="section-heading mt-4">
              35 Years of <span style={{ color: "#FFCC00" }}>Milestones</span>
            </h2>
            <span className="gold-line mt-5" style={{ display: "block" }} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="rounded-xl p-6 border-l-4"
                style={{ background: "#fafaf8", borderLeftColor: "#FFCC00", border: "1px solid #e8e4dc", borderLeft: "4px solid #FFCC00" }}
              >
                <p className="font-display text-3xl font-bold" style={{ color: "#FFCC00" }}>{m.year}</p>
                <p className="mt-2 text-sm leading-7" style={{ color: "#444" }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28" style={{ background: "#fafaf8" }}>
        <div className="shell">
          <div className="text-center mb-12">
            <span className="kicker">Our People</span>
            <h2 className="section-heading mt-4">
              MEET THE <span style={{ color: "#FFCC00" }}>TEAM</span>
            </h2>
            <span className="gold-line mx-auto mt-5" style={{ display: "block" }} />
          </div>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {team.map((t) => (
              <div key={t.name} className="card p-6 text-center">
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 font-display text-2xl font-bold"
                  style={{ background: "rgba(255,204,0,0.12)", border: "2px solid rgba(255,204,0,0.3)", color: "#CC9900" }}
                >
                  {t.name[0]}
                </div>
                <p className="font-bold text-sm" style={{ color: "#1a1812" }}>{t.name}</p>
                <p className="text-xs leading-5 mt-1" style={{ color: "#666" }}>{t.role}</p>
                <p className="text-xs font-bold mt-2" style={{ color: "#FFCC00" }}>{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 md:py-28 bg-white">
        <div className="shell">
          <div className="text-center mb-12">
            <span className="kicker">Clientele</span>
            <h2 className="section-heading mt-4">
              OUR <span style={{ color: "#FFCC00" }}>CLIENTS</span>
            </h2>
            <span className="gold-line mx-auto mt-5" style={{ display: "block" }} />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c}
                className="rounded-xl border p-4 text-center flex items-center justify-center"
                style={{ borderColor: "#e8e4dc", background: "#fafaf8", minHeight: "80px" }}
              >
                <p className="text-sm font-bold" style={{ color: "#444" }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f0e0c, #1a2533)" }}
      >
        <div className="shell text-center">
          <h2 className="section-heading text-white mb-6">Ready to Start Your Project?</h2>
          <Link href="/contact" className="btn-gold">Get Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}
