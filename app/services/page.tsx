import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Residential Interior Design",
    body: "We design homes that reflect your personality and lifestyle. From 1 BHK apartments to sprawling villas and bungalows — every space is crafted with care, comfort, and contemporary sensibility.",
    features: ["Living & Dining Rooms", "Bedroom & Kitchen Interiors", "Full Home Design", "Vastu-Compliant Layouts"],
    icon: "🏠",
  },
  {
    id: "02",
    title: "Commercial Interior Design",
    body: "Offices, co-working spaces, banks, and corporate headquarters — we design workspaces that strengthen brand identity and enhance team productivity.",
    features: ["Open Plan Office Design", "Conference & Meeting Rooms", "Reception & Lobby Design", "Brand-aligned Environments"],
    icon: "🏢",
  },
  {
    id: "03",
    title: "Hospitality & Retail",
    body: "Hotels, restaurants, cafés, and showrooms designed to create unforgettable customer experiences — where branding, atmosphere, and functionality unite.",
    features: ["Hotel & Resort Interiors", "Restaurant & Café Design", "Retail Showroom Fit-outs", "Brand Experience Spaces"],
    icon: "🛍️",
  },
  {
    id: "04",
    title: "Architecture & Building",
    body: "From ground-up construction to renovation and addition projects — our architects deliver structures that are beautiful on the outside and brilliantly planned within.",
    features: ["New Construction Design", "Renovation & Extensions", "Elevation & Facade Design", "Construction Documentation"],
    icon: "🏛️",
  },
  {
    id: "05",
    title: "Turnkey Contracting",
    body: "We handle the entire project end-to-end — design, procurement, construction, and final handover. One point of contact, zero hassle.",
    features: ["Full Project Management", "Material Procurement", "Site Supervision", "Timely Delivery Guarantee"],
    icon: "🔑",
  },
  {
    id: "06",
    title: "Furniture & Décor",
    body: "Custom furniture, curated accessories, lighting design, and artful décor — the finishing touches that transform a space from good to exceptional.",
    features: ["Custom Modular Furniture", "Lighting Design", "Art & Accessories Curation", "False Ceiling & Wall Art"],
    icon: "🪑",
  },
];

const process = [
  { step: "01", title: "Discovery Call", body: "We begin with a detailed consultation to understand your vision, requirements, lifestyle, and budget." },
  { step: "02", title: "Concept & Planning", body: "Our designers prepare floor plans, mood boards, and 3D concepts for your review and approval." },
  { step: "03", title: "Design Development", body: "Detailed drawings, material specifications, and vendor selections are finalized with your feedback." },
  { step: "04", title: "Execution & Build", body: "Our experienced site team executes the work with precision, keeping you updated through every phase." },
  { step: "05", title: "Final Handover", body: "We do a thorough quality check, final styling, and hand over your space — ready to move in and enjoy." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0f0e0c 0%, #1e1a12 100%)" }}
      >
        <div className="shell">
          <p data-reveal="fade" className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#FFCC00" }}>
            What We Do
          </p>
          <h1 data-reveal="up" className="display-heading text-white mt-4 max-w-2xl">
            Our <span className="text-shimmer">Services</span>
          </h1>
          <p data-reveal="up" data-delay="150" className="mt-6 max-w-xl leading-8 text-base" style={{ color: "rgba(255,255,255,0.62)" }}>
            End-to-end design, build, and décor services for residential, commercial, and hospitality projects across Mumbai and India.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="shell">
          <div data-stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.id} className="card p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="font-display text-4xl font-bold" style={{ color: "rgba(255,204,0,0.15)" }}>
                    {s.id}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#1a1812" }}>{s.title}</h3>
                <p className="text-sm leading-7 mb-5" style={{ color: "#666" }}>{s.body}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#444" }}>
                      <span style={{ color: "#FFCC00", fontWeight: 700 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28" style={{ background: "#fafaf8" }}>
        <div className="shell">
          <div className="text-center mb-14">
            <span className="kicker">How We Work</span>
            <h2 className="section-heading mt-4">
              OUR <span style={{ color: "#FFCC00" }}>PROCESS</span>
            </h2>
            <span className="gold-line mx-auto mt-5" style={{ display: "block" }} />
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-6 top-6 bottom-6 w-0.5 hidden md:block"
              style={{ background: "linear-gradient(#FFCC00, rgba(255,204,0,0.1))" }}
            />
            <div data-stagger className="space-y-5 md:pl-14">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="relative card p-6 md:p-7"
                >
                  {/* Step bullet */}
                  <div
                    className="absolute -left-3 top-6 hidden md:flex w-6 h-6 rounded-full items-center justify-center text-[0.6rem] font-black"
                    style={{ background: "#FFCC00", color: "#0f0e0c", left: "-1.75rem" }}
                  >
                    {p.step}
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="text-xs font-black tracking-widest md:hidden shrink-0 mt-1"
                      style={{ color: "#FFCC00" }}
                    >
                      {p.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-base mb-2" style={{ color: "#1a1812" }}>{p.title}</h3>
                      <p className="text-sm leading-7" style={{ color: "#666" }}>{p.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f0e0c, #1a2533)" }}
      >
        <div className="shell text-center">
          <h2 className="section-heading text-white mb-3">Ready to get started?</h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Contact us today for a free consultation and project estimate.
          </p>
          <Link href="/contact" className="btn-gold">Request a Quote →</Link>
        </div>
      </section>
    </>
  );
}
