import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import('@/views/recommend/recommend'/* webpackChunkName: "recommend" */)
const Singer = () => import('@/views/singer/singer'/* webpackChunkName: "singer" */)
const TopList = () => import('@/views/TopList/TopList'/* webpackChunkName: "top-list" */)
const Search = () => import('@/views/search/search'/* webpackChunkName: "search" */)
const SingerDetail = () => import('../views/SingerDetail/SingerDetail')
const AlBum = () => import('../views/album/album')
const TopDetail = () => import('../views/topDetail/top-detail')
const UseCenter = () => import('../views/user-center/user-center')
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        component: AlBum
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/singer',
    name: 'singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/toplist',
    name: 'toplist',
    component: TopList,
    children:[
      {
        path:':id',
        name:'TopDetail',
        component: TopDetail
      }
    ]
  },
  {
    path:'/usecenter',
    components:{
      user:UseCenter
    }
  }
  // {
  //   path: '/about',
  //    name: 'About',
  //    // route level code-splitting
  //    // this generates a separate chunk (about.[hash].js) for this route
  //    // which is lazy-loaded when the route is visited.
  //    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
