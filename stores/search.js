import { defineStore } from "pinia";

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({ query: null }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setQuery(q) {
      this.query = q;
    },
  },
  getters: {
    queryIsNotNull: (state) => {
      return state.query !== null && state.query !== "";
    },
  },
});
