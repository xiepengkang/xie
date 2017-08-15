//签约管理详情  已签约页面


<template>
	<div class="qygl_detail_yqx">
		<!--头部-->
		<mt-header fixed title="签约详情">
		  <router-link to="/qygl" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="top">
			签约状态：已签约
		</div>
		
		
		
		<div class="user_info">
			<div class="user fl">
				<img class="user_img" :src="item.avatar"/>
			</div>
			<div class="info fl">
				<div class="name">
					{{list.personName}}
					<span class="age">{{nianl}}岁</span>
					<!--<img class="gril" src="../../assets/img/li_gril.png"/>-->
					<img class="gril" src="../../assets/img/li_gril.png" v-if="list.sex==2"/>
			    	<img class="gril" src="../../assets/img/li_boy.png" v-if="list.sex==1"/>
				</div>
				<div class="mobel">
					<div class="type">
						证件类型
						<span class="fl">居民身份证</span>
					</div>
					<div class="number fr">
						证件号码
						<span>{{li_applyId[6]}}</span>
					</div>
				</div>
			</div>
		</div>
		
		<div class="new">
			<div class="phone">
				<em class="fl">联系电话</em>
					<span class="mobile_left fl">{{list.tel}}</span>
					<img @click="tel" class="mobile_right fr" src="../../assets/img/li_phone.png"/>
			</div>
			<div class="location">
				<em>居住地址</em>
				<span>{{li_applyId[1]}}{{li_applyId[2]}}{{li_applyId[3]}}{{li_applyId[4]}}{{li_applyId[5]}}{{list.orgName}}</span>
			</div>
		</div>
		
		<form action="">
			<mt-cell
			  title="家庭医生"
			  is-link
			  value=" 亿家服务团队">
			  {{list.doctorName}}  {{list.teamName}}
			</mt-cell>
			
				<mt-cell
				  title="服务包"
				  is-link
				  value=""
				  @click.native="Service_Pack">
				  {{services}}
				</mt-cell>
			
			<mt-cell
			  title="签约协议"
			  is-link
			  value="查看"
			  @click.native="Agreement">
			</mt-cell>
			
			<mt-cell title="签约机构" value="亿家社区卫生服务中心"></mt-cell>
			<mt-cell title="签约周期" value="1年">{{list.signCycle}}年</mt-cell>
			<mt-cell title="申请时间" value="">{{list.applyDt}}</mt-cell>
			<mt-cell title="确认时间" value="">{{list.checkDt}}</mt-cell>
			<mt-cell title="确认方式" value="家庭"></mt-cell>
			<mt-cell title="备注：" value=""></mt-cell>
		</form>
	</div>
</template>

<script>
import { mapState} from 'vuex'		
import {
    commonAjax, requestConfirmPassword
}
from '../../api/api';	
import '../../assets/css/li_qygl_detail.css';
import { Navbar, TabItem ,Header} from 'mint-ui';
var imgUrlid=require("../../assets/img/li_Resident.png")
export default {
    data: function() {
        return {
        	list: '',
        	item: '',
            page: 1,
            errshow: false,
            error:'',
            value: '',
            selected: '',
            nianl:'',
            arry: [],
            imgurlm: imgUrlid,
        }
    },
    
     methods: {
         Passwordvalid() {
                let params = [this.li_applyId[0]]
                commonAjax(params, 'pcn.residentSignService', 'getSignRecordDetail').then(res => {
                    if (res.code == 200) {
                    	console.log(res)
                    	//console.log(res.body.applySignInfo)
                    	//console.log(res.body.applyPackageInfo)
	                  	this.list = res.body.applySignInfo
	                	this.arry = res.body.applyPackageInfo
	                  	for(var i=0;i<res.body.applySignInfo.length;i++ ){
	                  		
	                  		//头像选择拼接
	                        if(res.body.applySignInfo[i].avatar==0){
	                            res.body.applySignInfo[i].avatar=this.imgurlm
	                        }else{
	                            res.body.applySignInfo[i].avatar=imgUrl(res.body.applySignInfo[i].avatar)
	                        }
	                  	}
	                  	
	                  	//证件类型
	                  	if (res.body.applySignInfo.idType == 1) {
	                  		this.list.idType = "居民身份证"
	                  	} else if(res.body.applySignInfo.idType == 2){
	                  		this.list.idType = "居民户口簿"
	                  	} else if(res.body.applySignInfo.idType == 3){
	                  		this.list.idType = "护照"
	                  	} else if(res.body.applySignInfo.idType == 4){
	                  		this.list.idType = "军官证"
	                  	} else if(res.body.applySignInfo.idType == 5){
	                  		this.list.idType = "驾驶证"
	                  	} else if(res.body.applySignInfo.idType == 6){
	                  		this.list.idType = "港澳居民通行证"
	                  	} else if(res.body.applySignInfo.idType == 7){
	                  		this.list.idType = "台湾居民通行证"
	                  	} else if(res.body.applySignInfo.idType == 11){
	                  		this.list.idType = "出生证明"
	                  	} else if(res.body.applySignInfo.idType == 99){
	                  		this.list.idType = "其他法定有效证件"
	                  	}
	                
	                  	
	                var mdate=new Date();
                    var myear=mdate.getFullYear();
                    var oldnl=res.body.applySignInfo.dob.split('-')[0];
                    console.log(oldnl)
                    this.nianl=myear-oldnl;	 
                                  
                    }
                })

            },
            
        Service_Pack(){
        	this.$router.push("/li_Qygl_detail_jcfwb")
        },
        Agreement(){
        	this.$router.push("/li_Qygl_detail_qyxy"),
        	this.$store.dispatch('li_orgName',[this.list.orgName,this.list.doctorName])
        },
        tel(){
        	window.location.href = 'tel://' + this.list.tel;
	      },
        
   },
   mounted() {
        this.Passwordvalid()
   },
   computed:{
            ...mapState(['li_applyId']),
            services(){
            	let services='';
            	this.arry.forEach((item)=>{
            		services += item.serviceName +' ';
            	})
            	return services;
            }
    	},
}
</script>



