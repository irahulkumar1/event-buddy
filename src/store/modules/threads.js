import axios from 'axios'

export default {
    namespaced: true,
    state: {
        items: []
    },

    actions: {
        fetchThreads({ state, commit }, eventId) {
            return axios.get(`/api/v1/threads?eventId=${eventId}`)
                .then(res => {
                    const threads = res.data
                    commit('setItems', { resource: 'threads', items: threads }, { root: true })
                    return state.threads
                })
        }
    },
    mutations: {

    }
}

