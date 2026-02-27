import { NextRequest, NextResponse } from "next/server";

// PUT /api/admin/settings/password
// This just validates the new password. The actual password lives in env.
// The admin must update .env.local and redeploy (Vercel env var update).
export async function PUT(req: NextRequest) {
  const { newPassword } = await req.json();

  if (!newPassword || newPassword.length < 8) {
    return NextResponse.json(
      { error: "Password must be at least 8 characters" },
      { status: 400 }
    );
  }

  // In a serverless environment the env var can't be changed at runtime.
  // Return guidance for the admin to update via hosting dashboard.
  return NextResponse.json({
    ok: true,
    message: `Update ADMIN_PASSWORD="${newPassword}" in your .env.local / Vercel environment variables and redeploy.`,
  });
}
