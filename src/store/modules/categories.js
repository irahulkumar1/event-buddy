import axios from 'axios'

const categories = {
    namespaced: true,
    state: {
        items: []
    },
    getters: {

    },
    actions: {
        fetchCategories({ state, commit }) {
            return axios.get('/api/v1/categories')
                .then(res => {
                    const categories = res.data
                    commit('setItems', { resource: 'categories', items: categories }, { root: true })
                    return state.categories
                })
        },
    },
    mutations: {

    }
}

export default categories