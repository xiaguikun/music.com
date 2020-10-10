<template>
  <div class="mine-set">
    <van-nav-bar
        title="音质设置"
        :fixed="true"
        left-arrow
        :placeholder="true"
        @click-left="onClickLeft"
      />
      <van-cell-group>
        <van-cell title="在线音质" />
        <div class="heng"></div>
        <van-cell center title="智能选择" label="WIFI下声音品质更高，移动流量下更省流量" >
          <template #right-icon>
            <van-switch v-model="checked1" size="24" />
          </template>
        </van-cell>
        <van-cell center title="标准音质" label="加载速度更快" >
          <template #right-icon>
            <van-switch v-model="checked2" size="24" />
          </template>
        </van-cell>
        <van-cell center title="高清音质" label="声音品质更高" >
          <template #right-icon>
            <van-switch v-model="checked3" size="24" />
          </template>
        </van-cell>
        <van-cell title="个人动态" />
        <div class="heng"></div>
        <van-cell center title="智能选择" label="WIFI下声音品质更高，移动流量下更省流量" >
          <template #right-icon>
            <van-switch v-model="checked4" size="24" />
          </template>
        </van-cell>
        <van-cell center title="标准音质" label="加载速度更快" >
          <template #right-icon>
            <van-switch v-model="checked5" size="24" />
          </template>
        </van-cell>
        <van-cell center title="高清音质" label="声音品质更高" >
          <template #right-icon>
            <van-switch v-model="checked6" size="24" />
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
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: true
  }
},
 methods:{
        onClickLeft(){
            this.$router.go(-1);
        }
    }
}
</script>


<style lang="less">
  .mine-set{
    position:relative;
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
  }
</style>