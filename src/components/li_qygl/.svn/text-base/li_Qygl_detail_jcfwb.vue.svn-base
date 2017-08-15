//签约管理详情  已取消页面

<template>
	<div class="qygl_detail_yqx">
		<!--头部-->
		<mt-header fixed title="服务包">
		    <mt-button icon="back"  slot="left"  @click="goback()"></mt-button>
		</mt-header>
	
		<div class="main">
			<div class="main-con" v-for="(item, index) in list" @click="send(item)">
				<div class="type">
					<div class="service">{{item.spPackName}}</div>
					<div class="number">
						<div class="object fl">
							签约适合对象:
						</div>
						<span class="preson fl">{{item.suitableObject}}</span>
					</div>
				</div>
				<div class="detail">
					<router-link to="/li_Qygl_detail_jcfwb_detail">
					<em>详情</em>
					</router-link>
				</div>
			</div>
				
		</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';	
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
            suitableDic : [],
        }
    },
    
    methods: {
      Passwordvalid() {
                let params = [this.li_applyId[10]]
//              console.log(this.li_applyId)
                commonAjax(params, 'pcn.pcnSignResidentPackService', 'getSignResidentPack').then(res => {
                    if (res.code == 200) {
						console.log(res)
	                  	this.list = res.body
	                  	if(this.list.length == 0){
	                  		Toast({
			                    message: '没有数据',
			                    duration: 2000
			                })
	                  	}
	                  	//console.log(res.body.length)
	                  	//console.log(this.list)
	                  	//console.log(this.suitableDic)
	            //签约对象转换      	
	            this.list.forEach(item => {
		              let result = []
		              for (let i = 0, arr = item.suitableObject.split(','); i < arr.length; i++) {
		                  let tempArr = this.suitableDic.filter(item2 => {
		                      return item2.key === arr[i]
		                  })
		                  result.push(tempArr[0].text)
		              }
		              item.suitableObject = result.join(', ')
		          })      	
	            
     	   
                    }
                    
                    
                })

            }, 	
       
     
      goback(){
      	this.$router.go(-1);
      },
      
      //signPackId传值到服务包详情页面
      send(item){
        	console.log(item.signPackId)
        	this.$store.dispatch('li_signPackId',item.signPackId)
        },
    },
   computed:{
            ...mapState({
            	li_applyId:state => state.li_applyId
            })
    	},
   
    mounted() {
    		this.suitableDic = JSON.parse(sessionStorage.getItem("suitableDic"));
    		//console.log(sessionStorage.getItem("suitableDic"))
	        this.Passwordvalid()
	   },
}
</script>



<style scoped>
html,body{
	background: #fff;
}	
.qygl_detail_yqx {
	background: #fff;
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
.qygl_detail_yqx .main{
	 margin-top: 1rem;
	}
.qygl_detail_yqx .main-con{
	 height: 1.5rem;
	 display: flex;
	 justify-content: space-between;
	 padding: 0 0.3rem;
	 border-bottom: 0.5px solid #ccc;
	}	
.qygl_detail_yqx .type{
	display: flex;
	flex-direction: column;
	height: 0.75rem;
	line-height: 0.75rem;
	}
.qygl_detail_yqx .detail{
	 display: flex;
	 align-items: center;
	 justify-content: center;	
	}
.qygl_detail_yqx .detail em{
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
.qygl_detail_yqx .service{
		font-size: 0.33rem;
		color: blue;
	}
.qygl_detail_yqx .number{
		font-size: 0.28rem;
		color: #888888;
		height: 0.75rem;
	line-height: 0.75rem;
	}	
.qygl_detail_yqx .number span{
	    margin-left: 0.12rem;
		display: block;
		width: 3.8rem;
		overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
	}					
</style>