<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">

    <div class="header">
        <mt-header title="家医服务">
            <a slot="left" @click='$router.go(-1)'>
                <mt-button icon="back"></mt-button>
            </a>
            <a slot="right" @click='$router.push("/zbl_jmqy")'>
                <mt-button class="smallbtn">+</mt-button>
            </a>
        </mt-header>
    </div>

    <div class="body">
        <!-- <div class="green"></div> -->
        <div class="avatarHeader cbafter">
            <div class="items fl" v-for="item in queryFamilyArr">
                <img :src="imgReqUrl + item.avatar" v-if='item.avatar' class="avatar" @click='selectPerson' :id='item.mpiId'>
                <img src="../../assets/img/zbl_avatar.png" v-else class="avatar" @click='selectPerson' :id='item.mpiId'>
                <p>{{item.personName}}</p>
            </div>
        </div>

        <div class="queryIcon" @click="weChat">
            <img src="../../assets/img/zbl_query.png">
            <p >咨询互动</p>
        </div>

        <div class="container">
            <mt-cell title="签约医生" is-link @click.native='lookSignedDoct'>
                <span style="">{{this.docInfo.name + ' ' +this.docInfo.teamName}}</span>
            </mt-cell>
            <mt-cell title="签约机构">
                <span style="margin-right:25px">{{this.docInfo.orgName}}</span>
            </mt-cell>
            <mt-cell title="签约周期">
                <span style="margin-right:25px">{{this.docInfo.beginDate+'--'+this.docInfo.endDate}}</span>
            </mt-cell>
            <mt-cell title="签约协议" is-link @click.native='lookXieyi'>
                <span style=''>请查看</span>
            </mt-cell>
            <mt-cell title="签约服务包" is-link @click.native='lookServerPackages'>
                <span style="">请查看</span>
            </mt-cell>
        </div>
    </div>
