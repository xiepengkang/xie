<template>
<div class="mao_searchbox">
    <div class="mao_msearch">
	    <router-link to="/notifyResidents/selectResidents">
	        <div class="mao_back">
	            <img src="../../assets/img/mao_back.png" alt="">
	        </div>
	    </router-link>
        <div class="mao_kuang">
            <input type="text" placeholder="输入姓名检索居民" v-model="value">
            <button v-on:click="msuss">搜索</button>
        </div>
    </div>
    <div class="mao_tishi">
    	<a class="mint-cell residents" v-for="item in sousuolibiaoList">
			<div class="mint-cell-left"></div>
			<div class="mint-cell-wrapper">
				<div class="mint-cell-title">
					<label class="mint-checklist-label">
						<span class="mint-checkbox">
							<input v-model="checkSearchResidents" type="checkbox" class="mint-checkbox-input" :value="item.mpiId">
							<span class="mint-checkbox-core checkbox"></span>
						</span>
						<div class="resident_info">
							<span class="resident_name">{{item.personName}}<b>{{item.age}}岁</b></span>
							<span class="resident_address">{{item.districtText+item.streetText}}&nbsp;{{item.address}}</span>
						</div>
					</label>
				</div>
				<!--<div class="mint-cell-value resident_address" @click="toPriceDetail">
					<span class=""></span>
					<span>{{feeRecoud.totalFee}}</span>
				</div>-->
			</div>
			<div class="mint-cell-right"></div>
		</a>
            <!--<mt-cell v-for="item in sousuolibiaoList">
                <router-link :to="{name:'jmdetail',params:{'id':item.signId}}">
                    <span>{{item.personName}}</span>
                </router-link>
                    <img slot="icon" src="../../assets/img/mao_new.png" width="26" height="26">
            </mt-cell>-->
    </div>
    <div class="flexbox">
		<button class="btns" @click="confirmSend">确认</button>
	</div>
    
</div>
</template>

<script>
import { Cell,MessageBox } from 'mint-ui';
import { mapActions,mapState } from 'vuex'
import { commonAjax } from "../../api/api.js";
import "../../assets/js/ssj_dateutil.js";
import "../../assets/css/ssj_style.css";
    export default {
        data:function(){
            return{
                value:[],
                residentAge:"",
                sousuolibiaoList:[],
                yuliubaocun:[],
                m_quanbushuju:[],
                checkSearchResidents:[],
                checkPersonDefault:[],
                checkAllData: {
					value: false
				}
            }
        },
        components:{
            "mt-cell":Cell
        },
        computed: {
	        ...mapState({
	            ssj_messageTemplateInfo: state => state.ssj_messageTemplateInfo
	        })
	    },
        mounted:function(){
            let params=[""];
            commonAjax(`['${params}']`, 'pcn.myResidentDoctorService','querySignResidentRecord').then(res => {
                if (res.code == 200) {
                    for(var i=0;i<res.body.SignResident.length;i++){       
                        this.yuliubaocun.push(res.body.SignResident[i]);
                        // this.m_quanbushuju.push(res.body.SignResident[i]);
                        // console.log((res.body.SignResident[i].personName).split(""))
                        // var m_shuruz=(res.body.SignResident[i].personName).split("")
                        // for(var j=0;j<m_shuruz.length;j++){
                        //     if(this.value==m_shuruz[i]){
                        //         this.sousuolibiaoList.push(res.body.SignResident[i].personName)
                        //     }else{
                        //         console.log("对不起没有找到!")
                        //     }
                        // }
                        // console.log(this.yuliubaocun)
                        // console.log(this.m_quanbushuju);
                    }
                }
            });
            commonAjax([""], 'pcn.myResidentDoctorService', 'querySignResidentRecord').then(res => {
				if (res.code == 200) {
					for (var i = 0; i < res.body.SignResident.length; i++) {
						var thisObj = res.body.SignResident[i],
							thisNameFirst = PinYin.getFirstLetter(PinYin.toConvert(thisObj.personName)),
							firstUpper = thisNameFirst.toUpperCase(),
							personGropArr = (thisObj.personGroup && thisObj.personGroup.split(",")) || "";
						for (var j = 0; j < personGropArr.length; j++) {
							if (this.residentTypeNumList[personGropArr[j]]) {
								this.residentTypeNumList[personGropArr[j]] ++;
							} else {
								this.residentTypeNumList[personGropArr[j]] = 1;
							}
							this.residentTypeDataList.push(thisObj.mpiId + "-" + personGropArr[j]);
						}
						this.letters[firstUpper].mlist.push({label: thisObj.personName, value: thisObj.mpiId + "-" + thisObj.personGroup});
						this.checkPersonDefault.push(thisObj.mpiId);
						this.letters[firstUpper].exist = this.letters[firstUpper].mlist.length > 0;
					}
					Indicator.close();
				}
			});
        },
        methods:{
            msuss:function(){
            	this.sousuolibiaoList=[];
                for(var j=0;j<this.yuliubaocun.length;j++){
                   var m_shuruz=this.yuliubaocun[j].personName.split("");
                   for(var n=0;n<m_shuruz.length;n++){
                       if(this.value==m_shuruz[n]||this.value==this.yuliubaocun[j].personName){
                        this.sousuolibiaoList.push(this.yuliubaocun[j])
                        //var age= parseInt(this.yuliubaocun[j].nowDate.substring(0,5)) - parseInt(this.yuliubaocun[j].dob.substring(0,5));
                        //this.sousuolibiaoList["age"] = age;
                        break;
                       }              
                   }
                }
                for(var k=0;k<this.sousuolibiaoList.length;k++){
                	var age= parseInt(this.sousuolibiaoList[k].nowDate.substring(0,5)) - parseInt(this.sousuolibiaoList[k].dob.substring(0,5));
                	this.sousuolibiaoList[k]["age"] = age
                }
                
            },
            confirmSend() {
				MessageBox.confirm('确定执行此操作?').then(action => {
					//var str = this.checkSearchResidents;
					var personsId = this.checkSearchResidents;
					/*for(var i=0;i<str.length;i++){
						personsId.push(str[i].split('-')[0]);
					}*/
					if (this.checkSearchResidents.length == this.checkPersonDefault.length) {
 						this.checkAllData.value = true;
 					}else{
 						this.checkAllData.value = false;
 					}
  					let params = [{
	                	"all":this.checkAllData.value,
	                	"content":this.ssj_messageTemplateInfo.tplContent,
	                	"persons":personsId,
	                	"notifyType":this.ssj_messageTemplateInfo.notifyType
		            }]
		            commonAjax(params, 'pcn.pcnNotifyResidentsService', 'sendMesg').then(res => {
		                if (res.code === 200) {
		                	this.$router.push('/notifyResidents/chooseNotifyType');
		                    Toast('发送成功');
		                }
		            })
				});
				
			}
       }
       
    }
