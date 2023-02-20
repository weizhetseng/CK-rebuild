<script setup>
import { RouterLink, RouterView } from 'vue-router'
import btn_footer from './components/btn_footer.vue';
import btn_header from './components/btn_header.vue';
</script>

<template>
  <btn_header></btn_header>
  <RouterView />
  <btn_footer></btn_footer>
</template>
