<template>
    <div class="about-me">
        <div class="top">
            <van-nav-bar
            title="关于我们"
            left-arrow
            @click-left="onClickLeft"
            :placeholder="true"
            />
        </div>
        <div class="my-map">
            <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map">
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" ></bm-navigation>
                <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
            </baidu-map>             
        </div>
        <div class="introduce">
              <van-collapse v-model="activeNames" :accordion="true">
                    <van-collapse-item v-for="(item,index) in myMapData" :key="index" :name="index+1" @click.native="handerClick(index+1)" >
                        <template #title>
                            <div class="icon-img">
                                <img src="../images/icon/下拉备份 6@3x.png" alt="" v-if="!(isIcon==index+1)">
                                <img src="../images/icon/下拉备份3@3x.png" alt=""  v-if="isIcon==index+1">
                                {{item.id}} 
                            </div>
                        </template>  
                        <div class="p">
                                {{item.title}}
                        </div>              
                    </van-collapse-item>
                </van-collapse>
        </div>
    </div>
</template>
<script >
export default {
    data(){
        return {
            center: {lng: 0, lat: 0},
            zoom: 3,
            activeNames: ['1'],
            isIcon:0,
            flag:0
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        },
        handler ({BMap, map}) {
            console.log(BMap, map)
            this.center.lng = 120.272324
            this.center.lat = 30.310801
            this.zoom = 15
        },
        getdituData(){
            this.$store.dispatch('getdituData');
        },
        handerClick(index){
            console.log(this.isIcon);
            if(this.flag==index){
                this.isIcon=(parseInt(this.isIcon))*(-1);
            }
            if(this.flag!=index){
                this.isIcon=index;                
            }
            this.flag=index;
        }
    },
    mounted(){
        // var map = new BMapGL.Map('container'); // 创建Map实例
        // map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12); // 初始化地图,设置中心点坐标和地图级别
        // map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
        this.getdituData();
    },
    computed:{
        myMapData(){
            return this.$store.state.myMapData;
        }
    }
}
</script>

<style lang="less" scoped>
    .about-me{
        .top{
            width:100%;
            position:fixed;
            top:0;
            left:0;
            .van-nav-bar{
                background: #FD6B95;
            }
        }
        .my-map{
            width:90%;
            height: 200px;
            margin:65px auto 20px;
            border-radius:15px;
            background:white;
            .map{
                margin:auto;
                border-radius:15px;
                width:100%;
                height:100%;
            }
        }
        .introduce{
            .icon-img{
            img{
                width: 10px;
                height: 10px;
            }
           
        }
        }
    }
</style>