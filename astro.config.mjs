// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/consts';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: SITE.CANONICAL_URL,
  integrations: [sitemap()],
});