<template>
    <div class="mao_rqgl">
        <mt-header title="管理类型">
                <router-link to="/Residents" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
        </mt-header>
        <div>
            <mt-cell @click.native="mao_cunzhi(item.personGroupText)" :title="item.personGroupText" is-link :to="{name:'gllxxq',params:{'id':item.personGroup}}" v-for="(item,index) in mao_baocunshuju" ></mt-cell>
        </div>
    </div>
</template>


<script>
import { Header,Button,Cell,Indicator } from 'mint-ui';
import { commonAjax } from "../../api/api.js";
import "../../assets/css/mao_style.css";
    export default {
        data:function(){
            return{
                mao_gllxlist:[],
                mao_baocunshuju:[]
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
            "mt-cell":Cell
        },
        mounted:function(){
            Indicator.open({text: '加载中...',spinnerType: 'fading-circle'});
            let params=[""];
            commonAjax(`['${params}']`, 'pcn.myResidentDoctorService','managementType').then(res => {
                if (res.code == 200) {
                    this.mao_gllxlist=res.body;
                    let mnumber=[];
                    for(var i=0;i<this.mao_gllxlist.length;i++){
                        // console.log(this.mao_gllxlist[i].personGroupText)
                        // mnumber.push(this.mao_gllxlist[i].personGroupText)
                        if(mnumber.indexOf(this.mao_gllxlist[i].personGroupText)==-1){
                            mnumber.push(this.mao_gllxlist[i].personGroupText)
                            this.mao_baocunshuju.push(this.mao_gllxlist[i])
                        }
                    }
                    // console.log(mnumber)
                    // console.log(this.mao_gllxlist)
                }
                Indicator.close();
            })       
        },
        methods:{
            mao_cunzhi:function(maofuzhi){
            //     meventBus.$emit('mao_fuz',maofuzhi);
            //     meventBus.$off('mao_fuz');
            }
        }
    }
</script>

<style scoped>
    .mao_rqgl{overflow:hidden;}
    .mao_rqgl .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
</style>