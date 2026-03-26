<template>
  <footer class="footer">
    <p class="copyright">
      © {{ new Date().getFullYear() }} Juan Almeida Ross. Crafted with care.
    </p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 1.25rem 2.5rem;
  border-top: 1px solid var(--border);
}

.copyright {
  text-align: center;
  margin: 0;
  font-size: 0.8125rem;
  color: var(--muted-foreground);
  letter-spacing: 0.01em;
}
</style>
