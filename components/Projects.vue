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
          <div class="project-visual">
            <span class="project-emoji" aria-hidden="true">{{ project.emoji }}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live demo</a>
              <a href="#" class="project-link-muted">GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    emoji: '◆',
    title: 'Project One',
    description: 'A modern web application built with Vue.js and Nuxt, featuring real-time updates and responsive design.',
    tech: ['Nuxt', 'Vue', 'CSS', 'Node.js'],
  },
  {
    emoji: '◇',
    title: 'Project Two',
    description: 'An e-commerce platform with seamless payment integration and inventory management.',
    tech: ['React', 'TypeScript', 'Stripe', 'PostgreSQL'],
  },
  {
    emoji: '○',
    title: 'Project Three',
    description: 'A productivity tool that helps teams collaborate and manage tasks efficiently.',
    tech: ['Vue', 'Firebase', 'CSS', 'GraphQL'],
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

.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
  color: var(--foreground);
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
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-link-muted:hover {
  color: var(--foreground);
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
