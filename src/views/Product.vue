<template>
    <pageBanner />
    <div class="wrap">
        <div class="container product">
            <breadcrumb />
            <div class="pageTitle">
                <h2>線上購物</h2>
                <p>Promotional Items</p>
            </div>
            <div class="row">
                <div class="col-3">
                    <productList />
                </div>
                <div class="col-lg-9">

                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import breadcrumb from '../components/btn_breadcrumb.vue'
import pageBanner from '../components/btn_pageBanner.vue'
import productList from '../components/btn_productList.vue'

</script>