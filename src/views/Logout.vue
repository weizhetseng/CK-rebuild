<template>
    <div class="row logout">
        <div class="col-3">
            <memberList />
        </div>
        <div class="col-lg-9">
            <div class="successMsg">
                <p>會員已登出</p>
                <div class="btnGroup">
                    <RouterLink class="buttonStyle1" to="/"><span>返回首頁</span></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import memberList from '../components/btn_memberList.vue';
</script>