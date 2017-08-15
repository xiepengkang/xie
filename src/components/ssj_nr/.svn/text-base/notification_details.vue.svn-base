<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">
    <div class="header">
        <mt-header title="通知详情">
            <router-link to="/notifyResidents/notifyRecord" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="body" >
    	<mt-cell title="类型" value="">{{ssj_notifyDetails.name}}&nbsp;&nbsp;</mt-cell>
    	<mt-cell title="时间" value="">{{ssj_notifyDetails.time}}&nbsp;&nbsp;</mt-cell>
    	<mt-cell title="对象" value="" :to="'/notifyResidents/notifyPersonList/'+ssj_notifyDetails.id" :id='ssj_notifyDetails.id + "_"' is-link >共{{ssj_notifyDetails.count}}人</mt-cell>
    	<!--<mt-cell title="对象" value="" to='"/notify_personList/"+ssj_notifyDetails.id' is-link >共{{ssj_notifyDetails.count}}人</mt-cell>-->
		<textarea>{{ssj_notifyDetails.content}}</textarea>
    </div>
</div>
</template>
<script>
import {
    MessageBox,
    Toast
} from 'mint-ui'
import { Cell } from 'mint-ui';
import {
    mapActions,mapState
} from 'vuex'
import {
    commonAjax,
} from '../../api/api.js'

export default {
    data: function() {
        return {
            detailsList:[]
        }
    },
    computed: {
        ...mapState({
            ssj_notifyDetails: state => state.ssj_notifyDetails
        })
    },
    components: {
    	'mt-cell':Cell
    },
    methods: {
        //获取列表详情
        getNotificationDetails(e) {
            /*this.$refs.signPacks.forEach(item => {
                item.classList.remove('noFinishPacksCover')
            })
            e.currentTarget.classList.add('noFinishPacksCover')*/

            let params = [{"nrid":this.$route.params.id}]
            //let spPackName = e.currentTarget.id.split('_')[1]
            commonAjax(params, 'pcn.pcnNotifyTplService', 'findPcnNotifyTplsForApp').then(res => {
                if (res.code === 200) {
                    if (res.body.list.length) {
                        this.detailsList = res.body.list
                        //this.zbl_getSignPack([{'name':'tagName','value':tagName}])
                    } else {
                        this.detailsList = []
                        Toast({
                            message: '暂无结果',
                            duration: 500
                        })
                    }
                }
            })
        },
    },
    created() {},
    mounted() {
        this.getNotificationDetails()
    },
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
.body{margin-top:-1px;}
.body .mess_tem_content{width:100%;height:100%;padding:10px;box-sizing:border-box;font-size:.3rem;line-height:.45rem;border:none;}*/
.body ul li{padding:0 10px;background-color:#fff;}
.body ul li div{border-bottom:1px solid #e1e1e1;padding:5px 0;}
.body ul li span{display:block;height:0.6rem;line-height:0.56rem;font-size:0.38rem;color:#276fea;margin-bottom:6px;}
.body ul li span b{font-weight:normal;font-size:0.3rem;color:#666;margin-left:8px;}
.body ul li em{display:block;height:1.2rem;height:0.4rem;line-height:0.34rem;font-size:0.3rem;color:#666;}
.body textarea{width:100%;height:auto;min-height:120px;padding:10px;box-sizing:border-box;font-size:.3rem;line-height:.45rem;border:none;overflow:hidden;margin-top:10px;}





</style>