</div>
</template>
<script>
import {
    MessageBox,
    Toast,Indicator
} from 'mint-ui'
import {
    commonAjax,
    commonAjaxKy
} from '../../api/api'
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    data: function() {
        return {
            qianyueyisheng: '',
            qianyuejigou: '',
            qianyuezhouqi: '',
            docInfo: {},
            queryFamilyArr: [],
            imgReqUrl: 'http://122.224.131.235:9088/hcn-web/upload/',
        }
    },
    computed: {
        ...mapState({
            zbl_personInfo: state => state.zbl_personInfo
        }),
    },
    components: {},
    methods: {
        //第1个参数表示租户，第2个参数表示登录用户id或者个人索引(mpiId),第三个参数：0表示
        //非本人(非本人的时候第二个参数传家庭成员主索引mpiId)，1本人(本人的时候第二个参数传用户id(登陆用户))
        getAjax() {
            let params2 = []
            if(sessionStorage.getItem('zbl_routerFlag') === '1') {
                params2 = ["hcn.shenzhen", this.zbl_personInfo.mpiId, "0"]
            } else {
                params2 = ["hcn.shenzhen", this.queryFamilyArr[0].mpiId, "0"]
            }
            // console.log(sessionStorage.getItem('zbl_routerFlag'))
            Indicator.open('加载中...')
            commonAjaxKy(JSON.stringify(params2), 'pcn.residentSignService', 'querySignInfo').then(res => {
                if (res.code === 200) {
                    Indicator.close()
                    this.docInfo = res.body.docInfo
                    sessionStorage.removeItem('zbl_routerFlag')
                    // console.log(sessionStorage.getItem('zbl_routerFlag'))
                } else {
                    Indicator.close()
                    MessageBox('提示', '请求超时,请重试')
                }
            })
        },
        lookSignedDoct() {
            // ["hcn.zhongshan","84","8376cb57-71ea-4be2-89ab-aab753df27a2"]
            let params = ["hcn.shenzhen", this.docInfo.teamId, this.docInfo.doctorId]
            commonAjax(params, 'pcn.residentSignService', 'getDoctorDetail').then(res => {
                if (res.code === 200) {
                    let obj = {}
                    obj.resBody = res.body
                    obj.teamId = this.docInfo.teamId
                    obj.selectedTeamName = this.docInfo.teamName
                    obj.homeTeamOrgName = this.docInfo.orgName
                    obj.requestTeamInfoParams = params.slice(1)
                    this.getDoctorDetail(JSON.stringify(obj))
                    // console.log(obj)
                    this.$router.push('/qyxq_doctordetail')
                }
            })
        },
        lookServerPackages() {
            // let params = ["e64299249f7b410991cc17b5d81d67e4"]
            let params = [this.docInfo.mpiId]
            // console.log(params)
            commonAjax(params, 'pcn.pcnSignResidentPackService', 'getSignResidentPack').then(res => {
                if (res.code === 200) {
                    // console.log(res.body)
                    sessionStorage.setItem('zbl_signedPackages', JSON.stringify(res.body))
                    this.$router.push('/qyxq_signedPackage')
                }
            })
        },
        lookXieyi() {
            // [{"signId":"8","mpiId":"","teamId":""}]
            let obj = {}
            obj.signId = this.docInfo.signId
            let params = [obj]
            commonAjax(params, 'pcn.signProtocalService', 'getSignProtocal').then(res => {
                if (res.code === 200) {
                    // console.log(res.body)
                    this.xieyiCont(JSON.stringify(res.body.protocalText))
                    this.$router.push('/qyxq_xieyi')
                }
            })
        },
        weChat(){
        	this.$router.push({
				path: "/jmzx"
			})
        },
        selectPerson(e) {
            let avatarImgs = document.querySelectorAll('.avatarHeader .avatar')
            for (let i = 0; i < avatarImgs.length; i++) {
                avatarImgs[i].classList.remove('selected')
            }
            e.currentTarget.classList.add('selected')
            let params = ["hcn.shenzhen", e.currentTarget.id, "0"]
            commonAjaxKy(JSON.stringify(params), 'pcn.residentSignService', 'querySignInfo').then(res => {
                if (res.code === 200) {
                    this.docInfo = res.body.docInfo
                }
            })
        },
        ...mapActions(['xieyiCont', 'getDoctorDetail'])
    },
    created() {

    },
    mounted() {
        let params = ["hcn.shenzhen", JSON.parse(sessionStorage.getItem("userInfo")).body.userId]
        commonAjaxKy(JSON.stringify(params), 'pcn.residentSignService', 'queryFamily').then(res => {
            if (res.code === 200) {
                this.queryFamilyArr = res.body.filter(item => {
                    return item.status === '2'
                })
                this.$nextTick(() => {
                    if(sessionStorage.getItem('zbl_routerFlag') === '1') {
                        document.getElementById(this.zbl_personInfo.mpiId).classList.add('selected')
                    }
                    else {
                        document.querySelectorAll('.avatarHeader .avatar')[0].classList.add('selected')
                    }
                })
            }
        }).then(() => {
            this.getAjax()
        })
    },
    beforeRouteEnter(to,from,next) {
        if(from.path === '/zbl_jmqy') {
            sessionStorage.setItem('zbl_routerFlag','1')
        } else {
            sessionStorage.setItem('zbl_routerFlag','2')
        }
        next()
    }
}
</script>

<style lang='stylus' scoped>
mainColor = #35B46F
greyFont = #ADADAD
fontSize = .4rem
.header {
    .mint-header {
        height: 1rem;
        font-size: .4rem;
        background-color: mainColor;
    }
    .smallbtn {
        font-size: .8rem;
    }
}
.body {
    .green {
        height: .4rem;
        background-color: mainColor;
    }
    .avatarHeader {
        background-color: #fff;
        padding: .3rem;
        .items {
            margin: 0 .3rem;
            .avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .selected {
                transform: scale(1.5,1.5);
                transition: 1.6s transfrom;
                z-index: 666;
                border: 1px solid lightgreen;
            }
            p {
                margin-top: 10px;
                font-size: .3rem;
            }
        }
    }
    .queryIcon {
        padding: 0.3rem;
        background-color: #fff;
        margin: 10px 0;
        img {
            width: 30px;
            height: 30px;
            margin-left: 10px;
        }
        p {
            font-size: .3rem;
        }
    }
}
</style>
