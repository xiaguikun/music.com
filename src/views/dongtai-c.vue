<template>
  <div class="mine-set">
    <van-nav-bar
        title="动态权限"
        :fixed="true"
        left-arrow
        :placeholder ="true"
        
      />
      <van-cell-group>
        <van-cell title="好友动态" />
        <div class="heng"></div>
        <van-cell title="我不看谁" is-link />
        <van-cell title="我只看谁" is-link />

        <van-cell title="个人动态" />
        <div class="heng"></div>
        <van-cell title="谁不能看我" is-link />
        <van-cell title="只有谁能看我" is-link />
        
      </van-cell-group> 
 </div>
</template>

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
        }
    }
  }  
</style>