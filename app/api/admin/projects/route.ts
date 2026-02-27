import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { slugify } from "@/lib/utils";

// GET /api/admin/projects – list all (including archived)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const archived = searchParams.get("archived") === "true";

  const { data, error } = await supabaseAdmin
    .from("projects")
    .select("*")
    .eq("archived", archived)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST /api/admin/projects – create
export async function POST(req: NextRequest) {
  const body = await req.json();

  const project = {
    title: body.title,
    slug: body.slug || slugify(body.title),
    category: body.category,
    location: body.location || "",
    area_sqft: body.area_sqft || null,
    year_completed: body.year_completed || null,
    description: body.description || "",
    cover_image: body.cover_image || "",
    cover_image_public_id: body.cover_image_public_id || "",
    gallery: body.gallery || [],
    tags: body.tags || [],
    is_featured: body.is_featured ?? false,
    archived: false,
  };

  const { data, error } = await supabaseAdmin
    .from("projects")
    .insert(project)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
