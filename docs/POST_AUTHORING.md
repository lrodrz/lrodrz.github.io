# Writing Posts

Posts remain ordinary Markdown files in `_posts/`. A generator creates the filename and standard front matter used by the Hux-inspired theme.

Posts no longer carry a per-post `<style>` block: paragraph indentation and `.container` image centering live in `assets/css/style.scss`, and math is enabled purely by the `use_math: true` flag (loaded via `_includes/head.html`).

## Create a Post (interactive)

The quickest path is the interactive launcher. It needs nothing but `bash` — no Conda or Ruby — and can be run from anywhere in the repo:

```bash
./scripts/new-post.sh
```

It walks you through every field with prompts and a numbered category menu:

```
Choose a category:
  1. Artificial Intelligence
  2. Molecular Dynamics
  3. Biophysics
  4. Genetic Engineering
  5. Chemistry
  6. Updates
```

Picking a category pre-fills a sensible default tag. You are then asked for tags, an optional subtitle/description, the hero image and its alt text, and three yes/no toggles: **math (MathJax)**, **table of contents**, and **comments**. The script derives the slug and date, writes `_posts/YYYY-MM-DD-a-clear-post-title.markdown`, and refuses to overwrite an existing file.

## Create a Post (flag-based)

If you prefer a non-interactive command — handy for scripting — the original Ruby generator is still available with the `blog` Conda environment active:

```bash
ruby scripts/new_post.rb "A clear post title" \
  --subtitle "Optional supporting line" \
  --description "A concise summary for the homepage, search, and social previews." \
  --category research \
  --tags molecular-dynamics,crispr \
  --math
```

The command creates `_posts/YYYY-MM-DD-a-clear-post-title.markdown`. It never overwrites an existing post.

Useful options:

- `--date YYYY-MM-DD`: publish under a specific date.
- `--hero /assets/images/posts/my-image.webp`: replace the default post placeholder.
- `--math`: load MathJax for the post.
- `--no-toc`: disable the table of contents for a short post.
- `--no-comments`: disable Utterances on that post.

Run `ruby scripts/new_post.rb --help` for the complete list.

## Front Matter Contract

```yaml
---
layout: post
title: "A clear post title"
subtitle: "Optional supporting line"
description: "Homepage, search, and social summary."
date: 2026-06-22
author: Larry Rodriguez
categories:
  - research
tags:
  - molecular-dynamics
hero_image: /assets/images/placeholders/post-hero.svg
image_alt: Post hero image placeholder
image_credit:
image_credit_url:
use_math: true
toc: true
comments: true
---
```

Use `hero_image`, `image_alt`, and optional credit fields described in [the image checklist](IMAGE_CHECKLIST.md).

## Preview and Publish

```bash
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000`, read the post at its generated URL, and check the mobile layout before committing it. Publishing still happens through the repository's normal GitHub Pages branch workflow.
