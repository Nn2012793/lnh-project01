import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Index from '@/components'
import Home from '@/views/home'
import Comment from '@/views/home/comment'
import Content from '@/views/home/content'
import Fans from '@/views/home/fans'
import Publish from '@/views/home/publish'
import Sucai from '@/views/home/sucai'
import Myself from '@/views/home/myself'

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
    }
  ]
})

export default router
