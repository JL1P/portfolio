<template>
  <section id="experience" class="experience" aria-labelledby="experience-heading">
    <div class="experience-content">
      <header class="experience-header">
        <span class="section-eyebrow">Experience</span>
        <h2 id="experience-heading" class="section-heading">Where I've worked</h2>
        <p class="section-intro">
          Company work that isn't public — the roles and what I owned in them.
        </p>
      </header>
      <ol class="experience-list">
        <li
          v-for="job in experience"
          :key="`${job.role}-${job.company}`"
          class="experience-item"
        >
          <article class="experience-entry">
            <div class="experience-topline">
              <h3 class="experience-role">{{ job.role }}</h3>
              <p class="experience-period">
                <time :datetime="job.start">{{ job.startLabel }}</time>
                —
                <time v-if="job.end" :datetime="job.end">{{ job.endLabel }}</time>
                <template v-else>Present</template>
              </p>
            </div>
            <p class="experience-company">{{ job.company }}</p>
            <p class="experience-summary">{{ job.summary }}</p>
            <ul class="experience-stack" aria-label="Technologies used">
              <li v-for="tech in job.stack" :key="tech" class="stack-item">
                {{ tech }}
              </li>
            </ul>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Job {
  role: string
  company: string
  /** ISO-ish machine date for <time datetime>, e.g. "2024-01" */
  start: string
  startLabel: string
  end?: string
  endLabel?: string
  summary: string
  stack: string[]
}

// Placeholder entries — replace role/company/dates/summary/stack with real copy.
const experience: Job[] = [
  {
    role: 'Role title',
    company: 'Company name · Location',
    start: '2025-01',
    startLabel: 'Jan 2025',
    summary:
      'Placeholder — one or two sentences on what you owned in this role and the outcome it drove.',
    stack: ['Tech one', 'Tech two', 'Tech three'],
  },
  {
    role: 'Role title',
    company: 'Company name · Location',
    start: '2023-06',
    startLabel: 'Jun 2023',
    end: '2024-12',
    endLabel: 'Dec 2024',
    summary:
      'Placeholder — one or two sentences on what you owned in this role and the outcome it drove.',
    stack: ['Tech one', 'Tech two'],
  },
  {
    role: 'Role title',
    company: 'Company name · Location',
    start: '2022-01',
    startLabel: 'Jan 2022',
    end: '2023-05',
    endLabel: 'May 2023',
    summary:
      'Placeholder — one or two sentences on what you owned in this role and the outcome it drove.',
    stack: ['Tech one', 'Tech two'],
  },
]
</script>

<style scoped>
.experience {
  padding: 5.5rem 1.25rem;
  border-top: 1px solid var(--border);
}

.experience-content {
  max-width: 46rem;
  margin: 0 auto;
}

.experience-header {
  text-align: center;
  margin-bottom: 3rem;
}

.experience-list {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}

.experience-list::before {
  content: '';
  position: absolute;
  left: 0.4375rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: var(--border);
}

.experience-item {
  position: relative;
  padding-left: 2rem;
}

.experience-item + .experience-item {
  margin-top: 2.5rem;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.35rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--accent-soft);
  border: 2px solid var(--accent);
}

.experience-topline {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem 1rem;
}

.experience-role {
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--foreground);
}

.experience-period {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--muted-foreground);
  margin: 0;
  white-space: nowrap;
}

.experience-company {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent);
  margin: 0.25rem 0 0.75rem;
}

.experience-summary {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--muted-foreground);
  margin: 0 0 0.9rem;
}

.experience-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.stack-item {
  padding: 0.3rem 0.55rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--muted-foreground);
  background: color-mix(in srgb, var(--background-elevated) 88%, var(--accent-soft));
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}
</style>
