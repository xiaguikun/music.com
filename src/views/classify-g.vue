<template>
    <div class="classify">
        <div class="class">
            <div class="back" @click="goback">&lt;</div>
            <span class="c">分类</span>
        </div>

        <div class="search">
            <div class="sear">
                <img src="../images/icon/搜索@3x.png" alt="" class="s">
                <input type="text" class="in" value="搜索">
            </div>
            <div class="im">
                 <img src="../images/icon/历史时间-6@3x.png" alt="" class="i1">
                <img src="../images/icon/plus-circle@3x.png" alt="" class="i2">
               
            </div>
        </div>


<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in classifyData" :key="index" >
                <img :src="item.url" alt="" class="im1">
            </van-swipe-item>
            
</van-swipe>

<div class="content">
    <van-sidebar v-model="activeKey" @change="change">
        <van-sidebar-item :title="item" v-for="(item, index) in list" :key="index"/>
    </van-sidebar>
<ul class="main-content">
    <li v-for="(item,index) in sideBarData" :key="index" class="list">
       <p class="min" >
           <img src="../images/icon/路径3@3x.png"  v-if="index==0" class="img1">
           <img src="../images/icon/路径备份@3x.png"  v-if="index==1" class="img1">
           <img src="../images/icon/路径备份 4@3x.png"  v-if="index==2" class="img1">
           <span v-if="index==0" class="count">{{index+1}}</span>
           <span v-if="index==1" class="count">{{index+1}}</span>
           <span v-if="index==2" class="count">{{index+1}}</span>
       </p>
       <div class="con">
           <img :src="item.imgUrl" alt="" class="img2">
            <div class="text">
                <p class="ti">{{item.title}}</p>
                <p class="te">{{item.text}}</p>
                <div class="hot">
                    <img src="../images/icon/形状备份 17@3x.png" alt="" class="imi">
                    <span class="s">{{item.num}}</span>
                    <img src="../images/icon/形状备份 -2@3x.png" alt="" class="imi">
                    <span class="s">{{item.coll}}</span>
                </div>
            </div>
       </div>
    </li>
</ul>
</div>
    </div>
</template>
<script>

import {mapState}  from 'vuex';
export default {
    data(){
        return {
          activeKey: sessionStorage.getItem('activeKey') || 0,
          type: sessionStorage.getItem('type') || '1',
        // type:'1',
        //   activeKey: 0,
          list: ['热门', 'VIP', '儿童','音乐','英语','商业','娱乐','人文','感情','历史','其他']
        }
    },
    computed:{
        ...mapState([
            'classifyData',
            'sideBarData'
        ])
    },
    methods:{
         change(index) {
            //  console.log(index);
      this.type = index + 1 + '';
      sessionStorage.setItem('activeKey', this.activeKey);
      sessionStorage.setItem('type', this.type);
      this.$store.dispatch('getClassifyDa', {
        type: this.type
      });
    //   console.log(this.type);
    },
        goback(){
            this.$router.go(-1);
        },
        // getData(){
        //     this.$store.dispatch('getClassifyDa',{
        //         type:this.type
        //     });
        // },
        // ...mapActions([
        //     'getClassifyDa'
        // ]),
      
    },
    mounted(){
        // this.getData();

        this.$store.dispatch('getClassifyDa', {
      type: this.type
    })
    console.log(this.type);
    }
}
</script>

<style lang="less" scoped>
.classify{
    
   .content{
       margin-top:90px;
       display:flex;
       .main-content{
        //    background:red;
           flex: 1;
           display :flex;
           flex-wrap: wrap;
           .list{
               width:100%;
               height:160px;
               margin-bottom:20px;
            //    background:blue;
               display:flex;
               margin-right:10px;   
               justify-content: flex-end;
               .min{
                   margin-top:30px;
                   margin-right:5px;
                   position: relative;
                   .img1{
                       width:30px;
                       height:30px;
                   }
                   .count{
                       position: absolute;
                       top:10px;
                       left:10px;
                       font-size:16px;
                       color:white;

                   }
               }
               .con{
                   display:flex;
                   align-items:center;
                   justify-content: flex-end;
                   border-bottom:1px solid #e4e4e4;
                   border-radius:20px;
                   .img2{
                   width:100px;
                   height:100px;
                   border-radius:20px;
               }
               .text{
                   margin-left:4px;
                   width:120px;
                   .hot{
                       display:flex;
                       margin-top:10px;
                       width:100%;
                       justify-content: space-between;
                       align-items:center;
                        .imi{
                            width:12px;
                            height:12px;
                        }
                        .s{
                            font-size:12px;
                        }
                   }
                   .ti{
                       font-size:16px;
                       color:black;
                   }
                   .te{
                       color:#919191;
                       font-size:14px;
                   }
               }
               }

           }
       }
        .van-sidebar{
        
        .van-sidebar-item{
            margin-bottom:2px;
        }
        .van-sidebar-item--select::before{
       background-color:transparent;
   } 
    }
   }
   .van-swipe{
       position: absolute;
       top:90px;
       margin-left:40px;
       border-radius:30px;
       width:84%;
   }

.im1{
    width:100%;
    height:200px;
}
    .search{
        padding-bottom:150px;
         background:#8097bc;
         display:flex;
         align-items:center;
         height:60px;
         justify-content: space-around;
         .im{
             display:flex;
             align-items:center;
            .i1{
                width:20px;
                height:20px;
                margin-right:20px;
            }
            .i2{
                width:20px;
                height:20px;
            }
         }
         .sear{
        margin-top:10px;
        display:flex;
         align-items:center;
         justify-content: flex-start;
         width:200px;
         height:30px;;
         background:#c2cddf;
         border-radius:16px;
         .s{
             width:14px;
             height:14px;
             margin-left:5px;
         }
         .in{
        border:0;
         background:#c2cddf;
         margin-left:10px;
         }


         }

    }
    display:flex;
    flex-direction: column;
    width:100%;
    .class{
        padding-bottom:16px;
        display:flex;
        align-items:center;
        height:50px;
        background:#8097bc;
        .back{
             font-size:26px;
             color:white;
        }
        .c{
            font-size:16px;
            color:white;
            margin-left:160px;
        }

    }

}
</style>