<template>
    <div class="mao_mfwtdtema">
        <mt-header fixed :title="maotit">
		  <router-link to="/Residents/adjm" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
        <div class="maochosexz" v-show="xztemashow">
            <ul>
                <li v-for="(maoitem,mindex) in mao_fuwuteam" @click="maochoseteam(maoitem,mindex)">{{maoitem.teamName}}</li>
            </ul>
        </div>
        <p class="mao_servertell">服务电话：0714-8823593</p>
    <div class="mao_doctorteam">
        <ul>
            <li v-for="(item,index) in mao_shequfuwutemalist" @click="mao_qucydetailyem(item)">
                <div>
                    <img :src="mao_titletouxiang[index]" alt="">
                </div>
                <div>
                    <p><span>{{item.name}}</span><span>{{item.docType}}</span></p>
                    <p>{{mao_baocunfuwutemashuju.orgName}}</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
import { Navbar,TabItem,Header,Button,Cell,Field,DatetimePicker,MessageBox } from 'mint-ui';
import "../../../assets/css/mao_style.css";
import { commonAjax,imgUrl } from "../../../api/api.js";
var mao_imgUrl1=require("../../../assets/img/jia_wo_avatar.png")
    export default {
        data:function(){
            return{
                mao_shequfuwutemalist:[],
                mao_baocunfuwutemashuju:"",
                mao_titletouxiang:[],
                mao_imgUrl:mao_imgUrl1,
                mao_fuwuteam:[],
                xztemashow:false,
                mao_bcteamidqq:"",
                maotit:"全新社区服务团队"
            }
        },
        components:{
        "mt-header":Header,
        "mt-button":Button,
        "mt-field":Field,
		"mt-datetime-picker":DatetimePicker
        },
        mounted:function(){
            // console.log(imgUrl)
            var that=this;
            document.getElementsByClassName("mint-header-title")[0].addEventListener("click",function(){
                console.log(1111111111111)
                that.xztemashow=true;
            },false)
            this.maohqfwteam();
            this.qqajaxdxx(11);
        },
        methods:{
            mao_qucydetailyem(item){
                // console.log(item)
                
                sessionStorage.setItem('maofwteamdetail',JSON.stringify(item))
                this.$router.push("/home/fwtdtema/mfwcydetail")
                
            },
            maohqfwteam(){
                let mfwteamid="";
		        mfwteamid=JSON.parse(sessionStorage.getItem("userInfo")).id;
                let params=[mfwteamid];
                commonAjax(params,'pcn.myResidentDoctorService','queryDoctorInfo').then(res=>{
                    if(res.code==200){
                        
                        this.mao_fuwuteam=res.body.teamInfo
                        // console.log(this.mao_fuwuteam)    
                    }
                })
            },
            maochoseteam(maoitem,index){
                console.log(maoitem)
                this.maotit=maoitem.teamName;
                this.xztemashow=false;
                this.mao_bcteamidqq=maoitem.teamId;
                this.qqajaxdxx(this.mao_bcteamidqq)
                
            },
            qqajaxdxx(doctemid){
                let params=[doctemid];
                commonAjax(params, 'pcn.myResidentDoctorService','getTeamDocInfo').then(res => {
                    if (res.code == 200) {
                        console.log(res)
                        this.mao_shequfuwutemalist=res.body.doctorInfo;
                         //判断医生的职责
                        for(var i=0;i<this.mao_shequfuwutemalist.length;i++){
                            if(this.mao_shequfuwutemalist[i].docType=="01"){
                                this.mao_shequfuwutemalist[i].docType="全科医生";
                            }
                            if(this.mao_shequfuwutemalist[i].docType=="02"){
                                this.mao_shequfuwutemalist[i].docType="全科护士";
                            }
                            if(this.mao_shequfuwutemalist[i].docType=="03"){
                                this.mao_shequfuwutemalist[i].docType="公卫医生";
                            }
                            if(this.mao_shequfuwutemalist[i].docType=="04"){
                                this.mao_shequfuwutemalist[i].docType="公卫护士";
                            }
                            if(this.mao_shequfuwutemalist[i].docType=="05"){
                                this.mao_shequfuwutemalist[i].docType="计生医生";
                            }
                            if(this.mao_shequfuwutemalist[i].docType=="06"){
                                this.mao_shequfuwutemalist[i].docType="中医师";
                            }
                            if(this.mao_shequfuwutemalist[i].docType=="09"){
                                this.mao_shequfuwutemalist[i].docType="其他";
                            }
                            if(this.mao_shequfuwutemalist[i].docType==""){
                                this.mao_shequfuwutemalist[i].docType="暂无分类";
                            }
                        }
                        // console.log(res)
                        this.mao_baocunfuwutemashuju=res.body;
                        for(var i=0;i<this.mao_shequfuwutemalist.length;i++){
                            if(this.mao_shequfuwutemalist[i].avatarFileId!=0){
                                this.mao_titletouxiang.push(imgUrl(this.mao_shequfuwutemalist[i].avatarFileId))
                            }else{
                                this.mao_titletouxiang.push(this.mao_imgUrl)
                            }                    
                        }
                        // console.log(this.mao_titletouxiang)  
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .mao_mfwtdtema{}
    .mao_mfwtdtema .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
    .mao_mfwtdtema .mint-button{height: 1rem;}
    .mao_mfwtdtema .mao_servertell{padding-top:1rem;font-size:.27rem;height:.6rem;line-height:.6rem;width:100%;text-align:center;background: lightgoldenrodyellow;color:orange;clear:both;}
    .mao_mfwtdtema .mao_doctorteam{width:100%;height:2rem;line-height:2rem;}
    .mao_mfwtdtema .mao_doctorteam ul li {border-bottom:1px solid #ccc;width:100%;height:2rem;}
    .mao_mfwtdtema .mao_doctorteam ul li div{float:left;color:#ccc;margin-right:.4rem;}
    .mao_mfwtdtema .mao_doctorteam ul li div img{ vertical-align:middle;margin-left:.4rem;width:1.5rem;height:1.5rem;border-radius:1.5rem;}
    .mao_mfwtdtema .mao_doctorteam ul li p{font-size:.33rem;height:.4rem;line-height:.4rem;margin-top:.4rem;}
    .mao_mfwtdtema .mao_doctorteam ul li p span{margin-right:.2rem;}
    .mao_mfwtdtema .maochosexz{background-color:rgba(0, 0, 0, 0.42);position:absolute;top:0;left:0;right:0;bottom:0;padding-top:1rem;}
    .mao_mfwtdtema .maochosexz ul li{font-size:.33rem;height:1rem;line-height:1rem;border-bottom:1px solid #ccc;color:#26a2ff;background-color:#fff;padding-left:.2rem;}
</style>