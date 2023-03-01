<template>
    <pageBanner />
    <div class="wrap">
        <div class="container news">
            <breadcrumb />
            <ul v-if="route.path === '/news'">
                <li class="row" v-for="(item, index) in newsList" :key="index">
                    <div class="col-6">
                        <img :src="imageUrl(item.imgUrl)" alt="">
                    </div>
                    <div class="col-6">
                        {{ item.date }}
                        {{ item.title }}
                        {{ item.content }}
                        <RouterLink :to="`/news/newsDetail/${index}`">了解更多</RouterLink>
                    </div>
                </li>
            </ul>
            <RouterView />
        </div>
    </div>
</template>


<script setup>
import breadcrumb from '../components/btn_breadcrumb.vue'
import pageBanner from '../components/btn_pageBanner.vue'
import { useRoute } from 'vue-router';
const route = useRoute()

const newsList = [
    {
        date: "2022-07-28",
        imgUrl: "news01.png",
        title: "假標題假標題假標題假標題假標題",
        content: "假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容",
    },
    {
        date: "2022-04-28",
        imgUrl: "news02.png",
        title: "假標題假標題假標題假標題假標題",
        content: "假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容",
    },
    {
        date: "2022-03-28",
        imgUrl: "news04.png",
        title: "假標題假標題假標題假標題假標題",
        content: "假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容",
    },
    {
        date: "2022-01-28",
        imgUrl: "news03.png",
        title: "假標題假標題假標題假標題假標題",
        content: "假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容",
    },
]

function imageUrl(name) {
    return new URL(`/src/assets/image/news/${name}`, import.meta.url).href;
}
</script>