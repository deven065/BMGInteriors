# BMG Interiors — Official Website

> A modern, full-stack interior design studio website with a complete content management system, built for BMG Interiors — Architects, Designers & Contractors.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Supabase Setup](#supabase-setup)
- [Cloudinary Setup](#cloudinary-setup)
- [Admin Panel](#admin-panel)
- [Deployment](#deployment)
- [Scripts](#scripts)

---

## Overview

BMG Interiors is a professional website for an interior design firm with 35+ years of experience. It showcases the company's projects, services, client portfolio, and team — alongside a fully functional **private admin panel** where the client can independently manage all content (images, videos, projects, testimonials, and inquiries) without any technical knowledge.

**Live site:** `/` &nbsp;|&nbsp; **Admin panel:** `/admin`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS |
| Database | [Supabase](https://supabase.com) (PostgreSQL) |
| Media Storage | [Cloudinary](https://cloudinary.com) (images + videos, 25 GB free) |
| Auth | JWT via [`jose`](https://github.com/panva/jose) — cookie-based, 7-day session |
| File Uploads | [`react-dropzone`](https://react-dropzone.js.org) |
| Fonts | Playfair Display (headings) · Inter (body) |
| Hosting | [Vercel](https://vercel.com) |

---

## Features

### Public Website
- **Homepage** — Hero section, stats strip, about, services, featured projects, 35-year banner, client marquee, CTA
- **Projects** — Portfolio grid with category filtering
- **Services** — Detailed service cards
- **About** — Company story, team
- **Contact** — Form that saves directly to the database
- **Floating Widgets** — Helpline slide-in card, WhatsApp pulse button, Free Consult tab
- **Responsive** — Mobile-first, fully responsive layout
- **Performance** — Cloudinary auto-format/quality, Next.js Image optimization

### Admin Panel (`/admin` — password protected)
- 🔐 **Secure login** — JWT cookie auth, auto-expires after 7 days
- 📊 **Dashboard** — Live stats: projects, clients, videos, testimonials, new inquiries
- 🏗 **Projects CRUD** — Add/edit/delete with cover image + multi-image gallery + captions
- 🤝 **Clients** — Logo upload, featured toggle, sort order
- 🎬 **Videos** — Upload MP4/MOV up to 150 MB, featured toggle
- ⭐ **Testimonials** — Star ratings, feature on homepage
- 📩 **Inquiries** — Status pipeline (New → Contacted → In Progress → Closed), internal notes, one-click email reply
- ⚙ **Settings** — Password change guidance + embedded SQL schema

---

## Project Structure

```
bmg-interiors/
├── app/
│   ├── page.tsx                   # Homepage
│   ├── layout.tsx                 # Root layout (fonts, metadata)
│   ├── globals.css                # CSS variables, brand colours, component styles
│   ├── about/                     # About page
│   ├── services/                  # Services page
│   ├── projects/                  # Projects page
│   ├── contact/                   # Contact page
│   ├── admin/                     # Admin panel (JWT-protected)
│   │   ├── layout.tsx             # Sidebar navigation
│   │   ├── page.tsx               # Dashboard
│   │   ├── login/                 # Login page
│   │   ├── projects/              # Projects list + new + [id] edit
│   │   ├── clients/               # Clients management
│   │   ├── videos/                # Video management
│   │   ├── testimonials/          # Testimonials management
│   │   ├── inquiries/             # Inquiry inbox
│   │   └── settings/              # Settings + SQL schema
│   ├── api/
│   │   ├── contact/               # POST — public inquiry form
│   │   └── admin/
│   │       ├── auth/              # POST login / DELETE logout
│   │       ├── upload/            # POST — Cloudinary upload
│   │       ├── delete-media/      # DELETE — Cloudinary delete
│   │       ├── stats/             # GET — dashboard counts
│   │       ├── projects/          # CRUD
│   │       ├── clients/           # CRUD
│   │       ├── videos/            # CRUD
│   │       ├── testimonials/      # CRUD
│   │       ├── inquiries/         # GET + PATCH
│   │       └── settings/          # PUT password
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── FloatingWidgets.tsx
│       └── admin/
│           ├── ProjectForm.tsx    # Shared new/edit form
│           ├── GalleryManager.tsx # Multi-image drag & drop
│           ├── ImageUpload.tsx    # Single image with progress bar
│           ├── VideoUpload.tsx    # Video with progress bar
│           ├── DeleteButton.tsx   # Confirm-before-delete modal
│           ├── SearchInput.tsx    # Search box
│           └── Pagination.tsx     # Page controls
├── lib/
│   ├── supabase.ts                # Lazy Supabase clients + shared types
│   ├── cloudinary.ts              # Upload/delete/thumbnail helpers
│   └── utils.ts                   # JWT, slugify, date formatters
├── middleware.ts                   # Admin route protection
├── next.config.ts                 # Cloudinary domain + 150 MB upload limit
└── .env.local                     # Environment variables (not committed)
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) account (free tier works)
- A [Cloudinary](https://cloudinary.com) account (free tier: 25 GB)

### 1. Clone the repository

```bash
git clone https://github.com/deven065/BMGInteriors.git
cd BMGInteriors
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Open `.env.local` and fill in your Supabase, Cloudinary, and admin credentials.

### 4. Set up the database

Run the SQL schema in your Supabase project — see [Supabase Setup](#supabase-setup) below.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.  
Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Environment Variables

Update `.env.local` in the project root:

```env
# ── Supabase ──────────────────────────────────────────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# ── Cloudinary ────────────────────────────────────────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# ── Admin Auth ────────────────────────────────────────────────────────────────
ADMIN_PASSWORD=your_strong_password_here
JWT_SECRET=a_random_string_of_at_least_32_characters

# ── Site ──────────────────────────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

> ⚠ **Never commit `.env.local` to Git.** It is already listed in `.gitignore`.

---

## Supabase Setup

1. Go to [supabase.com](https://supabase.com) → **New Project**
2. Copy your **Project URL**, **Anon Key**, and **Service Role Key** from **Settings → API**
3. Go to **SQL Editor** and run the following schema (also available inside the app at `/admin/settings`):

```sql
create extension if not exists "pgcrypto";

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  location text default '',
  area_sqft numeric,
  year_completed int,
  description text default '',
  cover_image text default '',
  cover_image_public_id text default '',
  gallery jsonb default '[]',
  tags text[] default '{}',
  is_featured boolean default false,
  archived boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text default '',
  logo_public_id text default '',
  website_url text,
  is_featured boolean default false,
  sort_order int default 0,
  archived boolean default false,
  created_at timestamptz default now()
);

create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  video_url text not null,
  video_public_id text not null,
  thumbnail_url text,
  thumbnail_public_id text,
  project_id uuid references projects(id) on delete set null,
  duration_seconds int,
  is_featured boolean default false,
  archived boolean default false,
  created_at timestamptz default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_title text,
  company text,
  content text not null,
  rating int default 5 check (rating between 1 and 5),
  avatar_url text,
  avatar_public_id text,
  project_id uuid references projects(id) on delete set null,
  is_featured boolean default false,
  archived boolean default false,
  created_at timestamptz default now()
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service_interest text,
  message text not null,
  status text default 'new' check (status in ('new','contacted','in_progress','closed')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

---

## Cloudinary Setup

1. Sign up at [cloudinary.com](https://cloudinary.com) (free tier: 25 GB storage)
2. Open your **Dashboard** → copy **Cloud name**, **API Key**, and **API Secret**
3. Paste the values into `.env.local`

All uploaded media is automatically:
- Converted to the best format (WebP for images)
- Quality-optimised at upload time
- Organised in folders under `bmg-interiors/`

---

## Admin Panel

Access: `yourdomain.com/admin`  
Password: value of `ADMIN_PASSWORD` in your environment variables.

| Page | URL | What you can do |
|---|---|---|
| Dashboard | `/admin` | Live counts of all content |
| Projects | `/admin/projects` | Add / edit / delete with full gallery |
| Clients | `/admin/clients` | Upload logos, mark as featured |
| Videos | `/admin/videos` | Upload walkthrough videos (up to 150 MB) |
| Testimonials | `/admin/testimonials` | Add reviews with star ratings |
| Inquiries | `/admin/inquiries` | Manage leads, update status, add notes, reply by email |
| Settings | `/admin/settings` | SQL schema reference, password guidance |

> **Soft deletes** — nothing is permanently erased. Items are archived and can be restored directly in Supabase if needed.

---

## Deployment

### Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) → **Add New Project** → import `BMGInteriors`
2. Add all environment variables under **Settings → Environment Variables**
3. Click **Deploy**

Vercel auto-deploys on every `git push` to `main`.

### Custom domain

In Vercel: **Settings → Domains** → add your domain and follow the DNS instructions.

---

## Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Brand Tokens

| Token | Value |
|---|---|
| Primary Gold | `#FFCC00` |
| Dark Gold | `#CC9900` |
| Light Gold | `#FFE066` |
| Background | `#0f0e0c` |
| Surface | `#1a1812` |
| Heading Font | Playfair Display |
| Body Font | Inter |

---

## License

Private project — all rights reserved © BMG Interiors 2026.
