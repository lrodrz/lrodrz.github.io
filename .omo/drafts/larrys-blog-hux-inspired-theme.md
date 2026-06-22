---
slug: larrys-blog-hux-inspired-theme
status: approved
intent: clear
pending-action: write .omo/plans/larrys-blog-hux-inspired-theme.md
approach: Build an original Hux-inspired Jekyll theme shell in the existing repository, preserving Larry's dark charcoal and warm-yellow identity while adding a photographic hero system, post-first homepage, archive/tag discovery, lightweight vanilla-JavaScript interactions, and an easy post generator.
---

# Draft: larrys-blog-hux-inspired-theme

## Components (topology ledger)

| id | outcome | status | evidence path |
|---|---|---|---|
| C1 | Responsive Hux-inspired dark shell with masthead, navigation, footer, and page/post hero variants | active | `_layouts/default.html:1`, `assets/css/style.scss:1`, `DESIGN.md:1` |
| C2 | Image contract with local labeled placeholders and a replacement checklist | active | `index.markdown:32`, `about.markdown:29`, `_config.yml:21` |
| C3 | Post-first homepage plus archive, tags, pagination, and search discovery | active | `index.markdown:61`, `_posts/`, Hux `index.html` and `archive.html` |
| C4 | Easy Markdown post creation with standardized front matter and documented preview/publish workflow | active | `_posts/`, `README.md`, Hux manual Posts section |
| C5 | Lightweight interactions: mobile navigation, search overlay, tag filtering, reading progress, post table of contents, code-copy controls, and reduced-motion fallbacks | active | `_layouts/post.html:4`, `_layouts/default.html:33` |
| C6 | Responsive, accessibility, SEO, performance, and real-browser verification | active | `_layouts/default.html:3`, `Gemfile:20` |

## Open assumptions (announced defaults)

| assumption | adopted default | rationale | reversible? |
|---|---|---|---|
| Hux code reuse | Recreate the visual language independently; do not copy Hux templates, CSS, JavaScript, Bootstrap, jQuery, Grunt, or Less | Hux itself calls its toolchain old-fashioned; original code avoids legacy weight and Apache derivative-work obligations | yes |
| Theme mode | Dark-only | Explicit user requirement; no light-mode toggle or duplicate palette | yes |
| Existing colors | Preserve charcoal/off-white/warm-yellow identity, formalized as CSS custom properties in `DESIGN.md` and SCSS | Explicit user preference and existing design contract | yes |
| Image gaps | Use local, labeled SVG placeholders with fixed aspect ratios and a `docs/IMAGE_CHECKLIST.md` replacement map | Prevents broken links and layout shift while making missing assets obvious | yes |
| Existing images | Reuse the current Fox Theater and biographical/research images where they fit; placeholders cover only missing roles | Avoids discarding authentic content | yes |
| Interactivity stack | Small progressive-enhancement vanilla-JavaScript modules; static content remains usable without JS | Fits Jekyll/GitHub Pages and avoids a framework migration | yes |
| Pagination | Use `jekyll-paginate`, already present through `github-pages`, with an explicit supported plugin/config entry | The reference uses pagination and GitHub Pages officially supports the plugin | yes |
| Authoring tool | Add a dependency-free Ruby post generator plus a documented front-matter template | Rake is not installed in the current bundle; Ruby is already required by Jekyll | yes |
| Test strategy | No new unit-test framework in this testless repository; tests-after via production Jekyll builds, generated-HTML assertions, and Playwright/Chromium flows | Matches the static site risk surface and existing repository maturity | yes |
| PWA/offline | Excluded | The reference PWA is old and the user requested visual and authoring upgrades, not offline installation | yes |

## Findings (cited - path:lines)

