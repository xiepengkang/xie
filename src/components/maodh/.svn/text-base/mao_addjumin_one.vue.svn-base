<template>
	<div class="mao_detail_yqx">
		<!--头部-->
		<mt-header fixed title="资料填写">
		  <router-link to="/Residents/adjm" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="top">
			实名制签约，请核实居民资料的真实性
		</div>
		
		<div class="progress">
			<div class="pro">
				<dl class="item first">
					<dt class="cir">1</dt>
					<dd class="des">资料填写</dd>
				</dl>
				<dl class="item second">
					<dt class="cir">2</dt>
					<dd class="des">签约确认</dd>
				</dl>
				<dl class="item third">
					<dt class="cir">3</dt>
					<dd class="des">完成</dd>
				</dl>
			</div>
		</div>
		<form action="">
			<mt-field label="签约居民" placeholder="请输入" v-model="mao_valutext"></mt-field>
			<mt-cell title="证件类型" :value="zjlxid"></mt-cell>
			<mt-cell title="证件号码" :value="sfzid"></mt-cell>
			<mt-field label="联系号码" placeholder="请输入" type="tel" v-model="mao_tellpho"></mt-field>
			<mt-cell title="性别" :value="mao_hqsexdsj" is-link to="/Residents/adjm/jmzlone/msex"></mt-cell>
			<mt-cell title="出生日期" is-link @click.native="openPicker">{{mao_baocuntime}}</mt-cell>
			<mt-datetime-picker v-model="pickerVisible" type="date" ref="picker" 
			year-format="{value} 年"
			month-format="{value} 月"
			date-format="{value} 日"
			:startDate="new Date(0,0,1)"
			:endDate="new Date()"
			@confirm="handleConfirm"
			></mt-datetime-picker>	
			<mt-cell title="居住地址" value="请选择居住地址" is-link to="/Residents/adjm/jmzlone/xzjzaddress">{{mao_xzjmdztx}}</mt-cell>
			<div class="mao_heng"></div>
			<mt-cell title="家庭医生" is-link @click.native="jtysmao" ref='fDoctor'>{{fdoc}}</mt-cell>
			<mt-cell title="服务包" :value="maofwbxzxiang" is-link  @click.native="djfwbtzmao"></mt-cell>
			<mt-actionsheet
			:actions="actions"
			v-model="sheetVisible"></mt-actionsheet>
			<mt-cell title="签约机构" value="万科五园社康中心"></mt-cell>
			<mt-cell title="签约周期" value="1年"></mt-cell>
		</form>
		
		<div class="button">
			<mt-button type="primary" @click="next">下一步</mt-button>
		</div>
		
	</div>
</template>

