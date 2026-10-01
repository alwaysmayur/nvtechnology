# NV Technology — Website

**Build. Innovate. Grow.** Marketing site for a software development and technical training company.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui (Radix), Framer Motion, next-themes, react-hook-form, zod and Resend.

## Getting started

Requirements: Node.js 18.18+ (20 or 22 recommended).

```bash
npm install
cp .env.example .env.local   # then fill in values (optional for local dev)
npm run dev                  # http://localhost:3000
```

Other scripts:

| Command             | What it does                        |
| ------------------- | ----------------------------------- |
| `npm run build`     | Production build (lint + typecheck) |
| `npm start`         | Serve the production build          |
| `npm run lint`      | ESLint                              |
| `npm run typecheck` | TypeScript only                     |

## Environment variables

| Variable               | Required | Description                                                                 |
| ---------------------- | -------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Prod     | Canonical URL, used for metadata, Open Graph, sitemap and robots.            |
| `RESEND_API_KEY`       | No       | If empty, contact submissions are logged to the server console instead of emailed. |
| `CONTACT_TO_EMAIL`     | No       | Inbox that receives enquiries (defaults to `siteConfig.email`).             |
| `CONTACT_FROM_EMAIL`   | No       | Sender on a domain verified in Resend.                                       |

## Project structure

```
app/
  (site)/page.tsx          Home: all landing sections
  internships/page.tsx     Internships route
  training/page.tsx        Training route
  contact/page.tsx         Contact route (supports ?interest=Service|Internship|Training)
  actions/contact.ts       Server Actions: contact form and newsletter (zod validated)
  layout.tsx               Fonts, metadata, JSON-LD, navbar and footer
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg, not-found.tsx
  globals.css              Tailwind v4 design tokens (colours, radius, shadows, animations)
components/
  ui/                      shadcn/ui primitives
  layout/                  Container, Section, SectionHeading, Navbar, Footer, ...
  sections/                Page sections (hero, services, projects, testimonials, ...)
  motion/reveal.tsx        Scroll-reveal wrapper
lib/
  data.ts                  ALL site content as typed arrays
  validations.ts           zod schemas
  utils.ts
public/projects/           Portfolio placeholder images (SVG)
```

## Editing content

All copy lives in `lib/data.ts`. Contact details (address, phone, email, map, social URLs) are **placeholders** and are marked `PLACEHOLDER` there. Replace them before launch. Portfolio images live in `public/projects/`; swap in real screenshots (PNG/JPG/WebP get optimised automatically by `next/image`).

## Deploying to Vercel

1. Push the project to a GitHub, GitLab or Bitbucket repository.
2. In Vercel, choose **Add New → Project**, then import the repository. The framework is auto-detected as Next.js, so the defaults need no changes.
3. Under **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` (e.g. `https://nvtechnology.in`) and, optionally, the Resend variables.
4. Click **Deploy**. Every push to the main branch redeploys automatically, and pull requests get preview URLs.
5. To use a custom domain, open **Settings → Domains**, add it and follow the DNS instructions. Then update `NEXT_PUBLIC_SITE_URL` and redeploy.

To send real email: create a Resend account, verify your domain, create an API key, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL`, then redeploy.

CLI alternative: `npm i -g vercel && vercel` (preview), then `vercel --prod`.
