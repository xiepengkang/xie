<template>
	<div class="mao_detail_two">
		<!--头部-->
		<mt-header fixed title="资料核实">
		    <mt-button icon="back" slot="left"  @click="goback()"></mt-button>
		</mt-header>
		<div class="top">
			实名制签约，请核实居民资料的真实性
		</div>
		
		<div class="progress">
			<div class="pro">
				<dl class="item first">
					<dt class="cir">√</dt>
					<dd class="des">资料填写</dd>
				</dl>
				<dl class="item second">
					<dt class="cir">√</dt>
					<dd class="des">签约确认</dd>
				</dl>
				<dl class="item third">
					<dt class="cir">3</dt>
					<dd class="des">完成</dd>
				</dl>
			</div>
		</div>

		<div class="head">
			<div class="resident">
			<img src="../../assets/img/mao_Resident.png"/>
				<div class="names">
					{{xzjmxm}}
				</div>
				<div class="notes">
					居民签约
				</div>
			</div>
			<div class="doctor">
			<img src="../../assets/img/mao_Doctor.png"/>
				<div class="names">
					{{hqlogindoctor.name}}
				</div>
				<div class="notes">
					医生签约
				</div>
			</div>
		</div>
		
		<form action="">
			
			<mt-cell
			  title="确认方式"
			  is-link
			  :value="texvalue" @click.native="maoqrfs">
			</mt-cell>
			<mt-actionsheet
			:actions="actions"
			v-model="sheetVisible"></mt-actionsheet>
			<mt-cell title="签约生效日期" @click.native="openPicker" is-link>{{mao_baocuntime}}</mt-cell>
			<mt-datetime-picker v-model="pickerVisible" type="date" ref="picker" 
			year-format="{value} 年"
			month-format="{value} 月"
			date-format="{value} 日"
			@confirm="handleConfirm"
			></mt-datetime-picker>	
			<mt-cell title="管理类型" :value="maoglxvalue" is-link :to="{name:'mmanagement',params:{'id':0}}"></mt-cell>
			<div class="new">
			<textarea name="" rows="" cols="" class="news" placeholder="不同签约时此项必填，最多200字" v-model="text"></textarea>
			</div>
		</form>
		<div class="bottom">
			200/<span>{{length}}</span>
		</div>
		<div @click="mxuanzh" class="maoxieyi">
			<mt-checklist
			v-model="value"
			:options="[{label:'已阅读并同意《签约协议》',value:'选中'}]">
			</mt-checklist>
		</div>
		<div class="obutton">
			<mt-button type="primary" @click="next">下一步</mt-button>
		</div>
		
	</div>
</template>

