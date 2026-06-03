# Student Projects Dashboard

## Overview

A small Next.js assessment app that shows student projects, project details, and a simple parent report generated from mock data.

## Features

- Select a student project from a list.
- View health status, progress, current milestone, and next actions.
- Generate a short parent-friendly report for the selected project.
- Clear the report when a different project is selected.

## Tech Stack

- Next.js App Router
- TypeScript
- React `useState`
- Plain CSS

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

All project data is local mock data in `src/data/projects.ts`. Parent report generation is a simple local string template, with no API calls, backend, or AI service.
