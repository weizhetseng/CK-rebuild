<template>
    <pageBanner />
    <div class="wrap">
        <div class="container memberCenter">
            <breadcrumb />
            <div class="pageTitle">
                <h2>會員專區</h2>
                <p>Members Only</p>
            </div>
            <div v-if="route.path === '/memberCenter'">
                <h3><span>OOO</span>會員您好!</h3>
                <ul class="memberLink">
                    <li v-for="item in memberLink" :key="item.url">
                        <RouterLink class="buttonStyle2" :to="item.url">
                            <span>{{ item.title }}</span>
                        </RouterLink>
                    </li>
                </ul>
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
const memberLink = [
    {
        title: "查詢訂單資料",
        url: "/memberCenter/orderSearch"
    },
    {
        title: "修改會員資料",
        url: "/memberCenter/updateUser"
    },
    {
        title: "變更密碼",
        url: "/memberCenter/changePW"
    },
    {
        title: "綁定其他帳號",
        url: "/memberCenter/bindOther"
    },
    {
        title: "登出",
        url: "/memberCenter/logout"
    },
]
</script>