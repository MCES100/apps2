import { plugins } from "./mces10software/postcss.config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare-pages'
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  
})