# Helldivers 2 Dashboard - WORK IN PROGRESS - ETA  5~7 days

A React + TypeScript dashboard for real-time Helldivers 2 war data, planetary info, news, and more.

## Features

- 🌍 Planet Status: View current health and ownership of all planets.
- 📰 Galactic News: See the latest war news.
- 🌌 Active Campaigns: Track ongoing campaigns.
- 🎯 Major Orders: Check current major orders and their rewards.
- 🪐 Planet Info: Detailed information about each planet.

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Project Structure

- `src/components/` – Reusable UI components (Navbar, PlanetCard, etc.)
- `src/pages/` – Page components for each route
- `src/types/` – TypeScript type definitions
- `src/styles/` – SCSS styles (organized by abstracts, base, components, pages)
- `public/` – Static assets

## API

This dashboard fetches data from [helldiverstrainingmanual.com](https://helldiverstrainingmanual.com/api/v1/).

## License

MIT
