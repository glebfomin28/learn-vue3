
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'task-manager',
    }
  },
  ssr: false,
  css: [
    'primeflex/primeflex.min.css',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
  ],
  build: {
    transpile: ['primevue'],
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-viewport'
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => !!tag.match(/revo-/g)
    }
  },
  unocss: {
    uno: true,
    icons: true,
  },
  piniaPersistedstate: {
    storage: 'localStorage'
  },
})
