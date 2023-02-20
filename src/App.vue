<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">首頁</RouterLink>
    <RouterLink to="/news">最新消息</RouterLink>
    <RouterLink to="/about">關於我們</RouterLink>
    <RouterLink to="/about">線上購物</RouterLink>
    <RouterLink to="/location">營業據點</RouterLink>
    <RouterLink to="/shoppingCart">購物車</RouterLink>
    <RouterLink to="/MemberCenter">會員專區</RouterLink>
  </nav>
  <RouterView />
</template>
