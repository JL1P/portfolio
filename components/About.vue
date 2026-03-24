<template>
  <section id="about" class="about">
    <div class="about-content">
      <header class="about-header">
        <span class="section-eyebrow">About</span>
        <h2 class="section-heading">Building with clarity and care</h2>
        <p class="section-intro">
          Full-stack developer focused on interfaces that feel effortless and systems that stay maintainable as products grow.
        </p>
      </header>
      <div class="about-grid">
        <div class="about-card about-text">
          <p>
            I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly web applications. With several years of experience in web development, I specialize in building modern web apps using cutting-edge technologies.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
        </div>
        <div class="skills-panel">
          <p class="skills-label">Stack & tools</p>
          <div class="skills-grid">
            <div v-for="skill in skills" :key="skill" class="skill-tag">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  'Vue.js',
  'Nuxt',
  'React',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Git',
  'PostgreSQL',
]
</script>

<style scoped>
.about {
  padding: 5.5rem 1.25rem;
  border-top: 1px solid var(--border);
  background: color-mix(in srgb, var(--background-elevated) 40%, var(--background));
}

.about-content {
  max-width: 1120px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: stretch;
}

.about-card {
  padding: 1.75rem;
  background: var(--background-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.about-text p {
  font-size: 1.0625rem;
  color: var(--muted-foreground);
  margin: 0 0 1.25rem;
  line-height: 1.7;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.skills-panel {
  padding: 1.75rem;
  background: linear-gradient(145deg, var(--background-elevated) 0%, color-mix(in srgb, var(--accent-soft) 50%, var(--background-elevated)) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.skills-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 1.25rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
}

.skill-tag {
  padding: 0.65rem 0.85rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  color: var(--foreground);
  background: color-mix(in srgb, var(--background-elevated) 88%, var(--accent-soft));
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.skill-tag:hover {
  border-color: color-mix(in srgb, var(--accent) 30%, transparent);
  transform: translateY(-1px);
}

@media (min-width: 900px) {
  .about-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
</style>
