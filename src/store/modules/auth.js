import axios from 'axios'

import axiosInstance from '@/services/axios'
import Vue from 'vue'



export default {
    namespaced: true,
    state: {
        user: null,
        isAuthResolved: false,


    },
    getters: {
        authUser(state) {
            return state.user || null
        },
        isAuthenticated(state) {
            return !!state.user
        },
        isEventOwner: (state) => (eventCreatorId) => {
            if (!state.user) return false
            return state.user._id === eventCreatorId
        },
        isMember: (state) => (eventId) => {
            return state.user &&
                state.user['joinedEvents'] &&
                state.user['joinedEvents'].includes(eventId)
        }
    },
    actions: {
        loginUser({ commit }, userData) {
            return axios.post('/api/v1/users/login', userData)
                .then(res => {
                    console.log(res.data)
                    const user = res.data

                    localStorage.setItem('event-jwt', user.token)
                    commit('setAuthUser', user)
                })
        },
        registerUser(context, userData) {
            return axios.post('/api/v1/users/register', userData)
        },


        activateUser(_, hash) {
            return axios.patch(`/api/v1/users/${hash}`)
        },

        logout({ commit }) {

            return new Promise((resolve) => {
                localStorage.removeItem('event-jwt')
                commit('setAuthUser', null)
                resolve(true)
            })
        },


        getAuthUser({ commit, getters }) {
            const authUser = getters['authUser']
            // const token = localStorage.getItem('event-jwt')
            // const isTokenValid = checkTokenValidity(token)

            if (authUser) { return Promise.resolve(authUser) }

            const config = {
                headers: {
                    'Cache-Control': 'no-cache',
                    // 'authorization': `Bearer ${token}`
                }
            }

            return axiosInstance.get('/api/v1/users/me', config)
                .then((res) => {
                    const user = res.data
                    // console.log('asasaaas', user)
                    localStorage.setItem('event-jwt', user.token)
                    commit('setAuthUser', user)
                    commit('setAuthState', true)
                    return user
                })
                .catch(err => {
                    // console.log(err)
                    commit('setAuthUser', null)
                    commit('setAuthState', true)
                    return err
                })
        }

    },
    addEventToAuthUser({ commit, state, }, eventId) {
        const userEvents = [...state.user['joinedEvents'], eventId]
        commit('setEventsToAutheUser', userEvents)

    },
    removeEventFromAuthUser({ commit, state }, eventId) {
        const userEventsIds = [...state.user['joinedEvents']]
        const index = userEventsIds.findIndex(userEventId => userEventId === eventId)

        userEventsIds.splice(index, 1)
        commit('setEventsToAuthUser', userEventsIds)
    },
    mutations: {

        setAuthUser(state, user) {
            state.user = user
            console.log("setAuth", state)
            return state
        },
        setAuthState(state, authState) {
            return state.isAuthResolved = authState
        },
        setEventsToAuthUser(state, events) {
            return Vue.set(state.user, 'joinedEvents', events)
        }
    }
}
