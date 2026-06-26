#!/usr/bin/env bash
#
# Interactive new-post scaffolder for lrodrz.github.io
# Usage:  ./scripts/new-post.sh        (run from anywhere in the repo)
#
# Walks you through title, category, tags, math, hero image, etc. and writes a
# ready-to-edit Markdown file into _posts/. No per-post <style> block is emitted:
# paragraph indent + .container centering live in assets/css/style.scss, and math
# is enabled with the `use_math` flag (loads MathJax via _includes/head.html).

set -euo pipefail

# --- locate repo root (this script lives in <root>/scripts) ---------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
POSTS_DIR="$ROOT/_posts"

# --- category menu --------------------------------------------------------
# Display name | default tag
CATEGORIES=(
  "Artificial Intelligence|artificial-intelligence"
  "Molecular Dynamics|molecular-dynamics"
  "Biophysics|biophysics"
  "Genetic Engineering|genetic-engineering"
  "Chemistry|chemistry"
  "Updates|site-updates"
)

bold() { printf '\033[1m%s\033[0m' "$1"; }
ask()  { # ask "Prompt" "default" -> echoes answer
  local prompt="$1" default="${2:-}" reply
  if [[ -n "$default" ]]; then
    read -r -p "$prompt [$default]: " reply
    echo "${reply:-$default}"
  else
    read -r -p "$prompt: " reply
    echo "$reply"
  fi
}
yesno() { # yesno "Prompt" "Y|N" -> returns 0 for yes
  local prompt="$1" default="${2:-Y}" reply
  read -r -p "$prompt ($([[ $default == Y ]] && echo 'Y/n' || echo 'y/N')): " reply
  reply="${reply:-$default}"
  [[ "$reply" =~ ^[Yy] ]]
}

echo
echo "$(bold 'New post for lrodrz.github.io')"
echo "--------------------------------------"

# --- title (required) -----------------------------------------------------
TITLE=""
while [[ -z "$TITLE" ]]; do
  TITLE="$(ask 'Post title')"
  [[ -z "$TITLE" ]] && echo "  A title is required."
done

# --- category -------------------------------------------------------------
echo
echo "Choose a category:"
for i in "${!CATEGORIES[@]}"; do
  printf "  %d. %s\n" "$((i + 1))" "${CATEGORIES[$i]%%|*}"
done
CAT_CHOICE="$(ask 'Category number' '1')"
if ! [[ "$CAT_CHOICE" =~ ^[0-9]+$ ]] || (( CAT_CHOICE < 1 || CAT_CHOICE > ${#CATEGORIES[@]} )); then
  echo "  Invalid choice; defaulting to 1."
  CAT_CHOICE=1
fi
CATEGORY="${CATEGORIES[$((CAT_CHOICE - 1))]%%|*}"
DEFAULT_TAG="${CATEGORIES[$((CAT_CHOICE - 1))]##*|}"

# --- tags -----------------------------------------------------------------
echo
TAGS_RAW="$(ask 'Tags (comma-separated)' "$DEFAULT_TAG")"

# --- optional metadata ----------------------------------------------------
echo
SUBTITLE="$(ask 'Subtitle (optional)')"
DESCRIPTION="$(ask 'Description for homepage/social (optional)')"

echo
HERO="$(ask 'Hero image path or URL' '/assets/images/placeholders/post-hero.svg')"
IMAGE_ALT="$(ask 'Hero image alt text' "$TITLE")"

echo
USE_MATH=false; yesno 'Enable math (MathJax)?' 'N' && USE_MATH=true
TOC=true;        yesno 'Show table of contents?' 'Y' || TOC=false
COMMENTS=true;   yesno 'Enable comments?' 'Y'        || COMMENTS=false

# --- derive slug / filename ----------------------------------------------
slug="$(echo "$TITLE" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')"
if [[ -z "$slug" ]]; then
  echo "Error: title must contain at least one letter or number." >&2
  exit 1
fi

DATE_HUMAN="$(date +%Y-%m-%d)"
DATE_FULL="$(date +'%Y-%m-%d %H:%M:%S %z')"
FILENAME="${DATE_HUMAN}-${slug}.markdown"
TARGET="$POSTS_DIR/$FILENAME"

if [[ -e "$TARGET" ]]; then
  echo "Error: $TARGET already exists; nothing was written." >&2
  exit 1
fi

# --- build YAML flow list of tags ----------------------------------------
IFS=',' read -ra TAG_ARR <<< "$TAGS_RAW"
tags_yaml=""
for t in "${TAG_ARR[@]}"; do
  t="$(echo "$t" | sed -E 's/^ +//; s/ +$//')"
  [[ -z "$t" ]] && continue
  tags_yaml+="${tags_yaml:+, }$t"
done

mkdir -p "$POSTS_DIR"

# --- write front matter + starter body -----------------------------------
{
  echo "---"
  echo "layout: post"
  echo "title:  \"$TITLE\""
  [[ -n "$SUBTITLE" ]]    && echo "subtitle: \"$SUBTITLE\""
  [[ -n "$DESCRIPTION" ]] && echo "description: \"$DESCRIPTION\""
  echo "author: Larry Rodriguez"
  echo "date:   $DATE_FULL"
  echo "categories: $CATEGORY"
  echo "tags: [$tags_yaml]"
  echo "hero_image: $HERO"
  echo "image_alt: \"$IMAGE_ALT\""
  echo "#image_credit: \"Photographer Name\"        # optional"
  echo "#image_credit_url: \"https://source-link\"  # optional"
  echo "use_math: $USE_MATH"
  echo "toc: $TOC"
  echo "comments: $COMMENTS"
  echo "---"
  echo
  echo "Write the post introduction here."
  echo
  echo "## First section"
  echo
  echo "Continue writing here."
} > "$TARGET"

echo
echo "$(bold 'Created') $TARGET"
echo "Category: $CATEGORY   Math: $USE_MATH   TOC: $TOC   Comments: $COMMENTS"
echo "Preview with:  bundle exec jekyll serve --livereload"
