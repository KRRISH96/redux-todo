import React from 'react'

const TodoItem = (props) => {
  return (
    <li>
      {props.item.detail}
      <input type='checkbox' onChange={(e) => props.handleCheckBox(e.target.checked, props.item.id)} />
    </li>
  )
}

export default TodoItem