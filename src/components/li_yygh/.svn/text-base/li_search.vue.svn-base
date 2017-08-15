<template>
<div class="mao_searchbox">
    <div class="mao_msearch">
    <router-link to="/gh">
        <div class="mao_back">
            <img src="../../assets/img/mao_back.png" alt="">
        </div>
    </router-link>
        <div class="mao_kuang">
            <input type="text" placeholder="输入姓名检索居民" v-model="value">
            <button v-on:click="msuss">搜索</button>
        </div>
        <div class="mao_tishi">
            <mt-cell v-for="item in sousuolibiaoList" @click.native="onclick(item)">
               <!-- <router-link :to="{name:'jmdetail',params:{'id':item.signId}}">-->
                    <span>{{item.personName}}</span>
               <!-- </router-link>-->
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
            </mt-cell>
        </div>
    </div>
</div>
</template>

<script>
import { Cell,MessageBox } from 'mint-ui';
import { commonAjax,yyghAjax} from "../../api/api.js";
import "../../assets/css/mao_style.css";
    export default {
        data:function(){
            return{
                value:"",
                sousuolibiaoList:[],
                yuliubaocun:[],
                m_quanbushuju:[],
//              list: [],
            }
        },
        components:{
            "mt-cell":Cell
        },
        mounted:function(){
            let params=[""];
            commonAjax(`['${params}']`, 'pcn.myResidentDoctorService','querySignResidentRecord').then(res => {
                if (res.code == 200) {
                	console.log(res)
//              	this.list = res.body.SignResident;
                    for(var i=0;i<res.body.SignResident.length;i++){
                    	
                        this.yuliubaocun.push(res.body.SignResident[i]);
                        // this.m_quanbushuju.push(res.body.SignResident[i]);
                        // console.log((res.body.SignResident[i].personName).split(""))
                        // var m_shuruz=(res.body.SignResident[i].personName).split("")
                        // for(var j=0;j<m_shuruz.length;j++){
                        //     if(this.value==m_shuruz[i]){
                        //         this.sousuolibiaoList.push(res.body.SignResident[i].personName)
                        //     }else{
                        //         console.log("对不起没有找到!")
                        //     }
                        // }
                        // console.log(this.yuliubaocun)
                        // console.log(this.m_quanbushuju);
                    }
                }
            })
        },
        methods:{
            msuss:function(){
            this.sousuolibiaoList=[];
               for(var j=0;j<this.yuliubaocun.length;j++){
                //    console.log(this.yuliubaocun[j].personName.split(""));
                   var m_shuruz=this.yuliubaocun[j].personName.split("");
                //    console.log(m_shuruz.length)
                   for(var n=0;n<m_shuruz.length;n++){
                       if(this.value==m_shuruz[n]||this.value==this.yuliubaocun[j].personName){
                        this.sousuolibiaoList.push(this.yuliubaocun[j])
                        break;
                       }              
                   }
               }
                console.log(this.sousuolibiaoList);     
            },
            
            onclick(item){
            	let time = new Date().getTime()
          		let birthday = (item.dob).split(' ')[0]
          		//console.log(birthday)
            	
            	//请求数据
				let params = {
				"birthday" : birthday,
				"card_number" : item.idOrNo,
				"card_type" : item.idType,
				"pati_name" : item.personName,
				"phone" : item.phoneNo,
				"query_time" : `${time}`,
				"return_url" : "h5yuyue",
				"sex" : item.sex,
				"token" : "b91575dccf30476188d3e85e05f07219",
				"type" : "1",
				"user" : "test"
				}
				
				//点击请求数据
				yyghAjax(JSON.stringify(params)).then(res => {
					window.location.href = res
				})
				
            },
        }
    }
</script>

<style scoped>
    .mao_searchbox{width:100%;height:100%;background-color:#eee;position:absolute;top:0;left:0;bottom:0;right:0;}
    .mao_msearch{height:1rem;line-height:1rem;border-bottom:1px solid #ccc;}
    .mao_msearch .mao_back{height:1rem;width:.6rem;display:flex;align-items:center;float:left;}
    .mao_msearch .mao_back img{width:.5rem;height:.5rem;}
    .mao_msearch .mao_kuang{height:1rem;display:flex;align-items:center;}
    .mao_msearch .mao_kuang input{flex:1;height:.6rem;border-radius:5px;outline:none;margin-right:.2rem;border:0;}
    .mao_msearch .mao_kuang button{width:.8rem;height:.6rem;border:0;outline:none;color:#26a2ff;background-color:#eee;font-size:.33rem;}
    .mao_msearch .mint-cell{min-height:1.12rem;border-bottom:1px solid #eee;}
</style>