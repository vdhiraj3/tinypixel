# Tinyplex update

## Added
- 12 SEO landing pages for compression/resizing search intents.
- `/background-remover` with in-browser AI background removal using `@imgly/background-removal` loaded from jsDelivr.
- Background Remover link in the main navigation and homepage feature spotlight.
- Related-tool internal links across SEO pages.
- Unique title/description metadata for each SEO route.
- Shared `components/ImageOptimizer.tsx` so the same optimizer is reused on the homepage and SEO pages.
- Responsive styles for SEO pages and background removal UI.

## Important
- The background removal model is loaded in the browser on first use; first use can be slower and downloads model assets.
- Background removal outputs a transparent PNG.
- No image is uploaded to a Tinyplex server by the background-removal UI.
- Added `app/sitemap.ts` and `app/robots.ts` for crawl discovery.

## Background removal note
The current implementation uses the browser-based `@imgly/background-removal` package via a CDN. It is AGPL-licensed, so review its license obligations before using it on a monetized/closed-source production site. If you want, this can be swapped for another model/library with licensing that better matches your deployment.
