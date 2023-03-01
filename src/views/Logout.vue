<template>
    <div class="row logout">
        <div class="col-3">
            <memberList />
        </div>
        <div class="col-9">
            <div class="successMsg">
                <p>會員已登出</p>
                <RouterLink to="/">返回首頁</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import memberList from '../components/btn_memberList.vue';
</script>