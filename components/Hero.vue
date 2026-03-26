<template>
  <section class="hero">
    <div class="hero-bg" aria-hidden="true" />
    <div class="hero-content">
      <p class="hero-eyebrow">Available for work</p>
      <h1 class="hero-title">
        Hi, I'm <span class="hero-name">Juan Almeida Ross</span>
      </h1>
      <p class="hero-subtitle">
        I craft fast, accessible web experiences with attention to detail and a focus on products people enjoy using.
      </p>
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary">View work</a>
        <a href="#contact" class="btn btn-ghost">Contact</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.25rem 4rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 100% 80% at 50% 100%, var(--accent-soft), transparent 55%),
    radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.06), transparent 40%);
  pointer-events: none;
}

.dark .hero-bg {
  background:
    radial-gradient(ellipse 100% 80% at 50% 100%, var(--accent-soft), transparent 55%),
    radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.05), transparent 35%);
}

.hero-content {
  position: relative;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.9rem;
  margin: 0 0 1.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  border-radius: var(--radius-full);
}

.hero-title {
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.08;
  margin: 0 0 1.25rem;
  color: var(--foreground);
}

.hero-name {
  background: linear-gradient(120deg, var(--accent) 0%, var(--accent-2) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.0625rem, 2vw, 1.1875rem);
  color: var(--muted-foreground);
  margin: 0 auto 2rem;
  max-width: 32rem;
  line-height: 1.65;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8125rem 1.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-full);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primary {
  color: #fff;
  background: linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 70%, var(--accent-2)) 100%);
  box-shadow: 0 4px 20px color-mix(in srgb, var(--accent) 35%, transparent);
}

.btn-primary:hover {
  box-shadow: 0 8px 28px color-mix(in srgb, var(--accent) 45%, transparent);
  transform: translateY(-1px);
}

.btn-ghost {
  color: var(--foreground);
  background: color-mix(in srgb, var(--background-elevated) 65%, transparent);
  border: 1px solid var(--border-strong);
  backdrop-filter: blur(8px);
}

.btn-ghost:hover {
  border-color: color-mix(in srgb, var(--accent) 35%, transparent);
  background: var(--accent-soft);
}
</style>
