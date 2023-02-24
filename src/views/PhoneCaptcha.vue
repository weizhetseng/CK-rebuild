<template>
    <pageBanner />
    <div class="wrap">
        <div class="container phoenCaptcha">
            <breadcrumb />
            <div class="pageTitle">
                <h2>會員登入</h2>
                <p>Member Login</p>
            </div>
            <Form v-slot="{ errors }" @submit="">
                <p>請輸入手機號碼完成帳號驗證。</p>
                <div class="inputArea">
                    <label for="phone">手機號碼</label>
                    <Field id="phone" name="phone" type="text" label="手機號碼" :class="{ 'is-invalid': errors['phone'] }"
                        placeholder="請輸入手機號碼" rules="required">
                    </Field>
                    <error-message name="phone" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="captcha">驗證碼</label>
                    <Field id="captcha" name="captcha" type="password" label="驗證碼"
                        :class="{ 'is-invalid': errors['captcha'] }" placeholder="請輸入簡訊驗證碼" rules="required">
                    </Field>
                    <error-message name="captcha" class="invalid-feedback"></error-message>
                </div>
                <button type="submit">送出</button>
            </Form>
        </div>
    </div>
</template>

<script setup>
import pageBanner from '../components/btn_pageBanner.vue'
import breadcrumb from '../components/btn_breadcrumb.vue'

</script>