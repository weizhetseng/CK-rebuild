<template>
    <pageBanner />
    <div class="wrap">
        <div class="container location">
            <breadcrumb />
            <div class="pageTitle">
                <h2>營業據點</h2>
                <p>Business base</p>
            </div>
            <div class="locationTitle">
                <h3>全年無休，全台宅配</h3>
                <p>訂購專線：<span>037-867840</span></p>
                <p>傳真專線：<span>037-866407</span></p>
            </div>
            <table class="locationTable">
                <thead class="theadXl">
                    <tr>
                        <th>營業門市</th>
                        <th>營業時間</th>
                        <th>分店地址</th>
                    </tr>
                </thead>
                <thead class="theadSm">
                    <tr>
                        <th>營業據點</th>
                    </tr>
                </thead>
                <tbody v-for="item in locationList" :key="item.title">
                    <tr class="locationItem">
                        <td data-th="營業門市:">{{ item.title }}</td>
                        <td data-th="營業時間:">
                            <div>
                                <div class="itemImg">
                                    <img src="../assets/image/other/clock.png" alt="">
                                </div>
                                {{ item.time }}
                            </div>
                        </td>
                        <td data-th="分店地址:">
                            <div>
                                <div class="itemImg">
                                    <img src="../assets/image/other/location.png" alt="">
                                </div>
                                {{ item.address }}
                            </div>
                        </td>
                    </tr>
                    <tr class="map">
                        <td colspan="3">
                            <div>
                                <iframe :src="item.map" style="border: 0" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>



        </div>
    </div>
</template>

<script setup>
import breadcrumb from '../components/btn_breadcrumb.vue'
import pageBanner from '../components/btn_pageBanner.vue'

const locationList = [
    {
        title: '垂坤食品-總店',
        time: '07:00am ~ 22:00pm',
        address: '苗栗縣苑裡鎮大同88號(苑裡市場內)',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.221899143101!2d120.65157221537125!3d24.443085467877143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346909682e30bbd5%3A0xd90bb85860e49db1!2z5Z6C5Z2k6aOf5ZOBIOiLkeijoee4veW6lw!5e0!3m2!1szh-TW!2stw!4v1665472149865!5m2!1szh-TW!2stw'
    },
    {
        title: '垂坤食品-旗艦店',
        time: '08:00am ~ 21:00pm',
        address: ' 苗栗縣苑裡鎮山柑里8鄰77-16號(國道三號苑裡交流道下100公尺)',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.495524964324!2d120.66542241537066!3d24.398846869610725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34690f1fb574de61%3A0x322265bd5fb0c738!2z5Z6C5Z2k6aOf5ZOBIOaXl-iJpuW6lw!5e0!3m2!1szh-TW!2stw!4v1665472196240!5m2!1szh-TW!2stw'
    }
]
</script>