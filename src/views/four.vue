<template>
    <div class="denglu-four">
        <img src="../images/icon/叉@3x.png" alt="" class="div-left">
        <div class="div-right">验证码登录</div>
        <img src="../images/icon/11.png" alt="" class="img-center">

        <van-form @submit="onSubmit" class="v-form">
            <div class="username-top">
                <van-field
                v-model="username"
                name="用户名"
                label=""
                placeholder="输入手机号/邮箱"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            </div>
            <div class="password-bot">
                <van-field
                v-model="password"
                type="password"
                name="密码"
                label=""
                placeholder="输入验证码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <button class="button">发送验证</button>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
   data() {
    return {
         username: '',
         password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
<style lang='less' scoped>
    .denglu-four{
        .div-left{
            float: left;
            width: 20px;
            height: 20px;
            margin-top: 15px;
            margin-left: 15px;
        }
        .div-right{
            float: right;
            font-size: 14px;
            margin-top: 15px;
            margin-right: 15px;
            font-family: Arial, Helvetica, sans-serif;
        }
        .img-center{
            margin:80px 35%;
            margin-bottom: 40px;
            width: 30%;
            height: 104px;
        }
        .van-cell{
            width: 70%;
            margin: 0 auto;
            padding-bottom: 10px;
            border-bottom: 2px solid #999;
        }
        .van-field__control{
            font-size: 16px;
        }
        .password-bot{
            .van-cell{
                padding-top:30px;
            }
        }
        .button{
            width: 80px;
            height: 30px;
            background-color: #fd6b95;
            border-radius: 20px;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            color: #fff;
            position: relative;
            top: -57px;
            left: 60%;
        }
        .van-button{
            background-color: #fd6b95;
            border: 0;
            width: 80%;
            margin: 0 auto;
            border-radius: 10px;
            font-size: 18px;
        }
       
    }
</style>
