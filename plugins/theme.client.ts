export default defineNuxtPlugin((nuxtApp) => {
  // Sync Vue state after hydration; the inline head script in nuxt.config.ts
  // already set <html class="dark"> pre-paint. Doing this before hydration
  // makes the server HTML (light icon) mismatch the client render.
  nuxtApp.hook('app:mounted', () => {
    useTheme().initTheme()
  })
})
