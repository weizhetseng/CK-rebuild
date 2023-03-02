<template>
    <pageBanner />
    <div class="wrap">
        <div class="container news">
            <breadcrumb />
            <div class="pageTitle">
                <h2>最新消息</h2>
                <p>HOT NEWS</p>
            </div>
            <div class="row">
                <div v-if="route.path === '/news'">
                    <ul class="col-8 newsList">
                        <li class="row" v-for="(item, index) in newsList" :key="index">
                            <div class="col-6">
                                <img :src="imageUrl(item.imgUrl)" alt="">
                            </div>
                            <div class="col-6">
                                <p class="date">{{ item.date }}</p>
                                <p class="title">{{ item.title }}</p>
                                <p class="content">{{ item.content }}</p>
                                <RouterLink :to="`/news/newsDetail/${index}`">了解更多</RouterLink>
                            </div>
                        </li>
                    </ul>
                    <div class="col-3">
                    </div>
                </div>
            </div>
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