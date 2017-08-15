<!-- 设置页面 -->
<template>
<div class="setter">
	<div class="header">
		<router-link to='/jia_person'>
			<div class="back">
			</div>
		</router-link>
		
		<h1 class="title">设置</h1>
	</div>
	<div class="logo-box">
		<div class="logo">
			
		</div>
	</div>
	<div class="content">
		<router-link to='/jia_password'>
			<mt-cell title="密码设置" is-link> </mt-cell>		
		</router-link>
		<router-link to='/jia_phone'>
			<mt-cell title="手机绑定" is-link > </mt-cell>		
		</router-link>
		<router-link to='/jia_about'>
			<mt-cell title="关于我们" is-link > </mt-cell>		
		</router-link>
	</div>
</div>
</template>
<script>
import {Cell} from 'mint-ui'
export default{
	components:{
		'mt-cell':Cell
	}
}
</script>
<style lang="less" scoped>
.setter {
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
	.logo-box{
		.logo{
			width: 2rem;
			height: 2rem;
			background-image: url('../../assets/img/1024.png');
			background-size: contain;
			// background-color: #f2f2f2;
			// margin-left: 50%;
			transform: translateX(-50%);
			margin:0.5rem 0 0.8rem 50%;
		}
	}
	.content{
		background-color: #fff;
	}
}
</style>