<style scoped>
.qygl_detail_yqx {
	background: #EBEBEB;
}	
.qygl_detail_yqx .mint-header{
		height: 1rem;
		background-color: #fff;
		color: #26a2ff;
	}	
.qygl_detail_yqx .mint-button{
		height: 1.5rem;
	}
.qygl_detail_yqx .mint-header{
		font-size: 0.33rem;
	}
.qygl_detail_yqx .mintui-back{
		font-size: 0.37rem;
	}
.qygl_detail_yqx .top{
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #FFFAD0;
	color: #F4D275;
	height: 0.6rem;
	font-size: 0.28rem;
	}
.qygl_detail_yqx .user_info{
	font-size: 0.28rem;
	height: 2.5rem;
	background: #fff;
	}	
.qygl_detail_yqx .user{
	width: 20%;
	text-align: center;
	margin-top: 5%;
	}
.qygl_detail_yqx .info{
	width: 80%;
	}
.qygl_detail_yqx .gril{
	width: 0.5rem;
	height: 0.5rem;
	}
.qygl_detail_yqx .age{
	margin: 0 0.2rem;
	}	
.qygl_detail_yqx .name{
	height: 1rem;
	line-height: 1rem;
	border-bottom: 0.5px solid #ccc;
	display: flex;
	align-items: center;
	}
.qygl_detail_yqx .mobel{
	height: 1.5rem;
	display: flex;
	flex-direction: column;
	}
.qygl_detail_yqx .mobel span{
	margin-left: 0.2rem;
	}	
.qygl_detail_yqx .type,.number{
	height: 0.75rem;
	display: flex;
	align-items: center;
	}
.qygl_detail_yqx .new{
	font-size: 0.28rem;
	padding: 0 0.3rem;
	margin: 0.2rem 0;
	background-color: #fff;
	}	
.qygl_detail_yqx .new span{
	margin-left: 0.2rem;
	}	
.qygl_detail_yqx .phone,.location{
	height: 1rem;
	display: flex;
	align-items: center;
	}	
.qygl_detail_yqx .phone{
	border-bottom: 0.5px solid #ccc;
	}	
.qygl_detail_yqx .location em{
    white-space: nowrap;
	}	
.qygl_detail_yqx .mintui-back{
		font-size: 0.37rem;
	}	
.qygl_detail_yqx .mintui-back{
		font-size: 0.37rem;
	}	
.qygl_detail_yqx .mintui-back{
		font-size: 0.37rem;
	}	
.qygl_detail_yqx a{
	color: #000;
}
.qygl_detail_yqx .mobile_right{
	height: 0.5rem;
	width: 0.5rem;
}	
.qygl_detail_yqx .phone .mobile_left{
	flex: 1;
	direction: left;
	
}
.qygl_detail_yqx .phone{
	display: flex;
	justify-content: space-between;
}
.qygl_detail_yqx .name{
	color: #0000FF;
}
.qygl_detail_yqx .name span{
	color: #000;
}	
</style>
