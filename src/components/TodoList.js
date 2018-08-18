import React from 'react';
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import _ from 'lodash';

const TodoList = ({listReducer}) => {
  console.log(listReducer)
  return (
    <ul>
      {
        _.map(listReducer, item => (
          <TodoItem key={item} item={item.detail}/>
        ))
      }
    </ul>
  )
}

const mapStateToProps = ({listReducer}) => {
  return {listReducer}
}

export default connect(mapStateToProps)(TodoList)