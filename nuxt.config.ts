// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/sanity",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [500, 700, 800],
          download: true,
          inject: true,
        },
      },
    ],
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/seo",
    "@vueuse/motion/nuxt",
    "@nuxtjs/plausible",
    "@nuxtjs/partytown",
  ],
  site: {
    url: "https://www.pixelslaves.com",
    name: "Pixelslaves",
    description:
      "Een hechte groep vrienden verdeeld over Vlaanderen die elkaar online hebben leren kennen, samen gamen en plezier hebben onder de naam PixelSlaves.",
    defaultLocale: "nl-BE",
  },
  sanity: {
    projectId: process.env.NUXT_ENV_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_ENV_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: "2021-03-25",
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      "postcss-nested": {},
    },
  },
  build: {
    transpile: ["oh-vue-icons"],
  },
  devtools: { enabled: true },
  nitro: {
    static: true,
  },
  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
    // prerender this route and all child routes
    "/players": { prerender: true },
  },
  partytown: {
    forward: ["$plausible", "$plausible.push"],
  },
  app: {
    head: {
      script: [
        { innerHTML: "window.$plausible = [];" },
        // Update this
        {
          src: "/hd372/js/script.js",
          defer: true,
          type: "text/partytown",
          "data-domain": "pixelslaves.com",
        },
      ],
    },
  },
  ogImage: {
    runtimeChromium: false,
  },
});
