# Agent Guide for Devfolio

## Project overview
- Static portfolio site (HTML/CSS/JS)
- No build system detected (no `package.json`, `Makefile`, or similar)
- Assets live in `assets/`, `build/`, `web/`, and `PDF/`
- PDF viewer assets exist in `web/` and `PDF/web/`

## Commands
### Install
- `npm install`

### Build
- No build step detected

### Lint
- No lint tooling detected

### Test
- No automated tests detected

### Dev server
- `npm run dev`
- Serves `index.html` at `http://localhost:8000`
- Single-page static site; no single-test command available

### Local preview (manual)
- Use a static file server to preview:
  - `python -m http.server 8000`
  - Then open `http://localhost:8000/index.html`
- For local PDF viewer, open `web/viewer.html`

## Repository rules
- No Cursor rules found in `.cursor/rules/` or `.cursorrules`
- No Copilot rules found in `.github/copilot-instructions.md`

## Code style guidelines
### General
- Keep changes minimal and focused
- Prefer small, readable functions over large blocks
- Avoid introducing new dependencies unless required
- Keep formatting consistent with existing files
- Keep line length readable (~100 characters)
- Add blank lines between logical blocks
- Prefer explicit, readable code over clever shortcuts

### HTML
- Use semantic elements (`header`, `main`, `section`, `article`, `footer`)
- Keep attributes lowercase and quoted
- Indent with two spaces
- Keep one element per line for complex structures
- Prefer data attributes for JS hooks (e.g. `data-theme-btn`)
- Ensure images include `alt` text
- Keep inline styles to a minimum
- Keep `id` usage unique and stable
- Keep links and buttons accessible and focusable

### CSS
- Follow the variable system defined in `style-guide.md`
- Prefer CSS custom properties for colors, spacing, and typography
- Keep selectors specific but not overly deep
- Group related rules together (layout, typography, theme)
- Keep media queries near the rules they affect
- Respect light/dark themes via `data-theme` selectors
- Avoid `!important` unless absolutely necessary
- Prefer class selectors over element selectors for layout
- Use kebab-case for custom class names

### JavaScript
- Use `"use strict"` at top of files
- Prefer `const` and `let`; avoid `var`
- Use descriptive names (`themeButton` not `btn`)
- Keep DOM queries cached when reused
- Use data attributes for selectors instead of classes
- Avoid global variables unless required for integration
- Keep event listeners near related logic
- Guard against missing DOM nodes before use
- Prefer early returns to keep logic simple

### Imports and modules
- No module system detected
- Keep scripts in `js/` and referenced from `index.html`
- Avoid adding bundler-only syntax unless a build step exists
- Avoid inline scripts unless absolutely necessary

### Types
- Project is plain JS; no TypeScript detected
- If adding types via JSDoc, keep them minimal and consistent
- Prefer inline JSDoc for DOM elements if needed
- Avoid introducing full typing systems without a build step

### Naming conventions
- CSS classes: kebab-case
- Data attributes: kebab-case with `data-` prefix
- JS functions: camelCase
- JS constants: camelCase unless truly constant
- File names: lowercase with hyphens when adding new files

### Error handling
- Guard against missing DOM nodes before using them
- Use early returns to keep logic simple
- Do not swallow errors silently; log only when useful
- Avoid noisy `console.log` in production code

### Accessibility
- Ensure interactive elements are focusable
- Use `aria-*` attributes when needed
- Provide visible focus styles or preserve defaults
- Ensure buttons are `button` elements, not clickable `div`
- Ensure form inputs have labels when added

### Performance
- Avoid repeated DOM queries in tight loops
- Prefer event delegation when adding many listeners
- Avoid large inline images; use assets folder
- Keep animations lightweight and respect reduced motion

## File-specific notes
- `style-guide.md` defines theme tokens and typography scale
- `css/style.css` contains theme variables and layout rules
- `js/script.js` manages theme switching and tab logic
- `js/practice.js` appears to be a sandbox file

## When adding new tooling
- Update this file with exact commands
- Include single-test execution syntax
- Note required Node/Python versions if introduced
- Document formatter or lint config if added
