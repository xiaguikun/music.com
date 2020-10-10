<template>
  <div class="mine-set">
    <van-nav-bar
        title="账号管理"
        :fixed="true"
        left-arrow
        :placeholder ="true"
        
      />
    <van-cell-group>
        <van-cell title="头像"  is-link center>
           <template #right-icon>
             <van-image
                round
                width="30px"
                height="30px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
           </template>
            <template #extra>
               <van-icon name="arrow" class="search-icon" center/>
            </template>
        </van-cell>
        
        <van-cell title="修改密码" is-link />
        <van-cell title="手机号码" is-link />
        <van-cell title="最近登录设备" is-link />
        <van-cell title="注销账户" is-link />
    </van-cell-group>



  </div>
</template>


<style lang="less" scoped>
  .mine-set{
    position:relative;
    .van-nav-bar{
       background:#fd6b95;
      .van-nav-bar__title, 
      .van-nav-bar__text, 
      .van-icon{
        color:#fff; 
      } 
    } 
    .van-cell-group{
      position:relative;
      .van-cell{
        color:#333333;
      }
      .van-image{
        vertical-align:center;  
        margin-right:10px;
      }   
    }
    .search-icon{
      font-size:16px;
      color:#969799;
      width:16px;
      height:24px;
      line-height:24px;
    }    
  }    
</style>