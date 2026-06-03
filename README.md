# Student Projects Dashboard

Simple Next.js assessment app for reviewing student project progress.

## Features

- Select a student project.
- View health, progress, current milestone, and next actions.
- Generate a short parent report from the selected project.
- Report clears when a different project is selected.

## Tech Stack

- Next.js App Router
- TypeScript
- React `useState`
- Plain CSS

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

Project data is local mock data in `src/data/projects.ts`. Report generation is a local string template in `src/app/page.tsx`. There is no backend, API route, database, or AI service.
