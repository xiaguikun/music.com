<template>
    <div  class="myvoice">
            <van-nav-bar
            class="aass"
            title="我声音"
            right-text="编辑"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
       />

       <div class="list" v-for="(item, index) in myVoiceList" :key="index">
           <div class="imgcon">
               <img :src="item.imgUrl" alt="">
           </div>
           <div class="title">
               <p class="t-top">{{item.title}}</p>
               <p class="time">{{item.outtime}}</p>
           </div>
           <div class="right">
               <div class="del" v-if="hide"  @click="del(index)">
                   <span>删除</span>
               </div>
               <div class="tup">
                   <img src="../images/icon/形状备份 -2@3x.png" alt="">
                   <div class="readtime">{{item.readtime}}</div>
               </div>
           </div>
       </div>
       
    </div>
</template>
<script>
import {mapState,mapActions}  from 'vuex'
export default {
    data(){
        return {
            hide:false,
            change:false
        }
    },
    computed:{
        ...mapState([
            'myVoiceList'
        ])
    },
    methods:{
        ...mapActions([
            'getMyVoiceList'
        ]),
        onClickLeft() {
            this.$router.go(-1)
    },
    onClickRight() {
      this.hide=true;
      if(this.change){
          this.hide=false;
          this.change=false;
      }

    },
    del(index){
         this.myVoiceList.splice(index,1);
         this.change=true;
    }

    },
    mounted(){
       this.getMyVoiceList();
    }
    
}
</script>

<style lang="less" scoped>
.myvoice{
    width:100%;
    height:100px;
    .aass{
    background: #fd6b95;
}
.list{
    align-items:center;
    justify-content: space-around;
    height:140px;
    width:100%;
    border:1px solid #e4e4e4;
    display:flex;
    .right{
        display:flex;
        height:100%;
        // align-items:flex-end;
        flex-direction: column;
        justify-content: flex-end;
        align-items:center;
        .del{
            font-size:16px;
            color:white;
            width:40px;
            height:40px;
            background:red;
            text-align:center;
            line-height:40px;
            border-radius:8px;

        }
        .tup{
            display:flex;
            margin-bottom:20px;
            margin-top:30px;

            img{
            width:14px;
            height:14px;
        }
        .readtime{
            font-size:14px;
            color:#868686;
            margin-left:10px;
        }
        }
    }
    .title{
        width:160px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        .t-top{
            font-size:16px;
            color:#333333;
            margin-bottom:20px;
        }
        .time{
            color:#868686;
            font-size:14px;
        }

    }
    .imgcon{
        width:100px;
        height:100px;
        img{
            border-radius:20px;
            width:100px;
        height:100px;
        }
    }

}
}

</style>