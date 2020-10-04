<template>
    <div class="index">
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>


<script>
import MyFooter from "../components/footer-x";
export default {
    components:{
        MyFooter
    }
}
</script>
<style lang="less" scoped>

</style>