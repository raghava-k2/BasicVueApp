import { user } from '../api'

const handleError = (commit, data) => {
    if (typeof data === 'string') {
        commit('addToasterMessage', { severity: 'error', summary: 'Server Error', detail: data });
    } else {
        const { errors } = data;
        commit('addToasterMessage', { severity: 'error', summary: errors[0].type, detail: errors[0].message });
    }
}

const actions = {
    login({ commit }, userObj) {
        user.login(userObj).then(() => {
            commit('isUserLoggedIn', true);
        }).catch(({ response: { data } }) => {
            handleError(commit, data);
        });
    },
    signup({ commit }, userObj) {
        user.signup(userObj).then(() => {
            const { name: username, password } = userObj;
            this.dispatch('login', { username, password });
        }).catch(({ response: { data } }) => {
            handleError(commit, data);
        });
    }
}

export default actions;