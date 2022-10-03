import { defineStore } from "pinia"

// Static import 
// import products from '@/data/products.json'

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [],
        }
    },
    // actions
    actions: {
        // Don't forget to add async to the function
        async fill() {
            // Static import
            // this.products = products

            // Dynamic import (better performance)
            this.products = (await import('@/data/products.json')).default
            // from axios
            // this.products = (await axios.get('http://endpoint')).data
        }
    },
    // getters
})