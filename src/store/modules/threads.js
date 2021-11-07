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
                    console.log("threads", res.data)
                    const threads = res.data
                    commit('setItems', { resource: 'threads', items: threads }, { root: true })
                    return state.threads
                })
        },
        async postThread(title, titleData) {
            // console.log('threads post', title, titleData);
            const thread = {}
            thread.title = titleData

            // const xyz = 
            // console.log("xyz", xyz)
            // thread.event = eventId
            return await axiosInstance.post("/api/v1/threads", thread)
        }
    },

}

