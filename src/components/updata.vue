<template>
   <div class="updata-f">
       <div class="updataMain" v-for="(item,index) in slideData" :key="index">
           <img :src="item.imgUrl" alt="" class="img-left">
           <div class="updataRight">
               <p>{{ item.title }}</p>
               <p>{{ item.content }}</p>
               <img src="../images/icon/形状备份 17@3x.png" alt="">
               <span>{{ item.num }}W</span>
               <span>{{ item.time }}</span>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods:{
        getSubscribe(){
            this.$store.dispatch('getSubscribe');
        }
    },
    mounted(){
        this.getSubscribe();
    },
    computed:{
        slideData(){
            return this.$store.state.subscribeData.updata;
        }
    }
};
</script>
<style lang='less' scoped>
.updata-f{
    float: left;
    width: 100%;
    .updataMain{
        float: left;
        padding: 20px;
        width: 90%;
        background-color: #f6f6f6;
        margin: 0 5%;
        display: flex;
        .img-left{
            width: 110px;
            height: 110px;
            border-radius: 15px;
            float: left;
        }
        .updataRight{
            float: left;
            margin-left: 15px;
            img{
                width: 10px;
                height: 10px;
            }
            p:first-child{
                color: #333;
                font-size: 18px;
                margin-top: 20px;
                margin-bottom:10px;
            }
            p:nth-child(2){
                color: #919191;
                font-size: 15px;
            }
            span:nth-child(4){
                color: #919191;
                font-size: 10px;
                margin-left: 10px;
            }
            span:last-child{
                color:#919191;
                font-size: 10px;
                margin: 0 25px;
            }
        }
    }
}
</style>
