//签约管理详情 去确认页面 第二步

<template>
<div>
	<div class="Confirmation" v-if="boxshow">
		<mt-header fixed title="确认方式">
			<mt-button slot="left"></mt-button>
		</mt-header>

		<mt-radio @change.native="select()" align="right" v-model="value" :options="options">
		</mt-radio>
	</div>

	<div class="Administration" v-if="boxopen">
		<mt-header fixed title="管理类型">
			<mt-button slot="left"></mt-button>
			<!--<mt-button slot="right" v-on:click='change'>确定</mt-button>-->
		</mt-header>

		<mt-radio @change.native="selects()" align="right" v-model="value2" :options="options2">
		</mt-radio>
		<!--<mt-checklist
        align="right"
        v-model="value2"
        :options="options2">
        </mt-checklist>
        
        <mt-checklist
        align="right"
        v-model="mvalue"
        :options="options2">
        </mt-checklist>
        
        <mt-checklist
        align="right"
        v-model="maovalue"
        :options="options2">
        </mt-checklist>-->
	</div>

	<div class="qygl_detail_yqx" v-if="boxclose">

		<mt-header fixed title="资料核实">
			<mt-button icon="back" slot="left" @click="goback()"></mt-button>
		</mt-header>
		<div class="top">
			实名制签约，请核实居民资料的真实性
		</div>

		<div class="progress">
			<div class="pro">
				<dl class="item first">
					<dt class="cir"></dt>
					<dd class="des">资料填写</dd>
				</dl>
				<dl class="item second">
					<dt class="cir">2</dt>
					<dd class="des">签约确认</dd>
				</dl>
				<dl class="item third">
					<dt class="cir">3</dt>
					<dd class="des">完成</dd>
				</dl>
			</div>
		</div>

		<div class="head">
			<div class="resident">
				<img src="../../assets/img/li_Resident.png" />
				<div class="names">
					{{list.personName}}
				</div>
				<div class="notes">
					居民签约
				</div>
			</div>
			<div class="doctor">
				<img src="../../assets/img/li_Doctor .png" />
				<div class="names">
					{{list.doctorName}}
				</div>
				<div class="notes">
					医生签约
				</div>
			</div>
		</div>

		<form action="">
			<div class="Opinion ">
				<div class="confirm ">
					确认意见
				</div>
				<div class="but">

					<div class="agree fl" @click="agree" :class="active">
						同意
					</div>
					<div class="disagree fl" @click="disagree" :class="disactive">
						不同意
					</div>
				</div>
			</div>
			<mt-cell title="确认方式" is-link @click.native="Confirmation">
				{{data}}
			</mt-cell>
			<mt-cell title="签约生效日期" :value="2007-01-01" v-if="ifshow" @click.native="openPicker" v-model="pickerValue">{{mao_baocuntime}}</mt-cell>
			<mt-datetime-picker ref="picker" type="date" v-model="pickerValue" @confirm="handleConfirm"></mt-datetime-picker>
			<mt-cell title="管理类型" v-if="ifshow" @click.native="type">{{datas}}</mt-cell>
			<div class="new">
				<textarea ref='textDec' name="" rows="" cols="" class="news" placeholder="不同签约时此项必填，最多200字" v-model="text"></textarea>
			</div>
		</form>

		<div class="bottom">
			200/<span>{{length}}</span>
		</div>
		<div class="button">
			<mt-button type="primary" @click="next">下一步</mt-button>
		</div>

	</div>
</div>
</template>

