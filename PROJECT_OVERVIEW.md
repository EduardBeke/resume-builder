# Resume Builder — Project Overview

## What this project is

`resume-builder` is an Angular application for composing and rendering resume/CV content from structured data.  
It appears designed to support multiple languages and modular resume sections (experience, education, skills, certificates, and side information).

---

## Tech stack

- **Framework:** Angular (TypeScript)
- **Styling:** CSS/SCSS
- **Localization:** Transloco + JSON translation files
- **Data source:** JSON resume payloads and schema-driven TypeScript types

---

## Repository structure

```text
resume-builder/
  angular.json
  package.json
  README.md
  public/
    i18n/
      en.json
      de.json
      ro.json
    resume-builder.json
  src/
    main.ts
    styles.css
    app/
      app.ts
      app.html
      app.css
      app.config.ts
      app.routes.ts
      get-resume.ts
      transloco-loader.ts
      types/
        resume-schema.ts
      builder/
      resume/
      work-experience/
      education/
      certificate/
      side-info/
      skill-group/
```

### Important files

- `src/main.ts`  
  Application bootstrap entry point.

- `src/app/app.ts` + `src/app/app.html`  
  Root application shell and top-level UI layout.

- `src/app/app.config.ts`  
  Application-wide providers/configuration (including likely i18n setup).

- `src/app/app.routes.ts`  
  Route configuration and feature navigation.

- `src/app/get-resume.ts`  
  Resume data retrieval/transformation logic.

- `src/app/types/resume-schema.ts`  
  Core TypeScript contracts for resume structure.  
  This should be treated as the source of truth for data shape.

- `src/app/transloco-loader.ts`  
  Translation loader wiring for language resources.

- `public/i18n/*.json`  
  Localization dictionaries for `en`, `de`, `ro`.

- `myData.json`, `myData_de.json`  
  Local/sample resume datasets.

---

## Conceptual architecture

The app is organized around **section-focused UI components** and a **shared resume schema**:

1. Resume data is loaded or prepared (likely via `get-resume.ts`).
2. Data is typed against interfaces in `resume-schema.ts`.
3. Section components each render a slice of the resume:

- `work-experience`
- `education`
- `certificate`
- `skill-group`
- `side-info`

4. The `resume` and/or `builder` feature composes these sections into a complete page.

This structure encourages:

- clear separation of concerns,
- easier section-level maintenance,
- safer changes through strongly-typed contracts.

---

## Data model and rendering flow

At a high level:

- **Input:** structured JSON data (for example `myData.json`)
- **Validation/typing:** TypeScript interfaces/types in `src/app/types/resume-schema.ts`
- **Transformation:** helper logic in `src/app/get-resume.ts`
- **Presentation:** section components render typed slices
- **Output:** localized, formatted resume UI

When making data-related changes:

1. update schema first,
2. then update transformation logic,
3. then adjust section components and templates.

---

## Internationalization (i18n)

Localization is implemented with Transloco:

- Loader/config: `src/app/transloco-loader.ts`
- Locale dictionaries: `public/i18n/en.json`, `de.json`, `ro.json`

### Practical rule

Any new user-visible label or message should be added to **all locale files**, not hard-coded into templates/components.

---

## Component map (responsibilities)

- `builder`  
  Likely editing/composition orchestration (assemble data/sections).

- `resume`  
  Main rendered resume view that composes child sections.

- `work-experience`  
  Renders job history entries.

- `education`  
  Renders academic background.

- `certificate`  
  Renders certifications and related metadata.

- `skill-group`  
  Renders categorized skills.

- `side-info`  
  Renders secondary profile info (contacts, links, languages, etc.).

---

## Development guidelines for this codebase

Based on existing project conventions and provided instructions:

- Use strict, explicit TypeScript contracts.
- Prefer modern Angular patterns:
  - standalone components (default in newer Angular),
  - `ChangeDetectionStrategy.OnPush`,
  - signals + `computed()` for local/derived state,
  - native template control flow (`@if`, `@for`, `@switch`).
- Prefer reactive forms where forms are needed.
- Keep templates simple; move complex logic to typed TS.
- Maintain accessibility:
  - semantic markup,
  - keyboard navigation,
  - visible focus,
  - ARIA only when necessary,
  - WCAG AA alignment.

---

## How to approach feature changes safely

1. Start from schema in `src/app/types/resume-schema.ts`.
2. Trace data preparation in `src/app/get-resume.ts`.
3. Update only affected feature component(s).
4. Add/update translations in `public/i18n/*.json`.
5. Verify accessibility and visual behavior.

---

## Suggested onboarding reading order

1. `README.md`
2. `src/main.ts`
3. `src/app/app.config.ts`
4. `src/app/app.routes.ts`
5. `src/app/types/resume-schema.ts`
6. `src/app/get-resume.ts`
7. `src/app/resume/*` and section component folders
8. `public/i18n/*.json`

---

## Useful prompt context for future AI requests

Use this short context in future prompts:

> This is an Angular TypeScript resume builder.  
> Source of truth for data contracts is `src/app/types/resume-schema.ts`.  
> Resume data flow goes through `src/app/get-resume.ts`.  
> UI is section-based under `src/app/*/*.component.*`.  
> i18n must be updated in `public/i18n/{en,de,ro}.json` for any user-visible text.  
> Follow strict typing, modern Angular patterns, and accessibility best practices.

