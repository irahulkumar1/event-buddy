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
            component: HomePage
        },
        {

            path: '/login',
            component: LoginPage
        },
        {

            path: '/singup',
            component: RegisterPage
        },
        {

            path: '/find',
            component: EventFind
        },
        {

            path: '/events/:id',
            component: EventDetails
        },
        {

            path: '*',
            component: PageNotFound
        }
    ]
})
export default router