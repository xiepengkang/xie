import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
Vue.use(Router)

export default new Router({
	routes: [
		// -----------------------谢鹏康的路由开始--------------------
		{
			path: '/',
			redirect: '/xie_homepage'
//			component: xie_homeXie => require(['../components/Xie/Xie_homepage.vue'], xie_homeXie)
		},
		{
			path: '/ceshi',
			meta: {
		 			keepAlive: false
		 	},
			component: ceshi => require(['../components/Xie/ceshi.vue'], ceshi)
		},
		//		这是跳转到用户登陆页面
		{
			path: '/xie_homepage',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_homepage => require(['../components/Xie/Xie_homepage.vue'], xie_homepage)
		},
		{
			path: '/xie_news',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news => require(['../components/Xie/Xie_news.vue'], xie_news)
		},
//		这是跳转到健康档案主页面
		{
			path: '/xie_jkda',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_jkda => require(['../components/Xie/Xie_jkda.vue'], xie_jkda)
		},
//		这是跳转到忘记密码页面
		{
			path: '/xie_forget',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_forget => require(['../components/Xie/Xie_forget.vue'], xie_forget)
		},
//		这是跳转到修改密码页面
		{
			path: '/xie_homepage_child',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_homepage_child => require(['../components/Xie/Xie_homepage_child.vue'], xie_homepage_child)
		},
//		这是跳转到登录完成页面
		{
			path: '/xie_home',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_home => require(['../components/Xie/Xie_home.vue'], xie_home)
		},
//		这是跳转到健康档案添加个人信息页面
		{
			path: '/xie_jkda_add',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_jkda_add => require(['../components/Xie/Xie_jkda_add.vue'], xie_jkda_add)
		},
//		这是跳转到健康档案搜索页面
		{
			path: '/xie_jkda_search',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_jkda_search => require(['../components/Xie/Xie_jkda_search.vue'], xie_jkda_search)
		},
//		这是跳转到健康档案详情页面,只能查看不能更改
		{
			path: '/xie_jkda_child',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_jkda_child => require(['../components/Xie/Xie_jkda_child.vue'], xie_jkda_child)
		},
//		跳转到老年人档案
		{
			path: '/xie_aged_archives',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_aged_archives => require(['../components/Xie/Xie_aged_archives.vue'], xie_aged_archives)
		},
//		老年人档案搜索框
		{
			path: '/xie_aged_archives_search',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_aged_archives_search => require(['../components/Xie/Xie_aged_archives_search.vue'], xie_aged_archives_search)
		},
//		老年人档案详情
		{
			path: '/xie_aged_archives_details',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_aged_archives_details => require(['../components/Xie/Xie_aged_archives_details.vue'], xie_aged_archives_details)
		},
//		高血压档案
		{
			path: '/xie_gxyda',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_gxyda => require(['../components/Xie/Xie_gxyda.vue'], xie_gxyda)
		},
//		高血压档案搜索
		{
			path: '/xie_gxyda_search',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_gxyda_search => require(['../components/Xie/Xie_gxyda_srarch.vue'], xie_gxyda_search)
		},
//		高血压档案详情
		{
			path: '/xie_gxyda_child',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_gxyda_child => require(['../components/Xie/Xie_gxyda_child.vue'], xie_gxyda_child)
		},

		//糖尿病档案
		{
			path: '/xie_tnbda',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_tnbda => require(['../components/Xie/Xie_tnbda.vue'], xie_tnbda)
		},
		//糖尿病档案搜索
		{
			path: '/xie_tnbda_search',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_tnbda_search => require(['../components/Xie/Xie_tnbda_search.vue'], xie_tnbda_search)
		},
//		糖尿病随访
		{
			path: '/xie_tnbsf',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_tnbsf => require(['../components/Xie/Xie_tnbsf.vue'], xie_tnbsf)
		},
		//		糖尿病随访搜索
		{
			path: '/xie_tnbsf_search',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_tnbsf_search => require(['../components/Xie/Xie_tnbsf_search.vue'], xie_tnbsf_search)
		},
		//		糖尿病随访详情
		{
			path: '/xie_tnbsf_child',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_tnbsf_child => require(['../components/Xie/Xie_tnbsf_child.vue'], xie_tnbsf_child)
		},
//		高血压随访
		{
			path: '/xie_gxysf',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_gxysf => require(['../components/Xie/Xie_gxysf.vue'], xie_gxysf)
		},
		//		高血压随访搜索
		{
			path: '/xie_gxysf_search',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_gxysf_search => require(['../components/Xie/Xie_gxysf_search.vue'], xie_gxysf_search)
		},
		//		高血压随访详情
		{
			path: '/xie_gxysf_child',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_gxysf_child => require(['../components/Xie/Xie_gxysf_child.vue'], xie_gxysf_child)
		},
		{
			path: '/xie_tnbda_child',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_tnbda_child => require(['../components/Xie/Xie_tnbda_child.vue'], xie_tnbda_child)
		},
//		消息咨询互动
		{
			path: '/xie_news_zxhd',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_zxhd => require(['../components/Xie/Xie_news_zxhd.vue'], xie_news_zxhd)
		},
//		签约提醒
		{
			path: '/xie_news_qytx',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_qytx => require(['../components/Xie/Xie_news_qytx.vue'], xie_news_qytx)
		},
		//解约通知
		{
			path: '/xie_news_jytz',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_jytz => require(['../components/Xie/Xie_news_jytx.vue'], xie_news_jytz)
		},
//		透传消息
		{
			path: '/xie_news_tcxx',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_tcxx => require(['../components/Xie/Xie_news_tcxx.vue'], xie_news_tcxx)
		},
//		系统通知
		{
			path: '/xie_news_xttz',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_xttz => require(['../components/Xie/Xie_news_xttz.vue'], xie_news_xttz)
		},
//		就医通知
		{
			path: '/xie_news_jytz',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_jytz => require(['../components/Xie/Xie_news_jytz.vue'], xie_news_jytz)
		},
//		服务通知
		{
			path: '/xie_news_fwtz',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_fwtz => require(['../components/Xie/Xie_news_fwtz.vue'], xie_news_fwtz)
		},
//		预约挂号
		{
			path: '/xie_news_yygh',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_yygh => require(['../components/Xie/Xie_news_yygh.vue'], xie_news_yygh)
		},
//		健康监测
		{
			path: '/xie_news_jkjc',
			meta: {
		 			keepAlive: false
		 	},
			component: xie_news_jkjc => require(['../components/Xie/Xie_news_jkjc.vue'], xie_news_jkjc)
		},
		
		// -----------------------张炳林的路由开始--------------------
		// //签约详情页
		// {
		// 	path: '/zbl_qyxq',
		// 	meta: {
		// 		keepAlive: true
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq.vue'], resolve)
		// },
		// //选择居住地址页
		// {
		// 	path: '/qyxq_hometown',
		// 	meta: {
		// 		keepAlive: true
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_hometown.vue'], resolve),
		// },
		// //选择家庭医生页
		// {
		// 	path: '/qyxq_selectdoct',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_selectdoct.vue'], resolve)
		// },
		// //选择家庭医生页2
		// {
		// 	path: '/qyxq_selectdoct2',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_selectdoct2.vue'], resolve)
		// },
		// //家医详情页
		// {
		// 	path: '/qyxq_doctordetail',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_doctordetail.vue'], resolve)
		// },
		// //选择服务包页
		// {
		// 	path: '/qyxq_package',
		// 	meta: {
		// 		keepAlive: true
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_package.vue'], resolve)
		// },
		// //签约协议页
		// {
		// 	path: '/qyxq_xieyi',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_xieyi.vue'], resolve)
		// },
		// //签约成功页
		// {
		// 	path: '/qyxq_success',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_success.vue'], resolve)
		// },

		// //签约详情修改或删除页
		// {
		// 	path: '/qyxq_edit',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_edit.vue'], resolve)
		// },
		// //已签约页
		// {
		// 	path: '/qyxq_signed',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_signed.vue'], resolve)
		// },
		// //搜索医生页
		// {
		// 	path: '/qyxq_searchdoct',
		// 	meta: {
		// 		keepAlive: false
		// 	},
		// 	component: resolve => require(['../components/zbl/zbl_qyxq_searchdoct.vue'], resolve)
		// },
		//--------------------------------李苏文的路由开始-----------------------
		{
			path: '/qygl',
			name: 'qygl',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/li_qygl/li_Qygl.vue'], resolve)
		},
		//签约详情（已取消）
		{
			path: '/li_Qygl_detail_yqx',
			name: 'li_Qygl_detail_yqx',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_yqx.vue'], resolve)
		},
		//签约详情（已签约）
		{
			path: '/li_Qygl_detail_yqy',
			name: 'li_Qygl_detail_yqy',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_yqy.vue'], resolve)
		},
		//签约详情（去确认）
		{
			path: '/li_Qygl_detail_qqr',
			name: 'li_Qygl_detail_qqr',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_qqr.vue'], resolve)
		},
		//签约详情,服务包（去确认）
		{
			path: '/li_Qygl_detail_qqr_fwb',
			name: 'li_Qygl_detail_qqr_fwb',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_qqr_fwb.vue'], resolve)
		},
		
		//签约详情（去确认 第2步）
		{
			path: '/li_Qygl_detail_qqr_two',
			name: 'li_Qygl_detail_qqr_two',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_qqr_two.vue'], resolve)
		},
		//签约详情（去确认 第3步完成）
		{
			path: '/li_Qygl_detail_qqr_three',
			name: 'li_Qygl_detail_qqr_three',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_qqr_three.vue'], resolve)
		},
		//签约详情（未通过）
		{
			path: '/li_Qygl_detail_wtg',
			name: 'li_Qygl_detail_wtg',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_wtg.vue'], resolve)
		},
		//签约详情（已解签）
		{
			path: '/li_Qygl_detail_yjq',
			name: 'li_Qygl_detail_yjq',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_yjq.vue'], resolve)
		},
		//签约详情（基础服务包）
		{
			path: '/li_Qygl_detail_jcfwb',
			name: 'li_Qygl_detail_jcfwb',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_jcfwb.vue'], resolve)
		},
		//签约详情（基础服务包详情）
		{
			path: '/li_Qygl_detail_jcfwb_detail',
			name: 'li_Qygl_detail_jcfwb_detail',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_jcfwb_detail.vue'], resolve)
		},
		//签约详情（签约协议）
		{
			path: '/li_Qygl_detail_qyxy',
			name: 'li_Qygl_detail_qyxy',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_qygl/li_Qygl_detail_qyxy.vue'], resolve)
		},
		{
			path: '/',
			name: 'Login',
			component: resolve => require(['../components/page/Login.vue'], resolve)
		},
		
		
		
		//居民咨询列表页
		{
			path: '/jmzx',
			name: 'jmzx',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/li_jmzx/li_Jmzx.vue'], resolve)
		},
		
		//居民咨询详情
		{
			path: '/jmzx_detail',
			name: 'jmzx_detail',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_jmzx/li_Jmzx_detail.vue'], resolve)
		},
		
		//预约挂号页
		{
			path: '/gh',
			name: 'gh',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_yygh/li_gh.vue'], resolve)
		},
		
		//预约查询页
		{
			path: '/search',
			name: 'search',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/li_yygh/li_search.vue'], resolve)
		},
		//----------------- 毛大焕的路由开始----------------
		{
			//居民页面
			path: '/Residents',
			name: 'Residents',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_residents.vue'], resolve)
		},
		{
			//添加居民
			path: '/Residents/adjm',
			name: 'addjm',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_addjumin.vue'], resolve)
		},
		{
			//选择国籍和地区
			path: '/Residents/adjm/chosegjdq',
			name: 'gjdq',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_gjdqxz.vue'], resolve)
		},
		{
			//居民详情
			path: '/mjmdetail/id=:id',
			name: 'jmdetail',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/maodh/mao_jmdetails.vue'], resolve)
		},
		{
			//服务包
			path: '/mjmdetail/service/fwid=:id',
			name: 'mservice',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/maodh/mao_service.vue'], resolve)
		},
		{
			//基础服务包详情界面
			path: '/mjmdetail/service/serviceobj/fwbid=:id',
			name: 'mserviceobj',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/maodh/mao_serviceobj.vue'], resolve)
		},
		{
			//基础服务包服务记录界面
			path: '/mjmdetail/service/serviceobj/mfwbjl/fwbjlid=:id',
			name: 'mfwbjl',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_fuwubaofwjl.vue'], resolve)
		},
		{
			//居民详情点击的管理类型界面
			path: '/mjmdetail/management/gllid=:id',
			name: 'mmanagement',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_guanlilx.vue'], resolve)
		},
		{
			//居民页人群管理类型页面
			path: '/Residents/mgllx',
			name: 'mgllx',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/maodh/mao_rqgl.vue'], resolve)
		},
		{
			//健康指标页面
			path: '/mjmdetail/mjkzb/mjkzid=:id',
			name: 'mjkzb',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_jkzb.vue'], resolve)
		},
		{
			//健康指标修改页面
			path: '/mjmdetail/mjkzb/mjkzbxg',
			name: 'mjkzbxg',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_jkzbxg.vue'], resolve)
		},
		{
			//管理类型详情
			path: '/Residents/mgllx/gllxxq/id=:id',
			name: 'gllxxq',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_gllxdetails.vue'], resolve)
		},
		{
			//搜索页
			path: '/Residents/msche',
			name: 'msche',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_search.vue'], resolve)
		},
		{
			//sfz正确时新增居民第一页
			path: '/Residents/adjm/jmzlone',
			name: 'jmzlone',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/maodh/mao_addjumin_one.vue'], resolve)
		},
		{
			//sfz正确时新增居民第二页
			path: '/Residents/adjm/jmzltwo',
			name: 'jmzltwo',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/maodh/mao_addjumin_two.vue'], resolve)
		},
		{
			//sfz正确时新增居民第三页
			path: '/Residents/adjm/jmzlthree',
			name: 'jmzlthree',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_addjumin_three.vue'], resolve)
		},
		{
			//添加居民选择性别
			path: '/Residents/adjm/jmzlone/msex',
			name: 'msex',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_addjmxzsex.vue'], resolve)
		},
		{
			//服务记录详情界面
			path: '/fwjldetail',
			name: 'fwjldetail',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_fwjlyemian.vue'], resolve)
		},
		{
			//服务记录详情服务项界面
			path: '/fwjldetail/fwxjm',
			name: 'mmmfwxjm',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_fuwjldetail.vue'], resolve)
		},
		{
			//添加服务记录居民列表界面
			path: '/fwjldetail/addxzjm',
			name: 'addxzjm',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_addfwjljmlis.vue'], resolve)
		},
		{
			//添加服务记录居民选择服务界面
			path: '/fwjldetail/addxzjm/addxzfw/fwjlxz=:id',
			name: 'maddxzfw',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_addfwjlxzfuwu.vue'], resolve)
		},
		{
			//添加居民中第一页的选择居住地址
			path: '/Residents/adjm/jmzlone/xzjzaddress',
			name: 'mxzjzaddress',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/mao_xuanzjzdz.vue'], resolve)
		},
		// {
		// 	//添加居民中第一页选择服务包
		// 	path: '/Residents/adjm/jmzlone/xzjmxzfwb',
		// 	name: 'xzjmxzfwb',
		// 	meta: {
		// 		keepAlive: true
		// 	},
		// 	component: resolve => require(['../components/maodh/mao_xzjmfwb.vue'], resolve)
		// },
		{
			//首页中的服务团队
			path: '/home/fwtdtema',
			name: 'mfwtdtema',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/maofuwutuandui/mao_fwteam.vue'], resolve)
		},
		{
			//首页中的服务团队详情
			path: '/home/fwtdtema/mfwcydetail',
			name: 'mfwcydetail',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/maofuwutuandui/mao_fwteandetail.vue'], resolve)
		},
		{
			//添加居民中第一页的服务包
			path: '/Residents/adjm/jmzlone/fuwbli',
			name: 'fuwbli',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/maodh/maolifuwubao/li_Qygl_detail_qqr_fwb.vue'], resolve)
		},
		
		
		
		//毛大哥
		//--------------------------------蒋锐的路由开始-----------------------
		{
			path:'/jia_signPeople',
			name: 'signPeople',
			component: resolve => require(['../components/jiang/jia_signPeople.vue'], resolve)
		},
		{
			path: '/jia_person',
			name: 'jia_person',
			meta:{
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_person'], resolve)
		},
		{
			path: '/jia_data',
			name: 'jia_data',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_personData'], resolve)
		},
		{
			path: '/jia_serPackage',
			name: 'jia_serPackage',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_serPackage'], resolve)
		},
		{
			path: '/jia_packageDetail/:id',
			name: 'jia_packageDetail',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/common/jia_packageDetail'], resolve)
		},
		{
			path:'/jia_workload',
			name: 'jia_workload',
			meta:{
				keepAlive:true
			},
			component: resolve => require(['../components/jiang/jia_workload'], resolve)
		},
		{
			path: '/jia_idCard',
			name:'jia_idCard',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/jiang/jia_idCard'], resolve)
		},
		{
			path: '/jia_bigphoto',
			name: 'jia_bigphoto',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_bigphoto'], resolve)
		},
		{
			path: '/jia_setter',
			name: 'jia_setter',
			meta: {
				keepAlive: true
			},
			component: jia_setter => require(['../components/jiang/jia_setter'], jia_setter)
		},
		{
			path: '/jia_phone',
			name: 'jia_phone',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_phone'], resolve)
		},
		{
			path: '/jia_short-message',
			name: 'jia_shortMessage',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_message'], resolve)
		},
		{
			path: '/jia_card',
			name: 'jia_card',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_card'], resolve)
		},
		{
			path: '/jia_bind',
			name: 'jia_bind',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_bind'], resolve)
		},
		{
			path: '/jia_cardBind',
			name: 'jia_cardBind',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_cardBind'], resolve)
		},
		{
			path: '/jia_about',
			name: 'jia_about',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_about'], resolve)
		},
		{
			path: '/jia_password',
			name: 'jia_password',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_password'], resolve)
		},
		{
			path: '/jia_mould',
			name:'jia_mould',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_mould'], resolve)
		},
		{
			path: '/jia_jksf',
			name: 'jia_jksf',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_jksf'], resolve)
		},
		{
			path: '/jia_sickArchive',
			name: 'jia_sickArchive',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_sickArchive'], resolve)
		},
		{
			path: '/jia_healthArchive',
			name: 'jia_healthArchive',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/jiang/jia_healthArchive'], resolve)
		},
		
		//张炳林
		{
			path: '/dbfw-1',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/zbldbfw/dbfw-1.vue'], resolve)
		},
		{
			path: '/dbfw-2',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/zbldbfw/dbfw-2.vue'], resolve)
		},
		{
			path: '/dbfw-3',
			meta: {
				keepAlive: true
			},
			component: resolve => require(['../components/zbldbfw/dbfw-3.vue'], resolve)
		},
		{
			path: '/dbfw-3-1',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/zbldbfw/dbfw-3-1.vue'], resolve)
		},
		{
			path: '/dbfw-4',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/zbldbfw/dbfw-4.vue'], resolve)
		},
		
		//宋思佳-通知居民
		{
			path: '/notifyResidents/chooseNotifyType',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/ssj_nr/choose_noticeType.vue'], resolve)
		},
		{
			path: '/notifyResidents/messageNotifyTemplate',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/ssj_nr/messageNotification_template.vue'], resolve)
		},
		{
			path: '/notifyResidents/selectResidents',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/ssj_nr/select_residents.vue'], resolve)
		},
		{
			path: '/notifyResidents/notifyRecord',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/ssj_nr/notification_record.vue'], resolve)
		},
		{
			path: '/notifyResidents/notifyDetails',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/ssj_nr/notification_details.vue'], resolve)
		},
		{
			path: '/notifyResidents/notifyPersonList/:id',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/ssj_nr/notify_personList.vue'], resolve)
		},
		{
			path: '/notifyResidents/searchResident',
			meta: {
				keepAlive: false
			},
			component: resolve => require(['../components/ssj_nr/search_resident.vue'], resolve)
		}
		
	]
})