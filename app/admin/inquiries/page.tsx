"use client";
import { useEffect, useState } from "react";
import type { Inquiry } from "@/lib/supabase";
import { fmtDate, inquiryStatusColor } from "@/lib/utils";
import SearchInput from "@/app/components/admin/SearchInput";

const STATUSES: Inquiry["status"][] = ["new", "contacted", "in_progress", "closed"];

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Inquiry["status"] | "all">("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/admin/inquiries")
      .then((r) => r.json())
      .then((data: Inquiry[]) => {
        setInquiries(data);
        const n: Record<string, string> = {};
        data.forEach((i) => { n[i.id] = i.notes ?? ""; });
        setNotes(n);
      })
      .finally(() => setLoading(false));
  }, []);

  async function updateStatus(id: string, status: Inquiry["status"]) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i))
    );
  }

  async function saveNotes(id: string) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes: notes[id] }),
    });
  }

  const filtered = inquiries.filter((i) => {
    const matchStatus = filter === "all" || i.status === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      i.name.toLowerCase().includes(q) ||
      i.email.toLowerCase().includes(q) ||
      i.message.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Inquiries</h1>
        <p className="text-zinc-500 text-sm">{inquiries.length} total</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="w-56">
          <SearchInput value={search} onChange={setSearch} placeholder="Search inquiries…" />
        </div>
        <div className="flex gap-2">
          {(["all", ...STATUSES] as const).map((s) => {
            const col = s !== "all" ? inquiryStatusColor(s) : null;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`text-xs rounded-lg px-3 py-1.5 capitalize transition
                            ${filter === s
                              ? "bg-[#FFCC00]/20 text-[#FFCC00] border border-[#FFCC00]/30"
                              : "border border-zinc-700 text-zinc-400 hover:text-white"
                            }`}
              >
                {s === "all" ? "All" : s.replace("_", " ")}
                {col && filter !== s && (
                  <span className={`ml-1.5 ${col.text}`}>{inquiries.filter((i) => i.status === s).length}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* List */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-16 bg-[#1a1812] rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">No inquiries found.</div>
      ) : (
        <div className="space-y-3">
          {filtered.map((inq) => {
            const col = inquiryStatusColor(inq.status);
            const isOpen = expanded === inq.id;
            return (
              <div
                key={inq.id}
                className="bg-[#1a1812] border border-zinc-800 rounded-2xl overflow-hidden
                           hover:border-zinc-600 transition"
              >
                {/* Row header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : inq.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-white">{inq.name}</span>
                      <span className="text-xs text-zinc-500">{inq.email}</span>
                      {inq.phone && (
                        <span className="text-xs text-zinc-500">{inq.phone}</span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 mt-0.5 truncate">{inq.message}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-xs rounded-full px-2.5 py-0.5 capitalize ${col.bg} ${col.text}`}>
                      {inq.status.replace("_", " ")}
                    </span>
                    <span className="text-xs text-zinc-600">{fmtDate(inq.created_at)}</span>
                    <span className="text-zinc-600 text-xs">{isOpen ? "▲" : "▼"}</span>
                  </div>
                </button>

                {/* Expanded detail */}
                {isOpen && (
                  <div className="border-t border-zinc-800 px-5 py-5 space-y-4">
                    {inq.service_interest && (
                      <p className="text-xs text-zinc-400">
                        <span className="text-zinc-600">Service: </span>
                        {inq.service_interest}
                      </p>
                    )}
                    <p className="text-sm text-zinc-300 leading-relaxed">{inq.message}</p>

                    {/* Status changer */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-zinc-500">Update status:</span>
                      {STATUSES.map((s) => (
                        <button
                          key={s}
                          onClick={() => updateStatus(inq.id, s)}
                          className={`text-xs rounded-lg px-3 py-1 capitalize transition
                                      ${inq.status === s
                                        ? `${inquiryStatusColor(s).bg} ${inquiryStatusColor(s).text}`
                                        : "border border-zinc-700 text-zinc-500 hover:text-white"
                                      }`}
                        >
                          {s.replace("_", " ")}
                        </button>
                      ))}
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Internal notes</label>
                      <div className="flex gap-2">
                        <textarea
                          rows={2}
                          value={notes[inq.id] ?? ""}
                          onChange={(e) => setNotes({ ...notes, [inq.id]: e.target.value })}
                          placeholder="Add notes about this inquiry…"
                          className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2
                                     text-sm text-white placeholder-zinc-600 resize-none
                                     focus:outline-none focus:border-[#FFCC00]/50 transition"
                        />
                        <button
                          onClick={() => saveNotes(inq.id)}
                          className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300
                                     rounded-lg px-3 transition self-start py-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>

                    {/* Quick reply link */}
                    <a
                      href={`mailto:${inq.email}?subject=RE: Your Inquiry – BMG Interiors`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#FFCC00] hover:underline"
                    >
                      ✉ Reply via email
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
