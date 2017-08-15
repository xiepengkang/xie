<template>
	<div class="jkda_detail">
		<mt-header title="健康深圳">
		  <router-link to="/xie_jkda" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button  slot="right" @click="savejkda">保存</mt-button>
		</mt-header>
		
		<div class="search">
			<span>个人健康档案</span>
			<div class="search_right" v-show="!isshow" @click="displayimg">
				<img src="../../assets/img/xie_circle.png"/>
			</div>
			<div class="search_right" v-show="isshow" @click="displayimg">
				<img src="../../assets/img/xie_select.png"/>
			</div>
		</div>
		
		<form action="conter" class="form" v-if = "ifshow">
		
			<mt-field label="*姓名" placeholder="请输入姓名" v-model="username" ></mt-field>
			<mt-field label="*性别"  placeholder="请选择性别"  v-model="sex" >
			</mt-field>
			<mt-field label="*出生日期" placeholder="请输入出生日期"  v-model="datebirth" ></mt-field>
			<mt-field label="身份证号" placeholder="请输入身份证号" v-model="IDnumber"></mt-field>
			<mt-field label="个人电话" placeholder="请输入个人电话" v-model="phone"></mt-field>
			<mt-field label="家庭地址" placeholder="请输入家庭地址" v-model="jtdz" ></mt-field>
			<mt-field label="婚姻状况" placeholder="请选择婚姻状况" v-model="hyzk"></mt-field>
			<mt-field label="户籍类别" placeholder="请选择户籍类别" v-model="hjlb"></mt-field>
			<mt-field label="国籍" placeholder="请选择国籍" v-model="nationality"></mt-field>
		    <mt-field label="民族" placeholder="请选择民族" v-model="nation"></mt-field>
			<mt-field label="常住类型" placeholder="请选择常住类型" v-model="czlx"></mt-field>
			<mt-field label="文化程度" placeholder="请选择文化程度" v-model="whcd"></mt-field>
			<mt-field label="血型" placeholder="请选择血型" v-model="xx"></mt-field>
			<mt-field label="RH血型" placeholder="请选择RH血型" v-model="rhxx"></mt-field>
			<mt-field label="职业" placeholder="请选择职业" v-model="zy"></mt-field>
			<mt-field label="医疗支付方式" placeholder="请选择医疗支付方式" v-model="ylzffs"></mt-field>
			<mt-field label="联系人姓名" placeholder="请输入联系人姓名" v-model="lxrxm" ></mt-field>
			<mt-field label="联系人电话" placeholder="请输入联系人电话" v-model="lxrdh" ></mt-field>
			<mt-field label="工作单位" placeholder="请输入工作单位" v-model="gzdw" ></mt-field>
			<mt-field label="是否签约" placeholder="请选择是否签约" v-model="sfqy"></mt-field>
            <mt-field label="签约日期" placeholder="请输入签约日期"  v-model="qyrq" ></mt-field>
			<mt-field label="签约医生" placeholder="请输入签约医生" v-model="qyys" ></mt-field>
		    <!--{{Xiesfzh}}-->
		   
		</form>
	</div>
</template>
<script>
import { mapState} from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
    components: {

    },
    data() {
        return {
			list: [],
            username : '',
            sex : '',
            datebirth : '',
            IDnumber : '',
            phone : '',
            jtdz : '',
            hyzk : '',
            hjlb : '',
            nationality : '',
            nation : '',
            czlx : '',
            whcd : '',
            xx : '',
            rhxx : '',
            zy : '',
            ylzffs : '',
            lxrxm : '',
            lxrdh : '',
            gzdw : '',
            sfqy : '',
            qyrq : '',
            qyys : '',
            ifshow : true,
            isshow:''
        }

    },
    computed: {
		...mapState(
		['Xiesfzh']
			)

    },
    methods: {
		displayimg(){
			if(this.isshow==true){
				this.isshow=false
				this.ifshow=true
				console.log(1111)
			}else{
				this.isshow=true
				this.ifshow=false
			}
		},
//		是否确定保存
		savejkda(){
			
			
			MessageBox({
			  title: '提示',
			  message: '确定执行此操作?',
			  showCancelButton: true
			});

		}
		
    },
    mounted() {
		console.log(this.Xiesfzh)
		this.datebirth =this.Xiesfzh.substring(6, 10) + "-" + this.Xiesfzh.substring(10, 12) + "-" + this.Xiesfzh.substring(12, 14);
//		if (parseInt(this.Xiesfzh.substr(16, 1)) % 2 == 1) { 
//				this.sex=1
//				} else { 
//				this.sex=2
//				} 
    },
 
}
</script>
<style scoped>
html,body{
	width: 100%;
}
 .jkda_detail{
	background: #F7F7F7;
	height: 100%;
}

.jkda_detail .search{
	height: 0.8rem;
	background: #F2F2F2;
	display: flex;
	justify-content: inherit;
	align-items: center;
	padding-top: 1.2rem;
	
}
.jkda_detail .search img{
	height: 0.4rem;
	width: 0.4rem;
}
.jkda_detail .search_left{
	float: left;
	margin: 0 0.3rem;
}
.jkda_detail .search_right{
	float: right;
	margin-right: 0.3rem;
	padding-bottom: 0.3rem;
}
.jkda_detail .search span{
	display: block;
	flex: 1;
	display: flex;
	font-size: 0.3rem;
	margin-left:0.3rem
}

.jkda_detail .mint-header{
	height: 1.2rem;
	position: fixed;
	width: 100%;
	z-index: 2;
}
.jkda_detail .mint-button{
		height: 1.5rem;
	}
.jkda_detail .mint-header{
		font-size: 0.33rem;
	}
.jkda_detail .mintui-back{
		font-size: 0.37rem;
		color: #fff;
	}
	html{
		transition: ;
	}
</style>