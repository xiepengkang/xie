<template>
<div class="work-load">
	<div class="header">
		<router-link to='/jia_person'>
			<div class="back">
			</div>
		</router-link>
		<h1 class="title">工作量统计</h1>
	</div>
	<div class="team">
		<mt-cell title='所属团队' >{{teamName}}</mt-cell>
		<!-- <div class="team-detail">
			
		</div> -->
		<!-- <div class="divide"></div> -->
		<mt-cell title='成员' > <span class="member">{{member}}</span></mt-cell>
	</div>
	<div class="split"></div>
	<div class="time">
		<h1 class="time-title">时间跨度</h1>
		<div class="select-box">
			<span class="item first" @click='weekRange($event)'>1周内</span>
			<span class="item selected" @click='monthRange($event)'>1月内</span>
			<span class="item" @click='yearRange($event)'>1年内</span>
		</div>
		<mt-cell title="开始时间" @click.native="openStart" is-link>{{start | timeFilter}}</mt-cell>
		<!-- <div class="divide"></div> -->
		<mt-cell title="结束时间" @click.native="openEnd" is-link>{{end | timeFilter}}</mt-cell>
	</div>
	<div class="yz" @click="query">
		<div class="button">查询</div>
	</div>
	<mt-datetime-picker
		ref='start'
		type='date'
		v-model='start'
		>
	</mt-datetime-picker>
	<mt-datetime-picker
		ref='end'
		type='date'
		v-model='end'
		:endDate='endDate'
		>
	</mt-datetime-picker>
	<div class="query-result" v-show='detailShow'>
		<div class="header">
			<div class="back" @click='hideDetail'>
			</div>
			<h1 class="title">工作量统计</h1>
		</div>

		<div class="detail">
			<div class="tip">
				<p class="team-name">{{teamName}}</p>
				<p class="time">{{start | timeFilter}} 至 {{end | timeFilter}}</p>
			</div>

			<div class="detail-item" v-for="item in items">
				<div class="split"></div>
				<h1 class="title">{{item.type}}{{item.category | categoryFilter}}</h1>
				<!-- <div class="divide"></div> -->
				<div class="list" v-for='list in item.workList'>
					<span class="name">{{list.name}}</span> <span class="num">{{list.num}}</span>
				</div>
				<div class="count-item">
					<span class="count">合计</span><span class="num">{{item.count}}</span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { Cell,DatetimePicker } from 'mint-ui'
