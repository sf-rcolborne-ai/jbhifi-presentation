# JB Hi-Fi × Salesforce Executive Presentation — Claude Code Spec

## Project overview

This is a horizontal-scroll web presentation built for a Salesforce executive briefing with JB Hi-Fi Business leadership. It was iteratively built in Claude.ai chat and has reached the point where a proper file structure, local development environment, and content-configuration approach are needed to continue efficiently.

The goal of this Claude Code project is to:
1. Migrate the existing single-file HTML presentation into a clean, maintainable file structure
2. Extract all editable content into a configuration file so content changes never require touching presentation code
3. Enable easy addition of images, videos, and links without editing HTML
4. Set up a local development workflow with live reload

---

## Current state — what exists

### Source file
`jbhifi-exec-v3.html` — a single ~200KB self-contained HTML file. All CSS, JavaScript, and content are inline. Both logos are referenced by URL (not embedded). One image (Scaling AI chart) is base64-embedded inline.

### Slide structure (13 slides)
| # | ID | Title | Notes |
|---|-----|-------|-------|
| 1 | s0 | Title page | Logo lockup, challenge statement, meta strip |
| 2 | s0b | Agenda | Two-column, 7 agenda items, session format note |
| 3 | s1 | Cover — Learn your business | Two-column, three goals |
| 4 | s2 | What we found | 4 headline metrics + 4 pain columns |
| 5 | s3 | You've outgrown your foundation | Clickable toggle: Where you are / Where you're going |
| 6 | s4 | Three goals. One flywheel. | Animated flywheel diagram. 3 clickable steps → drawers |
| 7 | s5 | Three horizons to $1B | 3-column overview. Horizon badges are clickable to spotlight |
| 8 | s6 | All three horizons (deeper dive) | 3 scrollable columns. All 17 items clickable → drawers |
| 9 | s7 | Urgency vs business value | Interactive drag-and-drop 2×2 grid + scrollable backlog + custom add |
| 10 | s7b | What matters most? | Game changers → drag-to-rank priority list |
| 11 | s8 | North star & next steps | Vision statement + 4 actions with owners |
| 12 | s9 | Implementation plan | Placeholder — 3 horizon columns with TBC boxes |
| 13 | s10 | Thank you | Logo lockup, yellow rules, footer strip |

### Drawer system
A slide-over panel system (88vw wide, 70/30 image|text layout). Currently 20 drawers defined:
- 3 flywheel drawers: `drawer-ai`, `drawer-csat`, `drawer-rev`
- 6 Quick Win drawers: `dqw-opp`, `dqw-gp`, `dqw-scv`, `dqw-dash`, `dqw-route`, `dqw-quote`
- 6 Tactical drawers: `dtac-quote`, `dtac-conv`, `dtac-service`, `dtac-mktg`, `dtac-onboard`, `dtac-pipe`
- 5 Strategic drawers: `dstr-dc`, `dstr-sdr`, `dstr-rev`, `dstr-agentic`, `dstr-cleanorg`

### Interactive features
- Horizontal scroll deck with keyboard navigation (arrow keys), nav dots, arrow buttons
- S3: clickable toggle between "Where you are" (red) and "Where you're going" (green)
- S5: horizon badge click spotlights matching column, dims others
- S6: all 17 recommendation items open drawers on click
- S7: drag-and-drop 2×2 grid, scrollable backlog, custom chip input, reset board
- S7b: game changers panel refreshed from S7 grid, open drag-to-rank priority list, reorder within list
- Drawer: opens on callout click, closes on backdrop click or Escape, suppresses arrow keys while open

### Design system
```
--white:      #FFFFFF
--off-white:  #F7F7F5
--rule:       #E5E5E2
--text-1:     #0A0A0A
--text-2:     #4A4A46
--text-3:     #9A9A94
--jb-yellow:  #FFEC0E   (one accent per slide — underlines, stat borders)
--jb-green:   #028703   (positive signals, horizon 1, kickers)
--black:      #0A0A0A
--pain-red:   #C8001A   (pain points, problems)
--radius:     6px
```

Fonts: `Comfortaa` (700 — all titles, display numbers) + `DM Sans` (300/400/500/600 — all body copy). Both via Google Fonts.

