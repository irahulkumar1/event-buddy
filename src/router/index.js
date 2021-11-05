import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';

import HomePage from '@/pages/HomePage.vue'
import EventDetails from "@/pages/EventDetail.vue"
import EventFind from "@/pages/EventFind.vue"
import LoginPage from "@/pages/LoginPage.vue"
import RegisterPage from "@/pages/RegisterPage.vue"
import SecretPage from "@/pages/SecretPage.vue"
import PageEventCreate from "@/pages/PageEventCreate.vue"
import PageNotFound from "@/components/shared/PageNotFound.vue"
import PageNotAuth from "@/pages/PageNotAuthenticated.vue"
// import { auth } from 'firebase-admin';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'HomePage',
            path: '/',
            component: HomePage
        },
        {
            name: 'LoginPage',
            path: '/login',
            component: LoginPage,
            meta: { onlyGuestUser: true }
        },
        {
            name: 'RegisterPage',
            path: '/signup',
            component: RegisterPage,
            meta: { onlyGuestUser: true }
        },
        {

            path: '/find',
            component: EventFind
        },
        {
            name: 'PageEventCreate',
            path: '/events/new',
            component: PageEventCreate,
            meta: { onlyAuthUser: true }

        },
        {
            name: 'SecretPage',
            path: '/events/secret',
            component: SecretPage,
            meta: { onlyAuthUser: true }

        },
        {

            path: '/events/:id',
            component: EventDetails
        },
        {
            name: 'PageNotAuth',
            path: '/401',
            component: PageNotAuth
        },
        {

            path: '*',
            component: PageNotFound
        }
    ]
})
router.beforeEach((to, from, next) => {
    store.dispatch('auth/getAuthUser')
        .then(() => {
            const isAuthenticated = store.getters['auth/isAuthenticated']

            if (to.meta.onlyAuthUser) {
                if (isAuthenticated) {
                    next()
                } else {
                    next({ name: 'PageNotAuth' })
                }
            } else if (to.meta.onlyGuestUser) {
                if (isAuthenticated) {
                    next({ name: 'HomePage' })
                } else {
                    next()
                }
            } else {
                next()
            }
        })
})


export default router