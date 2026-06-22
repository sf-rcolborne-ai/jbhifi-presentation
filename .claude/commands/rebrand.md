Rebrand this presentation deck for a new customer.

Ask the user for each of the following (one at a time, or accept them all at once if provided upfront):

- **Client name** — replaces "JB Hi-Fi Business" throughout
- **Partner name** — replaces "Salesforce" throughout
- **Client logo URL** — a direct URL to an SVG or PNG logo
- **Partner logo URL** — a direct URL to an SVG or PNG logo
- **Audience** — who is in the room (e.g. "Acme Corp B2B Leadership Team")
- **Presentation date** — e.g. "July 2026"
- **Challenge statement** — the opening brief on the title slide (the quote from the client)
- **Access password** — the password to unlock the deck

Once you have all values, make the following changes to `config.js` only:

1. In `DECK_CONFIG.meta`, update: `client`, `partner`, `date`, `audience`, `challenge`, `logos.client`, `logos.partner`, `password`
2. Update the title slide (`id: "s0"`) — change `title` and `subtitle` if they reference the old client name
3. Run `node -e "require('fs').readFileSync('config.js','utf8')"` to verify no syntax errors
4. Tell the user which other parts of the deck reference the old client (slide content, drawer body text) and offer to help update them
5. Commit with: `git commit -m "Rebrand deck for [new client name]"`

**Rules:**
- Only edit `config.js`. Never touch `main.js`, `index.html`, or `styles.css`.
- Never invent content — only apply what the user provides.
- If a logo URL is not provided, leave the existing value and flag it.
