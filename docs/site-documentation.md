# AloftX Static Website – Technical Documentation

_Last updated: November 2025_

This document captures the end-to-end structure, behaviours, and maintenance guidance for the AloftX marketing site. Use it alongside the lightweight project `README.md` when onboarding new collaborators, planning changes, or auditing the site before launches.

---

## 1. Project Overview

| Item | Description |
| --- | --- |
| Site type | Static, single-brand marketing site with individual product detail pages |
| Tech stack | HTML5, Tailwind (via CDN), custom CSS (`styles.css`), vanilla ES6 JavaScript |
| Hosting target | Any static host (GitHub Pages, Netlify, Vercel, S3, etc.) |
| Design language | Premium green-and-neutral palette, Playfair Display headings, Inter body text |
| Accessibility focus | Keyboard navigation, focus outlines, semantic structure, friendly validation |

---

## 2. Directory Map & Responsibilities

```
AloftX/
├── index.html                     # Landing page that stitches together modular sections
├── pages/
│   ├── products.html              # Product catalogue landing
│   └── products/
│       ├── gbs-intelligent-surveillance.html
│       ├── gbs-pos.html
│       └── smap-counterlens.html  # Individual product stories & CTAs
├── components/
│   ├── navigation.html            # Primary navigation (desktop + mobile trigger)
│   └── footer.html                # Footer links + brand message
├── sections/                      # Modular building blocks loaded onto index.html
│   ├── hero-section.html
│   ├── solutions-section.html
│   ├── industries-section.html
│   ├── journey-timeline.html
│   ├── banner-section.html
│   └── contact-section.html
├── assets/
│   ├── logo.ico
│   └── js/
│       └── load-sections.js       # Dynamic loader inserting components & sections
├── styles.css                     # Custom global styling, animations, overrides
├── script.js                      # Site-wide behaviour + form logic + animations
└── docs/
    └── site-documentation.md      # (This file) – detailed technical manual
```

---

## 3. Content Architecture

### 3.1 Landing page (`index.html`)

The main page is intentionally lightweight. It contains placeholders (`<div id="…-placeholder">`) that are populated at runtime by `assets/js/load-sections.js`. Sections can be reordered or swapped by editing both:

1. The placeholder `<div>` IDs inside `index.html`
2. The `sections` array inside `load-sections.js`

### 3.2 Product ecosystem

- `pages/products.html` acts as a card-based overview that links into detailed product narratives.
- Each product detail page (`gbs-intelligent-surveillance.html`, `gbs-pos.html`, `smap-counterlens.html`) contains:
  - Hero summary
  - Detailed analysis cards
  - Feature grids
  - CTA block pointing back to the contact modal
  - Dedicated visual gallery (hero imagery sourced from Unsplash – see §7 for image sourcing guidance)

### 3.3 Shared components

- `components/navigation.html` is injected on every page. JavaScript patch logic adjusts relative paths (logo, hash links) based on depth.
- `components/footer.html` carries brand statement + quick links.

---

## 4. Styling & Design System

| Element | Source | Notes |
| --- | --- | --- |
| Utility classes | Tailwind CDN | Keep inline class usage to preserve rapid iteration. |
| Global overrides | `styles.css` | Defines colours, typography helpers, animation keyframes, navigation behaviour, and general transitions. |
| Fonts | Google Fonts (Inter, Playfair Display) | Loaded in `head` of each HTML file. |
| Colour palette | Custom CSS variables (`:root`) | Primary green `#16A34A`, neutrals, accent sage. |
| Animations | `styles.css` + `script.js` | IntersectionObserver adds `.section-reveal` and inline transforms for progressive reveal. |

When introducing new styled elements, prefer Tailwind utility classes. Only extend `styles.css` for animations, cross-page tweaks, or when Tailwind utilities are insufficient.

---

## 5. JavaScript Behaviour Overview (`script.js`)

The JavaScript file is shared across the entire project. Key modules include:

1. **Navigation path fixes**  
   Detects current URL depth and adjusts:
   - Logo `href` + `src`
   - Hash links (redirect to `index.html#…` when not on homepage)
   - Mobile menu link structures

2. **Section reveal & scroll effects**  
   - IntersectionObserver attaches `.section-reveal` to animate cards, grids, and CTA blocks.
   - Adds scroll progress bar on top edge.

3. **Mobile menu lifecycle**  
   - Creates overlay, handles open/close interactions, Escape key support.
   - Leverages event delegation so navigation remains functional after dynamic loads.

4. **Carousel & hero niceties**  
   - Reset scroll position for horizontal solution cards.
   - Parallax background effect on decorative blocks.

5. **Contact modal**  
   - Handles `Get in Touch` button, modal transitions, Escape closes, overlay click closes.

6. **Web3Forms submission**  
   - The submit handler now implements robust client-side validation (see below).

7. **Copy-to-clipboard buttons**  
   - Works for both the email and website buttons, even when clicking on inner SVG icons, thanks to `closest(...)`.

### 5.1 Contact form validation specifics

The submit listener (`document.addEventListener('submit', …)`) executes the following pipeline:

1. Trim whitespace for name, email, and message.
2. Validate each field with friendly messaging:
   - Name required
   - Email required and pattern-checked
   - Message required with minimum context (≥10 characters)
