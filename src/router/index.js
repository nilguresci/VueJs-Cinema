import Vue from 'vue'
import VueRouter from 'vue-router'
import Kitaplar from '../views/Kitaplar.vue'
import Home from '../views/Home.vue'
import KitapEkle from '../views/KitapEkle.vue'
import KitapSil from '../views/KitapSil.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/kitaplar',
        name: 'Kitaplar',
        component: Kitaplar
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/kitapekle',
        name: 'KitapEkle',
        component: KitapEkle
    },
    {
        path: '/kitapsil',
        name: 'KitapSil',
        component: KitapSil
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router