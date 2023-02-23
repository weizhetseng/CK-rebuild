<template>
    <div class="pageBanner">
        <img :src="bannerImg(route.meta.banner)" alt="">
    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()

function bannerImg(name) {
    return new URL(`/src/assets/image/banner/v1/${name}`, import.meta.url).href;
}

</script>