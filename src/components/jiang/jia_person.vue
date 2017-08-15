<template>
<div class="person">
	<div class="header">
		<div class="ma" @click = 'showMa'>
		</div>
			<div class="avatar">
				<div class="avatar-box">
					<img ref ='avatarimage' :src="src" width="90" height="90">
				</div>
				<form  role="form" id="imgupload" v-on:submit.prevent>
	       			<input type="file" name="upload" id="avatar_load" @change="uploadimg" accept="image/*" />
   			 	</form>
			</div>
		
		<div class="info">
			<div class="doctor">
				<router-link to='/jia_data'>
					<span class="name">{{name}}</span>
				</router-link>
				<router-link to='/jia_data'>
					<span class="profession">{{docType}}</span>
				</router-link>
			</div>
			<div class="hos">{{hos}}</div>
		</div>
	</div>
	<div class="service">
			<div class="item left" @click='toPerson'>
				<span class="ser-name">签约居民</span>
				<span class="ser-number">{{signNumber}}人</span>
			</div>
			<div class="item" @click="toPackage">
				<span class="ser-name">服务包</span>
				<span class="ser-number">{{packNumber}}个</span>
			</div>
		
	</div>
	<div class="content-wrapper">
		<router-link to="/home/fwtdtema" >
			<mt-cell title="我的团队" is-link>
  				 <img slot="icon" src="../../assets/img/jia_wo_team.png" width="20" height="20">
			</mt-cell>
		</router-link> 
		<router-link to="/jia_workload">
			<mt-cell title="工作量统计" is-link>
  				 <img slot="icon" src="../../assets/img/jiang_wo_work.png" width="20" height="20">
			</mt-cell>
		</router-link> 
		<router-link to="/jia_mould">
			<mt-cell title="模板管理" is-link>
	  			 <img slot="icon" src="../../assets/img/jia_wo_mould.png" width="20" height="20">
			</mt-cell>
		</router-link>
		<div class="divide"></div>
		<router-link to="/jia_setter">
			<mt-cell title="设置" is-link>
	  			 <img slot="icon" src="../../assets/img/jia_setter.png" width="20" height="20">
			</mt-cell>
		</router-link>
	</div>
	<router-link to="/">
		<div class="out">
			<div class="button">退出</div>
		</div>
	</router-link>	
	<div class="mask" v-show="ma_show" id="mask" @click="hideMa($event)">
	</div>
	<transition name ='show'>
			<div class="ma-content" v-show="ma_show">
				<div class="ma-header">
					<div class="ma-avatar">	
					</div>
					<div class="ma-info">
						<div class="ma-name">{{name}}</div>
						<div class="ma-hos">{{hos}}</div>
					</div>
				</div>
				<div class="ma-img">
					<div class="ma-box"></div>
					<p class="txt">扫一扫二维码，和家医签约</p>
				</div>
			</div>
		
	</transition>
	<div class="flexbox">
				<router-link to="/xie_home" class="flex_left" > 
						<div class="xie_img_box">
							<img src="../../assets/img/xie_shouye.png"  >
						</div>
						<span>首页</span>
				</router-link>
				<router-link to="/Residents" class="flex_center">
						<div class="xie_img_box">
							<img src="../../assets/img/xie_jum.png" >
						</div>
						<span>居民</span>
				</router-link>
				<router-link to="/jia_person" class="flex_right">
						<div class="xie_img_box">
							<img src="../../assets/img/xie_my.png" >
						</div>
						<span>我的</span>
				</router-link>
			</div>
