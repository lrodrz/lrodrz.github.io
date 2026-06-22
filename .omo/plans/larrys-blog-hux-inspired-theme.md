# larrys-blog-hux-inspired-theme - Work Plan

## TL;DR (For humans)
<!-- Fill this LAST, after the detailed plan below is written, so it summarizes the REAL plan. -->
<!-- Plain English for a non-engineer: NO file paths, NO todo numbers, NO wave/agent/tool names. -->

**What you'll get:** A dark, Hux-inspired version of Larry's Blog with a photographic masthead, post-first homepage, responsive archive and search, richer post reading tools, image placeholders, and a one-command post workflow.

**Why this approach:** It preserves Jekyll/GitHub Pages and the existing charcoal/yellow identity while recreating the useful Hux patterns with original, lightweight Liquid, SCSS, and vanilla JavaScript instead of importing its legacy stack.

**What it will NOT do:** It will not migrate frameworks, add a light mode, copy Hux source, delete existing articles, or invent final photography.

**Effort:** Large
**Risk:** Medium - shared layout and stylesheet changes affect every existing route.
**Decisions to sanity-check:** Dark-only; original Hux-inspired implementation; local labeled image placeholders; vanilla-JavaScript interactions; no new unit-test framework.

Your next move: execute the approved work. Full execution detail follows below.

---

> TL;DR (machine): Large, medium-risk Jekyll theme refactor covering shared shell, content discovery, authoring, interactions, placeholders, and real-browser QA.

## Scope
### Must have
- Preserve all existing post bodies, routes, MathJax support, and Utterances comments.
- Project-owned dark design system, responsive Hux-inspired shell, hero variants, post feed, sidebar, archive/tag filtering, search, pagination, and branded 404.
- Local labeled SVG placeholders and an explicit image replacement checklist.
- Dependency-free post generator with documented standardized front matter.
- Progressive-enhancement interactions with keyboard and reduced-motion support.
- Production Jekyll build and Chrome QA at 375, 768, and 1280 pixels.
### Must NOT have (guardrails, anti-slop, scope boundaries)
- No copied Hux templates/styles/scripts, Bootstrap, jQuery, Grunt, Less, PWA, React, or unsupported GitHub Pages plugins.
- No light theme, fake final photography, article deletion, URL changes, broken no-JavaScript content, or inaccessible custom controls.

## Verification strategy
> Zero human intervention - all verification is agent-executed.
- Test decision: none (existing repository has no test suite); agent-executed tests-after use Jekyll production builds, generated-HTML assertions, and Chromium interaction/visual QA.
- Evidence: `.omo/evidence/task-<N>-larrys-blog-hux-inspired-theme.<ext>`

## Execution strategy
### Parallel execution waves
> Target 5-8 todos per wave. Fewer than 3 (except the final) means you under-split.
- Wave 1: design system, placeholders, and shared shell foundations.
- Wave 2: homepage/discovery, post reading experience, and authoring tooling after Wave 1 contracts exist.
- Wave 3: interaction integration and cross-route content cleanup.
- Wave 4: production build, browser QA, accessibility, and performance audit.

### Dependency matrix
| Todo | Depends on | Blocks | Can parallelize with |
| --- | --- | --- | --- |
| 1 | none | 2, 3, 4, 5, 6 | none (shared contract) |
| 2 | 1 | 3, 4, 5, 6 | none (shared shell) |
| 3 | 2 | 7 | 4, 5, 6 |
| 4 | 2 | 7 | 3, 5, 6 |
| 5 | 2 | 7 | 3, 4, 6 |
| 6 | 2 | 7 | 3, 4, 5 |
| 7 | 3, 4, 5, 6 | 8 | none (integration) |
| 8 | 7 | final verification | none |

## Todos
> Implementation + Test = ONE todo. Never separate.
<!-- APPEND TASK BATCHES BELOW THIS LINE WITH edit/apply_patch - never rewrite the headers above. -->
- [x] 1. Expand the design contract and define the image placeholder system
  What to do / Must NOT do: Update `DESIGN.md` with explicit CSS tokens, typography, grid, hero/feed/sidebar/search/archive/post components, focus/motion states, and tonal depth. Add local labeled SVG placeholders for global hero, page hero, post hero, avatar, and social preview plus `docs/IMAGE_CHECKLIST.md`. Do not invent photography or use emoji/icons as text.
  Parallelization: Wave 1 | Blocked by: none | Blocks: 2, 3, 4, 5, 6
  References: `DESIGN.md`; current real images in `index.markdown`, `about.markdown`, `research.markdown`; approved draft.
  Acceptance criteria: every SCSS color/spacing/type decision planned in later todos maps to a documented token; placeholder SVGs have accessible labels and explicit view boxes; checklist names every replacement role and expected dimensions.
  QA scenarios: parse every SVG as XML and inspect at least one rendered placeholder in Chromium; verify a missing image role falls back to a local placeholder. Evidence `.omo/evidence/task-1-larrys-blog-hux-inspired-theme.md`.
  Commit: N | grouped final handoff

