import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';

// 自訂util
//import util from './util';
//Vue.use(util);

// ElementUI
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI)



new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
});
