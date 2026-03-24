export const useTheme = () => {
  const isDark = useState('isDark', () => false)

  const syncDocumentClass = () => {
    if (!import.meta.client) return
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      syncDocumentClass()
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  /** Resolve preference from localStorage and system; keep <html class="dark"> in sync. */
  const initTheme = () => {
    if (!import.meta.client) return
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = saved === 'dark' || (!saved && prefersDark)
    syncDocumentClass()
  }

  return {
    isDark,
    toggleTheme,
    initTheme,
  }
}
