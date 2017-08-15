<template>
	<div class="header-grop">
		<div class="header">
			<!--<router-link to="/xie_jkda">-->
				<img @click='return1' class="jt" src="../../assets/img/xie_jt.png"/>
			<!--</router-link>-->
			<span>{{this.xie_gxyda_phrId.personName}}</span>
			<!--<div class="preservation" @click="preservations">
			保存
			</div>-->
		</div>
		<div class="moban">
			<mould :module='module' :data='allData' ref='mould' @complete='getDataFromChild'></mould>
		</div>
	</div>
	
</template>
<script>
	import { Actionsheet } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import { commonAjax} from '../../api/api';
	import { requestJkmoduld } from '../../api/api';
	import {   Indicator }from 'mint-ui';
	import { mapState} from 'vuex'
	import validate from '../common/jia_PhoneValidate.vue'
	import mould from '../common/jia_shuju_mould.vue'
	import { requestModuld } from '../../api/api';
	
export default {
    components: {
		mould
    },
//      computed: mapState({
//  	Xiesfzh
//  }),
    data() {
        return {
//      	给模板的数据
        	allData:{},
        	allData1:{},
			data:{},
            module:{},
//			吸烟频率
            smoke:[{"itemName": "现在每天吸", "dicValue": "1"},
					{"itemName": "现在吸，但不是每天吸", "dicValue": "2"},
					{"itemName": "过去吸，现在不吸", "dicValue": "3"},
					{"itemName": "从不吸", "dicValue": "4"}],
					//			    饮酒频率     
							    drink:[{"itemName": "从不", "dicValue": "1"},
					{"itemName": "偶尔", "dicValue": "2"},
					{"itemName": "1d/月~3d/月", "dicValue": "21"},
					{"itemName": "少于1d/月", "dicValue": "22"},
					{"itemName": "经常", "dicValue": "3"},
					{"itemName": "5d/周~6d/周", "dicValue": "31"},
					{"itemName": "3d/周~4d/周", "dicValue": "32"},
					{"itemName": "1d/周~2d/周", "dicValue": "33"},
					{"itemName": "每天", "dicValue": "4"}],
					//			饮酒种类
								drinkTypeCode:[{"itemName": "白酒(≥42度)", "dicValue": "1"},
					{"itemName": "白酒(＜42度)", "dicValue": "2"},
					{"itemName": "啤酒", "dicValue": "3"},
					{"itemName": "黄酒、米酒", "dicValue": "4"},
					{"itemName": "红酒", "dicValue": "5"},
					{"itemName": "其它", "dicValue": "9"}],
					//锻炼频率
					train:
					[{"itemName": "每天", "dicValue": "1"},
					{"itemName": "每周一次以上", "dicValue": "2"},
					{"itemName": "5次/周~6次/周", "dicValue": "21"},
					{"itemName": "3次/周~4次/周", "dicValue": "22"},
					{"itemName": "1次/周~2次/周", "dicValue": "23"},
					{"itemName": "偶尔", "dicValue": "3"},
					{"itemName": "1次/月~3次/月", "dicValue": "31"},
					{"itemName": "少于1次/月", "dicValue": "32"},
					{"itemName": "不运动", "dicValue": "4"}],
					//检出途径
					recordSource:[{"itemName": "健康档案", "dicValue": "1"},
					{"itemName": "35岁首诊测压", "dicValue": "2"},
					{"itemName": "普查", "dicValue": "3"},
					{"itemName": "门诊就诊", "dicValue": "4"},
					{"itemName": "体检", "dicValue": "5"}],
					//经常就诊地点
					clinicAddress:[{"itemName": "本院", "dicValue": "1"},
					{"itemName": "其他一级医院", "dicValue": "2"},
					{"itemName": "本区二、三级医院", "dicValue": "3"},
					{"itemName": "其他", "dicValue": "4"}],
					//生活自理能力
					viability:[{"itemName": "完全自理", "dicValue": "1"},
					{"itemName": "部分自理", "dicValue": "2"},
					{"itemName": "完全不能自理", "dicValue": "3"}],
					//危险因素
					riskiness:[{"itemName": "无", "dicValue": "0"},
					{"itemName": "吸烟", "dicValue": "2"},
					{"itemName": "血脂异常", "dicValue": "3"},
					{"itemName": "早发心血管病家族史", "dicValue": "4"},
					{"itemName": "腹型肥胖或肥胖", "dicValue": "5"},
					{"itemName": "糖耐量受损和/或空腹血糖异常", "dicValue": "6"}],
					//靶器官伤害	
					targetHurt:[{"itemName": "无", "dicValue": "0"},
					{"itemName": "左心室肥厚", "dicValue": "1"},
					{"itemName": "颈动脉超声IMT＞0.9mm或动脉粥样斑块", "dicValue": "2"},
					{"itemName": "颈-股动脉搏波速度 ＞12m/s", "dicValue": "3"},
					{"itemName": "踝/臂血压指数 ＜ 0.9", "dicValue": "4"},
					{"itemName": "估算的肾小球滤过率降低或血清肌酐轻度升高", "dicValue": "5"},
					{"itemName": "微量白蛋尿或白蛋白/肌酐比异常", "dicValue": "6"}],
					//并发症
					complication:[{"itemName": "脑血管病", "dicValue": "1"},
					{"itemName": "脑出血", "dicValue": "10"},
					{"itemName": "缺血性脑卒中", "dicValue": "11"},
					{"itemName": "短暂性脑缺血发作", "dicValue": "12"},
					{"itemName": "心脏疾病", "dicValue": "2"},
					{"itemName": "心肌梗死史", "dicValue": "20"},
					{"itemName": "心绞痛", "dicValue": "21"},
					{"itemName": "冠状动脉血运重建史", "dicValue": "22"},
					{"itemName": "充血性心力衰竭", "dicValue": "23"},
					{"itemName": "肾脏疾病", "dicValue": "3"},
					{"itemName": "糖尿病肾病", "dicValue": "30"},
					{"itemName": "肾功能受损", "dicValue": "31"},
					{"itemName": "血肌酐[男性＞133mol/L(1.5mg/dL) 女性＞124mol/L(1.4mg/dL)]", "dicValue": "32"},
					{"itemName": "蛋白尿 ＞300mg/24h", "dicValue": "33"},
					{"itemName": "外周血管疾病", "dicValue": "4"},
					{"itemName": "视网膜病变", "dicValue": "5"},
					{"itemName": "出血或渗", "dicValue": "50"},
					{"itemName": "视乳头水肿", "dicValue": "51"},
					{"itemName": "糖尿病", "dicValue": "6"},
					{"itemName": "空腹血糖 ：≥7.0mmol/L( 126mg/dL)", "dicValue": "60"},
					{"itemName": "餐后血糖 ：≥11.1mmol/L( 200mg/dL）", "dicValue": "61"},
					{"itemName": "糖化血红蛋白：（ HbA1c）≥6.5%", "dicValue": "62"}],
					//危险分层
					riskLevel:[{"itemName": "低危", "dicValue": "1"},
					{"itemName": "中危", "dicValue": "2"},
					{"itemName": "高危", "dicValue": "3"},
					{"itemName": "很高危", "dicValue": "4"}],


//			日吸烟量(支)
			smokeCount:'',
//			日饮酒量(两)
			drinkCount:'',
//			临床确诊时间
			confirmDate:'',
//			病程（天）
			deaseAge:'',
//			身高(cm)
			height:'',
//			体重(kg)
			weight:'',
//			收缩压(mmHg)
			constriction:'',
//			舒张压(mmHg)
			diastolic:'',
//			血压正常原因	
			afterMedicine:'',
//			管辖机构
			manaUnitId:'',



        }

    },
    computed: {
		...mapState(['xie_gxyda_phrId'])
    },
    methods: {
		xie_getdetailed() {
//				Indicator.open('加载中...');
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],this.xie_gxyda_phrId.phrId]
                commonAjax(params, 'pcn.archiveService', 'getHypertensionArchiveDetail').then(res => {
                     if (res.code == 200) {
                     this.allData=res.body;
                    
                    //			日吸烟量(支)
           				 this.allData.smokeCount=res.body.smokeCount
			//			日饮酒量(两)
						this.allData.drinkCount=res.body.drinkCount
			//			临床确诊时间
						this.allData.confirmDate=res.body.confirmDate
			//			病程（天）
						this.allData.deaseAge=res.body.deaseAge
			//			身高(cm)
						this.allData.height=res.body.height
			//			体重(kg)
						this.allData.weight=res.body.weight
			//			收缩压(mmHg)
						this.allData.constriction=res.body.constriction
			//			舒张压(mmHg)
						this.allData.diastolic=res.body.diastolic
			//			血压正常原因	
						this.allData.afterMedicine=res.body.afterMedicine
			//			管辖机构
						this.allData.manaUnitId=res.body.manaUnitId
						
						
						
						
					
						
						
						
					//			吸烟频率
					this.smoke.forEach((item)=>{
                     	if(item.dicValue==res.body.smoke){
                     		 this.allData.smoke=item.itemName
                     		 console.log(1112)
                     	}
                     });
					//			    饮酒频率     
					this.drink.forEach((item)=>{
                     	if(item.dicValue==res.body.drink){
                     		 this.allData.drink=item.itemName
                     		 
                     	}
                     });
					//			饮酒种类
					this.drinkTypeCode.forEach((item)=>{
                     	if(item.dicValue==res.body.drinkTypeCode){
                     		 this.allData.drinkTypeCode=item.itemName
                     		 
                     	}
                     });
					//锻炼频率
					this.train.forEach((item)=>{
                     	if(item.dicValue==res.body.train){
                     		 this.allData.train=item.itemName
                     		 console.log(1111)
                     		 console.log( item)
                     		 console.log(1111)
                     		 
                     	}
                     });
					//检出途径
					this.recordSource.forEach((item)=>{
                     	if(item.dicValue==res.body.recordSource){
                     		 this.allData.recordSource=item.itemName
                     		 
                     	}
                     });
					//经常就诊地点
					this.clinicAddress.forEach((item)=>{
                     	if(item.dicValue==res.body.clinicAddress){
                     		 this.allData.clinicAddress=item.itemName
                     		 
                     	}
                     });
					//生活自理能力
					this.viability.forEach((item)=>{
                     	if(item.dicValue==res.body.viability){
                     		 this.allData.viability=item.itemName
                     		 
                     	}
                     });
					//危险因素
					this.riskiness.forEach((item)=>{
                     	if(item.dicValue==res.body.riskiness){
                     		 this.allData.riskiness=item.itemName
                     		 
                     	}
                     });
					//靶器官伤害	
					this.targetHurt.forEach((item)=>{
                     	if(item.dicValue==res.body.targetHurt){
                     		 this.allData.targetHurt=item.itemName
                     		 
                     	}
                     });
					//并发症
					
					this.complication.forEach((item)=>{
                     	if(item.dicValue==res.body.complication){
                     		 this.allData.complication=item.itemName
                     		 
                     	}
                     });
//                 		
                  	
                    
                     }
                })
				setTimeout(()=>{
					Indicator.close();
				},1500)
            },
             xie_getmoban() {
					Indicator.open('加载中...');
					console.log(111)
               	 let jkmoduleid = 6
               	 requestModuld(jkmoduleid).then(res => {
                     if (res.code == 200) {
					this.module=res.data.modules[0]
//			this.module=Object.assign(res.data.modules[0],res.data.modules[0])
//							console.log(res)
					
					
                    }
                })
                
            },
            //调取
            preservations(){
            	MessageBox({
					  title: '提示',
					  message: '确定执行此操作?',
					  showCancelButton: true
					});
				
				MessageBox.confirm('确定执行此操作?').then(action => {
	this.$refs.mould.saveData();
});
            	
            },
            return1(){
            	MessageBox({
					  title: '提示',
					  message: '确定执行此操作?',
					  showCancelButton: true
					});
					MessageBox.confirm('确定执行此操作?').then(action => {
					this.$router.push('/xie_gxyda')
				});
            },
            
           getDataFromChild(data){
//         	Indicator.open('加载中...');
           	
			
                    
                    this.xie_baocun()
                     
		},
		
		  xie_baocun() {
		  	Indicator.open('加载中...');
                let params = [this.allData1]
                commonAjax(params, 'pcn.archiveService', 'updateArchive').then(res => {
                     if (res.code == 200) {
                     Indicator.close();
                     this.$router.push('/xie_gxyda')
                     }
                })
                
            },
           
    },
    mounted() {
			this.xie_getdetailed()
			this.xie_getmoban()
			
			 
//			console.log(this.modules1)
////			console.log(this.xie_empi)
    },
    
}
</script>
<style scoped>
.header-grop{
	width: 100%;
	height: 100%;
}
.moban{
	padding-top: 1.2rem;

}
.header{
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
 .header span{
	flex: 1;
	display: flex;
	justify-content: center;
	margin-left: -0.3rem;
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
	margin-top: 0.4rem;
	margin-right: 0.4rem;
}
.preservation{
	margin-right: .3rem;
}
</style>