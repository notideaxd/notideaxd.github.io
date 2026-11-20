// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// El sitio vive en la raíz de https://notideaxd.github.io, por eso no hay `base`.
export default defineConfig({
  site: 'https://notideaxd.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
