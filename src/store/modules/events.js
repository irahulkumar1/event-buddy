import axios from 'axios'
import axiosInstance from '@/services/axios.js';

export default {
    namespaced: true,
    state: {
        items: [],
        item: {}
    },

    actions: {
        fetchEvents({ state, commit }) {
            commit('setItems', { resource: 'events', items: [] }, { root: true })
            return axios.get("/api/v1/events").then((res) => {
                const events = res.data
                commit('setItems', { resource: 'events', items: events }, { root: true })
                return state.items
                // this.events = res.data;
                // console.log(this.events);
            });
        }, fetchEventById({ state, commit }, eventId) {
            commit('setItem', { resource: 'events', item: {} }, { root: true })
            return axios.get(`/api/v1/events/${eventId}`)
                .then(res => {
                    const event = res.data
                    commit('setItem', { resource: 'events', item: event }, { root: true })
                    return state.item
                })
        },
        createEvent({ rootState }, eventToCreate) {
            eventToCreate.eventCreator = rootState.auth.user
            eventToCreate.processedLocation = eventToCreate.location.toLowerCase().replace(/[\s,]+/g, '').trim()

            return axiosInstance.post('/api/v1/events', eventToCreate)
                .then(res => res.data)
        }
        // createEvent() {
        //     console.log(eventToCreate)
        // }
    },


}

