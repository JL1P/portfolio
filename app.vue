<template>
  <div class="app">
    <div class="app-glow" aria-hidden="true" />
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
.app {
  position: relative;
  min-height: 100vh;
  background-color: var(--background);
  color: var(--foreground);
  transition: background-color 0.35s ease, color 0.35s ease;
  overflow-x: clip;
}

.app-glow {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-soft), transparent),
    radial-gradient(ellipse 60% 40% at 100% 0%, rgba(6, 182, 212, 0.08), transparent);
}

.dark .app-glow {
  background:
    radial-gradient(ellipse 70% 45% at 50% -15%, var(--accent-soft), transparent),
    radial-gradient(ellipse 50% 35% at 100% 5%, rgba(34, 211, 238, 0.06), transparent);
}

.app > :not(.app-glow) {
  position: relative;
  z-index: 1;
}
</style>
