import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://react-blog-diplom.vercel.app',
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: window.localStorage.getItem('token'),
    }
})