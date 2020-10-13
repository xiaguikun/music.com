<template>
    <div class="mine-y">
        <div  v-for="(item,index) in mineData" :key="index">
            <header v-if="index == 0">我的
                <img :src="item.url" alt="" v-if="index == 0" class="setting" @click="to1">
            </header> 
        </div>
        <div class="head">
            <img src="http://pic.90sjimg.com/back_pic/u/00/24/84/32/561dc90ed93f6.jpg" alt="" class="head-bk">
            <div class="head-wrap">
                <img :src="star.imgUrl" alt="" class="head-avatar">
                <h6>原来是 {{star.title}}</h6>
                <p>关注 38 | 粉丝 37</p>
            </div>
            <div class="head-play">
                <span>VIP会员</span>
                <span>首月仅需6元</span>
            </div>
        </div>
        <main>
            <div class="main-wrap">
                <h6>我的功能</h6>
                <nav>
                    <section v-for="(item,index) in mineData" :key="index" v-show="(index > 0) && (index < 5)" @click="toAll(index)">
                        <img :src="item.url" alt="" v-if="(index > 0) && (index < 5) " class="setting">
                        <span>{{item.title}}</span>
                    </section>
                </nav>
            </div>
             <div class="main-wrap">
                <h6>我的服务</h6>
                <nav>
                    <section v-for="(item,index) in mineData" :key="index" v-show="(index > 4) && (index < 9)" 
                    @click="toAll(index)"
                    >
                        <img :src="item.url" alt="" v-if="(index > 4) && (index < 9) " class="setting">
                        <span>{{item.title}}</span>
                    </section>
                </nav>
            </div>
             <div class="main-wrap">
                <h6>其他服务</h6>
                <nav>
                    <section v-for="(item,index) in mineData" :key="index" v-show="(index > 8) && (index < 13)" class="sec">
                        <img :src="item.url" alt="" v-if="(index > 8) && (index < 13) " class="setting">
                        <span>{{item.title}}</span>
                    </section>
                </nav>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // minelist:[]
        }
    },
     methods:{
        getMineListData(){
            this.$store.dispatch('getMineList')
        },
        to1(){
            this.$router.push('/shezhi');
        },
        toAll(index){
            if(index==1){
                this.$router.push('/myvip');
            }
            if(index==2){
                this.$router.push('/shoucang');
            }
            if(index==3){
                this.$router.push('/shengyin');
            }
            if(index==4){
                // this.$router.push('/');
            }
            if(index==5){
                // this.$router.push('/');
            }
            if(index==6){
                // this.$router.push('/');
            }
            if(index==7){
                this.$router.push('/qianbao');
            }
        }
     },
     mounted(){
         this.getMineListData();
     },
     computed:{
          mineData(){
            return this.$store.state.mineData.img;
        },
        star(){
            return this.$store.state.starPerson;
        }
     }
}
</script>

<style lang="less" scoped>
.mine-y {
    background-color: #f2f2f2;
    header {
        line-height: 50px;
        height: 50px;
        width: 100%;
        font-size: 16px;
        color: #fff;
        background-color: rgb(253,107,149);
        position: relative;
        text-align: center;
        .setting {
            position:absolute;
            right: 15px;
            top: 15px;
            height: 20px;
            width: 20px;
            border-radius: 50%; 
            opacity: 0.6;
        }
    }
    .head {
        position: relative;
        .head-bk {
            width: 100%;
            height: 140px;
        }
        .head-wrap {
            position: absolute;
            overflow: hidden;
            top: 20px;
            left: 20px;
            width: 300px;
            h6 {
                font-weight: 600;
                font-size: 20px;
                margin-top: 15px;
                letter-spacing: 1px;
            }
            p {
                font-size: 14px;
                margin-top: 18px;
                // letter-spacing: 3px;
            }
            .head-avatar {
                float: left;
                margin-right: 20px;
                height: 70px;
                width: 70px;
                border-radius: 50%;
                z-index: 1;
            }
        }
        .head-play {
            position: absolute;
            top: 120px;
            left: 30px;
            display: flex;
            width: 317px;
            height: 45px;
            border-radius: 5px;
            line-height: 45px;
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 1px;
            background-color: #fff;
            justify-content: space-around;
            box-shadow: 0 2px #ccc;

        }
    }
    main {
        padding: 26px 0;
        margin-bottom: 40px;
       
        .main-wrap{
            margin-top: 14px;
            
            padding: 26px 0;
            height: 165px;
            background-color: #fff;
            h6 {
                font-size: 16px;
                margin-left: 20px;
            }
           
            nav {
 
                margin-top: 25px;
                width: 100%;
                display: flex;
                justify-content:space-around;
                // .sec {
                //     width: 50px;
                // }
                section {
                    text-align: center;
                    width: 43px;
                    height: 60px;
                    span {
                        // display: inline;
                        white-space: nowrap;
                        font-size: 12px;
                    }
                    img {
                        width: 33px;
                        height: 33px;
                    }
                }
            }
        }
    }
  }  
</style>