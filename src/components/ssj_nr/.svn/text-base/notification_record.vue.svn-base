<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">
    <div class="header">
        <mt-header title="通知记录">
            <router-link to="/notifyResidents/chooseNotifyType" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="body">
        <ul>
        	<li v-for="item in items" @click='gotoNotifyDetails($event,item.nrid,item.notifyTypeName,item.notifyTime,item.notifyCount,item.content)'>
        		<div>
	        		<span>
	        			{{item.notifyTypeName}}<b>共{{item.notifyCount}}人</b>
	        		</span>
	        		<em>创建时间：{{item.notifyTime}}</em>
	        	</div>
        	</li>
        </ul>
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
            items:[]
        }
    },
    computed: {
        ...mapState({
            ssj_notifyDetails: state => state.ssj_notifyDetails
        })
    },
    components: {
    	//'mt-cell':Cell
    },
    methods: {
        getNotificationRecordList() {
            let params = [{"pageSize":20,"pageNo":1}]
            commonAjax(params, 'pcn.pcnNotifyResidentsService', 'getAllPcnNotifyResidents').then(res => {
                if (res.code === 200) {
                    this.items = res.body.list
                }
            })
        },
        gotoNotifyDetails(e,id,name,time,count,content) {
            let tempArr = {
            	"id":id,
            	"name":name,
            	"time":time,
            	"count":count,
            	"content":content
            }
            this.ssj_getNotifyDetails(tempArr)
            this.$router.push('/notifyResidents/notifyDetails')
        },
        //点击列表单项
        getNotificationDetails(e) {
            /*this.$refs.signPacks.forEach(item => {
                item.classList.remove('noFinishPacksCover')
            })
            e.currentTarget.classList.add('noFinishPacksCover')*/

            let params = [{"nrid":"35"}]
            //let spPackName = e.currentTarget.id.split('_')[1]
            commonAjax(params, 'pcn.pcnNotifyTplService', 'findPcnNotifyTplsForApp').then(res => {
                if (res.code === 200) {
                    if (res.body.list.length) {
                        this.signPackList = res.body.list
                        //this.zbl_getSignPack([{'name':'tagName','value':tagName}])
                    } else {
                        this.signPackList = []
                        Toast({
                            message: '暂无结果',
                            duration: 500
                        })
                    }
                }
            })
        },
        ...mapActions(['ssj_getNotifyDetails'])
    },
    created() {},
    mounted() {
        this.getNotificationRecordList()
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
.body .mess_tem_content{width:100%;height:100%;padding:10px;box-sizing:border-box;font-size:.3rem;line-height:.45rem;border:none;}*/
.body ul li{padding:0 10px;background-color:#fff;}
.body ul li div{border-bottom:1px solid #e1e1e1;padding:5px 0;}
.body ul li span{display:block;height:0.6rem;line-height:0.56rem;font-size:0.38rem;color:#276fea;margin-bottom:6px;}
.body ul li span b{font-weight:normal;font-size:0.3rem;color:#666;margin-left:8px;}
.body ul li em{display:block;height:1.2rem;height:0.4rem;line-height:0.34rem;font-size:0.3rem;color:#666;}






</style>




