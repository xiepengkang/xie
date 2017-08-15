<template>
    <div class="mao_fwxqfwx">
        <mt-header title="服务详情">
        <router-link to="/fwjldetail" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
        <div class="mao_fwxqfwx_tit">
            <div class="mao_fwxqfwx_tubiao"><img src="../../assets/img/mao_task.png" alt=""></div>
            <p>服务项：签约咨询</p>
        </div>
        <div class="mao_xxxx_tit">详细信息</div>
        <div class="mao_qyzxxx">
            <p><span class="mao_qyzxxx_ces">服务包</span><span class="mao_qyzxxx_rces">免费包</span></p>
            <p><span class="mao_qyzxxx_ces">服务对象</span><span class="mao_qyzxxx_rces">谢鹏康</span></p>
            <p><span class="mao_qyzxxx_ces">服务人</span><span class="mao_qyzxxx_rces">黄志远</span></p>
            <p><span class="mao_qyzxxx_ces">服务地点</span><span class="mao_qyzxxx_rces">深圳市罗湖区桂园街道办事处</span></p>
            <p><span class="mao_qyzxxx_ces">服务时间</span><span class="mao_qyzxxx_rces">2017-07-19</span></p>
            <p><span class="mao_qyzxxx_ces">服务方式</span><span class="mao_qyzxxx_rces">上门服务</span></p>
            <p><span class="mao_qyzxxx_ces">录入人</span><span class="mao_qyzxxx_rces">黄志远</span></p>
            <p><span class="mao_qyzxxx_ces">录入时间</span><span class="mao_qyzxxx_rces">2017-07-19</span></p>
        </div>
        <div class="mao_mffsm">
            服务说明
        </div>
    </div>
</template>

<script>
import { Header,Button } from 'mint-ui';
    export default　{
        components:{
            "mt-header":Header,
            "mt-button":Button,
        }
    }
</script>

<style scoped>
    .mao_fwxqfwx{}
    .mao_fwxqfwx .mint-header{background-color:#fff;color:#26a2ff;font-size:0.33rem;z-index:5;height:1rem;}
    .mao_fwxqfwx .mint-header .mint-button{height:.96rem;}
    .mao_fwxqfwx .mao_fwxqfwx_tit{height:1.8rem;width:100%;background-color:#26a2ff;line-height:1.8rem;}
    .mao_fwxqfwx .mao_fwxqfwx_tit .mao_fwxqfwx_tubiao{width:.6rem;height:.6rem;float:left;margin:0 .4rem;}
    .mao_fwxqfwx .mao_fwxqfwx_tit .mao_fwxqfwx_tubiao img{width:100%;height:100%;}
    .mao_fwxqfwx .mao_fwxqfwx_tit p{font-size:.37rem;color:#fff;}
    .mao_fwxqfwx .mao_xxxx_tit{height:1rem;font-size:.37rem;line-height:1rem;color:#26a2ff;padding-left:.4rem;border-bottom:1px solid #eee;}
    .mao_fwxqfwx .mao_qyzxxx{height:100%;margin-top:.2rem;padding-left:.4rem;border-bottom:.2rem solid #ccc;}
    .mao_fwxqfwx .mao_qyzxxx p{height:.8rem;line-height:.8rem;font-size:.33rem;display:flex;}
    .mao_fwxqfwx .mao_qyzxxx p .mao_qyzxxx_ces{flex:1;}
    .mao_fwxqfwx .mao_qyzxxx p .mao_qyzxxx_rces{flex:2;}
    .mao_fwxqfwx .mao_mffsm{color:#26a2ff;height:.8rem;line-height:.8rem;font-size:.33rem;padding-left:.4rem;border-bottom:1px solid #ccc;}
</style>