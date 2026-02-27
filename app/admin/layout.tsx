"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "⊞" },
  { href: "/admin/projects", label: "Projects", icon: "🏗" },
  { href: "/admin/clients", label: "Clients", icon: "🤝" },
  { href: "/admin/videos", label: "Videos", icon: "🎬" },
  { href: "/admin/testimonials", label: "Testimonials", icon: "⭐" },
  { href: "/admin/inquiries", label: "Inquiries", icon: "📩" },
  { href: "/admin/settings", label: "Settings", icon: "⚙" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="flex min-h-screen bg-[#0f0e0c] text-white">
      {/* ── Sidebar ──────────────────────────────────────────────── */}
      <aside
        className={`flex flex-col bg-[#1a1812] border-r border-zinc-800
                    transition-all duration-300 shrink-0
                    ${collapsed ? "w-16" : "w-56"}`}
      >
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-zinc-800">
          <Image
            src="/logo.png"
            alt="BMG"
            width={36}
            height={36}
            style={{ objectFit: "contain", height: 36, width: "auto" }}
          />
          {!collapsed && (
            <span className="text-sm font-semibold text-white leading-tight">
              BMG Admin
            </span>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-4 space-y-0.5 px-2">
          {NAV.map(({ href, label, icon }) => {
            const active =
              href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                title={collapsed ? label : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition
                            ${active
                              ? "bg-[#FFCC00]/10 text-[#FFCC00] font-medium"
                              : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                            }`}
              >
                <span className="text-base leading-none">{icon}</span>
                {!collapsed && <span>{label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: collapse + logout */}
        <div className="border-t border-zinc-800 px-2 py-3 space-y-1">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm
                       text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition"
            title="Toggle sidebar"
          >
            <span className="text-base leading-none">{collapsed ? "→" : "←"}</span>
            {!collapsed && <span>Collapse</span>}
          </button>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm
                       text-zinc-500 hover:text-red-400 hover:bg-red-900/20 transition"
          >
            <span className="text-base leading-none">⏻</span>
            {!collapsed && <span>{loggingOut ? "Signing out…" : "Sign Out"}</span>}
          </button>
        </div>
      </aside>

      {/* ── Main content ─────────────────────────────────────────── */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
