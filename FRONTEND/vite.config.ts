import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Nook-MyEnd/', // Базовый путь для приложения
  plugins: [react()],
});