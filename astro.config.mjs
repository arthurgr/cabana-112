import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cabana112abaco.com',
  integrations: [sitemap()],
});
