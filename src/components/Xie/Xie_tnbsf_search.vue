//高血压档案档案列表

<template>
	<div class="tnbsf">
		<!--搜索框-->
		<div class="search_wrap2" >
				<div class="img_box1">
					<router-link to="/xie_tnbsf">
					<img src="../../assets/img/xie_jt.png">
					</router-link>
				</div>
				<div class="search_height">
					<mt-search  placeholder="请输入姓名、身份证、网格地址搜索" cancel-text="" v-model='searchs' style="padding: 0.09rem 0.12rem;"></mt-search>	
				</div>
		</div>
		<!--预约列表-->
		<ul class="main1">
				<li class="main-con" v-for="(item,index) in list" @click="empidsearch(item)">
							<div class="main-con-left">
								<div class="name">
									<span >{{item.personName}}</span><i>{{item.age}}岁<span v-show="item.sexCode==1" class="box_padding">男</span><span v-show="item.sexCode==2" class="box_padding">女</span></i>
									<img class="img1"  src="../../assets/img/xie_boy.png" v-show="item.sexCode==1">
									<img class="img1"  src="../../assets/img/xie_girl.png" v-show="item.sexCode==2">
								</div>
								<div class="address">
									<b>网格地址</b><em>{{item.regionCode_text}}</em>
								</div>					
							</div>
								<img class="img2" src="../../assets/img/xie_jt_left.png" />
					</li>
		</ul>
		
		<!--错误提示-->
		<div class="footer" v-show="iserror">
        	<div class="error" >{{error}}</div>
        </div>
	</div>
	
</template>

<script>
	
var md5 = require("md5");
//import { mapState } from 'vuex'

import { Indicator } from 'mint-ui'
import {
  commonAjax 
}
from '../../api/api';
export default {
    components: {
		    },
    data() {
        return {
		list:'',
		value:'',
		action:'',
		error:'',
		iserror:false,
		values:'',
		searchs:''
        }

    },
     watch:{
    	searchs(val){
    			this.xie_getlist()
    	}
    },
//  computed: mapState({
//  	Xiesfzh
//  }),
    methods: {
			xie_getlist() {
				// 求顶糖尿病随访
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],this.searchs,1,50,'','',2]
                commonAjax(params, 'pcn.visitService', 'queryVisitPlans').then(res => {
                     if (res.code == 200) {
                     console.log(res)	
					this.list=res.body;
					console.log(this.list)
                    }
                })
                
            },
           
            empidsearch(item){
            	this.objlist={"empiId":item.empiId,"phrId":item.phrId,"idCard":item.idCard,"personName":item.personName,"birthday":item.birthday,"mobileNumber":item.mobileNumber,"sexCode":item.sexCode}
				console.log(this.objlist)
				this.$store.dispatch('xie_tnbsf_phrId',this.objlist)
            	this.$router.push('/xie_tnbsf_child')
            }
            
    },
    mounted() {
			
    },
    
}


</script>




<style scoped>
	 @import url("../../assets/css/xie_one.css");
	.tnbsf{
		background: #d6d6d6;
	}
 .header-wrap{
	background: #EEEEEE;
	height: 100%;
}

 .header span{
	flex: 1;
	display: flex;
	justify-content: center;
	margin-left: -0.3rem;
}
 .header img{
	display: block;
	height: 0.4rem;
	width: 0.4rem;
}
 .header .jt{
	float: left;
	margin-top: 0.4rem;
	margin-left: 0.4rem;
}
 .header .add{
	float: right;
	margin-top: 0.4rem;
	margin-right: 0.4rem;
}

 .list{
	height: 0.6rem;
	line-height: 0.6rem;
	display: flex;
	align-content: center;
	justify-content: center;
}
 .list li{
	flex: 1;
	display: flex;
	align-content: center;
	justify-content: center;
}
 .list li a{
	font-size: 0.24rem;
	color: #666;
}
 .list li a:hover{
	font-size: 0.24rem;
	color: blue;
}
 .list li:hover{
	border-bottom: 1px solid greenyellow;
}

 .button {
    width: 100%;
    background: #666;
    color: #fff;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    height: 1rem;
    font-size: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   .button span {
    color: #d6d6d6;
  }
  
 .main1{
	background: #fff;
	z-index: 100;
/*	padding-top: 1.3rem;*/
}
 .main-con{
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
 .main-con a{
	width: 100%;
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
 .main-con-left{

	margin-left: 0.3rem;
	display: flex;
	flex-direction: column;
	margin: auto 0.3rem;
}
 .name{
	/*height: 0.32rem;*/
	display: flex;
	align-items: center;
	
}
 .address{
	/*height: 0.2rem;*/
	display: flex;
	align-items: center;
}
 .main-con span{
	font-size: 0.32rem;
}
 .main-con i{
	font-size: 0.24rem;
	font-style: normal;
	display: block;
	margin: 0 0.1rem;
}

 .main-con img{
	height: 0.4rem;
	width: 0.4rem;
}
 .main-con b{
	font-size: 0.2rem;
	color: #ccc;
	display: block;
	margin-right: 0.2rem;
}
 .main-con em{
	font-size: 0.2rem;
	font-style: normal;
}
 .main-con .img2{
	margin-top: 0.5rem;
	margin-right: 0.3rem;	
}
 a{
	color: #000;
}  

 .error{
		display: block;
		width: 4.5rem;
		height: 0.8rem;
		line-height: 0.8rem;
		border-radius: 50px;
		background: #D9D9D9;
		font-size: 0.24rem;
		text-align: center;
		position: fixed;
		bottom: 15%;
		left: 35%;
    	margin-left: -1rem;
	}
 
 .mint-search{
	height: 100%;
	background: #D9D9D9;
	padding: 0px !important;
}

 .mint-search-list{
	overflow: auto;
	height: 0px;
	padding: 0px;
}
 .mint-searchbar-inner{
	height: 1rem;
}
 .mint-searchbar-inner input{
	font-size: 0.33rem;
	outline:medium;
}
 .mint-searchbar-inner{
	padding: 0;
}
 .mint-searchbar-inner .mintui-search{
    font-size: 0.34rem;
}
 .mint-searchbar{
    /*padding: 0.09rem 0.12rem;*/	
}
 .mint-button{
		height: 1.5rem;
	}
 .mint-header{
		font-size: 0.33rem;
	}
 	.mintui-back{
		font-size: 0.37rem;
	}
	.box_padding{
		padding: 0px 0.2rem;
	}
	.img_box1{
		float: left;
		height: 1.2rem;
		background: #D9D9D9;
		margin-right:-0.1rem
	}
	.img_box1 img{
		width: 0.5rem;
		height: 0.5rem;
		
	}
	.search_wrap2{
		height: 1.2rem;
	}
	.tnbsf .mint-searchbar {
    padding: 0.09rem 0.12rem;
}
</style>