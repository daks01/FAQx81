import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://daks01.github.io',
  base: '/FAQx81',
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});