<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/80 dark:bg-[#080808]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
        MS<span class="text-blue-500">.</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="`#${item.key}`"
          class="text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {{ t(`nav.${item.key}`) }}
        </a>
      </div>

      <!-- Right Controls -->
      <div class="flex items-center gap-3">
        <!-- Lang Toggle -->
        <button
          @click="toggleLocale"
          class="flex items-center gap-1.5 text-[12px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2.5 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
        >
          <span>{{ locale === 'en' ? '🇬🇧' : '🇦🇷' }}</span>
          <span>{{ locale === 'en' ? 'EN' : 'ES' }}</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDark()"
          class="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- CTA -->
        <a
          href="#contact"
          class="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[13px] font-medium hover:opacity-80 transition-opacity"
        >
          {{ t('nav.cta') }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDark } from '../composables/useDark.js'

const { t, locale } = useI18n()
const { isDark, toggleDark } = useDark()

const scrolled = ref(false)

const navItems = [
  { key: 'about' },
  { key: 'experience' },
  { key: 'projects' },
  { key: 'skills' },
  { key: 'contact' },
]

function toggleLocale() {
  locale.value = locale.value === 'en' ? 'es' : 'en'
  localStorage.setItem('portfolio-locale', locale.value)
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
