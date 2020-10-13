<template>
        <nav class="nav" :style="'background-color:'+indNavColor">
            <li v-for="(item,index) in navList" :key="index" @click="changeIndex(index)">
                <article>{{item}}</article>
                <p v-if="index==nowIndex"></p>
            </li>
            <li><img src="../images/icon/编组 9@3x.png" alt=""></li>
        </nav>
</template>

<script>
export default {
    data(){
        return {
            navList:['推荐',' VIP ','儿童','相声','音乐','英语'],
            nowIndex:0,
            routeUrl:['/index','/vip','/index','/vip','/index','/vip'],
            bacColor:['#76b6ee','#ffce70','#76b6ee','#ffce70','#76b6ee','#ffce70']
        }
    },
    methods:{
        changeIndex(index){
            sessionStorage.setItem('NowIndex',index)
            this.nowIndex=index;
            this.$router.push(this.routeUrl[index]);
            this.$store.commit('changeColor',this.bacColor[this.nowIndex])
        },
    },
    computed:{
        indNavColor(){
            return this.$store.state.indNavColor;
        }

    },
    mounted(){
        this.nowIndex=sessionStorage.getItem('NowIndex')? sessionStorage.getItem('NowIndex'):0;
        this.$store.commit('changeColor',this.bacColor[this.nowIndex])
    }
}
</script>

<style lang="less" scoped>
    .nav{
        padding:5px 0;
        font-size:16px;
        width:100%;
        height:30px;
        background:#76b6ee;
        color:white;
        position:fixed;
        top:0;
        left:0;
        text-align:center;
        z-index:2;
        li{           
            float:left;
            margin-left:22px;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items:center;
            p{
                width: 24px;
                height: 3px;
                background: red;
                margin-top:5px;
                border-radius:5px;
            }
            img{
                width:20px;
                height:20px;
            }
        }
    }
</style>