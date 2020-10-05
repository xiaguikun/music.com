<template>
    <div class="ind-x">
        <my-nav></my-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import MyNav from "../components/indNav-x"
export default {
    data(){
        return {

        }
    },
    components:{
        MyNav
    }
}
</script>

<style lang="less" scoped>

</style>