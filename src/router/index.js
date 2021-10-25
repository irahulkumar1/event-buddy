import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import EventDetails from "@/pages/EventDetail.vue"

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
            path: '/events/:id',
            name: EventDetails,
            component: EventDetails
        }
    ]
})
export default router