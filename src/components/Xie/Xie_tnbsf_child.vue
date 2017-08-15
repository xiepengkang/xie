<template>
	<div class="header-grop">
		<div class="header">
				<img @click='return1' class="jt" src="../../assets/img/xie_jt.png"/>
			<span>{{this.xie_tnbsf_phrId.personName}}</span>
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
            
//          糖尿病随访
            //目前症状
            symptoms:[{ "itemName": "无症状", "dicValue": "1"},
					{ "itemName": "多饮", "dicValue": "2"},
					{ "itemName": "多食", "dicValue": "3"},
					{"itemName": "多尿", "dicValue": "4"},
					{"itemName": "视力模糊", "dicValue": "5"},
					{"itemName": "感染", "dicValue": "6"},
					{"itemName": "下肢浮肿", "dicValue": "7"},
					{"itemName": "手脚麻木", "dicValue": "8"},
					{"itemName": "体重明显下降", "dicValue": "9"},
					{"itemName": "其他症状", "dicValue": "99"}],
			//zubei
			//其他症状
			otherSymptoms:'',
			pulsation:[{"itemName": "未触及", "dicValue": "1"},
							{"itemName": "触及双侧对称", "dicValue": "2"},
							{"itemName": "触及左侧弱或消失", "dicValue": "3"},
							{"itemName": "触及右侧弱或消失", "dicValue": "4"}],
			
//          其他体征
        	otherSigns:[{"itemName": "合理", "dicValue": "1"},
						{"itemName": "不合理", "dicValue": "2"}],
//				主食(克/天)		
			food:'',
			diet:[{"itemName": "合理", "dicValue": "1"},
				{"itemName": "不合理", "dicValue": "2"}],
			//目标主食
			targetFood:'',
//			血糖单位"
			unit:[{"itemName": "mmol/L", "dicValue": "1"},
					{"itemName": "mg/dl", "dicValue": "2"}],
//			空腹血糖
			fbs:'',
//			心理调整
				psychologyChange:
				[{ "itemName": "良好", "dicValue": "1"},
				{"itemName": "一般", "dicValue": "2"},
				{"itemName": "差", "dicValue": "3"}],
//      	遵医行为
			obeyDoctor:[{"itemName": "良好", "dicValue": "1"},
				{ "itemName": "一般", "dicValue": "2"},
				{"itemName": "差", "dicValue": "3"}],
//				请输入TC
			tc:'',
//			HDL(mmol/L)
			hdl:'',
//			LDL(mmol/L)
			ldl:'',
//			糖化血红蛋白(%)
			hbA1c:'',
//			检查日期
			testDate:'',
//			服药依从性
			medicine:[{"itemName": "规律", "dicValue": "1"},
				{"itemName": "间断", "dicValue": "2"},
				{"itemName": "不服药", "dicValue": "3"},
				{"itemName": "拒绝服药", "dicValue": "4"}],
			
//			血脂
			bloodFat:'',
//			药物不良反应
			adverseReactions:[{"itemName": "有", "dicValue": "1"},
					{"itemName": "无", "dicValue": "2"}],
//			低血糖反应
			glycopenia:[{"itemName": "无", "dicValue": "1"},
				{"itemName": "偶尔", "dicValue": "2"},
				{"itemName": "频繁", "dicValue": "3"}],
//			随访分类
			visitType:[{"itemName": "控制满意", "dicValue": "1"},
				{"itemName": "控制不满意", "dicValue": "2"},
				{"itemName": "不良反应", "dicValue": "3"},
				{"itemName": "并发症", "dicValue": "4"}],
//			并发症变化
	
			complicationChange:[{"itemName": "有新并发症", "dicValue": "1"},
				 {"itemName": "原有并发症加重", "dicValue": "2"}],
        
        
 
        
        
        }

    },
    computed: {
		...mapState(['xie_tnbsf_phrId'])
    },
    methods: {
		xie_getdetailed() {
					Indicator.open('加载中...');
//					console.log(this.xie_tnbsf_phrId)
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))
                [0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],this.xie_tnbsf_phrId.empiId,2]
