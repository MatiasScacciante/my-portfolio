<template>
  <section id="projects" class="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d0d]">
    <div class="max-w-6xl mx-auto">
      <!-- Label -->
      <div class="scroll-animate mb-4">
        <span class="text-[12px] font-semibold tracking-widest uppercase text-blue-500">{{ t('projects.label') }}</span>
      </div>

      <!-- Headline -->
      <div class="scroll-animate mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {{ t('projects.headline') }}<br />
          <span class="text-gray-400 dark:text-gray-500">{{ t('projects.subheadline') }}</span>
        </h2>
      </div>

      <!-- Projects grid -->
      <div class="grid sm:grid-cols-2 gap-5">
        <div
          v-for="p in projects"
          :key="p.key"
          class="scroll-animate group relative border border-gray-200 dark:border-white/5 rounded-2xl bg-white dark:bg-white/[0.02] overflow-hidden hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-300 flex flex-col"
        >
          <!-- Visual -->
          <a :href="p.url" target="_blank" rel="noopener" class="relative block aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/5">
            <img
              v-if="p.image"
              :src="p.image"
              :alt="p.key"
              class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
            <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2" :class="p.placeholderBg">
              <span class="text-4xl">{{ p.icon }}</span>
              <span class="text-[12px] font-medium text-gray-500 dark:text-gray-400">{{ t(`projects.${p.key}_tag`) }}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span class="text-white text-[13px] font-medium flex items-center gap-1.5">
                {{ t('projects.view_live') }}
              </span>
            </div>
            <span
              v-if="p.live"
              class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-black/70 text-blue-600 dark:text-blue-400 backdrop-blur"
            >
              ★ {{ t('projects.live') }}
            </span>
          </a>

          <!-- Content -->
          <div class="p-5 flex flex-col flex-1">
            <h3 class="text-[17px] font-bold text-gray-900 dark:text-white">{{ t(`projects.${p.key}_title`) }}</h3>
            <p class="text-[13px] text-blue-500 font-medium mb-2.5">{{ t(`projects.${p.key}_category`) }}</p>
            <p class="text-[13.5px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">{{ t(`projects.${p.key}_desc`) }}</p>
            <p class="text-[11px] text-gray-400 font-mono">{{ t(`projects.${p.key}_stack`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const projects = [
  { key: 'cartafaro', url: 'https://cartafaro.com', live: true, image: '/projects/cartafaro.webp' },
  { key: 'mendoza', url: 'https://www.mendozamusic.com.ar/catalogo', live: true, image: '/projects/mendoza-music.webp' },
  { key: 'blackdress', url: 'https://public-site-production-7c3f.up.railway.app', live: true, image: '/projects/blackdress.webp' },
  { key: 'finanzas', url: 'https://finanzas-personales-three-ochre.vercel.app', live: true, image: null, icon: '💰', placeholderBg: 'bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-transparent' },
]
</script>
