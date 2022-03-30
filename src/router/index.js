import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import DashBoard from '../views/dashboard/dashBoard.vue';
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
    children: [
      {
        path: '',
        redirect: 'main'
      },
      {
        path:'main',
        component: () => import('../views/dashboard/mainDashboard.vue')
      },
      {
        path:'market',
        component:() => import('../views/dashboard/marketPage.vue')
      },
      {
        path:'trade',
        component:() => import('../views/dashboard/tradePage.vue')
      },
      {
        path:'assets',
        component:() => import('../views/dashboard/assetsPage.vue')
      },
      {
        path:'profile',
        component:() => import('../views/dashboard/profilePage.vue')
      }
    ]
  },
  {
    path: '/sendPage',
    component: ()=>import('@/views/dashboard/sendPage.vue')
  },
  {
    path: '/receivePage',
    name: 'receivePage',
    component: ()=>import('@/views/dashboard/ReceivePage')
  },
  {
    path: '/coinBtc',
    name: 'coinBtc',
    component: ()=>import('@/views/coinBtc')
  },
  {
    path: '/investment',
    name: 'investment',
    component: ()=>import('@/views/investmentPage')
  },
  {
    path: '/sharePage',
    name: 'sharePage',
    component: ()=>import('@/views/invite/sharePage')
  },
  {
    path: '/teamPage',
    name: 'teamPage',
    component: ()=>import('@/views/invite/TeamPage')
  },
  {
    path: '/NftiToken',
    name: 'NftiToken',
    component: ()=>import('@/views/Nfti/NftiToken.vue')
  },
  {
    path: '/investment_1',
    name: 'investment_1',
    component: ()=>import('@/views/Nfti/investMent_1')
  },
  {
    path: '/investment_2',
    name: 'investment_2',
    component: ()=>import('@/views/Nfti/investMent_2')
  },
  {
    path: '/BuyAccount',
    name: 'BuyAccount',
    component: ()=>import('@/views/BuyAccount/investMent')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