<script>
import { Navbar,TabItem,Header,Button,Cell,Field,Checklist,MessageBox,DatetimePicker,Actionsheet } from 'mint-ui';
import "../../assets/css/mao_style.css";
import {mapState} from 'vuex';
import { commonAjax,imgUrl } from "../../api/api.js";
export default {
    data: function() {
        return {
        	active: 'change',
	      	disactive: 'changs',
            errshow: false,
            error:'',
            value: [],
            selected: '',
			xzjmxm:'',
			pickerVisible:new Date(),
			mao_baocuntime:(new Date()).toLocaleString().slice(0,9),
			text: '',
            length: '',
			hqlogindoctor:"",
			sheetVisible:false,
			texvalue:"请选择确认方式",
			maogllxcsj:[],
			maoglxvalue:'',
			mmorgname:"",
			maobcrqgl:"",
			mysteamid:"",
			mao_pcnApplyPack:[],
			maoalldoctorxx:"",
			maojddetaildz:"",
			actions:[
				{
					name:"请选择确认方式",
					index:"0",
				},
				{
					name:"门诊",
					index:"1",
					method:this.menzaction
				},
				{
					name:"家庭",
					index:"2",
					method:this.jiataction
				},
				{
					name:"电话",
					index:"3",
					method:this.telaction
				},
				{
					name:"短信",
					index:"4",
					method:this.messageaction
				},
				{
					name:"网络",
					index:"5",
					method:this.wanglaction
				},
				{
					name:"其他",
					index:"9",
					method:this.qitaaction
				},
			]
        }
    },
	components:{
		"mt-header":Header,
        "mt-button":Button,
        "mt-cell":Cell,
        "mt-field":Field,
		"mt-checklist":Checklist,
		"mt-datetime-picker":DatetimePicker,
		"mt-actionsheet":Actionsheet
	},
	computed:mapState({
		mallone: state=>state.mao_allone
	}),
    mounted() {	
		this.mmorgname=JSON.parse(sessionStorage.getItem("maoorgname"));
		this.xzjmxm=sessionStorage.getItem("mao_xzxm");
		this.mysteamid=JSON.parse(sessionStorage.getItem("mao_tzfwbqq"));//医生团队id
		// console.log(this.xzjmxm)
		this.mao_pcnApplyPack=JSON.parse(sessionStorage.getItem("mao_aaaaa"));
		//所有医生数据
		this.maoalldoctorxx=JSON.parse(sessionStorage.getItem("mao_tddoctorxx"));
		// console.log(this.maoalldoctorxx)
		//街道详细地址
		this.maojddetaildz=JSON.parse(sessionStorage.getItem("mao_fwdqjd"));

		this.hqlogindoctor=JSON.parse(sessionStorage.getItem("userInfo"));
		this.maogllxcsj=JSON.parse(sessionStorage.getItem("addjmthrgllx"));
		// console.log(this.maogllxcsj.length)
		this.maobcrqgl=this.maogllxcsj.join(",");
		// console.log(this.maobcrqgl)
		for(var o=0;o<this.maogllxcsj.length;o++){
			if(this.maogllxcsj[o]=="01"){
				this.maogllxcsj[o]="孕产妇"
			}
			if(this.maogllxcsj[o]=="02"){
				this.maogllxcsj[o]="0-6岁儿童"
			}
			if(this.maogllxcsj[o]=="03"){
				this.maogllxcsj[o]="65岁以上老人"
			}
			if(this.maogllxcsj[o]=="04"){
				this.maogllxcsj[o]="孕产高血压人群妇"
			}
			if(this.maogllxcsj[o]=="05"){
				this.maogllxcsj[o]="重性精神疾病患者"
			}
			if(this.maogllxcsj[o]=="06"){
				this.maogllxcsj[o]="重性精神疾病患者"
			}
			if(this.maogllxcsj[o]=="07"){
				this.maogllxcsj[o]="肺结核患者"
			}
			if(this.maogllxcsj[o]=="08"){
				this.maogllxcsj[o]="残疾人"
			}
			if(this.maogllxcsj[o]=="09"){
				this.maogllxcsj[o]="计生特殊家庭"
			}
			if(this.maogllxcsj[o]=="10"){
				this.maogllxcsj[o]="一般健康人群"
			}
		}
		this.maoglxvalue=this.maogllxcsj.join(" ")
		// console.log(this.maoglxvalue)		
    },
    
    methods: {
		goback(){
      	this.$router.go(-1);
      	},
      	agree(){
      		this.active='change'
      		this.disactive='changs'
      	  
      	},
      	disagree(){
      		this.active='changs'
      	   	this.disactive='change'
      	},
      	next(){
      		if(this.value=="选中"){
				MessageBox.confirm('确定执行此操作?').then(action => {
				let confirmationSign={
					"beginDate":this.mao_baocuntime+" 00:00:00",
					"checkResult":"1",
					"checkWay":2,
					"createDt":this.mao_baocuntime,
					"doctorName":this.hqlogindoctor.name,
					"isRenewal":"0",
					"orgName":this.mmorgname,
					"personGroup":this.maobcrqgl,
					"resultDesc":this.length,
					"signCycle":"1",
					"teamId":this.mysteamid
				}

				let signApply={
					"address":this.mallone.person.address,
					"city":this.mallone.person.city,
					"district":this.mallone.person.district,
					"dob":this.mallone.person.dob,
					"doctorId":this.maoalldoctorxx.teamLeaderId,
					"doctorName":this.hqlogindoctor.name,
					"idCard":this.mallone.person.idCard,
					"idType":this.mallone.idType,
					"orgId":this.maoalldoctorxx.orgId,
					"orgName":this.mmorgname,
					"personGroup":this.maobcrqgl,
					"personName":this.mallone.person.personName,
					"protocolId":0,
					"province":this.mallone.person.province,
					"sex":this.mallone.person.sex,
					"signCycle":"1",
					"socialSecurityNo":"",
					"status":1,
					"street":this.mallone.person.street,
					"streetText":this.maojddetaildz,
					"teamId":this.mysteamid,
					"tel":this.mallone.person.phoneNo,
					"tenantId":"hcn.shenzhen"
				}
				console.log(signApply.address)
				let params=[
					{
						"confirmationSign":confirmationSign,
						"pcnApplyPack":this.mao_pcnApplyPack,
						"personInfo":this.mallone,
						"signApply":signApply
					}
				]
				//与后台交互添加居民
					commonAjax(JSON.stringify(params),'pcn.myResidentDoctorService','addSignResident').then(res=>{
						if(res.code==200){
							this.$router.push("/Residents/adjm/jmzlthree")
						}else{
							MessageBox('提示', '服务器繁忙');
						}
					})		
				});
			}else{
				MessageBox('提示', '您没有勾选协议');
			}	
      	},
		   openPicker() {
        		this.$refs.picker.open();
		},
			handleConfirm(value){
				// console.log(JSON.stringify(this.pickerVisible))
				var zgmzhuanh=(value).toLocaleString().slice(0,9);
				this.mao_baocuntime=zgmzhuanh;
				console.log(zgmzhuanh)
		},
		mxuanzh(){
			console.log(this.value)
		},
		maoqrfs(){
			this.sheetVisible=true;
		},
		menzaction(){
			this.texvalue="门诊"
			sessionStorage.setItem('qrfszidianzhi',JSON.stringify("1"))
		},
		jiataction(){
			this.texvalue="家庭"
			sessionStorage.setItem('qrfszidianzhi',JSON.stringify("2"))
		},
		telaction(){
			this.texvalue="电话"
			sessionStorage.setItem('qrfszidianzhi',JSON.stringify("3"))
		},
		messageaction(){
			this.texvalue="短信"
			sessionStorage.setItem('qrfszidianzhi',JSON.stringify("4"))
		},
		wanglaction(){
			this.texvalue="网络"
			sessionStorage.setItem('qrfszidianzhi',JSON.stringify("5"))
		},
		qitaaction(){
			this.texvalue="其他"
			sessionStorage.setItem('qrfszidianzhi',JSON.stringify("9"))
		}
    },
	 watch: {
    	text(val){
    		this.length = this.text.length
    	}
    },

}
</script>



