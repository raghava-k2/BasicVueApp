import axios from "axios"
import { API } from '../constants/constant';

const user = {
    login(userObj) {
        return axios.post(`${API.context}/login`, userObj);
    },
    signup(userObj) {
        return axios.post(`${API.context}/user`, userObj);
    },
    isAlive(){
        return axios.get(`${API.context}/isAlive`);
    }
}

export default user;