import ProjectForm from "@/app/components/admin/ProjectForm";
import Link from "next/link";

export default function NewProjectPage() {
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
        <h1 className="text-xl font-bold text-white">New Project</h1>
      </div>

      <ProjectForm />
    </div>
  );
}
