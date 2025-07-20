# Helldivers 2 Dashboard - WORK IN PROGRESS

A React + TypeScript dashboard designed to provide real-time updates on the ongoing Helldivers 2 war, including planetary status, galactic news, active campaigns, and major orders.

## Overview

The Helldivers 2 Dashboard is a tool for players to stay informed about the state of the war. It provides:
- **Planetary Status**: Current health and ownership of planets.
- **Galactic News**: Latest updates on war events.
- **Active Campaigns**: Progress tracking for ongoing campaigns.
- **Major Orders**: Rewards and objectives for major orders.
- **Planet Info**: Detailed insights into resources and strategic importance.

This project is built with modern web technologies to ensure fast performance, scalability, and a responsive user experience.

---

## Features

### 🌍 Planet Status
Displays the current health and ownership of all planets, helping players strategize their next moves.

### 📰 Galactic News
Provides real-time updates on war events, including fallen planets, strategic alerts, and major developments.

### 🌌 Active Campaigns
Tracks ongoing campaigns, showing progress and objectives.

### 🎯 Major Orders
Lists current major orders, their rewards, and completion criteria.

### 🪐 Planet Info
Offers detailed information about each planet, including resources, strategic importance, and historical data.

---

## Tech Stack

- [React](https://react.dev/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Vite](https://vitejs.dev/) - Fast development and build tool
- [Bootstrap 5](https://getbootstrap.com/) - Responsive UI components
- [Sass](https://sass-lang.com/) - Advanced styling
- [Motion](https://www.framer.com/motion/) - Declarative animations and gestures
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server (with linting):**
   ```sh
   npm run dev
   ```

3. **Build for production (with linting):**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

---

## Project Structure

- `src/components/` – Reusable UI components (Navbar, PlanetCard, NewsItem, etc.).
- `src/pages/` – Page components for each route (Home, Campaigns, MajorOrders, etc.).
- `src/types/` – TypeScript type definitions.
- `src/styles/` – SCSS styles (organized by abstracts, base, components, pages).
- `public/` – Static assets (e.g., images, icons).

---

## Data Sources

### API
The dashboard fetches data from [helldiverstrainingmanual.com](https://helldiverstrainingmanual.com/api/v1/), providing real-time updates on war events, campaigns, and planetary status.

### `homeData.json`
The `homeData.json` file contains static data used for the homepage, including introductory text, key highlights, and links to important sections.

---

## Deployment

The project is deployed via GitHub Pages. Visit the live dashboard at:  
[Helldivers 2 Dashboard](https://danielogabi.github.io/helldivers-react-ts-learning/)

---

## TO DO

- **UI Updates**: Improve styling for sections like Galactic News and Campaigns.
- **Timers and Animations**: Implement countdown timers and smooth animations for transitions.
- **Accessibility**: Ensure the dashboard meets accessibility standards.
- **Testing**: Add unit tests for components and pages.
- **Localization**: Add support for multiple languages.

---

## License

MIT
