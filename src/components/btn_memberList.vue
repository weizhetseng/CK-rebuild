<template>
    <ul class="memberList">
        <li v-for="item in memberLink" :key="item.url" :class="{ active: item.url === route.path }">
            <RouterLink :to="item.url">{{ item.title }}</RouterLink>
        </li>
    </ul>
</template>


<script setup>
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