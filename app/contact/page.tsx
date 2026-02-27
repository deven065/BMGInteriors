export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0f0e0c 0%, #1e1a12 100%)" }}
      >
        <div className="shell">
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#FFCC00" }}>
            Get In Touch
          </p>
          <h1 className="display-heading text-white mt-4 max-w-2xl">
            Contact <span style={{ color: "#FFCC00" }}>Us</span>
          </h1>
          <p className="mt-6 max-w-lg leading-8 text-base" style={{ color: "rgba(255,255,255,0.62)" }}>
            Talk to our team about your project. We offer free consultations and project estimates — no obligation.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.4fr] items-start">
          {/* Info */}
          <div>
            <span className="kicker">Reach Us</span>
            <h2 className="section-heading mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)]">
              We&apos;d Love to Hear From You
            </h2>
            <span className="gold-line mt-5 mb-8" style={{ display: "block" }} />

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12 19.79 19.79 0 0 1 1.57 3.5 2 2 0 0 1 3.54 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.35A16 16 0 0 0 14 15.42l1.45-1.45a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                    </svg>
                  ),
                  label: "Phone",
                  lines: ["022 6413 5281", "+91 99201 00053"],
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  lines: ["info@bmginteriors.com"],
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Address",
                  lines: ["71, Mustafa Bazar, Victoria Rd,", "Byculla, Mumbai 400010"],
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: "Hours",
                  lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: By Appointment"],
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    style={{
                      width: "2.6rem", height: "2.6rem", flexShrink: 0,
                      background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                      borderRadius: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#CC9900" }}>
                      {item.label}
                    </p>
                    {item.lines.map((l) => (
                      <p key={l} className="text-sm leading-6" style={{ color: "#444" }}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick call CTA */}
            <div
              className="mt-10 rounded-2xl p-5"
              style={{ background: "#fafaf8", border: "1px solid #e8e4dc" }}
            >
              <p className="text-sm font-bold" style={{ color: "#1a1812" }}>Helpline (Direct)</p>
              <a
                href="tel:+919920100053"
                className="font-display text-2xl font-bold mt-1 block"
                style={{ color: "#FFCC00" }}
              >
                +91 99201 00053
              </a>
              <p className="text-xs mt-2" style={{ color: "#888" }}>Available Mon – Sat, 10 AM – 7 PM</p>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: "#1a1812", border: "1px solid #2e2b22" }}
          >
            <h3 className="font-bold text-xl text-white mb-2">Request a Free Consultation</h3>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Fill in your details and we&apos;ll get back to you within 24 hours.
            </p>

            <form className="space-y-5" action="mailto:info@bmginteriors.com" method="POST" encType="text/plain">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Phone *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Project Type
                </label>
                <select name="project_type" className="form-input" style={{ cursor: "pointer" }}>
                  <option value="">Select project type</option>
                  <option>Residential Interior</option>
                  <option>Commercial Interior</option>
                  <option>Hospitality / Hotel</option>
                  <option>Retail / Showroom</option>
                  <option>Architecture / Build</option>
                  <option>Turnkey Project</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Approximate Budget
                </label>
                <select name="budget" className="form-input" style={{ cursor: "pointer" }}>
                  <option value="">Select budget range</option>
                  <option>Under ₹5 Lakhs</option>
                  <option>₹5 – 15 Lakhs</option>
                  <option>₹15 – 30 Lakhs</option>
                  <option>₹30 – 60 Lakhs</option>
                  <option>Above ₹60 Lakhs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, location, timeline..."
                  className="form-input resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full justify-center py-3.5">
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background: "#fafaf8", borderTop: "1px solid #e8e4dc" }}>
        <div
          className="w-full flex items-center justify-center"
          style={{ height: "300px", background: "#1a2533" }}
        >
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#FFCC00" }}>
              Our Studio Location
            </p>
            <p className="font-display text-xl text-white">71, Mustafa Bazar, Victoria Rd</p>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>Byculla, Mumbai 400010</p>
            <a
              href="https://maps.google.com/?q=71+Mustafa+Bazar+Victoria+Road+Byculla+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-5 inline-flex"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
