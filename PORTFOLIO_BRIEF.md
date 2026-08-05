# Portfolio Site Rebuild: Brief for Claude Code

**Owner:** Eric Delafosse
**Repo:** portfolio-project (React 18 + Vite + Tailwind)
**Status:** PRD approved by Eric. Approved to execute Phases 1 through 5.
**Date:** July 2026

---

## How to use this document

Paste or reference this file at the start of a Claude Code session in the portfolio repo root. It contains the full diagnosis, design direction, approved content, and a phased build plan. Work through phases in order. Stop at the checkpoints marked **STOP AND SHOW ERIC**.

Eric's working rules that apply here:
- Do not fabricate specifics about his history, employers, metrics, or projects. Anything not in this file gets a `[TK]` marker and a direct question, not a plausible guess.
- Show reasoning and discarded options, not just conclusions.
- Bad news early, not buried at the end.
- No em dashes in any copy written as him or for the site.
- Anything published publicly under his name gets shown verbatim before it ships.

---

## 1. Problem

The site is a default Vite + Tailwind starter with tab-click navigation. It reads as an unfinished tutorial project rather than the portfolio of someone with five-plus years of operations experience and real automation wins.

Diagnosis from reading the source, concrete rather than vibes:

| Issue | Evidence | Severity |
|---|---|---|
| No design system | `tailwind.config.js` has `theme.extend: {}` empty. `index.css` is only the three stock `@tailwind` directives. Every color is default Tailwind palette. | High: root cause of the generic feel |
| Templated aesthetic | Blue-to-purple gradients plus `backdrop-blur` cards is the single most recognizable AI-demo-site look in circulation. Reads as templated because it structurally is. | High |
| Placeholder project content | Projects section lists "E-commerce Platform" and "Weather App", generic tutorial projects. None of Eric's real work appears. | High: biggest credibility gap |
| Components defined inside render | `FadeInSection`, `NavButton`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ContactSection` are all declared inside the `Portfolio` function body. React recreates them every render. Breaks memoization, causes state and focus bugs. | High: real bug, not just style |
| Broken JSX | In `ContactSection`, the opening `<a` tag is missing. The map returns `href={...}` as a bare attribute with a closing `</a>`. **This file does not compile as written.** | Blocker |
| Syntax and data errors | Phone contact uses the `Camera` icon from lucide-react. GitHub link is literally `github.com/yourusername`. | Medium |
| Overstated skills | Lists React, JavaScript, HTML/CSS as "Advanced" and Node.js, Python as "Intermediate". Conflicts with Eric's own notes where Python, SQL, and JS are all listed as actively learning and his heavy-use tools are Excel, Sheets, Amplitude, Miro, Jira. | Medium: credibility risk in interviews |
| Tab state, not routes | `activeSection` is local state. No shareable URL per section, no back button. | Low: accepted, see decisions |
| Stock metadata | `index.html` title is "Vite + React", favicon is `vite.svg`. README is the unedited Vite template. | Medium |

**Note the blocker:** the version of `Portfolio.jsx` supplied is missing an opening `<a` tag in `ContactSection`. Confirm against the working copy in the repo before assuming the live file is broken. It may be a copy-paste artifact from how the file was shared. If the repo copy is genuinely broken, fix it first so `npm run dev` runs before starting any refactor.

---

## 2. Success criteria

1. The site has a distinct visual identity that does not use the default Tailwind palette.
2. Real project and work content replaces all placeholder content.
3. Contact information is accurate, intentional, and does not expose the phone number.
4. Component structure is broken into real files. No component is defined inside another component's render body.
5. Skills content is defensible in an interview: it matches what Eric can actually do.
6. `npm run build` succeeds and `npm run lint` passes clean.
7. Site is responsive and legible at 375px, 768px, and 1440px widths.

---

## 3. Scope

**In scope**
- Component refactor into a real file structure
- Content data extracted to a separate data module
- Visual redesign: custom color, typography, spacing, and motion tokens
- Framer Motion for section transitions and scroll reveals
- Type-led hero section (no photo, see section 5)
- A flip-card interaction somewhere in the mid-page
- Real project content
- Accurate contact and skills content
- Metadata, favicon, README cleanup
- Accessibility basics: contrast, focus states, reduced-motion support

**Explicitly out of scope for this pass**
- Backend or CMS of any kind
- Integrating the fosseeboss newsletter feed into the site
- End-to-end or unit test infrastructure
- Deployment configuration and hosting setup (Eric is leaning GitHub Pages, tabled deliberately for a later conversation)
- Switching from tab state to react-router

---

## 4. Constraints

- Eric is mid-upskilling on React and JavaScript. Favor readable code over clever code. Comment anything non-obvious, especially the Framer Motion variants.
- Deploy target will be a static host, likely GitHub Pages. Do not introduce anything requiring a server runtime.
- Keep the dependency count low. Framer Motion is the one approved addition. Do not add a UI component library, an icon library beyond the existing lucide-react, or a CSS-in-JS solution.
- Tailwind v3.4 and Vite 6 are already in place. Stay on them, do not upgrade as part of this work.

---

## 5. Design direction

**Reference sites Eric provided:** lotuscars.com, 9to5studio.it, mersi-architecture.com, commarts.com, netflix.com, darknode.com

**His words:** "creative agency with class", "futuristic, or smoothly modern", "a super trustworthy little tech diamond in the rough"

**Shared DNA across those references, which is what to actually build toward:**

- Dark or moody base, not white-background-with-colored-cards
- Oversized editorial typography. Type is the primary design element, not decoration around cards
- Large hero moment given room to breathe (type-led, not a photo — see the hero spec below)
- Generous negative space. Content is not packed edge to edge
- Motion is scroll-triggered and smooth, revealing content rather than swapping it instantly
- Restrained palette. Typically a dark base, an off-white, and one accent color used sparingly

**Direction to implement:**

- **Base:** dark-first. Near-black background, not pure `#000`. Something in the `#0A0A0B` to `#111113` range reads richer.
- **Text:** warm off-white for primary, a muted gray for secondary. Avoid pure white on pure black, it vibrates.
- **Accent:** exactly one. Pick something that is not blue or purple, since escaping the default look is the entire point. An electric lime, warm amber, or a sharp cyan all work against near-black. Choose one and use it for interactive states, key figures, and nothing else.
- **Type:** a strong display face for headings at large sizes, with a clean sans for body. Use variable fonts loaded locally or via a single font CDN call. Headings should feel oversized relative to what a default Tailwind site does: think `clamp()` sizing that scales genuinely large on desktop.
- **Motion:** scroll-triggered reveals via Framer Motion's `whileInView`. Section transitions on tab change should be a coordinated exit and enter, not an instant swap. Respect `prefers-reduced-motion` and disable transforms when it is set.
- **Layout:** single continuous page that scrolls. Tabs act as scene changes within the flow rather than as separate destinations.

