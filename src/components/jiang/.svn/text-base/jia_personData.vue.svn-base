<!-- 个人资料的模块 -->
<template>
<div class="person-data">
	<div class="header">
		<router-link to='/jia_person'>
			<div class="back">
			
			</div>
		</router-link>
		<h1 class="title">我的资料</h1>
	</div>
	<div class="person-avatar">
		<div class="avatar ">
			
			<img :src="avatarSrc" width="40" height="40">
		</div>
		<span class="name">{{name}}</span>
	</div>
	<div class="info">
		<div class="base-info">
			<div class="base-info-cell">
				<span class="info-name">性别</span><span class="info-value">{{sex}}</span>
			</div>
			<div class="base-info-cell">
				<span class="info-name">机构</span><span class="info-value">{{hos}}</span>
			</div>
			<div class="base-info-cell last">
				<span class="info-name">类别</span><span class="info-value">{{docType}}</span>
			</div>
		</div>
		<div class="divide"></div>
		<div class="change-info">
			<!-- <router-link to='/jia_idCard'> -->
				<mint-cell title='身份证号' :value='idCard'></mint-cell>
			<!-- </router-link>	 -->
			<!-- <router-link to='/jia_phone'> -->
				<mint-cell title='手机号' :value='phoneNumber'>
					
				</mint-cell>
				<router-link to='/jia_bigphoto'>
					<mint-cell title='资质证书' is-link>
						<img :src="src1" width="30" height="24" class='right'>
						<img :src="src2" width="30" height="24">
					</mint-cell>
				</router-link>
		</div>
		<div class="divide"></div>
		<div class="intro">
			<div class="change-intro">
				<h1 class="title">简介</h1>
				<span class="change fr" @click='editIntro'></span>
			</div>
			<div class="intro-text-wrapper"v-show="!edit">
				<p class="intro-text" v-show="!isEmpty"> 
					{{intro}}
				</p>
				<p class="intro-text" v-show="isEmpty">暂无介绍</p>
			</div>
			<div class="edittxt" v-show="edit">
				<textarea  id="edittext"  cols="30" rows="10" placeholder="开始编辑"></textarea>
				<span class="sub" @click= 'saveEdit'>提交</span>
			</div>
			
		</div>
	</div>
