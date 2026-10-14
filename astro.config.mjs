import { defineConfig } from 'astro/config';

// Ajuste `site` para o domínio do projeto (usado em canonical/OG).
export default defineConfig({
  site: 'https://nambueventos.com',
  output: 'static',
  trailingSlash: 'ignore',
  prefetch: true,
  build: {
    inlineStylesheets: 'always',
    format: 'directory',
  },
  server: {
    port: 4321,
  },
});
