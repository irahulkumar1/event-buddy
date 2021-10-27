import Vue from 'vue'
import Vuex from 'vuex'

import events from './modules/events'
import categories from './modules/categories'
import threads from './modules/threads'
import auth from './modules/auth'

// import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        events,
        categories,
        threads,
        auth
    },
    mutations: {
        setItems(state, { resource, items }) {
            state[resource].items = items
        },
        setItem(state, { resource, item }) {
            state[resource].item = item
        }

    }


})
export default store;