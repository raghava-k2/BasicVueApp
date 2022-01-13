import axios from "axios"
import { API } from '../constants/constant';

const user = {
    upload(form, config) {
        return axios.post(`${API.context}/file/upload`, form, config);
    },
}

export default user;