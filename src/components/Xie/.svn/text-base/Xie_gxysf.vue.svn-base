//高血压随访列表

<template>
	<div class="gxysf">
	<div class="header-wrap">
		<!--头部-->
		<div class="header">
			<router-link to="/xie_home">
				<img class="jt" src="../../assets/img/xie_jt.png"/>
			</router-link>
			<span>高血压随访</span>
		</div>
		
		<!--搜索框-->
		<div class="search-wrap">
			<router-link to="/xie_gxysf_search">
				<mt-search  placeholder="请输入姓名、身份证、网格地址搜索" cancel-text=""></mt-search>
			</router-link>
		</div>
		
		<!--预约列表-->
		<ul class="main" v-infinite-scroll="gxysf_loadMore"  infinite-scroll-disabled="loading">
<!--				<router-link to="/xie_gxysf_child">-->
					<li class="main-con" v-for="(item,index) in list" @click="empid(item)">
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
<!--				</router-link>-->
			
		</ul>
		<!--错误提示-->
		<div class="footer" v-show="iserror">
        	<div class="error" >{{error}}</div>
        </div>
	</div>
	</div>
</template>

<script>
var md5 = require("md5");
//import { mapState } from 'vuex'

import { MessageBox } from 'mint-ui'
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
		list:[],
		value:'',
		action:'',
//		inputValue:''
		error:'',
		iserror:false,
		values:'',
		topStatus:'',
		requests_number:20,
        }

    },
    methods: {
    	//获取高血压随访列表
			xie_getgxysflist() {
				Indicator.open('加载中...');
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],"",1,50,"","",1]
                commonAjax(params, 'pcn.visitService', 'queryVisitPlans').then(res => {
                     if (res.code == 200) {
                     	this.list=res.body
                     	console.log(this.list)
					
				Indicator.close(); 
                    }
                })
                
          },
		//        传值empi
            empid(item){
//				拿到点击过程的EMPI值保存
				this.objlist={"empiId":item.empiId,"idCard":item.idCard,"personName":item.personName,"birthday":item.birthday,"mobileNumber":item.mobileNumber}
				this.$store.dispatch('xie_gxysf_phrId',this.objlist)
				
            	this.$router.push('/xie_gxysf_child')
            },
            gxysf_loadMore(){
            	this.requests_number+=20
            	console.log(this.requests_number)
            	this.xie_getgxysflist()
           },
            
    },
    mounted() {
//			this.xie_getlist()
    },
    
}


</script>




<style scoped>

.gxysf .header-wrap{
	background: #EEEEEE;
	height: 100%;
}
.gxysf .header{
	background: #26a2ff;
	color: #fff;
	height: 1.2rem;
	line-height: 1.2rem;
	font-size: 0.32rem;
	display: flex;
	position: fixed;
	width: 100%;
	z-index: 10;
}
.gxysf .header span{
	flex: 1;
	display: flex;
	justify-content: center;
	margin-left: -1rem;
}
.gxysf .header img{
	display: block;
	height: 0.4rem;
	width: 0.4rem;
}
.gxysf .header .jt{
	float: left;
	margin-top: 0.4rem;
	margin-left: 0.4rem;
}
.gxysf .header .add{
	float: right;
	margin-top: 0.4rem;
	margin-right: 0.4rem;
}

.gxysf .list{
	height: 0.6rem;
	line-height: 0.6rem;
	display: flex;
	align-content: center;
	justify-content: center;
}
.gxysf .list li{
	flex: 1;
	display: flex;
	align-content: center;
	justify-content: center;
}
.gxysf .list li a{
	font-size: 0.24rem;
	color: #666;
}
.gxysf .list li a:hover{
	font-size: 0.24rem;
	color: blue;
}
.gxysf .list li:hover{
	border-bottom: 1px solid greenyellow;
}

.gxysf .button {
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
 .gxysf  .button span {
    color: #d6d6d6;
  }
  
.gxysf .main{
	background: #fff;
	padding-top: 2.4rem;
}
.gxysf .main-con{
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.gxysf .main-con a{
	width: 100%;
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.gxysf .main-con-left{

	margin-left: 0.3rem;
	display: flex;
	flex-direction: column;
	margin: auto 0.3rem;
}
.gxysf .name{
	/*height: 0.32rem;*/
	display: flex;
	align-items: center;
	
}
.gxysf .address{
	/*height: 0.2rem;*/
	display: flex;
	align-items: center;
}
.gxysf .main-con span{
	font-size: 0.32rem;
}
.gxysf .main-con i{
	font-size: 0.24rem;
	font-style: normal;
	display: block;
	margin: 0 0.1rem;
}

.gxysf .main-con img{
	height: 0.4rem;
	width: 0.4rem;
}
.gxysf .main-con b{
	font-size: 0.2rem;
	color: #ccc;
	display: block;
	margin-right: 0.2rem;
}
.gxysf .main-con em{
	font-size: 0.2rem;
	font-style: normal;
}
.gxysf .main-con .img2{
	margin-top: 0.5rem;
	margin-right: 0.3rem;	
}
.gxysf a{
	color: #000;
}  

.gxysf .error{
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
 
.gxysf .mint-search{
	height: 100%;
}
.gxysf .search-wrap{
	position: fixed;
	top: 1.2rem;
	width: 100%;
}
.gxysf .mint-search-list{
	overflow: auto;
}
.gxysf .mint-searchbar-inner{
	height: 1rem;
}
.gxysf .mint-searchbar-inner input{
	font-size: 0.33rem;
}
.gxysf .mint-searchbar-inner{
	padding: 0;
}
.gxysf .mint-searchbar-inner .mintui-search{
    font-size: 0.34rem;
}
.gxysf .mint-searchbar{
    padding: 0.09rem 0.12rem;	
}
.gxysf .mint-button{
		height: 1.5rem;
	}
.gxysf .mint-header{
		font-size: 0.33rem;
	}
.gxysf 	.mintui-back{
		font-size: 0.37rem;
	}
	.box_padding{
		padding: 0px 0.2rem;
	}
</style>