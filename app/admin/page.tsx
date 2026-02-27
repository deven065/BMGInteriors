"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { AdminStat } from "@/lib/supabase";
import { timeAgo } from "@/lib/utils";

const CARDS = [
  { key: "projects", label: "Projects", icon: "🏗", href: "/admin/projects", color: "text-[#FFCC00]" },
  { key: "clients", label: "Clients", icon: "🤝", href: "/admin/clients", color: "text-sky-400" },
  { key: "videos", label: "Videos", icon: "🎬", href: "/admin/videos", color: "text-purple-400" },
  { key: "testimonials", label: "Testimonials", icon: "⭐", href: "/admin/testimonials", color: "text-green-400" },
  { key: "inquiries_new", label: "New Inquiries", icon: "📩", href: "/admin/inquiries", color: "text-red-400" },
] as const;

const QUICK_LINKS = [
  { href: "/admin/projects/new", label: "Add Project", icon: "+" },
  { href: "/admin/clients", label: "Add Client", icon: "+" },
  { href: "/admin/videos", label: "Upload Video", icon: "+" },
  { href: "/admin/inquiries", label: "View Inquiries", icon: "→" },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStat | null>(null);
  const [loading, setLoading] = useState(true);
  const loadedAt = new Date().toISOString();

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-zinc-500 text-sm mt-1">
          Last updated {timeAgo(loadedAt)}
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CARDS.map(({ key, label, icon, href, color }) => (
          <Link
            key={key}
            href={href}
            className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-5
                       hover:border-zinc-600 transition group"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <div className={`text-3xl font-bold ${color}`}>
              {loading ? (
                <span className="inline-block w-8 h-8 bg-zinc-800 rounded animate-pulse" />
              ) : (
                stats?.[key] ?? 0
              )}
            </div>
            <div className="text-xs text-zinc-500 mt-1 group-hover:text-zinc-400 transition">
              {label}
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          {QUICK_LINKS.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 bg-[#1a1812] border border-zinc-700
                         hover:border-[#FFCC00]/40 hover:bg-[#FFCC00]/5
                         text-sm text-zinc-300 hover:text-white rounded-xl px-4 py-2.5 transition"
            >
              <span className="text-[#FFCC00] font-bold">{icon}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Site link */}
      <div className="border-t border-zinc-800 pt-6">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-[#FFCC00] transition"
        >
          View live site ↗
        </a>
      </div>
    </div>
  );
}
