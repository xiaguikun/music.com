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
        <van-tree-select height="771px"  :items="items" :main-active-index.sync="active" class="classify-wrap">
        <template #content id="wrap-right">
            <div v-for="(item,index) in sideBarData" :key="index" >
                 <div v-if="active == item.type">
                    <van-image :src="item.imgUrl"/>
                    <p>{{item.text}}</p>
                     <p>{{item.title}}</p>
                      <p>{{item.num}}</p>
                       <p>{{item.coll}}</p>
                     <img :src="icon" alt="">
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
            // icon:"",
            active: 0,
            items: [{ text: '热门' }, { text: 'VIP' }, { text: '儿童' }, { text: '音乐' }, { text: '英语' }, { text: '商业' }, { text: '娱乐' }, { text: '感情' }, { text: '历史' }, { text: '其他' }],
        }
    },
    computed:{
        ...mapState([
            'classifyData',
            'sideBarData'
        ]),
        icon(){
            return this.sideBarData.icon
        }
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

</style>