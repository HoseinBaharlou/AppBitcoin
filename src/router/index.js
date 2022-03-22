import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import DashBoard from "@/views/dashBoard";
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/otp',
    name: 'OTP',
    component: () => import('../views/OTP.vue')
  },
  {
    path: '/fingerPoint',
    name: 'FingerPoint',
    component: () => import('../views/FingerPoint.vue')
  },
  {
    path: '/passwordRecovery',
    name: 'PasswordRecovery',
    component: () => import('../views/PasswordRecovery.vue')
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('../views/verify.vue')
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import('../views/ResetPassword.vue')
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    component: () => import('../views/CreateAccount.vue')
  },
  {
    path: '/dashboard/',
    component: DashBoard,
    children:[
      {
        path: 'main',
        component:()=>import('@/views/mainDashboard.vue')
      }
    ]
  },
  {
    path: '/sendPage',
    component: ()=>import('@/views/sendPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
