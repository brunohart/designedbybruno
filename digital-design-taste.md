# Digital Design Taste — Bruno Hart (designedbybruno)

## Universal Design Instructions

These instructions encode Bruno Hart's design identity — his aesthetic taste, interaction philosophy, and engineering craft. Use them as a creative constraint system when designing, building, or reviewing any digital work for or with Bruno.

When someone encounters Bruno's work, they should feel they are in the presence of three people at once: an **artist** with an uncompromising visual identity, an **architect** who thinks in systems and structures, and an **engineer** who builds every interaction by hand in code. The rough edges are deliberate. The flair is earned. The craft is invisible until you look closely — and then it's everywhere.

---

## Core Identity

The tension between **analog/raw** and **digital/precise** IS the identity. Everything Bruno designs lives at the intersection of hand-made imperfection and engineered control. The work should feel like a Rauschenberg combine painting that somehow runs at 60fps — screenprinted onto warm paper, but with spring physics that make you lean in and touch.

Bruno is a **design engineer**. Not a UX designer who hands things off. Not a developer who implements someone else's mockup. A designer whose medium is code, whose references are fine artists, and whose rigour is architectural. The ambition: Dieter Rams' discipline applied to interactive systems, with Rauschenberg's visual soul, built to the standard Rauno Freiberg sets at Vercel — where every spring curve, every gesture threshold, every micro-interaction is authored by hand, in code, tuned by feel until it's right.

The style is **uncompromising**. It embraces rough edges, not because it's lazy, but because the rough edges are more honest than polish. A misregistered print pass is more alive than a perfect gradient. A scattered desk is more real than a curated grid. The flair comes from confidence — knowing the rules well enough to break them with precision.

---

## Aesthetic Lineage: The Artist

### Primary Visual References
- **Robert Rauschenberg** — Combine paintings, silkscreen transfers, color bleeds, misregistered print passes, layered materiality. The single most important visual reference. Rauschenberg didn't separate painting from sculpture from found objects — he combined them. Bruno doesn't separate visual design from interaction from engineering. Every surface treatment should ask: "Would this look like it was screenprinted onto parchment?"
- **Roman Cieslewicz** — Polish/French photomontage, bold contrast, political visual sharpness, silkscreen poster aesthetics. The confidence to use ONE image, ONE color, ONE word, and make it hit.
- **Punk zines** — Torn paper, rubber stamps, broken grids, found-object aesthetics, deliberate anti-polish. The energy of someone who had something to say and didn't wait for permission or a template.
- **Arabic calligraphy / vernacular typography** — Expressive mark-making meets systematic structure. The beauty of a letterform that is both a system and a gesture. The tension between reading and seeing.

### The Architect: Systems & Rigour References
- **Dieter Rams** — "Good design is as little design as possible." The functional conscience beneath every visual decision. Rams' 10 principles are not applied literally — they are the structural skeleton that permits the Rauschenberg surface to exist without collapsing into chaos. Every interaction must be honest, unobtrusive, thorough to the last detail. The raw aesthetic earns its right to exist because the underlying system is Rams-level rigorous. Without this discipline, the roughness would just be mess.
- **Systems thinking / Double Diamond** — Design as architecture, not decoration. The problem space is mapped before a single pixel is placed. Ecosystems, not screens. Interaction maps, not wireframes. The architect sees the whole building before drawing a door handle.

