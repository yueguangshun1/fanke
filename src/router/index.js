import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/modules/Home"
import Class from "@/modules/Class"
import Custom from "@/modules/Custom"
import Cart from "@/modules/Cart"
import User from "@/modules/User"
import List from "@/modules/List"
import Detail from "@/modules/Detail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/custom',
      name: 'custom',
      component: Custom
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
