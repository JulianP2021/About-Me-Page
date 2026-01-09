<script setup lang>
import SliderPage from './slider-page.vue'
import SliderPageVideo from './slider-page-video.vue'
import { register } from 'swiper/element/bundle'

register()
const slides = []
const video_slides = []

slides.push({
  headline: 'Writing Tool',
  text: 'I created an online website for typing: After writing, you can see the results in a stats view.',
  image: '/img/writing-tool-stats.png',
  link: 'https://writing-tool.pages.dev/',
})

slides.push({
  headline: 'Coding Challenge',
  text: 'I created a little coding challenge.',
  image: '/img/coding-challenge.png',
  link: 'https://codingchallenge.pages.dev/',
})

slides.push({
  headline: 'Fraktale',
  text: 'I created an interactive fractal visualizer.',
  image: '/img/fraktale.png',
  link: 'https://some-fractals.pages.dev/',
})

slides.push({
  headline: 'Pathfinding Visualizer',
  text: 'I created an interactive pathfinding visualizer.',
  image: '/img/pathfinding-visualizer.png',
  link: 'https://pathfindingalgorithms.pages.dev/',
})

slides.push({
  headline: '8-puzzle',
  text: 'I created an interactive 8-puzzle game.',
  image: '/img/8-puzzle.png',
  link: 'https://some-8-puzzle.pages.dev/',
})

video_slides.push({
  headline: 'My biggest project (Management System)',
  text: 'I developed a comprehensive management system for a hair cutter business. This system includes features such as appointment scheduling, customer management, and inventory tracking and an ai chatbot. The project was built using React and supabase.',
  video: '/video/Mane.mp4',
  link: 'https://mane-management.juli.workers.dev/',
})

video_slides.push({
  headline: 'Route Planner (Practical Course)',
  text: 'My practical course in my fourth semester. We used selfhosted osm and osrm.',
  video: '/video/practical_preview.mp4',
  link: 'no link available',
})
</script>

<template>
  <!-- enable navigation, pagination, scrollbar -->
  <swiper-container
    :navigation="true"
    :pagination="true"
    :slides-per-view="1"
    :centered-slides="true"
  >
    <slider-page-video
      v-for="slide in video_slides"
      :key="slide.text"
      :text="slide.text"
      :video="slide.video"
      :headline="slide.headline"
      :link="slide.link"
      :sublink="slide.sublink"
    />
    <slider-page
      v-for="slide in slides"
      :key="slide.text"
      :text="slide.text"
      :image="slide.image"
      :headline="slide.headline"
      :link="slide.link"
      :sublink="slide.sublink"
    />
  </swiper-container>
</template>

<style>
:root {
  --swiper-pagination-bullet-inactive-color: #cfcfcf;
  --swiper-pagination-bullet-inactive-opacity: 0.7;
}
</style>
