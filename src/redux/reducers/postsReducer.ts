import { CREATE_POST, GET_ALL_POST, GET_POST } from "../types"

const initialState = {
    postData: []
}

export const postsReducer = (state = initialState, action: any) => {
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
                postData: action.payload.items,
            }
        default:
            return state
    }
}