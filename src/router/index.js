import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../pages/Index'
// init

Vue.use(VueRouter);
export default new VueRouter({
	//https://router.vuejs.org/zh-cn/api/options.html
	// 使用 HTML 5 模式
	//mode: 'history',
	// base: __dirname,
	// routre 表
	
	routes: [

		{
			path: '/',
			name: 'Index',
			component: Index,
		},

		
		// router 轉址
		{ path: '/*', redirect: '/' },
	],
});
