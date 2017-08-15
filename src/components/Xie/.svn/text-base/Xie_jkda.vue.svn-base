//健康档案列表

<template>
	<div class="jkda">
	<div class="header-wrap">
		<!--头部-->
		<div class="header">
			<router-link to="/xie_home">
				<img class="jt" src="../../assets/img/xie_jt.png"/>
			</router-link>
			<span>健康档案</span>
			<div @click="autentication">
			<img class="add" src="../../assets/img/xie_add.png"/>
			</div>
		</div>
		
		<!--搜索框-->
		<div class="search-wrap">
			<router-link to="/xie_jkda_search">
				<mt-search  placeholder="请输入姓名、身份证、网格地址搜索" cancel-text="" ></mt-search >
			</router-link>
		</div>
		
		
		<!--预约列表-->
	<!--	<mt-loadmore :top-method="loadTop"  ref="loadmore">-->
			<ul class="main"  v-infinite-scroll="jkda_loadMore"  infinite-scroll-disabled="loading">
<!--				<router-link to="/xie_jkda_child">-->
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
		<!--</mt-loadmore>-->
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
import { InfiniteScroll } from 'mint-ui';
import { Loadmore } from 'mint-ui';
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
	import { mapState} from 'vuex'
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
//		inputValue:''
		error:'',
		iserror:false,
		values:'',
		requests_number:10,
		topStatus:'',
		xie_localDoctorId:'',
		objlist:'',
        }

    },
//computed: {
//		...mapState(['xie_localDoctorId'])
//  },
    methods: {
    	
			xie_get_jkdalist() {
				Indicator.open('加载中...');
				console.log(this.requests_number)
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],"",1,this.requests_number]
                console.log(this.requests_number)
                commonAjax(params, 'pcn.archiveService', 'queryArchiveList').then(res => {
                     if (res.code == 200) {
                     	
                     	
					this.list=res.body;
				Indicator.close(); 
                    }
                })
                
            },
            autentication(){
            	MessageBox.prompt('请输入身份证号').then(({ value, action }) => {
  					if(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(value)||/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)){
						  	
						  	this.values=value
						  	this.xie_selectsfzh()
  					}else{
  						this.error="身份证号码长度应该为15位到18位"
  						this.iserror=true
  						setTimeout(()=>{
						this.iserror=false
  						},2000)
  					}
				});
            },
            xie_selectsfzh(){
								
								this.$store.dispatch('Xiesfzh',this.values);
								this.$router.push('/xie_jkda_add')
						      },
            empid(item){
//				拿到点击过程的EMPI值保存
				this.objlist={"empiId":item.empiId,"phrId":item.phrId,"idCard":item.idCard,"personName":item.personName,"birthday":item.birthday,"mobileNumber":item.mobileNumber,"sexCode":item.sexCode}
//				console.log(this.objlist)
				this.$store.dispatch('xie_empi',this.objlist)
            	this.$router.push('xie_jkda_child')
            },
//         上拉加载
           jkda_loadMore(){
            	this.requests_number+=20
            	this.xie_get_jkdalist()
            	console.log(this.requests_number)
           },
//			上拉刷新
			
    },
    mounted() {
    },
    
}


</script>




<style scoped>

.jkda .header-wrap{
	background: #EEEEEE;
	height: 100%;
	
}
.jkda .header{
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
.jkda .header span{
	flex: 1;
	display: flex;
	justify-content: center;
	margin-left: -0.3rem;
}
.jkda .header img{
	display: block;
	height: 0.4rem;
	width: 0.4rem;
}
.jkda .header .jt{
	float: left;
	margin-top: 0.4rem;
	margin-left: 0.4rem;
}
.jkda .header .add{
	float: right;
	margin-top: 0.4rem;
	margin-right: 0.4rem;
}

.jkda .list{
	height: 0.6rem;
	line-height: 0.6rem;
	display: flex;
	align-content: center;
	justify-content: center;
}
.jkda .list li{
	flex: 1;
	display: flex;
	align-content: center;
	justify-content: center;
}
.jkda .list li a{
	font-size: 0.24rem;
	color: #666;
}
.jkda .list li a:hover{
	font-size: 0.24rem;
	color: blue;
}
.jkda .list li:hover{
	border-bottom: 1px solid greenyellow;
}

  
.jkda .main{
	background: #fff;
	padding-top: 2.4rem;
}
.jkda .main-con{
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.jkda .main-con a{
	width: 100%;
	height: 1.4rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
}
.jkda .main-con-left{

	margin-left: 0.3rem;
	display: flex;
	flex-direction: column;
	margin: auto 0.3rem;
}
.jkda .name{
	/*height: 0.32rem;*/
	display: flex;
	align-items: center;
	
}
.jkda .address{
	/*height: 0.2rem;*/
	display: flex;
	align-items: center;
}
.jkda .main-con span{
	font-size: 0.32rem;
}
.jkda .main-con i{
	font-size: 0.24rem;
	font-style: normal;
	display: block;
	margin: 0 0.1rem;
}

.jkda .main-con img{
	height: 0.4rem;
	width: 0.4rem;
}
.jkda .main-con b{
	font-size: 0.2rem;
	color: #ccc;
	display: block;
	margin-right: 0.2rem;
}
.jkda .main-con em{
	font-size: 0.2rem;
	font-style: normal;
}
.jkda .main-con .img2{
	margin-top: 0.5rem;
	margin-right: 0.3rem;	
}
.jkda a{
	color: #000;
}  

.jkda .error{
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
 
.jkda .mint-search{
	height: 100%;
/*	width: 100%;*/
/*	position: fixed;*/
}
.jkda .search-wrap{
	position: fixed;
	top: 1.2rem;
	width: 100%;
}
.jkda .mint-search-list{
	overflow: auto;
	height: 0 !important;
	padding: 0px;
}
.jkda .mint-searchbar-inner{
	height: 1rem;
}
.jkda .mint-searchbar-inner input{
	font-size: 0.33rem;
}
.jkda .mint-searchbar-inner{
	padding: 0;
}
.jkda .mint-searchbar-inner .mintui-search{
    font-size: 0.34rem;
}
.jkda .mint-searchbar{
    padding: 0.09rem 0.12rem;	
    height: 1.2rem;
}
.jkda .mint-button{
		height: 1.5rem;
	}
.jkda .mint-header{
		font-size: 0.33rem;
	}
.jkda 	.mintui-back{
		font-size: 0.37rem;
	}
	.box_padding{
		padding: 0px 0.2rem;
	}
	
</style>