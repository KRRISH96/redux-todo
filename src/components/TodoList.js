import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import _ from 'lodash';
import * as actions from '../actions'

class TodoList extends Component {
  
  state = {
    item: '',
    tobeAdded: ''
  }

  handleChange = (e) => {
    this.setState({
      tobeAdded: e.target.value
    })
  }

  handleSubmit = (e) => {
    const { tobeAdded } = this.state;
    if(tobeAdded !== '') {
      this.props.addToList(tobeAdded.trim())
    }
    this.setState({
      tobeAdded: ''
    })
    e.preventDefault()
  }

  handleCheckBox = (checkedStatus, id) => {
    let updateCheckedList = this.props.listReducer
    _.map(updateCheckedList, item => {
      if(item.id === id) {
        item.isChecked = checkedStatus;
      }
      return item;
    })
  }

  renderAddToDoField = () => (
    <form onSubmit = {this.handleSubmit}>
      <input type="text" value={this.state.tobeAdded} onChange={this.handleChange}/>
        <button type="submit">ADD</button>
    </form>
  )

  render() {
    const { listReducer, deleteTodo } = this.props
    return (
      <div>
        {this.renderAddToDoField()}
        <ul>
          {
            _.map(listReducer, (item,index) => (
              <TodoItem key={`${index}-${item.id}`} item={item} handleCheckBox={this.handleCheckBox}/>
            ))
          }
        </ul>
        <button onClick={() => deleteTodo(listReducer)}>Delete Item</button> 
      </div>
    )
  }
}
const mapStateToProps = ({listReducer}) => {
  return {listReducer}
}

export default connect(mapStateToProps, actions)(TodoList)