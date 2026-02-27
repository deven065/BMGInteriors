import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "fallback-dev-secret-change-in-prod"
);

/**  Sign a 7-day admin JWT */
export async function signAdminToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET);
}

/** Verify an admin JWT; returns payload or null */
export async function verifyAdminToken(
  token: string
): Promise<{ role: string } | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as { role: string };
  } catch {
    return null;
  }
}

// ─── String helpers ───────────────────────────────────────────────────────────

/** "Hello World"  →  "hello-world" */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Format a number with commas */
export function fmt(n: number): string {
  return n.toLocaleString("en-IN");
}

/** Truncate a string to `max` chars with ellipsis */
export function truncate(str: string, max = 80): string {
  return str.length <= max ? str : `${str.slice(0, max)}…`;
}

/** Human-readable relative time  e.g. "3 days ago" */
export function timeAgo(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

/** Format a date as "27 Feb 2026" */
export function fmtDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Returns a colour class for inquiry status */
export function inquiryStatusColor(
  status: string
): { bg: string; text: string } {
  const map: Record<string, { bg: string; text: string }> = {
    new: { bg: "bg-gold/20", text: "text-gold" },
    contacted: { bg: "bg-blue-900/30", text: "text-blue-400" },
    in_progress: { bg: "bg-purple-900/30", text: "text-purple-400" },
    closed: { bg: "bg-zinc-700/30", text: "text-zinc-400" },
  };
  return map[status] ?? map.new;
}
