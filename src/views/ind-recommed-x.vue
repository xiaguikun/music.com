<template>
    <div class="recommed-x">
        <div class="top">
           <div class="search">
                <van-search placeholder="请输入搜索关键词" />
                <div class="search-right">
                    <img src="../images/icon/历史时间-3@3x.png" alt="">
                    <img src="../images/icon/plus-circle@3x.png" alt="">
                </div>
           </div>
        </div>
        <div class="banner">
               <img src="../images/images/banner1.png" alt="">
        </div>
        <ul class="four">
            <li>
                <van-icon name="send-gift-o"/>
                <p>每日推荐</p>
            </li>
            <li>
                <van-icon name="bar-chart-o"/>
                <p>收听排行</p>
            </li>
            <li>
                <van-icon name="music-o"/>
                <p>助眠解压</p>
            </li>
            <li>
                <van-icon name="qr"/>
                <p>经典必听</p>
            </li>
        </ul> 
        <div class="like">
            <div class="like-top">
                <section>
                    <van-icon name="like-o" />
                    <span>猜你喜欢</span>
                </section>  
                <section>
                    <span>更多</span>
                    <van-icon name="arrow" />
                </section>  
            </div>
            <ul class="like-bottom">
                <li v-for="(item,index) in likeData" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>       
    </div>
</template>

<script>
export default {
    methods:{
        getIndLikeData(){
            this.$store.dispatch('getIndLike')
        }
    },
    mounted(){
        this.getIndLikeData();
    },
    computed:{
        likeData(){
            return this.$store.state.likeData
        }
    }
}
</script>

<style lang="less" scoped>
    .recommed-x{
        .top{
            width:100%;
            height: 200px;
            background:#76b6ee;
            overflow: hidden;
            .search{
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
                .search-right{
                    img{
                        width: 30px;
                        height: 30px;
                        margin-right:25px;
                        vertical-align: middle;
                    }
                }
            }
        }
        .banner{
            width:90%;
            height: 200px;
            margin:0 auto;
            margin-top:-80px;
            img{
                width:100%;
                height:100%;
            }
        }
        .four{
            margin-top:25px;
            width:100%;
            height:25px;
            display:flex;
            justify-content:space-evenly;
            font-size:14px;
            li{
                display: flex;
                flex-direction:column;
                align-items:center;
                i{
                    font-size:25px;
                    color:yellowgreen;
                }
                p{
                    margin-top:10px;
                }
            }
        }
        .like{
            width:100%;
            height:25px;
            margin-top:55px;
            padding:0 15px;
            .like-top{
                font-size:16px;
                display:flex;
                justify-content:space-between;
                section:first-child{
                    i{
                        color:#FD6B95;
                    }
                    span{
                        padding-left:10px;
                    }
                }
                section:last-child{
                    font-size:14px;
                    span{
                        padding-right:5px;
                    }
                }
            }
            .like-bottom{
                font-size:14px;
                margin-top:15px;
                li{
                    float:left;
                    width:29%;
                    margin:0 2%;
                    margin-top:15px;
                    img{
                        width:100%;
                    }
                    p{
                        margin-top:10px;
                    }
                }
            }
           
        }
    }
</style>