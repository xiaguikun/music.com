<template>
    <div class="classify">
        <div class="class">
            <div class="back" @click="goback">&lt;</div>
            <span class="c">分类</span>
        </div>

        <div class="search">
            <div class="sear">
                <img src="../images/icon/搜索@3x.png" alt="" class="s">
                <input type="text" class="in" value="搜索">
            </div>
            <div class="im">
                 <img src="../images/icon/历史时间-6@3x.png" alt="" class="i1">
                <img src="../images/icon/plus-circle@3x.png" alt="" class="i2">
               
            </div>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item,index) in classifyData" :key="index" >
                        <img :src="item.url" alt="" class="im1">
                    </van-swipe-item>
                    
        </van-swipe>
        <van-tree-select height="771px" :items="items" :main-active-index.sync="active" class="classify-wrap">
        <template #content>
            <div v-for="(item,index) in sideBarData" :key="index">
                <!-- {{active}}
                {{item.type}} -->
                 <div v-if="active == item.type">
                    <van-image :src="item.imgUrl"/>
                </div>
           
            </div>
           
            <!-- <van-image
            v-if="active === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
            /> -->
        </template>
</van-tree-select>
    </div>
</template>
<script>

import {mapState}  from 'vuex';
export default {
    data(){
        return {
            active: 0,
            items: [{ text: '热门' }, { text: 'VIP' }, { text: '儿童' }, { text: '音乐' }, { text: '英语' }, { text: '商业' }, { text: '娱乐' }, { text: '感情' }, { text: '历史' }, { text: '其他' }],
        }
    },
    computed:{
        ...mapState([
            'classifyData',
            'sideBarData'
        ])
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
       
      
    },
    mounted(){

        this.$store.dispatch('getClassifyDa', {
        type: this.type
    })
    console.log(this.type);
    }
}
</script>

<style lang="less" scoped>
.classify{
    .classify-wrap {
        position: absolute;
        top: 300px;
        left: 0px;

    }
   .van-swipe{
       position: absolute;
       top:90px;
       left:50%;
       transform:translate(-50%,0);
       border-radius:30px;
       width:84%;
   }

.im1{
    width:100%;
    height:200px;
}
    .search{
        padding-bottom:150px;
         background:#8097bc;
         display:flex;
         align-items:center;
         height:60px;
         justify-content: space-around;
         .im{
             display:flex;
             align-items:center;
            .i1{
                width:20px;
                height:20px;
                margin-right:20px;
            }
            .i2{
                width:20px;
                height:20px;
            }
         }
         .sear{
        margin-top:10px;
        display:flex;
         align-items:center;
         justify-content: flex-start;
         width:200px;
         height:30px;;
         background:#c2cddf;
         border-radius:16px;
         .s{
             width:14px;
             height:14px;
             margin-left:5px;
         }
         .in{
        border:0;
         background:#c2cddf;
         margin-left:10px;
         }


         }

    }
    display:flex;
    flex-direction: column;
    width:100%;
    .class{
        padding-bottom:16px;
        display:flex;
        align-items:center;
        height:50px;
        background:#8097bc;
        .back{
             font-size:26px;
             margin-left:30px;
             color:white;
        }
        .c{
            font-size:16px;
            color:white;
            margin-left:130px;
        }

    }

}
</style>