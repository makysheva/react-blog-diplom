import { CREATE_POST, GET_ALL_POST, GET_POST } from "../types"

const initialState = {
    post: [],
    allPosts: [],
}

export const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                post: action.payload,
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload.items
            }

        case GET_ALL_POST:
            return {
                ...state,
                allPosts: action.payload.items
            }
        default:
            return state
    }
}