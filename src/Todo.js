import React, { Component } from 'react';
import './Todo.css'

import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task : ''
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete =this.handleDelete.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.saveTodo(this.state, this.props.id)
        // this.props.editTodo(e.target.id);
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});

    }
    handleUpdate(e) {
        this.props.updateTodo(this.props.id);
    }
    handleEdit(e) {
        this.props.editTodo(e.target.id);
    }
    handleDelete(e) {
        this.props.deleteTodo(e.target.id);
    }
    render() {
        let manos;
            if (this.props.isEditing === false) {
                manos=
                        <ul>
                            <li className={this.props.done}>
                                {this.props.task}
                            </li>
                            <button id={this.props.id} onClick={this.handleEdit}>Edit</button>
                            <button id={this.props.id} onClick={this.handleUpdate}>Update</button>
                            <button id={this.props.id} onClick={this.handleDelete}>X</button>
                        </ul>
            } 
            else {
                  manos =  
                    <form onSubmit={this.handleSubmit}>
                        <label className='Todo-label' htmlFor='task'>Editing</label>
                        <input onChange={this.handleChange}  name='task' id='task' placeholder='Editing...' value={this.state.task}/>
                        <button>Save</button>
                    </form> 
            }
        return (
            <div className='Todo'>
                {manos}
            </div>
        )
    }
}
