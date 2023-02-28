import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleClick =this.handleClick.bind(this)
    }
    handleClick(e) {
        // console.log(e.target.id)
        this.props.deleteTodo(e.target.id)
    }
  render() {
    return (
        <ul>
            <li>
                {this.props.task}
            </li>
            <button>Edit</button>
            <button id={this.props.id} onClick={this.handleClick}>X</button>
        </ul>
      
    )
  }
}
