<template>
    <div class="mao_serviceobj">
         <mt-header title="服务项目">
            <mt-button icon="back" slot="left" v-on:click="mgogobac"></mt-button>
        </mt-header>
        <div class="mao_titl">
            <div class="mao_xing">
                <img src="../../assets/img/mao_baogao.png" alt="">
            </div>
            <h5>{{mao_zsjbody.spPackName}}</h5>
            <div class="mao_shihedx">适合对象：<span>{{mao_zsjfwbjlid | suitFilter}}</span></div>
            <p>服务周期：2017-07-15至2018-07-15</p>
        </div>
        <div v-for="item in mao_zsjbodylist">
            <mt-cell :title="item.serviceName" :value="'总次数'+item.times+'次 ' + ' 剩余'+item.remainTimes+'次'" is-link :to="{name:'mfwbjl',params:{'id':item.signServiceId}}"></mt-cell>
            <div class="mao_instructions">
                {{item.serviceDesc}}
            </div>
        </div>
    </div>
</template>

<script>
import { dicAjax } from '../../api/api.js';
import { Header,Button,Cell,Indicator } from 'mint-ui';
import { commonAjax } from "../../api/api.js";
import "../../assets/css/mao_style.css";
    export default {
        data:function(){
            return{
                mao_zsjbody:"",
                mao_zsjbodylist:[],
                mao_zsjfwbjlid:""
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
            "mt-cell":Cell
        },
        methods:{
            mgogobac:function(){
                this.$router.go(-1);
            }
        },
        mounted:function(){
            var mfwbid=this.$route.params.id;
            let params='["'+mfwbid+'"]';
            // console.log(params);
            Indicator.open();
            commonAjax(params,'pcn.pcnSignResidentPackService','signResidentPackDetail').then(res=>{
                if(res.code==200){
                    this.mao_zsjbody=res.body;
                    // console.log(res)
                    this.mao_zsjfwbjlid=res.body.suitableObject;
                    // console.log(this.mao_zsjfwbjlid)
                    this.mao_zsjbodylist=res.body.itemList;
                    // this.mao_zsjfwbjlid=res.body.itemList.signServiceId;
                }
                Indicator.close();
            })
             dicAjax().then((res)=>{
				let txt = [];
				this.dic = res.items;
				for(let i=0;i<this.dic.length;i++){
					txt.push(this.dic[i]['text']);
				}
				// console.log(this.txt)
				sessionStorage.setItem('txt',JSON.stringify(txt));
				// console.log(JSON.parse(sessionStorage.getItem('txt')))

			})
        },
        filters:{
            suitFilter(value){
                let showArr = [];
                let packkeyArr = value.split(',');
                packkeyArr.sort((a,b)=>{
                    return a-b
                })
                let txt1 = JSON.parse(sessionStorage.getItem('txt'))

                for(let i=0;i<packkeyArr.length;i++){
                    showArr.push(txt1[packkeyArr[i].replace(/\b(0+)/,'')]);
                }
                let value1 = showArr.join(',')
                return value1
            }
        }
    }
</script>

<style scoped>
    .mao_serviceobj{width:100%;height:100%;overflow:hidden;}
    .mao_serviceobj .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;z-index:5;height:1rem;border-bottom:1px solid #eee;}
    .mao_serviceobj .mao_titl{width:100%;height:100%;background:url("../../assets/img/mao_jm.png");}
    .mao_serviceobj .mao_xing{height:100%;width:1.4rem;float:left;}
    .mao_serviceobj .mao_xing img{width:.6rem;height:.6rem;margin-left:.5rem;}
    .mao_serviceobj p{font-size:.23rem;height:.53rem;line-height:.53rem;color:#fff;margin-left:1.4rem;}
    .mao_serviceobj h5{font-size:.37rem;color:#fff;height:.8rem;line-height:.8rem;}
    .mao_serviceobj .mao_instructions{clear:both;height:1.5rem;border-bottom:.2rem solid #eee;font-size:.33rem;line-height:1.5rem;padding-left:.2rem;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
    .mao_serviceobj .mint-cell{min-height:.6rem;border-bottom:1px solid #ccc;}
    .mao_serviceobj .mao_shihedx{height:100%;font-size:.23rem;color:#fff;margin-left:1.4rem;}
    .mao_serviceobj .mao_shihedx span{line-height:.4rem;}
</style>