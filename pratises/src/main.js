// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import VueResource from 'vue-resource'  //引入vue-resource json
import VueRouter from 'vue-router'
import Routes from './router'  //引入路由router.js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import 'jquery'
Vue.config.productionTip = false
//Vue.use(VueResource)  //使用vue-resource
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$echarts=echarts;
/* eslint-disable no-new */
//自定义指令
Vue.directive('rainbow',{
	bind(el,binding,vnode){
		//el.style.color="#"+Math.random().toString(16).slice(2,8);
		el.style.color="#409EFF";
	}
})

//变大写
Vue.filter("to-uppercase",function(value){
	return value.toUpperCase();
})

///显示的内容
Vue.filter("sinppt",function(value){
return value.slice(0,20)+"...";
})

//创建路由
const routerto=new VueRouter({
	routes:Routes,
mode:"history"  //去掉“#”号
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:routerto

})
