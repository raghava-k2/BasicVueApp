const mutations = {
    storeLoggedInUser(state, user) {
        return state.user = { ...user };
    },
    addToasterMessage(state, message) {
        return state.toasterMessage = { ...message };
    },
    isUserLoggedIn(state, flag) {
        return state.isUserLoggedIn = flag;
    }
}

export default mutations;