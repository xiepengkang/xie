<template>
    <div class="mao_services">
        <mt-header title="服务包">   
            <mt-button icon="back" slot="left" v-on:click='mgoback'></mt-button> 
        </mt-header>
        <div v-for="item in fuwubaolist">
            <mt-cell :title="item.spPackName"  value="详情" :label="'服务对象:'+item.suitableObject | suitFilter"  is-link :to="{name:'mserviceobj',params:{'id':item.signPackId}}"></mt-cell>
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
                fuwubaolist:[]
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
            "mt-cell":Cell
        },
        methods:{
            mgoback:function(){
                this.$router.go(-1);
            }
        },
        mounted:function(){
            var msid=this.$route.params.id;
               console.log(msid);
            let params='["'+msid+'"]';
            Indicator.open();
            commonAjax(params,'pcn.pcnSignResidentPackService','getSignResidentPack').then(res=>{
                if(res.code==200){
                    console.log(res);
                    this.fuwubaolist=res.body;
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
	},
    }
</script>

<style scoped>
    .mao_services{width:100%;height:100%;overflow:hidden;}
    .mao_services .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;z-index:5;height:1rem;border-bottom:1px solid #eee;}
    .mao_services .mint-header .mint-header-title{font-size:.33rem;}
    .mao_services .mint-cell{min-height:1rem;}
</style>