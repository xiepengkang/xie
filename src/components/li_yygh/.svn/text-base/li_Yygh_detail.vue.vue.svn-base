<template>
	<div class="yygh">
		<!--头部-->
		<mt-header fixed title="下沙社康中心">
		  <router-link to="/yygh" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right">
		  	<img class="img1" src="../../assets/img/li_fdj.png"/>
		  </mt-button>
		</mt-header>
		
	<div class="body">
        <div class="container">
            <div class="leftPart fl">
                <ul>
                    <li v-for='item in list' @click='selectSignPack' ref='signPacks' :id='item.orgId + "_" + item.localDeptId'>
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="rightPart fl">
                <ul class="content">
                	<!--<li>
                		解开了简历库金龙卡
                	</li>-->
                    <li v-for='item in listing'>
        				{{item.regDeptName}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
		
	</div>
</template>

<script>
import { Toast } from 'mint-ui';	
import {
    commonAjax, requestConfirmPassword,dicAjax
}
from '../../api/api';
import '../../assets/css/li_qygl_detail.css';
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
export default {
    data: function() {
        return {
        	list: [],
        	listing: [],
        }
    },
    methods: {
         Passwordvalid() {
                let params = ["e6e3fb82-7868-4614-95eb-345ec0bb1c01",1]
                commonAjax(params, 'hcn.department', 'getDeptList').then(res => {
                    if (res.code == 200) {
                    	console.log(res)
	                  	this.list = res.body
	                  	
                    }
                })

            },
            
        //点击左侧栏列表时请求获取右侧数据
        selectSignPack(e) {
            console.log(e.currentTarget); 
			console.log(e.currentTarget.id.split('_')[0]);
			console.log(e.currentTarget.id.split('_')[1]);
            let params = [e.currentTarget.id.split('_')[0],e.currentTarget.id.split('_')[1]]
            commonAjax(params, 'hcn.department', 'getDeptReg').then(res => {
                if (res.code === 200) {
                		console.log(res)
                    if (res.body.length) {
                    	
                        this.listing = res.body
                        //this.zbl_getSignPack([{'name':'spPackName','value':spPackName}])
                    } else {
                        this.listing = []
                        Toast({
                            message: '暂无数据',
                            duration: 500
                        })
                    }
                }
            })
        },
//      selectSignPackList(e) {
//          let params = [{
//              "spServiceId": e.currentTarget.id.split('_')[0],
//              "spPackId": e.currentTarget.id.split('_')[1],
//              "teamId": ""
//          }]
//          let spServiceId = e.currentTarget.id.split('_')[0],
//          spPackId = e.currentTarget.id.split('_')[1],
//          serviceName = e.currentTarget.id.split('_')[2]
//          commonAjax(params, 'pcn.mpiDemographicinfoService', 'getServiceNoExecMpiList').then(res => {
//              if (res.code === 200) {
//                  let tempArr = [
//                      {'name':'resBody','value':res.body},
//                      {'name':'spServiceId','value':spServiceId},
//                      {'name':'spPackId','value':spPackId},
//                      {'name':'serviceName','value':serviceName},
//                  ]
//                  this.zbl_getSignPack(tempArr)
//                  this.$router.push('/dbfw-2')
//	            }
//	        })
//	    },
        
   },
   mounted() {
        this.Passwordvalid()
   },
}
</script>


<style scoped>
html,body{
	height: 100% !important;
}
.yygh{
	height: 100%;
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
.yygh .mintui-back{
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
.yygh .container{
	margin-top: 1rem;
	border-top: 1px solid #ccc;
}
.yygh .leftPart{
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #EBEBEB;
	height: 100%;
}
.yygh .leftPart ul{
	width: 100%;
	height: 100%;
}
.yygh .leftPart li{
	height: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.33rem;
}
.yygh .leftPart li:hover{
	display: flex;
	width: 100%;
	width: inherit;
	color: #26a2ff;
	background: #fff;
}
.yygh .rightPart{
	width: 60%;
	height: 100%;
	background: #fff;
}
.yygh .rightPart ul{
	width: 100%;
}
.yygh .rightPart ul li{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1rem;
	border-bottom: 1px solid #ccc;
	margin-left: 0.5rem;
}
.yygh .rightPart{
	
}


</style>	
	