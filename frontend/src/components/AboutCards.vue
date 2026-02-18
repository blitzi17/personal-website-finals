<template>
  <section id="about-me-scroll" style="scroll-margin-top: 120px;">
    <h2 class="gallery-title reveal-text">About Me</h2>

    <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; padding: 0 20px;">
      <!-- Hobbies Card -->
      <div class="about-card" @click="openModal('hobbies')">
        <img src="/media/HOB.jpg" alt="Hobbies" class="about-card-img" />
        <div class="about-card-overlay">
          <h3>Hobbies</h3>
          <p>View Details</p>
        </div>
      </div>

      <!-- Goals Card -->
      <div class="about-card" @click="openModal('goals')">
        <img src="/media/GOAL.jpg" alt="Goals" class="about-card-img" />
        <div class="about-card-overlay">
          <h3>Goals</h3>
          <p>View Details</p>
        </div>
      </div>

      <!-- Education Card -->
      <div class="about-card" @click="openModal('education')">
        <img src="/media/EDUC.png" alt="Education" class="about-card-img" />
        <div class="about-card-overlay">
          <h3>Education</h3>
          <p>View Details</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal" v-if="showModal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <img :src="modalImg" :alt="modalTitle" id="modalImg" />
        <div class="modal-text">
          <h2 id="modalTitle">{{ modalTitle }}</h2>
          <p id="modalDesc">{{ modalDesc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const modalImg = ref('')
const modalTitle = ref('')
const modalDesc = ref('')

const cardData = {
  hobbies: {
    img: '/media/HOB.jpg',
    title: 'Hobbies',
    desc: 'My hobbies are too many to count but i really love creating bouquets in different ways, i wish to create things that makes me happy.'
  },
  goals: {
    img: '/media/GOAL.jpg',
    title: 'Goals',
    desc: 'I wish to create things that makes me happy and reach new heights in my creative journey.'
  },
  education: {
    img: '/media/EDUC.png',
    title: 'Education',
    desc: 'Pursuing academic excellence and technical skills to build a professional future in digital arts.'
  }
}

function openModal(type) {
  const data = cardData[type]
  modalImg.value = data.img
  modalTitle.value = data.title
  modalDesc.value = data.desc
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

// Close on Escape key
if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
  })
}
</script>

<style scoped>
.about-card {
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(0,0,0,0.4);
  transition: transform 0.4s ease;
}

.about-card:hover {
  transform: scale(1.03);
}

.about-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-card-overlay {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(43, 29, 16, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: bottom 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  z-index: 2;
}

.about-card:hover .about-card-overlay {
  bottom: 0;
}

.about-card-overlay h3 {
  color: #fdf5e6;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  margin-bottom: 5px;
}

.about-card-overlay p {
  color: #fdf5e6;
  font-family: 'Dancing Script', cursive;
  font-size: 18px;
}

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

@media (max-width: 768px) {
  .about-card {
    width: 45%;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .about-card {
    width: 90%;
    height: 200px;
  }
}
</style>