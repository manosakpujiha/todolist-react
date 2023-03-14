import React, { Component } from 'react';
import './NewTodoForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

export default class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createNewToDo(this.state);
        this.setState({ task : ''});
    }
    handleChange(e){
           this.setState({[e.target.name]: e.target.value})
    }
  render() {
    return (
 
        <form className='NewTodoForm' onSubmit={this.handleSubmit}>
            <label htmlFor='task'>Add a new task</label>
            <input  onChange={this.handleChange}  name='task' id='task' placeholder='New task' value={this.state.task}/>
            <button><FontAwesomeIcon icon={faPlus}   size="lg" className="icon" title="Add a new task"/></button>
        </form>
    )
  }
}
