<template>
   <div class="myvip-f">
       <van-nav-bar
            title="VIP"
            left-arrow
            @click-left="onClickLeft"
            class="van-nav-bar"
            />
        <div class="myvip-f-content">
            <img :src="imgUrl" alt="" class="myvip-f-content-left">
            <div class="myvip-f-content-top">
                <p>{{ title }}</p>
                <p>
                    <span>有效期至</span><span>{{ time }}</span>
                </p>
            </div>
            <div class="myvip-f-content-bottom">
                <img :src="img1" alt="">
                <span>736</span>
                <img :src="img2" alt="">
            </div>
        </div>
        <div class="card">
            <p>你已连续签到15天，签到领积分</p>
            <ul>
                <li>
                    <span>1天</span>
                    <img src="../images/icon/对@3x.png" alt="">
                </li>
                <li>
                    <span>2天</span>
                    <div>+5</div>
                </li>
                <li>
                    <span>3天</span>
                    <div>+5</div>
                </li>
                <li>
                    <span>4天</span>
                    <div>+5</div>
                </li>
                <li>
                    <span>5天</span>
                    <div>+5</div>
                </li>
                <li>
                    <span>6天</span>
                    <div>+5</div>
                </li>
            </ul>
            <img src="../images/icon/右-三角@3x.png" alt="" class="img-f-1">
        </div>
        <nav>
            <li><img src="../images/icon/编组41@3x.png" alt=""><span>等级</span></li>
            <li><img src="../images/icon/编组42@3x.png" alt=""><span>积分</span></li>
            <li><img src="../images/icon/编组43@3x.png" alt=""><span>福利</span></li>
            <li><img src="../images/icon/飞机@3x.png" alt=""><span>特权</span></li>
        </nav>
        <div class="recommend">
            <p class="recommed-top">VIP推荐</p>
            <ul>
                <li v-for="(item,index) in vipRecommend" :key="index">
                    <img :src="item.imgUrl" alt="" class="img-0">
                    <p>{{ item.title }}</p>
                    <img src="../images/icon/编组 4备份 4@3x.png" alt="" class="img-1">
                    <img src="../images/icon/形状备份 10@3x.png" alt="" class="img-2">
                    <span class="title-1">{{ item.num }}W</span>
                </li>
            </ul>
            <ul>
                <li v-for="(item,index) in vipProgram" :key="index">
                    <img :src="item.imgUrl" alt="" class="img-0">
                    <p>{{ item.title }}</p>
                    <img src="../images/icon/编组 4备份 4@3x.png" alt="" class="img-1">
                    <img src="../images/icon/形状备份 10@3x.png" alt="" class="img-2">
                    <span class="title-1">{{ item.num }}W</span>
                </li>
            </ul>
        </div>
   </div>
</template>

<script>
export default {
   data() {
    return {
        imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3820238937,417814277&fm=26&gp=0.jpg",
        title:"原来是雅典娜啊！",
        time:"2020-01-31",
        img1:require("../images/icon/编组 49@3x.png"),
        num:"736",
        img2:require("../images/icon/右@3x.png")
    };
  },
  methods:{
      getIndVip(){
          this.$store.dispatch('getIndVip')
      },
      onClickLeft(){
          this.$router.go(-1);
      }
  },
  mounted(){
      this.getIndVip();
  },
  computed:{
      vipRecommend(){
          return this.$store.state.vipRecommend;
        // console.log(this.$store.state);
      },
      vipProgram(){
          return this.$store.state.vipProgram;
      },
  }
};
</script>
<style lang='less' scoped>
.myvip-f{
    .van-nav-bar{
        background-color: #fd6b95;
    }
    .myvip-f-content{
        display: flex;
        background-color: #ffce70;
        padding: 20px ;
        padding-bottom:40px ;
        .myvip-f-content-left{
            width: 80px;
            height: 80px;
            margin-right: 20px;
            border-radius: 50%;
        }
        .myvip-f-content-top{
            float: left;
            font-size: 18px;
            color: #333;
            margin-top: 20px;
            p{
                span{
                    font-size: 12px;
                }
            }
        }
        .myvip-f-content-bottom{
            float: right;
            font-size: 12px;
            display: flex;
            align-items: center;
            margin-left: 20px;
            img{
                width: 15px;
                height: 15px;
                margin: 0 5px;
            }
            img:last-child{
                width: 6px;
                height: 10px;
                margin-left: 10px;
            }
        }
    }
    .card{
        background-color: #ffea6f;
        width: 85%;
        margin-left: 7.5%;
        margin-top: -20px;
        z-index: 0;
        border-radius: 20px;
        padding: 10px 0px 40px 20px;
        p{
            font-size: 14px;
            font-weight: 600;
        }
        ul{
            float: left;
            display: flex;
            width: 90%;
            margin-top: 30px;
            li{
                list-style: none;
                float: left;
                font-size: 12px;
                padding: 0 10px;
                color: #868686;
                text-align: center;
                div,img{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: white;
                    font-size: 12px;
                    line-height: 24px;
                    text-align: center;
                    margin-top: 10px;
                }
            }
        }
        .img-f-1{
            width: 15px;
            height: 25px;
            margin-top: 54px;
        }
    }
    nav{
        display: flex;
        width: 90%;
        justify-content: space-around;
        margin-left: 5%;
        margin-top: 30px;
        li{
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
                margin-bottom: 10px;
            }
            span{
                font-size: 14px;
            }
        }
    }
     .recommend{
        width: 100%;
        padding-left: 7.5%;
        // overflow: hidden;
        .recommed-top{
            margin: 30px 0;
            font-size: 20px;
        }
        ul{
            display: flex;
            // flex-wrap: nowrap;
            width: 100%;
            overflow: hidden;
            margin-bottom: 20px;
            li{
                flex-shrink: 0;
                width: 28%;
                height: 140px;
                // background-color: orchid;
                // float: left;
                margin-right:20px ;
                border-radius: 10px;
                position: relative;
                .img-0{
                    width: 100%;
                    height: 100px;
                    border-radius: 10px;
                }
                p{
                    font-size: 16px;
                    text-align: center;
                }
                .img-1{
                    position: absolute;
                    top:5px;
                    right:-5px;
                    width: 35px;
                    height: 25px;
                }
                .img-2{
                    position: absolute;
                    bottom:43px;
                    left:3px;
                    width: 16px;
                    height: 16px;
                    color: white;
                }
                .title-1{
                    position:absolute;
                    bottom:43px;
                    left:22px;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.9);  
                }
            }
        }
     }
}
</style>
