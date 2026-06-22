# Executive Presentation Deck

A config-driven horizontal-scroll presentation built for Salesforce executive briefings. Clone and rebrand for any customer — all content lives in `config.js`.

## Using as a template

1. Click **"Use this template"** on GitHub (or clone the repo)
2. Run locally and open the deck (see below)
3. Open Claude Code in the project folder
4. Type `/rebrand` — Claude will guide you through swapping the client name, logos, and branding
5. Type `/deck` for help editing any slide or drawer content

## JB Hi-Fi Business × Salesforce — Original build

## Running locally

```bash
# Option 1 — npx serve (recommended)
npx serve .

# Option 2 — Python
python3 -m http.server 3000
```

Then open http://localhost:3000 (or the port shown).

## Editing content

**Edit only `config.js`.** Every slide title, stat, bullet point, drawer section, and URL lives there.

- Save `config.js` and refresh the browser — no build step required.
- To hide a slide or drawer without deleting it, add `hidden: true` to its config entry.

## Adding images

1. Drop the image file into `assets/images/`
2. Reference it in `config.js` as `"./assets/images/your-file.png"`

## Adding videos

Supported formats in drawer `video` blocks:
- YouTube embed: `{ type: "youtube", url: "https://www.youtube.com/embed/VIDEO_ID" }`
- Vimeo embed: `{ type: "vimeo", url: "https://player.vimeo.com/video/VIDEO_ID" }`
- Local file: `{ type: "local", url: "./assets/videos/your-file.mp4" }`

## File structure

```
index.html      — presentation shell (no content — do not edit for content changes)
config.js       — ALL content: meta, slides, drawers
styles.css      — all CSS (design system, layout, components)
main.js         — all JavaScript (nav, drag-drop, drawer system, renderers)
assets/
  images/       — local image files
  videos/       — local video files
CLAUDE.md       — full project spec for Claude Code
```
