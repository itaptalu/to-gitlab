// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  css: [
    '/assets/css/main.css'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