**Discarded alternatives, so the reasoning is visible:**
- *Light editorial, Comm Arts style:* achievable but harder to make feel distinct, and five of six reference sites are dark. Dark is the safer read of what Eric responded to.
- *Full-page scroll-jacking, Lotus style:* looks impressive, but it fights accessibility, breaks on mobile, and is a large time investment for a site whose job is to get read quickly by a recruiter. Not worth it here.
- *react-router for real URLs:* better for shareable deep links, but Eric explicitly chose to keep tabs. Noted as a possible later upgrade, not built now.

**Interaction Eric specifically asked for:** a flip-card or flip-corner feature mid-page. Recommended placement is the Projects section: card front shows the project title and a one-line outcome, back shows the detail and the tools used. Implement with CSS `transform-style: preserve-3d` plus `rotateY`, triggered on click rather than hover so it works on touch devices. Make sure the back face is not reachable by screen readers or keyboard tab order while hidden.

---

## 6. Approved content

Everything in this section was reviewed and approved by Eric. Use it as written unless marked `[TK]`.

### Identity

```
Name:     Eric Delafosse
Title:    Business Operations Analyst
Email:    eric.s.delafosse@gmail.com
LinkedIn: linkedin.com/in/eric-delafosse
GitHub:   github.com/edelafosse16
Phone:    REMOVED. Do not include a phone number or any tel: link anywhere on the site.
```

### About copy

Eric's existing About copy is good and largely keeps its voice. The only required change is anonymizing the employer. Use this version:

> I'm a business analyst who turns operational chaos into measurable wins. In my last role at a major sports betting and daily fantasy platform, I cut operational incidents by 60%, eliminated over a thousand hours of manual work through automation, and delivered more than $1M in process improvements. My sweet spot is building self-service frameworks that let teams solve their own problems.
>
> I worked across fantasy, sportsbook, casino, racing, and prediction products, which taught me that every operation has its own weird edge cases. I like finding them, fixing them, and writing the playbook so it doesn't happen again.
>
> Before operations, I was a tax accountant at a small firm, which is where I picked up the habit of triple-checking the numbers before presenting them.
>
> If your team needs someone who can dig into messy operational data, spot the patterns that matter, and build strategic solutions that actually stick, I'd love to help.

**Two things to flag to Eric, do not resolve silently:**

