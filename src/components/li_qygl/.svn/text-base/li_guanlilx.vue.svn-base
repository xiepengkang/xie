<template>
    <div class="mao_gllx">
        <mt-header title="管理类型">
            <mt-button icon="back" slot="left" v-on:click='mm_goback'></mt-button>
            <mt-button slot="right" v-on:click='change'>完成</mt-button>
        </mt-header>
        <mt-checklist
        align="right"
        v-model="value"
        :options="options">
        </mt-checklist>
        <mt-checklist
        align="right"
        v-model="mvalue"
        :options="moptions">
        </mt-checklist>
        <mt-checklist
        align="right"
        v-model="maovalue"
        :options="maooptions">
        </mt-checklist>
    </div>
</template>

<script>
import { commonAjax } from "../../api/api.js";
import { Header,Button,Checklist,MessageBox } from 'mint-ui';
import "../../assets/css/mao_style.css";
    export default {
        data:function(){
            return{
                value:[],
                mvalue:[],
                maovalue:[],
                options:[
                {
                    label: '孕产妇',
                    value: '01',
                    disabled: false
                },
                {
                    label: '0-6岁儿童',
                    value: '02',
                    disabled:false
                },
                {
                    label: '65岁以上老人',
                    value: '03',
                    disabled:false,
                    mhzyiql:[]
                }
                
                ],
                moptions:[
                   {
                    label: '高血压人群',
                    value: '04',
                    disabled: false
                },
                {
                    label: '糖尿病人',
                    value: '05',
                    disabled: false
                },
                {
                    label: '重性精神疾病患者',
                    value: '06',
                    disabled: false
                },
                {
                    label: '肺结核患者',
                    value: '07',
                    disabled: false
                },
                {
                    label: '残疾人',
                    value: '08',
                    disabled: false
                },
                {
                    label: '计生特殊家庭',
                    value: '09',
                    disabled: false
                },
                ],
                maooptions:[
                {
                    label: '一般健康人群',
                    value: '10',
                    disabled: false
                }],
                gllxxzx:[],
                gllxmzx:[],
                mflag:false,
                mao_pepompild:'',
                mhezyiq:[]
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
            "mt-checklist":Checklist,
        },
        mounted:function(){
            this.mao_pepompild=sessionStorage.getItem("mao_usermpild");
            // console.log(this.mao_pepompild)
            this.gllxxzx=(this.$route.params.id).split(",");
            // console.log(this.gllxxzx)
            for(var i=0;i<this.options.length;i++){
                for(var o=0;o<this.gllxxzx.length;o++){
            //     // console.log(this.options[i].value)
                if(this.gllxxzx[o]==this.options[i].value){
                    // console.log(this.gllxxzx[o])
                    if(this.gllxxzx[o]==1){
                        this.value.push(this.gllxxzx[o])
                        this.$nextTick(function () {
                            this.options[1].disabled=true;
                            this.options[2].disabled=true;   
                        })
                    }
                    if(this.gllxxzx[o]==2){
                            this.value.push(this.gllxxzx[o])
                            this.$nextTick(function () {
                            this.options[0].disabled=true;
                            this.options[2].disabled=true;   
                        })
                    }
                    if(this.gllxxzx[o]==3){
                            his.value.push(this.gllxxzx[o])
                            this.$nextTick(function () {
                            this.options[0].disabled=true;
                            this.options[1].disabled=true;   
                        })
                    }
                    }
                }
            }
            for(var i=0;i<this.moptions.length;i++){
                for(var o=0;o<this.gllxxzx.length;o++){
            //     // console.log(this.options[i].value)
                if(this.gllxxzx[o]==this.moptions[i].value){
                    // console.log(this.gllxxzx[o])
                    this.mvalue.push(this.gllxxzx[o])
                    this.gllxmzx.push(this.moptions[i].label)
                    }
                }
            }      
        },
        methods:{
            change:function(){
                // console.log(this.mvalue)
                this.mhezyiq=this.value.concat(this.mvalue).concat(this.maovalue);
                var mao_zhabc=this.mhezyiq.join(",");
                console.log(this.mhezyiq)
                sessionStorage.setItem('addjmthrgllx',JSON.stringify(this.mhezyiq))
                //向服务器需要发送的数据及格式[{"mpiId":"e487883150e04153b40a47afc11d4879","peopleGroup":"02,04,05,06,07,08,09"}]
                let params=[{"mpiId":this.mao_pepompild,"peopleGroup":mao_zhabc}];
                commonAjax(params,'pcn.pcnSignPersonGroupService','updateSignPeopleGroup').then(res=>{
                    if(res.code==200){
                        console.log("修改成功")
                    }
                })
                this.$router.go(-1)
            },
            mm_goback:function(){
                this.$router.go(-1)
            },
            // mao_dianjices:function(mmindex){
            //     console.log(mmindex)
            // }
        },
        watch:{
            value(curVal,oldVal){
               for(var i=0;i<curVal.length;i++){
                  if(curVal[i]==1){
                      this.options[1].disabled=true;
                      this.options[2].disabled=true;
                      this.maovalue=[]
                  }
                  if(curVal[i]==2){
                      this.options[0].disabled=true;
                      this.options[2].disabled=true;
                      this.maovalue=[]
                  }
                  if(curVal[i]==3){
                      this.options[0].disabled=true;
                      this.options[1].disabled=true;
                      this.maovalue=[]
                  }
               }
               for(var j=0;j<oldVal.length;j++){
                   
                  if(oldVal[j]==1){
                      this.options[1].disabled=false;
                      this.options[2].disabled=false;
                  }
                  if(oldVal[j]==2){
                      this.options[0].disabled=false;
                      this.options[2].disabled=false;
                  }
                  if(oldVal[j]==3){
                      this.options[0].disabled=false;
                      this.options[1].disabled=false;
                  }     
               }
            },
            maovalue(curVal,oldVal){
                // console.log(curVal)
                // console.log(oldVal)   
                for(var z=0;z<curVal.length;z++){
                    if(curVal[z]==10){
                        this.value=[];
                        this.mvalue=[];
                    }
                }  
            },
            mvalue(curVal,oldVal){
                 if(curVal.length>0){
                     this.maovalue=[]
                 }
            }
        }
    }
</script>

<style scoped>
    .mao_gllx{overflow:hidden;}
    .mao_gllx .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
</style>