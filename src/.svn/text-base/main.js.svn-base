import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import router from './router';
import "babel-polyfill";
import store from './store/'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
//状态管理
Vue.use(Vuex)
Vue.use(MintUI)
window.meventBus = new Vue();
	//创建和挂载根实例。
new Vue({
	data: {},
	router,
	store,
	render: h => h(App),
}).$mount('#app');