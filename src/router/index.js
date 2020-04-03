import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//使用懒加载模式
const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
//注册vue路由
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
      component: About
  }
];

const router = new VueRouter({
    //设置为history模式
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
