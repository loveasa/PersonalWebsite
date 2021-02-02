import Vue from 'vue'
import VueRouter from 'vue-router'
import Covers from '../views/covers.vue'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import BlogDetail from '../views/blogDetail.vue'
import Order from '../views/order.vue'
import Message from '../views/message.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Covers',
    component: Covers
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
