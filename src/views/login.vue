<template>
    <div>
        <h1>login</h1>
    </div>
</template>

<script>
export default {
    methods:{
        loginData(){
            this.$store.dispatch('loginData');
        }
    },
    mounted(){
        this.loginData();
    }
}
</script>

<style lang="less" scoped>

</style>