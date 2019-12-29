import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'

import Index from '@/components'

import Home from '@/views/home'
import Comment from '@/views/comment'
import Content from '@/views/content'
import Fans from '@/views/fans'
import Publish from '@/views/publish'
import Sucai from '@/views/sucai'
import Myself from '@/views/myself'
import Notfound from '@/views/home/404'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/comment',
          component: Comment
        },
        {
          path: '/content',
          component: Content
        },
        {
          path: '/fans',
          component: Fans
        },
        {
          path: '/myself',
          component: Myself
        },
        {
          path: '/sucai',
          component: Sucai
        },
        {
          path: '/publish',
          component: Publish
        }
      ]
    },
    {
      path: '*',
      component: Notfound
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to 去哪里
  // from 来自哪里
  // next 放行|指定跳转路由
  // - 判断如果是除去登录页面外其他的路由且当前没有登录，拦截到登录。
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  // - 其他情况都是放行。
  next()
})

export default router
