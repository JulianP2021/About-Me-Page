<script setup lang="ts">
import { goToNextPage } from '@/shared';
</script>


<template>
  <main>
    <div class="container">
      <div id="shiftdown"></div>
      <div class="card">
        <img src="/img/profile-image.jpg" alt="Julian's profile image" class="icon-circle" />

        <div class="title">Education</div>
        <ul>
          <li>I finished high school diploma called "Abitur" at the "Gegor-Mendel-Gymnasium"</li>
          <li>I am currently studying computer science at the TUM (Technische Universität München)</li>
        </ul>
        <div class="line"></div>
        <div class="title">Free Time</div>
        <ul>
          <li>Skiing</li>
          <li>Programming</li>
          <li>Playing soccer</li>
        </ul>
        <div class="line"></div>
        <div class="title">Dream Job</div>
        <p>
          My dream destination is America working in the Cloudflare
          department in California.
        </p>
        <div class="line"></div>

        <p>
          Thank you for visiting my website.</p>
        <p> Please feel free to <button @click="goToNextPage()">contact me</button> if
          you
          have any questions or want to connect.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 8px;
  padding: 22px;
  box-shadow: 0 6px 18px rgba(12, 15, 20, 0.06);
  max-width: 820px;
  margin: 12px auto;
}

.color h2 {
  color: #333;
}

.line {
  border-bottom: 1px solid var(--color-border);
  margin: 18px 0;
}


.title {
  text-align: left;
  color: var(--color-heading);
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 18px;
  padding-left: 8px;
}
</style>
