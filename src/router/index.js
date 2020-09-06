// const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue') // 懒加载

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    // props: (route) => ({ id: route.params.id }),
    props: true, // 将所有params参数转换成标签属性传递给子路由组件
    meta: {
      hasFoot: true, // 设置是否显示底部导航
      title: '标题', // 设置标题文字
    },
    // children: [
    //   {
    //     path: 'page1',
    //     component: Page1,
    //   },
    // ],
  },
  {
    path: '/about',
    component: About,
  },
  {
    // 默认跳转
    path: '*',
    redirect: '/home',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
