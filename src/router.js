import Vue from 'vue'
import Router from 'vue-router'
import GunSkins from './views/GunSkins.vue'
import NewGunSkin from './views/NewGunSkin.vue'
import ShowGunSkin from './views/ShowGunSkin.vue'
import EditGunSkin from './views/EditGunSkin.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/gunSkins'
        },
        {
            path: '/gunSkins',
            name: 'gun-skins',
            component: GunSkins
        },
        {
            path: '/gunSkins/new',
            name: 'new',
            component: NewGunSkin
        },
        {
            path: '/gunSkins/:id',
            name: 'show',
            component: ShowGunSkin
        },
        {
            path: '/gunSkins/:id/edit',
            name: 'edit',
            component: EditGunSkin
        }
    ]
})