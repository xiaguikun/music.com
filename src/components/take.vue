<template>
    <div class="take-x">
        <van-collapse v-model="activeNames">
            <van-collapse-item v-for="(item,index) in takeData" :key="index" :name="index+1" @click.native="handerClick(index+1)" >
                <template #title>
                    <div class="icon-img">
                        <img src="../images/icon/下拉备份 6@3x.png" alt="" v-if="!(isIcon==index+1)">
                        <img src="../images/icon/下拉备份3@3x.png" alt=""  v-if="isIcon==index+1">
                        {{item.id}} 
                    </div>
                </template>
                <div class="sec">
                    <section v-for="(ite,ind) in item.list" :key="ind">
                        <img :src="ite.imgUrl" alt="">
                        <p>{{ite.title}}</p>
                    </section>
                </div>
                
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
    data(){
        return {
             activeNames: ['1'],
             isIcon:0,
             flag:0
        }
    },
    methods:{
        handerClick(index){
            console.log(this.isIcon);
            if(this.flag==index){
                this.isIcon=(parseInt(this.isIcon))*(-1);
            }
            if(this.flag!=index){
                this.isIcon=index;                
            }
            this.flag=index;
        },
        getTakeData(){
            this.$store.dispatch('getSubscribe');
        }
    },
    computed:{
        takeData(){
            return this.$store.state.subscribeData.take;
        }
    },
    mounted(){
        this.getTakeData();
    }
}
</script>

<style lang="less" scoped>
    .take-x{
        .icon-img{
            img{
                width: 10px;
                height: 10px;
            }
           
        }
        .sec{
                width:100%;
                display:flex;
                flex-wrap:wrap;
                justify-content: space-around;
                section{
                    width:28%;
                    display: flex;
                    flex-direction:column;
                    align-items:center;
                    // flex-wrap:wrap;
                    flex-shrink:0;
                    img{
                        width:100%;
                    }
                }
            }
    }
</style>