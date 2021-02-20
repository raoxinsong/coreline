
import Vue from 'vue';
//import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
// import Raven from 'raven-js';
// import RavenVue from 'raven-js/plugins/vue';

import axios from './utils/axios.js'
Vue.prototype.axios = axios;
import routes from './routers';
import store from './vuex/store';
//Vue.use(VueResource);
Vue.use(VueRouter);
//$.ajaxSettings.crossDomain = true;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI,{ locale });

 // import $ from 'webpack-zepto';
 // //注册
 // window.$ = $;
 
// import element from './element_ui.js'
// import 'element-ui/lib/theme-chalk/index.css'

// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'
// // 设置语言
// locale.use(lang)
// Vue.use(element)
 
//Vue.prototype.$ELEMENT = {locale};
import './assets/bluetheme.less'

const router = new VueRouter({
   // mode: 'history',
    routes
})
import App from './views/App'
//if (process.env.NODE_ENV !== 'development') {
  router.beforeEach((to, from, next) => {
	// console.log('to',to)
	// console.log('from',from)
	// 判断404
	let is404 = to.matched.length < 1
	if(is404){
		next({path: '/404'})
		return false
	}
	if (store.getters.token && store.getters.token !=='undefined') {
		 next()
		//权限验证
	}else{
		 next()
	}
  });
//}


let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});