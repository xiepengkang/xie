<template>
    <div class="mao_jmdetail">
        <div class="mao_head">
            <mt-header title="居民详情">
            <router-link to="/Residents" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            </mt-header>
            <div class='mao_tit'>
                <div class="toux">
                    <img :src="detailsj.avatar" alt="">
                </div>
                <p><span>{{detailsj.personName}}</span><span>{{detailsjsex}}</span><span>{{nianl}}岁</span></p>
                <p><span>证件类型</span><span>居民身份证</span></p>
                <p><span>证件号码</span><span>{{detailsj.idOrNo}}</span></p>
                <div class="mao_xqxmdk">
                    <p><span v-for="item in maoleix">{{item}}</span></p>
                </div>
                <div class="mao_tu" @click="mao_czdxzlx">
                    <router-link :to="{name:'mmanagement',params:{'id':detailsj.personGroup}}">
                        <img src="../../assets/img/mao_bianj.png" alt="">
                    </router-link>
                </div>
            </div>
        </div>
        <mt-cell title="手机号码">
            <span v-on:click="mao_bodatell"><img slot="icon" src="../../assets/img/mao_tell.png" width="24" height="24">{{detailsj.tel}}</span>     
        </mt-cell>
        <mt-cell title="居住地址"><span>{{mao_applyId[2]}}{{mao_applyId[0]}}{{mao_applyId[1]}}{{mao_applyId[3]}}</span></mt-cell>
        <div class="mao_heng"></div>
        <mt-cell title="签约周期" value="说明文字">{{msignDate}}</mt-cell>
        <mt-cell title="家庭医生" value="说明文字">{{detailsj.teamName}} {{detailsj.doctorName}}</mt-cell>
        <mt-cell title="签约服务包" value="说明文字" is-link :to="{name:'mservice',params:{'id':detailsj.mpiId}}">{{mfuwubao}}</mt-cell>
        <mt-cell title="就诊记录" value="居民就诊记录" is-link @click.native="mao_tzlifehai"></mt-cell>
        <mt-cell title="健康指标" value="目标值设置" is-link :to="{name:'mjkzb',params:{'id':detailsj.mpiId}}"></mt-cell>
    </div>
</template>

