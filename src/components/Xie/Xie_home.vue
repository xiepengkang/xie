
<template>
		<div class="header_grop" style="background:#f2f2f2">
			
			<mt-swipe :auto="3000" style="height:3rem">
			  <mt-swipe-item><img src="../../assets/img/xie_banner.png" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/xie_banner.png" alt="" /></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/xie_banner.png" alt="" /></mt-swipe-item>
			</mt-swipe>
			<!--消息提醒-->
			<div id="news" @click="$router.push('/xie_news')">
				<img src="../../assets/img/xie_message.png" >
				<!--<span v-show= "count>0">{{count}}</span>-->
				<span>10</span>
			</div>
			<!--box框-->
			<div class="box">
				
					<!--<div class="box_left">-->
						<router-link to="/qygl" class="box_left">
						<div class="img_box">
							<img src="../../assets/img/xie_new_residents.png">
						</div>
						<div class="box_span">
							<span class="span1">新的居民
								<b class="b1" v-show="newregnum>0">{{newregnum}}</b>
							</span>
							<span class="span2">确认签约申请</span>
						</div>
						</router-link>
					<!--</div>-->
				
					<!--<div class="box_right">-->
						<router-link to="/jmzx" class="box_right">
							<div class="img_box">
								<img src="../../assets/img/xie_jmzx.png">
							</div>
							<div class="box_span">
								<span class="span1">居民咨询<b v-show="jmzxsl>0" class="b1" >{{jmzxsl}}</b></span>
								<span class="span2">居民互动消息</span>
							</div>
						</router-link>
					<!--</div>-->
				
			</div>
			<!--团队信息-->
			<div class="team_box">
				<div class="team_box_top">
					<div class="team_box_span">
						<span>{{list.orgName}}</span>
					</div>
					<router-link to="/home/fwtdtema" class="team_box_span1">
						<div class="team_box_span1">
							全部成员
						</div>
					</router-link>
				</div>
				<div class="team_box_center"  >
					<ul >
						<li v-for="(item,index) in list2">
							<div class="team_box_center_left_img">
								<!--<img :src=this.avatarFileId>-->
								<img :src="(item.avatarFileId==0)?src:imgReqUrl+item.avatarFileId" >
							</div>
							<div class="team_box_center_left_content">
								<span class="team_name">{{item.name}}</span>
								<span class="team_namelei">{{item.docType1}}</span>
							</div>
						</li>
					</ul>
				</div>
				<div class="team_box_bottom">
					<span>本月新增签约人数<i>{{this.signNum}}</i>人</span>
				</div>
			</div>
			
			<div class="box_center">
				<div class="box_bottom1">
					<div class="box_1">
							<router-link to="/dbfw-1">
							<dt>
								<dl>
									<dt>
										<img src="../../assets/img/xie_dbfw.png">
									</dt>
									<dd>代办服务</dd>
								</dl>
							</dt>
							</router-link>
						</div>
					<div class="box_2">
						<router-link to="/fwjldetail">
						<dt>
							<dl>
								<dt>
									<img src="../../assets/img/fwjl.png">
								</dt>
								<dd>服务记录</dd>
							</dl>
						</dt>
						</router-link>
					</div>
					<div class="box_3">
						<router-link to="/gh">
						<dt>
							<dl>
								<dt>
									<img src="../../assets/img/xie_yygg.png">
								</dt>
								<dd>预约挂号</dd>
							</dl>
						</dt>
						</router-link>
					</div>
				</div>
				<div class="box_top">
						<div class="box_1">
							<router-link to="/xie_jkda">
							<dt>
								<dl>
									<dt>
										<img src="../../assets/img/xie_jkda.png">
									</dt>
									<dd>健康档案</dd>
								</dl>
							</dt>
							</router-link>
						</div>
					<div class="box_2">
						<router-link to="/xie_gxyda">
						<dt>
							<dl>
								<dt>
									<img src="../../assets/img/xie_gxyda.png">
								</dt>
								<dd>高血压档案</dd>
							</dl>
						</dt>
						</router-link>
					</div>
					<div class="box_3">
						<router-link to="/xie_tnbda">
						<dt>
							<dl>
								<dt>
									<img src="../../assets/img/xie_tnbda.png">
								</dt>
								<dd>糖尿病档案</dd>
							</dl>
						</dt>
						</router-link>
					</div>
				</div>
				<div class="box_bottom">
					<div class="box_4">
						<router-link to="/Xie_aged_archives">
						<dt>
							<dl>
								<dt>
									<img src="../../assets/img/xie_old.png">
								</dt>
								<dd>老年人档案</dd>
							</dl>
						</dt>
						</router-link>	
					</div>
					<div class="box_5">
						<router-link to="/xie_gxysf">
						<dt>
							<dl>
								<dt>
									<img src="../../assets/img/xie_gxysf.png">
								</dt>
								<dd>高血压随访</dd>
							</dl>
						</dt>
						</router-link>
					</div>
					<div class="box_6">
						<router-link to="/xie_tnbsf">
							<dt>
								<dl>
									<dt>
										<img src="../../assets/img/xie_tnbsf.png">
									</dt>
									<dd>糖尿病随访</dd>
								</dl>
							</dt>
						</router-link>
					</div>
				</div>
				
				<div class="box_top">
					<div class="box_1">
						
						<a href="http://115.236.19.147:14188/ckbserver/view/index">
							<dt>
								<dl>
									<dt>
										<img src="../../assets/img/gy_medicalTools.png">
									</dt>
									<dd>医学工具</dd>
								</dl>
							</dt>
						</a>
					</div>
					<div class="box_2">
						<router-link to="/notifyResidents/chooseNotifyType">
							<dt>
								<dl>
									<dt>
										<img src="../../assets/img/ssj_noticeResidents.png">
									</dt>
									<dd>通知居民</dd>
								</dl>
							</dt>
						</router-link>
					</div>
					<div class="box_3"></div>
				</div>
			</div>
			
			<div class="flexbox">
				<router-link to="/xie_home" class="flex_left" > 
						<div class="xie_img_box">
							<img src="../../assets/img/xie_shouye.png" v-show="isshouye" >
							<img src="../../assets/img/xie_shouye2.png" v-show="isshouye1">
						</div>
						<span>首页</span>
				</router-link>
				<router-link to="/Residents" class="flex_center">
						<div class="xie_img_box">
							<img src="../../assets/img/xie_jum.png" >
						</div>
						<span>居民</span>
				</router-link>
				<router-link to="/jia_person" class="flex_right">
						<div class="xie_img_box">
							<img src="../../assets/img/xie_my.png" >
						</div>
						<span>我的</span>
				</router-link>
			</div>
		</div>
