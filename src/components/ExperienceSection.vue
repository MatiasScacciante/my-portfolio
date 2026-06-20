<template>
  <section id="experience" class="py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-6">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500">{{ t('experience.label') }}</span>
      </div>

      <!-- Compact row -->
      <div class="scroll-animate flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02]">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0">CG</div>

        <div class="flex-1">
          <p class="text-[14px] font-semibold text-gray-900 dark:text-white">
            {{ t('experience.job1_role') }} · <span class="text-gray-500 dark:text-gray-400 font-normal">{{ t('experience.job1_company') }}</span>
          </p>
          <p class="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">{{ t('experience.job1_desc') }}</p>
        </div>

        <div class="flex items-center gap-3 flex-shrink-0">
          <span class="text-[12px] text-gray-400 dark:text-gray-500">{{ t('experience.job1_period') }}</span>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 whitespace-nowrap">PL-500 Certified</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
