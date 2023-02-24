<template>
    <pageBanner />
    <div class="wrap">
        <div class="container">
            <breadcrumb />
            <div class="pageTitle">
                <h2>會員專區</h2>
                <p>Members Only</p>
            </div>
            <div class="row">
                <div class="col-3">
                    <ul>
                        <li>
                            <RouterLink to="/memberCenter/orderSearch">查詢訂單</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/memberCenter/updateUser">修改會員資料</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/memberCenter/changePW">變更會員密碼</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/memberCenter/bindOther">綁定其他帳號</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import pageBanner from '../components/btn_pageBanner.vue'
import breadcrumb from '../components/btn_breadcrumb.vue'


</script>