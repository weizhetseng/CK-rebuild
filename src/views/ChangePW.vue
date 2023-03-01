<template>
    <div class="row changePW">
        <div class="col-3">
            <memberList />
        </div>
        <div class="col-9">
            <Form v-slot="{ errors }" v-if="!changeStatus" @submit="changePW()">
                <div class="inputArea">
                    <label for="oldPW"><span>*</span>舊密碼</label>
                    <Field id="oldPW" name="oldPW" type="text" label="舊密碼" :class="{ 'is-invalid': errors['oldPW'] }"
                        placeholder="請輸入舊密碼" rules="required">
                    </Field>
                    <error-message name="oldPW" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="newPW1"><span>*</span>新密碼</label>
                    <Field id="newPW1" name="newPW1" type="password" label="新密碼" :class="{ 'is-invalid': errors['newPW1'] }"
                        placeholder="請輸入新密碼" rules="required">
                    </Field>
                    <error-message name="newPW1" class="invalid-feedback"></error-message>
                </div>
                <div class="inputArea">
                    <label for="newPW2"><span>*</span>確認新密碼</label>
                    <Field id="newPW2" name="newPW2" type="password" label="確認新密碼"
                        :class="{ 'is-invalid': errors['newPW2'] }" placeholder="請再輸入一次新密碼" rules="required">
                    </Field>
                    <error-message name="newPW2" class="invalid-feedback"></error-message>
                </div>
                <div>
                    <button type="reset">清除</button>
                    <button type="submit">送出</button>
                </div>
            </Form>
            <div class="successMsg" v-else>
                <p>修改密碼成功</p>
                <button type="button">返回上一頁</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import memberList from '../components/btn_memberList.vue';
//判斷是否修改成功
const changeStatus = ref(false)
function changePW() {
    changeStatus.value = true
}
</script>