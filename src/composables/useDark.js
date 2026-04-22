import { ref, watch, onMounted } from 'vue'

const isDark = ref(true)

export function useDark() {
  onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  })

  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function toggleDark() {
    isDark.value = !isDark.value
    localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  watch(isDark, applyTheme)

  return { isDark, toggleDark }
}
