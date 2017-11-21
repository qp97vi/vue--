import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index.vue'
import Newplay from '@/components/newplay.vue'
import Tel from '@/components/tel.vue'
import Seach from '@/components/seach.vue'
import Center from '@/components/center.vue'
import ShopCar from '@/components/shopCar.vue'
import Fushi from '@/components/fushi.vue'
import Shop from '@/components/shop.vue'
import Datalist from '@/components/datalist.vue'
import searchDatalist from '@/components/searchDatalist.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children:[
        {
          path:'fushi',
          component:Fushi
        },
        {
          path:'shop',
          component:Shop
        },
        {
          path:'/index',
          redirect:'/index/shop'
        }
      ]
    },
    {
      path:'/newplay',
      component: Newplay
    },
    {
      path:'/tel',
      component:Tel
    },
    {
      path:'/seach',
      component:Seach
    },
    {
      path:'/center',
      component:Center
    },
     {
        path:"/shopCar/:sss", //动态路由匹配
        component:ShopCar
    },
    {
      path:'/searchDatalist/:bbb',
      component:searchDatalist
    },
    {
      path:'*', //任何路径匹配到home页面
      redirect:'/index/shop'
    },
    {
      path:"/datalist/:aaa",
      component:Datalist
    }
  ]
})
