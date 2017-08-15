<template>
	<div class="qygl_detail_yqx">
		<!--头部-->
		<mt-header fixed title="完成">
		    <mt-button ></mt-button>
		</mt-header>
		
		<div class="main">
			<img src="../../assets/img/mao_choose.png"/>
			<div class="qycg">
				<em>签约成功</em>
			</div>
			<div class="name">
				你已和<span>李芳</span>成功签约，成为他的家庭医生
			</div>
			<div class="qycg">
				已为居民生产健康指标，点击制定<em>健康指标</em>
			</div>
		</div>
		
		<div class="button">
			<mt-button type="primary" @click="nextto">继续签约</mt-button>
			<mt-button type="danger"  @click="next">返回首页</mt-button>
		</div>
		
	</div>
</template>

<script>
import { Navbar,TabItem,Header,Button,Cell,Field,Radio,MessageBox } from 'mint-ui';
export default {
    data: function() {
        return {
        	list: [],
            page: 1,
            errshow: false,
            error:'',
            value: '',
            selected: '',
        }
    },
	components:{
		"mt-header":Header,
        "mt-button":Button,
        "mt-cell":Cell,
        "mt-field":Field,
		"mt-radio":Radio
	},
    methods: {

      next(){
       	this.$router.push("/Residents")
      },
   	   nextto(){
       	this.$router.push("/Residents/adjm")
      },
   },
   
}
</script>



<style scoped>
html,body{
	height: 100%;
	width: 100%;
	background: #EBEBEB;
}	
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
.qygl_detail_yqx .button{
	background: #EBEBEB;
	padding: 0.3rem 0.5rem 0.2rem;
	display: flex;
	align-items: center;
	flex: 1;
	min-height: 7rem;
	flex-direction: column;
	}	
.qygl_detail_yqx .mint-button--normal{
	height: 1rem;
	width: 100%;
	margin: 0.1rem 0;
	}	
.qygl_detail_yqx .main{
	margin-top: 1rem;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid #ccc;
	font-size: 0.28rem;
	}		
.qygl_detail_yqx .main img {
	margin: 0.3rem 0;
	}	
.qygl_detail_yqx .main div{
	margin-bottom: 0.3rem;
	}	
.qygl_detail_yqx em{
	color: #26a2ff;
	}
.qygl_detail_yqx .mint-button--danger{
	background: #fcc648;
	}		
						
</style>