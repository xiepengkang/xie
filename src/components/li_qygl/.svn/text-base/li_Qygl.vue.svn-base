//签约管理列表

<template>
	<div class="qygl">
		<!--头部-->
		<mt-header fixed title="新的居民">
		  <router-link to="/xie_home" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right">
		  	<img @click="$router.push('Residents/adjm')" class="img1" src="../../assets/img/li_tinajia.png"/>
		  <!--	<img class="img2" src="../../assets/img/li_saomiao.png"/>-->
		  </mt-button>
		</mt-header>
		
		
		<mt-navbar fixed v-model="selected">
		  <mt-tab-item id="1">全部</mt-tab-item>
		  <mt-tab-item id="2">待签约</mt-tab-item>
		  <mt-tab-item id="3">已签约</mt-tab-item>
		  <mt-tab-item id="4">未通过</mt-tab-item>
		</mt-navbar>
		
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <ul class="list">
		    	<li class="li"  v-for="(item, index) in list"  @click="send(item)">	
		    		<div class="li_top">
		    			<div class="li_left fl">
			    			<img class="big_img fl" :src="item.avatar"/>
			    			<img class="gril fl" src="../../assets/img/li_gril.png" v-if="item.sex==2"/>
			    			<img class="gril fl" src="../../assets/img/li_boy.png" v-if="item.sex==1"/>
			    		</div>
			    		<div class="li_center">
			    			<div class="name">{{item.personName}}<span class="age">{{item.dob | data}}岁</span></div>
			    			<div class="location">{{item.streetText}}{{item.address}}</div>
			    		</div>
			    		<div class="li_right fr">
			    			<span class="confirm" v-model="value" v-if="item.status==1">去确认</span>
			    			<span class="Signed" v-model="value" v-if="item.status==2">已签约</span>
			    			<span class="Not_pass" v-model="value" v-if="item.status==3">未通过</span>
			    			<span class="cancel" v-model="value" v-if="item.status==4">已取消</span>
			    			<span class="cancel" v-model="value" v-if="item.status==5">已解签</span>
			    		</div>
		    		</div>
		    		<div class="li_bottom">
		    			<div class="li_bottom_left">
		    				<img class="sign fl" src="../../assets/img/li_qy.png"/>
		    				<i class="team fl">{{item.teamName}}</i>
		    			</div>
		    			<div class="li_bottom_left">
		    				{{item.applyDt}}
		    			</div>
		    		</div>
		    	</li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		     <ul class="list">
		    	<li class="li"  v-for="(item, index) in list"  @click="send(item)" v-if="item.status==1">
		    		<!--<router-link :to="{name:'makeQuery',params:{'id': item.mpiId}}">-->
		    		<div class="li_top">
		    			<div class="li_left fl">
			    			<img class="big_img fl" :src="item.avatar"/>
			    			<img class="gril fl" src="../../assets/img/li_gril.png" v-if="item.sex==2"/>
			    			<img class="gril fl" src="../../assets/img/li_boy.png" v-if="item.sex==1"/>
			    		</div>
			    		<div class="li_center">
			    			<div class="name">{{item.personName}}<span class="age">{{item.teamId}}岁</span></div>
			    			<div class="location">{{item.streetText}}{{item.address}}</div>
			    		</div>
			    		<div class="li_right fr">
			    			<span class="confirm" v-model="value" v-if="item.status==1">去确认</span>
			    			<span class="Signed" v-model="value" v-if="item.status==2">已签约</span>
			    			<span class="Not_pass" v-model="value" v-if="item.status==3">未通过</span>
			    			<span class="cancel" v-model="value" v-if="item.status==4">已取消</span>
			    		</div>
		    		</div>
		    		<div class="li_bottom">
		    			<div class="li_bottom_left">
		    				<img class="sign fl" src="../../assets/img/li_qy.png"/>
		    				<i class="team fl">{{item.teamName}}</i>
		    			</div>
		    			<div class="li_bottom_left">
		    				{{item.applyDt}}
		    			</div>
		    		</div>
		    		<!--</router-link>-->
		    	</li>
		    </ul>	
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		     <ul class="list">
		    	<router-link to="/li_Qygl_detail_yqy">
		    	<li class="li"  v-for="(item, index) in list"  @click="send(item)" v-if="item.status==2">
		    		<div class="li_top">
		    			<div class="li_left fl">
			    			<img class="big_img fl" :src="item.avatar"/>
			    			<img class="gril fl" src="../../assets/img/li_gril.png" v-if="item.sex==2"/>
			    			<img class="gril fl" src="../../assets/img/li_boy.png" v-if="item.sex==1"/>
			    		</div>
			    		<div class="li_center">
			    			<div class="name">{{item.personName}}<span class="age">{{item.teamId}}岁</span></div>
			    			<div class="location">{{item.streetText}}{{item.address}}</div>
			    		</div>
			    		<div class="li_right fr">
			    			<span class="confirm" v-model="value" v-if="item.status==1">去确认</span>
			    			<span class="Signed" v-model="value" v-if="item.status==2">已签约</span>
			    			<span class="Not_pass" v-model="value" v-if="item.status==3">未通过</span>
			    			<span class="cancel" v-model="value" v-if="item.status==4">已取消</span>
			    		</div>
		    		</div>
		    		<div class="li_bottom">
		    			<div class="li_bottom_left">
		    				<img class="sign fl" src="../../assets/img/li_qy.png"/>
		    				<i class="team fl">{{item.teamName}}</i>
		    			</div>
		    			<div class="li_bottom_left">
		    				{{item.applyDt}}
		    			</div>
		    		</div>
		    	</li>
		    	</router-link>
		    </ul>	
		  </mt-tab-container-item>
		  <mt-tab-container-item id="4">
		     <ul class="list">
		    	<router-link to="/li_Qygl_detail_wtg">
		    	<li class="li"  v-for="(item, index) in list"  @click="send(item)" v-if="item.status==3">
		    		<div class="li_top">
		    			<div class="li_left fl">
			    			<img class="big_img fl" :src="item.avatar"/>
			    			<img class="gril fl" src="../../assets/img/li_gril.png" v-if="item.sex==2"/>
			    			<img class="gril fl" src="../../assets/img/li_boy.png" v-if="item.sex==1"/>
			    		</div>
			    		<div class="li_center">
			    			<div class="name">{{item.personName}}<span class="age">{{item.teamId}}岁</span></div>
			    			<div class="location">{{item.streetText}}{{item.address}}</div>
			    		</div>
			    		<div class="li_right fr">
			    			<span class="confirm" v-model="value" v-if="item.status==1">去确认</span>
			    			<span class="Signed" v-model="value" v-if="item.status==2">已签约</span>
			    			<span class="Not_pass" v-model="value" v-if="item.status==3">未通过</span>
			    			<span class="cancel" v-model="value" v-if="item.status==4">已取消</span>
			    		</div>
		    		</div>
		    		<div class="li_bottom">
		    			<div class="li_bottom_left">
		    				<img class="sign fl" src="../../assets/img/li_qy.png"/>
		    				<i class="team fl">{{item.teamName}}</i>
		    			</div>
		    			<div class="li_bottom_left">
		    				{{item.applyDt}}
		    			</div>
		    		</div>
		    	</li>
		    	</router-link>
		    </ul>	
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>	
import {
    commonAjax, requestConfirmPassword,dicAjax,imgUrl
}
from '../../api/api';
import '../../assets/css/li_qygl.css'
import { Navbar, TabItem ,Header,Indicator,Toast} from 'mint-ui';
var imgUrlid=require("../../assets/img/li_Resident.png")
export default {
    data: function() {
        return {
        	list: [],
            nianl:'',
            errshow: false,
            error:'',
            value: '',
            selected: '1',
            imgurlm: imgUrlid,
            signApplyInfo: []
        }
    },
    methods: {
         Passwordvalid() {
         		Indicator.open('加载中...');
                let params = ["",""]
                commonAjax(params, 'pcn.myResidentDoctorService', 'queryResidentRecord').then(res => {
                    if (res.code == 200) {
                    	console.log(res)
                    	console.log(res.body.signApplyInfo)
	                  	this.list = res.body.signApplyInfo
	                  	for(var i=0;i<res.body.signApplyInfo.length;i++ ){
	                  		//console.log(res.body.signApplyInfo[i])
	                  		 this.signApplyInfo.push(res.body.signApplyInfo[i])
//	                  			Toast({
//								  message: '暂无数据',
//								  duration: 2000
//								})
	                  	
	                  		
	                  		
	                  		//头像选择拼接
	                        if(res.body.signApplyInfo[i].avatar==0){
	                            res.body.signApplyInfo[i].avatar=this.imgurlm
	                        }else{
	                            res.body.signApplyInfo[i].avatar=imgUrl(res.body.signApplyInfo[i].avatar)
	                        }
	                  	}
	                  	
	                  	Indicator.close(); 
                    }
                    
                })

            },
            
        send(item){
        	//点击到跳转到已解约
        	if (item.status==5) {
        		this.$router.push("/li_Qygl_detail_yjq")
        	}
        	//点击到跳转到已取消
        	if (item.status==4) {
        		this.$router.push("/li_Qygl_detail_yqx")
        	}
        	//点击到跳转到去确认
        	else if(item.status==1){
        		this.$router.push("/li_Qygl_detail_qqr")
        	}
        	//点击到跳转到已签约
        	else if(item.status==2){
        		this.$router.push("/li_Qygl_detail_yqy")
        	}
        	//点击到跳转到未通过
        	else if(item.status==3){
        		this.$router.push("/li_Qygl_detail_wtg")
        	}
        	//console.log(item.status)
        	console.log(item.applyId)
        	this.$store.dispatch('li_applyId',[item.applyId,item.provinceText,item.cityText,item.districtText,item.streetText,item.address,item.idOrNo,item.personName,item.phoneNo,item.teamName,item.mpiId,item.idType,item.teamId])
        },
       
   },
   mounted() {
        this.Passwordvalid()
        dicAjax().then(res => {
	        	//console.log(res.items)
	        	sessionStorage.setItem("suitableDic",JSON.stringify(res.items));
	       })
   },
   //年龄过滤
   filters: {
	   	data:function jsGetAge(strBirthday){         
		    var returnAge;  
		    var strBirthdayArr=strBirthday.split("-");  
		    var birthYear = strBirthdayArr[0];  
		    var birthMonth = strBirthdayArr[1];  
		    var birthDay = strBirthdayArr[2];  
		      
		    var d = new Date();  
		    var nowYear = d.getFullYear();  
		    var nowMonth = d.getMonth() + 1;  
		    var nowDay = d.getDate();  
		      
		    if(nowYear == birthYear){  
		        returnAge = 0;//同年 则为0岁  
		    }  
		    else{  
		        var ageDiff = nowYear - birthYear ; //年之差  
		        if(ageDiff > 0){  
		            if(nowMonth == birthMonth) {  
		                var dayDiff = nowDay - birthDay;//日之差  
		                if(dayDiff < 0)  
		                {  
		                    returnAge = ageDiff;  
		                }  
		                else  
		                {  
		                    returnAge = ageDiff ;  
		                }  
		            }  
		            else  
		            {  
		                var monthDiff = nowMonth - birthMonth;//月之差  
		                if(monthDiff < 0)  
		                {  
		                    returnAge = ageDiff - 1;  
		                }  
		                else  
		                {  
		                    returnAge = ageDiff ;  
		                }  
		            }  
		        }  
		        else  
		        {  
		            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天  
		        }  
		    }  
		      
		    return returnAge;//返回周岁年龄  
		      
		}  
	},
}
</script>



