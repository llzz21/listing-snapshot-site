# Listing Snapshot site

This repository serves two static pages for the Chrome extension **Listing Snapshot for Etsy**:

- `privacy-policy.html` — the URL the Chrome Web Store listing points to as its privacy policy.
- `index.html` — the landing page used for the listing's "learn more" field, plus the waitlist contact entry.

It contains **no** extension source code. The extension itself is a separate, unpublished package.

## Constraints that must not be broken

- No analytics script, no tracking pixel, no third-party font or script. Adding one would force the store privacy disclosure to change from "does not collect" to "collects data", which is part of how this listing is meant to be reviewed.
- No backend, no form service. The waitlist entry is a `mailto:` link only.
- The contact address in `mailto-copy.js` and `privacy-policy.html` is kept as two concatenated string pieces so a plain-text scraper does not see it in one run. That is cosmetic only — any crawler that executes JavaScript still gets the address.

## Serving

GitHub Pages, branch `main`, root of the repository. Nothing is built; the files are served as authored.
