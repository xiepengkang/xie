<template>
<div class="header_grop">
	<mt-header title="忘记密码" style="background: #FFFFFF;font-size: 0.3rem;color: #000000;">
			  <router-link to="/xie_forget" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
	</mt-header>
		<form @submit.prevent>
			<div class="sjh">新密码</div>
			<div class="box_yam">
				<input type="password" placeholder="请输入新密码" v-model="newcpd" ref="changeimg">
				<div v-show="isshow" class="box">
					<img @click="changge" src="../../assets/img/xie_express.png" ref="setimg">
				</div>
				<div  v-show="!isshow" class="box">
					<img @click="changge"  src="../../assets/img/xie_the_dark.png" ref="setimg">
				</div> 
				<p>密码由6-20位数字英文字母组成</p>
			</div>
			<div @click="checkpwd">
				<mt-button type="primary" size="large" style="margin-top:1.3rem;background:#57C9FD;">确定</mt-button>
			</div>
		</form>
</div>
</template>
<script>
	var md5 = require("md5");
	import { requestConfirmPassword } from "../../api/api"
	import {    Toast,MessageBox}from 'mint-ui';
export default {
    components: {

    },
    data() {
        return {
			newcpd:'',
			errshow:false,
			error:'',
			isshow:'',
			popupVisible:false,
        }

    },
    computed: {

    },
    methods: {
			//		confirmPassword(){
//              let params ={"username":"18672992712","password":md5("123456")};
//              requestConfirmPassword(params).then(res => {
//                   if (res.code == 200) {
//
//                  }
//              })
//          }，
		checkpwd(){ 
		    let phone = this.newcpd
		    if(/^[\w.]{6,20}$/.test(phone)){ 
		      	this.confirmPassword();
		    }else{
		    	MessageBox("密码由6-20位数字英文字母组成")
		    	
		    		}
		},
		getimg(){

		},
		changge(){
			if(this.isshow==false){
				this.isshow=true
				this.$refs.changeimg.type="text"
				
			}else{
				this.isshow=false
				this.$refs.changeimg.type="password"
			}
		
		},
		 confirmPassword(){
		 	let phones=sessionStorage.getItem("xie_username",this.phones);
                let params ={"username":phones,"password":md5(this.newcpd),"tenantId":"hcn.shenzhen"};
                requestConfirmPassword(params).then(res => {
                     if (res.code == 200) {
                     	let instance = Toast('修改密码成功');
							setTimeout(() => {
							  instance.close();
							  this.$router.push('/xie_homepage')
							}, 1000);
                    }
                })
            }
    },
    mounted(){
    },
}
</script>
<style scoped>
	.sjh{
		margin-top: 2rem;
		font-size: 0.4rem;
		color:#94DDFE;
	}
	.yzm{
		font-size: 0.4rem;
		margin-top:0.3rem;
		color:#B7B7B7;
		
	}
	form{margin:2.3rem 10% 0 10%;}
	.box_yam {
		border-bottom: 1px solid #B7B7B7;
		height: 1.2rem;
	}
	.box_yam input{
	font-size: 0.3rem;
	border: none;
	outline: none;
	width: 80%;
	height: 0.8rem;
	
	}
	.box_yam .box img{
		float: right;
		width:0.5rem;
		height: 0.5rem;
		margin-top: -0.6rem;
		
	}
	.box_yam p{
		font-size:0.3rem;
		color: #B7B7B7;
		margin-top: 0.3rem;
	}
		.foote{
	width: 50%;
	background: #ECECEC;
	text-align: center;
	/*padding:0.2rem;*/
	border-radius: 0.2rem;
	margin-left: 1.6rem;
	/*border: 1px solid red;*/
}
.foote .error{
	font-size: 0.2rem;
	padding:0.2rem;
	
}
.box{
	padding: 1px;
}
</style>