//				console.log(this.xie_tnbsf_phrId)
                commonAjax(params, 'pcn.visitService', 'getHistoryVisitByEmpiId').then(res => {
                     if (res.code == 200) {
//                   Indicator.close();
                     
                     
                      //把diabetesVisit解析出来
                     this.allData=res.body;
                     this.allData.fbs=res.body.diabetesVisit.fbs
                     console.log(this.allData.fbs)
                     this.allData.manaUnitId=res.body.manaUnitId
                     this.allData.food=res.body.diabetesVisit.food
                     this.allData.glycopenia=res.body.diabetesVisit.glycopenia
                     this.allData.obeyDoctor=res.body.diabetesVisit.obeyDoctor
                     this.allData.pbs=res.body.diabetesVisit.pbs
                     this.allData.psychologyChange=res.body.diabetesVisit.psychologyChange
                     this.allData.pulsation=res.body.diabetesVisit.pulsation
                     this.allData.targetFood=res.body.diabetesVisit.targetFood
                     this.allData.unit=res.body.diabetesVisit.unit
                     
                   
                     
                     
//                   常规
					            //常规
           			this.allData.visitDate=res.body.visitDate
//         	 随访方式
						
					this.visitWay.forEach((item)=>{
                     	if(item.dicValue==res.body.visitWay){
                     		 this.allData.visitWay=item.itemName
                     		 
                     	}
                     });
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
					














					//糖尿病随访
                     //目前症状
                     this.symptoms.forEach((item)=>{
                     	if(item.dicValue==res.body.symptoms){
                     		 this.allData.symptoms=item.itemName
                     	}
                     })
                     //zu
                     this.pulsation.forEach((item)=>{
                     	if(item.dicValue==res.body.pulsation){
                     		 this.allData.pulsation=item.itemName
                     		 
                     	}
                     });
                     
                     //          其他体征
        			this.otherSigns.forEach((item)=>{
                     	if(item.dicValue==res.body.otherSigns){
                     		 this.allData.otherSigns=item.itemName
                     		 
                     	}
                     });
                     
                     //饮食
                   
                     this.diet.forEach((item)=>{
                     	if(item.dicValue==res.body.diet){
                     		 this.allData.diet=item.itemName
                     		 
                     	}
                     });
                     
                     //			血糖单位"
					
						this.unit.forEach((item)=>{
                     	if(item.dicValue==res.body.unit){
                     		 this.allData.unit=item.itemName
                     		 
                     	}
                     });
                     
                     //			心理调整
					this.psychologyChange.forEach((item)=>{
                     	if(item.dicValue==res.body.psychologyChange){
                     		 this.allData.psychologyChange=item.itemName
                     		 
                     	}
                     });
                     
                     //      	遵医行为
					this.obeyDoctor.forEach((item)=>{
                     	if(item.dicValue==res.body.obeyDoctor){
                     		 this.allData.obeyDoctor=item.itemName
                     		 
                     	}
                     });
                     
                     //			服药依从性
						this.medicine.forEach((item)=>{
                     	if(item.dicValue==res.body.medicine){
                     		 this.allData.medicine=item.itemName
                     		 
                     	}
                     });
                     
                     //			药物不良反应
					this.adverseReactions.forEach((item)=>{
                     	if(item.dicValue==res.body.adverseReactions){
                     		 this.allData.adverseReactions=item.itemName
                     		 
                     	}
                     });
                     
                     //			低血糖反应
					this.glycopenia.forEach((item)=>{
                     	if(item.dicValue==res.body.glycopenia){
                     		 this.allData.glycopenia=item.itemName
                     	}
                     });
                     
                     //			随访分类
					this.visitType.forEach((item)=>{
                     	if(item.dicValue==res.body.visitType){
                     		 this.allData.visitType=item.itemName
                     		 
                     	}
                     });
                     //			并发症变化
	
					this.complicationChange.forEach((item)=>{
                     	if(item.dicValue==res.body.complicationChange){
                     		 this.allData.complicationChange=item.itemName
                     		 
                     	}
                     });
            	         
                     

                    setTimeout(()=>{
					Indicator.close();
				},1500)
                     
                     
                     
//                    console.log(this.allData)
                     
                     
                     
                     
                     
                     }
                })
                
            },
            xie_getmoban() {
					Indicator.open('加载中...');
               	 let jkmoduleid = 1
               	 requestModuld(jkmoduleid).then(res => {
                     if (res.code == 200) {
					this.module=res.data.modules[0]
					this.module2=res.data.modules[1]
//			this.module=Object.assign(res.data.modules[1],res.data.modules[0])
					
					
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
					this.$router.push('/xie_tnbsf')
				});
            },
            
           getDataFromChild(data){
//         	console.log(this.allData)
           		this.allData1=data;
           		console.log(data)
//         		this.allData1.diabetesVisit.fbs=data.fbs
//         		
//              this.allData1.diabetesVisit.food=data.food
//              this.allData1.diabetesVisit.glycopenia=data.glycopenia
//              this.allData1.diabetesVisit.obeyDoctor=data.obeyDoctor
//              this.allData1.diabetesVisit.pbs=data.pbs
//              this.allData1.diabetesVisit.psychologyChange=data.psychologyChange
//              this.allData1.diabetesVisit.pulsation=data.pulsation
//              this.allData1.diabetesVisit.targetFood=data.targetFood
//              this.allData1.diabetesVisit.unit=data.unit
//
//				
                this.allData1.targetWeight=data.targetWeight
           		
           		
           		this.allData1.diastolic=data.diastolic
           		this.allData1.weight=data.weight
           		this.allData1.smokeCount=data.smokeCount
           		this.allData1.referralReason=data.referralReason
           		this.allData1.trainMinute=data.trainMinute
           		this.allData1.targetTrainTimesWeek=data.targetTrainTimesWeek
           		this.allData1.trainTimesWeek=data.trainTimesWeek
           		this.allData1.targetTrainMinute=data.targetTrainMinute
           		this.allData1.visitDate=data.visitDate
           		this.allData1.drinkCount=data.drinkCount
           		this.allData1.phrId=this.xie_tnbsf_phrId.phrId
           		this.allData1.visitUnit =JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1]
           		this.allData1.empiId=this.xie_tnbsf_phrId.empiId
           		this.allData1.manageUnitId=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1]
           		this.allData1.uid=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0]
           		this.allData1.visitDoctor=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[3]
           		this.allData1.constriction=data.constriction
           		this.allData1.targetDrinkCount=data.targetDrinkCount

           		this.allData1.manaUnitId=data.manaUnitId
           		
           		
           		this.psychologyChange.forEach((item)=>{
                     	if(item.itemName==data.psychologyChange){
                     		 this.allData1.psychologyChange=item.dicValue
                     	}
                     });
                     
                this.visitEffect.forEach((item)=>{
                     	if(item.itemName==data.visitEffect){
                     		 this.allData1.visitEffect=item.dicValue
                     	}
                     });
                      this.loseWeight.forEach((item)=>{
                     	if(item.itemName==data.loseWeight){
                     		 this.allData1.loseWeight=item.dicValue
                     	}
                     });
           				this.drinkTypeCode.forEach((item)=>{
                     	if(item.itemName==data.drinkTypeCode){
                     		 this.allData1.drinkTypeCode=item.dicValue
                     	}
                     });
                     this.visitWay.forEach((item)=>{
                     	if(item.itemName==data.visitWay){
                     		 this.allData1.visitWay=item.dicValue
                     	}
                     });
                      this.obeyDoctor.forEach((item)=>{
                     	if(item.itemName==data.obeyDoctor){
                     		 this.allData1.obeyDoctor=item.dicValue
                     	}
                     });
                      this.visitWay.forEach((item)=>{
                     	if(item.itemName==data.visitWay){
                     		 this.allData1.visitWay=item.dicValue
                     	}
                     });   
                      this.xie_baocun()
                     

//                   
		},
		
		  xie_baocun() {
		  	
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