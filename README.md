# Bjorn Pijpops · Personal website

A bilingual (EN/NL) personal website and resume showing professional growth: a work-experience
timeline, projects, education and certifications, plus a personal side.

Live: https://bjornpijpops.github.io/portfolio/

## Tech stack

React 19 · TypeScript · Vite · React Router (hash routing) · Vitest · ESLint · Prettier

## Getting started

Requires Node.js 22 (as used in CI).

```bash
npm install
npm run dev        # http://localhost:5173
```

| Command           | What it does                                         |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the dev server                                 |
| `npm run build`   | Typecheck and create a production build in `dist/`   |
| `npm run preview` | Serve the production build locally                   |
| `npm run check`   | Typecheck, lint, format check and tests (same as CI) |
| `npm run format`  | Format all files with Prettier                       |

## Updating the content

All content lives in `src/content/`, separate from the UI. Texts that differ per language are
written as `{ en: '...', nl: '...' }`.

| File            | Content                                  |
| --------------- | ---------------------------------------- |
| `profile.ts`    | Name, headline, summary, links and photo |
| `employment.ts` | Employers, roles and achievements        |
| `activities.ts` | Side activities (tutoring, coaching)     |
| `projects.ts`   | Projects and their live previews         |
| `education.ts`  | Education, certificates and courses      |
| `interests.ts`  | The "Outside work" cards                 |
| `skills.ts`     | Skills (kept for a future resume export) |

UI labels are in `src/i18n/messages.ts`. Both languages are required, so a missing translation
fails the typecheck.

**Images** go in `public/images/` (prefer WebP, 900–1400 px wide, under ~300 KB) and are
referenced by file name. **Certificate copies** go in `public/certificates/`.

Experience durations, years of experience and activity durations are calculated from the start
and end dates, so ongoing roles never need manual updating.

## Architecture

```
src/
  domain/      Pure types and logic (periods, career stats, grouping); fully unit tested
  content/     Raw content + repository that localizes it (Repository pattern)
  i18n/        UI strings and locale detection
  features/    One folder per feature (hero, career, experience, projects, ...)
  components/  Small reusable UI pieces (PageHeader, SegmentedControl, Photo, ...)
  hooks/       Reusable hooks (useStoredState, useInView, useDataSaver, ...)
  layout/      Site shell, navigation, route-change effects
  pages/       Thin page components that compose features
  styles/      Design tokens and CSS split by concern
```

Key decisions:

- **Repository pattern**: components read content through `ContentContext`, never from the data
  files directly, so the source could be swapped for a CMS or API.
- **Domain logic stays out of components** and is covered by unit tests.
- **Hash routing** keeps deep links working on GitHub Pages without server configuration.
- **Activities are separate from employers**, so they never count toward years of experience.
- **Performance**: WebP images, lazy-loaded project previews (only when scrolled near), and a
  data-saver mode that skips live previews.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages (repository setting: Pages source = GitHub Actions). The workflow sets:

- `BASE_PATH`: the sub-path the site is served from (the repository name).
- `VITE_SITE_URL`: the absolute site URL, used for the social preview image and meta tags.

`ci.yml` runs `npm run check` on pull requests and pushes.

The social preview image is `public/og-image.jpg` (1200×630).
