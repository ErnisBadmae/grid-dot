# SEO & AI Agent Optimization — Grid&Dot

**Stack:** Next.js 16.2 (App Router), React 18.3, Tailwind. Static export is **opt-in** via `npm run export` (`output: 'export'`); the default `npm run build` is a standard Next build. Because the SEO/AI assets must work in static export, they are all **pre-generated into `public/`** at build time and served as static files.

> **Single source of truth: `src/lib/seo-content.json`.**
> Everything below — meta tags, JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `ai-metadata.json` — is **derived** from that one file. Do not hand-edit the generated files; edit the JSON and regenerate (see [Workflow](#workflow)).

---

## How it fits together

```
src/lib/seo-content.json   ← edit this (the only source of truth)
        │
        ├─► src/lib/seo.ts           → Next Metadata API + all JSON-LD blocks (runtime)
        │        └─ src/lib/structuredData.ts  (thin re-export of getGlobalStructuredDataSchemas)
        │
        └─► scripts/sync-seo-assets.mjs → public/robots.txt, sitemap.xml,
                                          llms.txt, llms-full.txt,
                                          ai-metadata.json, api/metadata.json
             (runs automatically on `prebuild`, or `npm run sync:seo`)
```

---

## 1. SEO

### 1.1 Meta tags

All meta tags go through the Next.js Metadata API. The root metadata is built by `buildRootMetadata()` in `src/lib/seo.ts` and exported from `src/app/layout.tsx`; per-page metadata uses `buildPageMetadata()` (e.g. the privacy page). Values come from `seo-content.json`.

| Field | Value |
|---|---|
| `title` (default) | `Grid&Dot \| Extended Expertise for Digital-First Teams` |
| `title` (template) | `%s \| Grid&Dot` |
| `description` | London-based extended expertise & talent curation for digital-first teams (full text in `seo-content.json`) |
| `canonical` | `https://www.gridanddot.com/` (via `metadataBase` + `trailingSlash: true`) |
| Open Graph | `type: website`, `locale: en_GB`, `image: /og-image.jpg` (1200×630), `siteName: Grid&Dot` |
| Twitter Card | `summary_large_image` |
| `keywords` | extended expertise, talent curation, digital specialists, … (incl. the intentional misspelling `gird and dot` to catch typos) |
| `robots` | `index/follow` **only on production**; otherwise `noindex` (see 1.4) |
| `icons` | `/favicon.svg` |
| `other` | `company:legal_name`, `search-aliases` |

### 1.2 Structured data (JSON-LD)

All schemas are built in `src/lib/seo.ts` (none are hand-written in `layout.tsx`). They are connected through a shared `@id` graph (`#organization`, `#website`, …), which helps crawlers and LLMs understand the relationships.

They are rendered in three scopes:

| Scope | Rendered in | Schemas |
|---|---|---|
| **Global** (every page) | `layout.tsx` → `getGlobalStructuredDataSchemas()` | `Organization`, `WebSite`, `Service`, `EmploymentAgency` |
| **Home** | `app/page.tsx` → `getHomeStructuredDataSchemas()` | `WebPage`, `ImageObject` (hero), `FAQPage` |
| **Privacy** | `app/privacy/page.tsx` → `getPrivacyStructuredDataSchemas()` | `WebPage`, `BreadcrumbList` |

What each one carries:

| Schema | What it does |
|---|---|
| `Organization` | Name, alternate/legal name, logo, description, email, phone, founding year, `knowsAbout`, London address, `areaServed`, `contactPoint`, **`sameAs`** (LinkedIn). |
| `WebSite` | Site name, URL, publisher → Organization, language. |
| `Service` | Service catalogue (`hasOfferCatalog`) generated from `services[]` in the JSON. |
| `EmploymentAgency` | Local SEO — postal address, geo coordinates, phone/email, `areaServed`, **`sameAs`** (LinkedIn), `parentOrganization` → Organization. |
| `WebPage` | Per-page node: URL, name, description, `isPartOf` → WebSite, **`dateModified`** (= `metadata.lastUpdated`), `about`, `primaryImageOfPage`. |
| `ImageObject` | Hero / primary image of the homepage (`/og-image.jpg`). |
| `FAQPage` | 5 Q&A pairs from `faq[]` in the JSON. Strong signal for AI/agentic answers and passes the Schema.org validator. |
| `BreadcrumbList` | Privacy page hierarchy: `Home › Privacy Policy`. |

> **FAQPage caveat:** the FAQ content is not visually rendered on the page. Google's guidelines prefer FAQ markup to mirror on-page content, so a **FAQ rich result in Google search may not appear**. This is **not a penalty** (Google simply ignores it), and the markup remains valuable for AI agents / generative search and for entity understanding. Remove `faqSchema` from `getHomeStructuredDataSchemas()` if strict Google-rich-result compliance is ever required.

### 1.3 `robots.txt` & `sitemap.xml`

Both are **generated** by `scripts/sync-seo-assets.mjs` from `seo-content.json` — do not edit by hand.

- **`public/robots.txt`** (production): `Allow: /` for everyone, plus explicit allow blocks for AI crawlers (see 2.3), a `Sitemap:` line, and comment-links to the three AI files at the bottom.
- **`public/sitemap.xml`**: one `<url>` per entry in `pages[]`, with `lastmod` = `metadata.lastUpdated`, `changefreq`, and `priority`.

### 1.4 Indexing guard

`isIndexableDeployment()` returns `true` only when `VERCEL_ENV === 'production'` (or when `VERCEL_ENV` is unset, e.g. local). On preview/non-production deployments, the metadata `robots` is set to `noindex/nofollow` **and** the generated `robots.txt` becomes `Disallow: /`. This prevents preview URLs from being indexed.

---

## 2. AI Agent SEO

ChatGPT, Claude, Perplexity, and Gemini crawl sites and read both JSON-LD and meta tags. On top of that we follow the [llmstxt.org](https://llmstxt.org) convention: give agents a compact, plain-text description so they don't have to parse the full HTML.

### 2.1 The files (all generated from `seo-content.json`)

| File | Contents |
|---|---|
| `/llms.txt` | Short version — who we are, services, expertise, regions, contacts, **profiles** (LinkedIn). Markdown with headers, optimized for small LLM context windows. |
| `/llms-full.txt` | Extended version — everything above **plus notable clients and the full FAQ**. |
| `/ai-metadata.json` | Structured JSON — company (incl. `sameAs`), services, expertise, `knowsAbout`, notable clients, page list, and links to the other AI files. For programmatic / RAG consumption. |
| `/api/metadata.json` | **Legacy** richer JSON (case studies, values, differentiators, FAQ), kept for backward compatibility. Also generated. |

> The FAQ in `llms-full.txt` and the metadata files comes from `faq[]` in **`seo-content.json`** (not from any `structuredData.ts` export).

### 2.2 Discovery channels

1. **`robots.txt`** — comment-links to all AI files at the bottom (crawlers fetch `robots.txt` first).
2. **HTML `<head>`** — three `<link rel="alternate" type="...">` tags in `layout.tsx` pointing to `/llms.txt`, `/llms-full.txt`, and `/ai-metadata.json` (base-path aware). Emerging convention, already picked up by some agents.
3. **Cross-references** — each file links to the others, so finding one leads to the rest.

### 2.3 Allowed crawlers (`robots.txt`)

- **Search / user-triggered retrieval:** `OAI-SearchBot`, `ChatGPT-User`, `Claude-User`, `Perplexity-User`
- **Training / indexing / corpus:** `GPTBot`, `Google-Extended`, `anthropic-ai`, `ClaudeBot`, `CCBot` (Common Crawl), `PerplexityBot`

---

## 3. File map

| File | What's inside |
|---|---|
| `src/lib/seo-content.json` | **Single source of truth** — site, company, services, expertise, FAQ, pages, social profiles. |
| `src/lib/seo.ts` | Builds Metadata (`buildRootMetadata`, `buildPageMetadata`) and **all** JSON-LD; exports the per-scope schema getters. |
| `src/lib/structuredData.ts` | Thin re-export of `getGlobalStructuredDataSchemas` from `seo.ts`. |
| `src/app/layout.tsx` | Root metadata, global JSON-LD, `<link rel="alternate">` to AI files, CSS links. |
| `src/app/page.tsx` | Home JSON-LD (`WebPage`, hero `ImageObject`, `FAQPage`). |
| `src/app/privacy/page.tsx` | Privacy metadata + JSON-LD (`WebPage`, `BreadcrumbList`). |
| `src/lib/constants.ts` | UI copy and contact details used by components. |
| `scripts/sync-seo-assets.mjs` | Generator for every `public/` SEO & AI asset. |
| `public/robots.txt` · `sitemap.xml` · `llms.txt` · `llms-full.txt` · `ai-metadata.json` · `api/metadata.json` | **Generated — do not edit by hand.** |

---

## Workflow

To change any SEO/AI content:

1. Edit **`src/lib/seo-content.json`** only.
2. Bump `metadata.version` and `metadata.lastUpdated` in that file (the latter drives `sitemap.xml` `lastmod` and the `dateModified` of every `WebPage`).
3. Run `npm run sync:seo` to regenerate `public/` assets. This also runs automatically on `prebuild`, so `npm run build` / `npm run export` always emit fresh assets.

Never edit the generated files in `public/` directly — they will be overwritten on the next build.

---

## Monitoring / tech debt / deploy

### Post-deploy checklist

After every deployment:

- [ ] `https://www.gridanddot.com/robots.txt` — AI file links present at the bottom; production (not the `Disallow: /` preview variant).
- [ ] `https://www.gridanddot.com/sitemap.xml` — loads without errors.
- [ ] `https://www.gridanddot.com/llms.txt` — content up to date.
- [ ] `https://www.gridanddot.com/llms-full.txt` — FAQ matches `seo-content.json`.
- [ ] `https://www.gridanddot.com/ai-metadata.json` — valid JSON, `lastUpdated` current.
- [ ] View source of the homepage — three `<link rel="alternate" … >` tags in `<head>`; global + home JSON-LD blocks present (`Organization`, `WebSite`, `Service`, `EmploymentAgency`, `WebPage`, `ImageObject`, `FAQPage`).
- [ ] View source of `/privacy/` — `WebPage` + `BreadcrumbList` JSON-LD present.
- [ ] Rich Results Test — `EmploymentAgency` and (where eligible) `FAQPage` pass.
- [ ] Schema.org Validator — all schemas valid.

### Ongoing monitoring

- Check server logs for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `OAI-SearchBot` — to see who's crawling and how often.
- Once a month, ask ChatGPT / Claude / Perplexity "What is Grid&Dot?" and confirm the answer is correct.
- When content changes, bump `metadata.version` + `metadata.lastUpdated` in `seo-content.json` (not in the generated files).

### Tech debt (not this sprint)

- Contact details are duplicated between `src/lib/constants.ts` (`CONTACTS`) and `seo-content.json` (`company`). Consider a single source.
- `public/api/metadata.json` is a legacy format kept for compatibility; decide whether it can be retired.
- `FAQPage` markup has no visible on-page counterpart (see the caveat in 1.2) — if FAQ rich results in Google become a goal, render the FAQ on the page.
