import axios from 'axios'
import axiosInstance from '@/services/axios.js';
import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        items: [],
        item: {}
    },

    actions: {
        async fetchEvents({ state, commit }) {
            // commit('setItems', { resource: 'events', items: [] }, { root: true })
            return await axios.get("/api/v1/events").then((res) => {
                const events = res.data
                console.log("events...... ", events);

                commit('setItems', { resource: 'events', items: events }, { root: true })
                return state.items
                // this.events = res.data;
            });
        },
        async fetchEventById({ state, commit }, eventId) {
            commit('setItem', { resource: 'events', item: {} }, { root: true })
            return await axios.get(`/api/v1/events/${eventId}`)
                .then(res => {
                    const event = res.data
                    console.log('event detail', event)
                    // console.log('asdfasf', event)
                    commit('setItem', { resource: 'events', item: event }, { root: true })
                    return state.item
                })
        },
        createEvent({ rootState }, eventToCreate) {
            console.log('hello root', rootState.auth.user)
            eventToCreate.eventCreator = rootState.auth.user._id
            // eventToCreate.processedLocation = eventToCreate.location.toLowerCase().replace(/[\s,]+/g, '').trim()
            console.log('eventCreator', eventToCreate)
            return axiosInstance.post('/api/v1/events', eventToCreate)

                .then(res => res.data)
        },

        joinEvent({ state, rootState, commit, dispatch }, eventId) {
            const user = rootState.auth.user

            return axiosInstance.post(`/api/v1/events/${eventId}/join`)
                .then(() => {

                    dispatch('auth/addEventToAuthUser', eventId, { root: true })

                    const joinedPeople = state.item.joinedPeople
                    commit('addUsersToEvent', [...joinedPeople, user])
                    return true
                })
        },
        leaveEvent({ state, rootState, commit, dispatch }, eventId) {
            const user = rootState.auth.user

            return axiosInstance.post(`/api/v1/events/${eventId}/leave`)
                .then(() => {
                    dispatch('auth/removeEventFromAuthUser', eventId, { root: true })

                    const joinedPeople = state.item.joinedPeople
                    const index = joinedPeople.findIndex(jUser => jUser.id === user._id)
                    joinedPeople.splice(index, 1)
                    commit('addUsersToEvent', joinedPeople)
                })
        }

    },
    mutations: {
        addUsersToEvent(state, joinedPeople) {
            Vue.set(state.item, 'joinedPeople', joinedPeople)
        }
    }


}

