<template>
   <div class="community-three">
      <div class="list" v-for="(item,index) in communityData" :key="index+12">
         <div>
            <img :src="item.imgUrl" alt="">
         </div>
          <div>
            <p>
               <span>{{ item.Id }}</span>
               <span>{{ item.time }}</span>
            </p>
            <p>{{ item.title }}</p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
    return {};
  },
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
            return this.$store.state.communityDataThree;
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
      img{
         width: 80px;
         height: 80px;
         border-radius: 50%;
      }
      div:last-child{
         width: 100%;
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
            span:last-child{
               float: right;
               font-size: 16px;
               color: #bfbfbf;
            }
         }
         p:last-child{
            font-size: 15px;
            width: 100%;
            height: 50px;
            color: #bfbfbf;
            padding-left: 30px;
            padding-top: 30px;
         }
      }
   }
}
</style>
