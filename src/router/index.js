import Vue from 'vue'
import VueRouter from 'vue-router'
import BeritaView from '../views/BeritaView.vue'
import detailBerita from '../views/detailBerita.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'berita',
    component: BeritaView
  },
  {
    path: '/:title',
    name: 'detail',
    component: detailBerita
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
