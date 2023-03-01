<template>
    <div class="row">
        <div class="col-3">
            <memberList />
        </div>
        <div class="col-9">
            <RouterView />
        </div>
    </div>
</template>


<script setup>
import memberList from '../components/btn_memberList.vue';

</script>
