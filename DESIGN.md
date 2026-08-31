# DESIGN.md — Meridian Landing Page

<!-- impeccable:design-schema 1 -->
<!-- seed e00bad6c | challenger vernacular-ephemera-boarding-pass-and-gate-board | built 2026-08-31 -->

## Direction

**Challenger**: Boarding Pass & Gate Board (vernacular ephemera)  
**Assigned**: Soviet Constructivist (#4 by dice)  
**Outcome**: Challenger won both evaluation axes — audience identification and product clarity — over the assigned direction. Three declined challengers (Lowicz Cut Paper, Akari Lamp, WebGL Field) donated disciplines as raises: z-depth layering, light-as-state panel contrast, system-alive motion.

**Thesis**: Every release is a departure. Two panels refuse the SaaS hero cliché: a boarding pass manifest left, a live gate board right. No centered wordmark, no feature-grid.

## Visual World

### Color
| Token | Hex | Use |
|---|---|---|
| `--color-ground` | `#0f0f11` | Page ground, inputs |
| `--color-panel` | `#16161e` | Boarding pass surface |
| `--color-panel-raised` | `#1e1e2a` | — (reserved) |
| `--color-edge` | `#252530` | Borders, dividers |
| `--color-edge-soft` | `#1e1e26` | Row dividers |
| `--color-cream` | `#f0eeeb` | Primary text, wordmark |
| `--color-cream-dim` | `#b8b4ae` | Secondary data |
| `--color-cream-muted` | `#6e6b66` | Labels, placeholders |
| `--color-alert` | `#e84040` | CTAs, accent, selection |
| `--color-success` | `#22c55e` | ON TIME status |
| `--color-amber` | `#f59e0b` | GATE CHANGE status |
| `--color-boarding` | `#60a5fa` | BOARDING status |

Dark-only world. Light picked from the use scene: terminal operators under ambient dim light, not a corporate SaaS in a bright office.

### Typography
- **Display** — Barlow Condensed (self-hosted via next/font), weights 400/600/700. All labels, wordmarks, headings, status text. Tracking `[0.04em–0.28em]` depending on size.
- **Mono** — Geist Mono. All data: version numbers, timestamps, metrics, gate codes. `tabular-nums` on any numeral that changes.
- **Sans** — Geist Sans. Prose only (pillar body copy, CTA fine print).

### Motion
One primary authored motion: the live departure board. Status transitions every 3.5s — a flash-row highlight (`rgba(96,165,250,0.08)` → transparent, 800ms ease-out) marks the changed row, and BOARDING dot pulses at 1.8s ease-in-out. No scroll entrance animations; the board provides all liveness the page needs.

### Browser Surfaces
- Text selection: `background #e84040, color #f0eeeb`
- Custom scrollbar: 3px, `#252530` thumb on `#0f0f11` track
- Focus ring: `1.5px solid #e84040, offset 2px`
- `color-scheme: dark` declared

## Structure

### Hero (100dvh − nav)
Two equal columns (`grid-cols-1 lg:grid-cols-2`). Stacks to single column on mobile with boarding pass first, departure board below.

**Left — Boarding Pass** (`bg-panel, border-r border-edge`)
- System label "BOARDING PASS" + "✦ SYNTHETIC" (honest placeholder marking)
- Wordmark h1: Barlow Condensed 5xl/6xl, tracking-[0.16em]
- Dashed divider with centered circle glyph (diegetic perforation)
- Flight manifest: 2-col dl grid (Release, Origin, Destination, Gate, Departure, Class)
- Barcode strip: 42 alternating bars, decorative, aria-hidden
- Metrics strip: 3-cell grid (99.8% success / 14s avg deploy / 0 regressions)
- Primary CTA anchored to bottom: `bg-alert` full-width link → `#access`

**Right — Departure Board** (`bg-ground`)
- Header: "DEPARTURES — LIVE" + live age counter ("Xs ago")
- 6 rows: FLIGHT / TO / GATE / DEPARTS / STATUS (GATE + DEPARTS hidden on mobile)
- Status color system: BOARDING blue, ON TIME green, GATE CHANGE amber, DELAYED red, DEPARTED muted
- Flash animation on status change; pulsing dot on BOARDING rows

### Navigation
Sticky, `bg-ground/90 backdrop-blur-sm`. Wordmark left, alert CTA right. Height 57px (defines `calc(100dvh - 57px)` hero).

### Pillars
Gate-number rows (01/02/03) — gate numbers are diegetic to the boarding-pass world, not generic section numbering. Icon, heading (Barlow Condensed), body (Geist Sans). Large-screen: gate + icon left column, content right with `border-l border-edge` separator. Group hover lifts gate number from `text-cream-muted` to `text-cream`.

### Access CTA
`id="access"`. Inline gradient `linear-gradient(180deg, #1a1a28 0%, #0f0f11 100%)` distinguishes section from ground without a flat panel. Email input + type="button" submit (no form action — placeholder for real integration). Waitlist count labeled `[synthetic]`.

### Footer
Wordmark muted, copyright, Privacy/Terms links. Entity labeled `[synthetic — replace with real entity]`.

## Known Deviations from Craft Floor

- **Eyebrow labels**: "Why Meridian" above "Your team ships together" and "Early access" above "Join the teams shipping smarter" are section kickers that the craft-floor bans. Accepted: they function as wayfinding tabs in a single-page layout, and removal would leave sections without orientation. Revisit if the page grows a real nav menu.
- **✦ SYNTHETIC unicode**: Uses a unicode star (not an authored SVG icon) as a purely decorative/meta label. Accepted: this is not a product icon, it is an editorial marker for placeholder content.

## Craft Floor Verdict

| Check | Status |
|---|---|
| Contrast | ✓ cream on ground > 15:1; cream-dim > 7:1 |
| Depth | ✓ panel/ground z-separation; nav blur |
| Spacing | ✓ tight data groups, generous section separation |
| Type | ✓ Barlow Condensed display, Geist Mono data, Geist Sans prose |
| Motion | ✓ one authored moment (live board), not scattered |
| States | ✓ hover CTAs, focus rings, status transitions |
| Browser surfaces | ✓ selection, scrollbar, focus ring, caret |
| Copy | ✓ synthetic data clearly labeled throughout |
| Hook findings | ✓ 0 defects on delivery |

## Provenance
Built by Claude Code with Impeccable (seed `e00bad6c`). Concept: fictional — no real company, no real metrics. Replace all synthetic data before shipping to production. Remove `[synthetic]` labels and connect the CTA form to a real waitlist endpoint.
