# Portfolio Features & Design Philosophy

This portfolio is designed as a **"Public README.md"**, focusing on engineering maturity and systems-level thinking over visual flair.

## 1. Design Philosophy
- **Systems > Syntax:** The aesthetic reflects a preference for function and reliability.
- **Minimalist Aesthetic:** 
    - Monochrome palette (Black/White/Gray).
    - Single Monospaced typeface (Geist Mono) for a "terminal" or "technical doc" feel.
    - Zero animations, shadows, or cards.
    - High whitespace to prioritize readability.
- **Content-First:** No "marketing" language; instead, it uses factual, builder-centric writeups.

## 2. Core Sections
### Hero
- A 5-line maximum introduction that is truthful and specific.
- Focuses on current obsession (databases, distributed systems) and long-term ambition.

### "Now" Section
- Makes the site feel alive by showing real-time focus.
- Includes location, current engineering goal, learning path, and personal training.

### Projects (Builder Style)
- Replaces screenshots with structured engineering deep-dives:
    - **What it is:** One-line explanation.
    - **Why I built it:** The problem-solving context.
    - **Interesting bits:** Tech choices, scale constraints, and what broke during development.

### Engineering Beliefs
- A list of opinionated principles (e.g., "I prefer boring tech at scale", "I don't trust systems I can't explain").

### Roadmap (Quests)
- A transparent timeline of future goals for 2025–2026, showing intentional growth rather than random learning.

## 3. Technical Implementation
- **Framework:** Next.js 15+ (App Router).
- **Styling:** Tailwind CSS with a custom monochrome theme.
- **Typography:** Geist Mono (via `next/font`).
- **Deployment Ready:** Optimized for Vercel with static site generation (SSG).
- **Resume Integration:** Directly linked PDF hosted in the `/public` directory.

## 4. Maintenance
- To update content, edit `src/app/page.tsx`.
- To update the resume, replace `public/resume.pdf` with a newer version.
