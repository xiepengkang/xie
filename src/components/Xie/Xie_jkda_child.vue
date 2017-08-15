<template>
	<div class="header-grop">
		<div class="header">
			<!--<router-link to="/xie_jkda">-->
				<img @click='return1' class="jt" src="../../assets/img/xie_jt.png"/>
			<!--</router-link>-->
			<span>健康档案</span>
			<div class="preservation" @click="preservations">
			保存
			</div>
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
export default {
    components: {
		mould:mould
    },
//      computed: mapState({
//  	Xiesfzh
//  }),
    data() {
        return {
//      	给模板的数据
        	allData:{},
        	allData1:{},
			list: '',
			data:{},
			//性别
            sexCode: [
                            {
                                "itemName": "未知的性别",
                                "dicValue": "0"
                            },
                            {
                                "itemName": "男性",
                                "dicValue": "1"
                            },
                            {
                                "itemName": "女性",
                                "dicValue": "2"
                            },
                            {
                                "itemName": "未说明的性别",
                                "dicValue": "9"
                            }
                        ],
            personName:'',
            idCard:'',
            birthday:'',
            workPlace:'',
            mobileNumber:'',
            phoneNumber:'',
            contact:'',
            contactPhone:'',
            //常驻类型
            registeredPermanent: [
                            {
                                "itemName": "户籍",
                                "dicValue": "1"
                            },
                            {
                                "itemName": "非户籍",
                                "dicValue": "2"
                            }
                        ],
             regvalue:'',
             regshow:'',
             //民族
            nationCode: [
                            {
                                "itemName": "汉族",
                                "dicValue": "01"
                            },
                            {
                                "itemName": "蒙古族",
                                "dicValue": "02"
                            },
                            {
                                "itemName": "回族",
                                "dicValue": "03"
                            },
                            {
                                "itemName": "藏族",
                                "dicValue": "04"
                            },
                            {
                                "itemName": "维吾尔族",
                                "dicValue": "05"
                            },
                            {
                                "itemName": "苗族",
                                "dicValue": "06"
                            },
                            {
                                "itemName": "彝族",
                                "dicValue": "07"
                            },
                            {
                                "itemName": "壮族",
                                "dicValue": "08"
                            },
                            {
                                "itemName": "布依族",
                                "dicValue": "09"
                            },
                            {
                                "itemName": "朝鲜族",
                                "dicValue": "10"
                            },
                            {
                                "itemName": "满族",
                                "dicValue": "11"
                            },
                            {
                                "itemName": "侗族",
                                "dicValue": "12"
                            },
                            {
                                "itemName": "瑶族",
                                "dicValue": "13"
                            },
                            {
                                "itemName": "白族",
                                "dicValue": "14"
                            },
                            {
                                "itemName": "土家族",
                                "dicValue": "15"
                            },
                            {
                                "itemName": "哈尼族",
                                "dicValue": "16"
                            },
                            {
                                "itemName": "哈萨克族",
                                "dicValue": "17"
                            },
                            {
                                "itemName": "傣族",
                                "dicValue": "18"
                            },
                            {
                                "itemName": "黎族",
                                "dicValue": "19"
                            },
                            {
                                "itemName": "傈僳族",
                                "dicValue": "20"
                            },
                            {
                                "itemName": "佤族",
                                "dicValue": "21"
                            },
                            {
                                "itemName": "畲族",
                                "dicValue": "22"
                            },
                            {
                                "itemName": "高山族",
                                "dicValue": "23"
                            },
                            {
                                "itemName": "拉祜族",
                                "dicValue": "24"
                            },
                            {
                                "itemName": "水族",
                                "dicValue": "25"
                            },
                            {
                                "itemName": "东乡族",
                                "dicValue": "26"
                            },
                            {
                                "itemName": "纳西族",
                                "dicValue": "27"
                            },
                            {
                                "itemName": "景颇族",
                                "dicValue": "28"
                            },
                            {
                                "itemName": "柯尔克孜族",
                                "dicValue": "29"
                            },
                            {
                                "itemName": "土族",
                                "dicValue": "30"
                            },
                            {
                                "itemName": "达斡尔族",
                                "dicValue": "31"
                            },
                            {
                                "itemName": "仫佬族",
                                "dicValue": "32"
                            },
                            {
                                "itemName": "羌族",
                                "dicValue": "33"
                            },
                            {
                                "itemName": "布朗族",
                                "dicValue": "34"
                            },
                            {
                                "itemName": "撤拉族",
                                "dicValue": "35"
                            },
                            {
                                "itemName": "毛南族",
                                "dicValue": "36"
                            },
                            {
                                "itemName": "讫佬族",
                                "dicValue": "37"
                            },
                            {
                                "itemName": "锡伯族",
                                "dicValue": "38"
                            },
                            {
                                "itemName": "阿昌族",
                                "dicValue": "39"
                            },
                            {
                                "itemName": "普米族",
                                "dicValue": "40"
                            },
                            {
                                "itemName": "塔吉克族",
                                "dicValue": "41"
                            },
                            {
                                "itemName": "怒族",
                                "dicValue": "42"
                            },
                            {
                                "itemName": "乌孜别克族",
                                "dicValue": "43"
                            },
                            {
                                "itemName": "俄罗斯族",
                                "dicValue": "44"
                            },
                            {
                                "itemName": "鄂温克族",
                                "dicValue": "45"
                            },
                            {
                                "itemName": "德昂族",
                                "dicValue": "46"
                            },
                            {
                                "itemName": "保安族",
                                "dicValue": "47"
                            },
                            {
                                "itemName": "裕固族",
                                "dicValue": "48"
                            },
                            {
                                "itemName": "京族",
                                "dicValue": "49"
                            },
                            {
                                "itemName": "塔塔尔族",
                                "dicValue": "50"
                            },
                            {
                                "itemName": "独龙族",
                                "dicValue": "51"
                            },
                            {
                                "itemName": "鄂伦春族",
                                "dicValue": "52"
                            },
                            {
                                "itemName": "赫哲族",
                                "dicValue": "52"
                            },
                            {
                                "itemName": "门巴族",
                                "dicValue": "54"
                            },
                            {
                                "itemName": "珞巴族",
                                "dicValue": "55"
                            },
                            {
                                "itemName": "基诺族",
                                "dicValue": "56"
                            }
                        ],
            //血型
            bloodTypeCode: [ {
                                "itemName": "A型",
                                "dicValue": "1"
                            },
                            {
                                "itemName": "B型",
                                "dicValue": "2"
                            },
                            {
                                "itemName": "O型",
                                "dicValue": "3"
                            },
                            {
                                "itemName": "AB型",
                                "dicValue": "4"
                            },
                            {
                                "itemName": "不详",
                                "dicValue": "5"
                            }
                            ],
           //RH血型
           rhBloodCode:[
                            {
                                "itemName": "RH阳性",
                                "dicValue": "1"
                            },
                            {
                                "itemName": "RH阴性",
                                "dicValue": "2"
                            },
                            {
                                "itemName": "不详",
                                "dicValue": "3"
                            }
                        ],
            //文化程度
            educationCode:[{
                                "itemName": "研究生教育",
                                "dicValue": "10"
                            },
                            {
                                "itemName": "博士研究生毕业",
                                "dicValue": "11"
                            },
                            {
                                "itemName": "博士研究生肄业",
                                "dicValue": "13"
                            },
                            {
                                "itemName": "硕士研究生毕业",
                                "dicValue": "14"
                            },
                            {
                                "itemName": "硕士研究生结业",
                                "dicValue": "15"
                            },
                            {
                                "itemName": "硕士研究生肄业",
                                "dicValue": "16"
                            },
                            {
                                "itemName": "研究生班毕业",
                                "dicValue": "17"
                            },
                            {
                                "itemName": "研究生班结业",
                                "dicValue": "18"
                            },
                            {
                                "itemName": "研究生班肄业",
                                "dicValue": "19"
                            },
                            {
                                "itemName": "大学本科/专科教育",
                                "dicValue": "20/30"
                            },
                            {
                                "itemName": "博士研究生结业",
                                "dicValue": "12"
                            },
                            {
                                "itemName": "大学本科毕业",
                                "dicValue": "21"
                            },
                            {
                                "itemName": "大学本科结业",
                                "dicValue": "22"
                            },
                            {
                                "itemName": "大学本科肄业",
                                "dicValue": "23"
                            },
                            {
                                "itemName": "大学普通班毕业",
                                "dicValue": "28"
                            },
                            {
                                "itemName": "大学专科毕业",
                                "dicValue": "31"
                            },
                            {
                                "itemName": "大学专科结业",
                                "dicValue": "32"
                            },
                            {
                                "itemName": "大学专科肄业",
                                "dicValue": "33"
                            },
                            {
                                "itemName": "中等职业教育",
                                "dicValue": "40"
                            },
                            {
                                "itemName": "中等专科毕业",
                                "dicValue": "41"
                            },
                            {
                                "itemName": "中等专科结业",
                                "dicValue": "42"
                            },
                            {
                                "itemName": "中等专科肄业",
                                "dicValue": "43"
                            },
                            {
                                "itemName": "职业高中毕业",
                                "dicValue": "44"
                            },
                            {
                                "itemName": "职业高中结业",
                                "dicValue": "45"
                            },
                            {
                                "itemName": "职业高中肄业",
                                "dicValue": "46"
                            },
                            {
                                "itemName": "技工学校毕业",
                                "dicValue": "47"
                            },
                            {
                                "itemName": "技工学校结业",
                                "dicValue": "48"
                            },
                            {
                                "itemName": "技工学校肄业",
                                "dicValue": "49"
                            },
                            {
                                "itemName": "普通高级中学教育",
                                "dicValue": "60"
                            },
                            {
                                "itemName": "普通高中毕业",
                                "dicValue": "61"
                            },
                            {
                                "itemName": "普通高中结业",
                                "dicValue": "62"
                            },
                            {
                                "itemName": "普通高中肄业",
                                "dicValue": "63"
                            },
                            {
                                "itemName": "初级中学教育",
                                "dicValue": "70"
                            },
                            {
                                "itemName": "初中毕业",
                                "dicValue": "71"
                            },
                            {
                                "itemName": "初中肄业",
                                "dicValue": "73"
                            },
                            {
                                "itemName": "小学教育",
                                "dicValue": "80"
                            },
                            {
                                "itemName": "小学毕业",
                                "dicValue": "81"
                            },
                            {
                                "itemName": "小学肄业",
                                "dicValue": "83"
                            },
                            {
                                "itemName": "其他",
                                "dicValue": "90"
                            }
							],
           	//职业类别
           workCode: [
                            {
                                "itemName": "国家机关、党群组织、企业、事业单位负责人",
                                "dicValue": "1"
                            },
                            {
                                "itemName": "专业技术人员",
                                "dicValue": "2"
                            },
                            {
                                "itemName": "办事人员和有关人员",
                                "dicValue": "3"
                            },
                            {
                                "itemName": "商业、服务业人员",
                                "dicValue": "4"
                            },
                            {
                                "itemName": "农、林、牧、渔、水利业生产人员",
                                "dicValue": "5"
                            },
                            {
                                "itemName": "生产、运输设备操作人员及有关人员",
                                "dicValue": "6"
                            },
                            {
                                "itemName": "军人",
                                "dicValue": "7"
                            },
                            {
                                "itemName": "不便分类的其他从业人员",
                                "dicValue": "8"
                            }
                        ],
           //婚姻状况
           maritalStatusCode: [
                            {
                                "itemName": "未婚",
                                "dicValue": "10"
                            },
                            {
                                "itemName": "已婚",
                                "dicValue": "20"
                            },
                            {
                                "itemName": "初婚",
                                "dicValue": "21"
                            },
                            {
                                "itemName": "再婚",
                                "dicValue": "22"
                            },
                            {
                                "itemName": "复婚",
                                "dicValue": "23"
                            },
                            {
                                "itemName": "丧偶",
                                "dicValue": "30"
                            },
                            {
                                "itemName": "离婚",
                                "dicValue": "40"
                            },
                            {
                                "itemName": "未说明的婚姻状况",
                                "dicValue": "90"
                            }
                        ],
            //医疗支付方式
            insuranceCode: [
                            {
                                "itemName": "城镇职工基本医疗保险",
                                "dicValue": "01"
                            },
                            {
                                "itemName": "城镇居民基本医疗保险",
                                "dicValue": "02"
                            },
                            {
                                "itemName": "新型农村合作医疗",
                                "dicValue": "03"
                            },
                            {
                                "itemName": "贫困救助",
                                "dicValue": "04"
                            },
                            {
                                "itemName": "商业医疗保险",
                                "dicValue": "05"
                            },
                            {
                                "itemName": "全公费",
                                "dicValue": "06"
                            },
                            {
                                "itemName": "全自费",
                                "dicValue": "07"
                            },
                            {
                                "itemName": "其他",
                                "dicValue": "99"
                            }
                        ],
            startWorkDate:'',
            manaUnitId:'',
            //是否户主
            masterFlag: [
                            {
                                "itemName": "是",
                                "dicValue": "y"
                            },
                            {
                                "itemName": "否",
                                "dicValue": "n"
                            }
                        ]
,
            //与户主关系
            relaCode: [
                            {
                                "itemName": "户主",
                                "dicValue": "02"
                            },
                            {
                                "itemName": "配偶",
                                "dicValue": "10"
                            },
                            {
                                "itemName": "夫",
                                "dicValue": "11"
                            },
                            {
                                "itemName": "妻",
                                "dicValue": "12"
                            },
                            {
                                "itemName": "子",
                                "dicValue": "20"
                            },
                            {
                                "itemName": "独生子",
                                "dicValue": "21"
                            },
                            {
                                "itemName": "长子",
                                "dicValue": "22"
                            },
                            {
                                "itemName": "次子",
                                "dicValue": "23"
                            },
                            {
                                "itemName": "三子",
                                "dicValue": "24"
                            },
                            {
                                "itemName": "四子",
                                "dicValue": "25"
                            },
                            {
                                "itemName": "五子",
                                "dicValue": "26"
                            },
                            {
                                "itemName": "养子或继子",
                                "dicValue": "27"
                            },
                            {
                                "itemName": "女婿",
                                "dicValue": "28"
                            },
                            {
                                "itemName": "其他儿子",
                                "dicValue": "29"
                            },
                            {
                                "itemName": "女",
                                "dicValue": "30"
                            },
                            {
                                "itemName": "独生女",
                                "dicValue": "31"
                            },
                            {
                                "itemName": "长女",
                                "dicValue": "32"
                            },
                            {
                                "itemName": "次女",
                                "dicValue": "33"
                            },
                            {
                                "itemName": "三女",
                                "dicValue": "34"
                            },
                            {
                                "itemName": "四女",
                                "dicValue": "35"
                            },
                            {
                                "itemName": "五女",
                                "dicValue": "36"
                            },
                            {
                                "itemName": "养女或继女",
                                "dicValue": "37"
                            },
                            {
                                "itemName": "儿媳",
                                "dicValue": "38"
                            },
                            {
                                "itemName": "其他女儿",
                                "dicValue": "39"
                            },
                            {
                                "itemName": "孙子、孙女或外孙子、外孙女",
                                "dicValue": "40"
                            },
                            {
                                "itemName": "孙子",
                                "dicValue": "41"
                            },
                            {
                                "itemName": "孙女",
                                "dicValue": "42"
                            },
                            {
                                "itemName": "外孙子",
                                "dicValue": "43"
                            },
                            {
                                "itemName": "外孙女",
                                "dicValue": "44"
                            },
                            {
                                "itemName": "孙媳妇或外孙媳妇",
                                "dicValue": "45"
                            },
                            {
                                "itemName": "孙女婿或外孙女婿",
                                "dicValue": "46"
                            },
                            {
                                "itemName": "曾孙子或外曾孙子",
                                "dicValue": "47"
                            },
                            {
                                "itemName": "曾孙女或外曾孙女",
                                "dicValue": "48"
                            },
                            {
                                "itemName": "其他孙子、孙女或外孙子、外孙女",
                                "dicValue": "49"
                            },
                            {
                                "itemName": "父母",
                                "dicValue": "50"
                            },
                            {
                                "itemName": "父亲",
                                "dicValue": "51"
                            },
                            {
                                "itemName": "母亲",
                                "dicValue": "52"
                            },
                            {
                                "itemName": "公公",
                                "dicValue": "53"
                            },
                            {
                                "itemName": "婆婆",
                                "dicValue": "54"
                            },
                            {
                                "itemName": "岳父",
                                "dicValue": "55"
                            },
                            {
                                "itemName": "岳母",
                                "dicValue": "56"
                            },
                            {
                                "itemName": "继父或养父",
                                "dicValue": "57"
                            },
                            {
                                "itemName": "继母或养母",
                                "dicValue": "58"
                            },
                            {
                                "itemName": "其他父母关系",
                                "dicValue": "59"
                            },
                            {
                                "itemName": "祖父母或外祖父母",
                                "dicValue": "60"
                            },
                            {
                                "itemName": "祖父",
                                "dicValue": "61"
                            },
                            {
                                "itemName": "祖母",
                                "dicValue": "62"
                            },
                            {
                                "itemName": "外祖父",
                                "dicValue": "63"
                            },
                            {
                                "itemName": "外祖母",
                                "dicValue": "64"
                            },
                            {
                                "itemName": "配偶的祖父母或外祖父母",
                                "dicValue": "65"
                            },
                            {
                                "itemName": "曾祖父",
                                "dicValue": "66"
                            },
                            {
                                "itemName": "曾祖母",
                                "dicValue": "67"
                            },
                            {
                                "itemName": "配偶的曾祖父母或外曾祖父母",
                                "dicValue": "68"
                            },
                            {
                                "itemName": "其他祖父母或外祖父母关系",
                                "dicValue": "69"
                            },
                            {
                                "itemName": "兄弟姐妹",
                                "dicValue": "70"
                            },
                            {
                                "itemName": "兄",
                                "dicValue": "71"
                            },
                            {
                                "itemName": "嫂",
                                "dicValue": "72"
                            },
                            {
                                "itemName": "弟",
                                "dicValue": "73"
                            },
                            {
                                "itemName": "弟媳",
                                "dicValue": "74"
                            },
                            {
                                "itemName": "姐姐",
                                "dicValue": "75"
                            },
                            {
                                "itemName": "姐夫",
                                "dicValue": "76"
                            },
                            {
                                "itemName": "妹妹",
                                "dicValue": "77"
                            },
                            {
                                "itemName": "妹夫",
                                "dicValue": "78"
                            },
                            {
                                "itemName": "其他兄弟姐妹",
                                "dicValue": "79"
                            },
                            {
                                "itemName": "其他",
                                "dicValue": "80"
                            },
                            {
                                "itemName": "伯父",
                                "dicValue": "81"
                            },
                            {
                                "itemName": "伯母",
                                "dicValue": "82"
                            },
                            {
                                "itemName": "叔父",
                                "dicValue": "83"
                            },
                            {
                                "itemName": "婶母",
                                "dicValue": "84"
                            },
                            {
                                "itemName": "舅父",
                                "dicValue": "85"
                            },
                            {
                                "itemName": "舅母",
                                "dicValue": "86"
                            },
                            {
                                "itemName": "姨父",
                                "dicValue": "87"
                            },
                            {
                                "itemName": "姨母",
                                "dicValue": "88"
                            },
                            {
                                "itemName": "姑父",
                                "dicValue": "89"
                            },
                            {
                                "itemName": "姑母",
                                "dicValue": "90"
                            },
                            {
                                "itemName": "堂兄弟、堂姐妹",
                                "dicValue": "91"
                            },
                            {
                                "itemName": "表兄弟、表姐妹",
                                "dicValue": "92"
                            },
                            {
                                "itemName": "侄子",
                                "dicValue": "93"
                            },
                            {
                                "itemName": "侄女",
                                "dicValue": "94"
                            },
                            {
                                "itemName": "外甥",
                                "dicValue": "95"
                            },
                            {
                                "itemName": "外甥女",
                                "dicValue": "96"
                            },
                            {
                                "itemName": "其他亲属",
                                "dicValue": "97"
                            },
                            {
                                "itemName": "非亲属",
                                "dicValue": "99"
                            }
                        ],
            //是否农业户籍
            isAgrRegister: [
                            {
                                "itemName": "是",
                                "dicValue": "y"
                            },
                            {
                                "itemName": "否",
                                "dicValue": "n"
                            }
                        ]
,				
			//经济来源
            incomeSource: [
                            {
                                "itemName": "社会救济",
                                "dicValue": "1"
                            },
                            {
                                "itemName": "工作收入",
                                "dicValue": "2"
                            },
                            {
                                "itemName": "其他",
                                "dicValue": "3"
                            }
                        ],
            module:{},
            //国籍
            nationalityCodeL:'',
            ifshow : true,
            isshow:'',
            isshow1:true,
            modules1: '',
            sexcode1:'',
            sectop1:false,
            sex4:'',
        }

    },
    computed: {
		...mapState(['xie_empi'])
    },
    methods: {
		xie_getdetailed() {
				Indicator.open('加载中...');
                let params = [JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0],JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1],this.xie_empi.empiId]
                commonAjax(params, 'pcn.archiveService', 'getArchiveDetail').then(res => {
                     if (res.code == 200) {
                   this.allData=res.body;
                   //姓名
                   this.allData.personName=this.xie_empi.personName;
                   //身份证
                    this.allData.idCard=this.xie_empi.idCard;
                    //电话号码
                    this.allData.mobileNumber=this.xie_empi.mobileNumber;
                    //性别
                    this.allData.sexCode=this.xie_empi.sexCode;
                    //生日
                     this.allData.birthday=this.xie_empi.birthday;
                     //判断民族
                     this.nationCode.forEach((item)=>{
                     	if(item.dicValue==res.body.nationCode){
                     		 this.allData.nationCode=item.itemName
                     	}
                     });
                     //性别
                     this.sexCode.forEach((item)=>{
                     	if(item.dicValue==res.body.sexCode){
                     		 this.allData.sexCode=item.itemName
                     	}
                     });
                     //常驻类型
                     this.registeredPermanent.forEach((item)=>{
                     	if(item.dicValue==res.body.registeredPermanent){
                     		 this.allData.registeredPermanent=item.itemName
                     	}
                     });
                     //血型
                     
                     this.bloodTypeCode.forEach((item)=>{
                     	if(item.dicValue==res.body.bloodTypeCode){
                     		 this.allData.bloodTypeCode=item.itemName
                     	}
                     });
                     //RH血型
                     this.rhBloodCode.forEach((item)=>{
                     	if(item.dicValue==res.body.rhBloodCode){
                     		 this.allData.rhBloodCode=item.itemName
                     	}
                     });
                     
                     //文化程度
                      this.educationCode.forEach((item)=>{
                     	if(item.dicValue==res.body.educationCode){
                     		 this.allData.educationCode=item.itemName
                     	}
                     });
                     
                     //职业类别
                     this.workCode.forEach((item)=>{
                     	if(item.dicValue==res.body.workCode){
                     		 this.allData.workCode=item.itemName
                     	}
                     });
//                   婚姻状况
					this.maritalStatusCode.forEach((item)=>{
                     	if(item.dicValue==res.body.maritalStatusCode){
                     		 this.allData.maritalStatusCode=item.itemName
                     	}
                     });
                     //医疗支付方式
            			this.insuranceCode.forEach((item)=>{
                     	if(item.dicValue==res.body.insuranceCode){
                     		 this.allData.insuranceCode=item.itemName
                     	}
                     });
                     //是否户主
            			this.masterFlag.forEach((item)=>{
                     	if(item.dicValue==res.body.masterFlag){
                     		 this.allData.masterFlag=item.itemName
                     	}
                     });
                      //与户主关系
            			this.relaCode.forEach((item)=>{
                     	if(item.dicValue==res.body.relaCode){
                     		 this.allData.relaCode=item.itemName
                     	}
                     });
                     //是否农业户籍
            	this.isAgrRegister.forEach((item)=>{
                     	if(item.dicValue==res.body.isAgrRegister){
                     		 this.allData.isAgrRegister=item.itemName
                     	}
                     });
                     //经济来源
            		this.incomeSource.forEach((item)=>{
                     	if(item.dicValue==res.body.incomeSource){
                     		 this.allData.incomeSource=item.itemName
                     	}
                    });
                   
                  	
                    
                     }
                })
				setTimeout(()=>{
					Indicator.close();
				},1500)
            },
            xie_getmoban() {
//          	let that=this;
					Indicator.open('加载中...');
               	 let jkmoduleid = ``
               	 requestJkmoduld(jkmoduleid).then(res => {
                     if (res.code == 200) {
//                   Indicator.close();
					this.list=res.body;
					this.module=res.data.modules[0]
//					console.log(this.module)
//						this.modules1=res.data.modules;
//						console.log(this.modules1)
					
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
					this.$router.push('/xie_jkda')
				});
            },
            
           getDataFromChild(data){
//         	Indicator.open('加载中...');
           	
			this.incomeSource.forEach((item)=>{
                     	if(item.itemName==data.incomeSource){
                     		 this.allData1.incomeSource=item.dicValue
                     	}
                     });
            //判断民族
               	 	this.nationCode.forEach((item)=>{
                     	if(item.itemName==data.nationCode){
                     		 this.allData1.nationCode=item.dicValue
                     	}
                     });
                     //性别
                     this.sexCode.forEach((item)=>{
                     	if(data.sexCode==item.itemName){
                     		 this.allData1.sexCode=item.dicValue
                     		 console.log( this.allData1.sexCode)
                     	}
                     });
                		
                     //常驻类型
                     this.registeredPermanent.forEach((item)=>{
                     	if(item.itemName==data.registeredPermanent){
                     		 this.allData1.registeredPermanent=item.dicValue
                     	}
                     });
                     //血型
                     
                     this.bloodTypeCode.forEach((item)=>{
                     	if(item.itemName==data.bloodTypeCode){
                     		 this.allData1.bloodTypeCode=item.dicValue
                     	}
                     });
                     //RH血型
                     this.rhBloodCode.forEach((item)=>{
                     	if(item.itemName==data.rhBloodCode){
                     		 this.allData1.rhBloodCode=item.dicValue
                     	}
                     });
                     
                     //文化程度
                      this.educationCode.forEach((item)=>{
                     	if(item.itemName==data.educationCode){
                     		 this.allData1.educationCode=item.dicValue
                     	}
                     });
                     
                     //职业类别
                     this.workCode.forEach((item)=>{
                     	if(item.itemName==data.workCode){
                     		 this.allData1.workCode=item.dicValue
                     	}
                     });
//                   婚姻状况
					this.maritalStatusCode.forEach((item)=>{
                     	if(item.itemName==data.maritalStatusCode){
                     		 this.allData1.maritalStatusCode=item.dicValue
                     	}
                     });
                     //医疗支付方式
            			this.insuranceCode.forEach((item)=>{
                     	if(item.itemName==data.insuranceCode){
                     		 this.allData1.insuranceCode=item.dicValue
                     	}
                     });
                     //是否户主
            			this.masterFlag.forEach((item)=>{
                     	if(item.itemName==data.masterFlag){
                     		 this.allData1.masterFlag=item.dicValue
                     	}
                     });
                      //与户主关系
            			this.relaCode.forEach((item)=>{
                     	if(item.itemName==data.relaCode){
                     		 this.allData1.relaCode=item.dicValue
                     	}
                     });
                     //是否农业户籍
            	this.isAgrRegister.forEach((item)=>{
                     	if(item.itemName==data.isAgrRegister){
                     		 this.allData1.isAgrRegister=item.dicValue
                     	}
                     });
                       
                    //姓名
                     this.allData1.personName=data.personName;
                   //身份证
                  this.allData1.idCard=data.idCard;
                    //电话号码
                    this.allData1.mobileNumber=data.mobileNumber;
                    //生日
                     this.allData1.birthday=data.birthday;	
                     //电话
                      this.allData1.contact=data.contact;
                      //电话
                       this.allData1.contactPhone=data.contactPhone;
//                     医生号
                       this.allData1.manaDoctorId=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0];
                       //团队号
                         this.allData1.manageUnitId=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[1];
                       //empi 
                       this.allData1.empiId=this.xie_empi.empiId;
                       //phrid
                       this.allData1.phrId=this.xie_empi.phrId;
                       
                       this.allData1.uid=JSON.parse(sessionStorage.getItem('xie_localDoctorId'))[0];
                       //工作单位
                        this.allData1.workPlace=data.workPlace
                        //家庭电话
                       this.allData1.phoneNumber=data.phoneNumber
                       //国籍
                       this.allData1.nationalityCodeL=data.nationalityCodeL
                        //工作日期
                     	this.allData1.startWorkDate=data.startWorkDate
//                  console.log(this.allData1)
                    
                    this.xie_baocun()
                     
		},
		
		  xie_baocun() {
		  	Indicator.open('加载中...');
                let params = [this.allData1]
                commonAjax(params, 'pcn.archiveService', 'updateArchive').then(res => {
                     if (res.code == 200) {
                     Indicator.close();
                     this.$router.push('/xie_jkda')
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