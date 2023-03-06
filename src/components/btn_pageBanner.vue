<template>
    <div class="pageBanner">
        <img class="bannerImg" :src="bannerImg(route.meta.banner)" alt="">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <img src="../assets/image/other/alert.png" alt="">
                    <img src="../assets/image/other/alert.png" alt="">
                    <img src="../assets/image/other/alert.png" alt="">
                </div>
                <p class="col-lg-10">請注意！本公司人員不會主動致電要求您前往ATM解除任何設定、不會有簽錯簽單，重複訂購之事由，一定是詐騙，請立即掛斷或撥打１６５反詐騙專線。
                    相關反詐騙訊息可至165官網查詢：https://165.npa.gov.tw/</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()

function bannerImg(name) {
    return new URL(`/src/assets/image/banner/v1/${name}`, import.meta.url).href;
}

</script>