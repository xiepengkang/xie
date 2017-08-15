//签约管理详情  去确认页面


<template>
<div class="qygl_detail_yqx">

	<mt-header fixed title="资料核实">
		<router-link to="/qygl" slot="left">
			<mt-button icon="back"></mt-button>
		</router-link>
	</mt-header>
	<div class="top">
		实名制签约，请核实居民资料的真实性
	</div>

	<div class="progress">
		<div class="pro">
			<dl class="item first">
				<dt class="cir">1</dt>
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

	<div class="user_info">
		<div class="user fl">
			<img class="user_img" src="../../assets/img/li_Resident.png" />
		</div>
		<div class="info fl">
			<div class="name">
				{{list.personName}}
				<span class="age">{{nianl}}岁</span>
				<img class="gril" src="../../assets/img/li_gril.png" v-if="list.sex==2" />
				<img class="gril" src="../../assets/img/li_boy.png" v-if="list.sex==1" />
			</div>
			<div class="mobel">
				<div class="type">
					证件类型
					<span class="fl">居民身份证</span>
				</div>
				<div class="number fr">
					证件号码
					<!--<span><a :href="'tel:'+li_applyId[6]">{{list.tel}}</a></span>-->
					<span>{{list.tel}}</span>
				</div>
			</div>
		</div>
	</div>

	<div class="new">
		<div class="phone">
			<em class="fl">联系电话</em>
			<span class="mobile_left fl">{{list.tel}}</span>
			<img @click="tel" class="mobile_right fr" src="../../assets/img/li_phone.png" />
		</div>
		<div class="location">
			<em>居住地址</em>
			<span>{{li_applyId[1]}}{{li_applyId[2]}}{{li_applyId[3]}}{{li_applyId[4]}}{{li_applyId[5]}}{{list.orgName}}</span>
		</div>
	</div>

	<form action="">
		<mt-cell title="家庭医生" is-link value=" 亿家服务团队">
			{{list.doctorName}} {{list.teamName}}
		</mt-cell>

		<mt-cell title="服务包" is-link value="" @click.native="Service_Pack">
			{{services}}
		</mt-cell>

		<mt-cell title="签约协议" is-link value="查看" @click.native="Agreement">
		</mt-cell>

		<mt-cell title="签约机构" value="亿家社区卫生服务中心"></mt-cell>
		<mt-cell title="签约周期" value="1年">{{list.signCycle}}年</mt-cell>
		<mt-cell title="申请时间" value="">{{list.applyDt}}</mt-cell>
		<mt-cell title="签约状态" value="待确认"></mt-cell>
	</form>

	<div class="button">
		<mt-button type="primary" @click="next">下一步</mt-button>
	</div>
</div>
</template>

<script>
import {
	mapState
} from 'vuex'
import {
	commonAjax,
	requestConfirmPassword
}
from '../../api/api'
import '../../assets/css/li_qygl_detail.css'
import {
	Header
} from 'mint-ui'
import {
	Navbar,
	TabItem
} from 'mint-ui'
export default {
	data: function() {
		return {
			list: '',
			item: '',
			page: 1,
			errshow: false,
			error: '',
			value: '',
			selected: '',
			nianl: '',
			arry: [],
			orgId: ''
		}
	},

	methods: {
		Passwordvalid() {
			let params = [this.li_applyId[0]]
			commonAjax(params, 'pcn.residentSignService', 'getSignRecordDetail').then(res => {
				if (res.code == 200) {
					console.log(res)
					this.list = res.body.applySignInfo
					this.arry = res.body.applyPackageInfo
					this.orgId = res.body.applySignInfo.orgId
					sessionStorage.setItem('submitInfo', JSON.stringify(res.body))
					
					
					//证件类型
					if (res.body.applySignInfo.idType == 1) {
						this.list.idType = "居民身份证"
					} else if (res.body.applySignInfo.idType == 2) {
						this.list.idType = "居民户口簿"
					} else if (res.body.applySignInfo.idType == 3) {
						this.list.idType = "护照"
					} else if (res.body.applySignInfo.idType == 4) {
						this.list.idType = "军官证"
					} else if (res.body.applySignInfo.idType == 5) {
						this.list.idType = "驾驶证"
					} else if (res.body.applySignInfo.idType == 6) {
						this.list.idType = "港澳居民通行证"
					} else if (res.body.applySignInfo.idType == 7) {
						this.list.idType = "台湾居民通行证"
					} else if (res.body.applySignInfo.idType == 11) {
						this.list.idType = "出生证明"
					} else if (res.body.applySignInfo.idType == 99) {
						this.list.idType = "其他法定有效证件"
					}

					var mdate = new Date()
					var myear = mdate.getFullYear()
					var oldnl = res.body.applySignInfo.dob.split('-')[0]
					this.nianl = myear - oldnl

				}
			})

		},
		Service_Pack() {
			this.$router.push("/li_Qygl_detail_qqr_fwb")
		},
		Agreement() {
			this.$router.push("/li_Qygl_detail_qyxy")
			this.$store.dispatch('li_orgName', [this.list.orgName, this.list.doctorName])
		},
		next() {
			let params = [this.orgId]
			commonAjax(params, 'pcn.myResidentDoctorService', 'nextStepCfg').then(res => {
				if (res.code == 200) {
					this.$router.push("/li_Qygl_detail_qqr_two")
				}
			})
		},
		tel() {
			window.location.href = 'tel://' + this.list.tel
		},
	},
	mounted() {
		this.Passwordvalid()

	},
	computed: {
		...mapState(['li_applyId']),
		services() {
			let services = '';
			this.arry.forEach((item) => {
				services += item.serviceName + ' '
			})

			//选择服务包后的值
			sessionStorage.getItem("data") ? services = sessionStorage.getItem("data") : services
			return services
		},
	},
}
</script>