1. **The anonymization is thin.** The site links to his LinkedIn, which names FanDuel directly. Anyone who clicks through connects the dots in one step. This is a reasonable fig leaf that avoids putting the employer name next to specific internal figures in indexable text, which is the actual risk being managed, but it is not real anonymity. Eric should know that is the tradeoff he approved.
2. **There is a metrics conflict in the source material.** His personal notes say "600+ hours/year saved through automation". The existing site copy says "1,100+ hours of manual work". These may be measuring different things, per-year versus cumulative, but they are not the same number. The copy above says "over a thousand hours" which follows the site version. **Ask Eric which figure is correct before this ships.** Do not average them or pick one to be safe.

### Skills

Replace the current React-Advanced framing entirely. Approved structure, two tiers:

**Core toolkit** (daily-driver, defensible in depth)
- Excel and Google Sheets: advanced modeling, pivots, lookups
- Amplitude: product analytics and cohort analysis
- Jira: workflow and ticket operations
- Miro: process mapping and design
- Process design, incident reduction, operational reporting, workflow automation

**Actively building**
- Python for data analysis: pandas, matplotlib, seaborn
- SQL
- JavaScript and React

`[TK]` Eric to confirm the exact wording and whether "Actively building" is the label he wants, versus something like "Currently learning" or "In progress". The framing matters: it should read as momentum rather than as a gap.

### Projects

Placeholder projects ("E-commerce Platform", "Weather App") are deleted entirely, not edited.

Real projects to feature. **Only the shape is specified here. Do not write the descriptive copy from imagination.** Each needs detail from Eric before it is final.

1. **Cohort-targeting tool** (professional, anonymized)
   Self-service framework that let operations teams target affected user cohorts during site-wide incidents rather than escalating each one manually.
   `[TK]` Eric: the original copy cited "$250 to 750K saved per site-wide incident". That is a specific internal figure. Recommend either rounding hard to "hundreds of thousands per major incident" or dropping the figure and describing the mechanism instead. Which do you want?

2. **Stock screener** (personal, technical)
   Google Sheets screener implementing a buy-the-dip-in-an-uptrend strategy. Rules-based entries and exits with a market regime filter. Currently live-testing with small capital.
   `[TK]` Eric: are you comfortable publishing the strategy parameters, the 3% stop loss and 5% target and SPY regime gate, or keep it at the level of description above?

3. **fosseeboss** (personal, creative)
   Self-published sports and entertainment newsletter. Game breakdowns, narrative, and stats worth arguing about.
   `[TK]` Eric: link to it from the site, yes or no? It is a different register from the ops material. It shows range and writing ability, which is genuinely useful, but it is a judgment call about whether you want a hiring manager reading it.

4. **This portfolio site** (personal, technical)
   React, Vite, Tailwind, Framer Motion. Built as part of deliberate upskilling.
   Recommended as the lowest-risk fourth item: it is self-evidently real, it is the thing the viewer is already looking at, and it demonstrates the learning claim in the Skills section rather than just asserting it.

**Hero: type-led, no photo.** Revised 2026-08-03 — Eric decided against a photo. The hero is full viewport height, name set very large with `clamp()`, title and one positioning line underneath in muted text. One abstract CSS background visual: a single heavily-blurred accent-colored shape, off-center (chosen over a gradient mesh, a dot/line grid with parallax, or a grain texture — simplest to execute well, cheapest to keep performant, and reads as restrained rather than showy). Staggered entrance reveal, under a second total, degrading to a static state under `prefers-reduced-motion`. No `<img>` tag anywhere in the hero.

---

## 7. Build plan

### Phase 1: Structure and correctness

No visual changes in this phase. The goal is a clean foundation and a site that still looks identical when it is done, so any visual change in later phases is unambiguous.

1. Verify `npm run dev` works. If `ContactSection` is genuinely missing its opening `<a` tag in the repo, fix that first.
2. Commit current state to git before touching anything, so there is a clean rollback point.
3. Create the structure:

```
src/
  components/
    ui/            FadeIn, FlipCard, NavButton, and other primitives
    layout/        Header, Nav, Footer
  sections/        About, Skills, Projects, Contact
  data/
    personalInfo.js
  hooks/
    useScrolled.js
  App.jsx
  main.jsx
  index.css
```

4. Move every component out of the `Portfolio` function body into its own file. This is the fix for the recreate-on-every-render bug.
5. Move the `personalInfo` object into `src/data/personalInfo.js` and export it. Content edits should never require touching a component file again.
6. Replace the deprecated `FadeInSection.defaultProps` with a default parameter value. `defaultProps` on function components is deprecated in React 18 and removed in 19.
7. Fix the `Camera` icon on the phone contact. It becomes moot once the phone is removed, but do not leave it in place in the interim.
8. Run `npm run lint`, fix everything it reports.

**Checkpoint: commit. Confirm the site still renders and behaves identically.**

### Phase 2: Content

