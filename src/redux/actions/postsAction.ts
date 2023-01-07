import { message } from "antd"
import { postsAPI } from "../../axios/posts"
import {CREATE_POST, GET_ALL_POST, GET_POST, IAllPost, INewPost, IPost} from "../types/post"

export const createPost = (post: { title: string; description: string; text: string }) => {
    return async (dispatch: (arg0: { type: string; payload: INewPost }) => void) => {
        try {
            const data = await postsAPI.createPost(post)
            if (data.status === 201) {
                dispatch(createPosts(data.data))
                message.success('Запись успешно добавлена!')
            }
        } catch (error) {
            message.error("Произошла ошибка при создании поста")
        }
    }
}

export const getOnePost = (postId: string) => {
    return async (dispatch: (arg0: { type: string; payload: IPost; }) => void) => {
        try {
            const data = await postsAPI.getPost(postId)
            if (data.status === 200) {
                dispatch(getOnePosts(data.data))
            }
        } catch (error) {
            message.error("Произошла ошибка при получении данных одного поста")
        }
    }
}

export const getAllPost = () => {
    return async (dispatch: (arg0: { type: string; payload: IAllPost; }) => void) => {
        try {
            const data = await postsAPI.getAllPost()
            if (data.status === 200) {
                dispatch(getAllPosts(data.data))
            }
        } catch (error) {
            message.error("Произошла ошибка при получении данных всех постов")
        }
    }
}

export const createPosts = (payload: INewPost) => ({ type: CREATE_POST, payload })
export const getOnePosts = (payload: IPost) => ({ type: GET_POST, payload })
export const getAllPosts = (payload: IAllPost) => ({ type: GET_ALL_POST, payload })