"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0e0c]">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="BMG Interiors"
            width={120}
            height={60}
            style={{ objectFit: "contain", height: 60, width: "auto" }}
          />
        </div>

        {/* Card */}
        <div className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-8">
          <h1 className="text-xl font-semibold text-white mb-1">Admin Login</h1>
          <p className="text-sm text-zinc-500 mb-6">
            Enter your admin password to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                placeholder="••••••••••••"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5
                           text-white placeholder-zinc-600 text-sm
                           focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00]/30
                           transition"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs bg-red-900/20 border border-red-800/40 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c]
                         font-semibold text-sm rounded-lg py-2.5
                         transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-zinc-700 mt-4">
          BMG Interiors © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
