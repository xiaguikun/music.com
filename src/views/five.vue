<template>
    <div class="five"> 
        <nav></nav>
        <van-nav-bar
        right-text="跳过"
        left-arrow
        @click-right="onClickRight"
        @click-left="onClickLeft"
        > 
            <template #left>
                <van-icon name="cross" size="18" />
            </template>
        </van-nav-bar>
        <div class="quan">
            <van-uploader v-model="fileList" multiple :max-count="1" :preview-full-image="false" :after-read="afterRead" />
            <img src="../images/icon/数码-相机@3x.png" alt="" class="img2" v-if="a!=1">
        </div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="昵称"
                label="昵称"
                placeholder=""
                :rules="[{ required: true, message: '请填写昵称' }]"
            />
            <van-field name="radio" label="性别">
                <template #input>
                    <van-radio-group v-model="radio" direction="horizontal">
                    <van-radio name="1">女</van-radio>
                    <van-radio name="2">男</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field
                readonly
                clickable
                name="calendar"
                :value="value"
                label="生日"
                placeholder="点击选择日期"
                @click="showCalendar = true"
                />
            <!-- <van-calendar v-model="showCalendar" @confirm="onConfirm" /> -->
            <van-datetime-picker v-model="showCalendar" type="date" title="选择出生日期" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" v-if="showCalendar"/>
            <van-field
            readonly
            clickable
            name="area"
            :value="valuer"
            label="地区选择"
            placeholder="点击选择省市区"
            @click="showArea = true"
            />
            <van-popup v-model="showArea" position="bottom" v-if="showArea" name="area">
            <van-area
                :area-list="areaList"
                @confirm="onConfirmm"
                @cancel="showArea = false"
                
            />
            </van-popup>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" class="button1" >
               立即进入
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import { Dialog,Toast} from 'vant';
export default {
    data(){
        return {
            a:[],
            valuer:'',
            fileList: [],
            username: '',
            password: '',
            radio: '1',
            value: '',
            showCalendar: false,
            minDate: new Date(1920, 0, 1),
            maxDate: new Date(2020, 10, 12),
            showArea: false,
            areaList: {
  province_list: {
    110000: '北京市',
    120000: '天津市',
    130000:'河南省'
  },
  city_list: {
    110100: '北京市',
    110200: '县',
    120100: '天津市',
    120200: '县',
    130100:'开封市',
    130200:'信阳市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    120101: '和平区',
    120102: '河东区',
    120103: '河西区',
    120104: '南开区',
    120105: '河北区',
    130101:'市',
    130102:'通许县',
    130103:'开封县',
    130104:'杞县',
    130105:'兰考县',
    130106:'尉氏县',
    130201:'市',
    130202:'浉河区',
    130203:'平桥区'
  }
}, 
            
        }
    },
     components: {
    [Dialog.Component.name]: Dialog.Component,
  },
    methods:{
        onClickRight() {
            Toast('已跳过');
            this.$router.push('/mine')
        },
        onClickLeft() {
            Dialog.confirm({
                message: '确定退出？',
                })
                .then(() => {
                    // on confirm
                    this.$router.go(-1)
                })
                .catch(() => {
                   
                });
        },
        afterRead() {
                this.a = 1
        },
         onSubmit(values) {
            console.log('submit', values);
            this.$store.commit('starPerson',{
                imgUrl:this.fileList[0].content,
                title:this.username
            });
            console.log(this.fileList[0]);
            Toast('修改成功');
            this.$router.push({path:'/mine'});

        },
        onConfirm(date) {
            this.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            this.showCalendar = false;
        },
        onConfirmm(values) {
        this.valuer = values
            .filter((item) => !!item)
            .map((item) => item.name)
            .join('/');
        this.showArea = false;
    },
        
    } 
}
</script>
<style lang="less" scoped>

</style>