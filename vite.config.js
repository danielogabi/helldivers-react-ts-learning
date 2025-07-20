import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 5173,
  },
  css: {
    devSourcemap: true, // Enable source maps for CSS/SCSS
  },
  base: mode === 'production' ? '/helldivers-react-ts-learning/' : '/', // Use GitHub Pages base URL in production
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'framer-motion'], // Mark react-router-dom and framer-motion as external
    },
  },
}));