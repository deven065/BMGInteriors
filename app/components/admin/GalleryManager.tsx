"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import type { GalleryImage } from "@/lib/supabase";

interface Props {
  value: GalleryImage[];
  onChange: (imgs: GalleryImage[]) => void;
  folder?: string;
}

export default function GalleryManager({
  value,
  onChange,
  folder = "gallery",
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const onDrop = useCallback(
    async (files: File[]) => {
      setUploading(true);
      setError("");
      const uploaded: GalleryImage[] = [];

      for (const file of files) {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("folder", folder);
        fd.append("resourceType", "image");

        try {
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            body: fd,
          });
          if (!res.ok) throw new Error("Upload failed");
          const data = await res.json();
          uploaded.push({ url: data.url, public_id: data.public_id });
        } catch {
          setError("One or more uploads failed");
        }
      }

      onChange([...value, ...uploaded]);
      setUploading(false);
    },
    [folder, value, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    disabled: uploading,
  });

  async function removeImage(idx: number) {
    const img = value[idx];
    await fetch("/api/admin/delete-media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId: img.public_id }),
    });
    onChange(value.filter((_, i) => i !== idx));
  }

  function updateCaption(idx: number, caption: string) {
    const next = [...value];
    next[idx] = { ...next[idx], caption };
    onChange(next);
  }

  return (
    <div className="space-y-4">
      {/* Gallery grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {value.map((img, i) => (
            <div key={img.public_id} className="group relative">
              <Image
                src={img.url}
                alt={`Gallery ${i + 1}`}
                width={200}
                height={140}
                className="w-full h-36 object-cover rounded-lg"
              />
              {/* Remove button */}
              <button
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 bg-black/70 text-white text-xs
                           w-6 h-6 rounded-full flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition hover:bg-red-700"
              >
                ✕
              </button>
              {/* Caption input */}
              <input
                type="text"
                value={img.caption || ""}
                onChange={(e) => updateCaption(i, e.target.value)}
                placeholder="Caption (optional)"
                className="mt-1 w-full text-xs bg-zinc-900 border border-zinc-700 rounded
                           px-2 py-1 text-zinc-300 placeholder-zinc-600
                           focus:outline-none focus:border-[#FFCC00]/50"
              />
            </div>
          ))}
        </div>
      )}

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl px-6 py-8 text-center cursor-pointer transition
                    ${isDragActive ? "border-[#FFCC00] bg-[#FFCC00]/5" : "border-zinc-700 hover:border-zinc-500"}
                    ${uploading ? "opacity-60 pointer-events-none" : ""}`}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-zinc-400">
          {uploading
            ? "Uploading…"
            : isDragActive
            ? "Drop images here…"
            : "Drag & drop multiple images or click to select"}
        </p>
        <p className="text-xs text-zinc-600 mt-1">PNG, JPG, WebP — max 10 MB each</p>
      </div>

      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
