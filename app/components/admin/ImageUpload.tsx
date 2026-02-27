"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

export interface UploadedImage {
  url: string;
  public_id: string;
}

interface Props {
  folder: string;
  value?: UploadedImage | null;
  onChange: (img: UploadedImage | null) => void;
  label?: string;
}

export default function ImageUpload({
  folder,
  value,
  onChange,
  label = "Upload Image",
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const onDrop = useCallback(
    async (files: File[]) => {
      const file = files[0];
      if (!file) return;

      setUploading(true);
      setError("");
      setProgress(10);

      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", folder);
      fd.append("resourceType", "image");

      // Simulate progress ticks while uploading
      const tick = setInterval(() => {
        setProgress((p) => Math.min(p + 15, 85));
      }, 300);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: fd,
        });
        clearInterval(tick);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Upload failed");
        }
        const data: UploadedImage = await res.json();
        setProgress(100);
        onChange(data);
      } catch (e: unknown) {
        clearInterval(tick);
        setError(e instanceof Error ? e.message : "Upload failed");
      } finally {
        setUploading(false);
        setTimeout(() => setProgress(0), 600);
      }
    },
    [folder, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    disabled: uploading,
  });

  async function handleRemove() {
    if (!value) return;
    await fetch("/api/admin/delete-media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId: value.public_id, resourceType: "image" }),
    });
    onChange(null);
  }

  if (value?.url) {
    return (
      <div className="relative inline-block group">
        <Image
          src={value.url}
          alt="Uploaded"
          width={240}
          height={160}
          className="rounded-xl object-cover w-60 h-40"
        />
        <button
          onClick={handleRemove}
          className="absolute top-2 right-2 bg-black/70 text-white text-xs
                     rounded-full w-6 h-6 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition hover:bg-red-700"
        >
          ✕
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl px-6 py-10 text-center cursor-pointer transition
                    ${isDragActive
                      ? "border-[#FFCC00] bg-[#FFCC00]/5"
                      : "border-zinc-700 hover:border-zinc-500"
                    } ${uploading ? "opacity-60 pointer-events-none" : ""}`}
      >
        <input {...getInputProps()} />
        <div className="text-3xl mb-2 text-zinc-600">🖼</div>
        <p className="text-sm text-zinc-400">
          {isDragActive ? "Drop image here…" : label}
        </p>
        <p className="text-xs text-zinc-600 mt-1">
          PNG, JPG, WebP — max 10 MB
        </p>
      </div>

      {uploading && (
        <div className="mt-2 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
          <div
            className="h-full bg-[#FFCC00] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
