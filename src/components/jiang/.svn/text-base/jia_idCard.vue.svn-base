<template>
<div class="idCard">
	<div class="header">
		<router-link to='/jia_data'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">设置身份证号</h1>
	</div>
	<div class="content">
		<div class="item first">
			<span class="name">身份证号</span>
			<input type="text" v-model="phoneNumber" placeholder="请输入身份证号">
			<!-- <span class="yz-btn">获取验证码</span> -->
		</div>
	</div>
	<router-link to='/jia_data'>
		<div class="yz">
			<div class="button">绑定</div>
		</div>
	</router-link>
	
</div>
</template>
<script>
export default{}
</script>
<style lang="less">
.idCard{
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
				color: #b3b3b3;
			}
			input::placeholder{
				color:#bdbdbd;
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