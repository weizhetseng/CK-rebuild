<template>
    <pageBanner />
    <div class="wrap">
        <div class="container product">
            <breadcrumb />
            <div class="pageTitle">
                <h2>線上購物</h2>
                <p>Promotional Items</p>
            </div>
            <div class="row">
                <div class="col-3">
                    <productList />
                </div>
                <div class="col-lg-9">
                    <div
                        :class="{ 'space': route.path.split('/')[2] === 'orderMethod1' || route.path.split('/')[2] === 'orderMethod2' || route.path.split('/')[2] === 'orderMethod3' }">
                        <ul class="methodList"
                            v-if="route.path.split('/')[2] === 'orderMethod1' || route.path.split('/')[2] === 'orderMethod2' || route.path.split('/')[2] === 'orderMethod3'">
                            <li v-for="item in methodList" :key="item.title">
                                <RouterLink :class="{ active: route.path === item.link }" :to="item.link">
                                    <p>{{ item.title }}</p>
                                </RouterLink>
                            </li>
                        </ul>
                        <RouterView />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import breadcrumb from '../components/btn_breadcrumb.vue'
import pageBanner from '../components/btn_pageBanner.vue'
import productList from '../components/btn_productList.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const methodList = [
    {
        title: '訂購方式',
        link: '/product/orderMethod1'
    },
    {
        title: '付款方式',
        link: '/product/orderMethod2'
    },
    {
        title: '訂購須知',
        link: '/product/orderMethod3'
    }
]
</script>