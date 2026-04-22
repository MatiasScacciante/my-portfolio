<template>
  <section id="skills" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-4">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-blue-500">{{ t('skills.label') }}</span>
      </div>

      <!-- Headline -->
      <div class="scroll-animate mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {{ t('skills.headline') }}<br />
          <span class="text-gray-400 dark:text-gray-500">{{ t('skills.subheadline') }}</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Category card -->
        <div
          v-for="category in skillCategories"
          :key="category.key"
          class="scroll-animate border border-gray-200 dark:border-white/5 rounded-2xl bg-white dark:bg-white/[0.02] p-6 hover:border-blue-200 dark:hover:border-blue-500/20 transition-all"
        >
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center text-base" :class="category.bgColor">
              {{ category.icon }}
            </div>
            <h3 class="text-[14px] font-semibold text-gray-900 dark:text-white">{{ t(`skills.${category.key}`) }}</h3>
          </div>
          <div class="space-y-3.5">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[13px] font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-[11px] font-medium" :class="skill.level >= 85 ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'">
                  {{ skill.level >= 85 ? t('skills.level_advanced') : t('skills.level_intermediate') }}
                </span>
              </div>
              <div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out skill-bar"
                  :class="skill.level >= 85 ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 'bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-500'"
                  :style="{ width: '0%' }"
                  :data-width="`${skill.level}%`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n, } from 'vue-i18n'
import { onMounted } from 'vue'

const { t } = useI18n()

const skillCategories = [
  {
    key: 'backend',
    icon: '⚙️',
    bgColor: 'bg-blue-500/10',
    skills: [
      { name: '.NET Core / C#', level: 90 },
      { name: 'Node.js', level: 88 },
      { name: 'NestJS', level: 85 },
      { name: 'REST API Design', level: 92 },
    ],
  },
  {
    key: 'frontend',
    icon: '🎨',
    bgColor: 'bg-purple-500/10',
    skills: [
      { name: 'Vue.js 3', level: 88 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
    ],
  },
  {
    key: 'database',
    icon: '🗄️',
    bgColor: 'bg-green-500/10',
    skills: [
      { name: 'SQL Server / Azure SQL', level: 92 },
      { name: 'T-SQL & Stored Procs', level: 90 },
      { name: 'Query Optimization', level: 88 },
    ],
  },
  {
    key: 'cloud_tools',
    icon: '☁️',
    bgColor: 'bg-orange-500/10',
    skills: [
      { name: 'Azure', level: 72 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Docker', level: 70 },
      { name: 'Power Automate', level: 85 },
    ],
  },
  {
    key: 'ai_tools',
    icon: '🤖',
    bgColor: 'bg-pink-500/10',
    skills: [
      { name: 'Claude (Anthropic)', level: 95 },
      { name: 'GitHub Copilot', level: 88 },
      { name: 'Prompt Engineering', level: 85 },
    ],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar')
          bars.forEach((bar) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.width
            }, 200)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  document.querySelectorAll('#skills .scroll-animate').forEach((el) => {
    if (el.querySelector('.skill-bar')) observer.observe(el)
  })
})
</script>