</template>
<script>
	var md5 = require("md5");
	import { Indicator } from 'mint-ui'
	import { commonAjax,commonAjaxKy} from '../../api/api'
	import { imgview } from '../../api/api'
export default {
    components: {

    },
    data() {
        return {
			xie_localDoctorId:[],
			isshouye:false,
			isshouye1:true,
			doctorid:'',
			docType:'',
			doc:'',
			jmzxsl:'',
			signNum:'',
			avatarFileId:'',
			avatarFileId1:'',
			list:{},
			imgReqUrl: 'http://122.224.131.235:9088/hcn-web/upload/',
			list2:[],
			src:require('../../assets/img/xie_doctor.png'),
//			img:'http://122.224.131.235:9088/hcn-web/upload/avatarFileId',
			dict:[{"itemName": "全科医生", "dicValue": "01"},
						{"itemName": "全科护士", "dicValue": "02"},
						{"itemName": "公卫医生", "dicValue": "03"},
						{"itemName": "公卫护士", "dicValue": "04"},
						{"itemName": "计生医生", "dicValue": "05"},
						{"itemName": "中医师", "dicValue": "06"},
						{"itemName": "其他", "dicValue": "09"},
						{"itemName": "暂无分类", "dicValue": ""},
						
						
			],
			newregnum:'',
			count:0,
        }

    },
    computed: {

    },
    methods: {
		xie_getdoctor() {
				Indicator.open('加载中...');
				this.doctorid=JSON.parse(sessionStorage.getItem('userInfo')).id
                let params = [this.doctorid]
                commonAjax(params, 'pcn.myResidentDoctorService', 'queryDoctorInfo').then(res => {
                     if (res.code == 200) {
              			sessionStorage.setItem("common_orgId",res.body.teamInfo[0].orgId)
					 this.doc=res.body.doctorInfo[0].doctorId
					 this.list=res.body
					 this.list2=res.body.doctorInfo
					 let doctype = res.body.doctorInfo[0].docType
					 this.xie_bodytitle(doctype)
					this.list2.forEach((item)=>{
						if(item.doctorId==this.list.leaderId){
							item.docType1="团队长";
						}else{
					 	this.dict.forEach(item2=>{
					 		
					 		if(item.docType==item2.dicValue){
					 			item.docType1=item2.itemName
					 		
					 		}
					 	})
					 }
				})
					 this.docType=res.body.doctorInfo[0].docType
					 this.signNum=res.body.signNum
//					请求图片的地址
					this.avatarFileId=imgview (res.body.doctorInfo[0].avatarFileId)
					let result=res.body.teamInfo.filter(item=>{
						return item.teamId=res.body.doctorInfo[0].teamId
					})
						this.xie_localDoctorId=[res.body.doctorInfo[0].localDoctorId,result[0].teamCode,res.body.doctorInfo[1].name,res.body.teamInfo[0].phoneNo,res.body.doctorInfo[0].name,res.body.doctorInfo[0].doctorId]
					//存值uid  manageUnitId到
					 sessionStorage.setItem('xie_localDoctorId', JSON.stringify(this.xie_localDoctorId));
					Indicator.close(); 
                    }
                })
                
            },
            xie_bodytitle(doctype){
				Indicator.open('加载中...');
                let params = [{"targetId":this.doc,"status":doctype,"targetType":"031"}]
                commonAjax(params, 'pcn.imChatService', 'getTargetCount').then(res => {
                    if (res.code == 200) {
					this.jmzxsl=res.body
					Indicator.close(); 
                    }
                })
                
            },
            xie_xinjum(){
            	
				Indicator.open('加载中...');
                let params = []
                commonAjax(params, 'hcn.notification', 'getAllNotificationCount').then(res => {
                     if (res.code == 200) {
					Indicator.close(); 
                    }
                })
                
            },
             queryResidentRecord() {
         		Indicator.open('加载中...');
                let params = ["",""]
                commonAjax(params, 'pcn.myResidentDoctorService', 'querySignResidentRecord').then(res => {
                    if (res.code == 200) {
	                this.newregnum = res.body.WaitingSignNum
	                  	}
                    
                })
            },
            
//          消息请求
            getAllNotificationCount(){
				Indicator.open('加载中...');
                let params = []
                commonAjaxKy(JSON.stringify(params), 'hcn.notification', 'getAllNotificationCount').then(res => {
                    if (res.code == 200) {
                    	console.log(res.body[0].count)
                    	res.body.forEach(item=>{
                    		 this.count += parseInt(item.count)
                    	})
					Indicator.close(); 
//					console.log(count)
                    }
                })
                
            },
  		 },
    mounted() {
				this.xie_getdoctor()
				this.xie_xinjum()
				this.queryResidentRecord()
				this.getAllNotificationCount()
    },
}
</script>
<style scoped>
.header_grop{
	width: 100%;
	height: 100%;
}
.header_grop img{
	width: 100%;
	height: 3rem;
	
}
.box{
	height: 1rem;
	display: flex;
	padding: 0.25rem 0px;
	background: #FFFFFF;
	margin-bottom:0.2rem
}
.box_left,.box_right{
	padding-left: 0.2rem;
	flex: 1 1 50%;
	
	display: flex;
}
.box_left{border-right: 1px solid #ECECEC;}
.box_left .img_box,.box_right .img_box{
	flex: 1 1 30%;
	text-align: center;
	
}
.img_box img{
	width: 0.8rem;
	height: 0.8rem;
	margin-top: 0.1rem;
}
	
.box_left div,.box_right div{
	flex: 1 1 70%;
	font-size: 0.3rem;
}
.box_left div .span1,.box_right div .span1{
	display: block;
	width: 100%;
/*	text-align: center;*/
	padding-top: 0.1rem;
	color: #666666;
	font-size: 0.35rem;
	font-weight: 500;

}
.box_left div .span2,.box_right div .span2{
	display: block;
	width: 100%;
/*	text-align: center;*/
	padding-top: 5px;
	color: #A5A5A5;
	font-size: 0.25rem;

}
.box_center{
	display: flex;
		flex-direction:column;
		background: #fff;
		width: 100%;
		height: 7.5rem;
		padding-bottom:0.3rem;
		margin-bottom: 1.2rem;
}
.box_top,.box_bottom,.box_bottom1{
	flex: 1 1 33%;
	display: flex;
}
.box_1,.box_2,.box_3,.box_4,.box_5,.box_6{
	flex: 1 1 33%;
}

.header_grop dt img{
	width: 1.2rem;
	height: 1.2rem;
	padding-top:0.3rem
}
dd{
	font-size: 0.3rem;
	color: #333333;
}
dt{
	text-align: center;
}
.header{
	background: #00CCFF;
	color: #fff;
	height: 1.2rem;
	line-height: 1.2rem;
	font-size: 0.32rem;
	display: flex;
	margin-bottom: 0.1rem;
}
.header span{
	flex: 1;
	display: flex;
	justify-content: center;
	margin-left: 0.5rem;
	color: #868686
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
	height: 0.4rem;
	width: 0.4rem;
	margin-top: 0.4rem;
	margin-right: 0.4rem;
}



.flexbox{
	height: 1rem;
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	background: #fff;
}
.flex_left,.flex_center,.flex_right{
	flex: 1 1 33%;
	display: flex;
	flex-direction:column;
}
.xie_img_box{
	height: 0.5rem;
}
.flexbox img{
	width: 0.4rem;
	height: 0.4rem;
	float: left;
	padding-left: 1rem;
	margin-top: 0.1rem;
/*	line-height: 0.3rem;*/
	justify-content: center;
	align-content: center;
	
}
.flexbox span{
	font-size: 0.3rem;
	text-align: center;
	height: 0.5rem;
	padding-top: 0.1rem;
}

/* a:hover{color: #333333} */
/* a:link {color: #333333} */
/* a:visited{color: #333333} */
.team_box{
	height: 2.8rem;
	/*border: 1px solid red;*/
	width: 100%;
	margin-bottom:0.2rem ;
	background: #fff;
}
.team_box_top{
	/*border-bottom: 1px solid red;*/
	height: .6rem;
}
.team_box_span{
	font-size: 0.35rem;
	color: red;
	float: left;
	margin-left: .2rem;
	margin-top: .1rem;
	color: #64ccf8;
}
.team_box_span1{
	float: right;
	font-size: 0.3rem;
	margin-right: .2rem;
	margin-top: .15rem;
}
.team_box_center{
	height: 1.4rem;
	/* border-top: 1px solid red; */
	/*margin:.2rem .2rem 0 .2rem;*/
	overflow-y:hidden;
}
.team_box_center li{
	height: 1.3rem;
	/*overflow: hidden;*/
	display:inline-block;
}
.team_box_center_left,.team_box_center_right{
	/*border: 1px solid red;*/
	height: 1.5em;
	width: 2.3rem;
	float: left;
}
.team_box_center_left_img{
	float: left;
}
.team_box_center_left_img img{
	height: 1rem;
	width: 1rem;
	margin-top: 0.3rem;
	margin-right: .1rem;
	border-radius: 50%;
}
.team_box_center_left_content{
	float: left;
	width: 1.3rem;
	/*border: 1px solid red;*/
	
}
.team_name{
	font-size: .35rem;
	font-weight: bold;
	color: black;
	/*float: left;*/
	margin-bottom: .2rem;
	margin-top: .25rem;
/*	margin-left: .1rem;*/
	
}
.team_namelei{
	color: #777;
	font-size: .25rem;
	float: left;
}
.team_box_bottom span{
	font-size: 0.35rem;
	font-weight: blod;
	float: left;
	padding-left: 1.8rem;
}
.box .b1{
	text-align: center;
	width: 0.45rem;
	height: 0.45rem;
	border-radius: 50%;
	background-color: #f80000;
	color: #fff;
	font-size: .3rem;
/*	display: inline-block;*/
	margin-left: .1rem;
	line-height: .45rem;
	float: right;
/*	margin-right: .6rem;*/
}
.box_span{
	padding-right: .3rem;
}
.team_box_bottom i{
	color: orange;
}
#news{
	
	position:absolute;
	right: .3rem;
	top: 0.3rem;
	font-size:.3rem;
	color:red;
	background:#fff;
}
#news img{
	/*padding:.1rem;*/
	width: .5rem;
	height:.5rem;
	/*border-radius: 50%;*/
	
}
#news span{
	position:absolute;
	right: -.1rem;
	top: 0.2rem;
	z-index: 100;
	border: 1px solid red;
    border-radius: 50%;
    background: red;
    color: #fff;
}
</style>