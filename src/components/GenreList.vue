<script setup>
import { ref, onMounted, reactive } from 'vue';
import GenreMovies from './GenreMovies.vue';
import { useMoviesStore } from '../../stores/movies';

const moviesStore = useMoviesStore()

const genres = ref([])
const moviesByGenre = reactive({})

onMounted(async () => {
    try {
        const res = await fetch("https://api.tvmaze.com/shows")
        const movies = await res.json()

        moviesStore.setMovies(movies)

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
        <GenreMovies v-for="(movies, genre) in moviesByGenre" :genre="genre" :movies="movies" />
    </div>
</template>

