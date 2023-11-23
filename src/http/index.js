import axios from "axios";

export const API_BASEURL = 'http://localhost:8050/api/v1/'

const $api = axios.create(
    {
        withCredentials: true,
        baseURL: API_BASEURL
    }
)

export default $api