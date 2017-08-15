<template>
    <div class="mao_fuwbjl">
        <mt-header title="服务记录">
            <mt-button icon="back" slot="left" v-on:click="mao_bbback"></mt-button>
        </mt-header>
        <div class="mao_fwzxjil">
            <div class="mao_fwzxjil_left">
                <p>{{mao_fwjlsm.serviceName}}</p>
                <p>{{mao_fwjlsm.serviceDesc}}</p>
            </div>
            <div class="mao_fwzxjil_right">
                <p>总次数<span>{{mao_fwjlsm.times}}</span>次 剩余<span>{{mao_fwjlsm.remainTimes}}</span>次</p>
            </div>
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
                mao_fwjlsm:""
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
        },
        methods:{
           mao_bbback:function(){
               this.$router.go(-1)
           }
        },
        mounted:function(){
            var fwbjlsid=this.$route.params.id;
            console.log(fwbjlsid)
            let params='['+fwbjlsid+']';
            commonAjax(params,'pcn.pcnSignServiceService','queryPcnSignServiceAndExecs').then(res=>{
                if(res.code==200){
                    console.log(res)
                    this.mao_fwjlsm=res.body.service;
                }
            })
        }
    }
</script>

<style scoped>
    .mao_fuwbjl{width:100%;height:100%;overflow:hidden;}
    .mao_fuwbjl .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;z-index:5;height:1rem;border-bottom:1px solid #eee;}
    .mao_fuwbjl .mao_fwzxjil{height:100%;}
    .mao_fuwbjl .mao_fwzxjil .mao_fwzxjil_left{height:100%;float:left;width:100%;}
    .mao_fuwbjl .mao_fwzxjil .mao_fwzxjil_left p{height:100%;font-size:.33rem;line-height:.7rem;margin-left:.2rem;margin-right:.2rem;}
    .mao_fuwbjl .mao_fwzxjil .mao_fwzxjil_right{height:100%;margin-right:.2rem;}
    .mao_fuwbjl .mao_fwzxjil .mao_fwzxjil_right span{color:red;}
    .mao_fuwbjl .mao_fwzxjil .mao_fwzxjil_right p{height:.7rem;font-size:.33rem;line-height:.7rem;margin-left:.2rem;text-align:right;}
</style>