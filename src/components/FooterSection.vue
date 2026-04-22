<template>
  <footer class="py-10 px-6 border-t border-gray-200 dark:border-white/5">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="text-[14px] font-semibold text-gray-900 dark:text-white">MS<span class="text-blue-500">.</span></span>
        <span class="text-gray-300 dark:text-gray-700">·</span>
        <span class="text-[13px] text-gray-500 dark:text-gray-500">{{ t('footer.built') }}</span>
      </div>
      <div class="flex items-center gap-4 text-[12px] text-gray-400 dark:text-gray-600">
        <span>{{ t('footer.stack') }}</span>
        <span>·</span>
        <span>© {{ year }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>
