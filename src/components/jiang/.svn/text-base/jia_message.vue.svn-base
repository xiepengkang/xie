<!-- 短信验证界面 -->
<template>
<div class="message">
	<div class="header">
		<router-link to='/jia_phone'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">短信验证</h1>
	</div>
	<div class="progress">
		<div class="pro">
			<dl class="item first">
				<dt class="cir"></dt>
				<dd class="des">验证方式</dd>
			</dl>
			<dl class="item second">
				<dt class="cir">2</dt>
				<dd class="des">安全验证</dd>
			</dl>
			<dl class="item third">
				<dt class="cir">3</dt>
				<dd class="des">修改绑定</dd>
			</dl>
		</div>
	</div>
	<div class="content" >
		<phone-validate></phone-validate>
		<div class="item">
			<span class="name">验证码</span>
			<input type="text" v-model='phoneValidateNumber' placeholder="请输入验证码">
		</div>
	</div>
	<div class="yz" @click="validateNumber">
		<div class="button">验证</div>
	</div>
</div>
</template>
<script>
import phoneValidate from '../common/jia_PhoneValidate'
import { mapState } from 'vuex'
import api from '../../api/index'
export default{
	data(){
		return {
			phoneNumber:'18671390186',
			timeOut: 60,
			validateFlag: false,
			phoneValidateNumber:''
		}
	},
	methods:{
		validateNumber(){
			let params = [this.phoneNumber,this.phoneValidateNumber];
			api.commonAjax(params,'pcn.pcnSmsService','validateCode')
				.then((res)=>{
					console.log(11)
					if(res.code === 200){
						console.log(22)
						this.$router.push({path:'jia_bind'})
					}
				})
				.catch((err)=>{
					console.log('出错了')
				})
			
		}
	},
	components:{
		'phone-validate': phoneValidate
	},
//	computed:mapState({
//		phoneValidateNumber:state=>state.jia_phoneValidateNumber,
//		// phoneNumber:'jia_setPhoneNumber'
//	})
}
</script>
<style lang="less" scoped>
.message{
	.header{
		position: relative;
		width: 100%;
		height:0.8rem;
		text-align: center;
		border-bottom: 1px solid #e0e0e0;
		background-color: #fff;
		.back{
			width: 0.4rem;
			height: 0.4rem;
			position: absolute;
			left:10px;
			top:10px;
			background-image: url('../../assets/img/jia_back.png');
			background-size: cover;
		}
		.title{
			font-size: 18px;
			line-height: 0.8rem;
			color:#64ccf8;
			font-weight: 300;
		}
	}
	.progress{
		padding: 0.6rem 0 1.2rem 0;
		.pro{
			width: 90%;
			margin-left: 5%;
			border-top: 1px solid #d6d6d6;
			position: relative;
			.item{
				width: 60px;
				position: absolute;
				top:-0.2rem;
				.cir{
					display: block;
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 50%;
					font-size: 12px;
					line-height: 0.4rem;
					text-align: center;
					margin-left: 20px;
				}
				.des{
					font-size: 14px;
					margin-top: 10px;
				}
			}
			.first{
				left:0.4rem;
				.cir{
					background-image: url('../../assets/img/jia_wo_choose.png');
					background-repeat: no-repeat;
					background-size: cover;
				}
				.des{
					color: #57c9fd;
				}
			}
			.second{
				left: 50%;
				transform:translateX(-50%);
				.cir{
					background-color: #fcc648;
					color:#fff;
				}
				.des{
					color: #fcc648;
				}
			}
			.third{
				right:0.4rem;
				.cir{
					background-color: #f2f2f2;
					color:#acacac;
				}
				.des{
					color:#acacac;
				}
			}
		}
	}
	.content{
		padding: 0 20px;
		background-color: #fff;
		.item{
			font-size: 16px;
			line-height: 1rem;
			border-top: 1px solid #e7e7e7;
			border-bottom: 1px solid #e7e7e7;
			.name{
				color:#5b5b5b;
				font-weight: 500;
			}
			input{
				margin-left: 0.3rem;
				outline-style: none;
				border-color: transparent;
				width: 40%;
				font-size: 16px;
			}
			input::placeholder{
				color:#bdbdbd;
			}
			.yz-btn{
				display: inline-block;
				float:right;
				width: 2rem;
				line-height: 0.7rem;
				background-color: #6091ed;
				color:#f0f0f0;
				margin-top: 0.18rem;
				text-align: center;
				border-radius: 5px;
			}
		}
	}
	.yz{
		width: 90%;
		height: 0.8rem;
		margin-top: 1.5rem;
		margin-left: 50%;
		transform: translateX(-50%);
		background-color: #57c9fd;
		border-radius: 5px;
		text-align: center;
		.button{
			line-height: 0.8rem;
			font-size: 0.4rem;
			color: #d0f2f5;
		}
	}
}
</style>