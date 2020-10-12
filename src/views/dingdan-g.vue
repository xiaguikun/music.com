<template>
  <div class="dingdan">
      <van-nav-bar
            class="dingd"
            title="订单"
            left-arrow
            @click-left="onClickLeft"
       />

    <nav >
        <span class="nav" v-for="(item,index) in title" :key="index">{{item}}</span>
    </nav>

    <main>
     <div class="content">
        <div class="vip">
        <div class="v-top">
          <img class="i-vip" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3835307478,53927724&fm=26&gp=0.jpg" alt="">
          <div class="text-c">
            <p class="p">VIP会员三个月</p>
          </div>
            
          
          <div class="succ">
            <span class="s1">交易成功</span>
             <p class="mon">30元</p>
          </div>
        </div>
      </div>
      <div class="reshop">
        <p class="all">共1件商品，合计：<span class="money">￥30.00</span></p>
        <div class="shopre">再次购买</div>
      </div>
      
     </div>

     <div class="content footer">
        <div class="vip  vp" >
        <div class="v-top">
          <img class="i-vip" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3608004531,3100775675&fm=26&gp=0.jpg" alt="">
          <div class="center">
            <p class="p">那些好听却难找的音乐</p>
            <span class="ll">音浪浪</span>
          </div>
          <div class="succ">
            <span class="s1">交易成功</span>
             <p class="mon">3元</p>
          </div>
        </div>
      </div>

      <div class="vip  vp" >
        <div class="v-top">
          <img class="i-vip" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=294887037,168089952&fm=26&gp=0.jpg" alt="">
          <div class="center">
            <p class="p">设计心理学全集</p>
            <span class="ll">设计狗</span>
          </div>
          <div class="succ">
             <p class="mon">10元</p>
          </div>
        </div>
      </div>

       <div class="vip  vp" >
        <div class="v-top">
          <img class="i-vip" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568604218,116305970&fm=26&gp=0.jpg" alt="">
          <div class="center">
            <p class="p">设计必知规范</p>
            <span class="ll">设计师必须知道的设计规范</span>
          </div>
          <div class="succ">
             <p class="mon">17元</p>
          </div>
        </div>
      </div>
      <div class="reshop">
        <p class="all">共1件商品，合计：<span class="money">￥30.00</span></p>
        <div class="shopre">再次购买</div>
      </div>
     </div>
    </main>

  </div>
</template>

<script>
export default {
    data(){
        return {
            title:['全部','待付款','待收货','已完成','售后']
        }
    },
methods:{
      onClickLeft() {
            this.$router.go(-1);
    }
}
}
</script>

  <style lang="less" scoped>
  .dingdan{
    main{
      width:100%;
      display:flex;
      flex-direction: column;
      background:#f2f2f2;
      align-items:center;
      .footer{
        margin-top:30px;
        .vp{
             .center{
               width:170px;
               display:flex;
              flex-direction: column;
      .ll{
        font-size:16px;
        color:#959595;
      }
             }
        }
      }
      .content{
        margin-top:20px;
              width:90%;
              background:white;
              border-radius:20px;
              // background:red;
              
      .reshop{
        padding:10px;
        flex-direction: column;
        margin-top:10px;
        display:flex;
        align-items:flex-end;
        width:100%;
        height:140px;
          .all{
            font-size:14px;
            color:#868686;
            .money{
              color:#333333;
              font-size:16px;
            }
          }
          .shopre{
            margin-top:20px;
                width:120px;
                height:34px;
                line-height:34px;
                text-align:center;
                float:right;
                font-size:18px;
                background:#fd6b95;
                border-radius:16px;
                color:white;
              }
      }
            .vip{
              border-bottom:1px solid #e4e4e4;
              height:160px;

               padding:10px;
              .v-top{
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                justify-content: flex-start;
                .succ{
                display:flex;
                flex-direction: column;
                    .s1{
                      font-size:14px;
                      color:#fd6b95;
                    }
                    .mon{
                      margin-top:50px;
                      font-size:16px;
                      color:#868686;
                    }
                }
                .text-c{
                  width:170px;
                }
                .p{
                  color:#333333;
                  margin-bottom:20px;
                  font-size:16px;
                }
                .i-vip{
                  margin-right:10px;
                width:80px ;
                height:80px;
                border-radius:10px;
              }
              }
            }
        }}
       nav{
        display:flex;
        width:100%;
        height:46px;
        align-items:center;
        justify-content: space-around;
        
      .nav{

            font-size:18px;
        }
    }
      .dingd{
    background: #fd6b95;
   
}
  }

 </style>