Logo URLs:
- JB Hi-Fi Business: `https://www.jbhifi.business/Themes/BPDTHEME01/theme-client-updates/img/logos/logo.svg`
- Salesforce: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png`

---

## Target file structure

```
jbhifi-presentation/
├── index.html          # Presentation shell — no content, only structure + component rendering
├── config.js           # ALL editable content — slides, drawers, text, image URLs, video URLs
├── styles.css          # All CSS extracted from inline
├── main.js             # All JavaScript extracted from inline (deck nav, drag-drop, drawer system)
├── assets/
│   ├── images/         # Local images (logo files, chart images etc.)
│   └── videos/         # Any locally hosted video files
├── CLAUDE.md           # This spec file
└── README.md           # How to run and edit
```

---

## Configuration file design — `config.js`

This is the most important deliverable. It should be a single JavaScript object exported as a `const` so it works without a build step. The HTML reads from it at load time and renders all content dynamically.

### Design principles
- **Rob edits only `config.js`** — never `index.html`, `styles.css` or `main.js` for content changes
- Every string, URL, stat, bullet point, and drawer content lives here
- Images referenced by local path (`./assets/images/filename.png`) or external URL
- Videos supported as YouTube embed URL, Vimeo embed URL, or local file path
- Drawer content structured as sections with typed content blocks (paragraph, stat-row, bullet-list, image, video)

### Proposed config structure

```javascript
const DECK_CONFIG = {

  // ── GLOBAL ────────────────────────────────────────────────────────────
  meta: {
    client: "JB Hi-Fi Business",
    partner: "Salesforce",
    date: "2026",
    audience: "JB Hi-Fi B2B Leadership Team",
    challenge: '"Learn our business and tell us how to get better."',
    logos: {
      client: "https://www.jbhifi.business/Themes/BPDTHEME01/theme-client-updates/img/logos/logo.svg",
      partner: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png"
    }
  },

  // ── SLIDES ────────────────────────────────────────────────────────────
  slides: [
    {
      id: "s0",
      type: "title",           // Renderer picks the right template
      title: "JB Hi-Fi Business × Salesforce",
      subtitle: "Executive Briefing — How to get better",
    },
    {
      id: "s2",
      type: "findings",
      kicker: "Ridealong findings",
      title: "The end-to-end manual journey",
      metrics: [
        { value: "595s",        label: "To handle one email service case",        source: "Service ridealong · pg.35" },
        { value: "4,500+",      label: "Manual reports maintained by finance",     source: "Reporting findings · pg.45" },
        { value: "$80K→$500K",  label: "Pipeline inflation from multi-option quotes", source: "BDM ridealong · pg.45" },
        { value: "~Never",      label: "GP approvals rejected — yet delay every deal", source: "Inside sales · pg.19" }
      ],
      painColumns: [
        {
          label: "Sales & quoting",
          colour: "#1A4A6E",
          items: [
            "Opportunity creation takes <strong>5–10 min</strong>",
            "SKU creation up to <strong>24+ hrs</strong>",
            // ...
          ]
        }
        // ...
      ]
    },
    // ... all 13 slides
  ],

  // ── DRAWERS ───────────────────────────────────────────────────────────
  drawers: {
    "drawer-ai": {
      kicker: "Step 1 of 3 — The flywheel",
      title: "AI Productivity",
      image: {
        src: "./assets/images/scaling-ai.png",   // local path or URL
        alt: "Scaling AI — Revenue Growth vs Cost of Teams"
      },
      // Optional: swap image for video
      // video: { type: "youtube", url: "https://www.youtube.com/embed/VIDEO_ID" },
      sections: [
        {
          label: "The opportunity",
          content: [
            { type: "paragraph", text: "Right now, your commercial teams spend..." },
            { type: "paragraph", text: "<strong>AgentForce changes this.</strong> AI agents handle..." }
          ]
        },
        {
          label: "What we observed at JB Hi-Fi",
          content: [
            {
              type: "stat-row",
              stats: [
                { value: "595s",    label: "To handle one email service case across 6 systems" },
                { value: "240s",    label: "Copy-pasting per case — avoidable with automation" },
                { value: "~Never",  label: "GP approvals rejected — yet every deal waits up to 1hr" },
                { value: "5–10 min",label: "To create a single opportunity" }
              ]
            }
          ]
        },
        {
          label: "What AgentForce can do",
          content: [
            {
              type: "bullet-list",
              items: [
                "Autonomous case resolution — customer identity, history & ETAs on case open",
                "Quoting agent — builds and validates quotes from natural language",
                // ...
              ]
            }
          ]
        }
      ]
    },
    // ... all 20 drawers
  }
};
```

### Supported content block types in drawer sections

| Type | Properties | Renders as |
|------|-----------|------------|
| `paragraph` | `text` (HTML string) | `<p>` |
| `stat-row` | `stats: [{value, label}]` | 2-col stat grid with yellow bottom border |
| `bullet-list` | `items: [string]` | Green ✓ bulleted list |
| `image` | `src`, `alt`, `caption?` | Full-width image with optional caption |
| `video` | `type: "youtube"\|"vimeo"\|"local"`, `url` | Responsive iframe or `<video>` |
| `before-after` | `before: {label, value, desc}`, `after: {label, value, desc}` | Side-by-side comparison cards |
| `link` | `text`, `href` | Styled green CTA link |

---

## Migration steps for Claude Code

### Step 1 — Project setup
```bash
mkdir jbhifi-presentation && cd jbhifi-presentation
git init
# Copy jbhifi-exec-v3.html into the folder as reference
# Run a local server:
npx serve .
# Or: python3 -m http.server 3000
```

### Step 2 — Extract CSS
Copy all CSS from the `<style>` block in `jbhifi-exec-v3.html` into `styles.css`. Add `<link rel="stylesheet" href="styles.css">` to `index.html`.

### Step 3 — Extract JavaScript
Copy all JS from the `<script>` block into `main.js`. Add `<script src="main.js" defer></script>` to `index.html`. Update `main.js` to read from `DECK_CONFIG` where content is currently hardcoded.

### Step 4 — Build `config.js`
Create `config.js` with the full `DECK_CONFIG` object. Migrate all content from the HTML into the config — slides, drawers, all text strings. Start with the drawers (highest value — most content, most likely to need editing).

### Step 5 — Build renderers in `main.js`
Write render functions that read from `DECK_CONFIG` and generate HTML:
- `renderSlide(slideConfig)` — routes to the right slide template
- `renderDrawer(drawerId, drawerConfig)` — generates drawer HTML
- `renderContentBlock(block)` — renders a single typed content block

### Step 6 — Rebuild `index.html` as a shell
`index.html` should contain only: the `<head>`, the deck container `<div id="deck">`, the nav elements, the backdrop, and script/style references. All slide and drawer HTML is generated by the renderers.

### Step 7 — Copy assets
Move the Scaling AI image (currently base64 in the HTML) to `assets/images/scaling-ai.png`. Update the config to reference it by path. Add any other images to the assets folder going forward.

### Step 8 — GitHub
```bash
git remote add origin git@github.com:sf-rcolborne-ai/jbhifi-presentation.git
git add . && git commit -m "Initial migration from single-file build"
git push -u origin main
```

---

## Content that needs to be added / completed

These are placeholders or gaps in the current build that need real content:

| Slide | Gap | Action needed |
|-------|-----|--------------|
| S9 — Implementation Plan | Full placeholder, TBC boxes | Populate after today's session |
| All drawers | Video embeds currently absent | Add YouTube/Vimeo URLs to config once sourced |
| Flywheel drawers (CSAT, Rev) | Visual panels use inline HTML rather than images | Consider replacing with proper image assets |
| S7b priority list | No export or save mechanism | Consider adding a "Copy to clipboard" button for the ranked list |

---

## Things to consider for the Claude Code project

### Must-have
- **Hot reload** — use `npx serve` or VS Code Live Server. Every config save should be instantly visible.
- **No build step** — keep it vanilla HTML/CSS/JS. No webpack, no bundler. `config.js` is loaded as a plain `<script>` tag. This keeps the barrier to editing as low as possible.
- **Asset management** — all images and videos should live in `/assets/` with meaningful filenames. The config references them by relative path.
- **CLAUDE.md at root** — Claude Code reads this automatically. Keep it updated as the project evolves.

### Nice-to-have
- **Print/PDF export** — a `?print` URL param that stacks slides vertically for PDF printing via browser print dialog
- **Presenter mode** — a second view with speaker notes (not currently written, but worth adding to config structure now)
- **Slide visibility toggle** — a `hidden: true` flag on any slide or drawer that excludes it from the rendered output without deleting content
- **Dark mode variant** — the design system already supports it conceptually; could be a CSS class toggle

### Watch out for
- The drag-and-drop on S7/S7b uses browser native `draggable` + `ondragstart` — this doesn't work on iOS Safari without a polyfill. If the presentation will ever be viewed on iPad, add a touch drag library.
- The Google Fonts import requires internet access. If presenting offline, download the fonts and serve them locally from `/assets/fonts/`.
- The Salesforce logo URL (Wikipedia) could go offline. Download and serve locally.
- Base64 image currently embedded in the AI drawer — extract to `/assets/images/scaling-ai.png` in Step 7 above.

---

## Critical lessons learned — DO NOT repeat these in Claude Code

These are bugs that occurred during the single-file build. The config-driven renderer approach is specifically designed to prevent them — but Claude Code must be aware of them.

### 1. Column nesting — the most dangerous bug

**What happened:** Slide 06 (All three horizons) uses a 3-column CSS grid. During an edit pass, a stray `</div>` appeared at the end of each column's item list — *before* the closing tags for `hz-col-scroll-inner` and `hz-col-scroll`. This caused each column to break out of the grid and render as a full-width block, making it appear as three separate repeating slides when navigating.

**Why the renderer prevents this:** When columns are generated from a data array (`config.slides[n].columns.map(col => renderColumn(col))`), the open/close tags live in the render function and can never be mismatched by a content edit. There is no manual HTML to get out of sync.

**Validation script** — run this after any manual HTML edit before testing:
```python
with open('index.html') as f:
    html = f.read()