<script>
import { Navbar,TabItem,Header,Button,Cell,Field,DatetimePicker,MessageBox,Actionsheet,Toast } from 'mint-ui';
import "../../assets/css/mao_style.css";
import { commonAjax,imgUrl } from "../../api/api.js";
import {mapState} from 'vuex'
export default {
    data: function() {
        return {
        	list: [],
            page: 1,
            errshow: false,
            error:'',
            value: '',
            selected: '',
			sfzid:'',
			mao_valutext:"",
			pickerVisible:"",
			mao_baocuntime:"",
			mao_xzjmdztx:"",
			mao_hqsexdsj:"",
			sheetVisible:false,
			actions:[],
			baocdfuwubao:"",
			allshuju:[],
			maofwbxzxiang:"",
			mao_tellpho:"",
			maofdoc:"",
			mchushengny:"",
			zjlxid:"居民身份证",
			nation:"",
			xdzjlxm:""
        }
    },
	components:{
		"mt-header":Header,
        "mt-button":Button,
        "mt-cell":Cell,
        "mt-field":Field,
		"mt-datetime-picker":DatetimePicker,
		"mt-actionsheet":Actionsheet
	},
	computed:mapState({
		fdoc: state=>state.mao_fdoc,
		dqbm: state=>state.mao_shiqubm
	}),
    methods: {

      next(){
		sessionStorage.setItem("mao_xzxm",this.mao_valutext);
		// console.log(this.mao_valutext);
		if(this.mao_valutext==""||this.mao_tellpho==""||this.mao_xzjmdztx==""||this.maofwbxzxiang==""||this.fdoc==""){
			MessageBox('提示', '请完善全部信息');
		}else{
			let maosex="";//定义一个性别的字典值
			if(this.zjlxid=="居民身份证"){
				this.xdzjlxm="01"
				this.nation="01"
			}else if(this.zjlxid=="军官证"){
				this.xdzjlxm="04"
				this.nation="01"
			}else if(this.zjlxid=="出生证明"){
				this.xdzjlxm="11"
				this.nation="01"
			}else if(this.zjlxid=="港澳居民来往内地通行证"){
				this.xdzjlxm="06"
				this.nation="02"
			}else if(this.zjlxid=="台湾居民来往内地通行证"){
				this.xdzjlxm="07"
				this.nation="03"
			}else if(this.zjlxid=="护照"){
				this.xdzjlxm="03"
				this.nation="04"
			}
			if(this.mao_hqsexdsj=="男"){
				maosex="1"
			}else if(this.mao_hqsexdsj=="女"){
				maosex="2"
			}
				
			var	personInfo={
					"idType":this.xdzjlxm,
					"person":{
						"address":this.dqbm.addressDetail,
						"avatar":"",
						"cardNo":"",
						"city":this.dqbm.cityCode,
						"district":this.dqbm.regionCode,
						"dob":this.mchushengny,
						"idCard":this.sfzid,
						"idOrNo":this.sfzid,
						"nationality":this.nation,
						"personName":this.mao_valutext,
						"phoneNo":this.mao_tellpho,
						"province":this.dqbm.parentCode,
						"sex":maosex,
						"sexT":this.mao_hqsexdsj,
						"street":this.dqbm.streetKeyCode
					
				}
			}
			this.$store.dispatch("mao_select_allone",personInfo)
			//判斷获取医生的团队id
			// for(var p=0;p<this.actions.length;p++){
			// 	if(this.actions[p].name==this.maofdoc){
			// 		console.log(this.actions[p])
			// 	}
			// }
			sessionStorage.setItem("mao_fwdqjd",JSON.stringify(this.dqbm.streetText));
			this.$router.push("/Residents/adjm/jmzltwo")
		}      
      },
	  openPicker() {
        this.$refs.picker.open();
      },
	  handleConfirm(value){
		// console.log(JSON.stringify(this.pickerVisible))
		var zgmzhuanh=(value).toLocaleString().slice(0,9);
		this.mao_baocuntime=zgmzhuanh
		// console.log(zgmzhuanh)
			// let year = value.getFullYear();
			// let month = value.getMonth() +1;
			// let day =value.getDate();
			// let date = `${year}-${month}-${day}`;
			// console.log(date);
	  },
	  jtysmao(){
		this.sheetVisible=true;
	  },
	  xqzhimao(){
		// console.log(this.actions.length)
		 var that=this; 
		 this.$nextTick(()=>{
			 for(var n=0;n<this.actions.length;n++){
				 //选择团队的时候添加点击事件
				(document.getElementsByClassName("mint-actionsheet-listitem")[n]).addEventListener("click",function(e){
					// console.log(111)
					// console.log(that.$refs.fDoctor)
					that.maofdoc=this.innerHTML
					// console(22)
					// console.log(that.maofdoc)
					that.$store.dispatch('mao_select_fdoc',this.innerHTML)
				},false)
			}
		 })		 
	  },
	  //跳转到服务包页面请求
	  djfwbtzmao(){
		  if(this.fdoc==""){
			  Toast('请先选择家庭医生');
		  }else{
			for(var n=0;n<this.allshuju.length;n++){
				if(this.allshuju[n].teamName==this.maofdoc){
					 console.log(this.allshuju[n])
					 //本地保存医生团队
					 sessionStorage.setItem("mao_tzfwbqq",JSON.stringify(this.allshuju[n].teamId));
					//保存医生团队所有信息
					sessionStorage.setItem("mao_tddoctorxx",JSON.stringify(this.allshuju[n]));
					//  sessionStorage.setItem("mao_tzfwbqq",JSON.stringify(this.allshuju[n].teamId));
				}
			}
			this.$router.push("/Residents/adjm/jmzlone/fuwbli")
	    }				  
	}  
    },
   mounted:function(){
		this.sfzid=sessionStorage.getItem("shenfenzid");
		this.mao_xzjmdztx=sessionStorage.getItem("maoxzjmdz");
		this.mao_hqsexdsj=JSON.parse(sessionStorage.getItem('maoxzsex'));//男女
		this.maofwbxzxiang=sessionStorage.getItem('maodata');
		//出生年月截取
		let linsmchushengny=this.sfzid.substring(6,14);
		let lsmchushengny=linsmchushengny.substring(0,4)+"-";
		let lmchushengny=linsmchushengny.substring(4,6)+"-";
		let mmchushengny=linsmchushengny.substring(6,8);
		this.mchushengny=lsmchushengny+lmchushengny+mmchushengny;
		this.mao_baocuntime=this.mchushengny;
		this.pickerVisible=this.mchushengny;
		// console.log(this.mchushengny)
		let jtysnumberlis="";
		jtysnumberlis=JSON.parse(sessionStorage.getItem("userInfo")).id;
		// console.log(jtysnumberlis)
		let params=[jtysnumberlis];
		commonAjax(params,'pcn.myResidentDoctorService','queryDoctorInfo').then(res=>{
            if(res.code==200){
				console.log(res)
				sessionStorage.setItem('maoorgname',JSON.stringify(res.body.orgName))
				this.allshuju=res.body.teamInfo;
				for(var i =0 ;i<res.body.teamInfo.length;i++){
					// console.log(res.body.teamInfo[i].teamName)
					var maoobj={"name":res.body.teamInfo[i].teamName}
					this.actions.push(maoobj)
					this.xqzhimao(i)
					// console.log(this.actions)
				}
				// console.log(this.actions)
			}
		})
   },
   watch:{
	  
   }

}
</script>



