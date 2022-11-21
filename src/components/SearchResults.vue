<script setup>
import MovieCard from './MovieCard.vue';
import { useMoviesStore } from '../../stores/movies';
import { useSearchStore } from '../../stores/search';

const moviesStore = useMoviesStore()
const queryStore = useSearchStore()
</script>

<template>
    <div class="w-full sm:px-8 mt-12 flex flex-wrap gap-8">
        <MovieCard
            v-for="movie in moviesStore.movies.filter((movie) => movie.name.toLowerCase().includes(queryStore.query.toLowerCase()))"
            :movie="movie" />
    </div>

    <div
        v-if="moviesStore.movies.filter((movie) => movie.name.toLowerCase().includes(queryStore.query.toLowerCase())).length === 0">
        No movies found!
    </div>
</template>

