//健康档案列表

<template>
	<div class="gxyda">
	<div class="header-wrap">
		<!--头部-->
		<div class="header">
			<router-link to="/xie_home">
				<img class="jt" src="../../assets/img/xie_jt.png"/>
			</router-link>
			<span>高血压档案</span>
		</div>
		
		<!--搜索框-->
		<div class="search-wrap">
			<router-link to="/xie_gxyda_search">
				<mt-search  placeholder="请输入姓名、身份证、网格地址搜索" cancel-text=""></mt-search>
			</router-link>
		</div>
		
		<!--预约列表-->
		<ul class="main">
<!--				<router-link to="/xie_gxyda_child">-->
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
		<!--<div class="footer" v-show="iserror">
        	<div class="error" >{{error}}</div>
        </div>-->
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
        }

    },
    methods: {
    	//获取糖尿病档案列表
			xie_getlist() {
//				Indicator.open('加载中...');
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],1,50,""]
                commonAjax(params, 'pcn.archiveService', 'queryHypertensionArchiveList').then(res => {
                     if (res.code == 200) {
                     	this.list=res.body
                     	console.log(this.list)
//				过滤数组中年龄大于50岁的人
//                   res.body.forEach(list1=>{
//                   	console.log(this.list1)
//                   	if(list1.age>=50){
//                 		this.list.push(list1)
//                   	}
//                   })
					
//				Indicator.close(); 
                    }
                })
                
          },
		//        传值empi
            empid(item){
//				拿到点击过程的EMPI值保存
				this.objlist={"empiId":item.empiId,"phrId":item.phrId,"idCard":item.idCard,"personName":item.personName,"birthday":item.birthday,"mobileNumber":item.mobileNumber}
				this.$store.dispatch('xie_gxyda_phrId',this.objlist)
            	this.$router.push('/xie_gxyda_child')
            }
            
    },
    mounted() {
			this.xie_getlist()
    },
    
}


</script>




<style scoped>

.gxyda .header-wrap{
	background: #EEEEEE;
	height: 100%;
}
.gxyda .header{
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
.gxyda .header span{
	flex: 1;
	display: flex;
	justify-content: center;
	margin-left: -1rem;
}
.gxyda .header img{
	display: block;
	height: 0.4rem;
	width: 0.4rem;
}
.gxyda .header .jt{
	float: left;
	margin-top: 0.4rem;
	margin-left: 0.4rem;
}
.gxyda .header .add{
	float: right;
	margin-top: 0.4rem;
	margin-right: 0.4rem;
}

.gxyda .list{
	height: 0.6rem;
	line-height: 0.6rem;
	display: flex;
	align-content: center;
	justify-content: center;
}
.gxyda .list li{
	flex: 1;
	display: flex;
	align-content: center;
	justify-content: center;
}
.gxyda .list li a{
	font-size: 0.24rem;
	color: #666;
}
.gxyda .list li a:hover{
	font-size: 0.24rem;
	color: blue;
}
.gxyda .list li:hover{
	border-bottom: 1px solid greenyellow;
}

.gxyda .button {
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
 .gxyda  .button span {
    color: #d6d6d6;
  }
  
.gxyda .main{
	background: #fff;
	padding-top: 2.4rem;
}
.gxyda .main-con{
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.gxyda .main-con a{
	width: 100%;
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.gxyda .main-con-left{

	margin-left: 0.3rem;
	display: flex;
	flex-direction: column;
	margin: auto 0.3rem;
}
.gxyda .name{
	/*height: 0.32rem;*/
	display: flex;
	align-items: center;
	
}
.gxyda .address{
	/*height: 0.2rem;*/
	display: flex;
	align-items: center;
}
.gxyda .main-con span{
	font-size: 0.32rem;
}
.gxyda .main-con i{
	font-size: 0.24rem;
	font-style: normal;
	display: block;
	margin: 0 0.1rem;
}

.gxyda .main-con img{
	height: 0.4rem;
	width: 0.4rem;
}
.gxyda .main-con b{
	font-size: 0.2rem;
	color: #ccc;
	display: block;
	margin-right: 0.2rem;
}
.gxyda .main-con em{
	font-size: 0.2rem;
	font-style: normal;
}
.gxyda .main-con .img2{
	margin-top: 0.5rem;
	margin-right: 0.3rem;	
}
.gxyda a{
	color: #000;
}  

.gxyda .error{
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
 
.gxyda .mint-search{
	height: 100%;
}
.gxyda .search-wrap{
	position: fixed;
	top: 1.2rem;
	width: 100%;
}
.gxyda .mint-search-list{
	overflow: auto;
}
.gxyda .mint-searchbar-inner{
	height: 1rem;
}
.gxyda .mint-searchbar-inner input{
	font-size: 0.33rem;
}
.gxyda .mint-searchbar-inner{
	padding: 0;
}
.gxyda .mint-searchbar-inner .mintui-search{
    font-size: 0.34rem;
}
.gxyda .mint-searchbar{
    padding: 0.09rem 0.12rem;	
}
.gxyda .mint-button{
		height: 1.5rem;
	}
.gxyda .mint-header{
		font-size: 0.33rem;
	}
.gxyda 	.mintui-back{
		font-size: 0.37rem;
	}
	.box_padding{
		padding: 0px 0.2rem;
	}
</style>