1. Apply all approved content from section 6 above.
2. Remove the phone number and its `tel:` link entirely.
3. Update GitHub to `github.com/edelafosse16` and LinkedIn to `linkedin.com/in/eric-delafosse`.
4. Replace the Skills data with the two-tier structure.
5. Delete the placeholder projects. Add the four real projects with whatever detail Eric has confirmed, and a visible `[TK]` in the data file for anything still pending.
6. Update `index.html`: real title, description meta tag, Open Graph tags for link previews, and a real favicon.
7. Rewrite `README.md`. It is currently the stock Vite template and it is the first thing anyone sees on the GitHub repo, which for a job search is a real touchpoint.

**STOP AND SHOW ERIC.** Every piece of public-facing copy gets a verbatim review before it goes further. Present the About paragraphs, the Skills list, and each project description as plain text he can read in one pass, and get the outstanding `[TK]` items answered.

### Phase 3: Design system

1. Build out `tailwind.config.js` `theme.extend` with real tokens: the color palette, the font families, a type scale using `clamp()` for fluid sizing, and custom easing curves for motion.
2. Set up `index.css` with CSS custom properties for the palette, base styles for the dark background and text colors, and font loading.
3. Apply the system across existing components. Every default Tailwind color class such as `blue-600`, `purple-50`, `orange-800` gets replaced with a token. When the phase is done, grep the `src/` directory for default palette class names. The result should be empty.
4. Rebuild the header and nav for the new direction: oversized type, generous space, restrained color.

**Checkpoint: commit. This is the phase where the site should stop looking like a starter template.**

### Phase 4: Motion and interaction

1. `npm install framer-motion`
2. Build a reusable scroll-reveal component using `whileInView` with `viewport={{ once: true }}`. Replace the existing `FadeInSection`, whose current `setTimeout` approach fires on mount regardless of whether the content is actually on screen.
3. Implement section transitions on tab change using `AnimatePresence` with `mode="wait"` so the outgoing section finishes leaving before the incoming one arrives.
4. Build the flip card for Projects. Click-triggered, not hover, so it works on touch. Hidden face is removed from tab order and hidden from assistive tech.
5. Build the hero: type-led, full viewport height, oversized name via `clamp()`, title and one positioning line, one abstract CSS background visual (blurred accent shape, off-center), staggered entrance under 1s. No `<img>` tag.
6. Wire up `prefers-reduced-motion`. Framer Motion's `useReducedMotion` hook handles this. Transforms and large movements are disabled, opacity fades may remain.

**Checkpoint: commit. Test on an actual phone, not just a narrow browser window.**

### Phase 5: Polish and verification

1. Responsive pass at 375px, 768px, and 1440px.
2. Contrast check every text-on-background pairing against WCAG AA, 4.5:1 for body text and 3:1 for large text. Dark themes with muted grays fail this constantly. Verify, do not eyeball.
3. Visible focus states on every interactive element. The current `hover:scale-105` pattern has no keyboard equivalent, which means the site is currently unusable without a mouse.
4. Keyboard-only pass: tab through the whole site, confirm everything reachable and operable, confirm focus order is sane, confirm the flip cards work.
5. Verify `npm run build` succeeds and `npm run lint` is clean.
6. Run `npm run preview` and check the production build, not just the dev server.
7. Confirm all external links open correctly and that `rel="noopener noreferrer"` is present on every `target="_blank"`.

**Final checkpoint: full review with Eric before any deployment conversation.**

---

## 8. Open items requiring Eric's input

Carry these into the session. Do not resolve them by picking a reasonable default.

1. Hours saved: is it 600+ per year or 1,100+ total? The two source documents disagree.
2. Cohort tool: round the dollar figure hard, or drop it and describe the mechanism?
3. Stock screener: publish the strategy parameters or keep it descriptive?
4. fosseeboss: link it from the site, yes or no?
5. Skills tier label: "Actively building", or different wording?
6. ~~Hero photo~~ — resolved 2026-08-03: no photo, hero is type-led (see section 6).
7. Accent color: which one? Recommend picking from a few options rendered against the real background rather than choosing from a hex code in the abstract.

---

## 9. Deferred, deliberately

- **Hosting and deployment.** Eric is leaning GitHub Pages to avoid cost. Worth knowing in advance that GitHub Pages on a project repo serves from a subpath, which requires setting `base` in `vite.config.js`, and that client-side routing needs a workaround there. Neither is a problem for the current tab-state approach. Separate conversation, not part of this build.
- **react-router.** Would give shareable per-section URLs. Eric chose tabs for now. Revisit if he ever wants to link someone directly to a specific project.
- **Newsletter integration.** Pulling fosseeboss posts onto the site is a larger piece of work and depends on the answer to open item 4.
