import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      '{apps,libs}/**/vite.config.{mjs,js,ts,mts}',
      '{apps,libs}/**/vitest.config.{mjs,js,ts,mts}',
    ],
  },
});
