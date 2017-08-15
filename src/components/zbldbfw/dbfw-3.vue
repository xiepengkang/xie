<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">

    <div class="header">
        <mt-header title="添加服务记录">
            <router-link to="/dbfw-2" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>

    <div class="body">
        <mt-cell title="服务对象">
            <span class="marginRight">{{zbl_signPack.personName}}</span>
        </mt-cell>
        <mt-cell title="服务包">
            <span class="marginRight">{{zbl_signPack.spPackName}}</span>
        </mt-cell>
        <mt-cell title="服务项">
            <span class="marginRight">{{zbl_signPack.serviceName}}</span>
        </mt-cell>

        <mt-cell title="服务地址" is-link @click.native='$router.push("/dbfw-3-1")'>
            <span v-show='!zbl_address.decText'>请选择地址</span>
            <span v-show='zbl_address.decText' class="hideMore">{{zbl_address.decText}}</span>
        </mt-cell>

        <mt-cell title="服务人" is-link @click.native='sheetVisible = true'>
            <span class="serverName">请选择服务人</span>
        </mt-cell>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

        <mt-cell title="服务方式" is-link @click.native='sheetVisible2 = true'>
            <span class="serverWay">请选择服务方式</span>
        </mt-cell>
        <mt-actionsheet :actions="actions2" v-model="sheetVisible2"></mt-actionsheet>

        <mt-cell title="服务时间" is-link class="selectTime">
            <span class="selectedTime">{{serverTime}}</span>
        </mt-cell>

        <mt-cell title="备注说明" is-link @click.native='$router.push("/dbfw-4")'>
            <span class="">选择模板</span>
        </mt-cell>

        <mt-field placeholder="输入..." type="textarea" rows="4" v-model="markCont" autofocus></mt-field>

        <mt-button @click.native="saveSubmit" size="small">保存</mt-button>
    </div>
</div>
</template>
<script>
import {
    Toast
} from 'mint-ui'
import {
    zbl_datePickerIndex
} from '../../assets/js/zbl_datePickerIndex.js'
import {
    mapActions,
    mapState
} from 'vuex'
import {
    commonAjax,
} from '../../api/api.js'
import {
    Actionsheet
} from 'mint-ui'
export default {
    data: function() {
        return {
            searchKey: '',
            serverTime: '',
            serverWay: '',
            markCont: '',
            actions: [],
            actions2: [{
                'name': '电话服务',
                'method': this.serverWay
            }, {
                'name': '上门服务',
                'method': this.serverWay
            }],
            sheetVisible: false,
            sheetVisible2: false,
            memberId: '',
            createUser: '',
        }
    },
    computed: {
        ...mapState({
            zbl_address: state => state.zbl_address,
            zbl_signPack: state => state.zbl_signPack
        })
    },
    components: {},
    methods: {
        selected(e) {
            document.querySelector('.serverName').innerText = e.name
            this.memberId = e.memberId
            this.createUser = e.createUser
        },
        serverWay(e) {
            document.querySelector('.serverWay').innerText = e.name
        },
        saveSubmit() {
            if (this.zbl_address.decText) {
                if (document.querySelector('.serverName').innerText != '请选择服务人') {
                    if (document.querySelector('.serverWay').innerText != '请选择服务方式') {
                        //提交接口
                        if (document.querySelector('.serverWay').innerText === '上门服务') {
                            this.serverWay = '01'
                        } else {
                            this.serverWay = '02'
                        }
                        let params = [{
                            "mpiId": this.zbl_signPack.mpiId,
                            "serviceId": 2,
                            "exeDate": document.querySelector('.selectedTime').innerText,
                            "exeUserType": 2,
                            "serviceName": this.zbl_signPack.serviceName,
                            "createUserName": document.querySelector('.serverName').innerText,
                            "personName": this.zbl_signPack.personName,
                            "createUser": this.createUser,
                            "spServiceId": this.zbl_signPack.spServiceId,
                            "spPackName": this.zbl_signPack.spPackName,
                            "exeGisLat": "4.9E-324",
                            "teamId": this.zbl_signPack.teamId,
                            "exeWay": this.serverWay,
                            "exeGisLon": "4.9E-324",
                            "orgId": "223d803d-a8d8-42e9-b051-46e3be783346", //待确定
                            "exeUserId": this.memberId,
                            "exeUserName": document.querySelector('.serverName').innerText,
                            "exeAddr": this.zbl_address.decText,
                            "spPackId": this.zbl_signPack.spPackId,
                            "exeDesc": this.markCont
                        }]
                        console.log(params)
                        commonAjax(params, 'pcn.pcnServiceExecService', 'save').then(res => {
                            if (res.code === 200) {
                                console.log(res.body)
                                this.$router.push('/xie_home')
//                              Toast('保存成功！')
                            }
                        })
                    } else {
                        Toast({
                            message: '请选择服务方式',
                            duration: 1000
                        })
                    }
                } else {
                    Toast({
                        message: '请选择服务人',
                        duration: 1000
                    })
                }
            } else {
                Toast({
                    message: '请选择服务地址',
                    duration: 1000
                })
            }
        },
        ...mapActions([])
    },
    created() {
        //弹框选择对象
        this.zbl_signPack.memberInfo.forEach(item => {
            let obj = {}
            obj.name = item.memberName
            obj.method = this.selected
            obj.memberId = item.memberId
            obj.createUser = item.createUser
            this.actions.push(obj)
        })
    },
    mounted() {
        zbl_datePickerIndex(document.querySelector('.selectTime'))
        //获取当前时间并格式化
        let nowDate = new Date()
        this.serverTime = nowDate.getFullYear() + "-" + (nowDate.getMonth() + 1) + "-" + nowDate.getDay()
    }
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
    .marginRight {
        margin-right: 25px;
    }
    .mint-button {
        display: block;
        width: 80%;
        height: 1rem;
        margin: .5rem auto;
        margin-bottom: .2rem;
        color: #fff;
        background-color: mainColor
        cursor: pointer;
        font-size:fontSize;
    }
    .hideMore {  /*三点省略隐藏代码段*/
        display: inline-block;
        width: 4.5rem;
        text-align:right;
        overflow:hidden;
        word-break:keep-all;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
}
.divide {
    height: 6px;
    background-color: #F2F2F2;
}
</style>
