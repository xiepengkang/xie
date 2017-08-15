<template>
    <div class="mao_fuwujldetail">
        <mt-header title="服务记录">
        <router-link to="/Residents" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right" v-on:click="mao_tzxzadjm">+添加记录</mt-button>
        </mt-header>
        <div class="mao_mmserch">
            <mt-search v-model="value" cancel-text="取消" placeholder="搜索服务对象、服务人、服务项目"></mt-search>
        </div>
        
        <div class="mao_fwjlfwx" v-for="item in fwjlxqlist" @click="mao_tzlyd">
            <p class="mao_fwjlfwxp">{{item.createDt}}</p>
            <h6>服务咨询</h6>
            <div class="mao_fwjlfwxp_fwlx">
                <p><span>服务时间</span><span class="mao_fwjlfwxp_left">{{(item.exeDt).substring(0,10)}}</span></p>
                <p><span>服务对象</span><span class="mao_fwjlfwxp_left">{{item.personName}}</span></p>
                <p><span>服务人</span><span class="mao_fwjlfwxp_left">{{item.exeUserName}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import { Header,Button,Cell,Field,MessageBox,Radio,Search,Loadmore,InfiniteScroll,Indicator } from 'mint-ui';
import { commonAjax } from "../../api/api.js";
import "../../assets/css/mao_style.css";
    export default {
        data:function(){
            return{
                value:"",
                fwjlxqlist:[],
                mao_page: 0,
                topStatus: '',
            }
        },
        components:{
            "mt-header":Header,
            "mt-button":Button,
            "mt-search":Search,
            "mt-loadmore":Loadmore
        },
        methods:{
            loadBottom() {
                this.mao_page+=20;
                // this.allLoaded = true;// 若数据已全部获取完毕
                // this.$refs.loadmore.onBottomLoaded();
                },
            mao_diaoqujiekou(){
            Indicator.open('加载中...');
               let params=[{"teamId":"","pageSize":this.mao_page,"pageNo":1}];
                commonAjax(params,'pcn.pcnServiceExecService','queryPageInfo').then(res=>{
                    if(res.code==200){
                        this.fwjlxqlist=res.body.list;
                        console.log(this.fwjlxqlist)
                    }
                    Indicator.close();
                })
           },
           mao_tzxzadjm:function(){
                this.$router.push("/fwjldetail/addxzjm")
           },
           mao_tzlyd:function(){
               this.$router.push("/fwjldetail/fwxjm")
           }
        //    handleTopChange(status) {
        //         this.topStatus = status;
        //     },
        },
        mounted:function(){
             this.mao_diaoqujiekou()
        }
    }
</script>

<style scoped>
    .mao_fuwujldetail{}
    .mao_fuwujldetail .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;border-bottom:1px solid #ccc;z-index:5;height:1rem;}
    .mao_fuwujldetail .mint-header .mint-button{height:.96rem;}
    .mao_fuwujldetail .mao_mmserch{height:100%;border-bottom:1px solid #ccc;display:flex;align-items:center;}
    .mao_fuwujldetail .mao_mmserch .mint-search{height:100%;flex:1;}
    .mao_fuwujldetail .mao_fwjlfwx{height:100%;}
    .mao_fuwujldetail .mao_fwjlfwx .mao_fwjlfwxp{height:.8rem;font-size:.37rem;height:.8rem;line-height:.8rem;background-color:#eee;color:#666;padding-left:.2rem;}
    .mao_fuwujldetail .mao_fwjlfwx h6{height:.8rem;line-height:.8rem;font-size:.37rem;margin-left:.2rem;border-bottom:1px solid #eee;font-family:"微软雅黑";}
    .mao_fuwujldetail .mao_fwjlfwx .mao_fwjlfwxp_fwlx p{font-size:.37rem;margin:.4rem .2rem;display:flex;}
    .mao_fuwujldetail .mao_fwjlfwx .mao_fwjlfwxp_fwlx p span{flex:1;}
    .mao_fuwujldetail .mao_fwjlfwx .mao_fwjlfwxp_left{text-align:right;}
</style>