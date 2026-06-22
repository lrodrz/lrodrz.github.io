# Larry's Blog Design System

## 1. Atmosphere & Identity

Larry's Blog is a personal scientific notebook: focused, approachable, and technical without feeling institutional. Its signature is a warm yellow accent over a quiet charcoal surface, keeping attention on writing, research images, and chronological posts.

## 2. Color

| Role | Token | Value | Usage |
|---|---|---|---|
| Surface/primary | Theme background | Midnight charcoal | Page background |
| Text/primary | Theme foreground | Midnight off-white | Headlines and body copy |
| Text/secondary | `rgba(255, 255, 255, 0.85)` | White at 85% | Site description |
| Text/tertiary | `rgba(255, 255, 255, 0.75)` | White at 75% | Post metadata |
| Accent/primary | `#f5c518` | Warm yellow | Links, title, navigation |
| Accent/subtle | `rgba(245, 197, 24, 0.25)` | Yellow at 25% | Dividers |
| Accent/border | `rgba(245, 197, 24, 0.5)` | Yellow at 50% | Navigation outlines |
| Accent/hover | `rgba(245, 197, 24, 0.15)` | Yellow at 15% | Hover surface |

Use warm yellow only for interactive emphasis. Let the Midnight theme own base surfaces and body text. Add new colors here before using them.

## 3. Typography

| Level | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Site title | `2rem` | 600 | Theme default | Global identity |
| H1/H2 | Theme default | Theme default | Theme default | Content hierarchy |
| Body | `1rem` | 400 | Theme default | Main writing |
| Navigation | `0.95rem` mobile | 600 | Theme default | Global links |
| Metadata | `0.95rem` | 400 | Theme default | Dates |
| Site description | `0.85rem` | 400 | 1.6 | Header summary |

- Primary font: the system sans-serif stack supplied by `jekyll-theme-midnight`.
- Mathematical notation: MathJax's rendered typefaces.
- Preserve the theme's readable body typography and use headings structurally.

## 4. Spacing & Layout

Spacing follows a 4px base. Existing values use quarter-rem increments where practical.

| Token | Value | Usage |
|---|---|---|
| Compact | `0.25rem` | Tight inline spacing |
| Small | `0.5rem` | List and metadata spacing |
| Standard | `1rem` | Mobile gutters |
| Comfortable | `1.25rem` | Desktop gutters |
| Section | `2.5rem` | Major content separation |
| Article break | `3rem` | Comments and terminal sections |

- Maximum content width: `1100px`.
- Main content uses a centered single column with responsive side gutters.
- Navigation wraps naturally below `600px`.
- Images remain fluid and never exceed their content column.

## 5. Components

### Global Header

- **Structure**: linked blog title, description, primary navigation, professional links.
- **States**: navigation links provide default and hover treatments; browser focus remains visible.
- **Accessibility**: semantic header and navigation with descriptive link text.

### Recent Posts List

- **Structure**: section heading followed by dated post links.
- **States**: links underline on hover.
- **Accessibility**: dates and post titles remain readable as link text.

### Social Links Bar

- **Structure**: professional profile links separated by quiet dividers.
- **States**: links underline on hover.
- **Accessibility**: the group has an accessible label and safe external-link attributes.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|---|---|---|---|
| Micro | `150ms` | ease | Link and navigation hover feedback |

Motion is limited to subtle feedback. New animation must use `transform`, `opacity`, or `filter` and respect reduced-motion preferences. New interactive elements need visible hover and keyboard-focus states.

## 7. Depth & Surface

Borders-only. The blog relies on the Midnight theme's flat charcoal surface, using translucent yellow rules and outlines to separate navigation and social elements. Avoid decorative shadows and card-heavy layouts.
