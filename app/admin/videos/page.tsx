"use client";
import { useEffect, useState } from "react";
import type { Video } from "@/lib/supabase";
import DeleteButton from "@/app/components/admin/DeleteButton";
import VideoUpload, { type UploadedVideo } from "@/app/components/admin/VideoUpload";
import { fmtDate, truncate } from "@/lib/utils";

const blankForm = { title: "", description: "", is_featured: false };

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(blankForm);
  const [videoFile, setVideoFile] = useState<UploadedVideo | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  function loadVideos() {
    fetch("/api/admin/videos")
      .then((r) => r.json())
      .then(setVideos)
      .finally(() => setLoading(false));
  }
  useEffect(() => { loadVideos(); }, []);

  async function handleAdd() {
    if (!form.title) return setError("Title is required");
    if (!videoFile) return setError("Video file is required");
    setSaving(true);
    setError("");

    const res = await fetch("/api/admin/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        video_url: videoFile.url,
        video_public_id: videoFile.public_id,
      }),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Save failed");
    } else {
      setForm(blankForm);
      setVideoFile(null);
      setShowForm(false);
      loadVideos();
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/admin/videos/${id}`, { method: "DELETE" });
    setVideos((prev) => prev.filter((v) => v.id !== id));
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Videos</h1>
          <p className="text-zinc-500 text-sm">{videos.length} total</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c]
                     font-semibold text-sm rounded-xl px-5 py-2.5 transition"
        >
          {showForm ? "Cancel" : "+ Upload Video"}
        </button>
      </div>

      {/* Upload form */}
      {showForm && (
        <div className="bg-[#1a1812] border border-zinc-700 rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-semibold text-zinc-300">New Video</h2>

          <label className="block">
            <span className="text-xs text-zinc-400">Title *</span>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={ic}
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-400">Description</span>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              className={ic + " resize-none"}
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-400 block mb-2">Video File * (max 150 MB)</span>
            <VideoUpload folder="videos" value={videoFile} onChange={setVideoFile} />
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.is_featured}
              onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
              className="w-4 h-4 accent-[#FFCC00]"
            />
            <span className="text-sm text-zinc-300">Feature on homepage</span>
          </label>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <button
            onClick={handleAdd}
            disabled={saving}
            className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c] font-semibold
                       text-sm rounded-xl px-5 py-2.5 transition disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save Video"}
          </button>
        </div>
      )}

      {/* Videos list */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-[#1a1812] rounded-2xl h-20 animate-pulse" />
          ))}
        </div>
      ) : videos.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">No videos yet.</div>
      ) : (
        <div className="space-y-3">
          {videos.map((v) => (
            <div
              key={v.id}
              className="bg-[#1a1812] border border-zinc-800 rounded-2xl p-4
                         flex gap-4 items-center hover:border-zinc-600 transition"
            >
              <video
                src={v.video_url}
                className="w-28 h-16 rounded-lg object-cover shrink-0 bg-black"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">{truncate(v.title, 50)}</p>
                {v.description && (
                  <p className="text-xs text-zinc-500 mt-0.5">{truncate(v.description, 80)}</p>
                )}
                <p className="text-xs text-zinc-600 mt-1">{fmtDate(v.created_at)}</p>
              </div>
              {v.is_featured && (
                <span className="text-[10px] bg-[#FFCC00]/20 text-[#FFCC00] rounded px-2 py-0.5 shrink-0">
                  Featured
                </span>
              )}
              <DeleteButton
                onConfirm={() => handleDelete(v.id)}
                description={`"${v.title}" will be archived.`}
              />
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
