<template>
<div class="add-people">
	<div class="header">
		<router-link to='/Residents'>
			<div class="back">

			</div>
		</router-link>
		<h1 class="title">添加居民</h1>
	</div>
	<div class="content">
		<mt-cell title='国籍/地区' :value='zone' is-link @click.native='showZone'>
			<img slot="icon" src="../../assets/img/mao_nationality.png" width="24" height="24" >
		</mt-cell>
		<transition name='slide'>
			<div class="zone" v-show='zoneShow'>
				<mt-radio title='国籍/地区' v-model='zoneIndex' :options='zones' @click.native='zoneHide'></mt-radio>
			</div>
		</transition>
		
		<mt-cell title='证件类型' :value='cardType' is-link @click.native='showCard'>
			<img slot="icon" src="../../assets/img/mao_certificate.png" width="24" height="24" >
		</mt-cell>
		<transition name='slide'>
			<div class="type" v-show='cardShow'>
				<mt-radio title='证件类型' v-model='cardIndex' :options='cardTypes' @click.native='cardHide'></mt-radio>
			</div>
		</transition>
		<mt-cell title='证件号码'>
			<img slot="icon" src="../../assets/img/mao_sfznum.png" width="24" height="24" >
			<input class='input-box' @change='validateForm($event)' placeholder="请输入证件号码" ref="mao_hdzhi">
		</mt-cell>
		<div class="mao_butn">
			<mt-button type="primary" @click.native="mao_djcxyz">查询</mt-button>
		</div>
	</div>
</div>
</template>
<script>
import { Cell } from 'mint-ui';
import { Radio,Button,MessageBox } from 'mint-ui';
import { commonAjax,imgUrl } from "../../api/api.js";
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
		// validate(event){
		// 	let target = event.target;
		// 	let value = target.value;
		// 	// console.log(value)
		// 	// value = value.replace(/[^\d]/,'');
		// 	target.value = value;
		// },
		validateForm(event){
			let value = event.currentTarget.value;
			switch(this.cardIndex){
				case '0':
					// console.log(value)
					break;
				case '1':
					// console.log(value)
					break;
				case '2':
					// console.log(value)
					break;
				case '3':
					// console.log(value)
					break;
				case '4':
					// console.log(value)
					break;
				case '5':
					// console.log(value)
			}
		},
		mao_djcxyz(){
			if(this.cardType=="居民身份证"){
				//判断居民身份证/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(this.$refs.mao_hdzhi.value)
				if(this.isCardID(this.$refs.mao_hdzhi.value)){
					// console.log("身份证正确")
					sessionStorage.setItem("shenfenzid",this.$refs.mao_hdzhi.value);
					//01选择地区是中国，目前写死的。没有字典值
					let params=[this.$refs.mao_hdzhi.value,"01"];
					commonAjax(params,'pcn.myResidentDoctorService','signVerification').then(res=>{
						if(res.code==200){
							console.log(res)
							}
						})
					this.$router.push("/Residents/adjm/jmzlone")
				}else{
					MessageBox('提示', '身份证信息有误');
				}
			}
			if(this.cardType=="台湾居民来往内地通行证"){
				if(/[A-Z][0-9]{9}/.test(this.$refs.mao_hdzhi.value)){
					sessionStorage.setItem("shenfenzid",this.$refs.mao_hdzhi.value);
					console.log("身份证正确")
					this.$router.push("/Residents/adjm/jmzlone")
				}else{
					MessageBox('提示', '身份证信息有误');
				}
			}
			if(this.cardType=="港澳居民来往内地通行证"){
				if(/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(this.$refs.mao_hdzhi.value)){
					sessionStorage.setItem("shenfenzid",this.$refs.mao_hdzhi.value);
					console.log("身份证正确")
					this.$router.push("/Residents/adjm/jmzlone")
				}else{
					MessageBox('提示', '身份证信息有误');
				}		
			}
			if(this.cardType=="护照"){
				if(/^[a-zA-Z]{5,17}$/.test(this.$refs.mao_hdzhi.value)|/^[a-zA-Z0-9]{5,17}$/.test(this.$refs.mao_hdzhi.value)){
					sessionStorage.setItem("shenfenzid",this.$refs.mao_hdzhi.value);
					console.log("身份证正确")
					this.$router.push("/Residents/adjm/jmzlone")
				}else{
					MessageBox('提示', '身份证信息有误');
				}
			}
		},
		isCardID(sId){
		var iSum=0 ;
		var info="" ;
		var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 
		if(!/^\d{17}(\d|x)$/i.test(sId)) return false;
		sId=sId.replace(/x$/i,"a");
		if(aCity[parseInt(sId.substr(0,2))]==null) return false;
		var sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
		var d=new Date(sBirthday.replace(/-/g,"/"));
		if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return false;
		for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
		if(iSum%11!=1) return false;
		aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
		return true;
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
		'mt-radio':Radio,
		"mt-button":Button
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
			background-image: url('../../assets/img/mao_back.png');
			background-size: cover;
		}
		.back img{
			width:100%;
			height:100%;
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
	.mao_butn{width:80%;margin:0 auto;margin-top:.6rem;}
	.mao_butn button{width:100%;}
}
</style>