<script>
import {
	DatetimePicker,
	Navbar,
	TabItem,
	MessageBox,
	Header,
	Cell,
	Toast,
	Indicator
} from 'mint-ui'
import {
	commonAjax,
	requestConfirmPassword
}
from '../../api/api'
import {
	mapState
} from 'vuex'
import '../../assets/css/li_qygl_detail.css'
export default {
	data: function() {
		return {
			list: '',
			active: 'change',
			disactive: 'changs',
			errshow: false,
			error: '',
			value: '',
			options: [],
			value2: '',
			options2: [],
			selected: '',
			nianl: '',
			ifshow: true,
			pickerValue: '',
			text: '',
			length: '',
			boxshow: false,
			boxopen: false,
			boxclose: true,
			mao_baocuntime: '2017-07-17',
			data: '家庭',
			datas: '请选择',
			submitInfo: {},
			beginDt: '',
			queryParams: {},
			checkResult: '1',
			checkWay: '2',
			personGroup: '',
			checkWayDic: {
				"门诊": '1',
				"家庭": '2',
				"电话": '3',
				"短信": '4',
				"网络": '5',
				"其他": '9',
			},
			personGroupDic: {
				"孕产妇": '01',
				"0-6岁儿童": '02',
				"65岁以上老人": '03',
				"高血压人群": '04',
				"糖尿病人": '05',
				"重性精神疾病患者": '06',
				"肺结核患者": '07',
				"残疾人": '08',
				"计生特殊家庭": '09',
				"一般健康人群": '10'
			},
			//复选框值
			
		}
	},

	watch: {
		text(val) {
			this.length = this.text.length
		}
	},

	mounted() {
		this.Passwordvalid()
		this.submitInfo = JSON.parse(sessionStorage.getItem('submitInfo'))
		this.options = [{
					label: "门诊",
					value: "门诊"
				},
				{
					label: "家庭",
					value: "家庭"
				},
				{
					label: "电话",
					value: "电话"
				},
				{
					label: "短信",
					value: "短信"
				},
				{
					label: "网络",
					value: "网络"
				},
				{
					label: "其他",
					value: "其他"
				},
			],
			this.options2 = [{
					label: "孕产妇",
					value: "孕产妇"
				},
				{
					label: "0-6岁儿童",
					value: "0-6岁儿童"
				},
				{
					label: "65岁以上老人",
					value: "65岁以上老人"
				},
				{
					label: "高血压人群",
					value: "高血压人群"
				},
				{
					label: "糖尿病人",
					value: "糖尿病人"
				},
				{
					label: "重性精神疾病患者",
					value: "重性精神疾病患者"
				},
				{
					label: "肺结核患者",
					value: "肺结核患者"
				},
				{
					label: "残疾人",
					value: "残疾人"
				},
				{
					label: "计生特殊家庭",
					value: "计生特殊家庭"
				},
				{
					label: "一般健康人群",
					value: "一般健康人群"
				},
			]
	},

	computed: {
		...mapState(['li_applyId'])
	},

	methods: {
		//请求数据
		Passwordvalid() {
			//console.log(this.li_applyId)
			let params = [this.li_applyId[0]]
			commonAjax(params, 'pcn.residentSignService', 'getSignRecordDetail').then(res => {
				if (res.code == 200) {
					console.log(res)
					// console.log(JSON.parse(JSON.stringify(res.body)).applyPackageInfo)
					this.queryParams = JSON.parse(JSON.stringify(res.body.applySignInfo))
					this.list = res.body.applyPackageInfo
					console.log(this.list)
				}
			})
		},
		//要提交的参数
		Submitdata() {
			Indicator.open('提交数据中...');
			for (let prop in this.checkWayDic) {
				if (this.data === prop) {
					this.checkWay = this.checkWayDic[prop]
				}
			}
			for (let prop in this.personGroupDic) {
				if (this.datas === prop) {
					this.personGroup = this.personGroupDic[prop]
				}
			}
			let params = [{
				"address": this.queryParams.address,
				"personGroup": this.personGroup,
				"checkResult": this.checkResult,
				"city": this.queryParams.city,
				"isRenewal": "0",
				"orgName": this.queryParams.orgName,
				"province": this.queryParams.province,
				"resultDesc": this.$refs.textDec.value,
				"applyUser": this.queryParams.applyUser,
				"phoneNo": this.queryParams.tel,
				"doctorName": this.queryParams.doctorName,
				"street": this.queryParams.street,
				"signCycle": "1",
				"teamId": this.queryParams.teamId,
				"checkWay": this.checkWay,
				"beginDate": this.mao_baocuntime + ' 00:00:00',
				"createDt": this.mao_baocuntime + ' 00:00:00',
				"district": this.queryParams.district,
				"streetText": this.li_applyId[4],
				"applyId": this.li_applyId[0],
				'pcnApplyPack': this.list,
			}]

			// let params = [{
			// 	"address": "王平常见问题",
			// 	"applyId": 85,
			// 	"applyUser": "e64299249f7b410991cc17b5d81d67e4",
			// 	"beginDate": "2017-08-01",
			// 	"checkResult": "1",
			// 	"checkWay": "2",
			// 	"city": "440300000000",
			// 	"createDt": "2017-08-01 00:00:00",
			// 	"district": "440303000000",
			// 	"doctorName": "黄致远",
			// 	"isRenewal": "0",
			// 	"orgName": "万科五园社康中心",
			// 	"pcnApplyPack": [{
			// 		"applyId": 103,
			// 		"aserviceId": 281,
			// 		"personGroup": "10,11,12,13,14,01,02,03,04,05,06,07,08,09",
			// 		"price": "20",
			// 		"serviceId": 20,
			// 		"serviceName": "服务、评价服务包",
			// 		"tenantId": "hcn.shenzhen"
			// 	}],
			// 	"personGroup": "02",
			// 	"phoneNo": "15856987653",
			// 	"province": "440000000000",
			// 	"resultDesc": "达大厦",
			// 	"signCycle": "1",
			// 	"street": "440303001000",
			// 	"streetText": "桂园街道办事处",
			// 	"teamId": "13"
			// }]

			console.log(params)

			commonAjax(params, 'pcn.myResidentDoctorService', 'confirmationSign').then(res => {
				if (res.code === 200) {
					this.$router.push("/li_qygl_detail_qqr_three")
					Indicator.close();
				} else {
					Toast('服务器开小车啦')
				}
			})
		},

		//返回上一页
		goback() {
			this.$router.go(-1)
		},

		//同意按钮
		agree() {
			this.active = 'change'
			this.disactive = 'changs'
			this.ifshow = true
			this.checkResult = '1'
		},
		//不同意按钮
		disagree() {
			this.active = 'changs'
			this.disactive = 'change'
			this.ifshow = false
			this.checkResult = '2'
		},
		//确认方式
		Confirmation(val) {
			this.boxclose = false,
				this.boxshow = true

		},
		//管理类型
		type() {
			this.boxopen = true,
				this.boxclose = false
			
		},
		//点击下一页
		next() {
			if(this.value2.length==0){
				Toast({
				  message: '请选择管理类型',
				  position: 'bottom',
				  duration: 2000
				})
			} 
			else{
				MessageBox({
					title: '提示',
					message: '是否同意签约?',
					showCancelButton: true
				})
				MessageBox.confirm('是否同意签约?').then(action => {
					this.Submitdata()
				})
			}
			
		},
		//日期选择
		openPicker() {          
			this.$refs.picker.open()   
		},
		//单选框确认方式
		select() {
			this.boxclose = true,
			this.boxshow = false
			this.data = this.value
		},
		//单选框管理类型
		selects() {
			this.boxclose = true,
				this.boxopen = false,
				this.datas = this.value2
		},

		handleConfirm(e) {
			let arrTemp = e.toLocaleString().slice(0, 10).split(' ')[0].split('/')
			if (arrTemp[1].length === 1) {
				arrTemp[1] = '0' + arrTemp[1]
			}
			if (arrTemp[2].length === 1) {
				arrTemp[2] = '0' + arrTemp[2]
			}
			this.mao_baocuntime = arrTemp[0] + "-" + arrTemp[1] + "-" + arrTemp[2]
			console.log(this.mao_baocuntime)

		}
	},

}
</script>

