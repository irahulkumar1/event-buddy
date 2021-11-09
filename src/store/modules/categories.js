import axios from 'axios'

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {

    },
    actions: {
        async fetchCategories({ state, commit }) {
            return await axios.get('/api/v1/categories')
                .then(res => {
                    // console.log()
                    const categories = res.data
                    commit('setItems', { resource: 'categories', items: categories }, { root: true })
                    return state.categories
                })
        },
    },

}
