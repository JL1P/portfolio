# Architectural Decisions

A log of meaningful choices made in this project and the reasoning behind them. Written so future-me (or anyone reading the code) can understand the trade-offs, not just the outcome.

---

## Nuxt 3 over plain Vue SPA

**Decision:** Use Nuxt 3 as the framework instead of a plain Vite + Vue setup.

**Why:** SSR (server-side rendering) gives a faster first contentful paint without extra configuration, which matters for a portfolio where the first impression counts. Nuxt also provides file-based routing out of the box — not needed now, but useful if pages like `/blog` or `/case-studies` are added later. Deploys are zero-config through Nitro's provider presets — originally Vercel, now Cloudflare Workers (see the deploy-target entry below).

**Trade-off:** More opinionated than plain Vue. For a project this small, Nuxt is slight overkill — but the upside outweighs the cost.

---

## Custom CSS over Tailwind CSS

**Decision:** Write all styles in a custom CSS file using CSS custom properties (design tokens), rather than using Tailwind CSS.

**Why:** Tailwind is great for apps with many components and a build step that purges unused classes. For a small portfolio with 6 components, a design token system with CSS variables gives full control with zero build overhead. It's also a good exercise in understanding the cascade and custom properties directly, rather than abstracting them away.

**Trade-off:** More verbose than Tailwind for one-off styles. Worth it here for the learning and control.

---

## Dark mode via localStorage + system preference

**Decision:** Implement dark mode using a `useTheme` composable that checks `localStorage` first, falls back to `prefers-color-scheme`, and persists the user's choice.

**Why:** Avoids flash of wrong theme on load. No backend or cookies needed — everything lives in the browser. The system preference fallback means first-time visitors get the right theme automatically.

**Trade-off:** The theme has to be applied in two steps. An inline script in `<head>` (see `nuxt.config.ts`) toggles the `dark` class on `<html>` before first paint — that element is outside Vue's hydration scope, so it's safe to touch early. The Vue state (`useTheme`) syncs on `app:mounted` instead of during plugin setup: syncing earlier made the client render a different navbar icon than the server HTML and triggered a hydration mismatch. The cost is a split implementation across two files; the benefit is no theme flash *and* clean hydration.

---

## No state management library (no Pinia)

**Decision:** Use a single `useTheme` composable instead of Pinia or Vuex for state.

**Why:** There is exactly one piece of shared state in this app: the current theme. Pulling in Pinia for that would be over-engineering. A composable using Vue's `ref` is sufficient, readable, and requires no extra dependencies.

**Trade-off:** If the app grows significantly and needs cross-component state, Pinia would need to be added. That's a fine trade-off to make when the need actually arises.

---

## Cloudflare Workers over Vercel (deploy target)

**Decision:** Move hosting to Cloudflare Workers through Wrangler's Nuxt integration — the `cloudflare_module` Nitro preset with `deployConfig: true` — after a brief stop on preset-less auto-detection.

**Why:** Access to my Vercel account was interrupted, and I wasn't going to leave the site down waiting on support. The first cut deleted the hardcoded `vercel` preset so Nitro's CI detection could serve either provider. But deploying through Wrangler rather than a Pages-style Git flow wants the Cloudflare preset wired in explicitly, and Wrangler generates and maintains that config itself against Nuxt ≥3.21 — so the config pins `cloudflare_module`, the build emits the authoritative wrangler.json, and the Nuxt 3.13 → 3.21 upgrade came along as the price of admission.

**Trade-off:** The config is provider-shaped again — leaving Cloudflare would mean touching nuxt.config.ts, which the auto-detect step briefly avoided. That's the honest cost of a real deploy pipeline over a hypothetical portable one. vercel.json is gone for the same reason: config describing a host this repo doesn't deploy to misleads more than it preserves.
