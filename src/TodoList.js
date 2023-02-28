import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { v4 as uuidv4 } from 'uuid';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : [
                {task : 'Wash the bathroom', id :uuidv4()}, 
                {task : 'Cook Soup' , id :uuidv4()},
            ]
        }
        this.createNewToDo = this.createNewToDo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    createNewToDo(task){
        const newTask = {...task, id:uuidv4()}
        this.setState( (state) => { 
            return {todos : [...state.todos, newTask]} 
        })
    }
    deleteTodo(id){
        const result = this.state.todos.filter(todo => {return todo.id !== id ? todo : ''});
        this.setState((state) => { 
            return {todos : [...result]} 
        })
    }
    render() {
        const todos = this.state.todos.map((todo) => (<Todo id={todo.id} key={uuidv4()} task={todo.task}  deleteTodo={this.deleteTodo}/>))
        return (
            <div>
                <h1>Todo List</h1>
                <div>{todos}</div>
                <NewTodoForm createNewToDo={this.createNewToDo} />
            </div>
        )
    }
}
