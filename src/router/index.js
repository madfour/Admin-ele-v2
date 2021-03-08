import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入基本布局
import BasicLayout from '@/layout/BasicLayout.vue';

Vue.use(VueRouter);

// 无权限限制的路由
export const defaultRoutes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { title: 'home', icon: '' }
      }
    ]
  },
  {
    path: '/about',
    component: BasicLayout,
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: { title: 'about', icon: '' }
      }
    ]
  }
];

export default new VueRouter({
  mode: 'history', // 默认为'hash'模式
  base: process.env.BASE_URL, // 添加跟目录,对应服务器部署子目录
  routes: defaultRoutes
})
;
