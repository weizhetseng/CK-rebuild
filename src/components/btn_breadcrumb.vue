<template>
    <ul class="breadcrumb">
        <li>
            <RouterLink to="/"><img src="../assets/image/other/home.png" alt=""></RouterLink>
        </li>
        <li v-for="item in route.meta.breadcrumb">{{ item }}</li>
    </ul>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
</script>