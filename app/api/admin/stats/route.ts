import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// GET /api/admin/stats
export async function GET() {
  const [projects, clients, videos, testimonials, inquiries] = await Promise.all([
    supabaseAdmin.from("projects").select("id", { count: "exact" }).eq("archived", false),
    supabaseAdmin.from("clients").select("id", { count: "exact" }).eq("archived", false),
    supabaseAdmin.from("videos").select("id", { count: "exact" }).eq("archived", false),
    supabaseAdmin.from("testimonials").select("id", { count: "exact" }).eq("archived", false),
    supabaseAdmin.from("inquiries").select("id", { count: "exact" }).eq("status", "new"),
  ]);

  return NextResponse.json({
    projects: projects.count ?? 0,
    clients: clients.count ?? 0,
    videos: videos.count ?? 0,
    testimonials: testimonials.count ?? 0,
    inquiries_new: inquiries.count ?? 0,
  });
}