<style scoped>
.qygl .mint-header{
		height: 1rem;
		background-color: #fff;
		color: #26a2ff;
	}
.qygl .mint-header-button{
	display: block;
	flex: 0;
}		
.qygl .mint-button{
		height: 1.5rem;
	}
.qygl .mint-header{
		font-size: 0.33rem;
	}
.qygl 	.mintui-back{
		font-size: 0.37rem;
	}
.qygl .mint-button-text img{
	width: 0.4rem;
	height: 0.4rem;
	float: right;
}	

.qygl .mint-tab-container{
	margin-top: 2rem;
}	
.qygl .is-right{
	display: flex;
	 direction: rtl;
}	
.qygl .mint-navbar{
	margin-top: 1rem;
	height: 1rem;
	line-height: 1rem;
}
	
.qygl .mint-tab-item-label{
	font-size: 0.28rem;
}
.qygl .mint-tab-item{
	display: flex;
	align-items: center;
	justify-content: center;
}
.qygl .mint-navbar{
	margin-top: 1rem;
	height: 1rem;
}
.qygl .mint-tab-container-wrap{
	margin-top: 2rem;
}	
.qygl .mint-navbar{
	border-bottom: 0.5px solid #ccc;
	border-top: 0.5px solid #ccc;
}		
.qygl .mint-cell-left{
	margin-left: 0.5rem;
}	
.qygl .list{
	background: #EBEBEB;
}
.qygl .li{
	background: #fff;
	position: relative;
	color: #A9ACB1;
	font-size: 0.28rem;
}
.qygl .li_top{
	display: flex;
	justify-content: space-between;
	height: 1.4rem;
	align-items: center;
	border-bottom: 0.5px solid #ccc;
}	
.qygl .li_bottom{
	display: flex;
	justify-content: space-between;
	height: 0.6rem;
	line-height: 0.6rem;
	align-items: center;
}	
.qygl .li{
	padding: 0 0.3rem;
	margin-bottom: 0.2rem;
}
.qygl .sign{
	display: flex;
	align-items: center;
	margin-top: 0.1rem;
	height: 0.4rem;
	width: 0.8rem;
}
.qygl .location{
	display: flex;
	align-items: flex-start;
	height: 0.6rem;
	line-height: 0.3rem;
	width: 100%;
	white-space : normal;
	text-overflow : ellipsis;
	overflow: hidden;
}
.qygl .name{
	margin: 0.2rem 0;
	color: #000;
	font-size: 0.33rem;
}
.qygl .age{
	margin-left: 0.2rem;
	color: #A9ACB1;
	font-size: 0.28rem;
}
.qygl .team{
	font-style: normal;
	margin-left: 0.2rem;
	
}	
.qygl .img1{
	margin-left: 0.3rem;
}
.qygl .big_img{
	height: 1rem;
	width: 1rem;
	
}
.qygl .gril{
	position: absolute;
	bottom: 40%;
	left: 12.5%;
	height: 0.5rem;
	width: 0.5rem;
}
.qygl .li_center{
	height: 100%;
	width: 100%;
    margin: 0 0.3rem;
	align-items: center;
}
/*已签约*/
.qygl .Signed {
	color: blue;
}
.qygl .confirm{
	/*color: #F4D275;*/
	display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 0.5rem;
    background: #fcc648;
    border-radius: 5px;
    color: #fff;
    font-size: 0.28rem;
}
.qygl .Not_pass{
	color: red;
}
.qygl .li_right{
	width: 2rem;
	height: 100%;
	display: flex;
	direction: rtl;
	align-items: center;
}
.qygl .mint-tab-item-label{
	font-size: 0.28rem !important;
}
.qygl .mintui, .mintui-back{
	font-size: 0.34rem !important;
}
.qygl .location,.team,.li_bottom_left{
	color: #A9ACB1;
}
</style>