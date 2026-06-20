<template>
  <section id="skills" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-4">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-blue-500">{{ t('skills.label') }}</span>
      </div>

      <!-- Headline -->
      <div class="scroll-animate mb-10">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {{ t('skills.headline') }}<br />
          <span class="text-gray-400 dark:text-gray-500">{{ t('skills.subheadline') }}</span>
        </h2>
      </div>

      <div class="scroll-animate flex flex-wrap gap-3">
        <div
          v-for="category in skillCategories"
          :key="category.key"
          class="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02]"
        >
          <span class="text-base">{{ category.icon }}</span>
          <span class="text-[12px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{{ t(`skills.${category.key}`) }}</span>
          <span class="text-gray-300 dark:text-white/10">·</span>
          <span class="text-[13px] text-gray-700 dark:text-gray-300">{{ category.skills.join(' · ') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const skillCategories = [
  { key: 'backend', icon: '⚙️', skills: ['.NET Core / C#', 'Node.js', 'NestJS', 'REST APIs'] },
  { key: 'frontend', icon: '🎨', skills: ['Vue.js 3', 'TypeScript', 'Nuxt 3'] },
  { key: 'database', icon: '🗄️', skills: ['SQL Server / Azure SQL', 'T-SQL', 'MySQL'] },
  { key: 'cloud_tools', icon: '☁️', skills: ['Azure', 'Docker', 'Power Automate'] },
  { key: 'ai_tools', icon: '🤖', skills: ['Claude', 'Copilot', 'Prompt Engineering'] },
]
</script>
