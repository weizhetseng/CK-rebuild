<template>
    <nav>
        <button class="hamBtn" type="button">
            <div class="ham"></div>
        </button>
        <h1>
            <a href="#">垂坤食品有限公司</a>
        </h1>
        <div class="desktopNav">
            <ul class="normalLink">
                <li>
                    <RouterLink to="/news">最新消息</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">關於我們</RouterLink>
                </li>
                <li>
                    <RouterLink to="/product">線上購物</RouterLink>
                </li>
                <li>
                    <RouterLink to="/location">營業據點</RouterLink>
                </li>
                <li>
                    <a href="#">檔案下載</a>
                </li>
            </ul>
            <ul class="boxLink">
                <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#scam2">
                        <img src="../assets/image/other/user-alert.png" alt="">
                        詐騙手法大公開
                    </a>
                </li>
                <li>
                    <RouterLink to="/shoppingCart">
                        <img src="../assets/image/other/cart.png" alt="">
                        購物車
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/login">
                        <img src="../assets/image/other/user.png" alt="">
                        會員專區
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
    <scamModal2 />
</template>


<script setup>
import scamModal2 from './btn_scamModal2.vue';

</script>

