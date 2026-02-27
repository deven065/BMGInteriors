import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// POST /api/contact – public inquiry form
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service_interest, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email and message are required" },
      { status: 400 }
    );
  }

  const { error } = await supabaseAdmin.from("inquiries").insert({
    name,
    email,
    phone: phone || null,
    service_interest: service_interest || null,
    message,
    status: "new",
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
