<template>
    <div class="mao_addfwjlxz">
        <mt-header title="选择服务">
        <router-link to="/fwjldetail/addxzjm" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
        <div class="mao_fwzxfwbxz">
            <div class="mao_fwzxfwbxz_top" v-for="(item,index) in maddfwjlxzlis">
                <div @click="mao_fwbxsyc(index)">
                    <p class="mao_fwzxfwbxz_ziti">{{item.spPackName}}</p>
                    <p>{{item.serviceDesc}}</p>
                </div>
                <ul class="mao_fwb_ul" ref='ul'>
                    <li v-for="(mitem,mindex) in item.list">
                        <div class="mao_fwzxfwbxz_bott" @click="mao_xzfwys(mindex)">
                            <p><span>{{mitem.serviceName}}</span><span class="mao_fwzxfwbxz_bott_cis">剩余<span>{{mitem.remainTimes}}</span>次</span></p>
                            <div>{{mitem.serviceDesc}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mao_btnsz">
            <mt-button type="primary" @click="mao_changnext">下一步</mt-button>
        </div>
    </div>
</template>

<script>
import { Header,Button,Search,IndexList,IndexSection,Cell,MessageBox } from 'mint-ui';
import { commonAjax } from "../../api/api.js";
import "../../assets/css/mao_style.css";
    export default {
        data:function(){
            return{
                maddfwjlxzlis:[],
                flag:false,
                mtesxt:false
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
        },
        mounted:function(){
            var mxzfwlzx= this.$route.params.id;
            // console.log(mxzfwlzx)
            let params='["'+mxzfwlzx+'"]';
            commonAjax(params,'pcn.pcnSignPackService','queryPcnSignPackNotFinished').then(res=>{
                if(res.code==200){
                    this.maddfwjlxzlis=res.body;
                    // console.log(this.maddfwjlxzlis)
                }
            })
        },
        methods:{
            mao_fwbxsyc:function(index){
                
                if(this.flag){
                    document.getElementsByTagName('ul')[index].style.display="none";
                    this.flag=false;
                }else{
                document.getElementsByTagName('ul')[index].style.display="block";
                this.flag=true;
                }
            },
            mao_xzfwys:function(mindex){
                document.getElementsByClassName("mao_fwzxfwbxz_bott")[mindex].classList.remove("mactive");
                console.log(document.getElementsByClassName("mao_fwzxfwbxz_bott"))
                if(this.mtesxt){
                    document.getElementsByClassName("mao_fwzxfwbxz_bott")[mindex].classList.remove("mactive");
                    document.getElementsByClassName("mao_fwzxfwbxz_bott")[mindex].style.background="#eee";
                    this.mtesxt=false;
                }else{
                    document.getElementsByClassName("mao_fwzxfwbxz_bott")[mindex].classList.add("mactive");
                    document.getElementsByClassName("mao_fwzxfwbxz_bott")[mindex].style.background="#fcf4d8";
                    this.mtesxt=true;
                }          
            },
            mao_changnext:function(){
                if(this.mtesxt){
                    // console.log(1111111111)
                }else{     
                    MessageBox('提示', '请选择服务');
                }
            }
        }
    }
</script>

<style scoped>
    .mao_addfwjlxz{}
    .mao_addfwjlxz .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
    .mao_addfwjlxz .mint-header .mint-button{height:.96rem;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_top{height:100%;border-bottom:.2rem solid #eee;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_top p{font-size:.37rem;height:.8rem;line-height:.8rem;margin-left:.4rem;}
    .mao_addfwjlxz .mao_fwzxfwbxz_ziti{color:#26a2ff}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_top .mao_fwb_ul{display:none;margin-top:.1rem;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_top .mao_fwb_ul li{width:100%;height:100%;border-top:1px dashed #ccc;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_bott{margin:.4rem;background-color:#eee;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_bott p{display:flex;margin-left:.2rem;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_bott p span{flex:1;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_bott .mao_fwzxfwbxz_bott_cis{text-align:right;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_bott .mao_fwzxfwbxz_bott_cis span{color:red;}
    .mao_addfwjlxz .mao_fwzxfwbxz .mao_fwzxfwbxz_bott div{font-size:.34rem;margin-top:.2rem;margin-left:.2rem;padding-bottom:.2rem;line-height:.5rem;}
    .mao_addfwjlxz .mao_btnsz{position:absolute;bottom:0;width:100%;}
    .mao_addfwjlxz .mao_btnsz button{width:100%;}
    .mao_addfwjlxz .mactive{border:1px solid red;}
</style>