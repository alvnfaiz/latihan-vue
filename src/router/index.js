import Vue from 'vue'
import VueRouter from 'vue-router'
import BeritaView from '../views/beritaView.vue'
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


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
