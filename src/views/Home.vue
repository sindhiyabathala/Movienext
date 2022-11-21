<script setup>
import GenreList from '../components/GenreList.vue';
import SearchResults from '../components/SearchResults.vue';
import { useSearchStore } from '../../stores/search';

const queryStore = useSearchStore()
</script>

<template>
  <div class="flex flex-col px-12 lg:px-28 py-12">
    <div v-if="queryStore.queryIsNotNull">
      <div class="text-4xl font-thin">Search Results</div>
      <SearchResults />
    </div>
    <div v-else>
      <div class="text-4xl font-thin">Genres</div>
      <GenreList />
    </div>
  </div>
</template>
