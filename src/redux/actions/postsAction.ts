import { message } from "antd"
import { postsAPI } from "../../axios/posts"
import { CREATE_POST, GET_ALL_POST, GET_POST } from "../types"

export const createPost = (post: any) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data, status } = await postsAPI.createPost(post)
            if (status === 201) {
                message.success('Запись успешно добавлена!')
                dispatch(createPosts(data))
            }
        } catch (error) {
            message.error("Произошла ошибка при создании поста")
        }
    }
}

export const getOnePost = (postId: string) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data, status } = await postsAPI.getPost(postId)
            if (status === 200) {
                dispatch(getOnePosts(data))
            }
        } catch (error) {
            message.error("Произошла ошибка при получении данных одного поста")
        }
    }
}

export const getAllPost = () => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data, status } = await postsAPI.getAllPost()
            if (status === 200) {
                dispatch(getAllPosts(data))
            }
        } catch (error) {
            message.error("Произошла ошибка при получении данных всех постов")
        }
    }
}

export const createPosts = (payload: any) => ({ type: CREATE_POST, payload })
export const getOnePosts = (payload: any) => ({ type: GET_POST, payload })
export const getAllPosts = (payload: any) => ({ type: GET_ALL_POST, payload })