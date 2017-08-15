<template>
    <div class="mao_rqgllxxq">
        <mt-header title="详情">
            <router-link to="/Residents/mgllx" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <p><span class="mao_lx">人群管理</span><span class="mao_rq">{{mao_gllxfz}}</span></p>
        <p class="mao_dian"><span class="mao_lx">居民</span><span class="mao_rq">{{mao_gllxxqjm.length}}人</span></p>
        <ul>
            <li v-for="item in mao_gllxxqjm">
                 <router-link :to="{name:'jmdetail',params:{'id':item.signId}}">
                    <img :src="item.avatar" alt="">
                    <h6>{{item.personName}}</h6>
                </router-link>
            </li>   
        </ul>
    </div>
</template>

<script>
import { Header,Button,Cell } from 'mint-ui';
import { commonAjax,imgUrl } from "../../api/api.js";
import "../../assets/css/mao_style.css";
var imgUrlid=require("../../assets/img/mao_hzmoren.png")
    export default {
        data:function(){
            return{
                mao_gllxxqjm:[],
                mao_gllxfz:"",
                glimgurl:imgUrlid
            }
        },
        // watch: {
        //   mao_gllxfz(a,b) {
        //       console.log(a+":"+b)
        //   }
        // },
        components:{
            "mt-header":Header,
            "mt-button":Button,
        },
        mounted:function(){
            //  meventBus.$on("mao_fuz",function(val){
            //     console.log(val)
            //     this.mao_gllxfz=val
            //     // console.log(this)
            // }.bind(this))
            var mmgllxid=this.$route.params.id;
            // console.log(mmgllxid)
             let params="['','"+mmgllxid+"']";
             commonAjax(params, 'pcn.myResidentDoctorService','managementTypeDetail').then(res => {
                if (res.code == 200) {
                    // console.log(res)
                    for(var i=0;i<res.body.length;i++){
                        //头像选择拼接
                        if(res.body[i].avatar==0||res.body[i].avatar==null){
                            res.body[i].avatar=this.glimgurl
                        }else{
                            res.body[i].avatar=imgUrl(res.body[i].avatar)
                        }
                    }
                    this.mao_gllxxqjm=res.body;
                }
            })
        }
    }
</script>

<style scoped>
    .mao_rqgllxxq{overflow:hidden;}
    .mao_rqgllxxq .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #eee;z-index:5;height:1rem;}
    .mao_rqgllxxq p{height:.8rem;font-size:.33rem;display:flex;line-height:.8rem;border-bottom:.2rem solid #eee;}
    .mao_rqgllxxq p span{flex:1;}
    .mao_rqgllxxq p .mao_lx{text-align:left;margin-left:.2rem;}
    .mao_rqgllxxq p .mao_rq{text-align:right;margin-right:.2rem;}
    .mao_rqgllxxq .mao_dian{border-bottom:1px solid #eee;margin-bottom:.4rem;}
    .mao_rqgllxxq ul li{float:left;width:1.8rem;}
    .mao_rqgllxxq ul li h6{font-size:.33rem;text-align:center;flex:2; color:#000;}
    .mao_rqgllxxq ul li img{margin-left:.2rem;width:1.2rem;height:1.2rem;border-radius:1.2rem;}
</style>