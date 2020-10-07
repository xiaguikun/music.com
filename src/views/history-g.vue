<template>
  <div class="his">
     <div class="h-his">
         <div class="back" @click="goback">&lt;</div>
         <span class="h">历史</span>
         <div class="item">编辑</div>
     </div>
   
<van-search v-model="value" placeholder="搜索"  background="#ffce70" shape="round"/>


<van-collapse v-model="activeName" accordion  :border="true" v-for="(it ,index) in date" :key="index">
  
  <van-collapse-item :title="it.title" :name="index+1" :i="i" >


      <div class="cont" :class="{'romove':re}" v-for="(item,index) in mess" :key="index">
          <div class="i2">
            <img :src="item.imgUrl" alt="">
          </div>
     <div class="r">
          <h2>{{item.ti}}</h2>
          <p>{{item.text}}</p>
     </div>
    <div class="del" @click="remove(index)">
        <img src="../images/icon/删除备份 5@3x.png" alt="" class="i3">
    </div>
      </div>
  </van-collapse-item>
  
</van-collapse>



      
  </div>
</template>

<script>
export default {
data() {
    return {
        hide:true,
        re:false,
      value: '',
      i:'0',
       activeName: '1',
       show:'0',
       sel:'../images/icon/下拉备份 6@3x.png',
       date:[
           {
               title:'今天',
           },
           {
               title:'昨天',
           },
           {
               title:'2019-12-13',
           },
           {
               title:'2019-12-12',
           },
           {
               title:'2019-12-11',
           }

       ],
       mess:[
           {
               
                imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3361879810,3578970602&fm=26&gp=0.jpg',
                ti:'爱的启程',
                text:'我还没学会如何爱一个人，你就到来了。',

           },
           {
              
               imgUrl:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=276772730,3789231562&fm=26&gp=0.jpg',
                ti:'学无止境',
                text:'学习是痛苦的，但收获是快乐的。',
           },
             {
                 
               imgUrl:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1000093182,975919197&fm=26&gp=0.jpg',
                ti:'城市规则',
                text:'如何让这个城市属于你。',
           },
           {
                
               imgUrl:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1000093182,975919197&fm=26&gp=0.jpg',
                ti:'城市规则',
                text:'如何让这个城市属于你。',
           },
           {
                
               imgUrl:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1000093182,975919197&fm=26&gp=0.jpg',
                ti:'城市规则',
                text:'如何让这个城市属于你。',
           },
           
       ]
          
       
    };
  },
methods:{
goback(){
    this.$router.go(-1);
},
remove(index){
this.mess.splice(index,1);

}


}
}
</script>

<style lang="less" scoped>
.his{
    width:100%;
    display:flex;
    flex-direction: column;
    .van-search {
      height:76px;
      
    }
    .h-his{
        background:#fd6b95;
        width:100%;
        height:40px;
        font-size:16px;
        display:flex;
        color:white;
        justify-content: space-around;
        align-items:center;
        .back{
          font-size:26px;
        }
        .item{
          font-size:12px;
        }
        
    }
   .van-field__body {
     width:100px;
   }
}

.sfq{
  display:flex;
  flex-direction:column;
  .top{
    display:flex;
    align-items: center;
    height:36px;
    border-bottom:2px solid gray;
    .i1{
        width:16px;
        height:16px;
    }
    .p1{
        font-size:16px;
        margin-left:10px;
    }


  }
}


.cont{
    justify-content: space-around;
    display:flex;
    width:100%;
    height:100px;
    align-items:center;
    .i2{
        height:100px;
        width:100px;
       border-radius:40px;
        img{
            width:100%;
            height:100%;
             
        }
        
    }
    .r{
        margin-left:10px;
    }

}

.van-collapse-item__content {
    padding:0 !important;
}


.del{
     width:20px;
    height:20px;
    margin-left:10px;
.i3{
   width:100%;
   height:100%;
}
}

.remove{
    display:none;
}

</style>