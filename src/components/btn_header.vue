<template>
    <nav>
        <button class="hamBtn" type="button">
            <div class="hamNav" :class="{ active: hamToggle }" @click.prevent="toggleHam()"></div>
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

        <div class="mobileNav" :class="{ active: hamToggle }"></div>
    </nav>
<!-- <div class="mobileNav d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;height: 100vh;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4">Sidebar</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#home"></use>
                    </svg>
                    Home
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#speedometer2"></use>
                    </svg>
                    Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#table"></use>
                    </svg>
                    Orders
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#grid"></use>
                    </svg>
                    Products
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#people-circle"></use>
                    </svg>
                    Customers
                </a>
            </li>
        </ul>
        <hr>
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    </div> --></template>






<script setup>
import { ref } from 'vue';

const hamToggle = ref(false)
function toggleHam() {
    hamToggle.value = !hamToggle.value
}

</script>