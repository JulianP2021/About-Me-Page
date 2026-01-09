<script setup lang="ts">
import Slider from '@/components/slider.vue';
import { goToNextPage } from '@/shared';
</script>

<template>
  <main>
    <div class="container">
      <div class="content-card">
        <h2>My Projects</h2>
        <p>
          Throughout my studies and career, I have had the opportunity to work on
          a variety of projects that showcase my skills and interests. Here are a
          few of my notable achievements:
        </p>
        <Slider />
        <p>
          I am always looking for new challenges and opportunities to expand my
          skillset. If you have a project that you think I might be interested in,
          please don't hesitate to
          <button @click="goToNextPage">contact me!</button>
        </p>
      </div>
    </div>
  </main>
</template>
