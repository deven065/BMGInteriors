"use client";
import { useState } from "react";

interface Props {
  onConfirm: () => Promise<void>;
  label?: string;
  title?: string;
  description?: string;
}

export default function DeleteButton({
  onConfirm,
  label = "Delete",
  title = "Are you sure?",
  description = "This action cannot be undone.",
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    setLoading(true);
    try {
      await onConfirm();
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-zinc-400 hover:text-red-400 transition px-2 py-1 rounded hover:bg-red-900/20"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1812] border border-zinc-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-zinc-400 text-sm mb-5">{description}</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className="text-sm text-zinc-400 hover:text-white px-4 py-2 rounded-lg
                           border border-zinc-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2
                           rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Deleting…" : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
