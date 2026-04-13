# Portfolio

This repository contains a React portfolio site prepared for local development and GitHub Pages deployment.

## Run locally

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Build

Create a production build with:

```bash
npm run build
```

The compiled site will be available in `build/`.

## Deploy to GitHub Pages

This project is set up for GitHub Pages:

- `HashRouter` is used, so page refreshes work on GitHub Pages.
- `homepage` is set to `"."`, so asset paths stay portable.
- A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

To publish the site:

1. Push this repository to GitHub.
2. Open the repository `Settings`.
3. Go to `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `main` or `master`.

GitHub will build and publish the portfolio automatically, and the Pages URL will open the live site directly.

## Cleanup performed

- Removed the old AI chat route and related frontend code.
- Removed the unused Python backend and API-key-based setup files.
- Kept the portfolio as a static React app for simpler hosting.

## Security note

An OpenAI API key was present in `backend/.env` before cleanup. If that key was ever committed or shared, rotate it immediately from your OpenAI account.
