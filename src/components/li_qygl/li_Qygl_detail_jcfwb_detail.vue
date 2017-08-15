//签约管理详情  已取消页面

<template>
	<div class="qygl_detail_yqx">
		<!--头部-->
		<mt-header fixed :title="value.spPackName">
		    <mt-button icon="back"  slot="left"  @click="goback()"></mt-button>
		</mt-header>
	
		<div class="top">
			{{value.serviceDesc}}
		</div>
		
		<ul class="list">
			<li class="list_one">
				<div class="list_one_top">
					<div class="list_one_top_left">
						
					</div>
					<div class="list_one_top_right">
						合计价格
					</div>
				</div>
				<div class="list_one_bottom">
					￥{{value.price}}
				</div>
			</li>
			<li class="list_two">
				<div class="list_two_top">
					<div class="list_two_top_left">
						
					</div>
					<div class="list_two_top_right">
						优惠价格
					</div>
				</div>
				<div class="list_two_bottom">
					暂无优惠
				</div>
			</li>
			<li class="list_three">
				<div class="list_three_top">
					<div class="list_three_top_left">
						
					</div>
					<div class="list_three_top_right">
						签约适合对象
					</div>
				</div>
				<div class="list_three_bottom">
					{{value.suitableObject}}
				</div>
			</li>
			<li class="list_four">
				<div class="list_four_top">
					<div class="list_four_top_left">
						
					</div>
					<div class="list_four_top_right">
						服务项目
					</div>
				</div>
				
				<ul class="con">
					<li v-for="(item, index) in list">
						<div class="li_top">
							<!--1.基本公共卫生服务项目-->
						</div>
						<div class="li_center">
							1<span>)</span>{{item.serviceName}}
						</div>
						<div class="bottom">
							2<span>)</span>{{item.serviceDesc}}
						</div>
						<div class="times">
							年服务次数：<em>{{item.times}}</em>
						</div>
					</li>
					
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState} from 'vuex'		
import {
    commonAjax, requestConfirmPassword,dicAjax
}
from '../../api/api';	
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
export default {
    data: function() {
        return {
        	list: [],
            value: '',
            suitableDic: [],
        }
    },
    mounted() {
       
//      console.log(this.li_signPackId)
        this.suitableDic = JSON.parse(sessionStorage.getItem("suitableDic"));
//  	console.log(sessionStorage.getItem("suitableDic"))
//		this.Passwordvalid();
    },
    watch:{
    	li_signPackId(){
    		 this.Passwordvalid()
    	}
    },
    methods: {
       Passwordvalid() {
                let params = [this.li_signPackId]
                commonAjax(params, 'pcn.pcnSignResidentPackService', 'signResidentPackDetail').then(res => {
                    if (res.code == 200) {
                    	console.log(res)
                    	console.log(res.body)
                    	console.log(res.body.itemList)
	                  	this.list = res.body.itemList
	                  	console.log(this.list)
	                    this.value = res.body
	                
	                
//	            sessionStorage.getgetItem("li_datas")
//	            let fwb=[]
//				this.list.forEach(item)=>{
//						 
//				}
//				
				
				
				
				
				
				
//				services(){
//	            	let services='';
//	            	this.arry.forEach((item)=>{
//	            		services += item.serviceName +' ';
//	            	})
	                    
	                    

						//签约适合对象获取字典
						let result = []
						for (let i = 0, arr = this.value.suitableObject.split(','); i < arr.length; i++) {
			                  let tempArr = this.suitableDic.filter(item2 => {
			                      return item2.key === arr[i]
			                  })
			                  result.push(tempArr[0].text)
			              }
			              this.value.suitableObject = result.join(', ')
                    }
                })

            },
      
      goback(){
      	this.$router.go(-1);
      },
    },
    
    //接收数据
    computed:{
            ...mapState({
            	li_signPackId:state => state.li_signPackId
            })
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
		 border-bottom: 1px solid #ccc;
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
	 margin-bottom: 0.2rem;
	 height: 1rem;
	 display: flex;
	 justify-content:flex-start;
	 align-items: center;
	 padding: 0 0.3rem;
	 background: #fff;
	}
.qygl_detail_yqx .list_one,.list_two,.list_three,.list_four{
	background: #fff;
	margin-bottom: 0.2rem;
	}	
.qygl_detail_yqx .list_one_top,.list_two_top,.list_three_top,.list_four_top{
	height: 0.5rem;
	line-height: 0.5rem;
	display: flex;
	border-bottom: 1px solid #ccc;
	}
.qygl_detail_yqx .list_one_top_left,.list_two_top_left,.list_three_top_left,.list_four_top_left{
	height: 0.3rem;
	width: 0.1rem;
	margin: 0.1rem 0.2rem 0.1rem 0;
	background: #26a2ff;
	}
.qygl_detail_yqx .list_one_top_right,.list_two_top_right,.list_three_top_right,.list_four_top_right{
	color: #888888;
	font-size: 0.28rem;
	}	
.qygl_detail_yqx .list_one_bottom,.list_two_bottom,.list_four_bottom{
	height: 1rem;
	line-height: 1rem;
	padding: 0 0.3rem; 
	font-size: 0.33rem;	
	}
.qygl_detail_yqx .list_three_bottom{
	padding: 0 0.3rem; 
	font-size: 0.28rem;
	line-height: 0.4rem;
}
.qygl_detail_yqx .list_one_bottom{
	color: #fcc648;	
	}	
.qygl_detail_yqx .con{
	/*margin-top: 0.3rem;*/
	padding: 0 0.3rem;
	line-height: 0.33rem;
	color: #888;
	}
.qygl_detail_yqx .con li{
	padding: 0.2rem 0;
	}	
.qygl_detail_yqx .li_top{
	margin: 0.1rem 0;
	font-size: 0.33rem;
	}
.qygl_detail_yqx li span{
	margin: 0 0.1rem;
	}
.qygl_detail_yqx .list{
	font-size: 0.28rem;
	}						
</style>