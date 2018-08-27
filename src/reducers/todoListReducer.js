import { ADD_TODO, DELETE_TODO } from "../actions/actionTypes";

const INITIAL_STATE = []

export const todoList = (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case ADD_TODO: 
        return [...state, action.payload]
    case DELETE_TODO:
        return [...action.payload]
    default:
      return state;
  }
}