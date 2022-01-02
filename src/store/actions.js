import { user } from '../api'

const actions = {
    login({ commit }, userObj) {
        user.login(userObj).then(({ data }) => {
            console.log(data, commit);
        }).catch(error => {
            console.log(error);
        })
    },
    signup({ commit }, userObj) {
        user.signup(userObj).then(({ data }) => {
            console.log(data, commit);
        }).catch(error => {
            console.log(error);
        })
    }
}

export default actions;