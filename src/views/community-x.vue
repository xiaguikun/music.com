<template>
    <div class="community">
        <div class="top">
            <p>社区</p>
            <section>
                <nav>
                    <li v-for="(item,index) in navData" :key="index" @click="changeIndex(index)">
                        {{item}}
                        <p v-if="activeIndex==index"></p>
                    </li>
                </nav>
                <van-search v-model="value" placeholder="搜索" />
            </section>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navData:['广场','附近','好友','通知'],
            value:'',
            activeIndex:'0',
            activeUrl:['/community-one','/community-two','/community-three','/community-four']
        }
    },
    methods:{
        changeIndex(index){
            this.activeIndex=index;
            this.$router.push(this.activeUrl[index])
        }
    }
    
}
</script>

<style lang="less" scoped>
    .community{
        .top{
            p{
                width:100%;
                height: 50px;
                background:#FD6B95;
                text-align:center;
                color:white;
                font-size:16px;
                line-height:50px;
            }
            section{
                width:100%;
                height: 100px;
                background:#FDCC6E;
                nav{
                    width:60%;
                    margin:0 auto;
                    display:flex;
                    justify-content:space-between;
                    li{
                        font-size:16px;
                        float:left;
                        color:white;
                        height: 20px;
                        margin-top:20px;
                    }
                    p{
                        width: 30px;
                        height: 3px;
                        background:red;
                        margin-top:5px;
                        border-radius:3px;
                    }
                }
                .van-search{
                    width:80%;
                    height: 40px;
                    margin:0 auto;
                    margin-top:10px;
                    background:rgba(255, 255, 255, 0);
                    .van-search__content{
                        border-radius:15px;
                    }
                }
            }
        }
    }
</style>