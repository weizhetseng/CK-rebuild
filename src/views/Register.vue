<template>
    <pageBanner />
    <div class="wrap">
        <div class="container register">
            <breadcrumb />
            <div class="pageTitle">
                <h2>會員註冊</h2>
                <p>Sign Up</p>
            </div>
            <Form v-slot="{ errors }" @submit="">
                <p>*為必填項目</p>
                <div class="inputArea">
                    <label for="phone"><span>*</span>手機號碼</label>
                    <Field id="phone" name="phone" type="text" label="手機號碼" :class="{ 'is-invalid': errors['phone'] }"
                        placeholder="請輸入手機號碼" rules="required">
                    </Field>
                    <button class="captchaBtn" type="button" @click="sendCaptcha()" :disabled="phoneCaptcha">發送驗證碼</button>
                    <error-message name="phone" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="phoneCode"><span>*</span>驗證碼</label>
                    <Field id="phoneCode" name="phoneCode" type="text" label="驗證碼"
                        :class="{ 'is-invalid': errors['phoneCode'] }" placeholder="請輸入手機驗證碼" rules="required">
                    </Field>
                    <button class="captchaBtn" type="button" :disabled="!phoneCaptcha"
                        @click="resendCaptcha()">重發驗證碼(59)</button>
                    <error-message name="phoneCode" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="email"><span>*</span>電子信箱</label>
                    <Field id="email" name="email" type="text" label="電子信箱" :class="{ 'is-invalid': errors['email'] }"
                        placeholder="請輸入Email" rules="required">
                    </Field>
                    <button class="captchaBtn" type="button">發送驗證碼</button>
                    <error-message name="email" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="emailCode"><span>*</span>驗證碼</label>
                    <Field id="emailCode" name="emailCode" type="text" label="驗證碼"
                        :class="{ 'is-invalid': errors['emailCode'] }" placeholder="請輸入Email信驗證碼" rules="required">
                    </Field>
                    <button class="captchaBtn" type="button" :disabled="!emailCaptcha">重發驗證碼(59)</button>
                    <error-message name="emailCode" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="password1"><span>*</span>密碼</label>
                    <Field id="password1" name="password1" type="text" label="密碼"
                        :class="{ 'is-invalid': errors['password1'] }" placeholder="請輸入4~12 個字元，請勿使用空白或「＠ 」等特殊符號"
                        rules="required">
                    </Field>
                    <error-message name="password1" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="password2"><span>*</span>確認密碼</label>
                    <Field id="password2" name="password2" type="text" label="確認密碼"
                        :class="{ 'is-invalid': errors['password2'] }" placeholder="請再輸入一次密碼" rules="required">
                    </Field>
                    <error-message name="password2" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="name"><span>*</span>姓名</label>
                    <Field id="name" name="name" type="text" label="姓名" :class="{ 'is-invalid': errors['name'] }"
                        placeholder="請輸入姓名" rules="required">
                    </Field>
                    <error-message name="name" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="address">性別</label>
                    <div class="sex">
                        <label for="male">
                            <input type="radio" name="sex" id="male">
                            男
                        </label>
                        <label for="female">
                            <input type="radio" name="sex" id="female">
                            女
                        </label>
                    </div>
                </div>
                <div class="inputArea">
                    <label for="birthday">生日</label>
                    <input id="birthday" name="birthday" type="date">
                </div>
                <div class="inputArea">
                    <label for="mail2">電子郵件</label>
                    <input id="mail2" name="mail2" type="text" placeholder="請輸入電子信箱">
                </div>
                <div class="inputArea">
                    <label for="phone2">市話</label>
                    <input id="phone2" name="phone2" type="text" placeholder="請輸入市話號碼">
                </div>
                <div class="addressArea">
                    <div class="inputArea">
                        <label for="address">聯絡地址</label>
                        <div class="selectGroup">
                            <select name="" id="">
                                <option value="">縣市</option>
                            </select>
                            <select name="" id="">
                                <option value="">鄉鎮區</option>
                            </select>
                            <select name="" id="">
                                <option value="">街道名稱</option>
                            </select>
                        </div>
                    </div>
                    <input type="text" name="" id="" placeholder="請輸入詳細地址">
                </div>
                <div class="btnGroup">
                    <button class="buttonStyle2" type="reset"><span>清除</span></button>
                    <button class="buttonStyle1" type="submit"><span>送出</span></button>
                </div>
            </Form>
        </div>
    </div>
</template>
<script setup>
import pageBanner from '../components/btn_pageBanner.vue'
import breadcrumb from '../components/btn_breadcrumb.vue'
import { ref } from 'vue';
const phoneCaptcha = ref(false)
const emailCaptcha = ref(false)


function sendCaptcha() {

}

function resendCaptcha() {
}


</script>

<!-- 需新增按鈕disable的class 按下發送驗證碼 將發送驗證碼按鈕切換成disable狀態 發送成功 重發驗證碼開始倒數 倒數結束重發驗證碼按鈕切換成!disable狀態 -->