3. Highlight invalid fields and show a warm amber banner if any issue persists.
4. On success:
   - Swap button label to “Sending…”
   - Submit via `fetch` to Web3Forms with hidden API key
   - Reset UI, close modal
5. On failure:
   - Restore button, display banner, log error for developers

---

## 6. Component Loader (`assets/js/load-sections.js`)

Primary responsibilities:

1. Detect current directory depth (`/`, `/pages/`, `/pages/products/`) and compute `pathPrefix`.
2. Inject navigation/footer components into placeholders.
3. For homepage only, load hero/solutions/industries/journey/banner/contact sections asynchronously.
4. Rewrite asset paths within loaded HTML, ensuring `img` sources and `<a>` links work regardless of nesting.

When adding new sections:
- Create the HTML partial under `sections/`
- Add a placeholder in `index.html`
- Register the section in the loader’s `sections` array

---

## 7. Media & Asset Guidelines

- Current gallery imagery uses Unsplash URLs. For production-grade deployments, consider downloading assets and referencing them from `assets/img/` to avoid external dependency or licence changes.
- Add descriptive `alt` text for every illustrative image to preserve accessibility.
- Iconography inside cards uses inline SVG (primarily Heroicons). Keep stroke width consistent (`stroke-width="1.8"`–`2"`) to maintain visual harmony.
- Favicon: `assets/logo.ico` – update in place if rebranding occurs.

---

## 8. Contact Form Configuration

| Item | Value |
| --- | --- |
| Provider | [Web3Forms](https://web3forms.com/) |
| Endpoint | `https://api.web3forms.com/submit` |
| Access key | Stored in `sections/contact-section.html` hidden input (`access_key`) |
| Spam protection | Honeypot checkbox |

If the access key rotates:
1. Update the hidden input value.
2. Optionally move the key to an environment-managed script if the site transitions to a build pipeline.

---

## 9. Testing & QA Checklist

| Area | Steps |
| --- | --- |
| Navigation | Verify logo/home link on root and nested pages, mobile menu toggle, keyboard navigation. |
| Sections | Scroll through homepage and product pages; ensure intersection animations trigger once. |
| Contact modal | Open from CTA, attempt submissions: empty fields, whitespace, invalid email, success case. Confirm friendly messages appear. |
| Copy buttons | Click the email/website copy icons and watch for toast + icon change. |
| Responsive behaviour | Test breakpoints at 375px, 768px, 1024px, 1440px. |
| External links | Confirm product CTAs return to `index.html#contact` or `products.html`. |
| Lighthouse (optional) | Run to monitor accessibility/SEO/performance baselines. Target ≥90. |

---

## 10. Deployment Notes

1. The site is fully static. To publish:
   - Build: _not required_
   - Copy repository to your host or push to static hosting service.
2. If using Netlify/Vercel, point entry to `index.html` and enable clean URLs.
3. If served from a subdirectory, ensure `pathPrefix` logic in `load-sections.js` still computes correctly. Adjust as needed.
4. For local development, run `python3 -m http.server 8000` (see README).

---

## 11. Extending the Site

### 11.1 Adding a new product

1. Duplicate an existing product page inside `pages/products/`.
2. Update hero text, gallery imagery (with relevant alt text), and card content.
3. Add the new product card to `pages/products.html`.
4. Update navigation dropdown (`components/navigation.html`) if direct link is needed.

### 11.2 Creating a new homepage section

1. Build `sections/<new-section>.html`, reusing existing Tailwind patterns.
2. Define a placeholder `<div id="new-section-placeholder"></div>` in `index.html`.
3. Register the section in `load-sections.js` to fetch and inject it.
4. Add any reveal-specific classes (`product-card`, etc.) to benefit from existing animations.

### 11.3 Modifying animations

- Basic reveal delays are controlled via `styles.css` `.section-reveal` rules.
- IntersectionObserver in `script.js` can be tuned (threshold, rootMargin).
- For additional sequences, reusable helper classes (`product-card`) trigger the same effect.

---

## 12. Known Considerations & Future Enhancements

- **Asset hosting**: Replace external Unsplash URLs with local, optimized images for production deployments.
- **Form key security**: Web3Forms key lives in source HTML. Mitigate by loading it via serverless proxy or environment variable if sensitive.
- **i18n**: All copy is currently English-only. Any localization effort would require static content duplication or a build step.
- **Analytics**: No analytics script is embedded. Add as needed (Google Analytics, Plausible, etc.).
- **Automated tests**: No automated CI checks yet. Consider adding Cypress, Playwright, or Lighthouse CI if the site grows.

---

## 13. Support & Contacts

- **Design questions**: Refer to the colour palette, typography, and animation guidelines above.
- **Engineering**: Update `script.js` and `styles.css` carefully; both are shared across all pages.
- **Content changes**: Product details reside in their respective HTML files. Each card or CTA is self-contained for simple copy updates.

---



**************** developer details *****************

hai i am alan joshy , backend developer works in banglore and feel free to reach me for building softwares ,web sites/apps, ai agents developments and full stack apps

phone : +91 9744205472
Linkedin : https://www.linkedin.com/in/alan--joshy/ 
email : a1anjshy@gmail.com

_End of document._

