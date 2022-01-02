const mutations = {
    storeLoggedInUser(state, user) {
        return state.user = { ...user };
    },
    addToasterMessage(state, message) {
        return state.toasterMessage = { ...message };
    }
}

export default mutations;