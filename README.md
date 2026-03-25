# Portfolio

A modern, minimal developer portfolio website built with Nuxt 3 and Vue 3. Features a clean design system, dark mode support, and smooth scrolling navigation.

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) with SSR
- **Frontend**: Vue 3 + TypeScript
- **Styling**: Custom CSS with CSS variables (design tokens)
- **Font**: Plus Jakarta Sans (Google Fonts)
- **Deployment**: [Vercel](https://vercel.com/)

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Landing with availability badge, intro text, and CTA buttons |
| **About** | Bio and skills grid (Vue.js, Nuxt, React, TypeScript, Node.js, Tailwind CSS, Git, PostgreSQL) |
| **Projects** | Project showcase with tech tags and links to live demos and GitHub |
| **Contact** | Email CTA and social links (GitHub, LinkedIn, Twitter) |

## Features

- Dark / light mode with system preference detection and localStorage persistence
- Fully responsive layout (mobile → tablet → desktop)
- Smooth scroll navigation
- Frosted glass navbar with backdrop blur
- Gradient text and button effects

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for [Vercel](https://vercel.com/). Push to your main branch and Vercel will build and deploy automatically using the `vercel.json` config.

For other platforms, refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Project Structure

```
├── components/       # Vue components (Hero, About, Projects, Contact, Navbar, Footer)
├── composables/      # useTheme composable for dark mode state
├── plugins/          # theme.client.ts — initializes theme on page load
├── assets/css/       # main.css with design tokens (colors, spacing, shadows)
├── app.vue           # Root component
├── nuxt.config.ts    # Nuxt configuration
└── vercel.json       # Vercel deployment config
```
