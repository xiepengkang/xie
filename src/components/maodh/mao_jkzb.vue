<template>
    <div class="mao_jkzb">
        <mt-header title="健康指标">
            <mt-button icon="back"  slot="left" v-on:click='maotzback'></mt-button>
            <mt-button slot="right" v-on:click="mao_xiug">修改</mt-button>
        </mt-header>
        <p class="mao_wzsm">根据居民的健康状况，制定专属于ta的健康目标指数；如居民检测后的数值不在健康指标内，您可及时获取居民检测的结果。</p>
        <div class="mao_zbk" v-for='item in mjkzblist'>
            <p class="mao_zbk_top">{{item.typeName}}</p>
            <p class="mao_js"><span class="mao_xt">项目名称</span><span>目标值</span><span class="mao_dw">单位</span></p>
            <p class="mao_zbk_bot" v-for='mitem in item.itemList'><span class="mao_xt">{{mitem.hpiName}}</span><span>{{mitem.lowerLimit}}~{{mitem.upperLimit}}</span><span class="mao_dw">{{mitem.hpiUnit}}</span></p>
        </div>
       
    </div>
</template>

<script>
import { Header,Button,Cell } from 'mint-ui';
import { commonAjax } from "../../api/api.js";
import "../../assets/css/mao_style.css";
   export default {
       data:function(){
           return{
               mjkzblist:[]
           }
       },
        components:{
            "mt-header":Header,
            "mt-button":Button,
        },
        methods:{
            mao_xiug:function(){
                this.$store.dispatch("mao_jkzbzhi",this.mjkzblist)
                this.$router.push('/mjmdetail/mjkzb/mjkzbxg')
            },
            maotzback:function(){
                this.$router.go(-1)
            }
        },
        mounted:function(){
            var mjkzid=this.$route.params.id;
            sessionStorage.setItem('mao_jkzbid',JSON.stringify(mjkzid))
            console.log(mjkzid)
            let params="['"+mjkzid+"']";
            commonAjax(params,'pcn.appPcnHpiService','residentHpiList').then(res=>{
                 if(res.code==200){
                     this.mjkzblist=res.body;
                     console.log(this.mjkzblist)
                    //  for(var i=0;i<this.mjkzblist.length;i++){
                    //      this.mjkzbitemList.push(this.mjkzblist[i].itemList);
                    //  } 
                    //  console.log(this.mjkzbitemList)      
                 }
            })
        }
   } 
</script>

<style scoped>
    .mao_jkzb{}
    .mao_jkzb .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
    .mao_jkzb .mao_wzsm{height:1.2rem;background-color:#D1FFFC;font-size:.27rem;padding-left:.2rem;line-height:.4rem;padding:.2rem .2rem;color:#009fff;}
    .mao_jkzb .mao_zbk{height:100%;}
    .mao_jkzb .mao_zbk p{font-size:.33rem;height:1rem;line-height:1rem;display:flex;}
    .mao_jkzb .mao_zbk p span{flex:1;text-align:center;}
    .mao_jkzb .mao_zbk .mao_js{height:.4rem;line-height:.4rem;background-color:#fafafa;border:1px solid #ccc;}
    .mao_jkzb .mao_zbk .mao_zbk_top{margin-left:.6rem;color:#26a2ff;}
    .mao_jkzb .mao_zbk .mao_zbk_bot{border-bottom:.2rem solid #eee;}
    .mao_jkzb .mao_zbk .mao_zbk_bot1{border-bottom:1px solid #ccc;}
    .mao_jkzb .mao_zbk .mao_xt{text-align:left;margin-left:.6rem;}
    .mao_jkzb .mao_zbk .mao_dw{text-align:right;margin-right:.4rem;}
    .mao_jkzb .mint-button{height:100%;}
</style>