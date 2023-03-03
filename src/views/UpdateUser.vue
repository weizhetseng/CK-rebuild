<template>
    <div class="row updateUser">
        <div class="col-3">
            <memberList />
        </div>
        <div class="col-lg-9">
            <Form v-slot="{ errors }" @submit="changePW()" v-if="!changeStatus">
                <div class="inputArea">
                    <label for="name">姓名</label>
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
                    <label for="email">電子信箱</label>
                    <Field id="email" name="email" type="text" label="電子信箱" :class="{ 'is-invalid': errors['email'] }"
                        placeholder="請輸入Email" rules="required">
                    </Field>
                    <button class="captchaBtn" type="button">發送驗證碼</button>
                    <error-message name="email" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="emailCode">驗證碼</label>
                    <Field id="emailCode" name="emailCode" type="text" label="驗證碼"
                        :class="{ 'is-invalid': errors['emailCode'] }" placeholder="請輸入Email信驗證碼" rules="required">
                    </Field>
                    <button class="captchaBtn" type="button">重發驗證碼(59)</button>
                    <error-message name="emailCode" class="invalid-feedback"></error-message>
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

            <div class="successMsg" v-else>
                <p>修改資料成功</p>
                <div class="btnGroup">
                    <a class="buttonStyle1" href="#" onclick="history.go(-1)"><span>返回上一頁</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import memberList from '../components/btn_memberList.vue';

const changeStatus = ref(false)
function changePW() {
    changeStatus.value = true
}
</script>