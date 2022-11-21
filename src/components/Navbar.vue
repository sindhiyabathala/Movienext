<script setup>
import { useSearchStore } from '../../stores/search';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { RouterLink } from 'vue-router';

const user = {
    name: 'Sindhiya',
    email: 'sindhiya@gmail.com',
    imageUrl:
        'https://mymodernmet.com/wp/wp-content/uploads/2021/12/Netherlands-Spring-Albert-Dros-1.jpeg',
}

const queryStore = useSearchStore()

function handle(e) {
    queryStore.setQuery(e.target.value)
}
</script>

<template>
    <header class="text-gray-600 body-font flex flex-col items-center">
        <div class="container mx-auto flex p-5 items-center justify-between">
            <RouterLink to="/">
                <div
                    class="flex h-full title-font font-medium items-center text-gray-900 cursor-pointer transform transition-transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                        <path
                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path
                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                    <span class="ml-3 text-xl">MovieBuff</span>
                </div>
            </RouterLink>
            <div class="min-w-0 max-w-md flex-1 md:px-8 lg:px-0 xl:col-span-6 hidden sm:block">
                <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                    <div class="w-full">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input id="search" name="search"
                                class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Search" type="search" :value="queryStore.query" @input="handle" />
                        </div>
                    </div>
                </div>
            </div>
            <img class="h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-125"
                :src="user.imageUrl" alt="" />
        </div>

        <div class="w-full px-8 sm:hidden">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input id="search" name="search"
                    class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search" type="search" :value="query" @input="handle" />
            </div>
        </div>
    </header>
</template>

