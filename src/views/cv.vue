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
  background-color: white;
  border: 1px solid #eee;
  color: #333;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.color h2 {
  color: #333;
}

.line {
  border-bottom: 2px solid #9e9e9e;
  margin: 20px 0;
}


.title {
  text-align: left;
  color: black;
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 20px;
  margin-left: 30px;
}
</style>