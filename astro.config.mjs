// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Organization site on GitHub Pages (josh-3d-lab.github.io): base stays '/'.
export default defineConfig({
  site: 'https://josh-3d-lab.github.io',
  integrations: [sitemap()],
});
