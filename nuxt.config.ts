// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/prismic", "@nuxt/image", "@pinia/nuxt"],

  prismic: {
    endpoint: "swsws69",
  },
  imports: {
    dirs: ["stores"],
  },
})