opens  = html.count('<div class="hz-col-scroll-inner">')
closes = html.count('</div><!-- /hz-col-scroll-inner')
assert opens == closes, f"Mismatch: {opens} opens, {closes} closes"
```

### 2. Drawer shadow bleed — the dark right-edge artefact

**What happened:** 20+ drawer elements were all rendered simultaneously as `position:fixed; right:0` with `box-shadow`. The shadow on each drawer was composited into the page even when off-screen, creating a visible dark band on the right edge of every slide.

**The fix:** `translateX(110%)` ensures drawers are fully off-screen including their shadow. `box-shadow:none` on the base state; shadow only applied on `.drawer.open`. `isolation:isolate` and `will-change:transform` prevent compositing bleed.

**In the renderer:** Apply these to every generated drawer by default. Never add `box-shadow` to the base `.drawer` rule — only to `.drawer.open`.

### 3. Scrollable column content clipped

**What happened:** Slide 06 columns had more content than the viewport height. Content was clipped with no scroll.

**The fix:** Each column uses `height:100%; min-height:0; overflow:hidden` at the outer level with an inner `overflow-y:auto; flex:1; min-height:0` scroll container. The header is `flex-shrink:0`.

**In the renderer:** Any slide that renders variable-length lists must use this pattern. Put it in named CSS classes (`hz-col-scroll` / `hz-col-scroll-inner`), not inline styles.

### 4. Duplicate slide IDs

**What happened:** Two slides ended up with `id="s9"` when the Implementation Plan was inserted before Thank You without updating the ID.

**In the renderer:** Generate IDs programmatically. Validate uniqueness on load:
```javascript
const ids = DECK_CONFIG.slides.map(s => s.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length) console.error('Duplicate slide IDs:', dupes);
```

---

## Recommended renderer architecture

Use a typed dispatch pattern to make nesting bugs structurally impossible:

```javascript
function renderDeck() {
  const deck = document.getElementById('deck');
  DECK_CONFIG.slides.forEach((slide, i) => {
    if (slide.hidden) return;
    deck.appendChild(renderSlide(slide, i));
  });
  Object.entries(DECK_CONFIG.drawers).forEach(([id, drawer]) => {
    document.body.appendChild(renderDrawer(id, drawer));
  });
  initNav();
  initInteractivity();
}

