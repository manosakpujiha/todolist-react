import React, { Component } from 'react';
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashCan, faStrikethrough, faFloppyDisk, faPencilAlt } from '@fortawesome/free-solid-svg-icons';


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
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleUpdate(e) {
        this.props.updateTodo(this.props.id);
    }
    handleEdit(e) {
        this.props.editTodo(this.props.id);
    }
    handleDelete(e) {
        this.props.deleteTodo(this.props.id);
    }
   
    render() {
        let result;
            if (this.props.isEditing === false) {
                result=
                  <div className='Todo'>
                        <ul className='Todo-ul'>
                            <li className={this.props.done}>
                                {this.props.task}
                            </li>
                            <div className='Todo-buttons'>
                                <button id={this.props.id} onClick={this.handleEdit}> <FontAwesomeIcon className="icon" style={{ fontSize: 'inherit' }} icon={faPencilAlt} title="Edit this task"/> </button>
                                <button id={this.props.id} onClick={this.handleUpdate}> <FontAwesomeIcon className="icon" style={{ fontSize: 'inherit' }} icon={faStrikethrough} title="Mark task as done" /></button>
                                <button id={this.props.id} onClick={this.handleDelete}><FontAwesomeIcon className="icon" style={{ fontSize: 'inherit' }} icon={faTrashCan} title="Delete this task" /></button>
                            </div>
                        </ul>
                </div>
            } 
            else {
                  result = 
                    <div className='Todo'>
                        <form className='Todo-edit-form' onSubmit={this.handleSubmit}>
                            <label className='Todo-label' htmlFor='task'>Editing</label>
                            <input onChange={this.handleChange}  name='task' id='task' placeholder='Editing...' value={this.state.task}/>
                            <button><FontAwesomeIcon className="icon" size='sm'  icon={faFloppyDisk} title="Save edited task"/></button>
                        </form> 
                    </div> 
            }
        return (result)
    }
}
