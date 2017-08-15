<template>
<div class="add-people">
	<div class="header">
		<router-link to='/jia_person'>
			<div class="back">
			
			</div>
		</router-link>
		<h1 class="title">添加居民</h1>
	</div>
	<div class="content">
		<mt-cell title='国籍/地区' :value='zone' is-link @click.native='showZone'>
			<img slot="icon" src="../../assets/img/jia_wo_team.png" width="24" height="24" >
		</mt-cell>
		<transition name='slide'>
			<div class="zone" v-show='zoneShow'>
				<mt-radio title='国籍/地区' v-model='zoneIndex' :options='zones' @click.native='zoneHide'></mt-radio>
			</div>
		</transition>
		
		<mt-cell title='证件类型' :value='cardType' is-link @click.native='showCard'>
			<img slot="icon" src="../../assets/img/jia_setter.png" width="24" height="24" >
		</mt-cell>
		<transition name='slide'>
			<div class="type" v-show='cardShow'>
				<mt-radio title='证件类型' v-model='cardIndex' :options='cardTypes' @click.native='cardHide'></mt-radio>
			</div>
		</transition>
		<mt-cell title='证件号码'>
			<img slot="icon" src="../../assets/img/jia_wo_doc.png" width="24" height="24" >
			<input class='input-box'@input='validate($event)' @change='validateForm($event)' type="text" placeholder="请输入证件号码">
		</mt-cell>
	</div>
</div>
</template>
<script>
import { Cell } from 'mint-ui'
import { Radio } from 'mint-ui'
export default{
	data(){
		return {
			zone: '中国',
			cardType:'居民身份证',
			zoneIndex: '0',
			cardIndex: '0',
			zoneShow: false,
			cardShow: false,
			cardTypes:[{
					label: '居民身份证',
					value: '1'
				},
				{
					label: '军官证',
					value: '2'
				},
				{
					label: '出生证明',
					value: '3'
				}],
			zones:[{
				label: '中国',
				value: '0'
			},
			{
				label:'中国台湾',
				value: '1'
			},
			{
				label: '中国香港澳门',
				value: '2'
			},
			{
				label: '护照',
				value: '3'
			}],
			zonesDic:['中国','中国台湾','中国香港澳门','海外'],
			cardTypesDic:['居民身份证','军官证','出生证明','台湾居民来往内地通行证','港澳居民来往内地通行证','海外'],
			types:[
				[{
					label: '居民身份证',
					value: '0'
				},
				{
					label: '军官证',
					value: '1'
				},
				{
					label: '出生证明',
					value: '2'
				}],
				[{
					label: '台湾居民来往内地通行证',
					value: '3'
				}],
				[{
					label: '港澳居民来往内地通行证',
					value: '4'
				}],
				[{
					label: '护照',
					value: '5'
				}]
			],
		}
	},
	methods:{
		showZone(){
			this.zoneShow = !this.zoneShow
		},
		showCard(){
			this.cardShow = !this.cardShow
		},
		zoneHide(){

			this.zoneShow = false
		},
		cardHide(){
			this.cardShow = false
		},
		validate(event){
			let target = event.target;
			let value = target.value;
			console.log(value)
			value = value.replace(/[^\d]/,'');
			target.value = value;
		},
		validateForm(event){
			let value = event.currentTarget.value;
			switch(this.cardIndex){
				case '0':
					console.log(value)
					break;
				case '1':
					console.log(value)
					break;
				case '2':
					console.log(value)
					break;
				case '3':
					console.log(value)
					break;
				case '4':
					console.log(value)
					break;
				case '5':
					console.log(value)
			}
		}
	},
	watch:{
		zoneIndex(){
			this.zone = this.zonesDic[this.zoneIndex]
			// console.log(this.index)
			this.cardTypes = this.types[this.zoneIndex]
		},
		cardTypes(){
			this.cardType = this.cardTypes[0].label;
		},
		cardIndex(){
			this.cardType = this.cardTypesDic[this.cardIndex]
			console.log(this.cardIndex)
		}
	},
	components:{
		'mt-cell':Cell,
		'mt-radio':Radio
	}
}
</script>
<style lang="less">
.add-people{
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
	.zone{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color: #fff;
		z-index: 1000;
	}
	.type{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color: #fff;
		z-index: 1000;
	}
	.mint-radiolist-title{
		font-size: 18px;
		color:#60c8f5;
		text-align: center;
	}
	.input-box{
		// height: 20px;
		font-size: 16px;
		text-align: right;
		padding-right: 0.2rem;
		outline-style: none;
		border-color: transparent;
	}
	.slide-enter-active,.slide-leave-active{
		transition:0.5s;
	}
	.slide-enter,.slide-leave-to{
		transform:translateX(100%);
	}
}
</style>