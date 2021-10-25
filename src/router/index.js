import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import EventDetails from "@/pages/EventDetail.vue"
import EventFind from "@/pages/EventFind.vue"
import PageNotFound from "@/components/shared/PageNotFound.vue"

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