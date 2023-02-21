<template>
    <nav>
        <button class="hamBtn" type="button" @click="toggleHam()">
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
                    <a href="#">
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
    <div class="mobilewrap" :class="{ active: hamToggle }" @click="toggleHam()"></div>
    <div class="mobileNav" :class="{ active: hamToggle }">
        <div>
            <label for="search">
                <input id="search" type="text" placeholder="關鍵字商品搜尋" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <ul>
                <li class="page_link">
                    <RouterLink to="/news" class="nav-link drop_link" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        最新消息
                    </RouterLink>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="item in news_link" :key="item.title" @click="openMenu()">
                            <RouterLink class="dropdown-item" :to="item.url">{{
                                item.title
                            }}</RouterLink>
                        </li>
                    </ul>
                </li>
                <li class="page_link">
                    <RouterLink to="/about" class="nav-link" @click="openMenu()">關於垂坤</RouterLink>
                </li>
                <li class="page_link">
                    <RouterLink to="/shop_method-1" class="nav-link drop_link" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        線上購物
                    </RouterLink>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="item in product_links" :key="item.title" @click="openMenu()">
                            <RouterLink class="dropdown-item" :to="item.url">{{
                                item.title
                            }}</RouterLink>
                        </li>
                    </ul>
                </li>
                <li class="page_link">
                    <RouterLink to="/location" class="nav-link" @click="openMenu()">營業據點</RouterLink>
                </li>
                <li class="page_link">
                    <a href="" class="nav-link" @click="openMenu()">訂單下載</a>
                </li>
            </ul>
        </div>

        <ul>
            <li>
                <RouterLink to="/login" class="down_link link1" @click="openMenu()">
                    會員專區
                    <img src="../assets/image/other/user-alert.png" alt="" />
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/shoppingcart" class="down_link link2" @click="openMenu()">
                    購物車
                    <img src="../assets/image/other/cart.png" alt="" />
                    <span>0</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="" data-bs-toggle="modal" data-bs-target="#liar" class="down_link link3" @click="openMenu()">
                    詐騙手法大公開
                    <img src="../assets/image/other/user.png" alt="" />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>






<script setup>
import { ref } from 'vue';

const hamToggle = ref(false)
function toggleHam() {
    hamToggle.value = !hamToggle.value
}

</script>