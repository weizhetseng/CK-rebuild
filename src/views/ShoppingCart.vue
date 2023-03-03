<template>
    <pageBanner />
    <div class="wrap">
        <div class="container shoppingCart">
            <breadcrumb />
            <div class="pageTitle">
                <h2>購物車</h2>
                <p>Shopping Cart</p>
            </div>
            <h3>您的購物清單如下</h3>
            <div class="tableWrap">
                <table>
                    <!-- 大畫面thead -->
                    <thead class="theadXl">
                        <tr>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th>單價</th>
                            <th>合計</th>
                            <th></th>
                        </tr>
                    </thead>
                    <!-- 小畫面thead -->
                    <thead class="theadSm">
                        <tr>
                            <th>購物清單</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="product">
                            <td>
                                <div class="productCard">
                                    <img class="productImg" src="../assets/image/product/product01.jpg" alt="">
                                    <div>
                                        <p>[新品]肉鬆小脆餅</p>
                                        <p>運送方式: 一般運送</p>
                                        <p>編號: 10110</p>
                                    </div>
                                </div>
                            </td>
                            <td></td>
                            <td>1400元</td>
                            <td class="calcPrice">1400元</td>
                            <td>
                                <button>
                                    <img src="../assets/image/other/trashCan.png" alt="">
                                    刪除
                                </button>
                            </td>
                        </tr>
                        <!-- 大畫面 -->
                        <tr class="subtotalXl">
                            <td colspan="4">
                                <p>商品總金額</p>
                                <p>活動折扣</p>
                            </td>
                            <td>
                                <p>14260</p>
                                <p>1711</p>
                            </td>
                        </tr>
                        <tr class="totalXl">
                            <td colspan="4">結帳總金額</td>
                            <td>12549元</td>
                        </tr>
                        <!-- 小畫面 -->
                        <tr class="subtotalSm">
                            <td>
                                <div>
                                    <p>商品總金額</p>
                                    <p>活動折扣</p>
                                </div>
                                <div>
                                    <p>14260</p>
                                    <p>1711</p>
                                </div>
                            </td>
                        </tr>
                        <tr class="totalSm">
                            <td>
                                <p>結帳總金額</p>
                                <p>12549元</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btnGroup">
                <RouterLink class="buttonStyle1" to="/product"><span>繼續購物</span></RouterLink>
                <RouterLink class="buttonStyle1" to="/product"><span>訪客結帳</span></RouterLink>
                <RouterLink class="buttonStyle1" to="/product"><span>會員結帳</span></RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import breadcrumb from '../components/btn_breadcrumb.vue'
import pageBanner from '../components/btn_pageBanner.vue'
</script>