function renderSlide(config, index) {
  const templates = {
    title:          renderTitleSlide,
    cover:          renderCoverSlide,
    findings:       renderFindingsSlide,
    inflection:     renderInflectionSlide,
    flywheel:       renderFlywheelSlide,
    horizons:       renderHorizonsSlide,
    horizons_deep:  renderHorizonsDeepSlide,  // S6 — the dangerous one
    matrix:         renderMatrixSlide,
    priorities:     renderPrioritiesSlide,
    north_star:     renderNorthStarSlide,
    placeholder:    renderPlaceholderSlide,
    thankyou:       renderThankyouSlide,
  };
  return templates[config.type](config, index);
}

// S6 renderer — nesting is in the function, never in hand-written HTML
function renderHorizonsDeepSlide(config, index) {
  const cols = config.columns.map(col => `
    <div class="hz-col-scroll">
      <div class="hz-col-head">
        <span class="hz-badge ${col.badgeClass}">${col.badge}</span>
      </div>
      <div class="hz-col-scroll-inner">
        ${col.items.map(item => renderHzItem(item)).join('')}
      </div>
    </div>
  `).join('');
  // wrap in slide shell...
}
```

This means the nesting is controlled by the render function, not manual HTML. A stray `</div>` in a config item's text cannot break the column structure because item content is inserted into a template string that already closes correctly.

---

## Reference — current known issues (minor, post-migration)

- S7b priority list has no export mechanism — ranked items can't be saved or shared after the session
- Slide 09 Implementation Plan (`s9impl`) is a placeholder — needs content post-session
- Slide IDs are not fully sequential — `s9impl` then `s9` (Thank You). Renumber consistently during migration.
- The `two-hz` CSS class is no longer used (slide 06 was rebuilt to three columns) — remove during cleanup

