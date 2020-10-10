<template>
    <div class="subscribe-x">
        <div class="s-top">
            <p>订阅</p>
            <van-search v-model="value" placeholder="请输入搜索关键词" />
            <div class="slide">
                <van-swipe :autoplay="2000">
                    <van-swipe-item v-for="(item,index) in slideData" :key="index">
                        <img :src="item" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="nav">
            <ul class="nav-ul">
                <li @click="to1">
                    <van-icon name="orders-o" />
                    <p>听单</p>
                </li>
                <li @click="to2">
                    <van-icon name="cart-o" />
                    <p>已购</p>
                </li>
                <li @click="to3">
                    <van-icon name="passed" />
                    <p>下载</p>
                </li>
                <li @click="to3">
                    <van-icon name="clock-o" />
                    <p>历史</p>
                </li>
            </ul>
        </div>
        <div class="switch">
            <ul>
                <li v-for="(item,index) in switchData" :key="index" @click="changeIndex(index)">
                    <p>{{item}}</p>
                    <div v-if="activeIndex==index"></div>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:'',
            navData:{
                iconUrl:[''],
            },
            activeIndex:0,
            switchData:['订阅','更新'],
            toUrl:['take','updata']
        }
    },
    methods:{
        getSubscribe(){
            this.$store.dispatch('getSubscribe');
        },
        changeIndex(index){
            this.activeIndex=index;
            this.$router.push(this.toUrl[index]);
        },
        to1(){
            this.$router.push('/tingdan')
        },
        to2(){
            this.$router.push('/yigou')
        },
        to3(){
            this.$router.push('/lishi')
        }
    },
    mounted(){
        this.getSubscribe();
    },
    computed:{
        slideData(){
            return this.$store.state.subscribeData.slide;
        }
    }
}
</script>

<style lang="less" scoped>
.subscribe-x{
    .s-top{
        width:100%;
        height: 200px;
        background:#414141;
        p{
            color:white;
            text-align:center;
            font-size:16px;
            padding-top:10px;
        }
        .van-search{
            background:rgba(255, 255, 255, 0);
            width:80%;
            margin:0 auto;
            margin-top:10px;
            .van-search__content{
                background:rgba(255, 255, 255, 0.8);
                border-radius:15px;
                .van-cell{
                    color:white;
                    .van-field__control{
                        color:white;
                    }
                }
            }
        }
        .slide{
            text-align:center;
            margin-top:15px;
            img{
                width:80%;
                height:150px;
                border-radius:20px;
            }
        }
    }
    .nav{
        width:100%;
        margin-top:70px;
        ul{
            width:70%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin:0 auto;
            font-size:30px;
            text-align:center;
            color:#FFDA00;
            p{
                color:black;
                font-size:14px;
            }
        }
    }
    .switch{
        width:100%;
        margin-top:15px;
        padding:0 20px;
        ul{
            width:40%;
            display:flex;
            li{
                font-size:16px;
                padding: 0 15px;
                display:flex;
                flex-direction:column;
                align-items:center;
                div{
                    width: 20px;
                    height: 3px;
                    background:red;
                    margin-top:6px;
                }
            }
        }
    }
}
</style>