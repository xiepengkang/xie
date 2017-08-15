<!-- 修改密码界面 -->
<template>
<div class="password">
	<div class="header">
		<router-link to='/jia_setter'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">密码设置</h1>
	</div>
	<div class="content">
		<div class="item first">
			<span class="name">原密码</span>
			<input type="password" v-model="oldPassword" 
			 placeholder="请输入原密码" ref="oldPass">
			<span class="icon dark" v-show="!show1" @click='show1Toggle'></span>
			<span class="icon light" v-show="show1" @click='show1Toggle'></span>
		</div>
		<div class="item">
			<span class="name">新密码</span>
			<input type="password"  placeholder="请输入新密码" ref="newPass" v-model='newPassword'>
			<span class="icon dark" v-show="!show2" @click='show2Toggle'></span>
			<span class="icon light" v-show="show2" @click='show2Toggle'></span>
		</div>
	</div>
	<div class="tip">
		<p class="txt">密码由6-20位数字、英文字母组成</p>
	</div>
		<div class="yz" @click="changePassword">	
			<div class="button">确定</div>	
		</div>
</div>
</template>
<script>
import { MessageBox } from'mint-ui'
import api from '../../api/index'
// import axios from 'axios'
import {mapState} from 'vuex'
var md5 = require("md5");
export default{
	data(){
		return {
			show1: false,
			show2: false,
			oldPassword: '',
			newPassword: '',
		}
	},
	methods:{
		show1Toggle(){
			this.show1 = !this.show1;
			if(this.show1){
				// console.log()
				this.$refs.oldPass.type = 'text'
			}else{
				this.$refs.oldPass.type = 'password'
			}
		},
		show2Toggle(){
			this.show2 = !this.show2;
			if(this.show2){
				this.$refs.newPass.type = 'text'
			}else{
				this.$refs.newPass.type = 'password'
			}
		},
		changePassword(){
			let reg = /^\w{6,20}$/;
			if(this.oldPassword === '' || this.newPassword === ''){
				MessageBox.alert('密码不能为空')
			}else{
				if(reg.test(this.oldPassword) && reg.test(this.newPassword)){
					let oldPassword = md5(this.oldPassword);
					let newPassword = md5(this.newPassword);
					let  params = {'newPassword': newPassword,
									'username': this.oldPhoneNumber,
									'tenantId': `hcn.zhongshan`,
									'oldPassword': oldPassword }
					api.requestChangepwd(params).then((res)=>{
						if(res.code === 200){
							MessageBox.alert('密码修改成功')
						}else{
							MessageBox.alert('密码修改失败')
						}
					})
				}
			}
		}
	},
	computed:mapState({
		oldPhoneNumber: 'jia_phoneNumber'
	})
}
</script>
<style lang="less" scoped>
.password{
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
	.content{
		padding: 0 20px;
		background-color: #fff;
		.item{
			font-size: 16px;
			line-height: 1rem;
			border-bottom:1px solid #e7e7e7;
			.name{
				color:#5b5b5b;
				font-weight: 500;
			}
			input{
				margin-left: 0.3rem;
				outline-style: none;
				border-color: transparent;
				width: 40%;
				font-size: 14px;
				color: #444;
			}
			input::placeholder{
				color:#bdbdbd;
			}
			.icon{
				display: inline-block;
				float:right;
				// line-height: 0.7rem;
				// background-color: #6091ed;
				// color:#f0f0f0;
				margin-top: 0.25rem;
				width: 0.5rem;
				height: 0.5rem;
				// background-color: red;
				// text-align: center;
				// border-radius: 5px;
				background-repeat: no-repeat;
				background-size: contain;
			}
			.dark{
				background-image: url('../../assets/img/jia_dark.png');
			}
			.light{
				background-image: url('../../assets/img/jia_light.png');
			}
		}
		.first{
			
		}
	}
	.tip{
		font-size: 12px;
		padding:5px 0 0 20px;
		line-height: 18px;
		color:#bdbdbd;
	}
	.yz{
		width: 90%;
		height: 0.8rem;
		margin-top: 1rem;
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