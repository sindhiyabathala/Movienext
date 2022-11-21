import { defineStore } from "pinia";

export const useMoviesStore = defineStore({
  id: "movies",
  state: () => ({ movies: [] }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setMovies(m) {
      this.movies = m;
    },
  },
  getters: {
    getSearchQueryMovies: (state, query) => {
      return state.movies.filter((movie) => movie.name.includes(query));
    },
  },
});
