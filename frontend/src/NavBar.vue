<template>
  <header>
    <nav class="nav-container">
      <ul class="nav-links">
        <li><router-link to="/">HOME</router-link></li>
        <li class="dropdown">
          <a href="#about-me-scroll">ABOUT</a>
          <ul class="dropdown-content">
            <li><a href="#about-me-scroll">HOBBIES</a></li>
            <li><a href="#about-me-scroll">GOALS</a></li>
            <li><a href="#about-me-scroll">EDUCATION</a></li>
          </ul>
        </li>
        <li><a href="#projects-section">PROJECTS</a></li>
        <li><a href="#gallery-section">GALLERY</a></li>
        <li><router-link to="/guestbook">GUESTBOOK</router-link></li>
        <li class="dropdown">
          <a href="#">CONTACT</a>
          <ul class="dropdown-content">
            <li><a href="https://linkedin.com" target="_blank">LINKEDIN</a></li>
            <li><a href="https://github.com/blitzi17" target="_blank">GITHUB</a></li>
            <li><a href="https://instagram.com" target="_blank">INSTAGRAM</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// No logic needed — pure navigation
</script>