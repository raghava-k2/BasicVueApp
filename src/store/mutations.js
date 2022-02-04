const mutations = {
    storeLoggedInUser(state, user) {
        return state.user = { ...user };
    },
    addToasterMessage(state, message) {
        return state.toasterMessage = { ...message };
    },
    isUserLoggedIn(state, flag) {
        return state.isUserLoggedIn = flag;
    },
    blockUserAppLevel(state, flag) {
        return state.blockUserAppLevel = flag;
    }
}

export default mutations;