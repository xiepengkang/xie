<!-- 关于我们界面 -->
<template>
<div class="about-us">
	<!-- <div class="header">
		<router-link to='/jia_setter'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">关于我们</h1>
	</div> -->
	<v-header title='关于我们'></v-header>
	<div class="logo-box">
		<div class="logo">
			
		</div>
	</div>
	<div class="content">
		<p class="txt">
			{{txt}}
		</p>
	</div>
</div>
</template>
<script>
import header from '../common/jia_back.vue'
export default{
	data(){
		return {
			txt:'健康家医版APP，帮助家庭医生更方便的签约居民、管理居民，随时了解居民的健康信息，以家庭医生团队形式共同为签约居民提供优质的服务，通过签约管理、居民管理、医学工具、团队管理、服务管理等功能，打造家庭医生一站式服务平台'
		}
	},
	components:{
		'v-header':header
	}
}
</script>
<style lang="less">
.about-us{
	background-color: #fff;
	// .header{
	// 	position: relative;
	// 	width: 100%;
	// 	height:0.8rem;
	// 	text-align: center;
	// 	border-bottom: 1px solid #e0e0e0;
	// 	background-color: #fff;
	// 	.back{
	// 		width: 0.4rem;
	// 		height: 0.4rem;
	// 		position: absolute;
	// 		left:10px;
	// 		top:10px;
	// 		background-image: url('../../assets/img/jia_back.png');
	// 		background-size: cover;
	// 	}
	// 	.title{
	// 		font-size: 18px;
	// 		line-height: 0.8rem;
	// 		color:#64ccf8;
	// 		font-weight: 300;
	// 	}
	// }
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
		padding:0 10px 20px 10px;
		.txt{
			text-indent: 1em;
			font-size: 14px;
			color:#666;
			line-height: 20px;
		}
	}
}
</style>