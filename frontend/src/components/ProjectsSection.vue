<template>
  <section id="projects-section" class="projects-stack-container" style="scroll-margin-top: 120px;">
    <h2 class="gallery-title reveal-text">Projects</h2>

    <div class="stack-wrapper">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
        :style="{ '--index': index + 1 }"
      >
        <div class="card-content">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <img :src="project.image" :alt="project.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Magtanim Ay Di Biro',
    description: 'An Arduino-based project that automatically measures the soil\'s condition and water level and adds water based on those two parameters.',
    image: '/media/arduino.jpg'
  },
  {
    title: 'JOY: Virtual Assistant',
    description: 'A Python-based system that employs voice recognition and follows order based on voice commands.',
    image: '/media/virtual-assistant.jpg'
  },
  {
    title: 'Attendance Face Track',
    description: 'Our team built an attendance face tracker solution that will assist you with attendance tracking without any bother.',
    image: '/media/face-track.jpg'
  }
]
</script>