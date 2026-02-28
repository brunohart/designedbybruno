# designedbybruno — Portfolio Project Context

## Overview
Hand-coded portfolio for Bruno Hart, interaction designer. Replaces a Readymag-based portfolio with a site that reflects Bruno's actual aesthetic taste — raw, collage-influenced, Rauschenberg-inspired — rather than a safe, template-driven UX student presentation.

**Live dev server:** `python3 -m http.server 8080` from this directory → http://localhost:8080

---

## Architecture

```
portfolio/
├── index.html                    # Landing page (hero + project grid + sketches)
├── about.html                    # WebGL shader landing — just "designedbybruno" centered
├── craft.html                    # "The Feel of Things" — interaction design manifesto with 9 live demos
├── projects/
│   ├── letterboxd.html           # 3-part capstone case study
│   ├── engoo.html                # Engoo UX case study
│   └── vuw.html                  # VUW Course Selection case study
├── css/
│   ├── reset.css                 # Modern CSS reset
│   ├── variables.css             # Design tokens (colors, type, spacing, motion)
│   ├── base.css                  # Global styles, texture overlay, utility classes
│   ├── layout.css                # Header, grid, containers, spacing utilities
│   ├── components.css            # Cards, cursor, sketches strip, labels, dividers
│   ├── home.css                  # Landing page specific (hero, project grid)
│   ├── project.css               # Shared project page layout
│   └── craft.css                 # Craft page (demo containers, act sections, pillar layout)
├── js/
│   ├── main.js                   # View Transitions API, IntersectionObserver lazy load
│   ├── animations.js             # GSAP scroll-driven animations, reveals, parallax
│   ├── cursor.js                 # Custom cursor with lerp spring following
│   ├── nav.js                    # Smooth scroll for hash links
│   └── craft-demos.js            # 9 interactive demos for craft.html (grain, warmth, patina, weight, friction, fluid, tactility, resistance, silence)
├── assets/images/                # Real images extracted from PDFs (100 files)
├── vercel.json                   # Deployment config
└── CLAUDE.md                     # This file
```

---

## Visual Identity

### Design Philosophy
The tension between analog/raw and digital/precise IS the identity. Inspired by Bruno's Pinterest board: Rauschenberg, Cieslewicz, punk zines, Arabic calligraphy, torn paper, collage, matchbox labels, found objects.

### Rauschenberg-Inspired CSS Techniques
- `mix-blend-mode: multiply` on images (silkscreen effect)
- Rotated project cards (-0.5deg, 0.7deg, -0.4deg) with hover reset to 0deg
- Asymmetric grid (1.15fr 0.85fr)
- Color wash blocks (semi-transparent, rotated divs with mix-blend-mode: multiply)
- Paper grain texture overlay at 0.06 opacity
- Misregistered orange ghost on hero name via `::before` + `data-text` attribute
- Rubber stamp section labels (bordered, rotated -0.8deg)
- Broken gradient dividers simulating brush strokes
- Scattered sketch strip with staggered rotations and margins

### Color Palette
- `--bg`: `#F0EDE6` (warm parchment)
- `--ink`: `#1A1A1A` (near-black)
- `--orange`: `#D4622B` (burnt orange)
- `--blue`: `#1B2D4F` (deep navy)
- `--red`: `#C4391D` (accent red)
- `--cream`: `#F5F0E1` (lighter variant)
- `--grey`: `#8A8578` (warm grey)

### Typography
- **"designedbybruno" logo**: `Helvetica Neue, Helvetica, Arial, sans-serif` — EVERYWHERE (layout.css `.site-header .logo` + about.html inline)
- **Headlines**: `Space Grotesk` 700
- **Body**: `Inter` 400/500
- **Accent/Mono**: `JetBrains Mono` — labels, metadata, nav links
- Fonts loaded via Google Fonts in base.css

---

## Page-by-Page State

### about.html
- Full-viewport WebGL2 animated gradient shader (dark bg `#000a0f`, amber/gold/cream color stops, sine wave shape, noise texture)
- ONLY content: "designedbybruno" in Helvetica, centered on the page (`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`)
- Clicking it goes to index.html
- No nav, no tagline, no footer — intentionally minimal and intriguing
- The shader code is a vertex + fragment GLSL program with noise texture as base64 PNG

### craft.html — "The Feel of Things"
- **Header**: Same site-header as all pages, with "Craft" link added to nav (Work, Craft, Sketches, Contact)
- **Hero**: "The Feel of Things." in display type with orange ghost misregistration + lede paragraph
- **Structure**: 3 acts (Material, Force, Presence) containing 9 pillars, each with essay text + interactive demo
- **Act I — Material**: Grain (canvas noise + parallax), Warmth (CSS custom property temperature slider), Patina (canvas accumulating interaction traces)
- **Act II — Force**: Weight (draggable objects with different spring physics), Friction (adjustable friction coefficient), Fluid (canvas particle system)
- **Act III — Presence**: Tactility (pressure-responsive button), Resistance (drag-to-confirm with spring-back), Silence (GSAP timeline comparison with/without pauses)
- **Closing**: Philosophy summary connecting pillars to projects
- **Styles**: craft.css for page-specific layout (demo containers, act sections, pillar articles)
- **Scripts**: craft-demos.js for all 9 interactive demos (vanilla JS + Canvas + GSAP)
- **Color washes**: Orange for Material, Blue for Force, Red for Presence

