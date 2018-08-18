import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import TodoList from './TodoList';
import * as actions from '../actions'


class App extends Component {

  state = {
    item: '',
    tobeAdded: ''
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      tobeAdded: e.target.value
    })
  }

  handleSubmit = () => {
    console.log('called')
    const { tobeAdded } = this.state;
    this.props.addToList(tobeAdded)
  }

  renderAddToDoField = () => (
    <div>
      <input type="text" onChange={this.handleChange}/>
      <span>
        <button type="submit" onClick={this.handleSubmit} >ADD</button>
      </span>
    </div>
  )
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux TODO</h1>
        </header>
        {this.renderAddToDoField()}
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = ({ listReducer }) => {
  return {  listReducer }
}

export default connect(mapStateToProps, actions)(App)
