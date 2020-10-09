<template>
   <div class="community-three">
      <div class="list" v-for="(item,index) in communityData" :key="index+13">
         <div class="list-left">
            <img :src="item.imgUrl" alt="">
         </div>
          <div>
            <p>
               <span>{{ item.Id }}</span>
            </p>
            <p>{{ item.title }}</p>
            <p>
               <span>{{ item.time }}</span>
            </p>
         </div>
         <div class="list-right">
            <img :src="item.img" alt="">
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
    return {};
  },
   components:{},
     methods:  {
        getFCommunity(){
            this.$store.dispatch('getFCommunity')
        }
     },
    mounted(){
        this.getFCommunity();
        },
    computed:{
        communityData(){
            return this.$store.state.communityDataFour;
        },
    }
};
</script>
<style lang='less' scoped>
.community-three{
   width: 100%;
   margin-bottom:60px;
   .list{
      border-bottom: 1px solid #e4e4e4;
      width: 100%;
      height: 160px;
      padding: 40px 20px;
      display: flex;
      .list-left{
         img{
         width: 80px;
         height: 80px;
         border-radius: 50%;
      }
      }
      div:nth-child(2){
         width: 70%;
         // display: flex;
         p:first-child{
            width: 100%;
            height: 30px;
            span:first-child{
               float: left;
               font-size: 22px;
               font-weight: 500;
               padding-left: 30px;
            }
         }
         p:nth-child(2){
            font-size: 15px;
            width: 100%;
            height: 50px;
            color: #bfbfbf;
            padding-left: 30px;
            padding-top: 30px;
         }
         p:last-child{
            width: 100%;
            height: 30px;
            span:first-child{
               float: right;
               font-size: 15px;
               padding-right: 10px;
               color: #bfbfbf;
            }
         }
      }
      .list-right{
         width: 20%;
        img{
           width: 80px;
           height: 80px;
           border-radius: 8px;
        }
      }
   }
}
</style>
