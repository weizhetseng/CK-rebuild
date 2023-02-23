<template>
    <ul class="breadcrumb">
        <li>
            <RouterLink to="/">home</RouterLink>
        </li>
        <li><i class="fa-solid fa-chevron-right"></i></li>
        <li class="active">{{ route.meta.breadcrumb }}</li>
    </ul>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()

</script>