import axios from "axios"
import { API } from '../constants/constant';

const user = {
    login(userObj) {
        return axios.post(`${API.context}/login`, userObj);
    },
    signup(userObj) {
        return axios.post(`${API.context}/user`, userObj);
    }
}

export default user;