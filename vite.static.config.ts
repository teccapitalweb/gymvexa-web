import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/gymvexa-web/',
  publicDir: path.resolve(root, 'public'),
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      '@': root,
      'next/image': path.resolve(root, 'static-next-image.tsx'),
    },
  },
  build: {
    outDir: 'dist-pages',
    emptyOutDir: true,
    rollupOptions: { input: path.resolve(root, 'index.html') },
  },
});
