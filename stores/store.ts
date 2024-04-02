import { defineStore } from "pinia"

export const useColorStore = defineStore("colorStore", {
  // state
  state: () => {
    return {
      color: "blue",
    }
  },
  // actions
  actions: {
    setColor(color: string) {
      this.color = color
    },
  },
  // getters
})
