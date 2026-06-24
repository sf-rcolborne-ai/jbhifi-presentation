Rebrand this presentation deck for a new customer by creating a self-contained copy in a sibling folder.

## Step 1 — Gather details

Ask the user for each of the following (accept all at once or one at a time):

- **Customer folder name** — the directory name for the new deck, e.g. `asahi-presentation` (lowercase, hyphens, no spaces)
- **Client name** — the company being presented to, e.g. "Asahi"
- **Partner name** — your company, e.g. "Salesforce"
- **Client logo URL** — a direct URL to an SVG or PNG logo
- **Partner logo URL** — a direct URL to an SVG or PNG logo
- **Audience** — who is in the room, e.g. "Asahi B2B Leadership Team"
- **Presentation date** — e.g. "29 June 2026"
- **Challenge statement** — the opening brief/quote on the title slide
- **Access password** — the password to unlock the deck
- **Primary accent colour** — the client's main brand colour (hex, e.g. `#E4003A`). This replaces `--jb-yellow: #FFEC0E` in the design system. If unsure, ask the user to check the client's brand guidelines or website.
- **Secondary accent colour** *(optional)* — a second brand colour (hex). This replaces `--jb-green: #028703`. Leave as-is if not provided.

## Step 2 — Create the new folder

**IMPORTANT: Never modify the source repo. Always work in a new sibling folder.**

Determine the parent directory of the current working directory, then copy the entire project into a new folder alongside it:

```bash
# From within the current project directory:
cp -r . ../[customer-folder-name]
cd ../[customer-folder-name]
```

Then initialise a clean git repo for the new project:
```bash
rm -rf .git
git init
git add .
git commit -m "Initial copy from template"
```

All subsequent edits happen inside `../[customer-folder-name]` — never in the original.

## Step 3 — Apply the rebrand

In the **new folder's** `config.js`:

1. Update `DECK_CONFIG.meta`: `client`, `partner`, `date`, `audience`, `challenge`, `logos.client`, `logos.partner`, `password`
2. Update the title slide (`id: "s0"`): change `subtitle` if it references the old client name; update `metaItems` date and audience values
3. Verify syntax: `node -e "require('fs').readFileSync('config.js','utf8')"`

In the **new folder's** `styles.css`:

4. Replace the primary accent colour:
   - Find `--jb-yellow: #FFEC0E` and replace with `--jb-yellow: [primary accent colour]`
   - Also update `--jb-yellow-dark` if present (darken the primary by ~15%)
5. If a secondary accent was provided, replace `--jb-green: #028703` with the secondary colour

## Step 4 — Commit

```bash
git add config.js styles.css
git commit -m "Rebrand deck for [client name]"
```

## Step 5 — Report back

Tell the user:
- The path to the new folder
- How to start the local server: `cd ../[folder-name] && npx serve .`
- Which slides/drawers still contain old client name references in body text (grep for the old client name and list the locations)
- Offer to help update those content references next

## Rules
- **Never modify the original project.** All changes go in the new sibling folder.
- Only edit `config.js` and `styles.css` in the new folder. Never touch `main.js` or `index.html`.
- Never invent content — only apply what the user provides.
- If a logo URL is not provided, leave the existing value and flag it.
- If the primary accent is very light (e.g. white or near-white), warn the user it may affect readability on light backgrounds.
