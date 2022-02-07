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
        commit('blockUserAppLevel', true);
        user.login(userObj).then(() => {
            commit('blockUserAppLevel', false);
            commit('isUserLoggedIn', true);
        }).catch(({ response: { data } }) => {
            commit('blockUserAppLevel', false);
            handleError(commit, data);
        });
    },
    signup({ commit }, userObj) {
        commit('blockUserAppLevel', true);
        user.signup(userObj).then(() => {
            commit('blockUserAppLevel', false);
            const { name: username, password } = userObj;
            this.dispatch('login', { username, password });
        }).catch(({ response: { data } }) => {
            commit('blockUserAppLevel', false);
            handleError(commit, data);
        });
    },
    blockUserAppLevel({ commit }, flag) {
        commit('blockUserAppLevel', flag);
    },
    addToasterMessage({ commit }, data) {
        handleError(commit, data);
    }
}

export default actions;