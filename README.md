# rahhalesta.com

Ibrahim Rahhal's portfolio: a dark, cinematic single page. Now (Corgea), Before (Wiley), The shift, Code, Notes, Contact. Built on the Rahhalesta Design System (https://claude.ai/artifact/1AN164iEhZ7EMPtWrDDQu4), Night theme by default.

## Run

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`, deployable to any static host.

## Where things live

- `src/content.js` — every word on the page: hero, stats, sites, shift lines, repos, posts, links. Edit copy here.
- `src/sections.jsx` — Hero, Now, Before (Wiley, with the team block), Shift, Ventures (Bit wa Byte, Leasifier), Photos, Code, Notes, Contact.
- `src/components/index.jsx` — the design system components ported to JSX.
- `src/components/cinematic.jsx` — the Scanner hero canvas, parallax Showcase frames, Lightbox viewer, Counter, Magnetic buttons, numeral SectionHead.
- `public/shots/` — screenshots shown in the Showcase frames (`pentest.jpg`, `corgea.jpg`, `science.jpg`, `asm.jpg`, `csp.jpg`; `pnas.jpg` falls back to a wordmark card until added). Science and ASM come from 2022 Internet Archive snapshots; replace with fresh captures when you have access.
- `public/story/` — team and podcast photos; `public/photos/` — travel photography (resized to 1080 wide).
- Dev aid: `/?shot=before` jumps to a section on load, for headless screenshots.
- `src/styles/tokens.css` — compiled from the design system's `tokens.json`; `components.css` is its bundle stylesheet; `site.css` is page layout only.
- `src/hooks.js` — reveal-on-scroll, scroll progress, active section, theme.

## Before launch

- Add `public/shots/pnas.jpg` (1440 wide, 16:10 or taller).
- Add the Bit wa Byte podcast URL (`ventures.podcast.site.url` in `src/content.js`).
- Point `links.resume`, `links.email` and the post hrefs at real destinations.
- Check Chapter two dates against the Corgea launches.
