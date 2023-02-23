<template>
    <footer>
        <div class="container">
            <div class="row">
                <a class="col-lg-3" href="#"><img src="../assets/image/logo/logo02.png" alt="footerLogo"></a>
                <div class="col-lg-4 pageLink">
                    <RouterLink v-for="item in pageLink" :to="item.url" :key="item.url">{{ item.title }}</RouterLink>
                </div>
                <div class="col-xl-4 col-lg-5 offset-xl-1 contactLink">
                    <ul>
                        <li>
                            <p>客服專線:</p>
                            <a href="tel:037-867840">037-867840</a>
                        </li>
                        <li>
                            <p>客服時間:</p>
                            <div>
                                <p>周一至周五08:00~21:00</p>
                                <p>周六08:00~18:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyRight">
            <p>垂坤食品有限公司 © 2022 All Rights Reserved.</p>
        </div>
    </footer>
</template>
  
<script setup>
const pageLink = [
    {
        url: "/news",
        title: "最新消息",
    },
    {
        url: "/about",
        title: "關於垂坤",
    },
    {
        url: "/location",
        title: "營業據點",
    },
    {
        url: "/login",
        title: "會員專區",
    },
    {
        url: "/product",
        title: "線上購物",
    },
    {
        url: "",
        title: "訂單下載",
    },
]
</script>
