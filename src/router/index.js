import Vue from 'vue'
import VueRouter from 'vue-router'
//import Inicio from "@/views/Inicio.vue"
//import Personajes from "@/views/Personajes.vue"
//import Personaje from "@/views/Personaje.vue"
//import Contacto from "@/views/Contacto.vue"
import NotFound from "@/views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    //component: Inicio
    component: () => import(/* webpackChunkName: "Inicio" */ '@/views/Inicio.vue'),
  },
  {
    path: '/personajes',
    name: 'personajes',
    //component: Personajes,
    alias:['/people','/characters'],
    component: () => import(/* webpackChunkName: "Personajes" */ '@/views/Personajes.vue'),
  },
  {
    path: '/personajes/:id',
    //component: Personaje,
    props:true,
    component: () => import(/* webpackChunkName: "Personaje" */ '@/views/Personaje.vue'),
  },
  {
    path: '/contacto',
    name: 'contacto',
    //component: Contacto,
    component: () => import(/* webpackChunkName: "Contacto" */ '@/views/Contacto.vue'),
  },
  {
    path:'*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
