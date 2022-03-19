import { CREATE_POST, GET_ALL_POST, GET_POST } from "../types/post"

const initialState = {
    postsData: [],
    postData: null,
    usersPostsData: [],
    images: [],
}

export const postsReducer = (state = initialState, action: { type: any; payload: any }) => {
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
        case GET_ALL_POST:
            return {
                ...state,
                postsData: action.payload,
            }
        default:
            return state
    }
}