import axios from "axios";

export const API_BASEURL = 'http://localhost:8000/api/v1/'

const $api = axios.create(
    {
        withCredentials: true,
        baseURL: API_BASEURL
    }
)

export default $api