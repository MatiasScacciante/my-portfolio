<template>
  <div class="min-h-screen bg-white dark:bg-[#080808]">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AISection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import AISection from './components/AISection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

// ── Scroll animation observer ─────────────────────────────
let observer = null

function initScrollAnimation() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  )

  // Observe all scroll-animate elements
  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el)
  })
}

onMounted(() => {
  // Small delay to ensure DOM is ready
  setTimeout(initScrollAnimation, 100)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
