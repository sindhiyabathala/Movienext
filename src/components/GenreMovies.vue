
<script setup>
import MovieCard from './MovieCard.vue';

const props = defineProps([
    'genre',
    'movies'
])
</script>

<template>
    <div class="flex flex-col gap-y-6">
        <div class="text-3xl font-extralight">{{ genre }}</div>
        <div class="flex gap-x-8 items-start overflow-x-scroll mb-8">
            <MovieCard v-for="movie in movies" :movie="movie" />
        </div>
    </div>
</template>