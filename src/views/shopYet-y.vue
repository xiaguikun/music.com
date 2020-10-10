<template>
    <div class="shopYet-y">
        <van-nav-bar
            title="已购"
            right-text="编辑"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight" style="color:#fff;"/>

        <van-collapse v-model="activeNames" >
             <van-collapse-item title="订阅号" name="1" :icon="iconn" >
               <div class="read-wrapper">
                  <div v-for="(item) in Shop1Data" :key="item.id" class="read-wrap">
                  <img :src="item.url" alt="" class="read">
                  <span>{{item.title}}</span>
               </div>
               </div>
               
                <template #right-icon>
                  {{count1}}
                </template>
               
            </van-collapse-item>
             <van-collapse-item title="声音" :icon="iconn" name="2" >
               <div class="song-wrapper">
                  <div v-for="(i,index) in Shop2Data" :key="'i'+index" class="song-wrap">
                  <img :src="i.url" alt="" class="song">
                  <p>{{i.title}}</p>
                  <span>{{i.author}}</span>
                </div>    
               </div>
              
                <template #right-icon>
                  {{count2}}
                </template>
                            
            </van-collapse-item>
            
        </van-collapse>
        
        
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return {
            activeNames: [],
            iconn:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAAAXNSR0IArs4c6QAAAZVJREFUWAnV2L9LhGAcx/HzhHAIGvwLSoj2/gVdrmi9oUEiSAhaXMS/QMI114Ma29qVpqZobGvsxqLFiBCuz/fwOcj7pT7P3T3PAyLP6Xnvl8qBdjqKD431x3G8WxTFGeb7WLbY5zKtRxjoGeq6/hAEQUZtY0AURX1su8NcynAKrQ5N024tyzrXEL+H+FfsYFR3kn0OxFUXkX0V48uTe0GAg3Ki3Ap3jkWAN+XKy2DcQu9djHvMfxRFDPQ0TT8cx/nC5eiphMDZT/EvdKlTNBDPtm3TVbAVQTyapnniuu7vGEDRWZY9KYKg+GPP876pewJQBPEvfgogOWIqfiZAUsTM+LkAyRBz4xcCJEEsjF8K2DBiaXwtwIYQteJrA9aMqB3fCLAmRKP4xoAVIxrHtwKsCNEqvjVAMKJ1PBdAEIIrnhvAieCOFwJoiRASLwzQECEsXiigJkJoPP0mvZUQOsIwvMaLglMc9JMdGM+vIyw3hmEcsScpto13PXk3ynug6veTJNnO8/wQ71t3EP7i+/6wuo+I+R8dUt8AGu04JwAAAABJRU5ErkJggg=='
        }
    },
    methods: {
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1);
        },
        onClickRight() {
        Toast('按钮');
        },
         getShopListData(){
            this.$store.dispatch('getShopList')
        }
    },
     mounted(){
         this.getShopListData();
         

     },
     computed:{
       count1() {
         return  this.$store.state.shop1Data.length
       },
       count2(){
         return this.$store.state.shop2Data.length
       },
          Shop1Data(){
            return this.$store.state.shop1Data;
        },
          Shop2Data(){
            return this.$store.state.shop2Data;
        }
     }
}
</script>

<style lang="less" scoped>

</style>