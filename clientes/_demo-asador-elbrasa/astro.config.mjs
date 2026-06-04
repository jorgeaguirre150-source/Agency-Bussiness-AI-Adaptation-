import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Demo de escaparate: el sitemap se reactiva en la web del cliente real (con su dominio).
  site: 'https://demo-asador-elbrasa.vercel.app',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
