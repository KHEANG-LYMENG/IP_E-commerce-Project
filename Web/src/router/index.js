import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/New.vue')
    },
    {
      path: '/bestsell',
      name: 'bestsell',
      component: () => import('../views/BestSell.vue')
    },
    {
      path: '/discount',
      name: 'discount',
      component: () => import('../views/Discount.vue')
    },
    {
      path: '/products/:id',
      name: 'productdetail',
      component: () => import('../components/ProductDetail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/cart/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutForm.vue')
    },
    {
      path: '/cart/checkout/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingMethod.vue')
    },
    {
      path: '/cart/checkout/payment',
      name: 'payment',
      component: () => import('../views/Payment.vue')
    },
   
    {
      path: '/*',
      component: NotFoundPage,
    },
  ]
})

export default router
