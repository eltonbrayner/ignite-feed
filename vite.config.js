import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    '@': '/src',
    '@all-components': '/src/components/index.js',
    '@components': '/src/components',
    '@assets': '/src/assets',
  },
});
