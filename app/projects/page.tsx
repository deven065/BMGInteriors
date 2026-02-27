import Link from "next/link";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Retail"];

const projects = [
  {
    name: "Media Commercial Space",
    client: "Coconut Media Box",
    type: "Commercial",
    location: "Mumbai",
    year: "2023",
    bg: "linear-gradient(145deg,#1a2533,#2e3f52)",
  },
  {
    name: "Luxury Office Interior",
    client: "Shapoorji Pallonji",
    type: "Commercial",
    location: "Mumbai",
    year: "2022",
    bg: "linear-gradient(145deg,#1c1c28,#2d2d42)",
  },
  {
    name: "5-Star Hotel Suite",
    client: "Private Client",
    type: "Hospitality",
    location: "Pune",
    year: "2023",
    bg: "linear-gradient(145deg,#281f14,#403222)",
  },
  {
    name: "Premium Living Room",
    client: "Hiranandani",
    type: "Residential",
    location: "Mumbai",
    year: "2022",
    bg: "linear-gradient(145deg,#1f2d1a,#2e4525)",
  },
  {
    name: "Luxury Retail Store",
    client: "Navbharat Trading",
    type: "Retail",
    location: "Mumbai",
    year: "2021",
    bg: "linear-gradient(145deg,#1f1a2b,#2e2540)",
  },
  {
    name: "Corporate Headquarters",
    client: "RP Enterprises",
    type: "Commercial",
    location: "Navi Mumbai",
    year: "2021",
    bg: "linear-gradient(145deg,#12201a,#1e3328)",
  },
  {
    name: "Villa Bungalow Interior",
    client: "Dattani Estate",
    type: "Residential",
    location: "Thane",
    year: "2020",
    bg: "linear-gradient(145deg,#26180f,#3d2a18)",
  },
  {
    name: "Restaurant Fit-out",
    client: "Private Client",
    type: "Hospitality",
    location: "Bandra",
    year: "2020",
    bg: "linear-gradient(145deg,#1a1024,#2c1f3c)",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0f0e0c 0%, #1e1a12 100%)" }}
      >
        <div className="shell">
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#FFCC00" }}>
            Portfolio
          </p>
          <h1 className="display-heading text-white mt-4 max-w-2xl">
            Our <span style={{ color: "#FFCC00" }}>Projects</span>
          </h1>
          <p className="mt-6 max-w-xl leading-8 text-base" style={{ color: "rgba(255,255,255,0.62)" }}>
            A curated selection of our residential, commercial, hospitality, and retail projects across Mumbai and India.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-white" style={{ borderBottom: "1px solid #e8e4dc" }}>
        <div className="shell flex gap-3 flex-wrap">
          {categories.map((c, i) => (
            <span
              key={c}
              className="rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase cursor-pointer transition-colors"
              style={
                i === 0
                  ? { background: "#FFCC00", color: "#0f0e0c" }
                  : { background: "#fafaf8", border: "1px solid #e8e4dc", color: "#555" }
              }
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className="proj-card rounded-xl"
                style={{ height: "340px", background: p.bg, display: "block", position: "relative" }}
              >
                {/* Category pill */}
                <span
                  className="absolute top-4 left-4 z-10 text-[0.6rem] font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                  style={{ background: "#FFCC00", color: "#0f0e0c" }}
                >
                  {p.type}
                </span>

                {/* Vertical type label */}
                <div
                  style={{
                    position: "absolute", left: "0.75rem", bottom: "5rem", zIndex: 10,
                    writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)",
                    fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {p.type}
                </div>

                <div className="proj-card-inner">
                  <p className="text-white font-bold text-base leading-snug">{p.name}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {p.client} · {p.location}
                  </p>
                  <p className="text-xs font-bold mt-1" style={{ color: "#FFCC00" }}>{p.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-14" style={{ background: "#fafaf8", borderTop: "1px solid #e8e4dc" }}>
        <div className="shell grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {[
            { n: "500+", label: "Projects Delivered" },
            { n: "200+", label: "Satisfied Clients" },
            { n: "35+", label: "Years Experience" },
            { n: "4", label: "Sectors Served" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6"
              style={{ background: "#fff", border: "1px solid #e8e4dc" }}
            >
              <p className="font-display text-4xl font-bold" style={{ color: "#FFCC00" }}>{s.n}</p>
              <p className="mt-2 text-sm" style={{ color: "#666" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f0e0c, #1a2533)" }}
      >
        <div className="shell text-center">
          <h2 className="section-heading text-white mb-3">Like What You See?</h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Let&apos;s discuss your space and turn it into a masterpiece.
          </p>
          <Link href="/contact" className="btn-gold">Discuss Your Project →</Link>
        </div>
      </section>
    </>
  );
}
