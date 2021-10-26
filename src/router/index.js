import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import EventDetails from "@/pages/EventDetail.vue"
import EventFind from "@/pages/EventFind.vue"
import PageNotFound from "@/components/shared/PageNotFound.vue"
import LoginPage from "@/pages/LoginPage.vue"
import RegisterPage from "@/pages/RegisterPage.vue"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: HomePage,
            component: HomePage
        },
        {
            path: '/login',
            name: LoginPage,
            component: LoginPage
        },
        {
            path: '/singup',
            name: RegisterPage,
            component: RegisterPage
        },
        {
            path: '/find',
            name: EventFind,
            component: EventFind
        },
        {
            path: '/events/:id',
            name: EventDetails,
            component: EventDetails
        },
        {
            path: '*',
            name: PageNotFound,
            component: PageNotFound
        }
    ]
})
export default router