<style scoped>
html,body{
	height: 100%;
	width: 100%;
	background: #EBEBEB;
	position: relative;
}	
.mao_detail_two {
	background: #EBEBEB;
}	
.mao_detail_two .mint-header{
		height: 1rem;
		background-color: #fff;
		color: #26a2ff;
	}	
.mao_detail_two .mint-button{
		height: 1.5rem;
	}
.mao_detail_two .mint-header{
		font-size: 0.33rem;
	}
.mao_detail_two .mintui-back{
		font-size: 0.37rem;
	}
.mao_detail_two .top{
	margin-top: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #FFFAD0;
	color: #F4D275;
	height: 0.6rem;
	position: fixed;
	top:0;
	right: 0;
	font-size:.33rem;	
	}
.mao_detail_two .obutton{
	background: #EBEBEB;
	padding: 0.3rem 0.5rem 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	}	
.mao_detail_two .mint-button--normal{
	flex: 1;
	height: 1rem;
	}	
.mao_detail_two .progress{
	margin-top: 1.6rem;
		padding: 0.6rem 0 1.2rem 0;
	}
.mao_detail_two .pro{
			width: 90%;
			margin-left: 5%;
			border-top: 1px solid #d6d6d6;
			position: relative;
		}
.mao_detail_two .item{
				width: 60px;
				position: absolute;
				top:-0.2rem;
			}
