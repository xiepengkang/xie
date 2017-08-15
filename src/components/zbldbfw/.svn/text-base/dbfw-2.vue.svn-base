<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">

    <div class="header">
        <mt-header title="待服务居民">
            <router-link to="/dbfw-1" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>

    <div class="body">
        <mt-search :value='searchKey' @input='search' placeholder='输入居民信息搜索'></mt-search>
        <ul class="itemList">
            <li class="cbafter" v-for='item in zbl_signPack.resBody' @click='selectPackCont' :id='item.personName + "_" + item.teamId + "_" + item.mpiId' v-show='filterTrue'>
                <div class="leftImg">
                    <img src="../../assets/img/zbl_avatar.png" alt="" width="40" height="40">
                </div>
                <div class="rightText cbafter">
                    <p>{{item.personName}}<span class="age">{{item.dob | ageFilter}}岁</span><span class="remainTime">可享受{{item.remainTimes}}次</span></p>
                    <p class="address">{{item.provinceText + item.cityText + item.districtText + item.streetText + item.address}}</p>
                    <p v-if='item.exeDt'>上次服务时间{{item.exeDt.split(' ')[0]}}</p>
                </div>
                <div class="divide"></div>
            </li>

            <li class="cbafter" v-for='item in filterArr' @click='selectPackCont' :id='item.personName + "_" + item.teamId + "_" + item.mpiId' v-show='!filterTrue'>
                <div class="leftImg">
                    <img src="../../assets/img/zbl_avatar.png" alt="" width="40" height="40">
                </div>
                <div class="rightText cbafter">
                    <p>{{item.personName}}<span class="age">{{item.dob | ageFilter}}岁</span><span class="remainTime">可享受{{item.remainTimes}}次</span></p>
                    <p class="address">{{item.provinceText + item.cityText + item.districtText + item.streetText + item.address}}</p>
                    <p>上次服务时间{{item.exeDt.split(' ')[0]}}</p>
                </div>
                <div class="divide"></div>
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
import {
    requestLogList
} from '../../api/api'
import {
    mapActions,
    mapState
} from 'vuex'
import {
    commonAjax,
} from '../../api/api.js'
export default {
    data: function() {
        return {
            searchKey: '',
            filterTrue: true,
            filterArr: []
        }
    },
    filters: {
        ageFilter(value) {
            var nowDate = new Date()
            var nowYear = nowDate.getFullYear()
            var oldnl = value.split('-')[0]
            return nowYear - oldnl
        }
    },
    computed: {
        ...mapState({
            zbl_signPack: state => state.zbl_signPack
        })
    },
    components: {},
    methods: {
        //本地搜索并展示结果
        search(e) {
            if(e.length) {
                this.filterArr = this.zbl_signPack.resBody.filter(item => {
                    return item.personName.indexOf(e) >= 0
                })
                this.filterTrue = false
            } else {
                this.filterTrue = true
            }

        },
        //选择列项之后跳转
        selectPackCont(e) {
            // let params = ['11']
            let personName = e.currentTarget.id.split('_')[0]
            let teamId = e.currentTarget.id.split('_')[1]
            let mpiId = e.currentTarget.id.split('_')[2]
            let memberInfo = []
            let params = [teamId]
            commonAjax(params, 'pcn.pcnTeamMemberService', 'findList').then(res => {
                if (res.code === 200) {
                    memberInfo = res.body
                }
            }).then(() => {
                let tempArr = [{
                        'name': 'personName',
                        'value': personName
                    },
                    {
                        'name': 'memberInfo',
                        'value': memberInfo
                    },
                    {
                        'name': 'teamId',
                        'value': teamId
                    },
                    {
                        'name': 'mpiId',
                        'value': mpiId
                    },
                ]
                this.zbl_getSignPack(tempArr)
                this.zbl_selectAddress({})
                this.$router.push('/dbfw-3')
            })
        },
        ...mapActions(['zbl_getSignPack','zbl_selectAddress'])
    },
    created() {},
    mounted() {
    	console.log(this.zbl_signPack.resBody)
    },
    beforeRouteLeave(to, from, next) {
        to.meta.keepAlive = false
        next()
    },
}
</script>

<style lang='stylus' scoped>
@import "../../assets/css/zbldbfw_style.css"
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
    .itemList {
        li {
            font-size: .3rem;
            line-height: 1.5;
            background-color: #fff;
        }
        .leftImg {
            float: left;
            // width: 40px;
            // margin: .25rem;
            margin-left: .2rem;
            margin-top: .7rem;
        }
        .rightText {
            float: left;
            width: 80%;
            padding: .3rem 0;
            margin-left: .25rem;
                margin-top: .2rem;
            .age {
                margin-left: .15rem;
                font-size: .25rem;
                color: greyFont;
            }
            .remainTime {
                float: right;
                margin-right: 10px;
            }
            .address {
                margin-right: 10px;
                overflow:hidden;
                word-break:keep-all;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
        }
    }
}
.divide {
    // border-bottom: 4px solid #F2F2F2;
    height: 10px;
    background-color: #F2F2F2;
}
</style>
