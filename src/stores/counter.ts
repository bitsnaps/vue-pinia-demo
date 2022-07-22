import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return { count: 0}
    },
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {
        double: (state) => {
            return state.count * 2
        }
    }
})