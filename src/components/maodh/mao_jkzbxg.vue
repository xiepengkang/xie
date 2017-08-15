<template>
    <div class="mao_jkzbxg">
        <mt-header title="健康指标修改">
            <mt-button icon="back" slot="left" v-on:click='mzbxg'></mt-button>
            <mt-button slot="right" v-on:click="mao_baoc">保存</mt-button>
        </mt-header>

        <div class="mao_zbk" v-for='item in mao_jkzbzhi'>
            <p class="mao_zbk_top">{{item.typeName}}</p>
            <p class="mao_js"><span class="mao_xt">项目名称</span><span>修改目标值</span></p>
            <p class="mao_zbk_bot"  v-for='mitem in item.itemList'><span class="mao_xt">{{mitem.hpiCode}}({{mitem.hpiUnit}})</span><input type="text" :value="mitem.lowerLimit">~<input type="text" :value="mitem.upperLimit"></p>
        </div>
    </div>
</template>

<script>
import { mapState} from 'vuex'
import { Header,Button,Cell } from 'mint-ui';
import "../../assets/css/mao_style.css";
import { commonAjax,imgUrl } from "../../api/api.js";
    export default {
        data:function(){
            return{
                mao_jkzbxgid:"",
                mao_jkzblist:[]
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
        },
        methods:{
            mzbxg:function(){
                this.$router.go(-1);
            },
            mao_baoc:function(){
                let mdivxh= document.getElementsByClassName("mao_zbk_bot");
                this.mao_jkzblist=[];
                    for(var i=0;i<mdivxh.length;i++){
                        // console.log(mdivxh[i].getElementsByTagName("input")[0].value)
                        this.mao_jkzblist.push({"hpiCode":mdivxh[i].getElementsByTagName("span")[0].innerHTML.split('(')[0],"lowerLimit":mdivxh[i].getElementsByTagName("input")[0].value,"upperLimit":mdivxh[i].getElementsByTagName("input")[1].value})
                    }
                    console.log(this.mao_jkzblist)
                // [{"mpiId":"a1db59b5ea3646448c4f84d368386e73","list":[{"hpiCode":"BIS","lowerLimit":"4.4","upperLimit":"8.0 "},{"hpiCode":"DBP","lowerLimit":"60","upperLimit":"80"},{"hpiCode":"SBP","lowerLimit":"90","upperLimit":"130"},{"hpiCode":"BMI","lowerLimit":"15","upperLimit":"24"}]}]
                // for(let k=0;k<this.mao_jkzbzhi.length;k++){

                // }
                let params=[{"mpiId":this.mao_jkzbxgid,"list":this.mao_jkzblist}];
                commonAjax(params,'pcn.appPcnHpiService','doctorPostPcnHpiResidents').then(res=>{
					if(res.code==200){
                        this.$router.go(-1)
                    }
                })
            }
        },
        mounted:function(){
            this.mao_jkzbxgid=JSON.parse(sessionStorage.getItem("mao_jkzbid"));        
        },
        computed:{
            ...mapState(['mao_jkzbzhi'])
    	},
    }
</script>


<style scoped>
    .mao_jkzbxg{}
    .mao_jkzbxg .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
    .mao_jkzbxg .mao_wzsm{height:1.2rem;background-color:#D1FFFC;font-size:.27rem;padding-left:.2rem;line-height:.4rem;padding:.2rem .2rem;color:#009fff;}
    .mao_jkzbxg .mao_zbk{height:100%;}
    .mao_jkzbxg .mao_zbk p{font-size:.33rem;height:1rem;line-height:1rem;display:flex;}
    .mao_jkzbxg .mao_zbk p input{text-align:center;width:1rem;border:none;outline:none;}
    .mao_jkzbxg .mao_zbk p span{flex:.7;}
    .mao_jkzbxg .mao_zbk .mao_js{height:.4rem;line-height:.4rem;background-color:#fafafa;border:1px solid #ccc;}
    .mao_jkzbxg .mao_zbk .mao_zbk_top{margin-left:.6rem;color:#26a2ff;}
    .mao_jkzbxg .mao_zbk .mao_zbk_bot{border-bottom:.2rem solid #eee;}
    .mao_jkzbxg .mao_zbk .mao_zbk_bot input{font-size:.33rem;}
    .mao_jkzbxg .mao_zbk .mao_zbk_bot1{border-bottom:1px solid #ccc;}
    .mao_jkzbxg .mao_zbk .mao_xt{text-align:left;margin-left:.6rem;}
    .mao_jkzbxg .mint-button{height:100%;}
</style>