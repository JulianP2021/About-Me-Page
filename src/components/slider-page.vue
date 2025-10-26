<script setup lang="ts">
import type { SliderPageProps } from './slider.types';

const props = defineProps<SliderPageProps>();
</script>

<template>
    <swiper-slide>
        <h2>{{ headline }}</h2>
        <p>
            {{ text }}
        </p>
        <img :src="image" alt="Image not found" class="icon" />
        <p>
            You can look at it on <br /><a :href="link">{{ link }}</a>
        </p>
        <p v-if="sublink !== undefined">
            You can find informations, about the product at <br />
            <a v-if="sublink" :href="sublink">{{ sublink }}</a>
        </p>
        <div id="shiftdown"></div>
    </swiper-slide>

</template>

<style scoped>
img {
    max-width: 400px;
    max-height: 300px;
    margin: 12px 0;
}

@media(max-width: 600px) {
    img {
        max-width: 300px;
        max-height: 200px;
    }
    
}
</style>