### The Engineer: Interaction Craft References
- **Rauno Freiberg / Devouring Details** — The gold standard for design engineering. Rauno's 8 principles from Devouring Details are deeply relevant to Bruno's practice:

  1. **Inferring intent** — The interface should understand what the user is trying to do before they finish doing it. Apple Maps showing navigation without unlocking. Wallet increasing brightness for scanning. Bruno's cursor expanding before you click — it already knows you're approaching something interactive.

  2. **Interaction metaphors** — Great interactions reward learning by reusing metaphors. Swiping mirrors page-turning. Pinching mirrors handling a delicate object. Bruno's portfolio reuses the metaphor of a studio table: objects are scattered, you pick them up (hover), examine them (click), move through the space. The metaphor is consistent and physical.

  3. **Ergonomic interactions** — Comfort-centred design. Fitts's Law. Touch targets that exceed 44pt. Radial menus that equalise distance. Bruno extends this to visual ergonomics: warm parchment backgrounds that don't strain, type at readable sizes, mono labels that orient without demanding attention.

  4. **Simulating physics** — This is where Bruno's rawness meets Rauno's precision. Elements have mass. They overshoot. They settle. The cursor follows with lerp (0.15 ease factor), not a CSS transition — it has weight, like dragging a finger through wet ink. Cards snap with spring easing that overshoots — like a rubber stamp pressed too hard and bouncing back. Color bleeds shift on hover as if pressure is being applied. Physics makes the Rauschenberg metaphor physically real, not just visual.

  5. **Motion choreography** — Sequenced, timed animations that tell a story. Scroll reveals are progressive disclosure tied to reading pace. The accent bar sweeps in from the left like a brush stroke — not a fade, a directional gesture. Stagger timing on card reveals creates the feeling of objects being placed on a table one by one.

  6. **Responsive interfaces** — Not just "works on mobile." Responsive means the interaction adapts to context. The cursor disappears on touch devices because it's irrelevant. The grid shifts from asymmetric overlap to a single column stack because the metaphor changes from "table" to "stack of cards in your hand." Animations respect `prefers-reduced-motion` because accessibility is a design decision.

  7. **Contained gestures** — Interactions are localised to their zone. A card's hover effect doesn't leak into adjacent cards. The scroll snap on the sketches strip contains horizontal momentum. Gestures have boundaries — like the edges of a piece of paper.

  8. **Drawing inspiration** — Taste is developed by analysing what makes things feel right. "Analyzing and making sense of design details beyond just 'it feels nice' helps nurture taste." Bruno's entire aesthetic lineage — Rauschenberg, Cieslewicz, punk zines, Arabic calligraphy — is the result of this principle applied rigorously. The Pinterest board isn't mood-boarding; it's research.

- **Rauno's meta-principle: "Code IS the design tool"** — "A lot of the details come to life through actual implementation and consideration of nuances" that static design tools cannot capture. Don't design in Figma and export. Design in the browser. Write the CSS. Tune the spring constants by feel. Throw a random 6px border-radius on something because it feels right. The prototype IS the product. "Build, build, build."

### Secondary Influences
- Matchbox labels, found objects, collage, vintage ticketing, analog printing artifacts
- The materiality of film culture — ticket stubs, lobby cards, Risograph zines, duotone posters
- Steve Jobs-era Apple design philosophy — craft as a gift to humanity, restraint as ambition
- Apple Human Interface Guidelines — native platform conventions, haptic feedback as emotional punctuation
- Vercel / Next.js ecosystem — performance as a design decision, clean deployment, ship with intent

### What This Is NOT
- Clean, safe, template-driven "UX student" work
- Dribbble-polished gradients and glass morphism
- Overly minimal Swiss-grid sterility without warmth
- Trendy dark-mode SaaS aesthetic
- Anything that could have been made by selecting a Squarespace template
- Motion for motion's sake — Rauno warns that high-frequency interactions shouldn't animate because the "cognitive burden" outweighs delight. The rawness is earned through restraint, not excess.

---

## Color System

| Token | Value | Evocation |
|-------|-------|-----------|
| `--bg` | `#F0EDE6` | Warm parchment — not white, the substrate that makes multiply blend modes tint amber |
| `--ink` | `#1A1A1A` | Near-black printing ink on paper — slightly soft, never pure `#000` |
| `--orange` | `#D4622B` | Burnt silkscreen orange — misregistration, heat signal, signature accent |
| `--blue` | `#1B2D4F` | Deep navy — cold authority, rubber stamp pad, offset shadow |
| `--red` | `#C4391D` | Rust accent — interaction signal only, used sparingly |
| `--cream` | `#F5F0E1` | Lighter tonal surface — subtle shift, not contrast |
| `--grey` | `#8A8578` | Warm grey — holds warmth from the parchment palette |

