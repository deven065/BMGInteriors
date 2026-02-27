"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ background: "#0f0e0c" }}
      className="sticky top-0 z-40 border-b border-white/10"
    >
      <nav className="shell flex h-24 items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="BMG Interiors Logo"
            width={120}
            height={60}
            style={{ objectFit: "contain", height: "60px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-gold hidden sm:inline-flex text-xs px-5 py-2.5">
            Free Consultation
          </Link>
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
        style={{ background: "#1a1812", borderTop: "1px solid #2e2b22" }}
      >
        <div className="shell flex flex-col py-4 gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-2 text-sm font-semibold tracking-widest uppercase border-b border-white/5 transition-colors ${pathname === l.href ? "text-yellow-400" : "text-white/70 hover:text-yellow-400"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-3 self-start text-xs px-5 py-2.5"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
