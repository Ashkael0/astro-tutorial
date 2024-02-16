import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://master--bespoke-travesseiro-3452a8.netlify.app/',
  integrations: [preact()]
});