### index.html
- **Header**: "designedbybruno" (Helvetica, links to about.html) + nav (Work, Craft, Sketches, Contact)
- **Hero**: "Bruno Hart." in large display type with orange ghost misregistration + tagline "Interaction Designer and Systems Strategist with a deep interest in how digital platforms can initiate real-world communal experiences" (styled as `.hero__tagline` in home.css)
- **Project grid**: 3 asymmetric cards (Letterboxd, Engoo, VUW) with Rauschenberg rotation/parallax
- **Sketches strip**: 8 cropped sections from the Sketches PDF, scattered layout
- **Footer**: GitHub, Email, copyright
- Nav hover goes to red (`color: var(--red)`)

### Project Pages (letterboxd, engoo, vuw)
- Shared template: back link, project header, hero image, content blocks (text + image alternating), next project link
- All use real PNG images extracted from PDFs
- Letterboxd: 3-part structure (Cinephile as Self, Design & Validation, Engineering the System)
- Engoo: Research & Analysis → Ideation & Development
- VUW: Mapping the Problem Space → Strategy & Implementation
- Scroll-driven GSAP reveals on `[data-reveal]` elements
- Silkscreen treatment on images (mix-blend-mode: multiply, offset shadow)

---

## Image Sources

### Portfolio PDF exports (~/Desktop/interaction-design/portfolio-claude-reference/)
14 PDFs rendered to PNG at 2x resolution. Key mappings:
- `letterboxd-hero.png` ← PORTFOLIO — Letterboxd.pdf
- `letterboxd-concepts.png` ← PORTFOLIO — Page 2.pdf
- `letterboxd-testing.png` ← PORTFOLIO — Page 9.pdf
- `letterboxd-prototype.png` ← PORTFOLIO — Page 10.pdf
- `letterboxd-poster.png` ← PORTFOLIO — Page 11.pdf
- `engoo-hero.png` ← PORTFOLIO — Engoo Customer UX.pdf
- `vuw-hero.png` ← PORTFOLIO — Page 5.pdf
- `vuw-design.png` ← PORTFOLIO — Page 15.pdf
- `sketches-full.png` ← PORTFOLIO — Sketches.pdf (then cropped into sketch-01 through sketch-08)

### GitHub repo PDFs (github.com/brunohart/IXXN390-pdfs, cloned to /tmp/brunohart-pdfs/)
Rendered first 4 pages of each PDF at 2x. Naming convention: `{project}-{doc}-p{page}.png`
- EngooUX/ → `engoo-research-p*.png`, `engoo-design-p*.png`, `engoo-brief-p*.png`
- IXXN311Part1/ → `vuw-concepts-p*.png`, `vuw-presentation-p*.png`, `vuw-brief-p*.png`, `vuw-litreview-p*.png`
- IXXN311Part2/ → `vuw-graphic-p*.png`, `vuw-casestudy-p*.png`, `vuw-testing-p*.png`
- IXXN390/ → `letterboxd-presentation-p*.png`, `letterboxd-research-p*.png`, `letterboxd-brief-p*.png`
- IXXN390Part2/ → `letterboxd-design-progress-p*.png`
- IXXN390Part3/ → `letterboxd-final-pres-p*.png`, `letterboxd-techspec-p*.png`, `letterboxd-process-p*.png`
- Images/ → 16 JPGs copied directly (IMG_0792.JPG through IMG_0809.JPG)

---

## Tech Stack
- Vanilla HTML/CSS/JS (no build step)
- GSAP 3.12.5 + ScrollTrigger (CDN)
- WebGL2 shader for about.html animated background
- View Transitions API for page morphs
- Custom cursor with lerp-based spring (ease: 0.15)
- Vercel deployment target (vercel.json configured with clean URLs + caching)

---

## Key Design Decisions Made
1. "designedbybruno" is ONE word (not "designed by bruno")
2. Logo font is Helvetica everywhere (not JetBrains Mono)
3. Nav hover → red color (not opacity change)
4. Clicking logo → about.html (WebGL shader page), not index.html
5. About page is intentionally minimal — just the logo centered on the shader. No nav, no bio, no footer. Pure intrigue.
6. The bio/tagline lives on index.html above the work section instead
7. Location: Auckland (not Wellington)
8. All project images are real (extracted from PDFs), not placeholders

---

## Design Taste & Identity

The full design identity document is at `~/Desktop/interaction-design/digital-design-taste.md`. It defines Bruno's unique flavour as **Artist (Rauschenberg, Cieslewicz, punk zines), Architect (Rams, systems thinking, Double Diamond), and Engineer (Rauno Freiberg / Devouring Details, spring physics, code-as-design-tool)**. Read it before making any visual, interaction, or structural decisions.

Key principles: print don't display, tension is identity, physics not transitions, infer intent, build the thing, as little design as possible, the work is the studio.

---

## Remaining TODO
- [ ] Responsive testing (tablet/mobile)
- [ ] Performance optimization (image compression — PNGs are large, consider WebP)
- [ ] Vercel deployment + custom domain (designedbybruno.net)
- [ ] Lighthouse audit (target 95+ Performance, 100 Accessibility)
- [ ] Consider lazy loading for project page images
- [ ] Mobile: hide custom cursor, simplify grid to single column
- [ ] Engoo: demonstrate Figma technical skills (variables, constraints, complex file)
