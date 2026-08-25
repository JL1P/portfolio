// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Juan Almeida Ross — Frontend Developer',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'Frontend developer (React, TypeScript) building interfaces that hold up as products grow. Open to full-time roles — see selected projects and the decisions behind them.',
        },
        { property: 'og:title', content: 'Juan Almeida Ross — Frontend Developer' },
        {
          property: 'og:description',
          content:
            'Frontend developer (React, TypeScript). Open to full-time roles.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
      ],
      script: [
        {
          // Apply the saved/system theme before first paint so there's no
          // light-mode flash; Vue state catches up post-hydration (theme plugin).
          innerHTML:
            "(function(){try{var s=localStorage.getItem('theme');if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()",
          tagPosition: 'head',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ],
    },
  },

  ssr: true,
  compatibilityDate: '2026-03-25',

  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  modules: ["nitro-cloudflare-dev"]
})