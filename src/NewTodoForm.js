import React, { Component } from 'react'

export default class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task : ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createNewToDo(this.state);
        this.setState({ task : ''});
    }
    handleClick(e){
           this.setState({[e.target.name]: e.target.value})
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='task'>Add a new Task</label>
            <input  onChange={this.handleClick}  name='task' id='task' placeholder='New task' value={this.state.task}/>
            <button>Submit</button>
        </form>

      </div>
    )
  }
}
