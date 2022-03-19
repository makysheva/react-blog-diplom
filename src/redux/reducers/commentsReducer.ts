import { CREATE_COMMENT, GET_COMMENTS, GET_USER_COMMENTS } from "../types/post"

const initialState = {
    comments: [],
    comment: null,
    userCommentsData: [],
}

export const commentsReducer = (state = initialState, action: { type: string; payload: object[] }) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        case GET_USER_COMMENTS:
            return {
                ...state,
                userCommentsData: action.payload
            }
        case CREATE_COMMENT:
            return {
                ...state,
                comment: action.payload,
            }
        default:
            return state
    }
}