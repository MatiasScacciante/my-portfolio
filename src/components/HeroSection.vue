<template>
  <section class="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-3xl"></div>
      <div class="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/3 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Grid pattern -->
    <div class="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
      style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 64px 64px;">
    </div>

    <div class="relative max-w-6xl mx-auto w-full">
      <div class="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,440px)]">
        <div class="text-center lg:text-left">
          <!-- Available badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-600 dark:text-green-400 text-[12px] font-medium mb-10 animate-fade-in">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            {{ t('hero.available') }}
          </div>

          <!-- Headline -->
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.05]">
            <span class="block animate-fade-up" style="animation-delay: 0.1s; opacity: 0;">
              {{ t('hero.headline1') }}
            </span>
            <span class="block animate-fade-up" style="animation-delay: 0.2s; opacity: 0;">
              <span class="text-blue-500">{{ t('hero.headline2') }}</span>
            </span>
            <span class="block text-4xl sm:text-5xl md:text-6xl text-gray-400 dark:text-gray-500 font-semibold animate-fade-up" style="animation-delay: 0.35s; opacity: 0;">
              {{ t('hero.headline3') }}
            </span>
          </h1>

          <!-- Subheadline -->
          <p class="max-w-2xl mx-auto lg:mx-0 text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 animate-fade-up" style="animation-delay: 0.5s; opacity: 0;">
            {{ t('hero.subheadline') }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 animate-fade-up" style="animation-delay: 0.65s; opacity: 0;">
            <a
              href="#contact"
              class="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-[15px] transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              {{ t('hero.cta_primary') }}
            </a>
            <a
              href="#projects"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium text-[15px] hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
            >
              {{ t('hero.cta_secondary') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <!-- Tech pills -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-14 animate-fade-up" style="animation-delay: 0.8s; opacity: 0;">
            <span
              v-for="tech in techs"
              :key="tech"
              class="px-3 py-1 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200/80 dark:border-white/5"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="relative flex justify-center lg:justify-end animate-fade-up" style="animation-delay: 0.35s; opacity: 0;">
          <div class="absolute inset-x-10 top-10 bottom-6 rounded-[2rem] bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent blur-3xl"></div>
          <div class="relative w-full max-w-sm rounded-[2rem] border border-gray-200/80 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-3 shadow-[0_30px_90px_-40px_rgba(59,130,246,0.45)] backdrop-blur">
            <div class="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
              <img
                src="/matias-portrait.png"
                alt="Portrait of Matias"
                class="h-[500px] sm:h-[580px] w-full object-cover object-center"
              />
              <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/20 via-slate-950/5 to-transparent"></div>
            </div>
            <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/60 dark:border-white/10 bg-white/90 dark:bg-[#101010]/90 px-4 py-2 shadow-lg backdrop-blur">
              <span class="text-[11px] font-semibold tracking-[0.24em] uppercase text-gray-600 dark:text-gray-300">Matias</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style="animation-delay: 1.2s; opacity: 0;">
      <div class="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
        <span class="text-[11px] font-medium tracking-widest uppercase">{{ t('hero.scroll') }}</span>
        <div class="w-px h-8 bg-gradient-to-b from-gray-300 dark:from-gray-700 to-transparent"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const techs = ['.NET Core', 'Node.js', 'NestJS', 'Vue.js', 'SQL Server', 'Azure SQL', 'C#', 'REST APIs', 'TypeScript']
</script>
