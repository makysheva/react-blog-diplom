import { message } from "antd"
import { commentsAPI } from "../../axios/comments"
import { CREATE_COMMENT, GET_COMMENTS, GET_USER_COMMENTS } from "../types/post"

// export const createComment = (comment: { text: string; postId: string | undefined }, postId: string) => {
//     return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
//         try {
//             const { status } = await commentsAPI.createComment(comment)
//             if (status === 201) {
//                 dispatch(createComments(postId))
//                 message.success('Комментарий успешно создан!')
//             }
//         } catch (error) {
//             message.error("Произошла ошибка при создании комментария")
//         }
//     }
// }

// export const getUserComment = () => {
//     return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
//         try {
//             const { data, status } = await commentsAPI.getAllComments()
//             if (status === 200) {
//                 dispatch(getUserComments(data))
//             }
//         } catch (error) {
//             message.error("Произошла ошибка при получении комментариев данного пользователя")
//         }
//     }
// }

export const getAllCommentsOfPost = (postId: string) => {
    return async (dispatch: (arg0: any) => void) => {
        try {
            const { data, status } = await commentsAPI.getCommentsOfPost(postId)
            if (status === 200) {
                dispatch(getUserComments(data))
            }
        } catch (error) {
            message.error("Произошла ошибка при получении данных всех комментариев данной записи")
        }
    }
}

export const getAllComments = () => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data, status } = await commentsAPI.getAllComments()
            if (status === 200) {
                dispatch(getComments(data))
            }
        } catch (error) {
            message.error("Произошла ошибка при получении данных всех комментариев")
        }
    }
}

export const createComment = (comment: { text: string; postId: string | undefined }, postId: string | undefined) => {
    return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { status } = await commentsAPI.createComment(comment)
            if (status === 201) {
                dispatch(getUserComments(postId))
                message.success('Комментарий успешно создан!')
            }
        } catch (error) {
            message.error("Произошла ошибка при создании комментария")
        }
    }
}

export const createComments = (payload: any) => ({ type: CREATE_COMMENT, payload })
export const getComments = (payload: any) => ({ type: GET_COMMENTS, payload })
export const getUserComments = (payload: any) => ({ type: GET_USER_COMMENTS, payload })