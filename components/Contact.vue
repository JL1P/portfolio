<template>
  <section id="contact" class="contact">
    <div class="contact-inner">
      <header class="contact-header">
        <span class="section-eyebrow">Contact</span>
        <h2 class="section-heading">Let's build something</h2>
        <p class="section-intro">
          Open to roles and collaborations. Reach out by email or connect on social—I'll get back to you soon.
        </p>
      </header>
      <div class="contact-card">
        <a href="mailto:your.email@example.com" class="contact-btn">
          <span>Say hello</span>
          <svg class="contact-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <div class="social-links">
          <a href="https://github.com" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link social-link-accent" aria-label="LinkedIn">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link" aria-label="Twitter">
            <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 5.5rem 1.25rem 6rem;
  border-top: 1px solid var(--border);
  background: color-mix(in srgb, var(--background-elevated) 35%, var(--background));
}

.contact-inner {
  max-width: 36rem;
  margin: 0 auto;
  text-align: center;
}

.contact-header {
  margin-bottom: 2rem;
}

.contact-card {
  padding: 2rem 1.75rem;
  background: var(--background-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 20rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 75%, var(--accent-2)) 100%);
  box-shadow: 0 6px 24px color-mix(in srgb, var(--accent) 32%, transparent);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 32px color-mix(in srgb, var(--accent) 40%, transparent);
}

.contact-btn:active {
  transform: translateY(0);
}

.contact-btn-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  color: var(--muted-foreground);
  background: color-mix(in srgb, var(--background) 80%, var(--background-elevated));
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.social-link:hover {
  color: var(--foreground);
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.social-link-accent:hover {
  color: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 35%, transparent);
  background: var(--accent-soft);
}

.social-icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
