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
      ],
      meta: {
        banner: "banner-news.jpg",
        breadcrumb: ["最新消息"]
      }
    },
    {
      //關於我們
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        banner: "banner-about.jpg",
        breadcrumb: ["關於我們"]
      }
    },
    {
      //線上購物
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue'),
      meta: {
        banner: "banner-shopping.jpg",
        breadcrumb: ["線上購物"]
      }
    },
    {
      //營業據點
      path: '/location',
      name: 'location',
      component: () => import('../views/Location.vue'),
      meta: {
        banner: "banner-location.jpg",
        breadcrumb: ["營業據點"]
      }
    },
    {
      //購物車
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: () => import('../views/ShoppingCart.vue'),
      meta: {
        banner: "banner-cart.jpg",
        breadcrumb: ["購物車"]
      }
    },
    {
      //會員專區(登入頁面)
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        banner: "banner-login.jpg",
        breadcrumb: ["會員登入"]
      }
    },
    {
      //忘記密碼
      path: '/forgetPW',
      name: 'forgetPW',
      component: () => import('../views/ForgetPW.vue'),
      meta: {
        banner: "banner-login.jpg",
        breadcrumb: [
          "會員專區", "忘記密碼"
        ]
      }
    },
    {
      //會員專區
      path: '/memberCenter',
      name: 'memberCenter',
      component: () => import('../views/MemberCenter.vue'),
      meta: {
        banner: "banner-member.jpg",
      }
    },
  ]
})

export default router
