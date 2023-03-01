<template>
    <pageBanner />
    <div class="wrap">
        <div class="container">
            <breadcrumb />
            <div class="pageTitle">
                <h2>購物車</h2>
                <p>Shopping Cart</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>商品名稱</th>
                        <th>數量</th>
                        <th>單價</th>
                        <th>合計</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="" alt="">
                            <div>
                                <p>[新品]肉鬆小脆餅</p>
                                <p>運送方式: 一般運送</p>
                                <p>編號: 10110</p>
                            </div>
                        </td>
                        <td></td>
                        <td>1400元</td>
                        <td>1400元</td>
                        <td>刪除</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import breadcrumb from '../components/btn_breadcrumb.vue'
import pageBanner from '../components/btn_pageBanner.vue'
</script>