import { message } from "antd"
import { postsAPI } from "../../axios/posts"
import { CREATE_POST, GET_ALL_POST, GET_POST } from "../types/post"

export const createPost = (post: { title: string; description: string; text: string }) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data, status } = await postsAPI.createPost(post)
            if (status === 201) {
                dispatch(createPosts(data))
                message.success('Запись успешно добавлена!')
            }
        } catch (error) {
            message.error("Произошла ошибка при создании поста")
        }
    }
}

export const getOnePost = (postId: string) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
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
    //@ts-ignore
    return async (dispatch) => {
        try {
            const { data, status } = await postsAPI.getAllPost()
            if (status === 200) {
                dispatch(getAllPosts(data.items))
            }
        } catch (error) {
            message.error("Произошла ошибка при получении данных всех постов")
        }
    }
}
//@ts-ignore
export const createPosts = (payload) => ({ type: CREATE_POST, payload })
//@ts-ignore
export const getOnePosts = (payload) => ({ type: GET_POST, payload })
//@ts-ignore
export const getAllPosts = (payload) => ({ type: GET_ALL_POST, payload })