<script setup lang="ts">
import type { SliderPageVideoProps } from './slider.types';

const props = defineProps<SliderPageVideoProps>();
</script>

<template>
    <swiper-slide>
        <h2>{{ headline }}</h2>
        <p>
            {{ text }}{{ video }}
        </p>
        <video :src="video" controls class="icon" width="60%"/>
        <p>
            You can look at it on <br /><a :href="link">{{ link }}</a>
        </p>
        <p>{{ video }}</p>

        <p v-if="sublink !== undefined">
            You can find informations, about the product at <br />
            <a v-if="sublink" :href="sublink">{{ sublink }}</a>
        </p>
        <div id="shiftdown"></div>
    </swiper-slide>

</template>
