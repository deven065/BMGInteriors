import { NextRequest, NextResponse } from "next/server";
import { deleteFromCloudinary } from "@/lib/cloudinary";

// DELETE /api/admin/delete-media  body: { publicId, resourceType? }
export async function DELETE(req: NextRequest) {
  try {
    const { publicId, resourceType = "image" } = await req.json();

    if (!publicId) {
      return NextResponse.json({ error: "publicId is required" }, { status: 400 });
    }

    await deleteFromCloudinary(publicId, resourceType);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Delete media error:", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
