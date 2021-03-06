import { combineReducers, createStore, applyMiddleware } from "redux"
import { postsReducer } from "./reducers/postsReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { commentsReducer } from "./reducers/commentsReducer"

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store