import { ADD_TODO } from "../actions/actionTypes";

const INITIAL_STATE = []

export const todoList = (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case ADD_TODO: 
        return [...state, action.payload]
    default:
      return state;
  }
}