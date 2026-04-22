<template>
  <section id="projects" class="py-28 px-6 bg-gray-50/50 dark:bg-[#0d0d0d]">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-4">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-blue-500">{{ t('projects.label') }}</span>
      </div>

      <!-- Headline -->
      <div class="scroll-animate mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {{ t('projects.headline') }}<br />
          <span class="text-gray-400 dark:text-gray-500">{{ t('projects.subheadline') }}</span>
        </h2>
      </div>

      <!-- Projects -->
      <div class="space-y-6">
        <!-- Project 1: Cartafaro (featured) -->
        <div class="scroll-animate">
          <div class="group relative border border-gray-200 dark:border-white/5 rounded-3xl bg-white dark:bg-white/[0.02] overflow-hidden hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-300">
            <div class="h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <div class="p-8 md:p-10">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      ★ {{ t('projects.live') }}
                    </span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('projects.p1_title') }}</h3>
                  <p class="text-[14px] text-blue-500 font-medium mt-1">{{ t('projects.p1_category') }}</p>
                </div>
                <a
                  href="https://cartafaro.com"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-[13px] font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex-shrink-0"
                >
                  {{ t('projects.view_live') }}
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p class="text-[15px] text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">{{ t('projects.p1_desc') }}</p>

              <div class="grid sm:grid-cols-2 gap-3 mb-8">
                <div v-for="i in 4" :key="i" class="flex items-start gap-2.5">
                  <div class="w-4 h-4 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-2.5 h-2.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-[13px] text-gray-600 dark:text-gray-400">{{ t(`projects.p1_b${i}`) }}</p>
                </div>
              </div>

              <div class="pt-5 border-t border-gray-100 dark:border-white/5">
                <p class="text-[12px] text-gray-400 font-mono">{{ t('projects.p1_stack') }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
