# Larry's Blog Image Checklist

The theme always renders a local placeholder when an image is missing. Replace the files or set the matching front-matter/config value when final images are ready.

| Role | Current source | Target size | Replacement setting |
|---|---|---:|---|
| Home masthead | `assets/images/june-2026/home-hero.webp` plus 1024px responsive derivative | 1920 x 1080 | `home_hero_image` and `home_hero_image_small` in `_config.yml` |
| Default site masthead | `assets/images/placeholders/global-hero.svg` | 1600 x 900 | `default_hero_image` in `_config.yml` |
| About/profile portrait | `assets/images/june-2026/larry-profile.webp` | 1200 x 1200 | `profile_image` in `_config.yml` |
| About page masthead | `assets/images/june-2026/about-hero.webp` | 2000 x 875 | `hero_image` in `about.markdown` |
| Archive masthead | `assets/images/june-2026/archive-hero.webp` | 2000 x 875 | `hero_image` in `archive.markdown` |
| Research masthead | `assets/images/june-2026/research-hero.webp` | 2000 x 875 | `hero_image` in `research.markdown` |
| Molecular Dynamics masthead | `assets/images/placeholders/page-hero.svg` | 1600 x 700 | `hero_image` in `moleculardynamics.markdown` |
| Artificial Intelligence masthead | `assets/images/placeholders/page-hero.svg` | 1600 x 700 | `hero_image` in `artificialintelligence.markdown` |
| Genetic Engineering masthead | `assets/images/placeholders/page-hero.svg` | 1600 x 700 | `hero_image` in `geneticengineering.markdown` |
| Default post masthead | `assets/images/placeholders/post-hero.svg` | 1600 x 900 | `hero_image` in a post's front matter |
| Social sharing card | `assets/images/placeholders/social-card.svg` | 1200 x 630 | `social_image` in `_config.yml` or a post |

## Front Matter

```yaml
hero_image: /assets/images/my-post-photo.jpg
image_alt: "Describe the meaningful content of the photograph"
image_credit: "Photograph by Larry Rodriguez"
image_credit_url: "https://example.com/optional-source"
```

Keep the subject near the center because mastheads crop at different screen sizes. Use compressed AVIF or WebP for final photography when possible, and keep original JPEG/PNG files only when needed as fallbacks.
