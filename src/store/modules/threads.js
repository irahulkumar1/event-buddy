import axios from 'axios'

const threads = {
    namespaced: true,
    state: {
        items: []
    },
    getters: {

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

export default threads