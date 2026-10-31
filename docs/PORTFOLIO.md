# Portfolio Rebuild — Build Notes

**Project:** Darshan H R — interactive 3D portfolio
**Date:** 2026-10-31
**Reference:** [Sushmitadasari/Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series.git) (Netflix-style "series" portfolio)
**Live:** https://darshan-portfolio-in472ewssev.qoder.website

---

## 1. What was extracted from the reference

I cloned the reference repo and read its data model, hero, and section components. The useful ideas — not the Netflix branding — were:

| Extracted idea | How it was adapted |
| --- | --- |
| **Single data file as source of truth** (`src/data/portfolio.ts`) | Rebuilt as [`src/data/profile.js`](../src/data/profile.js) — every section reads from it |
| **3D-tilt portrait hero** with rim light, pointer parallax and floating glass chips | New `hero-portrait` panel in [`Hero.jsx`](../src/components/Hero.jsx), driven by the existing `.tilt` pointer engine |
| **Project "Originals" with detail overlay** (`ProjectModal`) | Case-study modal in [`ProjectModal.jsx`](../src/components/ProjectModal.jsx) with overview, build notes, features and links |
| **Achievements + certifications rail** | Achievements section in [`Achievements.jsx`](../src/components/Achievements.jsx) |
| **Resume viewer/download** (`ResumeModal`) | Print-to-PDF resume generated from the data file in [`ResumeModal.jsx`](../src/components/ResumeModal.jsx) |
| **Seasons/episodes journey** | Kept the existing timeline Journey, but now data-driven and split into Education + Experience |
| **Section meta + nav order** | Adapted as `navLinks` in the data file; Achievements added to navigation |

Not copied: the Netflix red/black theme, opening sequence, profile selector, custom cursor, and Tailwind/TypeScript stack — this project keeps its own Vite + React 19 + Three.js + cobalt/lime design system.

## 2. Reshaped into a standard profile

The information architecture now follows the standard recruiter-friendly order:

1. **Hero** — name, role, availability, 3D scene, 3D portrait panel, resume CTA
2. **About** — story, photo, live counters (projects / technologies / DSA)
3. **Skills** — 6 categorized groups + scrolling marquee
4. **Projects** — 4 cards, each opening a case-study modal
5. **Achievements** — hackathon, leadership, DSA practice, shipped projects
6. **Journey** — education and experience timelines
7. **Contact** — email, phone, location, socials, message form
8. **Resume** — overlay available from the navbar, hero, and mobile menu

## 3. New items added (and why they matter)

- **Achievements section** — recruiters scan for proof, not adjectives; hackathon/leadership cards give quick evidence.
- **Case-study modals** — each project now has overview + "what I built" + features + source/live links, instead of a single paragraph.
- **Resume viewer with Download PDF** — uses `window.print()` and dedicated `@media print` styles, so the page exports a clean one-document resume without a separate file to keep in sync.
- **Availability status pill** — "Open to internships & freelance" in the hero.
- **3D portrait panel** — floating stat chips (B.E. CSE, 500+ DSA, 15+ projects) add the "3D image" treatment from the reference.
- **Skill categories expanded** — added Backend & Data, CS Fundamentals and Currently Exploring.

## 4. Architecture

```
src/
├── data/profile.js          # single source of truth (profile, education, experience,
│                            # projects, achievements, skills, stats, nav)
├── App.jsx                  # section order + modal state + scroll/tilt/reveal effects
└── components/
    ├── Navbar.jsx           # data-driven links + Resume CTA
    ├── Hero.jsx             # typewriter, 3D scene, 3D portrait, chips
    ├── Scene3D.jsx          # R3F scene (recolored to cobalt/lime)
    ├── About.jsx            # story + animated counters
    ├── Skills.jsx           # marquee + 6 categories
    ├── Projects.jsx         # cards -> case study modal
    ├── ProjectModal.jsx     # NEW
    ├── Achievements.jsx     # NEW
    ├── Journey.jsx          # education + experience timelines
    ├── ResumeModal.jsx      # NEW — printable resume
    ├── Contact.jsx          # contact details + mailto form
    └── Footer.jsx
```

**Update workflow:** change a fact once in `src/data/profile.js` and the hero, about, resume, contact and footer all follow.

## 5. Design system (unchanged theme)

- Base: midnight black `#04060e`
- Primary: electric cobalt `#2f66ff`, ice blue `#7db4ff`
- Accent: acid lime `#d4ff00`
- Effects: aurora blobs, perspective grid floor, conic-border glass cards, pointer-driven 3D tilt, holographic gradient text, film grain
- No CRT scanlines (removed on request)

## 6. Verification

- `npm run build` — passes (Vite 8 / Rolldown)
- Headless Chrome (1440×950) screenshots of hero, achievements, project modal, resume — all render correctly
- Zero console/page errors during automated interaction run
- Interactions checked: project case-study modal opens/closes, resume modal opens, Escape/overlay close, navbar links, mobile hamburger menu

## 7. Build & run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

Deployed as a Qoder Site (public) and mirrored on GitHub:
https://github.com/darshanhr429-collab/darshan.dev

## 8. Content notes / placeholders

The following were already present in the site content and are kept verbatim — replace them with exact details when available:

- College name: “Engineering College, India”
- Internship: “Tech Startup (Remote)”
- Project links currently point to the GitHub profile (`darshanhr429-collab`) rather than individual repos
- No certifications are listed because none were provided — add them to `profile.js` if desired
