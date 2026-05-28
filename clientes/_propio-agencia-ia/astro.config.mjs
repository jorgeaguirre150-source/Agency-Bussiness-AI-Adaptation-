import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitemap deshabilitado temporalmente — re-añadir cuando tengamos dominio
// propio definitivo. Con @astrojs/sitemap@3 + Astro 4.16 daba "Cannot read
// properties of undefined (reading 'reduce')" en build.

export default defineConfig({
  site: 'https://agencia-ia-madrid-este.vercel.app',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
