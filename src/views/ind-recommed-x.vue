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
        
    </div>
</template>

<script>
export default {
    
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
    }
</style>