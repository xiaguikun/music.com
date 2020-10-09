<template>
   <div class="listenlist">
       <van-nav-bar
        title="听单"
        right-text="编辑"
        left-arrow
        @click-right="onClickRight"
        />
        <p class="p-1">我收藏的声音</p>
        <div class="content">
            <img v-if="done1 === 1" src="../images/icon/下拉备份3@3x.png" alt="" @click="change" class="img-001">
            <img v-if="done1 === -1" src="../images/icon/下拉备份 6@3x.png" alt="" @click="change" class="img-002">
            <span>最喜欢</span>
            <span>4</span>
        </div>
        <div v-if="done === 1">
            <div class="main" v-for="(item,index) in listenlistData" :key="index" >  
                <img :src="item.img" alt="" >
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
            </div>
        </div>
        <div class="content">
            <img v-if="done2 === 1" src="../images/icon/下拉备份3@3x.png" alt="" @click="change1" class="img-001">
            <img v-if="done2 === -1" src="../images/icon/下拉备份 6@3x.png" alt="" @click="change1" class="img-002">
            <span>知识</span>
            <span>9</span>
        </div>
        <div v-if="done3 === 1">
            <div class="main" v-for="(item,index) in listenlistData" :key="index" >  
                <img :src="item.img" alt="" >
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
            </div>
        </div>
        <div class="content">
            <img v-if="done4 === 1" src="../images/icon/下拉备份3@3x.png" alt="" @click="change2" class="img-001">
            <img v-if="done4 === -1" src="../images/icon/下拉备份 6@3x.png" alt="" @click="change2" class="img-002">
            <span>工作技巧</span>
            <span>20</span>
        </div>
        <div v-if="done5 === 1">
            <div class="main" v-for="(item,index) in listenlistData" :key="index" >  
                <img :src="item.img" alt="" >
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
            </div>
        </div>
        <div class="content">
            <img v-if="done6 === 1" src="../images/icon/下拉备份3@3x.png" alt="" @click="change3" class="img-001">
            <img v-if="done6 === -1" src="../images/icon/下拉备份 6@3x.png" alt="" @click="change3" class="img-002">
            <span>明星</span>
            <span>12</span>
        </div>
        <div v-if="done7 === 1">
            <div class="main" v-for="(item,index) in listenlistData" :key="index" >  
                <img :src="item.img" alt="" >
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
            </div>
        </div>
        <p class="p-2">我喜欢的听单</p>
        <p class="p-3">大有的收藏</p>
        <div class="content">
            <img v-if="done8 === 1" src="../images/icon/下拉备份3@3x.png" alt="" @click="change4" class="img-001">
            <img v-if="done8 === -1" src="../images/icon/下拉备份 6@3x.png" alt="" @click="change4" class="img-002">
            <span>最喜欢</span>
            <span>4</span>
        </div>
        <div v-if="done9 === 1">
            <div class="main" v-for="(item,index) in listenlistData" :key="index" >  
                <img :src="item.img" alt="" >
                <p>{{ item.title }}</p>
                <p>{{ item.content }}</p>
            </div>
        </div>
   </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
      return {
          done:-1,
          done1:1,
          done2:1,
          done3:-1,
          done4:1,
          done5:-1,
          done6:1,
          done7:-1,
          done8:1,
          done9:-1
      };
     },
    mounted(){
      this.getListenListData();
    },
    computed:{
      listenlistData(){
          return this.$store.state.listenlistData;
      },
    },
    methods: {
    onClickRight() {
      Toast('按钮');
    },
    getListenListData(){
        this.$store.dispatch('getListenList')
    },
    change(){
        this.done*=-1;
        this.done1*=-1;
    },
    change1(){
        this.done2*=-1;
        this.done3*=-1;
    },
    change2(){
        this.done4*=-1;
        this.done5*=-1;
    },
    change3(){
        this.done6*=-1;
        this.done7*=-1;
    },
    change4(){
        this.done8*=-1;
        this.done9*=-1;
    }
    },
    }
</script>
<style lang='less' scoped>
.listenlist{
    .van-nav-bar{
        background-color: #fd6b95;
    }
    .p-1{
        font-size: 20px;
        margin: 20px 0 20px 15px;
    }
    .p-2{
        font-size: 20px;
        margin: 40px 0 30px 15px;
       float: left;
    }
    .p-3{
        float: left;
        font-size: 20px;
        padding: 20px;
        width: 100%;
        background-color: #eee;
        color: #999;
    }
    .content{
        width: 100%;
        float: left;
        padding: 15px 0;
        border-bottom: 2px solid #ccc;
        box-shadow:0 2px 5px;
        .img-001{
            width: 20px;
            height: 13px;
            float: left;
            margin: 3px 20px;
           
        }
        .img-002{
            width: 13px;
            height: 19px;
            float: left;
            margin: 0px 23.5px;
           
        }
        span:nth-child(2){
            font-size: 20px;
            float: left;
            color: #868686;
        }
        span:last-child{
            font-size: 16px;
            float:right;
            padding-right: 20px;
            color: #868686;
        }
    }
    .main{
        padding: 20px;
        padding-bottom: 30px;
        float: left;
        width: 100%;
        border-bottom: 1px solid #aaa;
        img{
            float: left;
            width: 90px;
            height: 90px;
            border-radius: 20px;
        }
        p:nth-child(2){
            width: 70%;
            float: left;
            font-size: 14px;
            padding-left: 20px;
            margin-top: 20px;
            margin-bottom: 15px;
        }
        p:last-child{
            float: left;
            font-size: 12px;
            padding-left: 20px;
            color: #999;
        }
    }
}
</style>