**Rules:**
- Backgrounds are always warm, never cool or pure white
- Black is never pure — always ink-like
- Orange is the signature — it appears in misregistration, accents, hover states, borders
- The palette should evoke: a 1970s design magazine, a Rauschenberg exhibition, a well-used sketchbook, a Risograph zine

---

## Typography

| Role | Font | Weight | Character |
|------|------|--------|-----------|
| Logo | Helvetica Neue | 500 | Confident blankness — unsigned mark, not designed wordmark |
| Headlines | Space Grotesk | 700 | Geometric grotesque with ink traps. Tight tracking (-0.03em), tight leading (<1.0). Poster energy. |
| Body | Inter | 400/500 | Screen-optimised neutral. Stays out of the way. |
| Labels/Mono | JetBrains Mono | 400 | Archival, systematic, technical. Like typed annotations on a physical artifact. |

**Rules:**
- "designedbybruno" is always ONE word, always Helvetica
- Headlines should feel like poster type, not web headings — compress them, track them tight
- Mono text is always uppercase with wide letter-spacing — it's a labelling system
- Captions and metadata use mono at small sizes — archival labels, not decorative text
- Body text can use opacity (0.75) for hierarchy rather than weight changes

---

## Visual Signatures (The Artist's Marks)

### 1. Misregistration Ghost
A duplicate of headline text offset 3-5px in orange at ~8% opacity behind the real text. Simulates a bad silkscreen pass where one color plate didn't align. This is the most distinctive signature mark — uncompromising, raw, immediately identifiable.

### 2. Silkscreen Image Treatment
All images use `mix-blend-mode: multiply` so the parchment background bleeds through, combined with `contrast(1.06) saturate(0.85)` for a faded print look. On hover, full color returns — a reward for attention, not a decoration.

### 3. Color Wash Bleed Blocks
Large semi-transparent rectangles (orange or blue, ~4% opacity) with `mix-blend-mode: multiply`, rotated slightly, positioned partially off-frame. These are Rauschenberg's flat color fields — existing independently of any image, bleeding past the edges of their container like ink that doesn't respect the margin.

### 4. Offset Shadow Blocks
Pseudo-element shadows offset 5-8px from their parent in a contrasting color at very low opacity. A second-pass print color that didn't align. The imperfection is the point.

### 5. Rubber Stamp Section Labels
Mono type, uppercase, wide-tracked, thin border, rotated -0.8deg. Like a stamp not pressed perfectly level. This is how Bruno labels things — with the confidence of a librarian and the imprecision of a human hand.

### 6. Broken Gradient Dividers
CSS linear-gradient lines with deliberate transparent gaps — a brush stroke that ran out of ink, a stamp that missed. The gap is as important as the line.

### 7. Rotation as Character
Nothing sits perfectly level. This is non-negotiable:
- Cards: -0.5deg to 0.7deg (photos pinned to a corkboard)
- Labels: -0.8deg (rubber stamps)
- Sketches: alternating -1.5deg / 1.2deg / -0.8deg (scattered on a table)
- Hover resets to 0deg — the element snaps to attention, like someone straightening up when you walk in

### 8. Asymmetric Overlap
Grids are never perfectly balanced. Use ratios like 1.15fr / 0.85fr. Elements overlap with negative margins. Things cluster like prints on a desk — not items in a grid, but objects with spatial relationships.

### 9. Paper Grain Texture
A subtle noise overlay at ~6% opacity. Just enough to kill the "flat screen" feeling. The screen should feel like a material, not a void.

---

## Interaction Craft (The Engineer's Hand)

This section defines how interactions are conceived and built. Every principle from Rauno's Devouring Details is filtered through Bruno's raw aesthetic — physics that feel like real materials, not clean digital abstractions.

### The Studio Table Metaphor
The site should feel like walking into a working design studio. Objects are laid out on a surface, some overlapping, some rotated, all real. You pick things up (hover), examine them (click), and move through the space. This is the master interaction metaphor — all gestures, transitions, and states should reinforce it.

