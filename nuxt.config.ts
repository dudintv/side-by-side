// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        highlight: false,
      },
    },
  },
});
