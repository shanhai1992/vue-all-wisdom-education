import Vue from 'vue'
import Router from 'vue-router'
/*一级路由*/
import Index from '@/pages/index/index'
import About from '@/pages/about/index'

Vue.use(Router);
const router =  [
  {
    path: '*',      //没有配置的路径
    redirect: '/'   //默认跳转首页
  },
  {
    path: '/',
    component:Index,
  },
  {
    path:'/about',      //一级路由
    component:About,
  }

];
export default new Router({
  routes: router,
  mode:"history",
  /*滚动行为*/
  scrollBehavior(to,from,savedPosition){
    if (savedPosition){
      return savedPosition;       //按后退键，滚动条停留在上一次浏览的位置
    } else {
      return{x:0, y:60}       //路由跳转时，滚动条的坐标位置
    }
    // return {selector:'.btn'}     //滚动条浏览在指定目标位置
  }
})