### Cursor as Presence
- 12px circle with `mix-blend-mode: difference` — inverts whatever is beneath it, like a magnifying glass made of negative space
- Expands to 40px and turns orange on interactive elements — it already knows you're approaching, inferring intent before the click
- Follows with lerp-based spring (ease: 0.15) — physically weighted, like dragging a fingertip through wet ink
- Hidden on touch devices — respecting the platform, not forcing a metaphor where it doesn't belong

### Physics as Material
Everything has mass. Nothing teleports.
- Spring easing `cubic-bezier(0.34, 1.56, 0.64, 1)` — overshoot, like a rubber stamp snap-back or a card dropped onto a table
- The cursor's lerp follow creates momentum and drag — it trails behind your mouse, arrives with a settle
- Color bleeds intensify and shift on hover (opacity increases, slight translate) — as if pressure is being applied to a print plate
- Image desaturation lifts on hover — the silkscreen washes away to reveal the photograph underneath, like rubbing ink off a surface
- Accent bars sweep in from the left with spring easing — a directional gesture, a brush stroke, not a fade

### Interruptibility & Responsiveness
Interactions must be immediately responsive. Following Rauno's principle: scale deltas apply instantly, animation triggers past a threshold. Nothing waits. Nothing queues.
- Hover states respond within one frame
- Scroll reveals trigger the moment content enters the viewport — no delay, no "scroll further to see"
- Page transitions use the browser's native View Transitions API — zero-lag, hardware-accelerated

### Motion Choreography
Motion tells a story. It has sequence, rhythm, and pause.
- Scroll reveals stagger per-element — objects settle onto the table one by one, not all at once
- The accent bar sweep and the color bleed intensification happen on different timing — layered, like two print passes at different speeds
- High-frequency interactions (nav clicks, back button) do NOT animate — following Rauno's principle that cognitive burden outweighs delight for common actions
- The about page shader runs continuously — ambient motion that rewards lingering, like watching light move across a wall

### Fidgetability
The best interactions reward casual manipulation — Rauno's "AirPods case" principle. Bruno's portfolio has this:
- The cursor itself is fidgetable — users move their mouse just to watch it trail and settle
- The sketches strip invites horizontal drag — casual exploration, not goal-driven navigation
- Card hover rotations snap satisfyingly — you hover and unhover just to feel the spring

### Contained Gestures
Interactions are localised. A card's hover doesn't leak into its neighbour. The sketches strip's horizontal scroll doesn't interfere with vertical page scroll. Gestures have edges — like the borders of a piece of paper, like the frame of a print.

### Progressive Disclosure
Content reveals itself at reading pace, not all at once. Scroll-driven reveals are not decoration — they are information architecture expressed through time. The user discovers the argument as they read, not before.

---

## Architectural Thinking (The Architect's Mind)

### Systems Before Screens
Never start with a screen. Start with a systems interaction map. Map the total ecosystem — users, platforms, partners, touchpoints, emotional states, behavioural patterns. The architecture determines the experience; the screens are just windows into it.

### Theory as Material
Behavioural psychology (Self-Perception Theory, Dissonance Theory) is not a reference — it is a design input with the same weight as a color choice or a type decision. If the system can make someone act like a cinephile, they begin to believe they are one. This is not naive optimism; it is using psychology as a structural constraint.

### The Modified Double Diamond
Every project follows this structure, but it is not linear. It is recursive, with constant feedback loops:

1. **The Problem (Cultural, not just usability)** — Frame the problem as a systemic or cultural gap. Name who is harmed and what is at stake. The opportunity is to reinvent a behaviour or ritual, not fix a button.

2. **Discover (Theory First)** — Open with the academic or conceptual framework before methods. Theory is the architecture that all decisions justify themselves against. Embed primary evidence (PDFs, academic papers) directly — evidence over assertion.

3. **Define (Systems, not features)** — Map the total ecosystem. Show systems interaction maps as primary artifacts. Features emerge from the architecture, not the other way around.

4. **Develop (Iterative, with evidence)** — Show the full cycle: sketching, wireframing, prototyping, testing. Document the testing protocol in scientific terms (within-subjects, between-subjects). The graphic design work — the visual identity of the documentation — IS part of the design output.

