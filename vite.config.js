import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/helldivers-react-ts-learning/', // Set base to match your GitHub Pages URL
  server: {
    port: 5173,
  },
});