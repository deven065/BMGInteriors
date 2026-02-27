"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Project, GalleryImage } from "@/lib/supabase";
import ImageUpload, { type UploadedImage } from "@/app/components/admin/ImageUpload";
import GalleryManager from "@/app/components/admin/GalleryManager";
import { slugify } from "@/lib/utils";

const CATEGORIES = [
  "Residential",
  "Commercial",
  "Office",
  "Hospitality",
  "Retail",
  "Healthcare",
  "Institutional",
  "Renovation",
];

interface Props {
  initial?: Partial<Project>;
}

export default function ProjectForm({ initial }: Props) {
  const router = useRouter();
  const isEdit = !!initial?.id;

  const [form, setForm] = useState({
    title: initial?.title ?? "",
    slug: initial?.slug ?? "",
    category: initial?.category ?? CATEGORIES[0],
    location: initial?.location ?? "",
    area_sqft: initial?.area_sqft ?? "",
    year_completed: initial?.year_completed ?? new Date().getFullYear(),
    description: initial?.description ?? "",
    tags: (initial?.tags ?? []).join(", "),
    is_featured: initial?.is_featured ?? false,
  });

  const [cover, setCover] = useState<UploadedImage | null>(
    initial?.cover_image && initial?.cover_image_public_id
      ? { url: initial.cover_image, public_id: initial.cover_image_public_id }
      : null
  );

  const [gallery, setGallery] = useState<GalleryImage[]>(initial?.gallery ?? []);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(field: string, val: unknown) {
    setForm((prev) => ({ ...prev, [field]: val }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.title) return setError("Title is required");
    if (!cover) return setError("Cover image is required");

    setSaving(true);
    setError("");

    const payload = {
      ...form,
      slug: form.slug || slugify(form.title),
      area_sqft: form.area_sqft ? Number(form.area_sqft) : null,
      year_completed: Number(form.year_completed),
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      cover_image: cover.url,
      cover_image_public_id: cover.public_id,
      gallery,
    };

    const url = isEdit ? `/api/admin/projects/${initial!.id}` : "/api/admin/projects";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Save failed");
      setSaving(false);
      return;
    }

    router.push("/admin/projects");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ── Basic Info ──────────────── */}
      <section className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-6 space-y-5">
        <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
          Basic Info
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <label className="block">
            <span className="text-xs text-zinc-400">Title *</span>
            <input
              value={form.title}
              onChange={(e) => {
                set("title", e.target.value);
                if (!isEdit) set("slug", slugify(e.target.value));
              }}
              required
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-400">Slug (URL)</span>
            <input
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              className={inputClass}
              placeholder="auto-generated"
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-400">Category *</span>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
              className={inputClass}
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs text-zinc-400">Location</span>
            <input
              value={form.location}
              onChange={(e) => set("location", e.target.value)}
              className={inputClass}
              placeholder="e.g. Mumbai, Maharashtra"
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-400">Area (sq ft)</span>
            <input
              type="number"
              value={form.area_sqft}
              onChange={(e) => set("area_sqft", e.target.value)}
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-400">Year Completed</span>
            <input
              type="number"
              value={form.year_completed}
              onChange={(e) => set("year_completed", e.target.value)}
              className={inputClass}
            />
          </label>
        </div>

        <label className="block">
          <span className="text-xs text-zinc-400">Description</span>
          <textarea
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            rows={4}
            className={inputClass + " resize-none"}
          />
        </label>

        <label className="block">
          <span className="text-xs text-zinc-400">Tags (comma-separated)</span>
          <input
            value={form.tags}
            onChange={(e) => set("tags", e.target.value)}
            className={inputClass}
            placeholder="modern, minimalist, luxury"
          />
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.is_featured}
            onChange={(e) => set("is_featured", e.target.checked)}
            className="w-4 h-4 accent-[#FFCC00]"
          />
          <span className="text-sm text-zinc-300">Feature on homepage</span>
        </label>
      </section>

      {/* ── Cover Image ──────────────── */}
      <section className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
          Cover Image *
        </h2>
        <ImageUpload
          folder="projects/covers"
          value={cover}
          onChange={setCover}
          label="Drag & drop or click to upload cover image"
        />
      </section>

      {/* ── Gallery ──────────────── */}
      <section className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
          Gallery ({gallery.length} images)
        </h2>
        <GalleryManager
          folder="projects/gallery"
          value={gallery}
          onChange={setGallery}
        />
      </section>

      {/* ── Actions ──────────────── */}
      {error && (
        <p className="text-red-400 text-sm bg-red-900/20 border border-red-800/40 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c]
                     font-semibold text-sm rounded-xl px-6 py-2.5
                     transition disabled:opacity-50"
        >
          {saving ? "Saving…" : isEdit ? "Update Project" : "Create Project"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm text-zinc-400 hover:text-white border border-zinc-700
                     hover:border-zinc-500 rounded-xl px-5 py-2.5 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 " +
  "text-sm text-white placeholder-zinc-600 " +
  "focus:outline-none focus:border-[#FFCC00]/50 focus:ring-1 focus:ring-[#FFCC00]/10 transition";
