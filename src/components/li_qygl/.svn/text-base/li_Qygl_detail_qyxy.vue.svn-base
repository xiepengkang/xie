//签约管理详情  签约协议

<template>
	<div class="qygl_detail_yqx">
		<!--头部-->
		<mt-header fixed title="签约协议">
		    <mt-button icon="back"  slot="left"  @click="goback()"></mt-button>
		</mt-header>
		
		<div class="content" v-html="datas">
			{{datas}}
		</div>
	</div>
</template>

<script>
import { mapState} from 'vuex'		
import {
    commonAjax, requestConfirmPassword
}
from '../../api/api';	
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
export default {
    data: function() {
        return {
        	list: [],
            page: 1,
            errshow: false,
            error:'',
            datas: '',
            selected: '',
        }
    },
    methods: {
         Passwordvalid() {
         		console.log(this.li_applyId[0])
                let params = [{"signId":"","mpiId":"a821cadaaaa54d4bac80ae44c2d382e5","teamId":"84"}]
                commonAjax(params, 'pcn.signProtocalService', 'getSignProtocal').then(res => {
                    if (res.code == 200) {
                    	console.log(res.body.protocalText)
                    	console.log(res.body.orgId)
                    	console.log(this.li_applyId[11])
                    	
                    	//证件类别判断
                    	if (this.li_applyId[11] == 1) {
	                  		this.li_applyId[11] = "居民身份证"
	                  	} else if(this.li_applyId[11] == 2){
	                  		this.li_applyId[11] = "居民户口簿"
	                  	} else if(this.li_applyId[11] == 3){
	                  		this.li_applyId[11] = "护照"
	                  	} else if(this.li_applyId[11] == 4){
	                  		this.li_applyId[11] = "军官证"
	                  	} else if(this.li_applyId[11] == 5){
	                  		this.li_applyId[11] = "驾驶证"
	                  	} else if(this.li_applyId[11] == 6){
	                  		this.li_applyId[11] = "港澳居民通行证"
	                  	} else if(this.li_applyId[11] == 7){
	                  		this.li_applyId[11] = "台湾居民通行证"
	                  	} else if(this.li_applyId[11] == 11){
	                  		this.li_applyId[11] = "出生证明"
	                  	} else if(this.li_applyId[11] == 99){
	                  		this.li_applyId[11] = "其他法定有效证件"
	                  	}
                    	console.log(this.li_orgName)
                    	this.datas = res.body.protocalText.replace(/%signPeopleName%&nbsp;/g,this.li_applyId[7]+' ').replace(/%peopleCardType%&nbsp;/g,this.li_applyId[11]+' ').replace(/%peopleCardNum%&nbsp;/g,this.li_applyId[6]+' ')
                    	.replace(/%signPeopleName%/g,this.li_applyId[7]).replace(/%peoplePhone%&nbsp;/g,this.li_applyId[8]+' ').replace(/%signTeamLeader%/g,this.li_orgName[1])
                    	.replace(/%peopleAddress%&nbsp;/g,this.li_applyId[1]+this.li_applyId[2]+this.li_applyId[3]+this.li_applyId[4]+this.li_applyId[5]+'')
                    	//.replace(/%signTeamLeader%/g,this.li_applyId[9])
                    	.replace(/%signTeamName%/g,this.li_applyId[9])
                    	.replace(/%signHospitalName%&nbsp;/g,this.li_orgName[0]+' ')
                    	.replace(/%signTeamMember%&nbsp;/g,JSON.parse(sessionStorage.getItem("xie_localDoctorId"))[2]+' ')
                    	.replace(/%signTeamPhone%&nbsp;/g,JSON.parse(sessionStorage.getItem("xie_localDoctorId"))[3]+' ')
                    }
                })

            },
            
        goback() {
        	this.$router.go(-1)
        }
   },
   mounted() {
        this.Passwordvalid()

    },
     computed:{
            ...mapState(['li_applyId','li_orgName']),
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
.qygl_detail_yqx .content{
		margin-top: 1rem;
		background: #fff;
	}	
.qygl_detail_yqx .content{
	font-size: 0.33rem;
	}	
.qygl_detail_yqx  .MsoNormal{
	margin-bottom: 0.3rem;
	}	
.qygl_detail_yqx {
	
	}	
.qygl_detail_yqx {
	
	}										
</style>