- Current branch is `refactor_theme`, clean at `abaea53`, and already contains the Larry's Blog rebrand.
- The current shell is one compact layout with six hard-coded navigation links and one main column: `_layouts/default.html:33-52`.
- Homepage content is mostly handwritten HTML with only a five-post Liquid loop: `index.markdown:9-70`.
- Posts already use Jekyll Markdown front matter but their metadata and inline styles vary: `_posts/`.
- Current post layout has title, date, body, and Utterances comments, but no hero metadata, taxonomy, previous/next navigation, or reading aids: `_layouts/post.html:4-20`.
- Current design contract explicitly preserves charcoal surfaces and warm-yellow interaction color: `DESIGN.md:3-20`.
- Existing bundle builds successfully with Jekyll and already contains `jekyll-paginate` 1.1.0 through `github-pages`; Rake is not installed.
- Hux's homepage is a post-excerpt feed with pagination and its layout adds a responsive sidebar; its post layout adds hero metadata, previous/next navigation, tags, and a catalog: https://raw.githubusercontent.com/Huxpro/huxpro.github.io/master/index.html and https://raw.githubusercontent.com/Huxpro/huxpro.github.io/master/_layouts/post.html
- Hux's own manual says posts are Markdown files with YAML front matter and offers a generator command; it also describes the Grunt/Less toolchain as old-fashioned: https://raw.githubusercontent.com/Huxpro/huxpro.github.io/master/_doc/Manual.md
- Hux source is Apache-2.0 with retained-attribution and modified-file obligations for redistributed derivatives: https://raw.githubusercontent.com/Huxpro/huxpro.github.io/master/LICENSE
- GitHub Pages supports Jekyll/Liquid/front matter and lists `jekyll-paginate` among supported plugins: https://docs.github.com/articles/about-github-pages-and-jekyll

## Decisions (with rationale)

- Keep Jekyll and GitHub Pages rather than migrate to React, Next.js, or another generator.
- Build an original theme inspired by the reference's composition, not a source-level fork.
- Replace the current theme import with project-owned SCSS organized around documented tokens and reusable components.
- Make the homepage primarily a paginated post feed with a compact author/topics sidebar; move welcome/background detail to About.
- Add global hero, page hero, and optional per-post hero roles with deterministic placeholder fallbacks.
- Normalize new-post front matter around `title`, `subtitle`, `description`, `date`, `author`, `categories`, `tags`, `hero_image`, `image_alt`, `image_credit`, `use_math`, `toc`, and `comments`.
- Preserve all existing post bodies and URLs; only normalize metadata where required for the new layouts.
- Make every interactive enhancement keyboard accessible, URL/state aware where appropriate, and inert when JavaScript is unavailable.

## Scope IN

- Global header/navigation/footer and responsive mobile navigation.
- Home, page, post, archive/tag, search, and 404 presentation.
- Dark Hux-inspired mastheads, post feed, author/topics sidebar, and pagination.
- Placeholder assets plus image inventory/replacement documentation.
- Search JSON and accessible search overlay.
- Archive grouped by year with client-side tag filtering.
- Post progress, generated table of contents, heading anchors, copy-code controls, previous/next links, tags, and existing Utterances comments.
- Dependency-free new-post generator and README authoring instructions.
- Updated design tokens and component documentation.
- Production build, HTML contract checks, responsive browser QA, interaction QA, accessibility checks, and Lighthouse audits.

## Scope OUT (Must NOT have)

- No React/framework migration.
- No Hux source copy, Bootstrap, jQuery, Grunt, Less, or legacy PWA/service-worker code.
- No light theme or theme toggle.
- No deletion or rewriting of existing research/article content.
- No invented final photography; missing imagery remains clearly labeled placeholder art.
- No unsupported GitHub Pages plugins or deployment-platform change.

## Open questions

- Approval required for the original Hux-inspired implementation, dark-only interaction set, image placeholder contract, and tests-after verification strategy above.

## Approval gate

status: approved by user on 2026-06-22
pending action: write `.omo/plans/larrys-blog-hux-inspired-theme.md`
