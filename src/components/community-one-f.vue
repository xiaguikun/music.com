<template>
   <div class="community-one">
       <p class="p">最新动态</p>
       <div class="content" v-for="(item,index) in communityData" :key="index+10">
           <div class="content-top">
               <img :src="item.imgUrl" alt="">
               <div>
                   <p>{{ item.Id }}</p>
               </div>
           </div>
           <p class="p-1">{{ item.title }}</p>
           <div class="content-bottom">
               <div class="content-bottom-left">
                   <img :src="item.img" alt="">
                   <div class="zhezhao">
                       <img src="../images/icon/播放备份@3x.png" alt="">
                   </div>
                </div>
               <div class="content-bottom-right">
                   <p>{{ item.word }}</p>
                   <p>{{ item.sing }}</p>
               </div>
           </div>
           <span class="span1">···</span>
           <img src="../images/icon/评论备份 5@3x.png" alt=""  class="img01">
           <img src="../images/icon/赞 点赞备份 2@3x.png" alt=""  class="img02">
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
            return this.$store.state.communityDataOne;
        },
    }
};
</script>
<style lang='less' scoped>
.community-one{
    width: 100%;
    background-color: #f6f6f6;
    margin-bottom:60px;
    .p{
        font-size: 20px;
        padding:40px 0;
        padding-left: 7.5%;
        color: #868686;
        // background-color: white;
    }
    .content{
        width: 85%;
        margin-left: 7.5%;
        padding: 20px;
        background-color: #fff;
        padding-bottom: 50px;
        .content-top{
            width: 100%;
            height: 70px;
            
            display: flex;
            img{
                width: 25%;
                height: 70px;
                border-radius: 50%;
            }
            div{
                width: 70%;
                height: 70px;
                font-size: 20px;
                line-height: 70px;
                padding-left: 25px;
            }
        }
    .p-1{
        font-size: 17px;
        margin: 10px 0px;
    }
    .content-bottom{
        width: 95%;
        height: 120px;
        padding: 20px;
        margin-left: 7px;
        background-color: #f2f2f2;
        display: flex;
        .content-bottom-left{
            font-size: 20px;
            img{
                width: 100px;
                height: 100px;
            }
            .zhezhao{
                position: relative;
                top: -100px;
                left: 0;
                width: 100px;
                height: 100px;
                background-color: rgba(80, 80, 80, .7);
                z-index: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 40%;
                    height: 40%;
                }
            }
        }
        .content-bottom-right{
            // font-size: 16px;
            p:first-child{
                font-size: 18px;
                margin-top: 20px;
                margin-bottom: 10px;
                padding-left: 5px;
                color: #333;
                width: 150px;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            p:last-child{
                margin-top: 5px;
                font-size: 16px;
                padding-left: 5px;
                color: #868686;
            }
        }
      
    }
      .span1{
            float: right;
            font-weight: 600;
            font-size: 16px;
            margin-top: 20px;
            margin-left: 10px;
        }
        .img01,.img02{
            float: right;
            width: 20px;
            height: 20px;
            margin:0 10px;
            margin-top: 20px;
        }
    }
}
</style>
