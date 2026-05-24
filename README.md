# Planto. - Breath Natural

Plant decor storefront built from the Planto Figma concept, with a React frontend and a small API layer for plant data and newsletter subscriptions.

## Live Demo

Add the deployed URL after publishing, for example: `https://breath-natural.vercel.app`

## Tech Stack

- React 19 + Vite
- Express API for local full-stack development
- Vercel serverless API routes for deployment
- CSS custom properties and component CSS
- Google Fonts (Poppins)

## Run Locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`. The same server handles:

- `GET /api/plants`
- `POST /api/subscribe`

## Production Preview

```bash
npm run preview
```

## Deployment

Vercel can deploy the Vite frontend and the `/api` serverless functions from this repo.

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Use the default Vite build command: `npm run build`.
4. Use the default output directory: `dist`.

## Folder Structure

```text
api/            Vercel serverless functions
server/         Express API for local full-stack development
src/api/        Frontend API helpers
src/components/ One JSX + CSS file per section
src/data/       Frontend fallback content
src/styles/     Global design tokens and reset
```
# breath-natural
