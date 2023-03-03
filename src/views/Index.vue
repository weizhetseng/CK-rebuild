<template>
  <div class="wrap">
    <div>
      <h1>This is home page</h1>
    </div>
    <scamModal1 ref="scamModal" />
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import scamModal1 from '../components/btn_scamModal1.vue';
const scamModal = ref(null);

onMounted(() => {
  scamModal.value.showModal()
})
</script>
