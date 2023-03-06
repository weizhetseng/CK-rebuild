<template>
    <div class="productList">
        <div>
            <input id="searchProduct" name="searchProduct" type="text" placeholder="關鍵字搜尋">
            <label for="searchProduct">
                <img src="../assets/image/other/search.png" alt="">
            </label>
        </div>
        <ul>
            <li v-for="item in productList" :key="item.url" :class="{ active: item.url === route.path }">
                <RouterLink :to="item.url">{{ item.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>



<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const productList = [
    {
        title: "呷卡鶴系列",
        url: "/product/productItem/1",
    },
    {
        title: "皇啡系列",
        url: "/product/productItem/2",
    },
    {
        title: "冷凍系列",
        url: "/product/productItem/3",
    },
    {
        title: "冷藏系列",
        url: "/product/productItem/4",
    },
    {
        title: "肉鬆系列",
        url: "/product/productItem/5",
    },
    {
        title: "豬肉系列",
        url: "/product/productItem/6",
    },
    {
        title: "牛肉系列",
        url: "/product/productItem/7",
    },
    {
        title: "堅果系列",
        url: "/product/productItem/8",
    },
    {
        title: "魚製品系列",
        url: "/product/productItem/9",
    },
    {
        title: "蜜餞系列",
        url: "/product/productItem/10",
    },
    {
        title: "休閒食品系列",
        url: "/product/productItem/11",
    },
    {
        title: "豆干系列",
        url: "/product/productItem/12",
    },
    {
        title: "穀物系列",
        url: "/product/productItem/13",
    },
    {
        title: "沖泡系列",
        url: "/product/productItem/14",
    },
    {
        title: "餅乾系列",
        url: "/product/productItem/15",
    },
    {
        title: "禮盒系列",
        url: "/product/productItem/16",
    },
    {
        title: "紙袋+塑膠袋加購",
        url: "/product/productItem/17",
    },
]


</script>