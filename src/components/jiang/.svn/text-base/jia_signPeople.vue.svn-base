<template>
<div class="sign-people">
	<div class="header">
		<router-link to='/jia_person'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">健康档案</h1>
		<span class="update" @click='save'>保存</span>
	</div>
	<div class="pad"></div>
	<!-- <div v-for='module in modules'> -->
		<mould :module='module' :data='allData' ref='mould' @save='getDataFromChild'></mould>
	<!-- </div> -->
	<!-- <div class="box">{{allData}}</div> -->
</div>
</template>
<script>
import api from '../../api/index.js'
import mould from '../common/jia_shuju_mould.vue'
export default{
	data(){
		return {
			data1: {},
			data2: {},
			module: {},
			len: ''
		}
	},
	methods:{
		getData(){
			let moduleid=10;
			let params = ['010101','T0000000223','',1,50];
			let params2 = ['010101','T0000000223','52584415'];
			api.commonAjax(params,'pcn.archiveService','queryArchiveList')
				.then((res) =>{
					// console.log(res.body)
					this.data1 = res.body[0];
					// this.data = JSON.parse(res.body);
				})
			api.commonAjax(params2,'pcn.archiveService','getArchiveDetail')
				.then((res) =>{
					if(res.code === 200){
						this.data2 = res.body;
						// console.log(res.body)
					}
				})
			api.requestModuld(moduleid).then((res)=>{
				// console.log(res.data)
				if(res.code === 200){
					// let modules = JSON.stringify(res.data.modules)
					// console.log();
					this.module = res.data.modules[0];
					// for(let a in res.data.modules[0].nodes){
					// 	this.prop.push(a);
					// }
					this.len = res.data.modules[0].nodes.length;
					// console.log(this.len)
					console.log(this.module)
				}
			})
		},
		save(){
			this.$refs.mould.saveData();
		},
		getDataFromChild(data){
			console.log(data)
		}
	},
	created(){
		
	},
	computed:{
		allData(){
			return Object.assign(this.data1,this.data2)
		}
	},
	mounted(){
		this.getData();
	},
	components:{
		'mould': mould
	}
}
</script>
<style lang="less">
.sign-people{
	.header{
		position: fixed;
		top:0;
		left:0;
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
	.pad{
		height:0.8rem;
	}
}
</style>