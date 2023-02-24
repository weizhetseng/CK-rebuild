<template>
    <pageBanner />
    <div class="wrap">
        <div class="container">
            <breadcrumb />
            <div class="pageTitle">
                <h2>會員專區</h2>
                <p>Members Only</p>
            </div>
            <div v-if="route.path === '/memberCenter'">
                <RouterLink class="btn btn-success" to="/memberCenter/orderSearch">查詢訂單</RouterLink>
                <RouterLink class="btn btn-warning" to="/memberCenter/updateUser">修改會員資料</RouterLink>
                <RouterLink class="btn btn-danger" to="/memberCenter/changePW">變更會員密碼</RouterLink>
                <RouterLink class="btn btn-primary" to="/memberCenter/bindOther">綁定其他帳號</RouterLink>
            </div>
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import pageBanner from '../components/btn_pageBanner.vue'
import breadcrumb from '../components/btn_breadcrumb.vue'
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
const route = useRoute()


</script>