<template>
	<div class="header-grop">
		<div class="header">
				<img @click='return1' class="jt" src="../../assets/img/xie_jt.png"/>
			<span>{{this.xie_gxysf_phrId.personName}}</span>
			<div class="preservation"  @click="preservations">
			保存
			</div>
		</div>
		<div class="moban">
			<mould :module='module' :data='allData' ref='mould' @complete='getDataFromChild'></mould>
			<mould :module='module2' :data='allData' ref='mould' @complete='getDataFromChild'></mould>
		</div>
	</div>
	
</template>
<script>
	import { Actionsheet } from 'mint-ui';
		import { requestModuld } from '../../api/api';
	import { MessageBox } from 'mint-ui';
	import { commonAjax} from '../../api/api';
	import { requestJkmoduld } from '../../api/api';
	import {   Indicator }from 'mint-ui';
	import { mapState} from 'vuex'
	import validate from '../common/jia_PhoneValidate.vue'
	import mould from '../common/jia_shuju_mould.vue'
export default {
    components: {
		mould
    },
    data() {
        return {
//      	给模板的数据
        	allData:{},
        	allData1:{},
			list: '',
			data:{},
            ifshow : true,
            isshow:'',
            isshow1:true,
            modules1: '',
            sexcode1:'',
            sectop1:false,
            sex4:'',
            module:{},
            module2:{},
            
            //常规
           visitDate:'',
//         	 随访方式
			visitWay:[{"itemName": "门诊", "dicValue": "1"},
						{"itemName": "家庭", "dicValue": "2"},
						{"itemName": "电话", "dicValue": "3"},
						{"itemName": "短信", "dicValue": "4"},
						{"itemName": "网络", "dicValue": "5"},
						{"itemName": "其他", "dicValue": "9"}],
//			转归         
			visitEffect:[{"itemName": "继续随访", "dicValue": "1"},
						{"itemName": "暂时失访", "dicValue": "2"},
						{"itemName": "终止管理", "dicValue": "9"}],
						
//			失访原因
			noVisitReason:'',
//			收缩压(mmHg)
			constriction:'',
//			舒张压(mmHg)
			diastolic:'',
//			体重(kg)	
			weight:'',
//			目标体重(kg)
			targetWeight:'',
//			日吸烟量(支)
			smokeCount:'',
//			目标量(支)
			targetSmokeCount:'',
			
			
//			饮酒种类
			drinkTypeCode:
			[{"itemName": "白酒(≥42度)", "dicValue": "1"},
			{"itemName": "白酒(＜42度)", "dicValue": "2"},
			{"itemName": "啤酒", "dicValue": "3"},
			{"itemName": "黄酒、米酒", "dicValue": "4"},
			{"itemName": "红酒", "dicValue": "5"},
			{"itemName": "其它", "dicValue": "9"},
			{"itemName": "不饮酒", "dicValue": "10"}],
            
            
//          日饮酒量(两)
			drinkCount:'',
			
//			目标量(两)
			targetDrinkCount:'',
			
//			周运动次数
			trainTimesWeek:'',
			
//			目标次数
			targetTrainTimesWeek:'',
			
//			每次时长(分)
			trainMinute:'',
//			目标时长(分)
			targetTrainMinute:'',
			
//			是否减轻体重
			loseWeight:[{"itemName": "不需要", "dicValue": "1"},
					{"itemName": "需要", "dicValue": "2"}],
			
//			心理调整

			psychologyChange:[{"itemName": "良好", "dicValue": "1"},
				{"itemName": "一般", "dicValue": "2"},
				{"itemName": "差", "dicValue": "3"}],
				
//			遵医行为
			obeyDoctor:[{"itemName": "良好", "dicValue": "1"},
					{"itemName": "一般", "dicValue": "2"},
					{"itemName": "差", "dicValue": "3"}],
			
//			机构及科别
			agencyAndDept:'',
			
//			转诊原因
			referralReason:'',
			
//			管辖机构

			manaUnitId:'',
//			下次预约时间,
			nextDate:'',
            
            
            //高血压随访
           

//          其他症状
			otherSymptoms:'',
//			心率
			heartRate:'',
//			目标心率
			targetHeartRate:'',
//			其它体征
			otherSigns:'',
//			腰围(cm)
			waistLine:'',

//			不服药其他原因	
			otherReason:'',
//			不良反应
			medicineBadEffectText:'',
//			辅助检查
			auxiliaryCheck:'',
			//			危险因素
				
			riskiness:	[{"itemName": "无", "dicValue": "0"},
				{"itemName": "男性＞55 岁或女性＞65 岁", "dicValue": "1"},
				{"itemName": "吸烟", "dicValue": "2"},
				{"itemName": "血脂异常", "dicValue": "3"},
				{"itemName": "早发心血管病家族史", "dicValue": "4"},
				{"itemName": "腹型肥胖或肥胖", "dicValue": "5"},
				{"itemName": "糖耐量受损和/或空腹血糖异常", "dicValue": "6"}],
//			靶器官损害
			targetHurt:[{"itemName": "无", "dicValue": "0"},
			{"itemName": "左心室肥厚", "dicValue": "1"},
			{"itemName": "颈动脉超声IMT＞0.9mm或动脉粥样斑块", "dicValue": "2"},
			{"itemName": "颈-股动脉搏波速度 ＞12m/s", "dicValue": "3"},
			{"itemName": "踝/臂血压指数 ＜ 0.9", "dicValue": "4"},
			{"itemName": "估算的肾小球滤过率降低或血清肌酐轻度升高", "dicValue": "5"},
			{"itemName": "微量白蛋尿或白蛋白/肌酐比异常", "dicValue": "6"}],
//			并发症
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
				
				
				
//      	原并发症加重
			complicationIncrease:[{"itemName": "是", "dicValue": "y"},
					{"itemName": "否", "dicValue": "n"}],
			
			//			心血管事件
			cardiovascularEvent:[{"itemName": "有", "dicValue": "y"},
				{"itemName": "无", "dicValue": "n"}],
			
			
			
//			危险分层
			riskLevel:[{"itemName": "低危", "dicValue": "1"},
					{"itemName": "中危", "dicValue": "2"},
					{"itemName": "高危", "dicValue": "3"},
					{"itemName": "很高危", "dicValue": "4"}],
//			随访分类
			visitEvaluate:[{"itemName": "控制满意", "dicValue": "1"},
			{"itemName": "控制不满意", "dicValue": "2"},
			{"itemName": "不良反应", "dicValue": "3"},
			{"itemName": "并发症", "dicValue": "4"}],
//			治疗效果
			treatEffect:[{"itemName": "血压正常", "dicValue": "1"},
				{"itemName": "血压偏高", "dicValue": "2"}],
				
//			非药物疗法
			nonMedicineWay:[{"itemName": "无", "dicValue": "9"},
						{"itemName": "限盐", "dicValue": "1"},
						{"itemName": "减少吸烟量或者戒烟", "dicValue": "2"},
						{"itemName": "减少饮酒量或戒酒", "dicValue": "3"},
						{"itemName": "减少膳食脂肪", "dicValue": "4"},
						{"itemName": "减轻体重", "dicValue": "5"},
						{"itemName": "有规律体育运动", "dicValue": "6"},
						{"itemName": "放松情绪", "dicValue": "7"},
						{"itemName": "其他措施", "dicValue": "8"}],
//			患者接受程度
			acceptDegree:[{"itemName": "完全接受", "dicValue": "1"},
				{"itemName": "勉强接受", "dicValue": "2"},
				{"itemName": "不接受", "dicValue": "3"}],
				
        	//			目标摄盐情况
			targetSalt:[{"itemName": "轻", "dicValue": "1"},
				{"itemName": "中", "dicValue": "2"},
				{"itemName": "重", "dicValue": "3"}],
//			服药依从性
			medicine:[{"itemName": "规律", "dicValue": "1"},
				{"itemName": "间断", "dicValue": "2"},
				{"itemName": "不服药", "dicValue": "3"},
				{"itemName": "拒绝服药", "dicValue": "4"}],
//			不规律原因
			incorrectMedicine:[{"itemName": "经济原因", "dicValue": "1"},
				{"itemName": "忘记", "dicValue": "2"},
				{"itemName": "不良发应", "dicValue": "3"},
				{"itemName": "配药不方便", "dicValue": "4"}],
//			不服药原因
			noMedicine:[{"itemName": "经济原因", "dicValue": "1"},
					{"itemName": "忘记", "dicValue": "2"},
					{"itemName": "不良发应", "dicValue": "3"},
					{"itemName": "配药不方便", "dicValue": "4"},
					{"itemName": "不需要药物治疗", "dicValue": "5"},
					{"itemName": "其它", "dicValue": "6"}],
					
			//			药物不良反应
			medicineBadEffect:[{"itemName": "有", "dicValue": "y"},
								{"itemName": "无", "dicValue": "n"}],
				
			currentSymptoms:[{"itemName":"无症状", "dicValue": "9"},
					{"itemName":"头痛头晕", "dicValue": "1"},
					{"itemName":"恶心呕吐", "dicValue": "2"},
					{"itemName":"眼花耳鸣", "dicValue": "3"},
					{"itemName":"呼吸困难", "dicValue": "4"},
					{"itemName":"心悸胸闷", "dicValue": "5"},
					{"itemName":"鼻衄出血不止", "dicValue": "6"},
					{"itemName":"四肢发麻", "dicValue": "7"},
					{"itemName":"下肢水肿", "dicValue": "8"},
					{"itemName":"其他", "dicValue": "10"}],
			//			摄盐情况
			salt:[{"itemName": "轻", "dicValue": "1"},
				{"itemName": "中", "dicValue": "2"},
				{"itemName": "重", "dicValue": "3"}],
 
        
        
        }

    },
    computed: {
		...mapState(['xie_gxysf_phrId'])
    },
    methods: {
		xie_getdetailed() {
					Indicator.open('加载中...');
					console.log(this.xie_gxysf_phrId)
				
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))   
                [0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],this.xie_gxysf_phrId.empiId,1]
