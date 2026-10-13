# Portfolio Overhaul Implementation Record

**Date:** 13 October 2026  
**Status:** Implemented and verified locally; not deployed.

## Implemented changes

- Rebuilt Home, Projects, About, all case studies, navigation, footer, and 404 in a shared light design system.
- Replaced the four primary project descriptions using the supplied overviews, with purpose, intended users, grouped features, service responsibilities, technology groups, and implementation limitations.
- Preserved all existing routes and the three secondary case studies.
- Removed animated topology, fabricated live indicators, autoplay simulations, the unsupported ADS-B failover demonstration, and retired simulation-only code/tests.
- Added generic static domain illustrations and readable product-level service explanations.
- Added the user-supplied email and LinkedIn URL to contact/footer actions. Removed the resume action as requested.
- Added accessible mobile navigation, domain filters, case-study contents navigation, disclosure controls, and route/hash focus restoration.
- Fixed cross-page contact focus by removing the old delayed page transition. Enlarged text can wrap long headings, navigation, and illustrations without page overflow.
- Updated metadata, favicon, README, architecture, and implementation foundation. No application dependencies were added.
- Formatted the existing untracked `compose.yaml` to satisfy the repository formatting check; its configuration behavior was preserved.

## Verification results

| Check                                                               | Result                                                                                                                                         |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run verify`                                                    | Passed: lint, formatting, 12 unit tests, and production build                                                                                  |
| `PLAYWRIGHT_BROWSER_CHANNEL=chrome npm run test:e2e -- --workers=2` | Passed: 32 tests across desktop and mobile Chromium contexts                                                                                   |
| Automated accessibility                                             | No detected WCAG A/AA violations on Home, Projects, About, and the four primary case studies, including expanded implementation notes          |
| Responsive reflow                                                   | All ten routes at 320 CSS pixels; six primary routes across phone, tablet, breakpoint-adjacent, desktop, wide, and landscape sizes             |
| Enlarged text                                                       | 200% root font size at 390, 768, and 1280px on Home, Projects, and Government Border Security                                                  |
| Pixel density                                                       | Desktop DPR 1, mobile profile, and explicit DPR 2 phone context                                                                                |
| Interaction                                                         | Project filters/reset, menu Escape/focus, project navigation/history, contact anchors, contents anchors, disclosure controls, and 404 recovery |
| Production preview                                                  | All ten direct page loads returned HTTP 200 and rendered the correct heading; ADS-B refresh passed without page errors                         |
| Visual review                                                       | Desktop Home and phone Home/case-study layouts inspected in Chrome                                                                             |
| `git diff --check`                                                  | Passed                                                                                                                                         |

The browser runner used the installed Chrome because the Playwright-managed Chromium binary was not present. Tests ran in isolated browser contexts. Production preview verification used built assets, not the Vite development source.

### Build comparison

Byte sizes below are raw generated asset sizes, excluding HTML and public files. The baseline was rebuilt with the same installed toolchain before implementation.

| Asset group                 |        Before |         After |
| --------------------------- | ------------: | ------------: |
| All generated JS/CSS assets | 198,790 bytes | 162,118 bytes |
| Entry JavaScript            | 104,869 bytes |  97,490 bytes |
| Stylesheets                 |  35,646 bytes |  23,849 bytes |

Total generated asset size decreased by approximately **18%**. Expanded project content increased the content chunk, while retiring simulations and the route transition reduced other output. These are build-size measurements, not a claim about production uptime or real-user speed.

### Cold mobile loading sample

A local production-preview sample used a 390×844 viewport, DPR 2, disabled cache, 150ms network latency, 1.6Mbps download, 750kbps upload, and 4× CPU slowdown.

- DOM content loaded: approximately 611ms.
- Largest contentful paint: approximately 940ms.
- Encoded resource bytes: 53,220 bytes across 7 resources.
- No horizontal page overflow was observed.

This is one local lab sample taken during verification. It does not establish a real-user performance distribution or deployment guarantee.

## Scope and remaining publication facts

- The project overviews establish application capabilities. Specific personal feature ownership, project/job dates, team context, and measured outcomes were not supplied, so new claims about those are not published. The shared case-study model supports a `contribution` array when confirmed; primary pages omit that section until then.
- Existing secondary-project responsibilities and education/experience facts were retained from the original portfolio.
- Confidential descriptions remain at product level. No production screens, operational coordinates, sensor placement, partner-specific operational details, or private endpoints were added.
- Recruiter/HR reader testing, Safari/Firefox checks, and a direct browser-menu 200% zoom check were not performed. Enlarged-text and narrow-viewport reflow checks complement the automated accessibility checks; they are not a full accessibility certification.
- A verified production origin still needs to be supplied through `VITE_SITE_URL` for canonical metadata when deploying. No deployment, commit, or push was performed.

## Local review

From the `portfolio` directory:

```sh
npm run dev
```

To review the production output:

```sh
npm run build
npm run preview
```

See [the overhaul plan](PORTFOLIO_OVERHAUL_PLAN.md), [architecture](../ARCHITECTURE.md), and [implementation foundation](PORTFOLIO_AI_IMPLEMENTATION_FOUNDATION.md) for ongoing maintenance. Generated browser reports and screenshots were saved separately from source changes.

## Follow-up: dark theme and ADS-B results

The user subsequently requested a professional dark palette and a photo results section for ADS-B. These updates supersede the initial light-theme direction above.

### Changes

- Applied shared navy/charcoal surfaces, light slate text, softer blue accents, subtle gradients, and restrained shadows throughout the site, including buttons, SVG illustrations, navigation, metadata theme color, and favicon.
- Added a Project results section and contents-navigation entry exclusively to ADS-B, using the seven screenshots supplied in `src/assets/icons/adsb-project`.
- Added a featured image, selected thumbnails, previous/next controls, keyboard navigation, and a native full-size dialog. The viewer supports actual-size inspection, scrolling, Escape/backdrop closing, focus return, and route-unmount cleanup.
- Thumbnail selection scrolls only its horizontal strip, preserving the page position. Short screens and enlarged text retain reachable controls and readable labels.
- Preserved all original PNGs. Added 320px thumbnails and 640px/1280px WebP previews in the `previews` subdirectory; full-resolution PNGs load only when the viewer opens. The original images total 9,597,962 bytes; all 21 preview variants total 1,119,888 bytes. These media files are separate from the earlier code-only build comparison.
- Updated ADS-B's confidentiality note to reflect the explicitly requested screenshots. The other confidential project keeps its generic presentation.
- Fixed the desktop contents sidebar by explicitly overriding the conflicting Tailwind `contents` display utility.
- Excluded generated browser reports/results from ESLint traversal so browser-test cleanup cannot race with linting.

### Verification

- `npm run verify` passed: lint, formatting, 12 unit tests, and production build.
- The complete desktop/mobile browser suite passed all 36 tests, including dark-theme accessibility, responsive widths, high-density screens, 200% text enlargement, and gallery behavior.
- All four gallery tests passed again after the final scrolling refinement, including an explicit check that image navigation preserves the vertical page position.
- Automated checks verified that all seven previews load and that original PNG images are not requested before opening the viewer.
- The open viewer passed automated accessibility checks and its original image loaded at full resolution. Focus recovery and body-scroll cleanup passed, including navigation away from the page.
- The dark ADS-B gallery was visually reviewed in Chrome. No deployment, commit, or push was performed.
