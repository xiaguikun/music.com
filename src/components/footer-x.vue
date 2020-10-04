<template>
    <div class="footer">
        <img src="../images/icon/x3x.png" alt="">
        <van-tabbar v-model="active" :placeholder="true">
            <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="shop-collect-o">社区</van-tabbar-item>
            <van-tabbar-item>
                <!-- <template>
                    <img src="../images/icon/播放@3x.png" alt="" style="width:30px;height:30px;">
                </template> -->
                <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive" />
                    <!-- <img :src="url"  :title="props.active ? icon.active : icon.inactive"/> -->
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="label-o">订阅</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
     data() {
        return {
        active: 0,
        url:'../images/icon/播放@3x.png',
        icon: {
            active: '/images/icon/x3x.png',
            inactive: '/img/x3x.8abff6c1.png',
            //  active: 'https://img.yzcdn.cn/vant/user-active.png',
            // inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        },
        
        }
  },
}
</script>