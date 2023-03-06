<template>
    <div class="orderMethod1">
        <ul class="orderType">
            <li>
                <p>網路訂購</p>
                <img src="../assets/image/other/computer-line.png" alt="">
            </li>
            <li>
                <p>電話訂購</p>
                <img src="../assets/image/other/telephone-fill.png" alt="">
            </li>
            <li>
                <p>我要開團</p>
                <img src="../assets/image/other/people-group-solid.png" alt="">
            </li>
        </ul>
    </div>
    <div class="cardTitle">
        <h2>熱門系列</h2>
        <p>Hot series</p>
    </div>
    <div class="expand_card">
        <ul class="productType">
            <li v-for="(item, index) in hots" :key="index" :class="activeClass == index ? 'active' : ''"
                @click="openImg(index)" :style="{
                    'background-image': 'url(' + imageUrl(item.url) + ')',
                }">
                <div class="info_active">
                    <img class="info_img" src="../assets/image/product/logotag.png" alt="" />
                    <div class="info_text">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.text }}</p>
                    </div>
                </div>
                <div class="info">
                    <img class="info_img" src="../assets/image/product/logotag.png" alt="" />
                    <h3>{{ item.title }}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const activeClass = ref(0)

const hots = [
    {
        url: "product01.jpg",
        title: "肉鬆系列",
        text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
    },
    {
        url: "product04.jpg",
        title: "豬肉系列",
        text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
    },
    {
        url: "product05.jpg",
        title: "魚製品系列",
        text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
    },
    {
        url: "product06.jpg",
        title: "休閒食品系列",
        text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
    },
    {
        url: "product07.jpg",
        title: "餅乾系列",
        text: "純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。",
    },
]

function openImg(item) {
    activeClass.value = item;
}
function imageUrl(name) {
    return new URL(`/src/assets/image/expandCard/${name}`, import.meta.url).href;
}


</script>