
import axios from 'axios'
const auth = {
    namespaced: true,
    state: {
        user: null

    },
    getters: {
        authUser(state) {
            return state.user || null
        },
        isAuthenticated(state) {
            return !!state.user
        }
    },
    actions: {
        loginUser({ commit }, userData) {
            return axios.post('/api/v1/users/login', userData)
                .then(res => {
                    const user = res.data
                    commit('setAuthUser', user)
                })
        },
        registerUser(context, userData) {
            return axios.post('/api/v1/users/register', userData)
        }

    },
    mutations: {
        setAuthUser(state, user) {
            return state.user = user
        }
    }
}
export default auth