5. **Deliver (Engineering as design)** — Technical decisions are framed in design terms: modularity, tactility, restraint. Show the code and the build errors. Engineering is not a separate phase; it is a design discipline.

6. **Reflect (Honest, not polished)** — Show the broken process alongside the clean output. The chaotic double diamonds. The Xcode error screens. End with honesty about what was learned. The rough edges of the process are as important as the rough edges of the visual identity.

---

## The About Page Principle

The most uncompromising expression of identity: just the name on a generative WebGL shader. No nav, no bio, no footer, no social links. Pure intrigue. The about page is a statement, not a summary. It says: "I am confident enough to show you nothing and trust you'll want to see more."

This principle extends to everything: when in doubt, remove. The gap in the divider is as important as the line. The silence around the logo is as important as the logo. The empty space is authored, not accidental.

---

## Design Principles (Summary)

1. **Artist, Architect, Engineer** — Every decision should reflect all three. The visual must be expressive, the structure must be rigorous, the implementation must be hand-built in code.
2. **Print, don't display** — Everything should look screenprinted onto warm paper, not rendered on a screen.
3. **Tension is identity** — Analog warmth + digital precision. Never resolve this tension; exploit it. The rough edges are the point.
4. **Physics, not transitions** — Elements have mass, momentum, and material. Springs overshoot. Cursors trail. Color bleeds shift under pressure. Nothing teleports. (Freiberg/Devouring Details standard)
5. **Infer intent** — The interface should understand what the user wants before they finish asking. The cursor expands before the click. The reveal triggers at the moment of arrival. (Devouring Details: Principle 1)
6. **Theory is material** — Behavioural science, SPT, systems thinking are design inputs with the same weight as color and type.
7. **Rotate everything** — Nothing sits perfectly level. Imperfection is authored, not accidental. The flair is in the 0.7 degrees.
8. **Reward attention** — Full color, alignment, and detail reveal themselves on hover and scroll. The silkscreen lifts. The card snaps to attention. Fidgetability is a feature.
9. **Build the thing** — Don't mock it up and hand it off. Write the SwiftUI. Write the shader. Tune the spring constants by feel. The design IS the code. (Freiberg: "Build, build, build.")
10. **As little design as possible** — Every interaction must earn its existence. High-frequency actions don't animate. Raw complexity is permitted only when the underlying logic is simple. (Rams standard)
11. **Evidence over assertion** — Embed primary sources. Show the testing protocol. Include the build errors. The rough process is as important as the polished output.
12. **Structure beneath scatter** — Rigorous token systems and spacing scales serve deliberately disordered presentation. The chaos is computed.
13. **Silence speaks** — The about page has one word. The dividers have gaps. Restraint is the strongest signal of confidence.
14. **Respect the platform** — Use native APIs (View Transitions, SwiftUI, EventKit, haptics), not library abstractions. Performance, accessibility, and reduced-motion support are non-negotiable.
15. **The work is the studio** — The portfolio should feel like the space where the work was made — raw, lived-in, uncompromising — not a showroom where it's displayed.

---

## Technical Defaults

When building for Bruno:
- **Stack**: Vanilla HTML/CSS/JS, no build step, GSAP for animation. SwiftUI for native iOS.
- **Fonts**: Google Fonts (Space Grotesk, Inter, JetBrains Mono) + system Helvetica
- **Images**: `mix-blend-mode: multiply`, desaturated, with offset shadow pseudo-elements
- **Layout**: CSS Grid with asymmetric columns, negative margin overlaps
- **Motion**: GSAP + ScrollTrigger, spring easing, lerp cursor. Physics first, duration second.
- **Shaders**: WebGL2 for generative backgrounds — the rendering engine as a creative tool
- **Deploy**: Vercel with clean URLs
- **Accessibility**: Designed in, not layered on. `prefers-reduced-motion` respected. WCAG contrast. 44pt touch targets. VoiceOver labels. Dynamic Type support on native.
- **Performance**: Lazy load below-fold. Compress images. Font preconnects. `will-change` only where measured. Ship less JavaScript. Performance is craft.
