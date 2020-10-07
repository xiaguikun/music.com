<template>
<div class="ind-recom-x">
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
            <van-swipe class="my-swipe" :autoplay="3000">
                 <van-swipe-item v-for="(image, index) in imagesUrl" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
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
        <div class="change-one">
            <p>
                <img src="../images/icon/刷新@3x.png" alt="">
                <span>换一批</span>
            </p>
        </div> 
        <div class="banner2">
            <img src="../images/images/banner2.png" alt="">
        </div>
        <div class="p1">
            <p>你了解你的星座吗</p>
        </div>
        <div class="p1-ul">
            <ul>
                <li v-for="(item,index) in starData" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
        <div class="p2">
            <p>深夜故事</p>
        </div>
        <div class="p2-ul">
            <ul>
                <li v-for="(item,index) in storyData" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll';

export default {
    data(){
        return {
            imagesUrl:[
                'https://y.gtimg.cn/music/common/upload/category_area/3063279.jpg?max_age=2592000',
                'https://y.gtimg.cn/music/common/upload/category_area/3074373.jpg?max_age=2592000',
                'https://y.gtimg.cn/music/common/upload/category_area/2862389.jpg?max_age=2592000'
            ]
        }
    },
    methods:{
        getIndLikeData(){
            this.$store.dispatch('getIndLike')
        },
        async addBetterScroll(){
            await this.$nextTick();
            new BetterScroll('.ind-recom-x',{
                scrollY:true,
                scrollX:false,
                click:true
            })
            new BetterScroll('.p1-ul',{
                scrollY:true,
                scrollX:false,
                click:true
            })
        }
    },
    mounted(){
        this.getIndLikeData();
        this.addBetterScroll();
    },
    computed:{
        likeData(){
            return this.$store.state.likeData.like;
        },
        starData(){
            return this.$store.state.likeData.star;
        },
        storyData(){
            return this.$store.state.likeData.story;
        }
    }
}
</script>

<style lang="less" scoped>
.ind-recom-x{
    position:absolute;
    top:0;
    bottom:30px;
    left:0;
    right:0;
     .recommed-x{
        //  overflow: hidden;
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
                border-radius:25px;
            }
            .my-swipe{
                border-radius:25px;
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
                overflow: hidden;
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
        .change-one{
            width:100%;
            height: 30px;
            margin-top:15px;
            p{
                width: 80px;
                height: 30px;
                font-size:14px;
                margin:0 auto;
                img{
                    width: 18px;
                    height: 18px;
                    vertical-align:middle;
                    margin-right:10px;
                }
            }
        }
        .banner2{
            width:90%;
            margin:0 auto;
            border-radius:15px;
            img{
                width:100%;
                height:100%;
                border-radius:15px;
            }
        }
        .p1,.p2{
            width:100%;
            height:50px;
            font-size:18px;
            p{
                padding:15px;
            }
        }
        .p1-ul,.p2-ul{
            width:100%;
            height:150px;
            margin-top:5px;
            ul{
                width:100%;
                height:100%;
                display:flex;
                flex-shrink:0;
                // overflow:auto;
                overflow: hidden;
                li{
                    font-size:14px;
                    margin-left:15px;
                    p{
                        margin-top:10px;
                    }
                    img{
                        height: 100px;
                    }
                }
            }
        }
    }
}
   
</style>