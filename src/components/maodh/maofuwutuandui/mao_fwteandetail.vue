<template>
    <div class="mao_fwteamdetailye">
        <mt-header fixed title="成员详情">
		  <router-link to="/home/fwtdtema" slot="left">
		    <mt-button icon="back" @click.native="mao_fhfwteam"></mt-button>
		  </router-link>
		</mt-header>
        <div class="mao_doctorteam">
            <div>
                <img :src="mao_titletouxiang" alt="">
            </div>
            <div>
                <p><span>{{mao_fwteamdetailyem.name}}</span><span class="maoshuyusmsq">{{mao_fwteamdetailyem.teamName}}</span></p>
                <p class="maoqkys">全科医生</p>
                <p>万科五园社康中心</p>
            </div>
        </div>
        <div class="mao_yishengtit" @click="mao_showy">
            <div class="mao_ysjgxs"><img src="../../../assets/img/mao_yisheng.png" alt=""></div>
            <p>医生简介</p>
            <span><img src="../../../assets/img/mao_zhankai.png" alt=""></span>
        </div>
        <div class="mao_yissm"  v-show="jjshow">
            <p>{{mao_fwteamdetailyem.introduce}}</p>
        </div>
        <div class="mao_yishengtit" @click="mao_showzl">
            <div class="mao_ysjgxs"><img src="../../../assets/img/mao_biao.png" alt=""></div>
            <p>资历证书</p>
            <span><img src="../../../assets/img/mao_zhankai.png" alt="" ></span>
        </div>
        <div class="mao_yissm" v-show="zlshow">
            <p><img class="preview-img" :src="item" v-for="(item,index) in mao_zlzsys" height="100" width="100" @click="$preview.open(index, item)"></p>
        </div>
    </div>
</template>

<script>
var mao_imgUrl1=require("../../../assets/img/jia_wo_avatar.png")
import { commonAjax,imgUrl } from "../../../api/api.js";
import { Navbar,TabItem,Header,Button,Cell,Field,DatetimePicker,MessageBox } from 'mint-ui';
    export default {
        data:function(){
            return{
                mao_fwteamdetailyem:"",
                mao_imgUrl:mao_imgUrl1,
                mao_titletouxiang:"",
                mao_zlzsys:[],
                jjshow:false,
                zlshow:false
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
        },
        methods:{
            mao_fhfwteam(){
                this.$router.go(-1)
            },
            mao_showy(){
                if(this.jjshow){
                    this.jjshow=false;
                }else{
                     this.jjshow=true;
                }
            },
            mao_showzl(){
                if(this.zlshow){
                    this.zlshow=false;
                }else{
                     this.zlshow=true;
                }
            }
        },
        mounted:function(){
          this.mao_fwteamdetailyem = JSON.parse(sessionStorage.getItem('maofwteamdetail'))
            console.log(this.mao_fwteamdetailyem)
            if(this.mao_fwteamdetailyem.avatarFileId!=0){
                this.mao_titletouxiang=imgUrl(this.mao_fwteamdetailyem.avatarFileId)
            }else{
                this.mao_titletouxiang=(this.mao_imgUrl)
            }
            this.mao_zlzsys.push(imgUrl(this.mao_fwteamdetailyem.certificateHead))
            this.mao_zlzsys.push(imgUrl(this.mao_fwteamdetailyem.certificateBack))
            console.log(this.mao_zlzsys)        
        }
    }
</script>

<style scoped>
    .mao_fwteamdetailye{}
    .mao_fwteamdetailye .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
    .mao_fwteamdetailye .mint-button{height: 1rem;}
    .mao_fwteamdetailye .mao_doctorteam{border-bottom:.2rem solid #ccc;width:100%;height:2rem;padding-top:1rem;}
    .mao_fwteamdetailye .mao_doctorteam div{float:left;color:#ccc;margin-top:.1rem;}
    .mao_fwteamdetailye .mao_doctorteam div img{ vertical-align:middle;margin-left:.4rem;width:1.5rem;height:1.5rem;border-radius:1.5rem;margin-top:.2rem;}
    .mao_fwteamdetailye .mao_doctorteam p{font-size:.33rem;margin-top:.2rem;}
    .mao_fwteamdetailye .mao_doctorteam p span{margin-right:.2rem;}
    .mao_fwteamdetailye .mao_doctorteam .maoshuyusmsq{margin-left:.6rem;border:1px solid #26a2ff;border-radius:5px;padding:0 .4rem;font-size:.23rem;color:#26a2ff}
    .mao_fwteamdetailye .mao_doctorteam .maoqkys{font-size:.27rem;}
    .mao_fwteamdetailye .mao_yishengtit{clear:both;height:1rem;line-height:1rem;margin-top:.2rem;margin-left:.2rem;border-bottom:1px solid #ccc;padding-bottom:.2rem;}
    .mao_fwteamdetailye .mao_yishengtit .mao_ysjgxs{float:left;width:1rem ;height:1rem;}
    .mao_fwteamdetailye .mao_yishengtit .mao_ysjgxs img{height:100%;width:100%;}
    .mao_fwteamdetailye .mao_yishengtit p{font-size:.33rem;margin-left:1.3rem;float:left;}
    .mao_fwteamdetailye .mao_yishengtit span{float:right;display:block;}
    .mao_fwteamdetailye .mao_yishengtit span img{margin-bottom:.2rem;}
    .mao_fwteamdetailye .mao_yissm{height:100%;width:100%;border-bottom:.2rem solid #ccc;}
    .mao_fwteamdetailye .mao_yissm p{line-height:.6rem;font-size:.33rem;margin-left:.2rem;} 
    .mao_fwteamdetailye .mao_yissm img{width:2rem;height:1.4rem;margin-left:.2rem;margin-top:.2rem;}
</style>