$<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">
    <div class="header">
        <mt-header title="通知居民">
            <router-link to="/xie_home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="" slot="right" class="record" @click='$router.push("/notifyResidents/notifyRecord")'>记录</mt-button>
        </mt-header>
    </div>

    <div class="body">
        <div class="container cbafter">
            <div class="leftPart">
                <ul id="subnav"> 
                    <!--<li v-for='(item,index) in teamNoFinishedSignPack' :class="[index==0?'noFinishPacks menu noFinishPacksCover active':'noFinishPacks menu']" @click='selectSignPack' ref='signPacks' :id='item.tagCode + "_" + item.tagName'>-->
                    <li v-for='(item,index) in teamNoFinishedSignPack' class="noFinishPacks" @click='selectSignPack' ref='signPacks' :id='item.tagCode + "_" + item.tagName'>    
                        <span>{{item.tagName}}</span>
                    </li>
                </ul>
            </div>
            <div class="rightPart">
                <ul class="content">
                    <li v-for='item in signPackList' class="signPackList cbafter" @click='selectSignPackList(item.tplId)' >
                        <span>{{item.tplName}}</span>
                        <i class="icon-right"></i>
                    </li>
                </ul>
            </div>
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
/*import $ from 'jquery'*/
export default {
    data: function() {
        return {
            teamNoFinishedSignPack: [''],
            signPackList: [],
        }
    },
    computed: {
        ...mapState({
            ssj_messageTemplateInfo: state => state.ssj_messageTemplateInfo
        })
    },
    created(){
    	//console.log(document.getElementById('subnav').children[0]);
    	this.$nextTick(() => {
		  	console.log(this.$refs.signPacks[0])
		  	//this.$refs.signPacks[0].click();
		})
    	
    },
    components: {},
    methods: {
        //本页面加载时获取左侧栏列表数据
        queryTeamNoFinishedSignPack() {
            let params = ["notifyType"]
            commonAjax(params, 'pcn.pcnTagsService', 'findList').then(res => {
                if (res.code === 200) {
                    this.teamNoFinishedSignPack = res.body
                    //$('#subnav li:first').attr('notifytype',res.body[0].tagCode);
                    //selectSignPack(e,0);
                    //$('#subnav li:first').trigger('click');
                    /*let params2 = [{
		                "notifyType": $('#subnav li:first').attr('notifytype'),
		            }]
                    commonAjax(params2, 'pcn.pcnNotifyTplService', 'findPcnNotifyTplsForApp').then(res => {
		                if (res.code === 200) {
		                    if (res.body.list.length) {
		                        this.signPackList = res.body.list
		                    } else {
		                        this.signPackList = []
		                        Toast({
		                            message: '暂无结果',
		                            duration: 500
		                        })
		                    }
		                }
		            })*/
                    
                }
            })
        },
        //点击左侧栏列表时请求获取右侧数据
        selectSignPack(e) {
            this.$refs.signPacks.forEach(item => {
                item.classList.remove('noFinishPacksCover')
            })
            e.currentTarget.classList.add('noFinishPacksCover')
            var notifyType = e.currentTarget.id.split('_')[0];
            let params = [{
                "notifyType": notifyType,
            }]
            commonAjax(params, 'pcn.pcnNotifyTplService', 'findPcnNotifyTplsForApp').then(res => {
                if (res.code === 200) {
                    if (res.body.list.length) {
                        this.signPackList = res.body.list
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
        selectSignPackList(tplId) {
            let params = [{"tplId":tplId}]
            //let spServiceId = e.currentTarget.id.split('_')[0],
            //spPackId = e.currentTarget.id.split('_')[1],
            //serviceName = e.currentTarget.id.split('_')[2]
            commonAjax(params, 'pcn.pcnNotifyTplService', 'getDetailInfo').then(res => {
                if (res.code === 200) {
                    /*let tempArr = [
                        {'value':res.body.tplContent}
                    ]*/
                    let tempArr = {
                    	"notifyType":res.body.notifyType ,
                    	"tplContent":res.body.tplContent
                    }
                    this.ssj_setMessageTemplateInfo(tempArr)
                    this.$router.push('/notifyResidents/messageNotifyTemplate')
	            }
	        })
	    },
        ...mapActions(['ssj_setMessageTemplateInfo'])
    },
    mounted() {
        
        this.queryTeamNoFinishedSignPack();
        /*console.log(document.getElementsByClassName('active'));
        document.getElementsByClassName('noFinishPacksCover').click;*/
        //console.log(document.getElementById('subnav').children[0]);
        /*console.log(document.getElementsByClassName('menu')[0]);
        document.getElementById('subnav').firstChild.click()*/
    }
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
    .record{font-size:.3rem;}
}
.body {
    .leftPart {
        width: 40%;
        height: 100vh;
        float: left;
        .noFinishPacks {
            height: 1rem;
            background: lightgrey;
            color: black;
            font-size: .3rem;
            text-align: center;
            line-height: 1rem;
            border-top: 1px solid #ddd;
        }
        .noFinishPacksCover {
            background-color: #fff;
            color: mainColor;
        }
        ul li:nth-child(1){border-top:none;}
    }
    
    .rightPart {
        width: 60%;
        height: 100vh;
        background-color: #fff;
        float: left;
        .signPackList {
            position: relative;
            padding: .25rem;
            height: .4rem;
            line-height: .4rem;
            border-bottom: 1px solid #ddd;
            font-size: .3rem;
            .personNum {
                float: right;
                margin-right: 15px;
            }
            .icon-right {
                position: absolute;
                border: 2.5px solid #ddd;
                border-bottom: 0;
                border-left: 0;
                content: " ";
                top: .45rem;
                right: 15px;
                width: .1rem;
                height: .1rem;
                -webkit-transform: translateY(-50%) rotate(45deg);
                transform: translateY(-50%) rotate(45deg);
            }
        }
        
    }
    

}
</style>
