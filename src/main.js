// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'//引入路由
import { routes } from './index'
import axios from 'axios'
import {store} from './store/store.js'

Vue.use(VueRouter)
// 使用路由
axios.defaults.baseURL='https://wd2047331563ykfoaw.wilddogio.com/'
//或者 Vue.prototype.http=axios 使用时直接this.http.get()
//配置原型（在任何组件中都可以正常使用axios而不用import）
Vue.prototype.http = axios

const router=new VueRouter({
  routes,
  mode:'history',
  //这个功能只在支持 history.pushState 的浏览器中可用。
  scrollBehavior (to, from, savedPosition){
    //return { x:0, y:100 },
   // console.log(1);
   return  {selector:'btn'}
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
