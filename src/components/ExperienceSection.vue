<template>
  <section id="experience" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-4">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-blue-500">{{ t('experience.label') }}</span>
      </div>

      <!-- Headline -->
      <div class="scroll-animate mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {{ t('experience.headline') }}<br />
          <span class="text-gray-400 dark:text-gray-500">{{ t('experience.subheadline') }}</span>
        </h2>
      </div>

      <!-- Experience Card -->
      <div class="scroll-animate">
        <div class="relative border border-gray-200 dark:border-white/5 rounded-3xl bg-white dark:bg-white/[0.02] overflow-hidden">
          <!-- Top bar accent -->
          <div class="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent"></div>

          <div class="p-8 md:p-10">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <!-- Company logo placeholder -->
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-[14px]">CG</div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('experience.job1_company') }}</h3>
                    <p class="text-[14px] text-blue-500 font-medium">{{ t('experience.job1_role') }}</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-start md:items-end gap-1">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                  {{ t('experience.job1_period') }}
                </span>
                <span class="text-[13px] text-gray-400 dark:text-gray-500">{{ t('experience.job1_location') }}</span>
              </div>
            </div>

            <p class="text-[15px] text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {{ t('experience.job1_desc') }}
            </p>

            <!-- Impact bullets -->
            <div class="grid md:grid-cols-2 gap-3">
              <div
                v-for="i in 6"
                :key="i"
                class="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5"
              >
                <div class="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">{{ t(`experience.job1_b${i}`) }}</p>
              </div>
            </div>

            <!-- Tech stack used -->
            <div class="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
              <p class="text-[11px] font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">Stack</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in jobStack"
                  :key="tech"
                  class="px-2.5 py-1 rounded-lg text-[12px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"
                >{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certification -->
      <div class="scroll-animate mt-6">
        <div class="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02]">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </div>
          <div>
            <p class="text-[14px] font-semibold text-gray-900 dark:text-white">Microsoft Certified: Power Automate RPA Developer Associate</p>
            <p class="text-[12px] text-gray-500 dark:text-gray-400">PL-500 · Microsoft · 2026</p>
          </div>
          <div class="ml-auto">
            <span class="px-3 py-1 rounded-full text-[11px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">Certified</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const jobStack = ['.NET Core', 'C#', 'Node.js', 'NestJS', 'Vue.js', 'SQL Server', 'Azure SQL', 'T-SQL', 'REST APIs', 'Power Automate', 'Scrum']
</script>
