<!-- 健康管理 -->
<template>
<div class="health-archive">
	<div class="header">
		<router-link to='/jia_mould'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">健康档案</h1>
		<span class="update" @click='update'>更新</span>
	</div>
	<div class="content-wrapper">
		<div class="item" v-for='module in modules'>
			<single-mould :module='module'></single-mould>
		</div>
	</div>
</div>
</template>
<script>
import singleMould from '../common/jia_single_mould.vue'
import api from '../../api/index.js'
import { Indicator } from 'mint-ui';
export default{
	data(){
		return {
			modules:'',

		}
	},
	methods:{
		update(){
			this.getData();
			this.modules = JSON.parse(localStorage.getItem('jia_jkmodules'));
		},
		getData(){
			Indicator.open({
				text: '加载中',
				spinnerType: 'fading-circle'
			})
			let moduleid=10;
			api.requestModuld(moduleid).then((res)=>{
				if(res.code === 200){
					let modules = JSON.stringify(res.data.modules)
					localStorage.setItem('jia_healthmodules',modules)
					// localStorage.setItem('modules',modules)
					// console.log(res.data.modules)
				}
			})
		},
	},
	components:{
		'single-mould':singleMould
	},
	mounted(){
		if(!localStorage.jia_healthmodules){
			this.getData();
		}
		this.modules = JSON.parse(localStorage.getItem('jia_healthmodules'));
		// console.log(this.modules)
		Indicator.close()
	}
}
</script>
<style lang="less" scoped>
.health-archive{
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
			font-weight: 700;
		}
		.update{
			font-size: 16px;
			color:#64ccf8;
			font-weight: 300;
			position: absolute;
			right:10px;
			top:13px;
		}
	}
	.content-wrapper{
		
	}
}
</style>