<template>
    <pageBanner />
    <div class="wrap">
        <div class="container forgetPW">
            <breadcrumb />
            <div class="pageTitle">
                <h2>忘記密碼</h2>
                <p>Forgot Password</p>
            </div>
            <Form v-slot="{ errors }" @submit.prevent="" v-if="!codeStatus">
                <div class="inputArea">
                    <label for="userID"><i class="fa-solid fa-envelope"></i>帳號</label>
                    <Field id="userID" name="userID" type="text" label="帳號" :class="{ 'is-invalid': errors['userID'] }"
                        placeholder="請輸入手機號碼或電子信箱 " rules="required">
                    </Field>
                    <error-message name="userID" class="invalid-feedback"></error-message>
                </div>
                <div>
                    <button type="reset">清除</button>
                    <button type="submit">送出</button>
                </div>
            </Form>
            <div class="success" v-else>
                <h3>您的新密碼已經發送到您的手機，請查看訊息</h3>
                <RouterLink to="">返回登入頁</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import pageBanner from '../components/btn_pageBanner.vue'
import breadcrumb from '../components/btn_breadcrumb.vue'
import { ref } from 'vue';
//發送成功後更改codestatus值 切換頁面顯示內容
const codeStatus = ref(false)

</script>