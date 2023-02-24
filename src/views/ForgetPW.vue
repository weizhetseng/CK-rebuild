<template>
    <pageBanner />
    <div class="wrap">
        <div class="container forgetPW">
            <breadcrumb />
            <div class="pageTitle">
                <h2>忘記密碼</h2>
                <p>Forgot Password</p>
            </div>
            <Form v-slot="{ errors }" @submit.prevent="">
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
        </div>
    </div>
</template>

<script setup>
import pageBanner from '../components/btn_pageBanner.vue'
import breadcrumb from '../components/btn_breadcrumb.vue'
</script>