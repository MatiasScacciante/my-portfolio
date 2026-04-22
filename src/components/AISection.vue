<template>
  <section id="ai" class="py-28 px-6 bg-gray-50/50 dark:bg-[#0d0d0d] overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-4">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-blue-500">{{ t('ai.label') }}</span>
      </div>

      <!-- Headline -->
      <div class="scroll-animate mb-6">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {{ t('ai.headline') }}<br />
          <span class="text-blue-500">{{ t('ai.subheadline') }}</span>
        </h2>
      </div>

      <div class="scroll-animate mb-14 max-w-2xl">
        <p class="text-[17px] text-gray-500 dark:text-gray-400 leading-relaxed">{{ t('ai.intro') }}</p>
      </div>

      <!-- Items grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <div
          v-for="(item, i) in aiItems"
          :key="i"
          class="scroll-animate group relative p-6 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-300 overflow-hidden"
        >
          <!-- Hover glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

          <div class="relative">
            <div class="text-2xl mb-4">{{ item.icon }}</div>
            <div class="text-[11px] font-bold text-blue-500 tracking-widest mb-2">0{{ i + 1 }}</div>
            <h3 class="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">{{ t(`ai.item${i + 1}_title`) }}</h3>
            <p class="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{{ t(`ai.item${i + 1}_desc`) }}</p>
          </div>
        </div>
      </div>

      <!-- Result banner -->
      <div class="scroll-animate">
        <div class="relative p-7 rounded-2xl overflow-hidden border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/8">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>
          <div class="relative flex items-start gap-4">
            <div class="text-2xl flex-shrink-0">🎯</div>
            <p class="text-[16px] font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
              {{ t('ai.result') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const aiItems = [
  { icon: '🧪' },
  { icon: '🔍' },
  { icon: '🐛' },
  { icon: '📝' },
  { icon: '📚' },
]
</script>