.mao_detail_two .first{
				left:0.4rem;
			}
.mao_detail_two .first .cir{
		background-repeat: no-repeat;
		background-size: cover;
		background-color:#fcc648;
		color:#fff;
	}
.mao_detail_two .first .des{
	text-align: center;				
	/*color: #57c9fd;*/
	color: #fcc648;				
}						
.mao_detail_two .cir{
					display: block;
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 50%;
					font-size: 12px;
					line-height: 0.4rem;
					text-align: center;
					margin-left: 20px;
				}
.mao_detail_two .des{
					font-size: 14px;
					margin-top: 10px;
				}
.mao_detail_two .second{
				left: 50%;
				transform:translateX(-50%);
			}
.mao_detail_two .second .cir{
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #fcc648;
	color:#fff;
	}
.mao_detail_two .second .des{
	text-align: center;
		/*color: #57c9fd;*/
		color: #fcc648;
	}						

.mao_detail_two .third{
	right:0.4rem;
	}		
.mao_detail_two .third .cir{
	background: #fff;
	color:#888;
	}
.mao_detail_two .third .des{
	text-align: center;
	color: #888;
	}	
.mao_detail_two .head{
	margin: 0 0.3rem 0.2rem 0.3rem;
	display: flex;
	justify-content: center;
	}	
.mao_detail_two .head img{
	height: 1.5rem;
	width: 1.5rem;
	padding: 0.3rem 0;
	}	
.mao_detail_two .resident,.doctor{
	flex: 1;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #fff;
	border-radius: 5px;
	}	
.mao_detail_two .resident{
	margin-right: 0.3rem;
	}		
.mao_detail_two .notes{
	padding: 0.2rem 0;
	font-size: 0.24rem;
	}	
.mao_detail_two .names{
	font-size: 0.33rem;
	color: #26a2ff;
	}	
.mao_detail_two .Opinion{
	height: 1.12rem;
	display: flex;
	justify-content:space-between;
	align-items: center;
	padding: 0 0.3rem;
	background: #fff;
	}		
.mao_detail_two .Opinion .but{
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	width: 3rem;
	border-radius: 5px;
	border: 1px solid #26a2ff;
	}	
.mao_detail_two .Opinion .disagree,.agree{
	line-height: 0.8rem;
	text-align: center;
	width: 1.5rem;
	color: #26a2ff;
	}	
.mao_detail_two .Opinion .changs{
	float: left;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	width: 1.5rem;
	color: #26a2ff;
	}	
.mao_detail_two .Opinion .change{
	border-radius: 5px;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	width: 1.5rem;
	background: #26a2ff;
	color: #fff;
	}		
.mao_detail_two .news{
	margin: 0.3rem;
	height: 3rem;
	flex: 1;
	background: #EBEBEB;
	}	
.mao_detail_two form{
	background: #fff;
	}	
.mao_detail_two .new{
	display: flex;
	}	
.mao_detail_two .bottom{
	padding: 0 0.3rem;
	display: flex;
	direction: rtl;
	height: 0.6rem;
	background: #fff;
	color: #888;
	font-size:.33rem;
	}	
.mao_detail_two .new{
	display: flex;
	}	
.mao_detail_two .new{
	display: flex;
	}	
								
</style>