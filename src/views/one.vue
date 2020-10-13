<template>
    <div class="denglu-one">
        <img src="../images/icon/叉@3x.png" alt="" class="div-left" @click="toBack">
        <div class="div-right" @click="yanzhengNum">验证码登录</div>
        <img src="../images/icon/11.png" alt="" class="img-center">

        <van-form @submit="onSubmit" class="v-form">
            <div class="username-top">
                <van-field
                v-model="username"
                name="用户名"
                label=""
                placeholder="用户名/邮箱"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            </div>
            <div class="password-bot">
                <van-field
                v-model="password"
                type="password"
                name="密码"
                label=""
                placeholder="输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <button class="button">显示密码</button>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" @click.native="subData">
                登录
                </van-button>
            </div>
        </van-form>
        <p class="p-1"><span>忘记密码？</span><span>注册</span></p>
        <div class="footer-">
            <div class="footer-left"></div>
            <div class="footer-center">快速登录</div>
            <div class="footer-right"></div>
        </div>
        <ul>
            <li>
                <img src="../images/icon/编组 4@3x.png" alt="">
            </li>
            <li>
                <img src="../images/icon/编组 3@3x.png" alt="">
            </li>
            <li>
                <img src="../images/icon/编组 2@3x.png" alt="">
            </li>
            <li>
                <img src="../images/icon/编组@3x.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from 'vant';
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
    toBack(){
        sessionStorage.setItem('Init',true);
        Toast('未登录，即将返回首页');
        this.$router.push('/');
    },
    subData(){
        let obj;
        if(this.username=='admin'&&this.password=='123456'){
            sessionStorage.setItem('token','true');
            
            this.$router.push('/mine');
             obj={
                imgUrl:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4176367503,3353903800&fm=58&app=83&f=JPEG?w=250&h=250&s=2BA2E50740E3AAA431201DE30300E061',
                title:'刘德华'
            };
            this.$store.commit('starPerson',obj);
        }else if(this.username=='xgk'&&this.password=='123456'){
            sessionStorage.setItem('token','true')
            this.$router.push('/mine');
            obj={
                imgUrl:'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3827930600,2459007501&fm=58&app=83&f=JPEG?w=250&h=250&s=5BD4AB448E337694C10C4D920300509B',
                title:'胡歌'
            };
            this.$store.commit('starPerson',obj);
        }else if(this.username=='fkc'&&this.password=='123456'){
            sessionStorage.setItem('token','true')
            this.$router.push('/mine');
            obj={
                imgUrl:'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1988428529,1719851563&fm=58&app=83&f=JPEG?w=250&h=250&s=FBA11B6060A17EBCFE2859860100E0E3',
                title:'吴亦凡'
            };
            this.$store.commit('starPerson',obj);
        }else if(this.username=='yzy'&&this.password=='123456'){
            sessionStorage.setItem('token','true')
            this.$router.push('/mine');
            obj={
                imgUrl:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3438437392,1752928559&fm=58&app=83&f=JPEG?w=250&h=250&s=0830CD122D33F2942CC054FF03001060',
                title:'霍建华'
            };
            this.$store.commit('starPerson',obj);
        }else if(this.username=='gq'&&this.password=='123456'){
            sessionStorage.setItem('token','true')
            this.$router.push('/mine');
            obj={
                imgUrl:'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2640321980,302884856&fm=58&app=83&f=JPEG?w=250&h=250&s=09413B6EC05A05D44140209A0300C093',
                title:'邓伦'
            };
            this.$store.commit('starPerson',obj);
        }else if(this.username=='cpj'&&this.password=='123456'){
            sessionStorage.setItem('token','true')
            this.$router.push('/mine');
            obj={
                imgUrl:'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4233935594,2898253275&fm=58&app=83&f=JPEG?w=250&h=250&s=0642F90248B0D1ADC33885F1030080B0',
                title:'李肖逸'
            };
            this.$store.commit('starPerson',obj);
        }else{
            Toast('用户名或者密码错误')
        }
    },
    yanzhengNum(){
        this.$router.push('/two');
    }
  },
};
</script>
<style lang='less' scoped>
    .denglu-one{
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
        .p-1{
            width: 70%;
            font-size: 14px;
            margin: 0 auto;
            span:first-child{
                float: left;
                color: lightskyblue;
            }
            span:last-child{
                float: right;
            }
        }
        .footer-{
            width:80%;
            margin: 0 auto;
            margin-top: 100px;
            margin-bottom: 40px;
            overflow: hidden;
            display: flex;
            align-items: center;
            .footer-left{
                width: 37%;
                height: 0;
                border-bottom: 1px solid #999;
                float: left;
            }
            .footer-center{
                // width: 20%;
                padding: 0 10px;
                font-size: 14px;
                float: left;
                color: #aaa;
            }
            .footer-right{
                width: 37%;
                height: 0;
                border-bottom: 1px solid #999;
                float: left;
            }
        }
        ul{
            width: 80%;
            margin: 0 auto;
            li{
                width: 25%;
                float: left;
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-around;
                img{
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
</style>