</div>
</template>
<script>
import { Cell } from 'mint-ui'
import { mapState } from 'vuex'
import api from '../../api/index.js'
import { MessageBox,Indicator } from 'mint-ui'
export default{
	data(){
		return {
			name:'',
			sex: '',
			edit: false,
			docType: '',
	  		hos: '',
	  		phoneNumber:'',
	  		idCard: '',
	  		src1: require('../../assets/img/certificate1.jpg'),
	  		src2: require('../../assets/img/certificate2.jpg'),
	  		intro:'',
	  		avatarSrc: require("../../assets/img/jia_wo_avatar.png")
		}
	},
	methods:{
		editIntro(){
			this.edit = !this.edit
		},
		saveEdit(){
			this.intro = document.getElementById('edittext').value;
			this.edit = false;
			let that = this;
			let doctorId = JSON.parse(sessionStorage.getItem('userInfo')).id;
			let params = [{'introduce':this.intro,'doctorId': doctorId}]
			api.commonAjax(params,'pcn.myResidentDoctorService','updateDocInfo')
			.then((res)=>{
				if(res.data === 200){
					that.getData()
				}
			})
		},
		getData(){
			Indicator.open()
			let userid = JSON.parse(sessionStorage.getItem('userInfo')).id;
			let params = [`${userid}`,''];
			api.commonAjax(params,'pcn.myResidentDoctorService','personalInfo')
				.then((res)=>{
					if(res.code === 200){
						console.log(res.body)
						//整体信息
						let data = res.body;
						//医生个人信息
						let data2 = data.docInfo;
						//给data里面的属性赋值
						this.hos = data.orgName;
						this.name = data2.name;
						this.idCard = data2.idCard;
						// this.docType = data2.docType
						// this.docType = '全科医生'
							switch (data2.docType) {
				                case "01":
				                    this.docType = "全科医生";
				                    break;
				                case "02":
				                    this.docType = "全科护士";
				                    break;
				                case "03":
				                    this.docType = "公卫医生";
				                    break;
				                case "04":
				                    this.docType = "公卫护士";
				                    break;
				                case "05":
				                    this.docType = "计生医生";
				                    break;
				                case "06":
				                    this.docType = "中医师";
				                    break;
				                case "09":
				                    this.docType = "其他";
				                    break;
				                default:
				                    this.docType = "暂无分类";
				                    break;
				            }
						this.phoneNumber = data2.phoneNo;
						if(data2.sex == 1){
							this.sex = '男'
						}else if(data2.sex == 2){
							this.sex = '女'
						}else if(data2.sex == 9){
							this.sex = '未说明的性别'
						}
						this.intro = data2.introduce;
						if(data2.avatarFileId != 0){
							this.avatarSrc = api.imgUrl(data2.avatarFileId)
						}
						this.src1 = api.imgUrl(data2.certificateHead)
						this.src2 = api.imgUrl(data2.certificateBack)
						this.$store.dispatch('jia_setSrcs',[this.src1,this.src2]);
						Indicator.close()
					}
				})
		},
		// getDic(){
		// 	api.dicAjax('').then((res)=>{
		// 		if(res.code === 200){
		// 			// console.log(res)
		// 		}
		// 	})
		// }
	},
	computed:{
		isEmpty(){
			if(this.intro === ''){
				return true;
			}else{
				return false;
			}
		},
	},
	created(){
		this.getData();
		// this.getDic();
	},
	components:{
		'mint-cell': Cell
	}
}
</script>
<style lang="less" scoped>
.person-data{
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
	.person-avatar{
		background-color: #fff;
		.avatar{
			display: inline-block;
			width: 0.8rem;
			height: 0.8rem;
			// margin-top: 0.2rem;
			// background-image: url();
			// background-size: contain;
			// background-repeat: no-repeat;
			margin: 0.1rem 0 0.1rem 0.2rem ;
		}
		.name{
			display: inline-block;
			font-size: 16px;
			vertical-align: top;
			padding-top: 0.37rem;
			color:#8bb3f4;
		}
	}
	.info{
		margin-top:0.2rem;
		background-color: #fff;
		font-size: 0;
		.base-info{
			padding: 0 0.2rem;
			// line-height: 1rem;
			.base-info-cell{
				padding-top:0.2rem;
				.info-name{
					font-size: 14px;
					color:#b3b3b3;
					}
				.info-value{
					margin-left: 0.2rem;
					font-size: 14px;
					color:#6a6a6a;
				}
			}
			.last{
				padding-bottom: 0.2rem;
			}
		}
		.divide{
			background-color: #f2f2f2;
			width: 100%;
			height: 0.2rem;
		}
		.change-info{
			// margin-top: 0.2rem;

			.mint-cell-text{
				color:#6a6a6a;
				font-size: 14px;
			}
			.mint-cell-value{
				color:#b3b3b3;
				font-size: 14px;
			}
			#fileLoad{
				float: right;
			}
			img.right{
				margin-right: 5px;
			}
		}
		.intro{
			margin-top: 0.2rem;
			.change-intro{
				// width: 100%;
				// position: relative;
				padding-bottom: 0.2rem;
				border-bottom: 1px solid #e0e0e0;
				.title{
					display: inline-block;
					padding-left: 0.1rem;
					color:#b3b3b3;
					font-size: 12px;
					line-height: 16px;
					border-left: 5px solid #59c9fd;

				}
				.change{
					display: inline-block;
					width: 0.5rem;
					height: 0.5rem;
					background-image: url('../../assets/img/jia_wo_edit.png');
					background-repeat: no-repeat;
					background-size: contain;
					position: relative;
					top:-0.1rem;
					padding-left: 0.2rem;
				}
			}
			.intro-text{
				font-size: 14px;
				color:#666;
				padding: 0.2rem 0.2rem 0.2rem 0.1rem;
				line-height: 20px;
			}
			.edittxt{
				position: relative;
				#edittext{
					outline-style: none;
					padding: 0.2rem 0.3rem 0;
					border-color: transparent;
					font-size: 14px;
				}
				#edittext::placeholder{
					color:#bcbcbc;
				}
				.sub{
					display: inline-block;
					font-size: 14px;
					background-color: #57c9fd;
					color:#c5effb;
					padding: 5px 10px;
					border-radius: 5px;
					position: absolute;
					right:2px;
					bottom: 2px;
				}
			}
		}
	}
}
</style>