</div>
</template>
<script>
 import { Button,Cell } from 'mint-ui'
  // import divide from '../common/jia_divide.vue'
 import api from '../../api/index';
 export default{
  	data(){
  		return {
  			name:'',
			sex: '',
			edit: false,
			docType: '',
	  		hos: '',
	  		phoneNumber:'',
	  		avatarId: '',
	  		ma_show: false,
	  		signNumber: '',
	  		packNumber: '',
	  		src: require('../../assets/img/jia_wo_avatar.png')
  		}
  	},
  	methods:{
  		showMa(){
  			this.ma_show = true;
  		},
  		hideMa(event){
  			let id= event.target.id;
  			if(id === 'mask'){
  				this.ma_show = false;
  			}
  		},
  		uploadimg(){
  			// console.log('上传图片了')
  			let imguploadform = document.getElementById('imgupload');
  			let load = document.getElementById('avatar_load');
  			let file = load.files[0],
  				reader = new FileReader(),
  				img = this.$refs.avatarimage;
  				// console.log(img);
  				// console.log(imguploadform);
  				// console.log(load)
  				// console.log(file)

  				reader.readAsDataURL(file);
	  			reader.onload = (e)=>{
	  				let result = reader.result;
	  				// console.log(result)
	  				if(result){
	  					img.src = result;
	  				}
	  			}

			let formData = new FormData(imguploadform);
			
			formData.append('url',load.files[0])
			console.log(formData)
			api.imguploadAjax(formData).then((res)=>{
				if(res.code===200){
					console.log('图片上传成功了')
				}
			})
			// /hcn-web//upload
			// http://122.224.131.235:9090/pcn-core/*.jsonRequest
		},
		toPerson(){
			this.$router.push('residents')
		},
		getData(){
			let userid = JSON.parse(sessionStorage.getItem('userInfo')).id;
			let params = [userid,''];
			api.commonAjax(params,'pcn.myResidentDoctorService','personalInfo')
				.then((res)=>{
					if(res.code === 200){
						console.log(res.body)
						//整体信息
						let data = res.body;
						this.packNumber = data.packNum;
						this.signNumber = data.signNum;
						//医生个人信息
						let data2 = data.docInfo;
						this.hos = data.orgName;
						this.name = data2.name;
						this.avatarId = data2.avatarFileId;
						// this.docType = data2.docType;
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
						// this.avatarId = data2.avatarFileId;
						if(this.avatarId != 0){
							this.src = api.imgUrl(this.avatarId)
						}
					}
				})
		},
		toPackage(){
			this.$router.push('jia_serPackage');
		}
  	},
  	created(){
  		this.getData();
  	},
  	mounted(){
  		this.phoneNumber = JSON.parse(sessionStorage.getItem('userInfo')).loginName
  		this.$store.dispatch('jia_setPhoneNumber',this.phoneNumber)
  	},
 	components:{
 		'mt-button': Button,
 		'mt-cell':Cell,
 	}
 }
