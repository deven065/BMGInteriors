"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface UploadedVideo {
  url: string;
  public_id: string;
}

interface Props {
  folder?: string;
  value?: UploadedVideo | null;
  onChange: (v: UploadedVideo | null) => void;
}

export default function VideoUpload({ folder = "videos", value, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const onDrop = useCallback(
    async (files: File[]) => {
      const file = files[0];
      if (!file) return;

      setUploading(true);
      setError("");
      setProgress(5);

      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", folder);
      fd.append("resourceType", "video");

      const tick = setInterval(() => {
        setProgress((p) => Math.min(p + 8, 90));
      }, 500);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: fd,
        });
        clearInterval(tick);
        if (!res.ok) {
          const d = await res.json();
          throw new Error(d.error || "Upload failed");
        }
        const data: UploadedVideo = await res.json();
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
    accept: { "video/*": [] },
    maxFiles: 1,
    disabled: uploading,
  });

  async function handleRemove() {
    if (!value) return;
    await fetch("/api/admin/delete-media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId: value.public_id, resourceType: "video" }),
    });
    onChange(null);
  }

  if (value?.url) {
    return (
      <div className="space-y-2">
        <video
          src={value.url}
          controls
          className="w-full max-w-md rounded-xl bg-black"
        />
        <button
          onClick={handleRemove}
          className="text-xs text-red-400 hover:text-red-300 transition"
        >
          Remove video
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
        <div className="text-3xl mb-2 text-zinc-600">🎬</div>
        <p className="text-sm text-zinc-400">
          {isDragActive ? "Drop video here…" : "Drag & drop or click to upload video"}
        </p>
        <p className="text-xs text-zinc-600 mt-1">MP4, MOV, WebM — max 150 MB</p>
      </div>

      {uploading && (
        <div className="mt-2 space-y-1">
          <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-[#FFCC00] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-zinc-500 text-right">
            Uploading… {progress}%
          </p>
        </div>
      )}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
