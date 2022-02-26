import { combineReducers, createStore, applyMiddleware } from "redux"
import { postsReducer } from "./reducers/postsReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    posts: postsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store