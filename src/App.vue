<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore()

productStore.fill()

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Pinia" />

  <ul>
    <li v-for="p in productStore.products" :key="p.id">
      {{ p.name }} for ${{ p.price }}
    </li>
  </ul>
  <p>Nbr of Products: {{ productStore.count }} with total = ${{ productStore.total }}</p>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
