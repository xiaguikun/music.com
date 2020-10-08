<template>
   <div class="ind-vip-fkc">
       <div class="top">
           <header>
            <van-search  placeholder="搜索" />
            <span class="tubiao">
            <img src="../images/icon/历史时间-3@3x.png" alt="" >
            <img src="../images/icon/plus-circle@3x.png" alt="" >
            </span>
            </header>
       </div>
        <div class="card" v-for="(item,index) in vipData" :key="index">
            <div class="card-center">
                <p>{{ item.title }}</p>
                <p>{{ item.time }}</p>
            </div>
            <div class="touxiang"><img :src="item.imgUrl" alt=""></div>
            <div class="xufei">每月只需6元</div>
        </div>
        <div class="recommend"  >
            <p class="recommed-top">今日专属推荐</p>
            <ul>
                <li v-for="(item,index) in vipRecommend" :key="index">
                    <img :src="item.imgUrl" alt="" class="img-0">
                    <p>{{ item.title }}</p>
                    <img src="../images/icon/编组 4备份 4@3x.png" alt="" class="img-1">
                    <img src="../images/icon/形状备份 10@3x.png" alt="" class="img-2">
                    <span class="title-1">{{ item.num }}W</span>
                </li>
            </ul>
            <p class="recommed-top">最受欢迎的节目给最受欢迎的你</p>
            <ul>
                <li v-for="(item,index) in vipProgram" :key="index">
                    <img :src="item.imgUrl" alt="" class="img-0">
                    <p>{{ item.title }}</p>
                    <img src="../images/icon/编组 4备份 4@3x.png" alt="" class="img-1">
                    <img src="../images/icon/形状备份 10@3x.png" alt="" class="img-2">
                    <span class="title-1">{{ item.num }}W</span>
                </li>
            </ul>
            <p class="recommed-top">vip频道</p>
            <nav>
                <li v-for="(item,index) in vipFooter" :key="index">
                    <img :src="item.imgUrl" alt="" class="img1">
                    <div class="content">
                        <p>{{ item.title }}</p>
                        <p>{{ item.content }}</p>
                        <div>
                            <img src="../images/icon/形状备份 17@3x.png" alt="">
                            <span>{{ item.num }}W</span>
                            <img src="../images/icon/编组 27@3x.png" alt="">
                            <span>{{ item.number }}集</span>
                        </div>
                        <div class="icon-1">
                            <img src="../images/icon/叉@3x.png" alt="">
                        </div>
                    </div>
                </li>
            </nav>
        </div>
        
   </div>
  
</template>

<script>
export default {
   data() {
    return {};
  },
  methods:{
      getIndVip(){
          this.$store.dispatch('getIndVip')
      }
  },
  mounted(){
      this.getIndVip();
  },
  computed:{
      vipData(){
          return this.$store.state.vipData;
      },
      vipRecommend(){
          return this.$store.state.vipRecommend;
        // console.log(this.$store.state);
      },
      vipProgram(){
          return this.$store.state.vipProgram;
      },
      vipFooter(){
          return this.$store.state.vipFooter;
      }
  }
};
</script>
<style lang='less' scoped>
.ind-vip-fkc{
    .top{
            width:100%;
            height: 200px;
            background:#ffce70;
            overflow: hidden;
            header{
                display:flex;
                justify-content:space-between;
                width:100%;
                margin-top:50px;
                .van-search{
                    background:rgba(255, 255, 255, 0);
                    width:65%;
                    .van-search__content{
                        border-radius:20px;
                    }
                }
                .tubiao{
                    img{
                        width: 30px;
                        height: 30px;
                        margin-right:25px;
                        vertical-align: middle;
                    }
                }
            }
       
    }
    .card{
            width: 85%;
            height: 160px;
            background-color: red;
            position: relative;
            top: -80px;
            left: 7.5%;
            border-radius: 30px;
            background-image: url(../images/icon/vip@3x.png);
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .card-center{
                font-size: 20px;
                p:last-child{
                    margin-top: 20px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
            .touxiang{
                position: absolute;
                left: 18px;
                top: 34px;
                width: 70px;
                height: 70px;
                border-radius: 50px;
                background-color: black;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50px;
                }
            }
            .xufei{
                position: absolute;
                right: 20px;
                bottom:15px;
                width: 80px;
                height: 40px;
                background-color: orange;
                border-radius: 20px;
                line-height: 40px;
                text-align: center;
                font-size: 12px;
                color: white;
            }
    }
    .recommend{
        margin-top:-80px;
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
            overflow: auto;
            li{
                flex-shrink: 0;
                width: 25%;
                height: 130px;
                // background-color: orchid;
                // float: left;
                margin-right:20px ;
                border-radius: 10px;
                position: relative;
                .img-0{
                    width: 100%;
                    height: 90px;
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
        nav{
            display: flex;
            width: 100%;
            // overflow: auto;
            flex-wrap: wrap;
            li{
                flex-shrink: 0;
                width: 93%;
                background-color: #f6f6f6;
                display: flex;
                padding: 15px;
                border-radius: 20px;
                margin-bottom: 30px;
                .img1{
                    width: 30%;
                    height: 100px;
                    background-color: #000;
                    border-radius: 10px;
                    margin-right: 10px;
                }
                .content{
                    width: 70%;
                    font-size: 12px;
                    position: relative;
                    p:first-child{
                        font-size:20px;
                        margin-top:5px;
                        margin-bottom:10px;
                    }
                    p:nth-child(2){
                        font-size:16px;
                        width:90%;
                        margin-bottom: 10px;
                        color: #6b6767;
                    }
                    div:nth-child(3){
                        width: 100%;
                        height:20px;
                        color:#6b6767;
                        img{
                            width:10px;
                            height: 10px;
                            margin-right: 5px;
                        }
                        img:nth-child(3){
                            margin-left:20px;
                        }
                    }
                    .icon-1{
                        width: 18px;
                        height: 18px;
                        border: 2px solid #999;
                        border-radius: 50%;
                        position: absolute;
                        top:0;
                        right: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 8px;
                            height: 8px;
                        }
                    }
                }
            }
        }
    }
}
</style>