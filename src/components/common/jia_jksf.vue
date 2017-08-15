<!-- 健康随访模板管理 -->
<template>
<div class="jksf">
	<div class="header">
		<router-link to='/jia_mould'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">健康随访</h1>
		<span class="update" @click='update'>更新</span>
	</div>
	<div class="content-wrapper">
		<div class="item" v-for='module in modules'>
			<single-mould :module='module' :cascades="cascades"></single-mould>
		</div>
	</div>
</div>
</template>
<script>
import api from '../../api/index.js'
import singleMould from '../common/jia_single_mould.vue'
import { Indicator } from 'mint-ui';
export default{
	data(){
		return {
			modules: [],
			cascades: []
		}
	},
	methods:{
		update(){
			this.getData();
			this.modules = JSON.parse(localStorage.getItem('jia_jkmodules'));
//			this.cascades = JSON.parse(localStorage.getItem('jia_jkcascades'));
			this.modules = JSON.parse(localStorage.getItem('jia_jkcascades'));
		},
		getData(){
			Indicator.open({
				text: '加载中',
				spinnerType: 'fading-circle'
			})
			let moduleid=1;
			api.requestModuld(moduleid).then((res)=>{
				// console.log(res.data)
			
				console.log(res.data)
				// console.log(res);
				if(res.code === 200){
					let modules = JSON.stringify(res.data.modules);
					let cascades = JSON.stringify(res.data.cascades);
					//将健康随访模板放到本地存储
					localStorage.setItem('jia_jkmodules',modules);
					// 将级联表放到本地存储
					localStorage.setItem('jia_jkcascades',cascades);
					console.log(111)
					console.log(cascades)
					console.log(2222)
					Indicator.close()
				}
			})
		}
	},
	mounted(){
		// if(!localStorage.jia_jkmodules){
			this.getData();
		// }
		this.modules = JSON.parse(localStorage.getItem('jia_jkmodules'));
		// console.log(this.modules)
		this.cascades = JSON.parse(localStorage.getItem('jia_jkcascades'));
		
	},
	components:{
		'single-mould':singleMould
	}
}
</script>
<style lang="less" scoped>
.jksf{
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
}
</style>