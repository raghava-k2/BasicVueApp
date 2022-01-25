import axios from "axios"
import { API } from '../constants/constant';

const user = {
    upload(form, config) {
        return axios.post(`${API.context}/file/upload`, form, config);
    },
    get(params) {
        return axios.get(`${API.context}/file/`, { params });
    },
    download(fileId) {
        return axios.get(`${API.context}/file/download/${fileId}`);
    }
}

export default user;