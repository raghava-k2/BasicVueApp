import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
    state() {
        return {};
    },
    mutations,
    actions
});

export default store;