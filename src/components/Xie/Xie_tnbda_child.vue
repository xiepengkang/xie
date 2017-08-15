<template>
	<div class="header-grop">
		<div class="header">
			<!--<router-link to="/xie_jkda">-->
				<img @click='return1' class="jt" src="../../assets/img/xie_jt.png"/>
			<!--</router-link>-->
			<span>糖尿病档案</span>
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
//			糖尿病家族史
			familyHistroy:[{"itemName": "有", "dicValue": "1"},
{"itemName": "无", "dicValue": "2"},
{"itemName": "不知道", "dicValue": "3"}],
//病例种类
diabetesType:[{"itemName": "1型糖尿病", "dicValue": "1"},
{"itemName": "2型糖尿病", "dicValue": "2"},
{"itemName": "营养不良型", "dicValue": "3"},
{"itemName": "IGT", "dicValue": "5"},
{"itemName": "IFT", "dicValue": "6"},
{"itemName": "其他", "dicValue": "9"}],

//			家族史
history:'',
//确诊年月
diagnosisDate:'',
//病程年数
years:'',
//确诊单位
diagnosisUnit:'',
//建卡空腹血糖
fbs:'',
建卡餐后血糖:'',
pbs:'',
//血糖单位
unit:[{"temName": "mmol/L", "dicValue": "1"},
{itemName: "mg/dl", "dicValue": "2"}],
//身高(cm)
height:'',
//体重(kg)
weight:'',
//BMI
bmi:'',

//管辖机构
manaUnitId:'',
            
        }

    },
    computed: {
		...mapState(['xie_tnbda_phrId'])
    },
    methods: {
		xie_getdetailed() {
//				Indicator.open('加载中...');
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],this.xie_tnbda_phrId.phrId]
                commonAjax(params, 'pcn.archiveService', 'getDiabetesArchiveDetail').then(res => {
                     if (res.code == 200) {
                   		this.allData=res.body;
//                 	console.log(res.body)
//                 	 this.allData.history=res.body.history
//                 	  this.allData.diagnosisDate=res.body.diagnosisDate
//                 	   this.allData.years=res.body.years
//                 	    this.allData.diagnosisUnit=res.body.diagnosisUnit
//                 	     this.allData.fbs=res.body.fbs
//                 	       this.allData.height=res.body.height
//                 	        this.allData.weight=res.body.weight
//                 	         this.allData.bmi=res.body.bmi
//                 	          this.allData.manaUnitId=res.body.manaUnitId
//                 	          
//                 	    this.familyHistroy.forEach((item)=>{
//                   	if(item.dicValue==res.body.familyHistroy){
//                   		 this.allData.familyHistroy=item.itemName
//                   	}
//                   });
//                 	    
					console.log(res.body.diabetesType)
                  	this.diabetesType.forEach((item)=>{
                  	
                     	if(item.dicValue==res.body.diabetesType){
                     		 this.allData.diabetesType=item.itemName
                     		
                     	}
                     });
//                 
//                   this.unit.forEach((item)=>{
//                   	if(item.dicValue==res.body.unit){
//                   		 this.allData.unit=item.itemName
//                   		 console.log(1112)
//                   	}
//                   });
                    
                     }
                })
				setTimeout(()=>{
					Indicator.close();
				},1500)
            },
             xie_getmoban() {
					Indicator.open('加载中...');
               	 let jkmoduleid = 6
               	 requestModuld(jkmoduleid).then(res => {
                     if (res.code == 200) {
                     		this.module=res.data.modules[1]
//					this.module2=res.data.modules[2]
//					console.log(this.module2)
//			this.module=Object.assign(res.data.modules[1],res.data.modules[1])
//							console.log(res)
					console.log(this.module)
					
					
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
					this.$router.push('/xie_tnbda')
				});
            },
            
           getDataFromChild(data){
//         	Indicator.open('加载中...');
           	console.log(data)
			
                    
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