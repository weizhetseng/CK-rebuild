<template>
    <pageBanner />
    <div class="wrap">
        <div class="container login">
            <breadcrumb />
            <div class="row">
                <div class="col-lg-6 loginForm">
                    <div class="pageTitle">
                        <h2>會員登入</h2>
                        <p>Member Login</p>
                    </div>
                    <Form v-slot="{ errors }" @submit="GoMemterCenter()">
                        <div class="inputArea">
                            <label for="userID"><i class="fa-solid fa-envelope"></i>帳號</label>
                            <Field id="userID" name="userID" type="text" label="帳號"
                                :class="{ 'is-invalid': errors['userID'] }" placeholder="請輸入手機號碼或電子信箱" rules="required">
                            </Field>
                            <error-message name="userID" class="invalid-feedback"></error-message>
                        </div>
                        <div class="inputArea">
                            <label for="userPW"><i class="fa-solid fa-key"></i>密碼</label>
                            <Field id="userPW" name="userPW" type="password" label="密碼"
                                :class="{ 'is-invalid': errors['userPW'] }" placeholder="請輸入密碼" rules="required">
                            </Field>
                            <error-message name="userPW" class="invalid-feedback"></error-message>
                        </div>
                        <div class="checkboxArea">
                            <div>
                                <input id="remember" type="checkbox">
                                <label for="remember">記住我</label>
                            </div>
                            <RouterLink to="/forgetPW">忘記密碼</RouterLink>
                        </div>
                        <button type="submit">登入</button>
                    </Form>
                </div>
                <div class="col-lg-6 registerForm">
                    <div class="pageTitle">
                        <h2>會員註冊</h2>
                        <p>Sign Up</p>
                    </div>
                    <div class="terms">
                        <h3>會員條款說明</h3>
                        <h4>一、會員服務條款</h4>
                        <ol>
                            <li>
                                本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
                            </li>
                            <li>
                                當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
                            </li>
                            <li>
                                本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
                            </li>
                            <li>
                                本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
                            </li>
                        </ol>
                        <h4>二、隱私權保護</h4>
                        <p>
                            尊重並依據本網站「隱私權保護聲明」保護您的隱私(請參閱「隱私權保護聲明」條款)。
                        </p>
                        <h4>三、會員</h4>
                        <ol>
                            <li>
                                使用本站所提供之會員服務時，於加入會員時所登錄之帳號及密碼使用之。
                            </li>
                            <li>
                                會員須善盡帳號及密碼的使用與管理之責任。對於使用該會員之帳號及密碼(無關於會員本身或其他人)
                                利用本站服務所造成或衍生之所有行為及結果，會員須自行負擔全部責任。
                            </li>
                            <li>
                                會員之帳號及密碼遺失，或發現無故遭第三者盜用時，應立即通知本站連絡掛失，因未即時通知，
                                導致本站無法有效防止及修改時，所造成的所有損失，會員應自負全責。
                            </li>
                            <li>
                                每次結束使用本服務，執行會員之登出並關閉視窗，以確保您的會員權益。
                            </li>
                        </ol>
                        <h4>一、會員服務條款</h4>
                        <ol>
                            <li>
                                本會員服務條款所稱之「會員」，為依照本站所定之加入會員程序加入完成並通過認證者。
                            </li>
                            <li>
                                當您使用本站服務時，即表示您同意及遵守本服務條款的規定事項及相關法律之規定。
                            </li>
                            <li>
                                本站保留有審核加入會員資格之權利，另外已加入會員者，本站亦保留有解除其會員資格之權利。
                            </li>
                            <li>
                                本會員服務條款之修訂，適用於所有會員，當本站修訂本服務條款時，將於本站上公告。
                            </li>
                        </ol>
                        <h4>二、隱私權保護</h4>
                        <p>
                            尊重並依據本網站「隱私權保護聲明」保護您的隱私(請參閱「隱私權保護聲明」條款)。
                        </p>
                        <h4>三、會員</h4>
                        <ol>
                            <li>
                                使用本站所提供之會員服務時，於加入會員時所登錄之帳號及密碼使用之。
                            </li>
                            <li>
                                會員須善盡帳號及密碼的使用與管理之責任。對於使用該會員之帳號及密碼(無關於會員本身或其他人)
                                利用本站服務所造成或衍生之所有行為及結果，會員須自行負擔全部責任。
                            </li>
                            <li>
                                會員之帳號及密碼遺失，或發現無故遭第三者盜用時，應立即通知本站連絡掛失，因未即時通知，
                                導致本站無法有效防止及修改時，所造成的所有損失，會員應自負全責。
                            </li>
                            <li>
                                每次結束使用本服務，執行會員之登出並關閉視窗，以確保您的會員權益。
                            </li>
                        </ol>
                    </div>
                    <Form v-slot="{ errors }" @submit="GoRegister()">
                        <div>
                            <Field id="termsCheckbox" name="termsCheckbox" :value="true" type="checkbox" label="會員條款"
                                :class="{ 'is-invalid': errors['termsCheckbox'] }" rules="required">
                            </Field>
                            <label for="termsCheckbox">我已閱讀並同意提供以上資料供垂坤連繫使用。</label>
                            <error-message name="termsCheckbox" class="invalid-feedback"></error-message>
                        </div>
                        <button type="submit">下一步</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import breadcrumb from '../components/btn_breadcrumb.vue'
import pageBanner from '../components/btn_pageBanner.vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()

function GoMemterCenter() {
    router.push('/memberCenter')
}

function GoRegister() {
    router.push('/register')
}
</script>