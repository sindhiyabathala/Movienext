<script setup>
const props = defineProps([
    'movie',
])
</script>

<!-- <div>{{ movie.name }} {{ movie.rating?.average }}</div> -->
<template>
    <div class="flex flex-col flex-none">
        <RouterLink :to="'/' + movie.id">
            <div class="rounded-xl shadow-lg overflow-hidden cursor-pointer">
                <img class="hover:scale-[1.15] transform transition-transform" :src="movie.image?.medium" />
            </div>
        </RouterLink>
        <RouterLink :to="'/' + movie.id">
            <div class="text-xl font-normal mt-4 w-48 cursor-pointer hover:text-blue-700 transition-colors">{{
                    movie.name
            }}
            </div>
        </RouterLink>
        <div class="text-xl font-light flex gap-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-yellow-300">
                <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
            </svg>
            <p class="text-base">
                {{ movie.rating?.average }}/10
            </p>
        </div>
    </div>
</template>

