"use client";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/supabase";
import DeleteButton from "@/app/components/admin/DeleteButton";
import { fmtDate } from "@/lib/utils";

const blankForm = {
  client_name: "",
  client_title: "",
  company: "",
  content: "",
  rating: 5,
  is_featured: false,
};

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(blankForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  function load() {
    fetch("/api/admin/testimonials")
      .then((r) => r.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }
  useEffect(() => { load(); }, []);

  async function handleAdd() {
    if (!form.client_name || !form.content) return setError("Name and review are required");
    setSaving(true);
    setError("");

    const res = await fetch("/api/admin/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Save failed");
    } else {
      setForm(blankForm);
      setShowForm(false);
      load();
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Testimonials</h1>
          <p className="text-zinc-500 text-sm">{items.length} total</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c]
                     font-semibold text-sm rounded-xl px-5 py-2.5 transition"
        >
          {showForm ? "Cancel" : "+ Add Review"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-[#1a1812] border border-zinc-700 rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-semibold text-zinc-300">New Testimonial</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <label className="block">
              <span className="text-xs text-zinc-400">Client Name *</span>
              <input value={form.client_name} onChange={(e) => setForm({ ...form, client_name: e.target.value })} className={ic} />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-400">Designation</span>
              <input value={form.client_title} onChange={(e) => setForm({ ...form, client_title: e.target.value })} className={ic} placeholder="e.g. CEO" />
            </label>
            <label className="block">
              <span className="text-xs text-zinc-400">Company</span>
              <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={ic} />
            </label>
          </div>

          <label className="block">
            <span className="text-xs text-zinc-400">Review *</span>
            <textarea
              rows={4}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className={ic + " resize-none"}
            />
          </label>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">Rating</span>
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                className="bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-1.5 text-sm text-white focus:outline-none"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <span className="text-[#FFCC00]">{"★".repeat(form.rating)}</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_featured}
                onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
                className="w-4 h-4 accent-[#FFCC00]"
              />
              <span className="text-sm text-zinc-300">Feature on homepage</span>
            </label>
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <button
            onClick={handleAdd}
            disabled={saving}
            className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c] font-semibold
                       text-sm rounded-xl px-5 py-2.5 transition disabled:opacity-50"
          >
            {saving ? "Saving…" : "Add Testimonial"}
          </button>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 bg-[#1a1812] rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">No testimonials yet.</div>
      ) : (
        <div className="space-y-3">
          {items.map((t) => (
            <div key={t.id} className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-5
                                        hover:border-zinc-600 transition">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{t.client_name}</p>
                    {t.client_title && (
                      <span className="text-xs text-zinc-500">· {t.client_title}</span>
                    )}
                    {t.company && (
                      <span className="text-xs text-zinc-500">@ {t.company}</span>
                    )}
                  </div>
                  <p className="text-[#FFCC00] text-xs mt-0.5">{"★".repeat(t.rating)}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {t.is_featured && (
                    <span className="text-[10px] bg-[#FFCC00]/20 text-[#FFCC00] rounded px-2 py-0.5">
                      Featured
                    </span>
                  )}
                  <span className="text-xs text-zinc-600">{fmtDate(t.created_at)}</span>
                  <DeleteButton
                    onConfirm={() => handleDelete(t.id)}
                    description={`Review by "${t.client_name}" will be archived.`}
                  />
                </div>
              </div>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
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
