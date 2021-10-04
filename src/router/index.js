import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collection from '../views/Collection.vue'
import Ring from '../views/Ring.vue'
import Earing from '../views/Earing.vue'
import Necklace from '../views/Necklace.vue'
import Signiture from '../views/Signiture.vue'
import Bestpoke from '../views/Bestpoke.vue'
import Product from '../views/Product.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:"Home",
    component:Home
  },
  {
    path:'/home/signiture',
    name:"Signiture",
    component:Signiture
  },
  {
    path:'/home/collection',
    name:"Collection",
    component:Collection
  },
  {
    path:'/home/earing',
    name:"Earing",
    component:Earing
  },
  {
    path:'/home/ring',
    name:"Ring",
    component:Ring
  },
  {
    path:'/home/necklace',
    name:"Necklace",
    component:Necklace
  },
  {
    path:'/home/bestpoke',
    name:"Bestpoke",
    component:Bestpoke
  },
  {
    path:'/home/product',
    name:"Product",
    component:Product
  }
]

const router = new VueRouter({
  routes
})

export default router
