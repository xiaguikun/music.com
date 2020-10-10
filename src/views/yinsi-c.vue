<template>
  <div class="mine-set">
    <van-nav-bar
        title="隐私设置"
        :fixed="true"
        left-arrow
        :placeholder ="true"
        @click-left="onClickLeft"
      />
    <van-cell-group>
      <van-cell title="加好友方式" is-link />
      <van-cell title="动态权限" is-link @click.native="toOne"/>
      <van-cell  title="允许陌生人赞我">
        <template #right-icon>
          <van-switch v-model="checked1" size="24" />
        </template>
      </van-cell>
      <van-cell  title="允许陌生人评论我">
        <template #right-icon>
          <van-switch v-model="checked2" size="24" />
        </template>
      </van-cell>
      <van-cell  title="允许陌生人查看我资料">
        <template #right-icon>
          <van-switch v-model="checked3" size="24" />
        </template>
      </van-cell>
      <van-cell  title="允许通讯录同步">
        <template #right-icon>
          <van-switch v-model="checked4" size="24" />
        </template>
      </van-cell>
      <van-cell  title="允许个性签名同步到动态">
        <template #right-icon>
          <van-switch v-model="checked5" size="24" />
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
      checked5: false

    };
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    },
    toOne(){
      this.$router.push('/dongtai')
    }
  }
};
</script>
<style lang="less">

</style>