//				console.log(this.xie_tnbsf_phrId)
                commonAjax(params,'pcn.visitService', 'getHistoryVisitByEmpiId').then(res => {
                     if (res.code == 200) {

                     
                     //转换拿到的数据
                     this.allData=res.body;
                     this.allData.auxiliaryCheck=res.body.hypertensionVisit.auxiliaryCheck
                     this.allData.complication=res.body.hypertensionVisit.complication
                     this.allData.currentSymptoms=res.body.hypertensionVisit.currentSymptoms
                     this.allData.heartRate=res.body.hypertensionVisit.heartRate
                     this.allData.hypertensionMedicines=res.body.hypertensionVisit.hypertensionMedicines
                     this.allData.medicine=res.body.hypertensionVisit.medicine
                     this.allData.otherSigns=res.body.hypertensionVisit.otherSigns
                     this.allData.salt=res.body.hypertensionVisit.salt
                     this.allData.targetHeartRate=res.body.hypertensionVisit.targetHeartRate
                     this.allData.targetSalt=res.body.hypertensionVisit.targetSalt
                   	 this.allData.waistLine=res.body.hypertensionVisit.waistLine
                     
                     
					 //                   常规
					            //常规
           			this.allData.visitDate=res.body.visitDate
//         	 随访方式
						
					this.visitWay.forEach((item)=>{
                     	if(item.dicValue==res.body.visitWay){
                     		 this.allData.visitWay=item.itemName
                     		 
                     	}
                     });
                     console.log(111)
                     console.log(res.body.visitEffect)
//			转归         
//			console.log(this.visitEffect[0].itemName)
			this.visitEffect.forEach((item)=>{
                     	if(item.dicValue==res.body.visitEffect){
                     		 this.allData.visitEffect=item.itemName
                     		 
                     	}
                     });
				//			失访原因
							this.allData.noVisitReason=res.body.noVisitReason
				//			收缩压(mmHg)
							this.allData.constriction=res.body.constriction
				//			舒张压(mmHg)
							this.allData.diastolic=res.body.diastolic
				//			体重(kg)	
							this.allData.weight=res.body.weight
				//			目标体重(kg)
							this.allData.targetWeight=res.body.targetWeight
				//			日吸烟量(支)
							this.allData.smokeCount=res.body.smokeCount
				//			目标量(支)
							this.allData.targetSmokeCount=res.body.targetSmokeCount
			
			
//			饮酒种类
            this.drinkTypeCode.forEach((item)=>{
                     	if(item.dicValue==res.body.drinkTypeCode){
                     		 this.allData.drinkTypeCode=item.itemName
                     		 
                     	}
                     });
            
//          日饮酒量(两)
				this.allData.drinkCount=res.body.drinkCount
//			目标量(两)
			this.allData.targetDrinkCount=res.body.targetDrinkCount
//			周运动次数
			this.allData.trainTimesWeek=res.body.trainTimesWeek
//			目标次数
				this.allData.targetTrainTimesWeek=res.body.targetTrainTimesWeek
//			每次时长(分)
			this.allData.trainMinute=res.body.trainMinute
//			目标时长(分)
			this.allData.targetTrainMinute=res.body.targetTrainMinute
//			是否减轻体重
			
			this.loseWeight.forEach((item)=>{
                     	if(item.dicValue==res.body.loseWeight){
                     		 this.allData.loseWeight=item.itemName
                     		 
                     	}
                     });
//			心理调整

				
			this.psychologyChange.forEach((item)=>{
                     	if(item.dicValue==res.body.psychologyChange){
                     		 this.allData.psychologyChange=item.itemName
                     		 
                     	}
                     });
				
//			遵医行为     xx
					
			this.obeyDoctor.forEach((item)=>{
                     	if(item.dicValue==res.body.obeyDoctor){
                     		 this.allData.obeyDoctor=item.itemName
                     		 
                     	}
                    });
//			机构及科别
			this.allData.agencyAndDept=res.body.agencyAndDept
//			转诊原因
			this.allData.referralReason=res.body.referralReason
//			管辖机构

			this.allData.manaUnitId=res.body.manaUnitId
//			下次预约时间,
			this.allData.nextDate=res.body.nextDate
			
			
			
			//          其他症状
			this.allData.otherSymptoms=res.body.otherSymptoms
//			心率
			this.allData.heartRate=res.body.heartRate
//			目标心率
			this.allData.targetHeartRate=res.body.targetHeartRate
//			其它体征
			this.allData.otherSigns=res.body.otherSigns
//			腰围(cm)
			this.allData.waistLine=res.body.waistLine

//			不服药其他原因	
			this.allData.otherReason=res.body.otherReason
//			不良反应
			this.allData.medicineBadEffectText=res.body.medicineBadEffectText
//			辅助检查
			this.allData.auxiliaryCheck=res.body.auxiliaryCheck
					
			//			危险因素
				
				
			this.riskiness.forEach((item)=>{
                     	if(item.dicValue==res.body.riskiness){
                     		 this.allData.riskiness=item.itemName
                     		 
                     	}
                     });
//			靶器官损害
			
//			this.targetHurt.forEach((item)=>{
//                   	if(item.dicValue==res.body.targetHurt){
//                   		 this.allData.targetHurt=item.itemName
//                   		 
//                   	}
//                   });
//			并发症
                     
                     
                let arrcom = []
				res.body.complication.split(',').forEach((item2)=>{
					this.complication.forEach((item)=>{
						
						console.log(item2)
                     	if(item.dicValue==item2){
                     		 
                     		 arrcom.push(item.itemName)
                     		 this.allData =arrcom.join(',')
                     		 console.log(this.allData)
                     		}
                    	 })
                    })
				
//      	原并发症加重
			this.complicationIncrease.forEach((item)=>{
                     	if(item.dicValue==res.body.complicationIncrease){
                     		 this.allData.complicationIncrease=item.itemName
                     		 
                     	}
                     });
			
			//			心血管事件
			this.cardiovascularEvent.forEach((item)=>{
                     	if(item.dicValue==res.body.cardiovascularEvent){
                     		 this.allData.cardiovascularEvent=item.itemName
                     		 
                     	}
                     });
			
			
//			危险分层
			this.riskLevel.forEach((item)=>{
                     	if(item.dicValue==res.body.riskLevel){
                     		 this.allData.riskLevel=item.itemName
                     		 
                     	}
                     });
//			随访分类
			this.visitEvaluate.forEach((item)=>{
                     	if(item.dicValue==res.body.visitEvaluate){
                     		 this.allData.visitEvaluate=item.itemName
                     		 
                     	}
                     });
//			治疗效果
			this.treatEffect.forEach((item)=>{
                     	if(item.dicValue==res.body.treatEffect){
                     		 this.allData.treatEffect=item.itemName
                     		 
                     	}
                     });
				
//			非药物疗法
			this.nonMedicineWay.forEach((item)=>{
                     	if(item.dicValue==res.body.nonMedicineWay){
                     		 this.allData.nonMedicineWay=item.itemName
                     		 
                     	}
                     });
//			患者接受程度
			this.acceptDegree.forEach((item)=>{
                     	if(item.dicValue==res.body.acceptDegree){
                     		 this.allData.acceptDegree=item.itemName
                     		 
                     	}
                     });
				
        	//			目标摄盐情况
				
			this.targetSalt.forEach((item)=>{
                     	if(item.dicValue==res.body.targetSalt){
                     		 this.allData.targetSalt=item.itemName
                     		 
                     	}
                     });
//			服药依从性
			this.medicine.forEach((item)=>{
                     	if(item.dicValue==res.body.medicine){
                     		 this.allData.medicine=item.itemName
                     		 
                     	}
                     });
//			不规律原因
				
			this.incorrectMedicine.forEach((item)=>{
                     	if(item.dicValue==res.body.incorrectMedicine){
                     		 this.allData.incorrectMedicine=item.itemName
                     		 
                     	}
                     });
//			不服药原因
			this.noMedicine.forEach((item)=>{
                     	if(item.dicValue==res.body.noMedicine){
                     		 this.allData.noMedicine=item.itemName
                     		 
                     	}
                     });
					
			//			药物不良反应
			this.medicineBadEffect.forEach((item)=>{
                     	if(item.dicValue==res.body.medicineBadEffect){
                     		 this.allData.medicineBadEffect=item.itemName
                     		 
                     	}
                     });
				
			this.currentSymptoms.forEach((item)=>{
                     	if(item.dicValue==res.body.currentSymptoms){
                     		 this.allData.currentSymptoms=item.itemName
                     		 
                     	}
                     });
			//			摄盐情况
			this.salt.forEach((item)=>{
                     	if(item.dicValue==res.body.salt){
                     		 this.allData.salt=item.itemName
                     		 
                     	}
                     });

					setTimeout(()=>{
					Indicator.close();
				},1500)

                     }
                })
                
            },
            xie_getmoban() {
					Indicator.open('加载中...');
               	 let jkmoduleid = 1
               	 requestModuld(jkmoduleid).then(res => {
                     if (res.code == 200) {
					this.module=res.data.modules[0]
					this.module2=res.data.modules[2]
//			this.module=Object.assign(res.data.modules[2],res.data.modules[2])
					
					
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
					this.$router.push('/xie_gxysf')
				});
            },
            
           getDataFromChild(data){
			this.allData1=data;
			console.log(this.allData1)
			
			 //转换拿到的数据
//                   this.allData=res.body;
//                   this.allData.auxiliaryCheck=res.body.hypertensionVisit.auxiliaryCheck
//                   this.allData.complication=res.body.hypertensionVisit.complication
//                   this.allData.currentSymptoms=res.body.hypertensionVisit.currentSymptoms
//                   this.allData.heartRate=res.body.hypertensionVisit.heartRate
//                   this.allData.hypertensionMedicines=res.body.hypertensionVisit.hypertensionMedicines
//                   this.allData.medicine=res.body.hypertensionVisit.medicine
//                   this.allData.otherSigns=res.body.hypertensionVisit.otherSigns
//                   this.allData.salt=res.body.hypertensionVisit.salt
//                   this.allData.targetHeartRate=res.body.hypertensionVisit.targetHeartRate
//                   this.allData.targetSalt=res.body.hypertensionVisit.targetSalt
//                 	 this.allData.waistLine=res.body.hypertensionVisit.waistLine
		
		 		this.allData1.visitDate=data.visitDate
			
			//			失访原因
			this.allData1.noVisitReason=data.noVisitReason
//			收缩压(mmHg)
			this.allData1.constriction=data.constriction
//			舒张压(mmHg)
			this.allData1.diastolic=data.diastolic
//			体重(kg)	
			this.allData1.weight=data.weight
//			目标体重(kg)
			this.allData1.targetWeight=data.targetWeight
//			日吸烟量(支)
			this.allData1.smokeCount=data.smokeCount
//			目标量(支)
			this.allData1.targetSmokeCount=data.targetSmokeCount
			//          日饮酒量(两)
			this.allData1.drinkCount=data.drinkCount
			
//			目标量(两)
			this.allData1.targetDrinkCount=data.targetDrinkCount
			
//			周运动次数
			this.allData1.trainTimesWeek=data.trainTimesWeek
			
//			目标次数
			this.allData1.targetTrainTimesWeek=data.targetTrainTimesWeek
			
//			每次时长(分)
			this.allData1.trainMinute=data.trainMinute
//			目标时长(分)
			this.allData1.targetTrainMinute=data.targetTrainMinute
			//			机构及科别
			this.allData1.agencyAndDept=data.agencyAndDept
			
//			转诊原因
			this.allData1.referralReason=data.referralReason
			
//			管辖机构

			this.allData1.manaUnitId=data.manaUnitId
//			下次预约时间,
			this.allData1.nextDate=data.nextDate
			//          其他症状
			this.allData1.otherSymptoms=data.otherSymptoms

//			不服药其他原因	
			this.allData1.otherReason=data.otherReason
//			不良反应
			this.allData1.medicineBadEffectText=data.medicineBadEffectText
//         	 随访方式
			this.visitWay.forEach((item)=>{
                     	if(item.itemName==data.visitWay){
                     		 this.allData1.visitWay=item.dicValue
                     	}
                     });
//			转归         
			this.visitEffect.forEach((item)=>{
                     	if(item.itemName==data.visitEffect){
                     		 this.allData1.visitEffect=item.dicValue
                     	}
                     });		
			
			
//			饮酒种类
            this.drinkTypeCode.forEach((item)=>{
                     	if(item.itemName==data.drinkTypeCode){
                     		 this.allData1.drinkTypeCode=item.dicValue
                     	}
                     });
            

			
//			是否减轻体重
			
			this.loseWeight.forEach((item)=>{
                     	if(item.itemName==data.loseWeight){
                     		 this.allData1.loseWeight=item.dicValue
                     	}
                    });
//			遵医行为
			this.obeyDoctor.forEach((item)=>{
                     	if(item.itemName==data.obeyDoctor){
                     		 this.allData1.obeyDoctor=item.dicValue
                     	}
                     });

            
            
            //高血压随访
           

			//			危险因素
				
			this.riskiness.forEach((item)=>{
                     	if(item.itemName==data.riskiness){
                     		 this.allData1.riskiness=item.dicValue
                     	}
                     });	
//			靶器官损害
			this.targetHurt.forEach((item)=>{
                     	if(item.itemName==data.targetHurt){
                     		 this.allData1.targetHurt=item.dicValue
                     	}
                     });
				
				
//      	原并发症加重
			this.complicationIncrease.forEach((item)=>{
                     	if(item.itemName==data.complicationIncrease){
                     		 this.allData1.complicationIncrease=item.dicValue
                     	}
                     });
			//			心血管事件
			this.cardiovascularEvent.forEach((item)=>{
                     	if(item.itemName==data.cardiovascularEvent){
                     		 this.allData1.cardiovascularEvent=item.dicValue
                     	}
                     });
			
			
//			危险分层
			this.riskLevel.forEach((item)=>{
                     	if(item.itemName==data.riskLevel){
                     		 this.allData1.riskLevel=item.dicValue
                     	}
                     });
//			随访分类
			this.visitEvaluate.forEach((item)=>{
                     	if(item.itemName==data.visitEvaluate){
                     		 this.allData1.visitEvaluate=item.dicValue
                     	}
                     });
//			治疗效果
			this.treatEffect.forEach((item)=>{
                     	if(item.itemName==data.treatEffect){
                     		 this.allData1.treatEffect=item.dicValue
                     	}
                     });
				
//			非药物疗法
			this.nonMedicineWay.forEach((item)=>{
                     	if(item.itemName==data.nonMedicineWay){
                     		 this.allData1.nonMedicineWay=item.dicValue
                     	}
                     });
//			患者接受程度
			this.acceptDegree.forEach((item)=>{
                     	if(item.itemName==data.acceptDegree){
                     		 this.allData1.acceptDegree=item.dicValue
                     	}
                     });
				
//			不规律原因

			this.incorrectMedicine.forEach((item)=>{
                     	if(item.itemName==data.incorrectMedicine){
                     		 this.allData1.incorrectMedicine=item.dicValue
                     	}
                     });
//			不服药原因
			this.noMedicine.forEach((item)=>{
                     	if(item.itemName==data.noMedicine){
                     		 this.allData1.noMedicine=item.dicValue
                     	}
                     });
					
			//			药物不良反应
				
			this.medicineBadEffect.forEach((item)=>{
                     	if(item.itemName==data.medicineBadEffect){
                     		 this.allData1.medicineBadEffect=item.dicValue
                     	}
                     });	
				
				this.allData1.phrId=this.xie_gxysf_phrId.phrId
           		this.allData1.visitUnit =JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1]
           		this.allData1.empiId=this.xie_gxysf_phrId.empiId
           		this.allData1.manageUnitId=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1]
           		this.allData1.uid=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0]
           		this.allData1.visitDoctor=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[4]
				
				
//				需要转换的
//				[{"hypertensionVisit":{"medicine":"1","gxyRecordId":"52572010","waistLine":"65.0","salt":"2","medicineBadEffect":"n","targetSalt":"3","complication":"1,4,32","targetHeartRate":"85","currentSymptoms":"2","gxyPlanDate":"2017-07-20 00:00:00","targetHurt":"0","heartRate":"80","riskiness":"0","otherSigns":"手足冰冷","auxiliaryCheck":"量血压"},"visitDoctor":"黄致远",}]
				
				
				
				
				console.log(this.allData1)
				
                      this.xie_baocun()
                     
               
		},
		
		  xie_baocun() {
		  	console.log(11)
		  	Indicator.open('加载中...');
                let params = [this.allData1]
                commonAjax(params, 'pcn.visitService', 'addVisit').then(res => {
                     if (res.code == 200) {
                     Indicator.close();
                     console.log(1111111111111)
                     this.$router.push('/xie_tnbsf')
                     }
                })
                
            },
           
    },
    mounted() {
			this.xie_getdetailed()
			this.xie_getmoban()
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