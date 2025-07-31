<script setup lang>
import sliderPage from './slider-page.vue';
import { register } from 'swiper/element/bundle';

register();
const slides = [];

slides.push({
    headline: 'Hair Cutters',
    text: 'I created an online website for hair cutters to reserve times.',
    image: '/img/hair-cutters.png',
    link: 'https://business.juli.workers.dev/',
    sublink: "https://marketing-87r.pages.dev/",
});

slides.push({
    headline: 'Writing Tool',
    text: 'I created an online website for typing: After writing, you can see the results in a stats view.',
    image: '/img/writing-tool-stats.png',
    link: 'https://writing-tool.pages.dev/',
});

slides.push({
    headline: 'Coding Challenge',
    text: 'I created a little coding challenge.',
    image: '/img/coding-challenge.png',
    link: 'https://codingchallenge.pages.dev/',
});

slides.push({
    headline: 'Fraktale',
    text: 'I created an interactive fractal visualizer.',
    image: '/img/fraktale.png',
    link: 'https://fraktale.pages.dev/',
});

slides.push({
    headline: 'Pathfinding Visualizer',
    text: 'I created an interactive pathfinding visualizer.',
    image: '/img/pathfinding-visualizer.png',
    link: 'https://pathfindingalgorithms.pages.dev/',
});

</script>


<template>

    <!-- enable navigation, pagination, scrollbar -->
    <swiper-container :navigation="true" :pagination="true" :slides-per-view="1" :centered-slides="true">
        <slider-page v-for="slide in slides" :key="slide.text" :text="slide.text" :image="slide.image"
            :headline="slide.headline" :link="slide.link" :sublink="slide.sublink" />
    </swiper-container>
</template>

<style>
:root {
    --swiper-pagination-bullet-inactive-color: #cfcfcf;
    --swiper-pagination-bullet-inactive-opacity: 0.7;
}
</style>