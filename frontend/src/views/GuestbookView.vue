<template>
  <div class="guestbook-page">
    <NavBar />

    <div class="guestbook-container">
      <h1 class="guestbook-title reveal-text">Guestbook</h1>

      <!-- POST METHOD: Submit a new comment -->
      <form class="guestbook-form" @submit.prevent="submitEntry">
        <input
          v-model="newName"
          type="text"
          placeholder="Your Name"
          required
          class="form-input"
        />
        <textarea
          v-model="newMessage"
          placeholder="Leave a message..."
          required
          class="form-textarea"
        ></textarea>

        <!-- LIST/SELECT: Category dropdown -->
        <select v-model="newCategory" class="form-select">
          <option value="General">General</option>
          <option value="Feedback">Feedback</option>
          <option value="Question">Question</option>
          <option value="Greeting">Greeting</option>
        </select>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>

      <!-- GET METHOD: Filter by category -->
      <div class="filter-section">
        <label>Filter by category:</label>
        <select v-model="filterCategory" @change="fetchEntries" class="form-select">
          <option value="">All</option>
          <option value="General">General</option>
          <option value="Feedback">Feedback</option>
          <option value="Question">Question</option>
          <option value="Greeting">Greeting</option>
        </select>
      </div>

      <!-- Display guestbook entries -->
      <div class="entries-list">
        <div v-for="entry in entries" :key="entry.id" class="entry-card">
          <div class="entry-header">
            <strong>{{ entry.name }}</strong>
            <span class="entry-category">{{ entry.category }}</span>
          </div>
          <p>{{ entry.message }}</p>
          <small>{{ new Date(entry.created_at).toLocaleDateString() }}</small>
        </div>
        <p v-if="entries.length === 0" class="no-entries">
          No messages yet. Be the first to leave one!
        </p>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

// TEMPORARY — will update after backend is deployed:
const API_URL = 'https://personalwebsitebackend-seven.vercel.app/api/guestbook'

const entries = ref([])
const newName = ref('')
const newMessage = ref('')
const newCategory = ref('General')
const filterCategory = ref('')

// GET method — Fetch entries from Nest.js REST API
async function fetchEntries() {
  try {
    const url = filterCategory.value
      ? `${API_URL}?category=${filterCategory.value}`
      : API_URL
    const response = await axios.get(url)
    entries.value = response.data
  } catch (error) {
    console.error('Error fetching entries:', error)
  }
}

// POST method — Send new entry to Nest.js REST API
async function submitEntry() {
  try {
    await axios.post(API_URL, {
      name: newName.value,
      message: newMessage.value,
      category: newCategory.value,
    })
    // Clear form
    newName.value = ''
    newMessage.value = ''
    newCategory.value = 'General'
    // Refresh the list
    await fetchEntries()
  } catch (error) {
    console.error('Error submitting entry:', error)
  }
}

// Fetch entries when page loads
onMounted(fetchEntries)
</script>

<style scoped>
.guestbook-page {
  min-height: 100vh;
}

.guestbook-container {
  max-width: 800px;
  margin: 120px auto 60px;
  padding: 0 20px;
}

.guestbook-title {
  font-family: 'Dancing Script', cursive;
  font-size: 80px;
  color: #fdf5e6;
  text-align: center;
  text-shadow: 2px 4px 15px rgba(0,0,0,0.8);
  margin-bottom: 40px;
}

.guestbook-form {
  background: rgba(253, 250, 246, 0.95);
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.form-input, .form-textarea, .form-select {
  padding: 12px 15px;
  border: 1px solid rgba(43, 29, 16, 0.2);
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #2b1d10;
  background: #fff;
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-btn {
  background: #2b1d10;
  color: #fdfaf6;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background: #d4af37;
}

.filter-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #fdf5e6;
}

.entries-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.entry-card {
  background: rgba(253, 250, 246, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  color: #2b1d10;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.entry-category {
  background: #d4af37;
  color: #2b1d10;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.no-entries {
  text-align: center;
  color: #fdf5e6;
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .guestbook-title { font-size: 50px; }
  .guestbook-container { margin-top: 80px; }
}
@media (max-width: 480px) {
  .guestbook-title { font-size: 36px; }
}
</style>