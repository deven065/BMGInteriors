import { createClient, SupabaseClient } from "@supabase/supabase-js";

// ─── Lazy singletons – only instantiated when first called ───────────────────
let _public: SupabaseClient | null = null;
let _admin: SupabaseClient | null = null;

/** Browser / public client (uses anon key) */
export function getSupabase(): SupabaseClient {
  if (!_public) {
    _public = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return _public;
}

/** Server / admin client (uses service role key — bypasses RLS) */
export function getSupabaseAdmin(): SupabaseClient {
  if (!_admin) {
    _admin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _admin;
}

// Named aliases used in existing code – resolved lazily via getters
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_t, prop) {
    const client = getSupabaseAdmin();
    const val = (client as unknown as Record<string | symbol, unknown>)[prop];
    return typeof val === "function" ? val.bind(client) : val;
  },
});

// ─── Shared types ─────────────────────────────────────────────────────────────
export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  area_sqft: number | null;
  year_completed: number | null;
  description: string;
  cover_image: string;
  cover_image_public_id: string;
  gallery: GalleryImage[];
  tags: string[];
  is_featured: boolean;
  archived: boolean;
  created_at: string;
  updated_at: string;
};

export type GalleryImage = {
  url: string;
  public_id: string;
  caption?: string;
};

export type Client = {
  id: string;
  name: string;
  logo_url: string;
  logo_public_id: string;
  website_url?: string;
  is_featured: boolean;
  sort_order: number;
  archived: boolean;
  created_at: string;
};

export type Video = {
  id: string;
  title: string;
  description?: string;
  video_url: string;
  video_public_id: string;
  thumbnail_url?: string;
  thumbnail_public_id?: string;
  project_id?: string;
  duration_seconds?: number;
  is_featured: boolean;
  archived: boolean;
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_title?: string;
  company?: string;
  content: string;
  rating: number;
  avatar_url?: string;
  avatar_public_id?: string;
  project_id?: string;
  is_featured: boolean;
  archived: boolean;
  created_at: string;
};

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service_interest?: string;
  message: string;
  status: "new" | "contacted" | "in_progress" | "closed";
  notes?: string;
  created_at: string;
  updated_at: string;
};

export type AdminStat = {
  projects: number;
  clients: number;
  videos: number;
  testimonials: number;
  inquiries_new: number;
};
