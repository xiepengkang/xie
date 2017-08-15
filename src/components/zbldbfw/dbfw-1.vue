<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">

    <div class="header">
        <mt-header title="待办服务">
            <router-link to="/xie_home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>

    <div class="body">
        <div class="container cbafter">
            <div class="leftPart">
                <ul>
                    <li v-for='item in teamNoFinishedSignPack' class="noFinishPacks" @click='selectSignPack' ref='signPacks' :id='item.spPackId + "_" + item.spPackName'>
                        <span>{{item.spPackName}}</span>
                    </li>
                </ul>
            </div>
            <div class="rightPart">
                <ul class="content">
                    <li v-for='item in signPackList' class="signPackList cbafter" @click='selectSignPackList' :id='item.spServiceId + "_" + item.spPackId + "_" + item.serviceName'>
                        <span>{{item.serviceName}}</span><span class="personNum">{{item.personNum}}人</span>
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
export default {
    data: function() {
        return {
            teamNoFinishedSignPack: [],
            signPackList: [],
        }
    },
    computed: {
        ...mapState({
            zbl_signPack: state => state.zbl_signPack
        })
    },
    components: {},
    methods: {
        //本页面加载时获取左侧栏列表数据
        queryTeamNoFinishedSignPack() {
            let params = ['']
            commonAjax(params, 'pcn.pcnSignPackService', 'queryTeamNoFinishedSignPack').then(res => {
                if (res.code === 200) {
                    console.log(res.body)
                    this.teamNoFinishedSignPack = res.body
                }
            })
        },
        //点击左侧栏列表时请求获取右侧数据
        selectSignPack(e) {
            this.$refs.signPacks.forEach(item => {
                item.classList.remove('noFinishPacksCover')
            })
            e.currentTarget.classList.add('noFinishPacksCover')

            let params = [{
                "spPackId": e.currentTarget.id.split('_')[0],
                "teamId": "11"
            }]
            let spPackName = e.currentTarget.id.split('_')[1]
            commonAjax(params, 'pcn.pcnSignServiceService', 'queryNoFinishedSignPackService').then(res => {
                if (res.code === 200) {
                    if (res.body.length) {
                        this.signPackList = res.body
                        this.zbl_getSignPack([{'name':'spPackName','value':spPackName}])
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
        selectSignPackList(e) {
            let params = [{
                "spServiceId": e.currentTarget.id.split('_')[0],
                "spPackId": e.currentTarget.id.split('_')[1],
                "teamId": ""
            }]
            let spServiceId = e.currentTarget.id.split('_')[0],
            spPackId = e.currentTarget.id.split('_')[1],
            serviceName = e.currentTarget.id.split('_')[2]
            commonAjax(params, 'pcn.mpiDemographicinfoService', 'getServiceNoExecMpiList').then(res => {
                if (res.code === 200) {
                	console.log(res.body)
                    let tempArr = [
                        {'name':'resBody','value':res.body},
                        {'name':'spServiceId','value':spServiceId},
                        {'name':'spPackId','value':spPackId},
                        {'name':'serviceName','value':serviceName},
                    ]
                    this.zbl_getSignPack(tempArr)
                    this.$router.push('/dbfw-2')
            }
        })
    },
        ...mapActions(['zbl_getSignPack'])
    },
    created() {},
    mounted() {
        this.queryTeamNoFinishedSignPack()
    },
}
</script>

<style lang='stylus' scoped>
mainColor = #00CDFF
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
