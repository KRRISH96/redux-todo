import _ from 'lodash'
import { 
  ADD_TODO,
  DELETE_TODO,
} from './actionTypes';

let todoId = 0;

export function addToList(item) {
  const todo = {
    id: todoId++,
    isChecked: false,
    detail: item
  }
  return {
      type: ADD_TODO,
      payload: todo
  }
}

export function deleteTodo(listItems) {
  const updatedList = _.filter(listItems, item => item.isChecked !== true )
  return {
    type: DELETE_TODO,
    payload: updatedList
  }
}