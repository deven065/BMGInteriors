import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0f0e0c" }} className="text-white/75 text-sm">
      {/* Main footer grid */}
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10">
        {/* Brand col */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div
              style={{ background: "#FFCC00" }}
              className="flex h-10 w-10 items-center justify-center rounded-lg shrink-0"
            >
              <span className="font-display text-lg font-black" style={{ color: "#0f0e0c" }}>
                BMG
              </span>
            </div>
            <p className="text-white font-bold text-base">BMG Interiors</p>
          </div>
          <p className="leading-7 text-white/60 text-[0.83rem]">
            A comprehensive service provider for Residential, Commercial, Hospitality, Building & Bungalows. Over 35 years of creative interior excellence.
          </p>
          <div className="flex gap-3 pt-1">
            {["f", "ig", "tw", "in"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-xs text-white/50 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-5 pb-3 border-b"
            style={{ borderColor: "#FFCC00", display: "inline-block", paddingRight: "2rem" }}
          >
            Navigation
          </h4>
          <ul className="space-y-3 text-[0.83rem]">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span style={{ color: "#FFCC00" }}>›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-5 pb-3 border-b"
            style={{ borderColor: "#FFCC00", display: "inline-block", paddingRight: "2rem" }}
          >
            Services
          </h4>
          <ul className="space-y-3 text-[0.83rem]">
            {[
              "Architecture",
              "Interior Design",
              "Turnkey Contracts",
              "Residential Projects",
              "Commercial Spaces",
              "Retail & Hospitality",
            ].map((item) => (
              <li key={item}>
                <Link href="/services" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span style={{ color: "#FFCC00" }}>›</span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-5 pb-3 border-b"
            style={{ borderColor: "#FFCC00", display: "inline-block", paddingRight: "2rem" }}
          >
            Quick Contact
          </h4>
          <ul className="space-y-4 text-[0.83rem]">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0" style={{ color: "#FFCC00" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12 19.79 19.79 0 0 1 1.57 3.5 2 2 0 0 1 3.54 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.35A16 16 0 0 0 14 15.42l1.45-1.45a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              </span>
              <div>
                <p>022 6413 5281</p>
                <p>+91 99201 00053</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0" style={{ color: "#FFCC00" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <p>info@bmginteriors.com</p>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0" style={{ color: "#FFCC00" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <p>71, Mustafa Bazar, Victoria Rd,<br />Byculla, Mumbai 400010</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="shell flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between text-xs text-white/35">
        <p>© {new Date().getFullYear()} BMG Interiors. All Rights Reserved.</p>
        <p>Architects | Interior Designers | Contractors</p>
      </div>
    </footer>
  );
}