<style scoped>
html,
body {
	height: 100%;
	width: 100%;
	background: #EBEBEB;
	position: relative;
}

.qygl_detail_yqx {
	background: #EBEBEB;
}

.mint-header {
	height: 1rem;
	background-color: #fff;
	color: #26a2ff;
}

.mint-button {
	height: 1.5rem;
}

.mint-header {
	font-size: 0.33rem;
}

.mintui-back {
	font-size: 0.37rem;
}

.top {
	margin-top: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #FFFAD0;
	color: #F4D275;
	height: 0.6rem;
	position: fixed;
	top: 0;
	right: 0;
}

.button {
	background: #EBEBEB;
	padding: 0.3rem 0.5rem 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
}

.mint-button--normal {
	flex: 1;
	height: 1rem;
}

.qygl_detail_yqx .progress {
	margin-top: 1.6rem;
	padding: 0.6rem 0 1.2rem 0;
}

.qygl_detail_yqx .pro {
	width: 90%;
	margin-left: 5%;
	border-top: 1px solid #d6d6d6;
	position: relative;
}

.qygl_detail_yqx .item {
	width: 1.4rem;
	position: absolute;
	top: -0.2rem;
}

.qygl_detail_yqx .first {
	left: 0.4rem;
}

.qygl_detail_yqx .first .cir {
	background-image: url(../../assets/img/li_true.png);
	background-repeat: no-repeat;
	background-size: cover;
}