<script>
import { mapState} from 'vuex'
import { Header,Button,Cell,Indicator } from 'mint-ui';
import { commonAjax,imgUrl } from "../../api/api.js";
import "../../assets/css/mao_style.css";
import {GoMyhApp} from "../../assets/js/txb_lifesea.wx.jssdk.js";
var imgUrlid=require("../../assets/img/mao_hzmoren.png")
    export default {
        data:function(){
            return{
                detailsj:'',
                detailsjsex:'',
                detailfuwubao:'',
                nianl:'',
                cgldz:'',
                msignDate:"",
                mfuwubao:"",
                maolex:"",//转换前的数据类型
                maoleix:[],//这个是转化后保存的类型
                mtelldh:'',
                mxytjsj:'',
                imgurl1:imgUrlid,
                serverUrl:'fzx.lifesea.com:8099',//生命海赋值 
            	openId:'',
            	appKey:'8jczFSmHiXKcZEjf',//生命海赋值
            	cryptkey:'190ee8a2f6d44fc4',//生命海赋值
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
            "mt-cell":Cell
        },
        methods:{
            mao_bodatell:function(){
                window.location.href = 'tel://'+this.mtelldh
                // console.log(this.mtelldh);
            },
            //保存emplid到要发送到后台的数据
            mao_czdxzlx:function(){
                sessionStorage.setItem("mao_usermpild",this.mxytjsj);
            },
            mao_tzlifehai:function(){
                GoMyhApp({"serverUrl":this.serverUrl,openId:this.openId,appKey:this.appKey,cryptkey:this.cryptkey});
            }
        },
        mounted:function(){
            // console.log(this.maolex)
            var that=this;
            meventBus.$on("chuanzhiname1",function(val){
                // console.log(val)
                // that.cgldz=val;
                // that.maoaddress=that.cgldz.shengs+that.cgldz.shiqu+that.cgldz.gxq+that.cgldz.quchu;
            })
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
            var sid=this.$route.params.id;
            let params="['"+sid+"']";
            commonAjax(params,'pcn.residentSignService','getSignRecordDetailBySignId').then(res=>{
                if(res.code==200){
                    console.log(res);
                    this.mxytjsj=res.body.SignInfo.mpiId;
                    this.detailsj=res.body.SignInfo;
                    this.openId=this.detailsj.idOrNo;//生命海必要参数
                    if(this.detailsj.avatar==0||this.detailsj.avatar==null){
                        this.detailsj.avatar=this.imgurl1
                    }else{
                        this.detailsj.avatar=imgUrl(this.detailsj.avatar)
                    }
                    this.msignDate=res.body.signDate;
                    this.detailfuwubao=res.body.signPackageInfo;
                    this.mtelldh=res.body.SignInfo.tel;
                    this.maolex=res.body.SignInfo.personGroup;//获取属于那种病人类型
                    let mao_mnum=this.maolex.split(",");
                    for(var n=0;n<mao_mnum.length;n++){
                        if(mao_mnum[n]=="01"){
                            this.maoleix.push("孕产妇");
                        }
                        if(mao_mnum[n]=="02"){
                            this.maoleix.push("0-6岁儿童");
                        }
                         if(mao_mnum[n]=="03"){
                            this.maoleix.push("65岁以上老人");
                        }
                         if(mao_mnum[n]=="04"){
                            this.maoleix.push("高血压人群");
                        }
                         if(mao_mnum[n]=="05"){
                            this.maoleix.push("糖尿病人");
                        }
                         if(mao_mnum[n]=="06"){
                            this.maoleix.push("重性精神疾病患者");
                        }
                         if(mao_mnum[n]=="07"){
                            this.maoleix.push("肺结核患者");
                        }
                         if(mao_mnum[n]=="08"){
                            this.maoleix.push("残疾人");
                        }
                         if(mao_mnum[n]=="09"){
                            this.maoleix.push("计生特殊家庭");
                        }
                         if(mao_mnum[n]=="10"){
                            this.maoleix.push("一般健康人群");
                        }
                    }


                    if(res.body.SignInfo.sex=="1"){
                        this.detailsjsex="男"
                    }else{
                        this.detailsjsex="女"
                    }
                    for(var i=0;i<this.detailfuwubao.length;i++){
                        this.mfuwubao+=this.detailfuwubao[i].spPackName+" ";
                    }
                    // console.log(this.mfuwubao)
                    var mdate=new Date();
                    var myear=mdate.getFullYear();
                    var oldnl=res.body.SignInfo.dob.split('-')[0];
                    this.nianl=myear-oldnl;
                    // console.log(this.nianl)
                    // console.log(this.detailsj)
                     Indicator.close();
                }
            })    
        },   
        beforeDestory:function(){
            meventBus.$off('chuanzhiname1');
        },
        computed:{
            ...mapState(['mao_applyId'])
    	},
    }
</script>

<style scoped>
    .mao_jmdetail{overflow:hidden;position:relative;height:100%;}
    .mao_jmdetail .mao_head{height:100%;width:100%;background:url("../../assets/img/mao_jm.png")}
    .mao_jmdetail .mao_head .mint-header{background-color:transparent;color:#fff;font-size:0.33rem;z-index:5;height:1rem;}
    .mao_jmdetail .mao_tit{width:100%;position:relative;}
    .mao_jmdetail .toux{height:100%;width:1.5rem;float:left;margin-right:.2rem;}
    .mao_jmdetail .mao_tit img{float:left;width:1.4rem;height:1.4rem;border-radius:1.4rem;margin-left:.2rem;}
    .mao_jmdetail .mao_tit p{font-size:.23rem;line-height:.53rem;}
    .mao_jmdetail .mao_tit p span{color:#fff;margin-right:.5rem;}
    .mao_jmdetail .mao_tit .mao_xqxmdk p span{margin-right:.3rem;color:#fff;background-color:#63A4F6;padding: 1px 0 1px 0;border-radius:5px;}
    .mao_jmdetail .mao_tu{width:.47rem;height:.47rem;position:absolute;right:.23rem;bottom:.23rem;}
    .mao_jmdetail .mao_tu img{width:100%;height:100%;}
    .mao_jmdetail .mint-cell{min-height:.8rem;border-bottom:1px solid #eee;font-size:.20rem;}
    .mao_jmdetail .mao_heng{height:.3rem;background-color:#eee;}
    .mao_jmdetail .mao_xqxmdk{margin-left:1.7rem;margin-right:.8rem;}
</style>