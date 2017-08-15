//签约管理列表

<template>
	<div class="yygh">
		<!--头部-->
		<mt-header fixed title="选择医院">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right">
		  	<img class="img1" src="../../assets/img/li_fdj.png"/>
		  </mt-button>
		</mt-header>
		
		<!--导航栏-->
		<ul class="nav">
			<li class="Grade" @click="toggle(1)"><span>全部等级</span>
				<img src="../../assets/img/li_bottom.png" v-show="hide == 2"/>
				<img src="../../assets/img/li_top.png" v-show="hide == 1"/>
			</li>|
			<li class="type" @click="toggle(2)"><span>全部类型</span>
				<img src="../../assets/img/li_bottom.png" v-show="hide == 1"/>
				<img src="../../assets/img/li_top.png" v-show="hide == 2"/>
			</li>
		</ul>
		<ul class="list1" v-show="show == 1">
			<li v-for="(item,$index) in items" @click="select(item,$index,$event)"  :class="{'active':item.active,'unactive':!item.active}">
				{{item}}
			</li>
		</ul>
		
		<ul class="list1" v-show="show == 2">
			<li v-for="(item,$index) in lists" @click="selects(item,$index,$event)"  :class="{'active':item.active,'unactive':!item.active}">
				{{item}}
			</li>
		</ul>
		
		<!--列表数据-->
		 <ul class="list" v-show="listing">
		    	<li class="li"  v-for="(item, index) in list"  @click="send(item)">	
		    		<!--<div class="li_left fl">
		    			<img class="portrait" src="../../assets/img/li_Resident.png"/>
		    		</div>-->
		    		<div class="li_right fl">
		    			<div class="li_right_top">
		    				<div class="name fl">
		    					{{item.fullName}}
		    				</div>
		    				<!--{{item.statusText}}-->
		    				<div class="li_right_top_left">
		    					<!--<span class="status fl" v-if="item.statusText=='待确认'">一级</span>-->
		    					<span class="status fl" v-if="item.nature=='01'">一级</span>
		    					<span class="status2 fl" v-if="item.nature=='02'">二级</span>
		    					<span class="status3 fl" v-if="item.nature=='03'">三级</span>
			    				<!--<em class="day fr">{{item.dispayTime}}</em>-->
		    				</div>
		    			</div>
		    			
		    			<div class="li_right_bottom">
		    				{{item.address}}
		    			</div>
		    		</div>
		    	</li>
		    </ul>
		
	</div>
</template>

<script>	
import {
    commonAjax, requestConfirmPassword,dicAjax
}
from '../../api/api';
import '../../assets/css/li_qygl_detail.css'
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
export default {
    data: function() {
        return {
        	list: [],
        	listing: true,
        	show: false,
        	hide: true,
        	items: ['全部','一级'],
        	active: false,
        	lists: ["全部","综合医院"]
        }
    },
    methods: {
         Passwordvalid() {
                let params = ["hcn.shenzhen","0101","0","0"]
                commonAjax(params, 'hcn.serviceOpen', 'getOrgByServiceCode').then(res => {
                    if (res.code == 200) {
                    	console.log(res)
	                  	this.list = res.body
	                  	
                    }
                })

            },
            
        send(item){
        	//点击到跳转到已解约
        	this.$router.push("/yygh_detail")
        	//this.$store.dispatch('li_applyId',item.applyId)
        },
        
        toggle(event){
        	this.show = event
        	this.hide = event
        	this.listing = false
        },
        
        //获取医院选择值
//      getData:function (e) {
//           console.log(e.target.getAttribute('data-num'))
//       }
		
		//点击全部等级
		select(item,index,e){
			//获取点击的元素
	        console.log(e); 
	        //console.log(obj.currentTarget);
	        console.log(e.currentTarget.innerHTML);
	        this.show = false;
	        this.listing = true;
	        
	        //改变选中元素的样式
//	        this.$nextTick(function () {
//　　　　　　　　this.items.forEach(function (item) {
//　　　　　　　　　　Vue.set(item,'active',false);
//　　　　　　　　});
//　　　　　　　　Vue.set(item,'active',true);
//　　　　　　});
        }, 
        
        //点击综合医院
        selects(item,index,e){
			//获取点击的元素
	        console.log(e); 
	        //console.log(obj.currentTarget);
	        console.log(e.currentTarget.innerHTML);
	        this.show = false;
	        this.listing = true;
	        
	        //改变选中元素的样式
//	        this.$nextTick(function () {
//　　　　　　　　this.items.forEach(function (item) {
//　　　　　　　　　　Vue.set(item,'active',false);
//　　　　　　　　});
//　　　　　　　　Vue.set(item,'active',true);
//　　　　　　});
        } 
   },
   mounted() {
        this.Passwordvalid()
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
html,body{
	height: 100% !important;
	background: #EBEBEB !important;
}		
.yygh .mint-header{
		height: 1rem;
		background-color: #fff;
		color: #26a2ff;
	}
.yygh .mint-header-button{
	display: block;
	flex: 0;
}		
.yygh .mint-button{
		height: 1.5rem;
	}
.yygh .mint-header{
		font-size: 0.33rem;
	}
.yygh 	.mintui-back{
		font-size: 0.37rem;
	}
.yygh .mint-button-text img{
	width: 0.4rem;
	height: 0.4rem;
	float: right;
}	

.yygh .mint-tab-container{
	margin-top: 2rem;
}	
.yygh .is-right{
	display: flex;
	 direction: rtl;
}
.yygh .nav{
	font-size: 0.28rem;
	background: #fff;
	margin-top: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #ccc;
	overflow: hidden;
}
.yygh .nav img{
	margin-left: 0.2rem;
	height: 0.2rem;
	width: 0.2rem;
}
.yygh .nav li{
	font-size: 0.33rem;
	height: 0.8rem;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.yygh .list{
	background: #fff;
}	
.yygh .li{
	height: 1.2rem;
	width: 100%;
	border-bottom: 0.5px solid #ccc;
	margin: 0 0.3rem;
	color: #888;
	font-size: 0.28rem;
}
.yygh .nav li:hover{
	color: #26a2ff;
}		
.yygh .li_right{
	width: 92%;
	height: 100%;
}	
.yygh .li_right_top{
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
}
.yygh .li_right .li_right_top .name{
	color: #000;
	margin-right: 0.3rem;
}	
.yygh .li_right_bottom{
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
	white-space: nowrap;
	text-overflow:ellipsis;
	 overflow:hidden	
}	
.yygh .portrait{
	padding-top: 0.5rem;
	height: 1rem;
	width: 1rem;
}
.yygh .status{
	/*color: #F4D275;*/
	display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 0.4rem;
    background: #fcc648;
    border-radius: 5px;
    color: #fff;
    font-size: 0.28rem;
    margin-top: 0.1rem;
}
.yygh .status2{
	/*color: #F4D275;*/
	display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 0.4rem;
    background: #26a2ff;
    border-radius: 5px;
    color: #fff;
    font-size: 0.28rem;
     margin-top: 0.1rem;
}
.yygh .status3{
	/*color: #F4D275;*/
	display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 0.4rem;
    background: #ccc;
    border-radius: 5px;
    color: #fff;
    font-size: 0.28rem;
     margin-top: 0.1rem;
}


.yygh .list1 li{
	background: #fff;
	height: 0.8rem;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 0.3rem;
	border-bottom: 1px solid #ccc;
	font-size: 0.28rem;
}
.yygh .active{
	color: #26a2ff;
}
.yygh .unactive{
	color: #000;
}
.yygh {
	
}
.yygh {
	
}
.yygh {
	
}	

</style>	
	