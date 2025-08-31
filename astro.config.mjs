// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Heebo",
      weights: [400, 700],
      cssVariable: "--font-heebo"
    }, {
      provider: fontProviders.google(),
      name: "Arimo",
      weights: [400],
      cssVariable: "--font-arimo"
    }]
  },

  integrations: [vue()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "da", "no", "fi", "sv"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});