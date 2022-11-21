import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({ query: null }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setQuery(q) {
      this.query = q;
    },
  },
});
