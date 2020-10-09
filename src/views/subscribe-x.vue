<template>
    <div class="subscribe-x">
        <div class="s-top">
            <p>订阅</p>
            <van-search v-model="value" placeholder="请输入搜索关键词" />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:''
        }
    }
}
</script>

<style lang="less" scoped>
.subscribe-x{
    .s-top{
        width:100%;
        height: 200px;
        background:#414141;
        p{
            color:white;
            text-align:center;
            font-size:16px;
            padding-top:10px;
        }
        .van-search{
            background:rgba(255, 255, 255, 0);
            width:80%;
            margin:0 auto;
            margin-top:10px;
            .van-search__content{
                background:rgba(255, 255, 255, 0.8);
                border-radius:15px;
                .van-cell{
                    color:white;
                    .van-field__control{
                        color:white;
                    }
                }
            }
        }
    }
}
</style>