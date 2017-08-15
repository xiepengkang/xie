<template>
<div class="package-detail">
	<div class="header">
		<router-link to='/jia_serPackage'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">{{detail.spPackName}}</h1>
	</div>
	<div class="content">
		<div class="desc">
			<p class="desc-text">{{detail.spPackName}}</p>
		</div>
		<div class="divide"></div>
		<div class="change-intro">
			<h1 class="title">合计价格</h1>
			<!-- <span class="change fr" @click='editIntro'></span> -->
		</div>
		<div class="price">
			<p class="price-content">￥{{detail.price}}</p>
		</div>
		<div class="divide"></div>
		<div class="change-intro">
			<h1 class="title">优惠价格</h1>
			<!-- <span class="change fr" @click='editIntro'></span> -->
		</div>
		<div class="discount">
		<!-- v-if='detail.discountList' -->
			<p class="discount-content">暂无优惠</p>
			<!-- <p class="discount-content" v-else>{{detail.discountList}}</p> -->
		</div>
		<div class="divide"></div>
		<div class="change-intro">
			<h1 class="title">签约适合对象</h1>
			<!-- <span class="change fr" @click='editIntro'></span> -->
		</div>
		<div class="discount">
			<!-- <p class="discount-content" v-if='detail.discountList.length == 0'>暂无优惠</p> -->
			<p class="discount-content">{{detail.suitableObject | suitFilter}}</p>
		</div>
		<div class="change-intro" v-show='detail.itemList'>
			<h1 class="title">服务项目</h1>
			<!-- <span class="change fr" @click='editIntro'></span> -->
		</div>
		<div class="ser-list" v-show='detail.itemList'>
			<ul>
				<li class="ser-item" v-for="(item,index) in detail.itemList">
					<p class="txt">
						{{index+1}}.{{item.serviceName}}<br/>
						{{item.serviceDesc}}<br/>
						年服务次数：{{item.times}}
					</p>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<script>
import api from '../../api/index.js'
export default{
	data(){
		return {
			spPackId: '',
			detail: ''
		}
	},
	methods:{
		getData(){
			let params = [this.spPackId]
			api.commonAjax(params,'pcn.pcnSpPackService','spPackDetail').then(res=>{
				console.log(res)
				if(res.code === 200){
					this.detail = res.body;
				}
			})
		}
	},
	filters:{
		suitFilter(value){
			let showArr = [];
			let packkeyArr = value.split(',');
			packkeyArr.sort((a,b)=>{
				return a-b;
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
		this.spPackId = Number(this.$route.params.id);
		// console.log(this.spPackId)
		this.getData()
		// console.log(this.detail)
	}
}
</script>
<style lang="less">
.package-detail{
	display: fixed;
	top:0;
	left:0;
	bottom: 0;
	right:0;
	z-index: 100;
	background-color: #fff;
	font-size: 0;
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
		.desc{
			.desc-text{
				font-size: 16px;
				color:#666;
				padding: 0.2rem;
				line-height: 24px;
			}
		}
		.divide{
			height: 0.2rem;
			background-color: #f2f2f2;
		}
		.change-intro{
			border-bottom: 1px solid #e0e0e0;
			padding: 0.2rem 0;
			.title{
				display: inline-block;
				padding-left: 0.1rem;
				color:#b3b3b3;
				font-size: 12px;
				line-height: 16px;
				border-left: 5px solid #59c9fd;
			}
		}
		.price{
			.price-content{
				font-size: 16px;
				color:orange;
				padding: 0.4rem 0.2rem;
			}
		}
		.discount{
			.discount-content{
				font-size: 16px;
				color:#666;
				line-height: 24px;
				padding: 0.4rem 0.2rem;
			}
		}
		.ser-list{
			.ser-item{
				padding: 0.2rem 0.2rem 0 0.2rem;
				.txt{
					font-size: 14px;
					color:#666;
					line-height: 20px;
				}
			}
		}
	}
}
</style>