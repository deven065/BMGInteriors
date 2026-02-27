"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/supabase";
import DeleteButton from "@/app/components/admin/DeleteButton";
import SearchInput from "@/app/components/admin/SearchInput";
import Pagination from "@/app/components/admin/Pagination";
import { fmtDate, truncate } from "@/lib/utils";

const PER_PAGE = 12;

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  async function handleDelete(id: string) {
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-zinc-500 text-sm">{projects.length} total</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="bg-[#FFCC00] hover:bg-[#FFD633] text-[#0f0e0c]
                     font-semibold text-sm rounded-xl px-5 py-2.5 transition"
        >
          + Add Project
        </Link>
      </div>

      {/* Search */}
      <div className="max-w-xs">
        <SearchInput
          value={search}
          onChange={(v) => { setSearch(v); setPage(1); }}
          placeholder="Search projects…"
        />
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-[#1a1812] rounded-2xl h-52 animate-pulse" />
          ))}
        </div>
      ) : paged.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">
          {search ? "No projects match your search." : "No projects yet."}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paged.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1812] border border-zinc-800 rounded-2xl overflow-hidden
                         hover:border-zinc-600 transition group"
            >
              {/* Cover image */}
              <div className="relative h-36 bg-zinc-800">
                {project.cover_image ? (
                  <Image
                    src={project.cover_image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-3xl">
                    🏗
                  </div>
                )}
                {project.is_featured && (
                  <span className="absolute top-2 left-2 bg-[#FFCC00] text-[#0f0e0c]
                                   text-[10px] font-bold uppercase rounded px-1.5 py-0.5">
                    Featured
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white leading-tight">
                  {truncate(project.title, 40)}
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {project.category} · {fmtDate(project.created_at)}
                </p>
                <div className="flex gap-2 mt-3">
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="text-xs text-[#FFCC00] hover:underline flex-1"
                  >
                    Edit
                  </Link>
                  <DeleteButton
                    onConfirm={() => handleDelete(project.id)}
                    description={`"${project.title}" will be archived.`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination page={page} totalPages={totalPages} onPage={setPage} />
      </div>
    </div>
  );
}
