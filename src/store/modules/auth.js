const auth = {
    namespaced: true,
    state: {},
    actions: {
        loginUser(context, userData) {
            console.log(userData)
        },
        registerUser(context, userData) {
            console.log(userData)
        }

    }
}
export default auth