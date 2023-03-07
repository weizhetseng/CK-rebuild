<template>
    <div class="calculate">
        <button type="button" @click="minus()">-</button>
        <div>{{ defaultNum }}</div>
        <button type="button" @click="add()">+</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultNum = ref(0)

function add() {
    defaultNum.value++
}

function minus() {
    defaultNum.value--
    if (defaultNum.value <= 0) {
        defaultNum.value = 0
    }
}


</script>