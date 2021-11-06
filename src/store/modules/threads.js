import axios from 'axios'
import axiosInstance from "@/services/axios"

export default {
    namespaced: true,
    state: {
        items: []
    },

    actions: {
        async fetchThreads({ state, commit }, eventId) {
            return await axios.get(`/api/v1/threads?eventId=${eventId}`)
                .then(res => {
                    const threads = res.data
                    commit('setItems', { resource: 'threads', items: threads }, { root: true })
                    return state.threads
                })
        },
        async postThread(title, abcd) {
            console.log('threads post', title, abcd);
            const thread = {}
            thread.title = abcd
            const xyz = await axiosInstance.post("/api/v1/threads", thread)
            console.log(xyz)
            // thread.event = eventId
            return xyz
        }
    },

}

