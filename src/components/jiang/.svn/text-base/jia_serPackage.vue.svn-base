<template>
<div class="ser-package">
	<!-- <j-back :title='title'></j-back> -->
	<div class="header">
		<router-link to='/jia_person'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">服务包</h1>
	</div>
	<div class="content-box">
	  		<ul>
	    		<li class="item" v-for="item in package">
	    			<p class="item-name">{{item.spPackName}}</p>
	    			<p class="suit">适合对象：{{ item.suitableObject | suitFilter }}</p>
	    			<router-link :to="{name:'jia_packageDetail',params:{id:item.spPackId}}">
	    				<span class="detail">详情</span>
	    			</router-link>
	    		</li>
	 	 	</ul>
	</div>
</div>
</template>
<script>
import api from '../../api/index.js'
import { Loadmore,Cell,Indicator } from 'mint-ui';
// import back from '../common/jia_back.vue'
// import Detail from '../common/jia_packageDetail'
export default{
	data(){
		return {
			package: [],
			showPackage: [],
			// title:'服务包',
		}
	}, 
	methods:{
		getData(){
			Indicator.open({
				text: '加载中',
				spinnerType: 'fading-circle'
			})
			let params = [{'spId':'','spType':2}];
			api.commonAjax(params,'pcn.pcnSpPackService','spPackList').then((res)=>{
				if(res.code===200){
					this.package = res.body;
					console.log(this.package)
					// this.package[1].suitableObject
					Indicator.close()
				}
			})
			api.dicAjax().then((res)=>{
				let txt = [];
				this.dic = res.items;
				for(let i=0;i<this.dic.length;i++){
					txt.push(this.dic[i]['text']);
				}
				// console.log(this.txt)
				sessionStorage.setItem('txt',JSON.stringify(txt));
				// console.log(JSON.parse(sessionStorage.getItem('txt')))

			})
		},
		showDetail(id){
			this.$router.push({name:'jia_packageDetail',params:{packId:id}})
		},
	},
	filters:{
		suitFilter(value){
			let showArr = [];
			let packkeyArr = value.split(',');
			packkeyArr.sort((a,b)=>{
				return a-b
			})
			let txt1 = JSON.parse(sessionStorage.getItem('txt'))

			for(let i=0;i<packkeyArr.length;i++){
				showArr.push(txt1[packkeyArr[i].replace(/\b(0+)/,'')]);
			}
			let value1 = showArr.join(',')
			return value1
		}
	},
	created(){
		this.getData();
	},
	components:{
		'mt-loadmore': Loadmore,
		'mt-cell':Cell,
		// 'j-back':back
	}
}
</script>
<style lang="less">
.ser-package{
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
	.content-box{
		background-color: #fff;
		margin-top: 0.2rem;
		.item{
			position: relative;
			border-bottom: 1px solid #e0e0e0;
			padding:0.1rem 0 0.1rem 0.2rem;
			.item-name{
				font-size: 16px;
				line-height: 24px;
				color:blue;
			}
			.suit{
				font-size: 14px;
				line-height: 24px;
				color:#999;
				display:block;
				width: 70%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.detail{
				position: absolute;
				right:0.2rem;
				top:50%;
				transform:translateY(-50%);
				display: block;
				font-size: 14px;
				padding: 0.1rem 0.2rem;
				background-color: orange;
				border-radius: 6px;
				color:#fff;
				font-weight: 100;
			}
		}
	}
}
</style>