<template>
<div class="mould">
	<div class="header">
		<router-link to='/jia_person'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">模板列表</h1>
	</div>
	<div class="divide"></div>
	<div class="content">
		<router-link to='/jia_jksf'>
			<mt-cell title="健康随访" is-link> </mt-cell>		
		</router-link>
		<router-link to='/jia_sickArchive'>
			<mt-cell title="慢病档案" is-link > </mt-cell>		
		</router-link>
		<router-link to='/jia_healthArchive'>
			<mt-cell title="健康档案" is-link > </mt-cell>		
		</router-link>
	</div>
</div>
</template>
<script>
 import { Cell } from 'mint-ui'

 export default{
 	components:{
 		'mt-cell':Cell
 	},
 }
</script>
<style lang="less" scoped>
.mould{
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
	.divide{
		width: 100%;
		height: 0.2rem;
		background-color: #f2f2f2;
	}
	.content{
		// margin-top: 0.2rem;
		background-color: #fff;
		border-bottom: 1px solid #e0e0e0;
	}
}
</style>