</script>

<style scoped>
    .mao_searchbox{width:100%;height:100%;background-color:#eee;position:absolute;top:0;left:0;bottom:0;right:0;}
    .mao_msearch{height:1rem;line-height:1rem;background-color:#fff;border-bottom:1px solid #ccc;padding:0 10px;}
    .mao_msearch .mao_back{height:1rem;width:.6rem;display:flex;align-items:center;float:left;}
    .mao_msearch .mao_back img{width:.5rem;height:.5rem;}
    .mao_msearch .mao_kuang{height:1rem;display:flex;align-items:center;}
    .mao_msearch .mao_kuang input{flex:1;height:.6rem;background-color:#f2f2f2;border-radius:5px;outline:none;margin-right:.1rem;border:0;text-indent:8px;}
    .mao_msearch .mao_kuang button{width:.8rem;height:.6rem;border:0;outline:none;color:#26a2ff;background-color:#fff;font-size:.33rem;}
    .mao_msearch .mint-cell{min-height:1.12rem;border-bottom:1px solid #eee;}
    
    .mao_tishi{border-bottom:1px solid #d9d9d9;margin-top:-1px;}
    .mint-cell{min-height:60px;}
    .checkbox{float:left;margin:8px 6px 0 0;}
    .resident_info{float:left;height:36px;}
    .resident_info span{display:block;}
    .resident_name{height:22px;margin-bottom:5px;font-size:0.3rem;}
    .resident_name b{font-weight:normal;font-size:0.26rem;color:#666;margin-left:10px;}
    .resident_address{height:18px;font-size:0.25rem;color:#999;}
    .mint-cell-title{height:40px;}
    .flexbox{
		height: 0.8rem;
		position: fixed;
		bottom: 0;
		left:0;
		width: 100%;
		display: flex;
		background: #fff;
		border-top:1px solid #ddd;
		margin-top:10px;
	}
	.btns{
		/*position:fixed;
		bottom:0;
		left:0;
		right:0;*/
		width:100%;
		height:100%;
		line-height:0.8rem;
		background-color:#fff;
		font-size:0.35rem;
		color:#23b2f6;
		border:none;
	}
    
    
    
</style>