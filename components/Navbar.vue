<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="#" class="logo">Juan Almeida Ross</a>
      <div class="nav-links">
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#contact" class="nav-link">Contact</a>
        <button type="button" class="theme-toggle" aria-label="Toggle theme" @click="toggleTheme">
          <svg v-if="isDark" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
}

.navbar-inner {
  width: min(1120px, 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 1.25rem;
  min-height: 3.25rem;
  background: color-mix(in srgb, var(--background-elevated) 72%, transparent);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
}

.logo {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--foreground);
  text-decoration: none;
  transition: color 0.2s ease;
}

.logo:hover {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  position: relative;
  padding: 0.5rem 0.85rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted-foreground);
  text-decoration: none;
  border-radius: var(--radius-full);
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: var(--foreground);
  background: var(--accent-soft);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  border-radius: var(--radius-full);
  background: var(--accent-soft);
  color: var(--accent);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.theme-toggle:hover {
  background: color-mix(in srgb, var(--accent) 22%, transparent);
  transform: scale(1.05);
}

.theme-toggle:active {
  transform: scale(0.97);
}

.theme-icon {
  width: 1.125rem;
  height: 1.125rem;
}

@media (max-width: 640px) {
  .nav-link {
    display: none;
  }

  .navbar-inner {
    padding-inline: 1rem;
  }
}
</style>
