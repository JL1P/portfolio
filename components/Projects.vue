<template>
  <section id="projects" class="projects">
    <div class="projects-content">
      <header class="projects-header">
        <span class="section-eyebrow">Work</span>
        <h2 class="section-heading">Selected projects</h2>
        <p class="section-intro">
          A few things I've shipped—product UI, APIs, and the glue in between.
        </p>
      </header>
      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="project-card"
          :class="`tone-${i % 3}`"
        >
          <div v-if="project.video && demoShown[project.title]" class="project-shots">
            <video
              class="project-demo-video"
              controls
              preload="none"
              width="588"
              height="1280"
              :poster="project.video.poster"
              :aria-label="project.video.label"
              :aria-describedby="`demo-desc-${i}`"
            >
              <source :src="project.video.src" type="video/mp4" />
            </video>
            <p :id="`demo-desc-${i}`" class="visually-hidden">{{ project.video.description }}</p>
          </div>
          <div v-else-if="project.images?.length" class="project-shots">
            <img
              v-for="shot in project.images"
              :key="shot.src"
              :src="shot.src"
              :alt="shot.alt"
              :width="shot.width"
              :height="shot.height"
              loading="lazy"
              decoding="async"
              class="project-shot"
            />
          </div>
          <div v-else class="project-visual">
            <span class="project-emoji" aria-hidden="true">{{ project.emoji }}</span>
          </div>
          <div v-if="project.video" class="demo-toggle-row">
            <button type="button" class="demo-toggle" @click="toggleDemo(project.title)">
              {{ demoShown[project.title] ? 'Show screenshots' : 'Watch demo' }}
            </button>
          </div>
          <div class="project-body">
            <div class="project-title-row">
              <h3 class="project-title">{{ project.title }}</h3>
              <span v-if="project.status === 'in-progress'" class="badge-progress">In development</span>
            </div>
            <div v-if="project.problem" class="project-meta-block">
              <span class="meta-label">Problem</span>
              <p class="meta-text">{{ project.problem }}</p>
            </div>
            <div v-if="project.problem" class="project-meta-block">
              <span class="meta-label">Solution</span>
              <p class="meta-text">{{ project.description }}</p>
            </div>
            <p v-else class="project-description">{{ project.description }}</p>
            <div v-if="project.decision" class="project-meta-block">
              <span class="meta-label">Decision</span>
              <p class="meta-text">{{ project.decision }}</p>
            </div>
            <div v-if="project.tech.length" class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div v-if="project.demo || project.github" class="project-links">
              <a v-if="project.demo" :href="project.demo" class="project-link">Live demo</a>
              <a v-if="project.github" :href="project.github" class="project-link-muted">
                <svg
                  class="project-link-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                <span class="project-link-label">{{ project.githubLabel ?? 'GitHub' }}</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

interface ProjectVideo {
  src: string
  poster: string
  /** Accessible name for the video element. */
  label: string
  /** Text alternative for a silent video, wired via aria-describedby. */
  description: string
}

interface Project {
  emoji: string
  title: string
  problem?: string
  description: string
  decision?: string
  tech: string[]
  status?: 'in-progress'
  github?: string
  /** Overrides the GitHub link label when the repo isn't the source code. */
  githubLabel?: string
  demo?: string
  /** Screenshots shown in place of the gradient visual once assets exist. */
  images?: ProjectImage[]
  /** Demo video, swapped into the strip area behind the Watch demo toggle. */
  video?: ProjectVideo
}

const demoShown = reactive<Record<string, boolean>>({})
const toggleDemo = (title: string) => {
  demoShown[title] = !demoShown[title]
}

