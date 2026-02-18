<template>
  <section class="hero" id="about-me-scroll">
    <div class="interactive-wrapper" @mouseenter="startTyping" @mouseleave="stopTyping">
      <div class="scroll-area">
        <p class="ink-text" id="typewriter">{{ typedText }}</p>
        <div class="music-player">
          <img src="/media/song-art.jpg" alt="Song Art" class="song-art" />
          <div>
            <strong>Young and Beautiful</strong><br />
            <small>Lana Del Ray</small>
          </div>
          <button class="play-button" :class="{ pulsing: !isPlaying }" @click="toggleMusic">
            {{ isPlaying ? '⏸ PAUSE' : '▶ PLAY' }}
          </button>
        </div>
      </div>
      <div class="portrait-box">
        <img src="/media/portrait.png" alt="Karol Joy Portrait" class="portrait-img" />
      </div>
    </div>
    <audio ref="bgMusic" src="/media/young-and-beautiful.mp3" loop></audio>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const fullText = "Welcome to my digital space! I am Karol Joy, a creator and innovator. Thank you for opening this scroll. Explore my journey and projects below..."
const typedText = ref('')
const isPlaying = ref(false)
const bgMusic = ref(null)
let typingTimer = null
let charIndex = 0

function startTyping() {
  typedText.value = ''
  charIndex = 0
  typeNextChar()
}

function typeNextChar() {
  if (charIndex < fullText.length) {
    typedText.value += fullText.charAt(charIndex)
    charIndex++
    typingTimer = setTimeout(typeNextChar, 40)
  }
}

function stopTyping() {
  clearTimeout(typingTimer)
  typedText.value = ''
  charIndex = 0
}

function toggleMusic() {
  if (bgMusic.value.paused) {
    bgMusic.value.play()
    isPlaying.value = true
  } else {
    bgMusic.value.pause()
    isPlaying.value = false
  }
}
</script>