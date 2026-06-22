# Larry's Blog Image Checklist

The theme always renders a local placeholder when an image is missing. Replace the
setting (front matter or `_config.yml`) with a final image when it is ready.

## Hosting convention — do NOT store photos in this repo

Photographic images (mastheads, profile, in-page photos) are **not committed here**.
They live in the separate [`lrodrz/blog_images`](https://github.com/lrodrz/blog_images)
repo and are referenced by **raw** URL:

```
https://raw.githubusercontent.com/lrodrz/blog_images/main/<folder>/<file>
```

- Upload the image to `lrodrz/blog_images`, then point the setting at its `raw.githubusercontent.com` URL.
- Do **not** use the `github.com/.../blob/<file>?raw=true` form — it is an HTML
  redirect that GitHub rate-limits. Convert it to the `raw.githubusercontent.com` form above.
- Only **placeholders/fallbacks** (the SVGs in `assets/images/placeholders/`) stay local in this repo.
- Filenames with spaces must be URL-encoded (` ` → `%20`).

| Role | Current source | Target size | Replacement setting |
|---|---|---:|---|
| Home masthead | `raw.githubusercontent.com/lrodrz/blog_images/main/june2026/IMG_0946.jpg` | 1920 x 1080 | `home_hero_image` in `_config.yml` |
| Default site masthead | `assets/images/placeholders/global-hero.svg` (local) | 1600 x 900 | `default_hero_image` in `_config.yml` |
| About/profile portrait | `raw.githubusercontent.com/lrodrz/blog_images/main/june2026/IMG_0057%20-%20Copy.JPG` | 1200 x 1200 | `profile_image` in `_config.yml` |
| About page masthead | `raw.githubusercontent.com/lrodrz/blog_images/main/june2026/bwIMG-2148.jpg` | 2000 x 875 | `hero_image` in `about.markdown` |
| Archive masthead | `assets/images/june-2026/archive-hero.webp` (local) | 2000 x 875 | `hero_image` in `archive.markdown` |
| Research masthead | `raw.githubusercontent.com/lrodrz/blog_images/main/june2026/IMG_8284.JPG` | 2000 x 875 | `hero_image` in `research.markdown` |
| Molecular Dynamics masthead | `assets/images/placeholders/page-hero.svg` (local) | 1600 x 700 | `hero_image` in `moleculardynamics.markdown` |
| Artificial Intelligence masthead | `assets/images/placeholders/page-hero.svg` (local) | 1600 x 700 | `hero_image` in `artificialintelligence.markdown` |
| Genetic Engineering masthead | `assets/images/placeholders/page-hero.svg` (local) | 1600 x 700 | `hero_image` in `geneticengineering.markdown` |
| Default post masthead | `assets/images/placeholders/post-hero.svg` (local) | 1600 x 900 | `hero_image` in a post's front matter |
| Social sharing card | `assets/images/placeholders/social-card.svg` (local) | 1200 x 630 | `social_image` in `_config.yml` or a post |

> Note: external (full-resolution) mastheads have no responsive `*_small` derivative,
> so `home_hero_image_small` is intentionally left unset and a single `src` is served.

## Front Matter

```yaml
hero_image: https://raw.githubusercontent.com/lrodrz/blog_images/main/<folder>/<file>.jpg
image_alt: "Describe the meaningful content of the photograph"
image_credit: "Photograph by Larry Rodriguez"
image_credit_url: "https://example.com/optional-source"
```

Keep the subject near the center because mastheads crop at different screen sizes.
Upload compressed AVIF/WebP/JPEG to `lrodrz/blog_images` for final photography.
