<template>
  <div class="mine-set">
    <van-nav-bar
        title="设置"
        :fixed="true"
        left-arrow
        right-text="退出应用"
        :placeholder ="true"
        
    />
    <van-cell-group>
      <van-cell title="账号管理" is-link />
      <van-cell title="隐私设置" is-link />
      <van-cell title="消息通知" is-link />

      <div class="heng"></div>
      <van-cell title="下载路径" is-link />
      <van-cell center title="允许非WIFI情况下下载">
        <template #right-icon>
          <van-switch v-model="checked1" size="24" />
        </template>
      </van-cell>
      <van-cell center title="2/3/4G网络流量提醒">
        <template #right-icon>
          <van-switch v-model="checked2" size="24" />
        </template>
      </van-cell>
      <div class="heng"></div>

      <van-cell title="音质设置" is-link />
      <van-cell title="锁屏显示" />
      <van-cell center title="被其它软件暂停后继续播放">
        <template #right-icon>
          <van-switch v-model="checked3" size="24" />
        </template>
      </van-cell>
      <van-cell center title="允许线控">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
      <div class="heng"></div>
      <van-cell title="清除缓存" is-link />
      <van-cell title="检查更新" is-link />
      <van-cell title="关于我们" is-link />
    </van-cell-group> 
    <van-button round type="info" color="#fd6b95">退出登录</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      checked1:false,
      checked2:false,
      checked3:false
    };
  }
};
</script>

<style lang="less" scoped>
  .mine-set{
    position:relative;
    .van-nav-bar{
      background-color:#fd6b95 !important;
      .van-nav-bar__title,.van-nav-bar__text,.van-icon{
        color:#fff; 
      }  
    }   
    .heng{
        border-top:1px solid #969799;
        width:92%;
        margin:0 auto;  
    }   
    .van-cell-group{
      .van-cell{
        color:#333333;
      }  
    }        
    .van-button{
      width:200px;
      left:50%;
      transform:translate(-50%);
      margin:30px 0 40px;
    }   
  }
</style>