- [x] 2. Build the shared dark Hux-inspired shell and metadata layer
  What to do / Must NOT do: Refactor `_layouts/default.html` into semantic skip-link, scroll-aware masthead navigation, search overlay include, content landmark, and footer. Add reusable includes for nav, hero, sidebar, search, and footer. Replace Midnight import with project-owned tokenized SCSS and preserve SEO/feed/MathJax. Do not copy Hux code or add legacy libraries.
  Parallelization: Wave 1 | Blocked by: 1 | Blocks: 3, 4, 5, 6
  References: `_layouts/default.html`, `_includes/socials.html`, `_config.yml`, `assets/css/style.scss`, approved Hux visual reference.
  Acceptance criteria: all routes inherit semantic header/main/footer, unique title/canonical/description, dark-only tokens, active navigation, mobile navigation button, skip link, and no-JS-readable navigation/content.
  QA scenarios: `conda run -n blog bundle exec jekyll build`; inspect generated home/about/post landmarks and metadata; Chromium keyboard tab order and 375px nav open/close. Evidence `.omo/evidence/task-2-larrys-blog-hux-inspired-theme.md`.
  Commit: N | grouped final handoff

- [x] 3. Replace the homepage with a paginated post feed and responsive author/topics sidebar
  What to do / Must NOT do: Configure supported `jekyll-paginate`; redesign `index.markdown`/home layout around a hero, post excerpts with subtitle/category/date/read-time metadata, pagination, compact About/sidebar, featured topics, and real Fox Theater imagery where suitable. Do not retain inline page CSS or duplicate long About copy.
  Parallelization: Wave 2 | Blocked by: 2 | Blocks: 7
  References: `index.markdown`, `_layouts/home.html`, `_posts/`, `_config.yml`, `Gemfile`.
  Acceptance criteria: homepage renders all current posts through paginator with correct links/excerpts/fallbacks; sidebar moves below feed responsively; empty subtitle/tag/image cases remain composed.
  QA scenarios: build and assert generated homepage has five post links, author sidebar, pagination contract, and no inline style block; Chromium at 375/768/1280 with no overflow. Evidence `.omo/evidence/task-3-larrys-blog-hux-inspired-theme.md`.
  Commit: N | grouped final handoff

- [x] 4. Add archive/tag filtering and accessible search discovery
  What to do / Must NOT do: Create `archive.markdown`, `search.json`, archive/search includes, and vanilla JS for URL-aware tag filtering and an accessible search dialog/overlay. Content must exist server-rendered before JS and search must handle empty/malformed queries without errors.
  Parallelization: Wave 2 | Blocked by: 2 | Blocks: 7
  References: `_posts/` tags/categories, current topic pages, approved Hux archive/search patterns.
  Acceptance criteria: archive groups posts by year, shows counts, filters by tag with URL state, and restores all posts; search matches title/subtitle/tags and supports keyboard open, close, result navigation, empty, and no-result states.
  QA scenarios: Chromium click and keyboard flows for tag filter and search; disable JS and confirm archive/post links remain usable; capture console/errors. Evidence `.omo/evidence/task-4-larrys-blog-hux-inspired-theme.md`.
  Commit: N | grouped final handoff

- [x] 5. Upgrade post and page layouts for long-form scientific reading
  What to do / Must NOT do: Add optional hero/title/subtitle/tags/meta, reading progress, generated heading anchors/table of contents, copy-code controls, previous/next navigation, related tags, and preserve Utterances/MathJax. Update page layout/topic pages/404 to shared hero and content primitives without rewriting article bodies or changing URLs.
  Parallelization: Wave 2 | Blocked by: 2 | Blocks: 7
  References: `_layouts/post.html`, `_layouts/page.html`, `_posts/`, topic markdown files, `404.html`.
  Acceptance criteria: all existing posts build; posts with and without math/tags/hero/TOC work; progress reaches 100%; code-copy gives visible status; previous/next links are correct; comments remain dark.
  QA scenarios: Chromium long-post scroll, TOC link, code-copy, previous/next, MathJax render, comments container, and 404 route; no-JS body remains readable. Evidence `.omo/evidence/task-5-larrys-blog-hux-inspired-theme.md`.
  Commit: N | grouped final handoff

