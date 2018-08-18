import { 
  ADD_TODO,
  DELETE_TODO,
} from './actionTypes';

let todoId = 0;

export function addToList(item) {
  const todo = {
    id: todoId++,
    detail: item
  }
  return {
      type: ADD_TODO,
      payload: todo
  }
}

export const deleteTodo = () => ({
  type: DELETE_TODO,
  payload: ''
})