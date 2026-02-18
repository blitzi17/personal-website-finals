<template>
  <section id="gallery-section" style="scroll-margin-top: 120px;">
    <h2 class="gallery-title reveal-text">Gallery</h2>

    <!-- Infinite Scrolling Track -->
    <div class="infinite-container">
      <div class="scroll-track">
        <!-- Original 5 cards + 5 duplicates for seamless loop -->
        <div
          v-for="(item, index) in allItems"
          :key="index"
          class="scroll-card gallery-item"
          @click="openGalleryModal(item)"
        >
          <img :src="item.image" :alt="item.title" />
          <div class="card-overlay">
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Modal -->
    <div class="modal" v-if="showModal" @click.self="closeGalleryModal">
      <div class="modal-content">
        <span class="close-btn" @click="closeGalleryModal">&times;</span>
        <img :src="currentItem.image" :alt="currentItem.title" id="modalImg" />
        <div class="modal-text">
          <h2 id="modalTitle">{{ currentItem.title }}</h2>
          <p id="modalDesc">{{ currentItem.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const galleryItems = [
  {
    image: '/media/gallery1.jpg',
    title: 'Coffee Run',
    description: 'A quick coffee run captured in the golden hour light.'
  },
  {
    image: '/media/gallery2.jpg',
    title: 'Family: Peace',
    description: 'A peaceful moment with the people who matter most.'
  },
  {
    image: '/media/gallery3.jpg',
    title: 'Creative Love',
    description: 'Love expressed through creative endeavors and artistry.'
  },
  {
    image: '/media/gallery4.jpg',
    title: 'Artistic View Point',
    description: 'Seeing the world through an artistic lens.'
  },
  {
    image: '/media/gallery5.jpg',
    title: 'Unlimited Laugh',
    description: 'Joy and laughter that knows no bounds.'
  }
]

// Duplicate items for infinite scroll effect (original 5 + cloned 5)
const allItems = computed(() => [...galleryItems, ...galleryItems])

const showModal = ref(false)
const currentItem = ref({ image: '', title: '', description: '' })

function openGalleryModal(item) {
  currentItem.value = item
  showModal.value = true
}

function closeGalleryModal() {
  showModal.value = false
}

// Close on Escape key
if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGalleryModal()
  })
}
</script>

<style scoped>
/* Modal overrides for v-if display */
.modal {
  display: flex;
  position: fixed;
  z-index: 10001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}
</style>