- [x] 6. Add the dependency-free post generator and authoring documentation
  What to do / Must NOT do: Add a standard-library Ruby post generator, a documented post template/front-matter contract, safe slug/date/category/tag handling, collision refusal, placeholder defaults, and README workflow. Do not add Rake or silently overwrite files.
  Parallelization: Wave 2 | Blocked by: 2 | Blocks: 7
  References: current `_posts/` front matter, `README.md`, `_config.yml`, Hux manual post workflow.
  Acceptance criteria: one command creates a correctly named Markdown post with standardized front matter; invalid date/title and filename collision exit nonzero without writes; generated post builds under Jekyll.
  QA scenarios: run generator in a temporary copy for valid, malformed-date, empty-title, and collision cases; build the generated sample then clean it. Evidence `.omo/evidence/task-6-larrys-blog-hux-inspired-theme.md`.
  Commit: N | grouped final handoff

- [x] 7. Integrate progressive-enhancement interactions and normalize content metadata
  What to do / Must NOT do: Consolidate mobile nav, scroll-aware header, search, archive filtering, reading progress, TOC, code-copy, and subtle reveal behavior into small deferred vanilla JS. Normalize existing page/post metadata only where necessary for the new contracts. Respect reduced motion and avoid layout-property animation.
  Parallelization: Wave 3 | Blocked by: 3, 4, 5, 6 | Blocks: 8
  References: all new includes/layouts/assets plus existing `_posts/` and topic pages.
  Acceptance criteria: one deferred script initializes only features present on a route; no console errors across home/archive/about/post/404; keyboard focus is managed; reduced-motion disables nonessential transforms; existing URLs remain unchanged.
  QA scenarios: Chromium route matrix at normal/reduced motion, keyboard-only mobile nav/search/archive/TOC/code-copy, malformed search JSON simulation handled visibly. Evidence `.omo/evidence/task-7-larrys-blog-hux-inspired-theme.md`.
  Commit: N | grouped final handoff

- [x] 8. Run production, responsive, accessibility, visual, and performance verification
  What to do / Must NOT do: Build production output, assert generated contracts, run real Chrome visual QA at 375/768/1280 on home/archive/about/post/404, verify interaction/error/empty states, and run mobile/desktop Lighthouse through a real Playwright-controlled Chrome. Fix root causes without weakening UX.
  Parallelization: Wave 4 | Blocked by: 7 | Blocks: final verification
  References: frontend perfection and visual QA skill requirements; all changed product files.
  Acceptance criteria: Jekyll build exits 0; no broken internal assets/links observed; no horizontal overflow; design tokens comply; keyboard/focus/contrast/landmarks work; no console/page errors. Target 100 in all Lighthouse categories on mobile and desktop; any environment-limited result must be explicitly reported with raw scores.
  QA scenarios: production server plus agent-browser/Playwright screenshot and interaction matrix; browser error logs; Lighthouse median over repeated runs where tooling permits. Evidence `.omo/evidence/task-8-larrys-blog-hux-inspired-theme.md`.
  Commit: N | no commit requested

## Final verification wave
> Runs in parallel after ALL todos. ALL must APPROVE. Surface results and wait for the user's explicit okay before declaring complete.
- [x] F1. Plan compliance audit
- [x] F2. Code quality review
- [x] F3. Real manual QA
- [x] F4. Scope fidelity

## Commit strategy
No commits are created unless the user asks. Preserve the work as reviewable changes on `refactor_theme`.

## Success criteria
- The site visibly reads as Larry's dark Hux-inspired blog rather than the Midnight theme.
- Existing posts/pages/URLs/MathJax/Utterances remain functional.
- Missing images render labeled local placeholders and are listed for later replacement.
- New posts are generated and published through a documented one-command workflow.
- Search, archive filtering, mobile navigation, reading aids, and code-copy work with keyboard and degrade safely without JavaScript.
- Production build and real-browser responsive QA pass with no known blocking defects.
