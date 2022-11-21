<script setup>
import { ref, onMounted, reactive } from 'vue';
import GenreMovies from './GenreMovies.vue';

const genres = ref([])
const moviesByGenre = reactive({})

onMounted(async () => {
    try {
        const res = await fetch("https://api.tvmaze.com/shows")
        const movies = await res.json()

        genres.value = movies.reduce((prev, current) => {
            let genresTemp = prev

            current.genres?.forEach(genre => {
                if (!prev.includes(genre)) genresTemp = [...prev, genre]
            });

            return genresTemp
        }, [])

        genres.value.forEach((genre) => {
            moviesByGenre[genre] = movies.filter((movie) => movie.genres?.includes(genre)).sort((a, b) => a.rating?.average < b.rating?.average ? 1 : -1)
        })
    } catch (e) {
        console.log("Could not fetch shows. Error: ", e.message);
    }
})
</script>

<template>
    <div class="w-full sm:px-8 mt-12 flex flex-col">
        <GenreMovies v-for="(movies, genres) in moviesByGenre" :genre="genres" :movies="movies" />
    </div>
</template>

