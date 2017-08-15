<template>
<div class="app" style="overflow-x:hidden;background-color:#F2F2F2;height:100vh;">
    <div class="header">
        <mt-header title="测试">
            <router-link to="/notification_details" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>
    <div class="body">
    	<mt-checklist
			v-model="value"
			:options="[{label:'已阅读并同意《签约协议》',value:'选中'}]">
		</mt-checklist>
    	<mt-checklist title="复选框列表" v-model="value" :options="['选项A', '选项B', '选项C']">1222</mt-checklist>	  
    		
		
    </div>
</div>
</template>
<script>
import {
    MessageBox,
    Toast
} from 'mint-ui'
import { Cell } from 'mint-ui';
import { Checklist } from 'mint-ui';
import {
    mapActions,mapState
} from 'vuex'
import {
    commonAjax,
} from '../../api/api.js'

export default {
    data: function() {
        return {
            value:[],
            residentTypeLists:[]
        }
    },
    components: {
    	'mt-cell':Cell,
    	'mt-checklist':Checklist
    },
    methods: {
        getResidentTypeList(){
            	let params = [""]
	            commonAjax(params, 'pcn.myResidentDoctorService', 'managementType').then(res => {
	                if (res.code === 200) {
	                    if (res.body.length) {
	                    	
	                        //this.residentTypeList = res.body.list
	                        let residentLists = res.body;
	                        let residentTypeLists = [];
	                        let count = "";
	                        /*for(let i=0;i < residentLists.length;i++){
	                        	count=0;
	                        	for(let j=i+1;j < residentLists.length;j++){
	                        		if(residentLists[i].personGroup==residentLists[j].personGroup){
	                        			let residentTypeList = {"typeName":"","count":""};
	                        			residentTypeList.typeName = residentLists[i].personGroupText;
										residentTypeList.count = count++;
										residentTypeLists.push(residentTypeList);
										continue;
	                        		}
	                        	}
	                        	
	                        }*/
	                       
	                        var arr1 = res.body;
	                        var arr2 = [];
					        for (var i = 0;i<arr1.length;i++){
					            var flag = true;
					            for (var j = 0;j<arr2.length;j++){
					                if (arr2[j].personGroup == arr1[i].personGroup){
					                    arr2[j].count += 1;
					                    flag = false;
					                }
					            }
					            if(flag){
					                var obj = {};
					                obj.personGroup = arr1[i].personGroup;
					                obj.personGroupText = arr1[i].personGroupText;
					                obj.count = 1;
					                arr2.push(obj);
					            }
					        }
					
					        alert(JSON.stringify(arr2));
						        
	                        
	                        
	                        
	                    } else {
	                        this.residentTypeList = []
	                        Toast({
	                            message: '暂无结果',
	                            duration: 500
	                        })
	                    }
	                }
	            });
            },
    },
    created() {},
    mounted() {
    	this.getResidentTypeList();
    },
}
</script>

<style lang='stylus' scoped>
mainColor = #00CDFF
greyFont = #ADADAD
fontSize = .4rem
.header {
    .mint-header {
        height: 1rem;
        font-size: fontSize;
        background-color: #fff;
        color: mainColor;
        border-bottom: 1px solid #ddd;

    }
    .next_step{font-size:0.3rem;}
}


</style>




