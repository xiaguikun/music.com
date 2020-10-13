<template>
    <div class="classify">
       <van-nav-bar
       :border="false"
       class="class"
            title="分类"
            left-arrow
            @click-left="onClickLeft"
>
</van-nav-bar>
<div class="zh"></div>
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
                <!--  -->
                 <div v-if="active == item.type" class="wrap-right">
                     <div class="numb">
                        <img :src="item.icon" alt="" v-if="item.icon" class="image">
                        <span>{{item.numb}}</span>
                     </div>
                   
                    <van-image :src="item.imgUrl"/>
                    <section>
                        <p class="section-one">{{item.title}}</p>
                        <p class="section-two">{{item.text}}</p>
                        <p class="section-three">
                            <img src="../images/icon/形状备份 17@3x.png" alt="" class="imi">
                            <span>{{item.num}}</span>
                            <img src="../images/icon/形状备份 -2@3x.png" alt="" class="imi">
                            <span>{{item.coll}}</span>
                        </p>
                        
                    </section>
                    
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
        onClickLeft(){
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