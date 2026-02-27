"use client";

interface Props {
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
}

export default function Pagination({ page, totalPages, onPage }: Props) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onPage(page - 1)}
        disabled={page <= 1}
        className="px-3 py-1.5 text-sm rounded-lg border border-zinc-700
                   text-zinc-400 hover:text-white hover:border-zinc-500
                   disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        ← Prev
      </button>
      <span className="text-sm text-zinc-500">
        {page} / {totalPages}
      </span>
      <button
        onClick={() => onPage(page + 1)}
        disabled={page >= totalPages}
        className="px-3 py-1.5 text-sm rounded-lg border border-zinc-700
                   text-zinc-400 hover:text-white hover:border-zinc-500
                   disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        Next →
      </button>
    </div>
  );
}
