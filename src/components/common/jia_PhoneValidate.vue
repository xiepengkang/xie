<template>
<div class="phoneValidate">
	<div class="validate-item">
		<span class="name">手机号</span>
		<input type="text" v-model="phoneNumber" placeholder="请输入手机号">
		<span class="yz-btn" @click='validate' v-show='!validateFlag'>获取验证码</span>
		<span class="yz-btn" v-show='validateFlag'>已发送{{this.timeOut}}s</span>
	</div>
</div>
</template scoped>
<script>
import { MessageBox } from 'mint-ui'
import api from '../../api/index.js'
import { mapState } from 'vuex'
export default{
	data(){
		return {
			phoneNumber: '18671390186',
			timeOut: 60,
			validateFlag: false,
			validateNumber: ''
		}
	},
	methods:{
		validate(){
			let that = this;
			let reg = /^1[34578]\d{9}$/;
			if(this.phoneNumber === ''){
				MessageBox.alert('电话号码不能为空')
			}else{
				if(!(reg.test(this.phoneNumber))){
					MessageBox.alert('请输入正确的电话号码')
				}else{
					this.validateFlag = !this.validateFlag;
					// this.timeOut = 60;
					let params =['hcn.shenzhen',`${this.phoneNumber}`]
					api.commonAjax(params,'pcn.pcnSmsService','getDocIdentifyingCode')
						.then((res)=>{
							if(res.code === 200){
								this.validateNumber = res.body
								// console.log(this.validateNumber)
								this.$store.dispatch('jia_setPhoneValidateNumber',this.validateNumber)
							}
						}).catch((err)=>{
							console.log('验证码出错了')
						})
				
					let timer = setInterval(()=>{
						if(that.timeOut === 1){
							clearInterval(timer);
							that.timeOut = 60;
							that.validateFlag = !that.validateFlag;
						}
						that.timeOut--;
					}, 1000)
				}
			}
			
		},
	}
}
</script>
<style lang="less">
.phoneValidate{
	.validate-item{
			font-size: 16px;
			line-height: 1rem;
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
</style>