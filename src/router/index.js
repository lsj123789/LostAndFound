import Vue from 'vue'
import Router from 'vue-router'
import Lost from '@/components/lost'
import Individual from '@/components/individual'
import Publish from '@/components/publish'
import AboutUs from '@/components/aboutUs'
import FirstPage from '@/components/firstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: FirstPage,
    },
    {
      path: '/lost',//path配置路由的路径
      name: 'lost',
      component: Lost, //component配置了映射的组件
    },
    {
      path: '/individual',
      component: Individual,
    },
    {
      path: '/aboutUs',
      component: AboutUs,
    },
    {
      path: '/publish',
      component: Publish,
    },
  ]
})
