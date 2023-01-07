import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:5656',
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: window.localStorage.getItem('token'),
    }
})