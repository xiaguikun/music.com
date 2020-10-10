<template>
  <div class="mine-set">
    <van-nav-bar
        title="消息通知"
        :fixed="true"
        left-arrow
        :placeholder ="true"
        
    />
    <van-cell-group>
      <van-cell center title="允许通知">
        <template #right-icon>
          <van-switch v-model="checked1" size="24" />
        </template>
      </van-cell>
      <div class="heng"></div>
      <van-cell center title="专属推荐">
        <template #right-icon>
          <van-switch v-model="checked2" size="24" />
        </template>
      </van-cell>
      <van-cell center title="订阅更新">
        <template #right-icon>
          <van-switch v-model="checked3" size="24" />
        </template>
      </van-cell>
      <van-cell center title="活动通知">
        <template #right-icon>
          <van-switch v-model="checked4" size="24" />
        </template>
      </van-cell>
      <van-cell center title="获赞通知">
        <template #right-icon>
          <van-switch v-model="checked5" size="24" />
        </template>
      </van-cell>
      <van-cell center title="评论/评论回复通知">
        <template #right-icon>
          <van-switch v-model="checked6" size="24" />
        </template>
      </van-cell>
      <van-cell center title="好友消息通知">
        <template #right-icon>
          <van-switch v-model="checked7" size="24" />
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="custom-title">夜间勿扰模式</span>
            <span class="custom-time">(00:00-07:00)</span>
        </template>
        <template #right-icon>
          <van-switch v-model="checked8" size="24" />
        </template>
      </van-cell>
    </van-cell-group> 
 </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      checked7: true,
      checked8: true,
    };
  },
};
</script>
<style lang="less">
  .mine-set{
    position:relative;
    .van-nav-bar{
      background:#fd6b95;
      .van-nav-bar__title,.van-icon-arrow-left{
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
        .custom-time{
          color:#868686;
          margin-left:20px;
          font-size:12px;
          }
      }
    }
  }   
</style>