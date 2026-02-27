"use client";
import { useState, FormEvent } from "react";

export default function SettingsPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleChangePassword(e: FormEvent) {
    e.preventDefault();
    setMsg(""); setError("");

    if (newPassword.length < 8) return setError("Password must be at least 8 characters");
    if (newPassword !== confirmPassword) return setError("Passwords do not match");

    setSaving(true);
    const res = await fetch("/api/admin/settings/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
    });

    if (res.ok) {
      setMsg("Password note: update ADMIN_PASSWORD in your .env.local and redeploy.");
      setNewPassword(""); setConfirmPassword("");
    } else {
      setError("Failed to update");
    }
    setSaving(false);
  }

  return (
    <div className="p-6 md:p-10 max-w-2xl mx-auto space-y-10">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      {/* Password change note */}
      <div className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-semibold text-zinc-300">Change Admin Password</h2>
        <p className="text-xs text-zinc-500 leading-relaxed">
          The admin password is stored in your <code className="bg-zinc-800 px-1 rounded">.env.local</code> file
          as <code className="bg-zinc-800 px-1 rounded">ADMIN_PASSWORD</code>.
          Update the value there and redeploy to change your password.
        </p>

        <form onSubmit={handleChangePassword} className="space-y-4">
          <label className="block">
            <span className="text-xs text-zinc-400">New Password</span>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={8}
              required
              className={ic}
            />
          </label>
          <label className="block">
            <span className="text-xs text-zinc-400">Confirm Password</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={ic}
            />
          </label>

          {error && <p className="text-red-400 text-xs">{error}</p>}
          {msg && <p className="text-green-400 text-xs bg-green-900/20 rounded p-2">{msg}</p>}

          <button
            type="submit"
            disabled={saving}
            className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c] font-semibold
                       text-sm rounded-xl px-5 py-2.5 transition disabled:opacity-50"
          >
            {saving ? "Saving…" : "Update Password"}
          </button>
        </form>
      </div>

      {/* DB Schema reference */}
      <div className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-semibold text-zinc-300">Supabase SQL Schema</h2>
        <p className="text-xs text-zinc-500">
          Run the following SQL in your Supabase SQL Editor to create all required tables.
        </p>
        <pre className="bg-zinc-900 rounded-xl p-4 text-xs text-zinc-300 overflow-x-auto leading-relaxed">
{`-- Enable UUID extension
create extension if not exists "pgcrypto";

-- Projects
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  location text default '',
  area_sqft numeric,
  year_completed int,
  description text default '',
  cover_image text default '',
  cover_image_public_id text default '',
  gallery jsonb default '[]',
  tags text[] default '{}',
  is_featured boolean default false,
  archived boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Clients
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text default '',
  logo_public_id text default '',
  website_url text,
  is_featured boolean default false,
  sort_order int default 0,
  archived boolean default false,
  created_at timestamptz default now()
);

-- Videos
create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  video_url text not null,
  video_public_id text not null,
  thumbnail_url text,
  thumbnail_public_id text,
  project_id uuid references projects(id) on delete set null,
  duration_seconds int,
  is_featured boolean default false,
  archived boolean default false,
  created_at timestamptz default now()
);

-- Testimonials
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_title text,
  company text,
  content text not null,
  rating int default 5 check (rating between 1 and 5),
  avatar_url text,
  avatar_public_id text,
  project_id uuid references projects(id) on delete set null,
  is_featured boolean default false,
  archived boolean default false,
  created_at timestamptz default now()
);

-- Inquiries (also filled by public contact form)
create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service_interest text,
  message text not null,
  status text default 'new' check (status in ('new','contacted','in_progress','closed')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);`}
        </pre>
      </div>
    </div>
  );
}

const ic =
  "mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 " +
  "text-sm text-white placeholder-zinc-600 " +
  "focus:outline-none focus:border-[#FFCC00]/50 transition";
