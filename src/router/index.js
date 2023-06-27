import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from "@/views/Inicio.vue"
import Personajes from "@/views/Personajes.vue"
import Personaje from "@/views/Personaje.vue"
import Contacto from "@/views/Contacto.vue"
import NotFound from "@/views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/personajes',
    name: 'personajes',
    component: Personajes,
    alias:['/people','/characters']
  },
  {
    path: '/personajes/:id',
    component: Personaje,
    props:true,
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto,
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
