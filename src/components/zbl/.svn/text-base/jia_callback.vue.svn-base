<template>
<div class="app">
	<div class="callback" v-if='showPage'>
		<div class="header">
			<mt-header title="意见反馈">
				<a slot="left" @click='$router.push("#")'>
					<mt-button icon="back"></mt-button>
				</a>
				<a slot="right">
					<mt-button class="smallbtn" @click.native='getFeedbackList'>我的反馈</mt-button>
				</a>
			</mt-header>
		</div>
		<div class="body">
			<div class="callbackItems cbafter">
				<div class="item fl" @click='gogogo' :id='01'>
					<i class="icon checked"></i><span>意见反馈</span>
				</div>
				<div class="item fl" @click='gogogo' :id='02'>
					<i class="icon"></i><span>问题反馈</span>
				</div>
				<div class="item fl" @click='gogogo' :id='03'>
					<i class="icon"></i><span>其他</span>
				</div>
			</div>
			<div class="inputText">
				<mt-field placeholder="请描述您的问题，最多200字" type="textarea" rows="4" v-model="textCont" class="textArea"></mt-field>
				<p>{{200 - textCont.length}}/200</p>
			</div>
			<div class="upLoadImg">
				<p>请上传图片，最多添加3张</p>
				<img src="../../assets/img/zbl_add.png" width="50" height="50">
				<p class="count">0/3</p>
			</div>
			<div class="divide"></div>

			<mt-cell title="是否愿意接受电话回访">
				<mt-switch v-model="switchCall"></mt-switch>
			</mt-cell>
			<mt-field label="联系方式" v-model='jia_phoneNo' v-show='switchCall'></mt-field>
			<div class="submitBtn">
				<mt-button size="normal" @click.native='submit'>提交</mt-button>
			</div>
		</div>
	</div>

	<div class="callback" v-else>
		<div class="header">
			<mt-header title="我的反馈">
				<a slot="left" @click='showPage = true'>
					<mt-button icon="back"></mt-button>
				</a>
			</mt-header>
		</div>
		<div class="body2">
			<div class="items" v-for='item in feedbackData'>
				<div class="feedbackItems">
					<p class="time">{{item.createDt}}</p>
					<p class="content">{{item.content}}</p>
				</div>
				<div class="divide"></div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import {
	api,
	commonAjaxKy
} from '../../api/api.js'
import {
	Cell,
	MessageBox,
	Toast
} from 'mint-ui'
export default {
	data() {
		return {
			textCont: '',
			switchCall: true,
			jia_phoneNo: '13562025412',
			classify: '',
			feedbackData: [],
			showPage: true,
		}
	},
	methods: {
		gogogo(e) {
			let allIconEles = document.querySelectorAll('.callbackItems>.item>.icon')
			for (let i = 0; i < allIconEles.length; i++) {
				allIconEles[i].classList.remove('checked')
			}
			e.currentTarget.querySelector('.icon').classList.add('checked')
			this.classify = e.currentTarget.id
		},
		submit() {
			if (this.textCont.length) {
				let params = [{
					"content": this.textCont,
					"phoneNo": this.jia_phoneNo,
					"uuid": "2e3812f27b3915b1228d3ecdbb2936fb",
					"classify": this.classify
				}]
				commonAjaxKy(JSON.stringify(params), 'hcn.feedback', 'addFeedback').then(res => {
					if (res.code === 200) {
						Toast({
							message: '提交成功',
							duration: 1000
						})
						// this.$router.push('#')
					}
				})
			} else {
				Toast({
					message: '反馈信息不能为空',
					duration: 1000
				})
			}
		},
		getFeedbackList() {
			this.showPage = false
			let params = []
			commonAjaxKy(JSON.stringify(params), 'hcn.feedback', 'getFeedbackList').then(res => {
				if (res.code === 200) {
					this.feedbackData = res.body
				}
			})
		},
	},
	mounted() {
	},
}
</script>
<style lang='stylus' scoped>
.callback {
	.mint-header {
		height: 1rem;
		font-size: .4rem;
		background-color: #35B46F;
	}
	.body {
		.callbackItems {
			padding: .3rem;
			border-bottom: 1px solid #ddd;
			.item {
				font-size: .3rem;
				margin-right: 15px;
				.icon {
					display: inline-block;
			    	background-color: #fff;
			    	border-radius: 100%;
			    	border: 1px solid #ccc;
			    	position: relative;
			    	width: 20px;
			    	height: 20px;
			    	vertical-align: middle;
					margin-right: 10px;
				}
				.icon.checked {
					background-color: #67cc70;
			    	border-color: #67cc70;
				}
				.icon:after {
					border: 2px solid transparent;
					border-left: 0;
					border-top: 0;
					content: " ";
					top: 3px;
					left: 6px;
					position: absolute;
					width: 4px;
					height: 8px;
					-webkit-transform: rotate(45deg) scale(0);
					transform: rotate(45deg) scale(0);
					-webkit-transition: -webkit-transform .2s;
					transition: -webkit-transform .2s;
					transition: transform .2s;
					transition: transform .2s,-webkit-transform .2s;
					border-color: #fff;
			    	-webkit-transform: rotate(45deg) scale(1);
			    	transform: rotate(45deg) scale(1);
				}
			}
		}
		.inputText {
			text-align: right;
			.textArea {
				width: 90%;
				margin: 20px auto;
				border: 1px solid #ddd;
				border-radius: 10px;
			}
			p {
				margin-right: 20px;
				font-size: .3rem;
			}
		}
		.upLoadImg {
			margin: 20px;
			p {
				font-size: .3rem;
			}
			img {
				margin-top: 20px;
                border: 1px dashed #ddd;
                padding: 10px;
            }
			p.count {
				text-align: right;
			}
		}
		.submitBtn {
			text-align: center;
			.mint-button {
				width: 90%;
				background-color: #67cc70;
				color: #fff;
			}
		}
	}
	.body2 {
		.feedbackItems {
			font-size: .4rem;
			padding: .3rem;
			line-height: 1.8;
			.time {
				color: grey;
			}
			.content {
				margin-top: .2rem;
			}
		}
	}
	.divide {
		height: 10px;
		background-color: #F2F2F2;
	}
}
</style>