const projects: Project[] = [
  {
    emoji: '◇',
    title: 'Name Sprout',
    problem: 'Choosing a baby name means digging through static lists with no way to personalize the search or build a shortlist together as a couple.',
    description: 'iOS app with curated name collections, AI-generated suggestions by gender, origin, and style, and favorites that work offline as a guest and sync to your account on sign-in.',
    decision: 'AI keys never ship in the app bundle — a Cloudflare Worker proxies a Gemini → GPT → Claude fallback chain with rate limiting and a local catalog as last resort. Favorites sit behind a repository interface so guest storage (AsyncStorage) and signed-in storage (Supabase with row-level security) swap cleanly, merging guest picks on sign-in.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Cloudflare Workers', 'Supabase'],
    status: 'in-progress',
    github: 'https://github.com/JL1P/name-sprout-readme',
    githubLabel: 'Architecture notes',
    images: [
      {
        src: '/images/name-sprout/generate.webp',
        alt: "Name Sprout's generate screen with gender, origin and style filters selected, showing AI-generated name suggestions",
        width: 576,
        height: 1252,
      },
      {
        src: '/images/name-sprout/favorites.webp',
        alt: "Name Sprout's favorites screen listing saved names with their origins and descriptors",
        width: 576,
        height: 1252,
      },
    ],
    video: {
      src: '/video/name-sprout-demo-web.mp4',
      poster: '/images/name-sprout/demo-poster.webp',
      label: 'Name Sprout demo video',
      description:
        'Silent screen recording. The app opens on Discover, browses a curated name collection and saves a name, then moves to Generate, selects filters, generates AI suggestions and saves one of those. It then signs in through a hosted auth dialog, and Favorites still shows both names afterward — the names saved as a guest carried into the account.',
    },
  },
  {
    emoji: '◆',
    title: 'This Portfolio',
    problem: 'No central place to show work or communicate how I think about engineering decisions.',
    description: 'Built with Nuxt 3 and a custom CSS design token system — SSR-ready, dark mode, fully responsive.',
    decision: 'Chose Nuxt over a plain Vue SPA for SSR and future routing flexibility. Skipped Tailwind to build a proper CSS custom property system from scratch.',
    tech: ['Nuxt', 'Vue', 'TypeScript', 'CSS'],
    github: 'https://github.com/JL1P/portfolio',
  },
]
</script>

<style scoped>
.projects {
  padding: 5.5rem 1.25rem;
}

.projects-content {
  max-width: 1120px;
  margin: 0 auto;
}

.projects-header {
  text-align: center;
  margin-bottom: 2.75rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--background-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: color-mix(in srgb, var(--accent) 22%, var(--border));
}

.project-shots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: color-mix(in srgb, var(--accent-soft) 60%, var(--background-elevated));
}

.project-shot {
  display: block;
  width: auto;
  max-width: 100%;
  height: 360px;
  aspect-ratio: 576 / 1252;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

@media (max-width: 480px) {
  .project-shot:not(:first-child) {
    display: none;
  }
}

.project-demo-video {
  display: block;
  width: auto;
  max-width: 100%;
  height: 360px;
  aspect-ratio: 588 / 1280;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.demo-toggle-row {
  display: flex;
  justify-content: center;
  padding: 0 1rem 0.9rem;
  background: color-mix(in srgb, var(--accent-soft) 60%, var(--background-elevated));
}

.demo-toggle {
  padding: 0.45rem 0.95rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent);
  background: var(--background-elevated);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--border));
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.demo-toggle:hover {
  background: var(--accent-soft);
  border-color: color-mix(in srgb, var(--accent) 45%, transparent);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.project-visual {
  position: relative;
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.tone-0 .project-visual {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #06b6d4 100%);
}

.tone-1 .project-visual {
  background: linear-gradient(135deg, #0d9488 0%, #4f46e5 100%);
}

.tone-2 .project-visual {
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 55%, #f97316 100%);
}

.project-visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2), transparent 50%);
  pointer-events: none;
}

.project-emoji {
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.05em;
}

.project-body {
  padding: 1.5rem 1.5rem 1.35rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 0.5rem;
  flex-wrap: wrap;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--foreground);
}

.badge-progress {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent-2);
  background: color-mix(in srgb, var(--accent-2) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent-2) 25%, transparent);
  border-radius: var(--radius-full);
  padding: 0.2rem 0.55rem;
}

.project-meta-block {
  margin: 0 0 0.75rem;
}

.meta-label {
  display: block;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.meta-text {
  font-size: 0.9rem;
  color: var(--muted-foreground);
  margin: 0;
  line-height: 1.55;
}

.project-description {
  font-size: 0.9375rem;
  color: var(--muted-foreground);
  margin: 0 0 1rem;
  line-height: 1.6;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.15rem;
}

.tech-tag {
  padding: 0.3rem 0.55rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: var(--radius-sm);
}

.project-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-top: 0.25rem;
}

.project-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.project-link:hover {
  opacity: 0.85;
}

.project-link-muted {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color 0.2s ease;
}

/* Underline stays on the label so it doesn't run under the icon. */
.project-link-label {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.project-link-icon {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
}

.project-link-muted:hover {
  color: var(--accent);
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
