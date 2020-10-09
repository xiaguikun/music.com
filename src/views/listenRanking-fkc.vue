<template>
  <div class="listenRanking-fkc">
      <header>
          <van-nav-bar
            title="收听排行"
            left-arrow
            @click-left="onClickLeft"
            class="van-nav-bar"
            />
            <van-search  placeholder="搜索" />
            <span class="tubiao">
            <img src="../images/icon/历史时间-3@3x.png" alt="" class="time">
            <img src="../images/icon/plus-circle@3x.png" alt="" class="jiahao">
            </span>
            <van-swipe :autoplay="3000" >
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
            </van-swipe>
            <main>
                <p class="pp">最新表单</p>
                <nav>
                    <li v-for="(item,index) in list" :key="index">
                        <div class="pp-left">
                            <p class="pp-pp">{{list[index].title}}</p>
                            <p class="pp-bb">1.{{list[index].p1}}</p>
                            <p class="pp-bb">2.{{list[index].p2}}</p>
                            <p class="pp-bb">3.{{list[index].p3}}</p>
                        </div>
                        <div class="pp-right">
                            <img :src="list[index].imgUrl" alt="">
                        </div>
                    </li>
                </nav>
            </main>
      </header>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
    return {
        images: [
        'http://p1.music.126.net/ZqHgG0cbkXo62zQSLcdf8A==/109951165373705503.jpg?imageView&quality=89',
        'http://p1.music.126.net/B7IkJM2Tzp21hhNEXqDF6w==/109951165372875584.jpg?imageView&quality=89',
        'http://p1.music.126.net/Fy_Pf8h5UFz1MrphI8II6g==/109951165373337376.jpg?imageView&quality=89',
        'http://p1.music.126.net/8c8Q3nOqaJ_3dv_W-yhJOg==/109951165373354864.jpg?imageView&quality=89',
        'http://p1.music.126.net/jF8MXq__NZWeCQFBI-AqMA==/109951165373353453.jpg?imageView&quality=89',
        'http://p1.music.126.net/E-3jdPRSabGx4unvOllWLw==/109951165373358357.jpg?imageView&quality=89',
        'http://p1.music.126.net/ddHqgKbg4DBqF-WS6MzHOw==/109951165373371024.jpg?imageView&quality=89',
        'http://p1.music.126.net/f40Mh4sX7UKH73mDE_CD0A==/109951165373364734.jpg?imageView&quality=89',
        'http://p1.music.126.net/QSeeUHeOLbmti5WiDhFqWw==/109951165373390740.jpg?imageView&quality=89',
      ],
      list:[
          {title:'本周播放最多',
          p1:'婚姻是个水晶塔',
          p2:'商业机密',
          p3:'爱情准则',
          imgUrl:'https://tse3-mm.cn.bing.net/th/id/OIP.RzZvh0DGxU3eFWgJ_NLdewHaFj?w=238&h=180&c=7&o=5&pid=1.7'},
          {title:'人气榜单',
          p1:'努力小愤青',
          p2:'爱情什么样',
          p3:'枕边故事',
          imgUrl:'https://tse3-mm.cn.bing.net/th/id/OIP.VpI2H-cUlt9mMOVzNTkS9QHaHa?w=182&h=182&c=7&o=5&pid=1.7'},
          {title:'商业分析',
          p1:'商业机密',
          p2:'职场精英',
          p3:'学无止境',
          imgUrl:'https://tse3-mm.cn.bing.net/th/id/OIP.w4FczBZje-Uqvy1E3jXVaAHaF7?w=206&h=180&c=7&o=5&pid=1.7'},
          {title:'情感交流',
          p1:'恋爱课堂',
          p2:'第三人格',
          p3:'其实你可以',
          imgUrl:'https://tse1-mm.cn.bing.net/th/id/OIP.0vSjCM-g-Kqp-tHtHtQgLQAAAA?w=180&h=180&c=7&o=5&pid=1.7'},
          {title:'光速助眠',
          p1:'大自然的声音',
          p2:'芬达泡泡的钢琴曲',
          p3:'嘘！你听',
          imgUrl:'https://tse4-mm.cn.bing.net/th/id/OIP.AW9BCvZngnxTqyMV9YxKLQHaHZ?w=179&h=180&c=7&o=5&pid=1.7'},
          {title:'音乐分享',
          p1:'音乐鬼才的诞生',
          p2:'音乐与你',
          p3:'音乐狂欢',
          imgUrl:'https://tse1-mm.cn.bing.net/th/id/OIP.zUwT2pGR-Xph5Snx13zJggHaHa?w=178&h=180&c=7&o=5&pid=1.7'},
      ]
    }},
    methods:  {
         onClickLeft() {
             this.$router.go(-1);
         Toast('返回');
        },
     }
};
</script>
<style lang='less' scoped>
.listenRanking-fkc{
    header{
        width: 100%;
        height: 160px;
        background-color: #ef8782;
        border-bottom: 0;
       
        .van-nav-bar{
            background-color: #ef8782;
        }
        .van-search{
            width: 220px;
            height: 30px;
            background-color: #ef8782;
            float: left;
            .van-cell{
                padding: 0;
                margin: 0;
                .van-icon{
                    color: white;
                }
            }
            .van-search__content{
                height: 25px;
                // line-height: 25px;
                border-radius:10px;
            }
        }
         .tubiao{
             float: right;
             line-height: 50px;
             height: 50px;
             margin: 0;
             padding: 0;
            .time,.jiahao{
                width: 40px;
                height: 40px;
                transform: scale(.5);
                float: left;
            }
        }
        .van-swipe{
            position: relative;
            left:7.5vw;
            top:0px;
            width: 85vw;
            height: 160px;
            border-radius: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        main{
            width: 100%;
            height: 100%;
            float: left;
            padding: 10px 20px;
            
            .pp{
                font-size: 18px;
                margin:30px 0;
                font-weight: 400;
            }
            nav{
                margin-bottom:50px;
                li{
                    border-radius: 20px;
                    height:134px ;
                    // padding-left: 60px;
                    background-color: #ccc;
                    margin-bottom: 20px;
                   .pp-left{
                       padding-left: 30px;
                       float: left;
                       width: 60%;
                        .pp-pp{
                        margin:10px 0;
                        font-size: 20px;
                        font-weight: 400;
                    }
                        .pp-bb{
                        margin:5px 0;
                        font-size: 16px;
                        color:#999
                    }
                   }
                   .pp-right{
                       
                       float: right;
                       height:134px;
                       width: 40%;
                       img{
                           border-radius: 20px;
                           width: 100%;
                           height: 100%;
                       }
                   }
                }
            }
        }
    }
}
</style>
