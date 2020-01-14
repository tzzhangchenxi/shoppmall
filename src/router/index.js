import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from 'views/home/Home.vue'
import Category from 'views/Category.vue'
import ShopCar from 'views/Shopcar.vue'
import ProFile from 'views/Profile.vue'
const routes = [
 {
	 path:'',
	 redirect: '/home'
 },
 {
 	 path:'/home',
 	 component:Home
 },
 {
 	 path:'/category',
 	 component:Category
 },
 {
 	 path:'/shopcar',
 	 component:ShopCar
 },
 {
 	 path:'/profile',
 	 component:ProFile
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
