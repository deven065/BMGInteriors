import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectForm from "@/app/components/admin/ProjectForm";
import { supabaseAdmin } from "@/lib/supabase";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: project, error } = await supabaseAdmin
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) notFound();

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/projects"
          className="text-zinc-500 hover:text-white text-sm transition"
        >
          ← Projects
        </Link>
        <span className="text-zinc-700">/</span>
        <h1 className="text-xl font-bold text-white">Edit: {project.title}</h1>
      </div>

      <ProjectForm initial={project} />
    </div>
  );
}
