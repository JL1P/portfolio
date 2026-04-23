import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['tests/**/*.spec.{js,ts}'],
  },
})