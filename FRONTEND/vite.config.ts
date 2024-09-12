// vite.config.js or vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Nook-MyEnd/',  // Set base to match your deployment path
  build: {
    outDir: 'dist' // Ensure this matches the output directory expected by Vercel
  }
});
