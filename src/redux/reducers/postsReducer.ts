import { CREATE_POST, GET_ALL_POST, GET_POST } from "../types"

const initialStatePost = {
    postData: [],
}

const initialStateAllPost = {
    allPost: []
}

export const postsReducer = (state = initialStatePost, action: { type: any; payload: any }) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                postData: action.payload,
            }
        case GET_POST:
            return {
                ...state,
                postData: action.payload,
            }
        default:
            return state
    }
}

export const getAllPostReducer = (state = initialStateAllPost, action: { type: string; payload: any }) => {
    if (action.type === GET_ALL_POST) {
        return {
            ...state,
            allPost: action.payload.items,
        }
    }
    return state
}