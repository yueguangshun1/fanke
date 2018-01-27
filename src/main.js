// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import fkHeader from '@/components/Header'
import fkContent from '@/components/Content'
import  fkFooter from '@/components/Footer'

// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//详情页的分栏效果

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//全局组件注册
Vue.component("fk-header",fkHeader)
Vue.component("fk-content",fkContent)
Vue.component("fk-footer",fkFooter)

Vue.config.productionTip = false


/* 全局设置插件 ,给Vue原型添加属性 */
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
