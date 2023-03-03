<template>
    <div class="row orderSearch">
        <div class="col-3">
            <memberList />
        </div>
        <div class="col-lg-9">
            <div class="tablewrap" v-if="route.path === '/memberCenter/orderSearch'">
                <table class="orderListTable">
                    <thead>
                        <tr>
                            <th>訂單編號</th>
                            <th>訂購日期</th>
                            <th>訂單金額</th>
                            <th>訂單狀態</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>L20220812003</td>
                            <td>2022/08/31 12:00</td>
                            <td>$1000</td>
                            <td>
                                <RouterLink class="red" to="/memberCenter/orderSearch/orderDetail/0">未付款</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import memberList from '../components/btn_memberList.vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
const route = useRoute()

onMounted(() => {
    console.log(route.path)
})
</script>