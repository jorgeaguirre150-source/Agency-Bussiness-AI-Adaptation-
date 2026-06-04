import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Cambia por el dominio real del cliente al desplegar (afecta a OG tags y URLs absolutas).
  // Sitemap omitido a propósito: sitio de 1 página, Google lo indexa sin XML. Reactivar solo en sitios multipágina.
  site: 'https://CLIENTE-DOMAIN.com',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
