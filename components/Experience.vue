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
            <p
              v-for="para in job.summary"
              :key="para"
              class="experience-summary"
            >
              {{ para }}
            </p>
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
  /** One entry per rendered paragraph. */
  summary: string[]
  stack: string[]
}

const experience: Job[] = [
  {
    role: 'Frontend Developer',
    company: 'Payabli · Remote',
    start: '2024-05',
    startLabel: 'May 2024',
    end: '2025-06',
    endLabel: 'Jun 2025',
    summary: [
      "Payments infrastructure startup. I built and maintained the customer-facing portal in Remix and TypeScript, and launched one section of it from scratch with a second developer. The piece I'd point to is a pay-by-phone IVR flow I built end to end on a PCI-compliant voice platform — call flow, data handling, and API integration at each step — now running in production against live transactions.",
      "I also shipped an Apple Pay integration and the frontend for moving user management onto a role-based access model, and worked through the portal's accessibility audit: ARIA, semantic markup, keyboard and screen reader navigation.",
    ],
    stack: ['Remix', 'TypeScript', 'React', 'Plum Fuse'],
  },
  {
    role: 'Web Developer',
    company: 'BYT Digital Marketing Agency · Havana',
    start: '2021-03',
    startLabel: 'Mar 2021',
    end: '2022-12',
    endLabel: 'Dec 2022',
    summary: [
      'Digital agency serving business clients. I built the frontend of an order management system in Vue for an office equipment repair company, covering the full service lifecycle — intake, approval, technician and courier assignment, completion tracking. I also built the 7 Wireless site in Vue 3 for a Miami repair retailer, handling the UI design myself since the project had no designer — a multi-page marketing site with a quote flow, service and product sections, and store locations. Sprint-based, with client demos at each milestone.',
    ],
    stack: ['Vue 3', 'JavaScript', 'Figma'],
  },
  {
    role: 'Web Developer',
    company: 'Independent Projects · Havana',
    start: '2019-09',
    startLabel: 'Sep 2019',
    end: '2021-03',
    endLabel: 'Mar 2021',
    summary: [
      'Self-directed work before agency employment. I built a full-stack sales tracking application in Django for a prepaid internet card reseller — modeling card categories and price tiers, with reporting over sales activity. First time I owned something from data model to deployed interface.',
    ],
    stack: ['Django', 'Python'],
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