.qygl_detail_yqx .first .des {
	text-align: center;
	/*color: #57c9fd;*/
	color: #fcc648;
}

.qygl_detail_yqx .cir {
	display: block;
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 50%;
	font-size: 0.28rem;
	line-height: 0.4rem;
	text-align: center;
	margin-left: 0.47rem;
}

.qygl_detail_yqx .des {
	font-size: 0.33rem;
	margin-top: 0.23rem;
	display: flex;
	justify-content: center;
}

.qygl_detail_yqx .second {
	left: 50%;
	transform: translateX(-50%);
}

.qygl_detail_yqx .second .cir {
	background-repeat: no-repeat;
	background-size: cover;
	background-color: #fcc648;
	color: #fff;
}

.qygl_detail_yqx .second .des {
	text-align: center;
	/*color: #57c9fd;*/
	color: #fcc648;
}

.qygl_detail_yqx .third {
	right: 0.4rem;
}

.qygl_detail_yqx .third .cir {
	background: #fff;
	color: #888;
}

.qygl_detail_yqx .third .des {
	text-align: center;
	color: #888;
}

.qygl_detail_yqx .head {
	margin: 0 0.3rem 0.2rem 0.3rem;
	display: flex;
	justify-content: center;
}

.qygl_detail_yqx .head img {
	height: 1.5rem;
	width: 1.5rem;
	padding: 0.3rem 0;
}

.qygl_detail_yqx .resident,
.doctor {
	flex: 1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #fff;
	border-radius: 5px;
}

.qygl_detail_yqx .resident {
	margin-right: 0.3rem;
}

.qygl_detail_yqx .notes {
	padding: 0.2rem 0;
	font-size: 0.24rem;
}

.qygl_detail_yqx .names {
	font-size: 0.33rem;
	color: #26a2ff;
}

.qygl_detail_yqx .Opinion {
	height: 1.12rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.3rem;
	background: #fff;
	font-size: 0.28rem;
}

.qygl_detail_yqx .Opinion .but {
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	width: 3rem;
	border-radius: 5px;
	border: 1px solid #26a2ff;
}

.qygl_detail_yqx .Opinion .disagree,
.agree {
	line-height: 0.8rem;
	text-align: center;
	width: 1.5rem;
	color: #26a2ff;
}

.qygl_detail_yqx .Opinion .changs {
	float: left;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	width: 1.5rem;
	color: #26a2ff;
}

.qygl_detail_yqx .Opinion .change {
	border-radius: 5px;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	width: 1.5rem;
	background: #26a2ff;
	color: #fff;
}

.qygl_detail_yqx .news {
	margin: 0.3rem;
	height: 2rem;
	flex: 1;
	background: #EBEBEB;
	font-size: 0.28rem;
}

.qygl_detail_yqx form {
	background: #fff;
}

.qygl_detail_yqx .new {
	display: flex;
}

.qygl_detail_yqx .bottom {
	padding: 0 0.3rem;
	display: flex;
	direction: rtl;
	height: 0.6rem;
	background: #fff;
	color: #888;
	font-size: 0.28rem;
}

.qygl_detail_yqx .new {
	display: flex;
}

.qygl_detail_yqx .new {
	display: flex;
}

.mint-radiolist {
	margin-top: 1rem;
}

.qygl_detail_yqx .mint-button--normal {
	font-size: 0.37rem;
}

.qygl_detail_yqx .mint-cell-wrapper {
	padding: 0 0.3rem;
}
</style>
