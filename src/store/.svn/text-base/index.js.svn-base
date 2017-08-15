import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
	state: {

		Xiesfzh:'',
		xie_empi:'',
		xie_aged_empi:'',
		xie_gxyda_phrId:'',
		xie_tnbda_phrId:'',
		xie_tnbsf_phrId:'',
		xie_gxysf_phrId:'',
		//毛大焕开始
		mao_applyId:'',
		mao_jkzbzhi:'',
		mao_fdoc:'',
		mao_numb:"",
		mao_allone:"",
		mao_shiqubm:"",
		//毛大焕结束
		//李苏文开始
		li_applyId: '',
		li_signPackId: '',
		li_select_orgName:'',
		//李苏文结束
		jia_phoneValidateNumber: '',
		jia_phoneNumber: '',
		jia_srcs: '',
		//张炳林
		zbl_phoneNo: '',
		zbl_packages: [],
		zbl_address: {},
		xieyiCont: '',
		selectDocTeam: {},
		packagesInfo: {},
		selectDoctorTeam: {},
		doctorDetail: {},
		zbl_signPack: {},
		applyInfo: {},
		zbl_personInfo: {},
		//宋思佳
		ssj_messageTemplateInfo:{},
		ssj_notifyDetails:{}
	},
	getters: {

	},
	mutations: {
		//		健康档案身份证传值
		xie_selectsfzh(state, Xiesfzh) {
			state.Xiesfzh = Xiesfzh
		},
		//		健康档案empi传值
		xie_selectempi(state, xie_empi) {
			state.xie_empi = xie_empi
		},
			//老年人档案传empi值
		xie_select_aged_empi(state, xie_aged_empi) {
			state.xie_aged_empi = xie_aged_empi
		},
			//		高血压档案phrid值
		xie_select_gxyda_empi(state, xie_gxyda_phrId) {
			state.xie_gxyda_phrId = xie_gxyda_phrId
		},	//		糖尿病档案phrid值
		xie_select_tnbda_empi(state, xie_tnbda_phrId) {
			state.xie_tnbda_phrId = xie_tnbda_phrId
		},
		//糖尿病随访
		xie_select_tnbsf_empi(state, xie_tnbsf_phrId) {
			state.xie_tnbsf_phrId = xie_tnbsf_phrId
		},
		//高血压随访
		xie_select_gxysf_empi(state, xie_gxysf_phrId) {
			state.xie_gxysf_phrId = xie_gxysf_phrId
		},
		//毛大焕开始
		mao_select_applyId(state, mao_applyId) {
			state.mao_applyId = mao_applyId
		},
		mao_select_kzbzhi(state,mao_jkzbzhi){
			state.mao_jkzbzhi = mao_jkzbzhi
		},
		mao_select_fdoc(state,value){
			console.log(value)
			state.mao_fdoc = value
		},
		mao_select_numb(state,value){
			state.mao_numb = value
		},
		mao_select_allone(state,value){
			console.log(value)
			state.mao_allone = value
		},
		//地区住址的编码
		mao_select_shiqubm(state,value){
			console.log(value)
			state.mao_shiqubm = value
		},
		//毛大焕结束
		
		//蒋锐开始
		jia_setPhoneValidateNumber(state,value){
			state.jia_phoneValidateNumber = value;
		},
		jia_setPhoneNumber(state,value){
			state.jia_phoneNumber = value
		},
		jia_setSrcs(state,value){
			console.log('mutation 被触发了')
			console.log(value)
			state.jia_srcs = value;
		},
		//蒋锐结束
		
		//李苏文开始
		//签约详情传值
		li_select_applyId(state, li_applyId) {
			state.li_applyId = li_applyId
			console.log(li_applyId)
		},
		
		//家医签约服务包详情传值
		li_select_signPackId(state, li_signPackId) {
			state.li_signPackId = li_signPackId
			console.log(li_signPackId)
		},
		
		//家医签约协议传值
		li_select_orgName(state, li_orgName) {
			state.li_orgName = li_orgName
			console.log(li_orgName)
		},
		//李苏文jiesu
		//张
		zbl_editPhoneNo(state, zbl_phoneNo) {
			state.zbl_phoneNo = zbl_phoneNo
		},
		zbl_selectPackages(state, pag) {
			state.zbl_packages = []
			state.zbl_packages.push(pag)
		},
		zbl_selectAddress(state, zbl_address) {
			state.zbl_address = zbl_address
		},
		xieyiCont(state, xieyiCont) {
			state.xieyiCont = JSON.parse(xieyiCont)
		},
		selectDocTeam(state, docTeam) {
			state.selectDocTeam = docTeam
		},
		getPackagesInfo(state, packagesInfo) {
			state.packagesInfo = JSON.parse(packagesInfo)
		},
		getDoctorDetail(state, doctorDetail) {
			state.doctorDetail = JSON.parse(doctorDetail)
		},
		zbl_getSignPack(state, saveDataArr) {
			saveDataArr.forEach(item => {
				state.zbl_signPack[item.name] = item.value
			})
		},
		zbl_getApplyInfo(state,applyInfo) {
			state.applyInfo = JSON.parse(applyInfo)
		},
		zbl_getPersonInfo(state,zbl_personInfo) {
			state.zbl_personInfo = JSON.parse(zbl_personInfo)
		},
		//宋思佳
		//宋思佳
		ssj_setMessageTemplateInfo(state,ssj_messageTemplateInfo){
			state.ssj_messageTemplateInfo = ssj_messageTemplateInfo;
		},
		ssj_getNotifyDetails(state,ssj_notifyDetails){
			state.ssj_notifyDetails = ssj_notifyDetails;
		}
	},
	actions: {
		//		健康档案身份证传值
		Xiesfzh({
			commit
		}, Xiesfzh) {
			commit("xie_selectsfzh", Xiesfzh)
		},
//		健康档案empi传值
		xie_empi({
			commit
		}, xie_empi) {
			commit("xie_selectempi", xie_empi)
		},
		//老年人档案empi传值
		xie_aged_empi({
			commit
		}, xie_aged_empi) {
			commit("xie_select_aged_empi", xie_aged_empi)
		},
//		高血压档案phrid传值
		xie_gxyda_phrId({
			commit
		}, xie_gxyda_phrId) {
			commit("xie_select_gxyda_empi", xie_gxyda_phrId)
		},
		//		糖尿病档案phrid传值
		xie_tnbda_phrId({
			commit
		}, xie_tnbda_phrId) {
			commit("xie_select_tnbda_empi", xie_tnbda_phrId)
		},
		//糖尿病随访phrid
		xie_tnbsf_phrId({
			commit
		}, xie_tnbsf_phrId) {
			commit("xie_select_tnbsf_empi", xie_tnbsf_phrId)
		},
//		高血压随访传值
		xie_gxysf_phrId({
			commit
		}, xie_gxysf_phrId) {
			commit("xie_select_gxysf_empi", xie_gxysf_phrId)
		},
		//毛大焕开始
		mao_applyId({
			commit
		}, mao_applyId) {
			commit("mao_select_applyId", mao_applyId)
		},

		mao_jkzbzhi({
			commit
		}, mao_jkzbzhi) {
			commit("mao_select_kzbzhi", mao_jkzbzhi)
		},
		mao_select_fdoc({commit}, value) {
			console.log(11)
			commit("mao_select_fdoc", value)
		},
		mao_select_numb({commit}, value) {
			commit("mao_select_numb", value)
		},
		mao_select_allone({commit}, value) {
			commit("mao_select_allone", value)
		},
		mao_select_shiqubm({commit}, value) {
			commit("mao_select_shiqubm", value)
		},
		//毛大焕结束
		
		//蒋锐开始
		jia_setPhoneValidateNumber({commit},value){
			commit('jia_setPhoneValidateNumber',value)
		},
		jia_setPhoneNumber({ commit },value){
			commit('jia_setPhoneNumber',value)
		},
		jia_setSrcs({ commit },value){
			console.log('action 被触发了')
			commit('jia_setSrcs',value)
		},
		//蒋锐结束
		
		//李苏文开始
		//签约详情传值
		li_applyId({
			commit
		}, li_applyId) {
			commit("li_select_applyId", li_applyId)
		},
		
		//家医签约服务包详情传值
		li_signPackId({
			commit
		}, li_signPackId) {
			commit("li_select_signPackId", li_signPackId)
		},
		
		
		//家医签约协议传值
		li_orgName({
			commit
		}, li_orgName) {
			commit("li_select_orgName", li_orgName)
		},
		
		//李苏文结束
//		张炳林
		zbl_editPhoneNo({
			commit
		}, zbl_phoneNo) {
			commit('zbl_editPhoneNo', zbl_phoneNo)
		},
		zbl_selectPackages({
			commit
		}, pag) {
			commit('zbl_selectPackages', pag)
		},
		zbl_selectAddress({
			commit
		}, zbl_address) {
			commit('zbl_selectAddress', zbl_address)
		},
		xieyiCont({
			commit
		}, content) {
			commit('xieyiCont', content)
		},
		selectDocTeam({
			commit
		}, docTeam) {
			commit('selectDocTeam', docTeam)
		},
		getPackagesInfo({
			commit
		}, packagesInfo) {
			commit('getPackagesInfo', packagesInfo)
		},
		getDoctorDetail({
			commit
		}, doctorDetail) {
			commit('getDoctorDetail', doctorDetail)
		},
		zbl_getSignPack({
			commit
		}, saveDataArr) {
			commit('zbl_getSignPack', saveDataArr)
		},
		zbl_getApplyInfo({
			commit
		}, applyInfo) {
			commit('zbl_getApplyInfo', applyInfo)
		},
		zbl_getPersonInfo({
			commit
		}, zbl_personInfo) {
			commit('zbl_getPersonInfo', zbl_personInfo)
		},
		//宋思佳
		//宋思佳
		ssj_setMessageTemplateInfo({ commit },ssj_messageTemplateInfo){
			commit('ssj_setMessageTemplateInfo',ssj_messageTemplateInfo)
		},
		ssj_getNotifyDetails({ commit },ssj_notifyDetails){
			commit('ssj_getNotifyDetails',ssj_notifyDetails)
		}
		
	}

})