import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxLogger from 'redux-logger'
import {todoList} from './todoListReducer'

const reducers = combineReducers({
    //few reducers here
    listReducer: todoList
})

const store = createStore(
    reducers,
    {},
    applyMiddleware(ReduxLogger)
)

export default store;