</script>
<style scoped>
.person{
	background-color: #f0f0f0;
	position: relative;
}
.person .header{
	width: 100%;
	padding-top: 60%;
	background-image: url('../../assets/img/jia_header.png');
	background-repeat: no-repeat;
	-webkit-background-size:cover;
	background-size: cover;
	position: relative;
}
.person .header .ma{
	width: 30px;
	height: 30px;
	position: absolute;
	right: 0.2rem;
	top: 0.2rem;
	background-image: url('../../assets/img/jia_wo_small.png');
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	background-size: cover;
}
.person .header .avatar{
	position: absolute;
	top: 0.8rem;
	left: 50%;
	transform: translateX(-50%);
	width: 90px;
	height: 90px;
	border-radius: 50%;
	overflow: hidden;
	/* background-color: red; */
	/* overflow: hidden; */
	background-repeat: no-repeat;
	-webkit-background-size: contain;
	background-size: contain;

}
.person .header .avatar #avatar_load{
	padding: 1rem 0;
	opacity: 0;
}
.person .header .avatar .avatar-box{
	position: absolute;
	top: 0;
}
.person .header .info{
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 0.6rem;
}
.person .info .doctor .name{
	font-size: 18px;
    color:#d3b56c;
}
.person .info .doctor .profession{
	color: #d1e5f0;
	font-size: 14px;
	/* padding-left: 0.25rem; */
}
.person .info .hos{
	font-size: 14px;
	color: #d1e5f0;
	line-height: 20px;
	padding-top: 0.1rem;
}
.person .service {
	display: flex;
	background-color: #fff;
	padding: 0.2rem 0;
}
.person .service .item{
	flex: 1 1 50%;
}
.person .service .left{
	border-right: 1px solid #e0e0e0;
}
.person .service .item .ser-name{
	display: block;
	width: 100%;
	text-align: center;
	color: #b6b6b6;
	font-size: 0.28rem;
}
.person .service .item .ser-number{
	display: block;
	width: 100%;
	text-align: center;
	padding-top: 10px;
	color: #60c8f5;
	font-size: 0.32rem;
}
.person .content-wrapper{
	background-color: #fff;
	margin-top: 0.25rem;
	border-bottom: 1px solid #e0e0e0;
	/* margin-top: 0.5rem; */
}
.person .content-wrapper .divide{
	background-color: #f2f2f2;
	height: 0.2rem;
}
.person .out{
	width: 90%;
	height: 0.8rem;
	margin-top: 0.5rem;
	margin-left: 50%;
	transform: translateX(-50%);
	background-color: #ff4444;
	border-radius: 5px;
	text-align: center
}
.person .out .button{
	/* background-color: #e44f4f; */
	line-height:  0.8rem;
	font-size: 0.4rem;
	color: #d0f2f5;
}
.person .mask{
	position: fixed;
	width: 100%;
	top:0;
	bottom: 0;
	left: 0;
	background-color: rgba(0,0,0,0.7);
}
.person  .ma-content{
	width: 90%;
	margin-left: 5%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.person  .ma-content .ma-header{
	position: relative;
	background-color: #fff;
	/* height: 2rem; */
	border-radius: 5px 5px 0 0;
}
.person .ma-content .ma-avatar{
	width: 1.4rem;
	height: 1.4rem;
	position: absolute;
	left: 50%;
	margin-left: -0.7rem;
	margin-top: -0.7rem;
	background-image: url('../../assets/img/jia_wo_avatar.png');
	background-repeat: no-repeat;
	-webkit-background-size: contain;
	background-size: contain;

}
.person .ma-content .ma-header .ma-info{
	padding-top: 0.9rem;
	text-align: center;
}
.person .ma-content .ma-info .ma-name{
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	color: #6c6c6c;
}
.person .ma-content .ma-info .ma-hos{
	font-size: 14px;
	line-height:20px; 
	padding: 10px 0;
	color: #bababa;
}
.person .ma-content .ma-img{
	background-color: #57c9fd;
	padding-top: 0.3rem;
}
.person .ma-content .ma-img .ma-box{
	width: 80%;
	margin-left: 10%;
	padding-top: 80%;
	background-image: url('../../assets/img/jia_wo_large.png');
	-webkit-background-size: contain;
	background-size: contain;
	background-repeat: no-repeat;
}
.person .ma-content .ma-img .txt{
	text-align: center;
	color: #c2eafe;
	font-size: 12px;
	padding: 10px 0;
}
.flexbox{
	height: 1rem;
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	background: #fff;
}
.flex_left,.flex_center,.flex_right{
	flex: 1 1 33%;
	display: flex;
	flex-direction:column;
}
.xie_img_box{
	height: 0.5rem;
}
.flexbox img{
	width: 0.4rem;
	height: 0.4rem;
	float: left;
	padding-left: 1rem;
	margin-top: 0.1rem;
/*	line-height: 0.3rem;*/
	justify-content: center;
	align-content: center;
	
}
.flexbox span{
	font-size: 0.3rem;
	text-align: center;
	height: 0.5rem;
	padding-top: 0.1rem;
}

/* .show-enter-active,.show-leave-active{
	transition: 1s;
}
.show-enter,.show-leave-to{
	top: -50%;
} */
</style>