<template>
  <div class="mine-set">
    <van-nav-bar
        title="钱包"
        :fixed="true"
        left-arrow
        :placeholder="true"
      /> 
    <div class="money-bg">
        <div class="qian">
            <font class="xiaowu">5.</font>
            <font class="xiaoling">00</font>
            <font class="yibi">艺币</font>
        </div>
        <div class="chongzhi">充值</div>
        <div class="tixian">提现</div>
    </div>  
    <van-cell title="优惠券" is-link /> 
    <div class="heng"></div>
    <van-cell title="交易记录" is-link /> 
    <div class="heng"></div>
    <van-cell title="赠送记录" is-link /> 
    <div class="heng"></div>
    <van-cell title="实名认证" is-link /> 
    <div class="heng"></div>
    <van-cell title="添加银行卡" is-link /> 
    <div class="heng"></div>
    <van-cell title="理财通" is-link /> 
    <div class="heng"></div>
    <div class="zhaoshang">
        <p class="z1">招商银行卡联名款</p>
        <p class="z2">免费领取</p>
        <p class="z3">点击了解 >></p>
        <div class="z4"><img src="../images/images/zhaoshang.jpg" alt=""></div>   
    </div>
    <div class="tengxun">
       <p class="z1">腾讯大王卡</p>
        <p class="z2">免费领取</p>
        <p class="z3">点击了解 >></p>
        <div class="z4"><img src="../images/images/tengxun.jpg" alt=""></div>   

    </div>
 </div>
</template>
  

<style lang="less">
  .mine-set{
    position:relative;
    .van-nav-bar{
      background:#fd6b95;
      .van-nav-bar__title,.van-icon-arrow-left{
        color:#fff; 
       }   
    }
    .heng{
      border-top:1px solid #969799;
      width:92%;
      margin:0 auto;  
    }
    .van-cell-group{
      .van-cell{
        color:#333333;   
        }  
    }
    .money-bg{
        background-image:url(../images/icon/WechatIMG7备份@3x.png); 
        width:90%;
        height:190px;
        background-size: 100% 100%;
        margin-left:50%;
        transform:translate(-50%);
        margin-top:20px;
        overflow:hidden;
        position:relative;
       .qian{
           color:#fff;
           margin-top:25px;
           margin-left:45px; 
           font-weight:100;        
           .xiaowu{
               font-size:45px;
            }  
           .xiaoling{
               font-size:30px;
            }
           .yibi{
               font-size:20px;  
               margin-left:10px;  
            }
        }
        .chongzhi{
            position:absolute;
            font-size:20px;
            width:100px;
            height:30px;
            line-height:30px;
            background:#ff487d;
            color:#fff;
            border-radius: 20px;
            text-align:center;  
            bottom:30px;
            left:50px;  
        } 
        .tixian{
            position:absolute;
            font-size:20px;
            width:100px;
            height:30px;
            line-height:30px;
            background:#ff487d;
            color:#fff;
            border-radius: 20px;
            text-align:center;
            bottom:30px;
            right:50px; 
            }  
    }
    .zhaoshang{
        background:#c7dcf0;
        width:90%;
        height:130px;
        margin-left:50%;
        transform:translate(-50%);
        margin-top:30px;
        overflow:hidden;
        position:relative;
        border-radius: 20px;
        margin-bottom:30px;
          .z1{
              font-size: 16px;
              color: #1a235d;
              margin-top: 30px;
              margin-left: 156px;
              }
          .z2{
              font-size: 16px;
              color: #1a235d;
              margin-top: 10px;
              margin-left: 156px;
          }
          .z3{
              font-size: 16px;
              color: #1a235d;
              margin-top: 16px;
              margin-left: 230px;
              } 
           .z4{
               position:absolute;
               width:100px;
               height:60px;
               top:30px;
               left:30px;
               img{
                   width:100%;
                   height:100%;
               }}    

        }  
    .tengxun{
        background:#2c7fb1;
        width:90%;
        height:130px;
        margin-left:50%;
        transform:translate(-50%);
        margin-top:30px;
        overflow:hidden;
        position:relative;
        border-radius: 20px;
        margin-bottom:30px;
          .z1{
              font-size: 16px;
              color: #fff;
              margin-top: 30px;
              margin-left: 156px;
              }
          .z2{
              font-size: 16px;
              color: #fff;
              margin-top: 15px;
              margin-left: 156px;
          }
          .z3{
              font-size: 16px;
              color: #fff;
              margin-top: 11px;
              margin-left: 230px;
              } 
           .z4{
               position:absolute;
               width:100px;
               height:60px;
               top:30px;
               left:30px;
               img{
                   width:100%;
                   height:100%;
               }
            }    
    }
  }                
</style>