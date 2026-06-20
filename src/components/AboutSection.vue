<template>
  <section id="about" class="py-28 px-6 bg-gray-50/50 dark:bg-[#0d0d0d]">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-4">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-blue-500">{{ t('about.label') }}</span>
      </div>

      <!-- Headline -->
      <div class="scroll-animate mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {{ t('about.headline') }}<br />
          <span class="text-gray-400 dark:text-gray-500">{{ t('about.subheadline') }}</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-start">
        <!-- Bio -->
        <div class="scroll-animate space-y-5">
          <p class="text-[17px] leading-relaxed text-gray-600 dark:text-gray-300">
            {{ t('about.bio_1') }}
          </p>
          <p class="text-[17px] leading-relaxed text-gray-600 dark:text-gray-300">
            {{ t('about.bio_2') }}
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-white/5">
            <div>
              <div class="text-3xl font-bold text-gray-900 dark:text-white">3+</div>
              <div class="text-[13px] text-gray-500 dark:text-gray-400 mt-1">Years building<br />production software</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-gray-900 dark:text-white">10+</div>
              <div class="text-[13px] text-gray-500 dark:text-gray-400 mt-1">Enterprise<br />projects shipped</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-gray-900 dark:text-white">1</div>
              <div class="text-[13px] text-gray-500 dark:text-gray-400 mt-1">SaaS product<br />in production</div>
            </div>
          </div>
        </div>

        <!-- How I Work -->
        <div class="scroll-animate">
          <h3 class="text-[13px] font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">{{ t('about.how_label') }}</h3>
          <div class="space-y-4">
            <div
              v-for="(item, i) in howItems"
              :key="i"
              class="group p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-blue-200 dark:hover:border-blue-500/20 hover:bg-blue-50/30 dark:hover:bg-blue-500/5 transition-all cursor-default"
            >
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-blue-500 text-[13px] font-bold">{{ String(i + 1).padStart(2, '0') }}</span>
                </div>
                <div>
                  <h4 class="text-[15px] font-semibold text-gray-900 dark:text-white mb-1">{{ t(`about.how_${i + 1}_title`) }}</h4>
                  <p class="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{{ t(`about.how_${i + 1}_desc`) }}</p>
                </div>
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
const howItems = [1, 2, 3]
</script>
