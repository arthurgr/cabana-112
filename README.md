# Cabana 112 — Abaco SEO Companion Site

Astro-based static site designed to drive organic search traffic to the official
Cabana 112 listing at The Abaco Club: https://theabacoclub.com/rentals/cabana-112/

## Structure

```
src/
  layouts/
    Base.astro          — Site shell (header, footer, SEO meta, structured data)
    BlogPost.astro      — Blog post layout with schema markup + listing CTA
  pages/
    index.astro         — Homepage (targets "Abaco cabana rental" keywords)
    local-area/
      index.astro       — Area guide (targets "Abaco travel" keywords)
    blog/
      index.astro       — Blog index
      bathroom-renovation.md    — Post 1
      winding-bay-beach.md      — Post 2
```

## Getting started

```bash
npm install
npm run dev       # localhost:4321
npm run build     # output to dist/
```

## Deployment

This is a static site — deploy to Netlify, Vercel, Cloudflare Pages, or any CDN.

**Netlify:**
1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`

**Domain:** Point your domain DNS to the host. Update `site` in `astro.config.mjs`
to match your actual domain before building.

## SEO strategy

### How this helps the main listing rank

Google looks at inbound links as signals of relevance. This site:
- Links to the listing from every page (header CTA, footer, blog post body)
- Uses descriptive anchor text ("Cabana 112 at The Abaco Club on Winding Bay")
- Targets keyword clusters the main site doesn't cover
- Adds structured data (LodgingBusiness schema) pointing back to the listing URL

### Target keyword clusters by page

| Page | Primary targets |
|------|----------------|
| Homepage | "abaco club cabana rental", "cabana 112 abaco", "private cabana bahamas winding bay" |
| /local-area/ | "visiting abaco bahamas", "marsh harbour travel guide", "winding bay abaco" |
| /blog/bathroom-renovation | "abaco club cabana", "cabana 112 renovation", long-tail bathroom/property searches |
| /blog/winding-bay-beach | "winding bay abaco beach", "abaco beach bahamas", "best beach abaco" |

### Adding more blog posts (recommended)

Each new post = a new keyword cluster + another internal link to the listing.
Good ideas for future posts:

- "What to pack for a week at The Abaco Club"
- "Golf at The Abaco Club: what to expect as a guest"
- "Best time of year to visit Abaco, Bahamas"
- "Flipper's Beach Bar: the unofficial review"
- "Flying to Marsh Harbour: airport guide for first-timers"

Add each as a `.md` file in `src/pages/blog/` with the same frontmatter structure.

### Off-site actions that also help

1. **Google Search Console** — verify both this site AND submit the listing URL for inspection
2. **Google Business Profile** — if you can create a profile for the cabana as a vacation rental
3. **TripAdvisor / Airbnb listing** — even an unclaimed/linking profile signals existence to Google
4. **Social media** — share blog posts from an account that links back to the site

## Customization

- Update the `site` URL in `astro.config.mjs` with your actual domain
- Replace `/public/og-cabana.jpg` with a real photo for social sharing cards
- Update `author` in blog post frontmatter to your name if desired
- All booking links point to the official Abaco Club listing URL — do not change these
