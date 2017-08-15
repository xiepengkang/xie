<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">
    <div class="header">
        <mt-header title="消息通知模板">
            <router-link to="/notifyResidents/chooseNotifyType" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="" slot="right" class="next_step" @click='$router.push("/notifyResidents/selectResidents")'>下一步</mt-button>
        </mt-header>
    </div>
    <div class="body">
        <div class="container cbafter">
            <textarea class="mess_tem_content">{{ssj_messageTemplateInfo.tplContent}}</textarea>
        </div>
    </div>
</div>
</template>
<script>
import {
    MessageBox,
    Toast
} from 'mint-ui'
import {
    mapActions,mapState
} from 'vuex'
import {
    commonAjax,
} from '../../api/api.js'
export default {
    data: function() {
        return {
            
        }
    },
    computed: {
        ...mapState({
            ssj_messageTemplateInfo: state => state.ssj_messageTemplateInfo
        })
    },
    components: {},
    methods: {
        
    },
    created() {},
    mounted() {},
}
</script>

<style lang='stylus' scoped>
mainColor = #23b2f6
greyFont = #ADADAD
fontSize = .4rem
.header {
    .mint-header {
        height: 1rem;
        font-size: fontSize;
        background-color: #fff;
        color: mainColor;
        border-bottom: 1px solid #ddd;
		
    }
    .next_step{font-size:0.3rem;}
    
}
.body .container{width:100%;position:absolute;top:1rem;bottom:0;background-color:#fff;}
.body .mess_tem_content{width:100%;height:100%;padding:10px;box-sizing:border-box;font-size:.3rem;line-height:.45rem;border:none;}

</style>
