<template>
  <div>
    <NavBar />
    <HeroSection />
    <AboutCards />
    <ProjectsSection />
    <GallerySection />
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Reveal text animation (from your original main.js)
  const revealTitles = document.querySelectorAll('.reveal-text')
  revealTitles.forEach(title => {
    const text = title.textContent
    title.textContent = ''
    ;[...text].forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.transitionDelay = `${i * 0.07}s`
      title.append(span)
    })
  })

  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      } else {
        entry.target.classList.remove('active')
      }
    })
  }, { threshold: 0.5 })

  revealTitles.forEach(t => textObserver.observe(t))
})
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutCards from '../components/AboutCards.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import GallerySection from '../components/GallerySection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
