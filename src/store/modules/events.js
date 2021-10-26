import axios from 'axios'

const event = {
    namespaced: true,
    state: {
        items: [],
        item: {}
    },
    getters: {

    },
    actions: {
        fetchEvents({ state, commit }) {
            return axios.get("/api/v1/events").then((res) => {
                commit('setItems', { resource: 'events', items: [] })
                const events = res.data
                commit('setItems', { resource: 'events', items: events }, { root: true })
                return state.event
                // this.events = res.data;
                // console.log(this.events);
            });
        }, fetchEventById({ state, commit }, eventId) {
            commit('setItem', { resource: 'events', item: {} })
            return axios.get(`/api/v1/events/${eventId}`)
                .then(res => {
                    const event = res.data
                    commit('setItem', { resource: 'events', item: event }, { root: true })
                    return state.event
                })
        },
    },
    mutations: {

    }
}

export default event