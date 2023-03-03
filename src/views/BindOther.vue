<template>
    <div class="row bindOther">
        <div class="col-3">
            <memberList />
        </div>
        <div class="col-lg-9">
            <ul class="bindType">
                <li class="inputArea">
                    <label>
                        <div><img src="../assets/image/other/facebook.png" alt="facebook"></div>
                        <p>Facebook</p>
                    </label>
                    <input id="Facebook" name="Facebook" type="text" value="未綁定" readonly>
                </li>
                <li class="inputArea">
                    <label>
                        <div><img src="../assets/image/other/line.png" alt="line"></div>
                        <p>LINE</p>
                    </label>
                    <input id="LINE" name="LINE" type="text" value="已綁定" readonly>
                </li>
                <li class="inputArea">
                    <label>
                        <div><img src="../assets/image/other/google.png" alt="google"></div>
                        <p>GOOGLE</p>
                    </label>
                    <input id="GOOGLE" name="GOOGLE" type="text" value="已綁定" readonly>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import memberList from '../components/btn_memberList.vue';
</script>