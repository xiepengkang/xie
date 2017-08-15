<template>
<div class="header_grop">
	<div class="header_top">
		消息
	</div>
	<div class="xie_icon">
		<img @click="$router.push('/xie_home')" src="../../assets/img/xie_gohome.png">
	</div>
	<!--<div>-->
	<ul>
		<li class="li_box" v-for="(item,index) in list" @click="send(item)">
			<img :src="item.xie_img"><b v-show="item.count>0">{{item.count}}</b>
			<div class="xie_jtgl">
				<p>{{item.xie_p}}</p>
				<span>{{item.lastNotification.content}}</span>
			</div>
			<div class="xie_sj">{{item.xie_format}}</div>
		</li>
	</ul>
	
	<!--</div>-->




	<!--底部按钮-->
	<!--<div class="flexbox">
		<router-link to="/xie_home" class="flex_left">
			<div class="xie_img_box">
				<img src="../../assets/img/xie_shouye.png">
			</div>
			<span style="color:#000">首页</span>
		</router-link>
		<router-link to="/xie_xiaoxi" class="flex_center">
			<div class="xie_img_box">
				<img src="../../assets/img/xie_xiaoxi1.png">
			</div>
			<span style="color:#000">消息</span>
		</router-link>
		<router-link to="/zy_service" class="flex_right">
			<div class="xie_img_box">
				<img src="../../assets/img/xie_fuwu.png">
			</div>
			<span style="color:#000">服务</span>
		</router-link>
		<router-link to="/jia_person" class="flex_right1">
			<div class="xie_img_box">
				<img src="../../assets/img/xie_my.png">
			</div>
			<span style="color:#000">我的</span>
		</router-link>
	</div>-->

</div>
</template>
<script>
import {
	commonAjaxKy
} from '../../api/api'
import {
	Indicator
} from 'mint-ui'
export default {
	components: {

	},
	data() {
		return {
			list: [],
			list2: [],
			milliseconds: '',
			timeSpanStr: '',
			listtime: [],
			list1: [{
					"notificationType": "0a",
					"xie_p": "透传消息",
					"xie_img": require('../../assets/img/xie_new_residents.png'),
					"xie_go": "xie_news_tcxx"
				},
				{
					"notificationType": "01",
					"xie_p": "系统通知",
					"xie_img": require('../../assets/img/xie_new_residents.png'),
					"xie_go": "xie_news_xttz"
				},
				{
					"notificationType": "02",
					"xie_p": "就医通知",
					"xie_img": require('../../assets/img/xie_new_residents.png'),
					"xie_go": "xie_news_jytz"
				},
				{
					"notificationType": "03",
					"xie_p": "服务通知",
					"xie_img": require('../../assets/img/xie_new_residents.png'),
					"xie_go": "xie_news_fwtz"
				},
				{
					"notificationType": "68",
					"xie_p": "签约提醒",
					"xie_img": require('../../assets/img/xie_news_qytx.png'),
					"xie_go": "xie_news_qytx"
				},
				{
					"notificationType": "53",
					"xie_p": "预约挂号",
					"xie_img": require('../../assets/img/xie_news_yygh.png'),
					"xie_go": "xie_news_yygh"
				},
				{
					"notificationType": "54",
					"xie_p": "咨询互动",
					"xie_img": require('../../assets/img/xie_news_zxhd.png'),
					"xie_go": "xie_news_zxhd"
				},
				{
					"notificationType": "55",
					"xie_p": "健康监测",
					"xie_img": require('../../assets/img/xie_new_residents.png'),
					"xie_go": "xie_news_jkjc"
				},
				{
					"notificationType": "71",
					"xie_p": "解约通知",
					"xie_img": require('../../assets/img/xie_news_jytz.png'),
					"xie_go": "xie_news_jytz"
				}
			]


		}

	},
	computed: {

	},
	methods: {
		getAllNotificationCount() {
			let params = []
			commonAjaxKy(JSON.stringify(params), 'hcn.notification', 'getAllNotificationCount').then(res => {

				if (res.code == 200) {
					this.list = res.body
					this.list = res.body
					let me = this
					this.list.forEach(item => {
						console.log(item)
						me.milliseconds = Date.parse(new Date()) - Date.parse(item.lastNotification.sendTime)
						me.list1.forEach(item1 => {
							// console.log(item1)
							if (item.notificationType == item1.notificationType) {
								item.xie_p = item1.xie_p
								item.xie_img = item1.xie_img
								item.xie_go = item1.xie_go
								item.xie_format=me.formatMsgTime (me.milliseconds)
							}
						})
					})
					Indicator.close();
				}
			})

		},


		//时间转换
		formatMsgTime(milliseconds) {
			let mill = ''
			if (milliseconds <= 1000 * 60 * 1) {
				mill = '刚刚';
			} else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
				mill = Math.round((milliseconds / (1000 * 60))) + '分钟前';
			} else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
				mill = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
			} else if (1000 * 60 *  60 * 24< milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
				mill = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
			} else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
				mill = month + '-' + day + ' ' + hour + ':' + minute;
			} else {
				mill = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
			}
			return mill
		},
		send(item) {
			//         	console.log(item.xie_go)
			this.$router.push(item.xie_go)
		}

	},
	mounted() {
		this.getAllNotificationCount()
	},
}
</script>
<style scoped>
.header_top {
	height: 1rem;
	/*border: 1px solid red;*/
	line-height: 1rem;
	font-size: .4rem;
	text-align: center;
	background: #fff;
	color: #5ECBFD;
	border-bottom:1px solid #B3B3B3
}

.flexbox {
	border-top: 1px solid #ccc;
	height: 1rem;
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	background: #fff;
}

.flex_left,
.flex_center,
.flex_right,
.flex_right1 {
	flex: 1 1 25%;
	display: flex;
	flex-direction: column;
}

.xie_img_box {
	height: 0.5rem;
}

.flexbox img {
	width: 0.4rem;
	height: 0.4rem;
	float: left;
	padding-left: .75rem;
	margin-top: 0.1rem;
	/*	line-height: 0.3rem;*/
	justify-content: center;
	align-content: center;
}

.flexbox span {
	font-size: 0.3rem;
	text-align: center;
	height: 0.5rem;
	padding-top: 0.1rem;
}

.header_grop ul li {
	height: 1rem;
	border-bottom: 1px solid #ccc;
}

.header_grop li {
	height: 5rem;
	padding: .2rem .1rem .2rem .3rem;
}

.header_grop li img {
	height: 1rem;
	width: 1rem;
	/*border: 1px solid red;*/
	float: left;
}

.xie_jtgl {
	/*font-size: .4rem;*/
	float: left;
	width: 3rem;
	margin-left: .2rem;
}

.xie_jtgl p {
	font-size: .4rem;
}

.xie_jtgl span {
	font-size: .3rem;
	display: block;
	margin-top: .15rem;
	width: 5rem;
	/*height: .3rem;*/
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.xie_sj {
	font-size: .3rem;
	float: right;
}
.li_box b{
	width: .2rem;
	height: .2rem;
	line-height: .2rem;
	text-align: center;
	font-size: .3rem;
	color:#fff;
	padding: .1rem;
	border-radius: 50%;
	background: red;
	position: absolute;
	left: 0;
	margin-left: 1rem;
}
.xie_icon img{
	position: absolute;
    top: .35rem;
    left: .3rem;
    width: .2rem;
    height: .35rem;
    z-index: 100;
}
</style>
