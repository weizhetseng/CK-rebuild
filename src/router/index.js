import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      //404頁面
      path: '/error',
      name: 'error',
      component: () => import('../views/Error.vue')
    },
    {
      //最新消息
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
      children: [
        {
          path: 'newsDetail/:id',
          component: () => import('../views/NewsDetail.vue')
        },
      ]
    },
    {
      //關於我們
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      //線上購物
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue')
    },
    {
      //營業據點
      path: '/location',
      name: 'location',
      component: () => import('../views/Location.vue')
    },
    {
      //購物車
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: () => import('../views/ShoppingCart.vue')
    },
    {
      //會員專區
      path: '/memberCenter',
      name: 'memberCenter',
      component: () => import('../views/MemberCenter.vue')
    },
  ]
})

export default router
