# Task 8 Verification Evidence

Date: 2026-06-22

## Production and source checks

- `conda run -n blog bundle exec jekyll build`: pass.
- `node --check assets/js/site.js`: pass.
- `conda run -n blog ruby -c scripts/new_post.rb`: pass (`Syntax OK`).
- `git diff --check`: pass.
- Search JSON parses with Ruby JSON; every placeholder SVG parses with REXML.
- Home, archive, about, representative post, and custom 404 returned HTTP 200.
- No Chronos, Hux source dependencies, jQuery, Bootstrap, Grunt, or Less remain in product source.
- LSP status could not run because the configured LSP transport was closed; no supported Liquid/SCSS server was available.

## Browser QA

- Real Chromium checks at 375, 768, and 1280 pixels: no horizontal overflow.
- Mobile navigation manages focus and `aria-expanded`; search keyboard flow, result and empty states pass.
- Archive URL tag filtering passes; long-post TOC, reading progress, and copy-code feedback pass.
- Home, archive, about, post, and 404 render without browser console errors.
- Cache-cold final screenshots: `/tmp/larrys-final-home.png` and `/tmp/larrys-final-post.png`.
- Visual QA verdict: GOOD. The layout follows the editorial structure of the reference while intentionally retaining Larry's dark charcoal/yellow identity.

## Lighthouse (real Chrome Node API)

| Mode | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Mobile | 100 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Mobile: FCP 0.9 s, LCP 1.5 s, CLS 0, TBT 0 ms. Desktop: FCP 0.2 s, LCP 0.3 s, CLS 0, TBT 0 ms.

The existing Fox Theater hero was localized and optimized to WebP to remove a third-party image dependency and stabilize the mobile LCP score.
