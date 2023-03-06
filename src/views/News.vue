<template>
    <pageBanner />
    <div class="wrap">
        <div class="container news">
            <breadcrumb />
            <div class="pageTitle">
                <h2>最新消息</h2>
                <p>HOT NEWS</p>
            </div>
            <div v-if="route.path === '/news'">
                <div class="row">
                    <ul class="col-lg-9 newsList">
                        <li class="row" v-for="(item, index) in newsList" :key="index">
                            <div class="col-lg-6">
                                <img class="newsImg" :src="imageUrl(item.imgUrl)" alt="">
                            </div>
                            <div class="col-lg-6">
                                <p class="date">{{ item.date }}</p>
                                <div class="title">
                                    <span>NEWS</span>
                                    <h3>{{ item.title }}</h3>
                                </div>
                                <p class="content">{{ item.content }}</p>
                                <RouterLink :to="`/news/newsDetail/${index}`">
                                    <div>
                                        了解更多
                                    </div>
                                </RouterLink>
                            </div>
                        </li>
                    </ul>
                    <div class="col-3">
                        <ul class="asideList">
                            <li v-for="item in asideList" :key="item.title">
                                <RouterLink :to="item.url">{{ item.title }}</RouterLink>
                            </li>
                        </ul>
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
const asideList = [
    {
        url: '#',
        title: '最新消息'
    },
    {
        url: '#',
        title: '營業時間'
    },
    {
        url: '#',
        title: '食品檢驗報告'
    },
    {
        url: '#',
        title: '食品工廠登記字號'
    },
    {
        url: '#',
        title: '食品業者登記字號'
    },
    {
        url: '#',
        title: '食品責任保險單'
    },
    {
        url: '#',
        title: '定型化契約'
    },
]

function imageUrl(name) {
    return new URL(`/src/assets/image/news/${name}`, import.meta.url).href;
}
</script>