import api from '../../api/index.js'
export default{
	data(){
		return {
			teamName: '',
			member:'',
			start: '',
			teamId: '',
			end: '',
			endDate:new Date(),
			detailShow: false,
			items:[]
		}
	},
	methods:{
		query(){
			// [{"endDate":"2017-07-24","memberIds":"","startDate":"2017-06-24","teamId":"11"}]
			let endDate = this.end.getFullYear() + '-' +(this.end.getMonth()+1)+'-'+this.end.getDate();
			let startDate = this.start.getFullYear() + '-' +(this.start.getMonth()+1)+ '-'+this.start.getDate();
			let params = [{'endDate':endDate,'memberIds':'','startDate':startDate,'teamId':this.teamId}];
			this.detailShow = true;
			api.commonAjax(params,'pcn.teamService','teamStatistics').then((res)=>{
				if(res.code ==200){
					this.items = res.body;
					console.log(this.items)
				}
			})
		},
		hideDetail(){
			this.detailShow = false;
		},
		getData(){
			let id = JSON.parse(sessionStorage.getItem('userInfo')).id;
			
			console.log(id)
			let params = [id];
			api.commonAjax(params,'pcn.myResidentDoctorService','queryDoctorInfo')
				.then((res)=>{
					if(res.code ==200){
						// console.log();
						// let member = '';
						res.body.doctorInfo.forEach((item)=>{
						
							this.member =this.member + item.name+ ' ';
						 // = member
						})
						// console.log(this.member)
						this.teamName = res.body.teamInfo[0].teamName;
						this.teamId = res.body.teamInfo[0].teamId;
					}
				})
		},
		weekRange(event){
			let target = event.currentTarget;
			let items = target.parentNode.getElementsByClassName('item');
			for(let i =0,len=items.length;i<len;i++){
				items[i].classList.remove('selected')
			}
			target.classList.add('selected');
			this.end = new Date();
			this.start = new Date();
			let date = this.start.getDate() -7;
			this.start.setDate(date);
			// let middleDate = this.end;
			// this.start = middleDate;
			// let date = this.end.getDate() - 7
			// this.start.setDate(date)
			// if(date > 0){
			// 	this.start.setDate(date);
			// }else{
			// 	let month = this.end.getMonth()+1;
			// 	if(month > 0){
			// 		this.start.setMonth(month - 1);
			// 		switch(month){
			// 			case '1':
			// 			case '3':
			// 			case '5':
			// 			case '7':
			// 			case '8':
			// 			case '10':
			// 			case '12':
			// 				date = 31+date;
			// 				break;
			// 			case '2':
			// 			 	date = 28 + date;
			// 			 	break;
			// 			case '4':
			// 			case '6':
			// 			case '9':
			// 			case '11':
			// 				date = 30 + date;
			// 				break;
			// 		}
			// 	}
			// }
		},
		monthRange(event){
			let target = event.currentTarget;
			let items = target.parentNode.getElementsByClassName('item');
			for(let i =0,len=items.length;i<len;i++){
				items[i].classList.remove('selected')
			}
			target.classList.add('selected');
			this.end = new Date();
			this.start = new Date();
			let month = this.start.getMonth()-1;
			this.start.setMonth(month);
			// this.start = this.end;
			// console.log(this.start);
			// console.log(this.end)
			// let month = this.end.getMonth() -1;
			// console.log(month)
			// this.start.setMonth(month)
		},

		yearRange(event){
			let target = event.currentTarget;
			let items = target.parentNode.getElementsByClassName('item');
			for(let i =0,len=items.length;i<len;i++){
				items[i].classList.remove('selected')
			}
			target.classList.add('selected');
			this.end = new Date();
			this.start = new Date();
			let year = this.start.getFullYear()-1;
			this.start.setFullYear(year)
			// this.start = this.end;
			// let year = this.end.getFullYear()-1;
			// this.start.setFullYear(year);
		},
		openStart(){
			this.$refs.start.open();
		},
		openEnd(){
			this.$refs.end.open();
		},
	},
	filters:{
		timeFilter(value){
			let year = value.getFullYear();
			let month = value.getMonth()+1;
			month = month < 10 ?'0'+month:month;
			let date = value.getDate();
			let value2 = year + '-' + month + '-' + date;
			return value2;
		},
		categoryFilter(value){
			if(value == 1){
				return '(人)';
			}else if(value == 2){
				return '(人次)'
			}
		}
	},
	mounted(){
		this.getData()
		this.end = new Date();
		// this.endDate = new Date(startDate.getFullYear(),startDate.getMonth()-1,startDate.getDate())
		this.start = new Date();
		this.start.setMonth(this.end.getMonth()-1);
		// endDate.setMonth(startDate.getMonth()-1)

		// this.endDate = date.getFullYear() + '-'+(date.getMonth()+1) + '-' + date.getDate();
		// this.startDate = date.getFullYear() + '-'+date.getMonth() + '-' + date.getDate()
	},
	components:{
		'mt-cell':Cell,
		'mt-datetime-picker': DatetimePicker
	}
}
</script>
<style lang="less">
.work-load{
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
	.team{
		.divide{
			background-color: #e0e0e0;
			height: 1px;
		}
		.mint-cell-title{
			color:#888;
		}
		.mint-cell-value{
			color:#64ccf8;
		}
		.member{
			color:#000;
		}
	}
	.split{
		height: 0.3rem;
		background-color: #e0e0e0;
	}
	.time{
		.time-title{
			font-size: 16px;
			color:#333;
			line-height: 24px;
			padding: 0.2rem;
		}
		.select-box{
			display: flex;
			padding: 0.2rem 0;
			border-bottom: 1px solid #f2f2f2;
			.item{
				width: 28%;
				display: inline-block;
				// flex:0 0 28%;
				font-weight: 100;
				font-size: 14px;
				color:#666;
				margin-right: 0.2rem;
				text-align: center;
				padding: 0.2rem 0;
				border:1px solid #e0e0e0;
				border-radius: 0.1rem;
				// justify-content: space-around;
			}
			.first{
				margin-left: 0.3rem;
			}
			.selected{
				border-color: #64ccf8;
				color:#64ccf8;
			}
		}
		.divide{
			background-color: #e0e0e0;
			height: 1px;
		}
		.mint-cell-title{
			color:#888;
		}
		.mint-cell-value{
			color:#333;
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
	.query-result{
		position: fixed;
		top:0;
		left:0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		overflow: auto;
		.detail{
			.tip{
				background-color: #49cb5f;
				padding:0.3rem 0.2rem;
				.team-name{
					font-size: 18px;
					color:#333;
					line-height: 28px;
				}
				.time{
					font-size: 18px;
					color: #333;
					line-height: 28px;
				}
			}	
			.detail-item{
				font-size: 0;
				.divide{
					background-color: #999;
					height: 1px;
				}
				.title{
					font-size: 16px;
					color:#64ccf8;
					padding: 0.3rem 0.2rem;
					border-bottom: 1px solid #999;
				}
				.list{
					padding: 0.2rem;
					border-bottom: 1px solid #999;
					.name{
						font-size: 16px;
						color:#666;
					}
					.num{
						font-size: 16px;
						color:red;
						float:right;
					}
				}
				.count-item{
					padding:0.3rem 0.2rem;
					.count{
						font-size: 16px;
						color: #666;
					}
					.num{
						font-size: 20px;
						color:red;
						float:right;
					}
				}
			}
		}
	}
}
</style>