<style scoped>
.qygl_detail_yqx {
	background: #EBEBEB;
}

.qygl_detail_yqx .mint-header {
	height: 1rem;
	background-color: #fff;
	color: #26a2ff;
}

.qygl_detail_yqx .mint-button {
	height: 1.5rem;
}

.qygl_detail_yqx .mint-header {
	font-size: 0.33rem;
}

.qygl_detail_yqx .mintui-back {
	font-size: 0.37rem;
}

.qygl_detail_yqx .top {
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

.qygl_detail_yqx .user_info {
	font-size: 0.28rem;
	height: 2.5rem;
	background: #fff;
}

.qygl_detail_yqx .user {
	width: 20%;
	text-align: center;
	margin-top: 5%;
}

.qygl_detail_yqx .info {
	width: 80%;
}

.qygl_detail_yqx .gril {
	width: 0.5rem;
	height: 0.5rem;
}

.qygl_detail_yqx .age {
	margin: 0 0.2rem;
}

.qygl_detail_yqx .name {
	height: 1rem;
	line-height: 1rem;
	border-bottom: 0.5px solid #ccc;
	display: flex;
	align-items: center;
}

.qygl_detail_yqx .mobel {
	height: 1.5rem;
	display: flex;
	flex-direction: column;
}

.qygl_detail_yqx .mobel span {
	margin-left: 0.2rem;
}

.qygl_detail_yqx .type,
.number {
	height: 0.75rem;
	display: flex;
	align-items: center;
}

.qygl_detail_yqx .new {
	font-size: 0.28rem;
	padding: 0 0.3rem;
	margin: 0.2rem 0;
	background-color: #fff;
}

.qygl_detail_yqx .new span {
	margin-left: 0.2rem;
}

.qygl_detail_yqx .phone,
.location {
	height: 1rem;
	display: flex;
	align-items: center;
}

.qygl_detail_yqx .phone {
	border-bottom: 0.5px solid #ccc;
}

.qygl_detail_yqx .location em {
	white-space: nowrap;
}

.qygl_detail_yqx .mintui-back {
	font-size: 0.37rem;
}

.qygl_detail_yqx .mintui-back {
	font-size: 0.37rem;
}

.qygl_detail_yqx .mintui-back {
	font-size: 0.37rem;
}

.qygl_detail_yqx a {
	color: #000;
}

.qygl_detail_yqx .mobile_right {
	height: 0.5rem;
	width: 0.5rem;
}

.qygl_detail_yqx .phone .mobile_left {
	flex: 1;
	direction: left;
}

.qygl_detail_yqx .phone {
	display: flex;
	justify-content: space-between;
}

.qygl_detail_yqx .name {
	color: #0000FF;
}

.qygl_detail_yqx .name span {
	color: #000;
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
	background-color: #fcc648;
	color: #fff;
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
	background: #fff;
	color: #888;
}

.qygl_detail_yqx .second .des {
	text-align: center;
	/*color: #57c9fd;*/
	color: #888;
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

.qygl_detail_yqx .button {
	background: #EBEBEB;
	padding: 0.3rem 0.5rem 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
}

.qygl_detail_yqx .mint-button--normal {
	flex: 1;
	height: 1rem;
	font-size: 0.37rem;
}
</style>