<style scoped>
html,body{
	background: #EBEBEB;
}	
.mao_detail_yqx {
	background: #EBEBEB;
}	
.mao_detail_yqx .mint-header{
		height: 1rem;
		background-color: #fff;
		color: #26a2ff;
	}	
.mao_detail_yqx .mint-button{
		height: 1.5rem;
	}
.mao_detail_yqx .mint-header{
		font-size: 0.33rem;
	}
.mao_detail_yqx .mintui-back{
		font-size: 0.37rem;
	}
.mao_detail_yqx .top{
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #FFFAD0;
	color: #F4D275;
	height: 0.6rem;
	font-size:.33rem;
	}
.mao_detail_yqx .user_info{
	height: 2.5rem;
	background: #fff;
	}	
.mao_detail_yqx .user{
	width: 20%;
	text-align: center;
	margin-top: 5%;
	}
.mao_detail_yqx .info{
	width: 80%;
	}
.mao_detail_yqx .gril{
	width: 0.5rem;
	height: 0.5rem;
	}
.mao_detail_yqx .age{
	margin: 0 0.2rem;
	}	
.mao_detail_yqx .name{
	height: 1rem;
	line-height: 1rem;
	border-bottom: 0.5px solid #ccc;
	display: flex;
	align-items: center;
	}
.mao_detail_yqx .mobel{
	height: 1.5rem;
	display: flex;
	flex-direction: column;
	}
.mao_detail_yqx .mobel span{
	margin-left: 0.2rem;
	}	
.mao_detail_yqx .type,.number{
	height: 0.75rem;
	display: flex;
	align-items: center;
	}
.mao_detail_yqx .new{
	padding: 0 0.3rem;
	margin: 0.2rem 0;
	background-color: #fff;
	}	
.mao_detail_yqx .new span{
	margin-left: 0.2rem;
	}	
.mao_detail_yqx .phone,.location{
	height: 1rem;
	display: flex;
	align-items: center;
	}	
.mao_detail_yqx .phone{
	border-bottom: 0.5px solid #ccc;
	}	
.mao_detail_yqx .location em{
    white-space: nowrap;
	}	
.mao_detail_yqx .button{
	background: #EBEBEB;
	padding: 0.3rem 0.5rem 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	}	
.mao_detail_yqx .mint-button--normal{
	flex: 1;
	height: 1rem;
	}	
.mao_detail_yqx .progress{
		padding: 0.6rem 0 1.2rem 0;
	}
.mao_detail_yqx .pro{
			width: 90%;
			margin-left: 5%;
			border-top: 1px solid #d6d6d6;
			position: relative;
		}
.mao_detail_yqx .item{
				width: 60px;
				position: absolute;
				top:-0.2rem;
			}
.mao_detail_yqx .first{
				left:0.4rem;
				color: #fcc648
			}
.mao_detail_yqx .first .cir{
		/*background-image: url(../../assets/img/li_choose.png);
		background-repeat: no-repeat;
		background-size: cover;*/
		background-color: #fcc648
	}
.mao_detail_yqx .first .des{
	text-align: center;				
	/*color: #57c9fd;	*/
	color: #fcc648;			
}						
.mao_detail_yqx .cir{
					display: block;
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 50%;
					font-size: 12px;
					line-height: 0.4rem;
					text-align: center;
					margin-left: 20px;
					color: #fff;
				}
.mao_detail_yqx .des{
					font-size: 14px;
					margin-top: 10px;
				}
.mao_detail_yqx .second{
				left: 50%;
				transform:translateX(-50%);
				color:#888;
			}
.mao_detail_yqx .second .cir{
		/*background-image: url(../../assets/img/li_choose.png);
		background-repeat: no-repeat;
		background-size: cover;*/
		color:#888;
	background-color: #fff;
	}
.mao_detail_yqx .second .des{
	text-align: center;
		/*color: #57c9fd;*/
	}						

.mao_detail_yqx .third{
	right:0.4rem;
	color: #888;
	}		
.mao_detail_yqx .third .cir{
	/*background-color: #fcc648;*/
	color:#888;
	background-color: #fff;
	}
.mao_detail_yqx .third .des{
	text-align: center;
	/*color: #fcc648;*/
	}			
.mao_detail_yqx .mao_heng{height:.2rem;background:#eee;}
</style>