import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export default cloudinary;

// ─── Upload helpers ───────────────────────────────────────────────────────────

/** Upload a file buffer to Cloudinary and return url + public_id */
export async function uploadToCloudinary(
  buffer: Buffer,
  folder: string,
  resourceType: "image" | "video" | "raw" = "image"
): Promise<{ url: string; public_id: string }> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `bmg-interiors/${folder}`,
        resource_type: resourceType,
        transformation:
          resourceType === "image"
            ? [{ quality: "auto:good", fetch_format: "auto" }]
            : undefined,
      },
      (err, result) => {
        if (err || !result) return reject(err || new Error("Upload failed"));
        resolve({ url: result.secure_url, public_id: result.public_id });
      }
    );
    uploadStream.end(buffer);
  });
}

/** Delete a Cloudinary asset by public_id */
export async function deleteFromCloudinary(
  publicId: string,
  resourceType: "image" | "video" | "raw" = "image"
): Promise<void> {
  await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}

/** Generate a thumbnail URL for a video public_id */
export function videoThumbnailUrl(publicId: string): string {
  return cloudinary.url(`${publicId}.jpg`, {
    resource_type: "video",
    transformation: [{ width: 640, crop: "scale" }],
  });
}
