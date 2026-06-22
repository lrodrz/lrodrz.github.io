# Larry's Blog Design System

## 1. Atmosphere & Identity

Larry's Blog is a personal scientific notebook: focused, approachable, and technical without feeling institutional. Its signature is editorial scale over photographic mastheads, with a warm yellow accent cutting through quiet charcoal surfaces. The interface should feel authored and curious rather than corporate, keeping attention on writing, research imagery, and chronology.

## 2. Color

| Role | Token | Value | Usage |
|---|---|---|---|
| Surface/primary | `--surface-primary` | `#171816` | Page background |
| Surface/secondary | `--surface-secondary` | `#20211f` | Sidebar and raised sections |
| Surface/elevated | `--surface-elevated` | `#292a27` | Search overlay and mobile menu |
| Surface/scrim | `--surface-scrim` | `rgba(10, 10, 9, 0.68)` | Image readability mask |
| Surface/header | `--surface-header` | `rgba(23, 24, 22, 0.94)` | Scrolled navigation |
| Surface/backdrop | `--surface-backdrop` | `rgba(10, 10, 9, 0.78)` | Dialog backdrop |
| Surface/code | `--surface-code` | `#11120f` | Code blocks |
| Text/primary | `--text-primary` | `#f2eee5` | Headlines and body copy |
| Text/secondary | `--text-secondary` | `#c5c0b5` | Descriptions and excerpts |
| Text/tertiary | `--text-tertiary` | `#938f86` | Metadata and captions |
| Border/default | `--border-default` | `#3a3b37` | Dividers and outlines |
| Accent/primary | `--accent-primary` | `#f5c518` | Links, focus, active navigation |
| Accent/hover | `--accent-hover` | `#ffe272` | Link hover and emphasized text |
| Accent/subtle | `--accent-subtle` | `rgba(245, 197, 24, 0.14)` | Selected and hover surfaces |
| Status/error | `--status-error` | `#f18b7e` | Search and authoring errors |

Use warm yellow only for interactive emphasis, compact labels, and the reading-progress line. Photography remains natural under a consistent scrim. Add new colors here before using them.

## 3. Typography

| Level | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Display | `clamp(3rem, 9vw, 6rem)` | 700 | 0.98 | Home masthead |
| H1 | `clamp(2.25rem, 6vw, 4.5rem)` | 700 | 1.05 | Page and post hero title |
| H2 | `clamp(1.5rem, 3vw, 2rem)` | 650 | 1.2 | Content section |
| H3 | `1.25rem` | 650 | 1.3 | Post preview and article subsection |
| Body/lg | `1.125rem` | 400 | 1.75 | Article body and lead copy |
| Body | `1rem` | 400 | 1.65 | Interface and excerpts |
| Body/sm | `0.875rem` | 500 | 1.5 | Metadata and captions |
| Overline | `0.75rem` | 700 | 1.3 | Tags and section labels |

- Display font: `Georgia, "Times New Roman", serif` for selected editorial headings and excerpts.
- Primary font: `"Avenir Next", Avenir, "Segoe UI", system-ui, sans-serif`.
- Mono font: `"SFMono-Regular", Consolas, "Liberation Mono", monospace`.
- Mathematical notation: MathJax's rendered typefaces.
- Preserve the theme's readable body typography and use headings structurally.

## 4. Spacing & Layout

Spacing follows a 4px base. Existing values use quarter-rem increments where practical.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `0.25rem` | Tight inline spacing |
| `--space-2` | `0.5rem` | List and metadata spacing |
| `--space-3` | `0.75rem` | Compact controls |
| `--space-4` | `1rem` | Mobile gutters |
| `--space-5` | `1.25rem` | Comfortable control padding |
| `--space-6` | `1.5rem` | Card and article spacing |
| `--space-8` | `2rem` | Component separation |
| `--space-10` | `2.5rem` | Section separation |
| `--space-12` | `3rem` | Article breaks |
| `--space-16` | `4rem` | Page sections |
| `--space-20` | `5rem` | Hero breathing room |

- Maximum shell width: `1200px`; maximum article width: `760px`.
- Homepage uses a two-column `minmax(0, 1fr) 18rem` grid above `960px`.
- Main content uses fluid gutters: `clamp(1rem, 4vw, 3rem)`.
- Navigation collapses to an accessible overlay below `760px`.
- Images remain fluid and never exceed their content column.

## 5. Components

### Global Header

- **Structure**: skip link, linked wordmark, primary navigation, search control, mobile menu control.
- **States**: transparent over heroes, solid when scrolled, active route, hover, focus, mobile open/closed.
- **Accessibility**: semantic header and navigation with descriptive link text.

### Recent Posts List

- **Structure**: linked title, optional subtitle, excerpt, author/date/read-time metadata, and tags.
- **States**: links underline on hover.
- **Accessibility**: dates and post titles remain readable as link text.

### Social Links Bar

- **Structure**: professional profile links separated by quiet dividers.
- **States**: links underline on hover.
- **Accessibility**: the group has an accessible label and safe external-link attributes.

### Hero

- **Structure**: responsive background image or local placeholder, scrim, optional overline, title, subtitle, and metadata.
- **Variants**: home, page, post, compact.
- **States**: deterministic fallback when front matter has no image.
- **Accessibility**: decorative backgrounds are paired with readable text; credits remain text links.

### Sidebar

- **Structure**: author summary, professional links, featured topics, and archive link.
- **Responsive**: right column on desktop; flows below the feed on smaller screens.

### Search Overlay

- **Structure**: dialog, labeled search field, result count, result list, empty/no-result/error state, close control.
- **States**: closed, loading, results, empty, no results, error.
- **Accessibility**: focus moves into the dialog, Escape closes it, and focus returns to the opener.

### Archive Filter

- **Structure**: tag controls and a year-grouped list of posts.
- **States**: show all, selected tag, empty tag result; URL query mirrors selection.

### Post Reading Tools

- **Structure**: progress bar, optional table of contents, heading anchors, copy-code control, previous/next navigation.
- **States**: reading progress, current TOC item, copied/error feedback.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|---|---|---|---|
| Micro | `150ms` | ease-out | Link, focus, and copy feedback |
| Standard | `240ms` | ease-in-out | Menu, search, and reveal transitions |
| Emphasis | `420ms` | cubic-bezier(0.16, 1, 0.3, 1) | Hero and post-feed entry |

Motion is purposeful and restrained. Animate only `transform`, `opacity`, or `filter`; respect `prefers-reduced-motion`; never hide core content before JavaScript runs. New interactive elements need visible hover, pressed, and keyboard-focus states.

## 7. Depth & Surface

Tonal-shift with selective borders. Primary, secondary, and elevated charcoal surfaces establish hierarchy; fine borders separate post previews and controls. Avoid decorative shadows and card-heavy layouts.
