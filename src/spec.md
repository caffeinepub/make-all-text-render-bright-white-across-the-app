# Specification

## Summary
**Goal:** Ensure all text across the app renders as bright white in all modes and states.

**Planned changes:**
- Update global theme text color tokens so all theme-driven text utilities (e.g., `text-foreground`, `text-muted-foreground`, and other `*-foreground` variants) render as bright/pure white across the UI.
- Audit components/pages to replace any hard-coded non-white Tailwind text color utilities with bright white equivalents, including footer attribution and ensuring link/hover states remain readable without introducing non-white text.

**User-visible outcome:** All app text (including muted text, component foreground variants, footer attribution, and link states) displays as consistently bright white, with no gray/green-tinted or other non-white text anywhere.
