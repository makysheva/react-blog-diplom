import { message } from "antd"
import { postsAPI } from "../../axios/posts"
import { CREATE_POST, GET_ALL_POST, GET_POST } from "../types"

export const createPost = (post: any) => {
    return async (dispatch: any) => {
        try {
            const { data, status } = await postsAPI.createPost(post)
            if (status === 201) {
                message.success('Запись успешно добавлена!')
                // dispatch({
                //     type: CREATE_POST,
                //     data
                // })
                dispatch(createPosts(data))
            }
        } catch (error) {
            message.error(Error)
        }
    }
}

// export const getPost = () => async (dispatch: any) => {
//     try {
//         const res = await postsAPI.createPost()
//         dispatch(getPosts(res.data))
//     }
//     catch (e) {
//         message.error(Error)
//     }
// }

export const getPost = (postId: number) => {
    return async (dispatch: any) => {
        try {
            const { data, status } = await postsAPI.getPost(postId)
            if (status === 200) {
                dispatch(getPosts(data))
            }
        } catch (error) {
            message.error(Error)
        }
    }
}

export const getAllPost = () => {
    return async (dispatch: any) => {
        try {
            const { data, status } = await postsAPI.getAllPost()
            if (status === 200) {
                dispatch(getAllPosts(data))
            }
        } catch (error) {
            message.error(Error)
        }
    }
}

export const createPosts = (payload: any) => ({ type: CREATE_POST, payload })
export const getPosts = (payload: any) => ({ type: GET_POST, payload })
export const getAllPosts = (payload: any) => ({ type: GET_ALL_POST, payload })