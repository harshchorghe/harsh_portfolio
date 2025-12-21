# Vercel Deploy Checklist (portfolio)

This file lists recommended steps and quick fixes to prepare this `portfolio` Next.js app for a smooth Vercel deployment.

## ✅ Build & CI
- [x] Confirm `npm run build` succeeds locally (already ✅).
- [x] Ensure `@formspree/react` is added to `dependencies` in `package.json` (already done).
- [ ] Add `npm run lint` to CI and fix any warnings before push.

## ⚙️ Project settings (Vercel)
- Set **Root Directory** to: `portfolio` (important for monorepo).
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Install Command: `npm install` (this project contains a project-level `.npmrc` to set `legacy-peer-deps=true` to avoid known peer-dependency failures during install)
- Output Directory: leave default (.next) / use Vercel defaults
- Node Version: use Node 18+ (match local environment)

> Tip: When importing the repo to Vercel, set the "Root Directory" to `portfolio` so Vercel runs install/build on the correct package.

## 🔧 Next.js / Repo-specific notes
- Next gave a workspace warning about multiple lockfiles. To silence:
  - Option A (recommended): When importing to Vercel, *set the project root to `portfolio`* in the project settings.
  - Option B: Add `turbopack.root` to `next.config.ts` if you'd prefer a config-based fix. Example:

```ts
// next.config.ts
import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    // set to repo root or appropriate folder if you want to override detection
    root: path.resolve(__dirname, '..'),
  },
};

export default nextConfig;
```

(Only use Option B if you understand the local/monorepo layout — Option A is simpler.)

## 🔒 Environment & Secrets
- This app uses Formspree (forms are public endpoints) — no required server env vars for current forms.
- If you later add APIs or secrets, set them in Vercel dashboard Settings → Environment Variables (do not commit `.env` to repo).

## 📋 Misc checks before deploy
- [ ] Run manual Visual QA and responsive checks on multiple breakpoints (mobile, tablet, desktop).
- [ ] Verify form success UX (modal auto-close), and server-side field error handling (tested via API already).
- [ ] Confirm there are no remaining build warnings and ESLint output is clean.
- [ ] Add or update `robots.txt` and `sitemap.xml` if SEO needs to be configured.

## 📦 Optional / Future
- Add `vercel.json` only if you need custom redirects, headers, or edge functions configured via Vercel config file.
- Enable Preview Deploys for PRs (recommended for QA) in Vercel project settings.

---

If you'd like, I can:
- (A) Set the `turbopack.root` entry in `next.config.ts` for you (low-risk), or
- (B) Create a short PR-style change to add `npm run lint` to CI / GitHub Actions, or
- (C) Begin manual Visual QA and report issues I find.

Tell me which action you want next.