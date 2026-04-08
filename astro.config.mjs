import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  integrations: [],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});
