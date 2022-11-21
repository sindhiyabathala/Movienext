
<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useSearchStore } from '../../composables/search';
import Stars from '../components/Stars.vue';

const props = defineProps([
    'id',
])

const details = ref({})

const { setQuery } = useSearchStore()

onMounted(async () => {
    try {
        setQuery(null)
        const res = await fetch("https://api.tvmaze.com/shows/" + props.id)
        const movie = await res.json()

        details.value = movie
    } catch (e) {
        console.log("Could not fetch show. Error: ", e.message);
    }
})
</script>

<template>
    <div class="px-8 md:px-40 pb-64 mt-8 flex flex-col items-center md:items-start md:justify-center md:flex-row gap-x-12">
        <img :src="details.image?.original" class="h-72 md:h-96 max-w-lg rounded-xl shadow-xl object-contain"/>
        <div class="flex flex-col gap-y-4 mt-4">
            <p class="text-4xl font-extralight">{{ details.name }}</p>
            <p class="text-2xl font-extralight">{{ details.language }} | {{ details.type }}</p>
            <Stars :stars="details.rating?.average" />
            <div v-html="details.summary" class="text-xl font-light"></div>
        </div>
    </div>
</template>
