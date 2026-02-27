"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Client } from "@/lib/supabase";
import DeleteButton from "@/app/components/admin/DeleteButton";
import ImageUpload, { type UploadedImage } from "@/app/components/admin/ImageUpload";

const blankForm = {
  name: "",
  website_url: "",
  is_featured: false,
};

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(blankForm);
  const [logo, setLogo] = useState<UploadedImage | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  function loadClients() {
    fetch("/api/admin/clients")
      .then((r) => r.json())
      .then(setClients)
      .finally(() => setLoading(false));
  }

  useEffect(() => { loadClients(); }, []);

  async function handleAdd() {
    if (!form.name) return setError("Client name is required");
    if (!logo) return setError("Logo is required");
    setSaving(true);
    setError("");

    const res = await fetch("/api/admin/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        logo_url: logo.url,
        logo_public_id: logo.public_id,
        sort_order: clients.length,
      }),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Save failed");
    } else {
      setForm(blankForm);
      setLogo(null);
      setShowForm(false);
      loadClients();
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/admin/clients/${id}`, { method: "DELETE" });
    setClients((prev) => prev.filter((c) => c.id !== id));
  }

  async function toggleFeatured(c: Client) {
    await fetch(`/api/admin/clients/${c.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_featured: !c.is_featured }),
    });
    setClients((prev) =>
      prev.map((x) => (x.id === c.id ? { ...x, is_featured: !x.is_featured } : x))
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Clients</h1>
          <p className="text-zinc-500 text-sm">{clients.length} total</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c]
                     font-semibold text-sm rounded-xl px-5 py-2.5 transition"
        >
          {showForm ? "Cancel" : "+ Add Client"}
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <div className="bg-[#1a1812] border border-zinc-700 rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-semibold text-zinc-300">New Client</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-xs text-zinc-400">Name *</span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={ic}
              />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-400">Website URL</span>
              <input
                value={form.website_url}
                onChange={(e) => setForm({ ...form, website_url: e.target.value })}
                className={ic}
                placeholder="https://example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-xs text-zinc-400 block mb-2">Logo *</span>
            <ImageUpload folder="clients" value={logo} onChange={setLogo} label="Upload client logo" />
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_featured}
              onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
              className="w-4 h-4 accent-[#FFCC00]"
            />
            <span className="text-sm text-zinc-300">Show on homepage marquee</span>
          </label>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <button
            onClick={handleAdd}
            disabled={saving}
            className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c] font-semibold
                       text-sm rounded-xl px-5 py-2.5 transition disabled:opacity-50"
          >
            {saving ? "Saving…" : "Add Client"}
          </button>
        </div>
      )}

      {/* Clients grid */}
      {loading ? (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-[#1a1812] rounded-2xl h-28 animate-pulse" />
          ))}
        </div>
      ) : clients.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">No clients yet.</div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((c) => (
            <div
              key={c.id}
              className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-4 space-y-3
                         hover:border-zinc-600 transition"
            >
              <div className="h-16 flex items-center justify-center">
                {c.logo_url ? (
                  <Image src={c.logo_url} alt={c.name} width={80} height={50}
                         className="object-contain max-h-14" />
                ) : (
                  <span className="text-zinc-700 text-2xl">🤝</span>
                )}
              </div>
              <p className="text-xs text-white font-medium text-center truncate">{c.name}</p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => toggleFeatured(c)}
                  className={`text-[10px] rounded px-1.5 py-0.5 transition
                             ${c.is_featured ? "bg-[#FFCC00]/20 text-[#FFCC00]" : "text-zinc-600 hover:text-zinc-400"}`}
                >
                  {c.is_featured ? "★ Featured" : "☆ Feature"}
                </button>
                <DeleteButton
                  onConfirm={() => handleDelete(c.id)}
                  description={`"${c.name}" will be archived.`}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const ic =
  "mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 " +
  "text-sm text-white placeholder-zinc-600 " +
  "focus:outline-none focus:border-[#FFCC00]/50 transition";
