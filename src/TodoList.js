import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { v4 as uuidv4 } from 'uuid';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : [
                {task : 'Wash the bathroom', id :uuidv4(), isEditing: false, done: false}, 
                {task : 'Cook Soup', id :uuidv4(), isEditing: false, done: false},
            ]
        }
        this.createNewToDo = this.createNewToDo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this)
    }
    editTodo(id){
        let manos = [...this.state.todos.map(todo => 
            {
                return todo.id === id ? {...todo, isEditing : !todo.isEditing}: todo
            }
            )];
        this.setState(() => { 
            return {todos : manos}
        })
    }

    saveTodo(task, id){
        let newTask = {...task, id: id, isEditing: false}
        this.setState((state) => { 
            return {
                todos : [...state.todos.map( todo => 
                    {
                        return todo.id === id ? newTask: todo
                    }
                )]
            } 
        })
    }
    updateTodo(id) {
        let manos = [...this.state.todos.map(todo => 
            {
                return todo.id === id ? {...todo, done : !todo.done}: todo
            }
            )];
            this.setState({todos : manos})
    }

    createNewToDo(task){
        const newTask = {...task, id: uuidv4(), isEditing: false}
        this.setState( (state) => { 
            return {todos : [...state.todos, newTask]} 
        })
    }
    deleteTodo(id){
        this.setState((state) => { 
            return {todos : [...state.todos.filter(todo => todo.id !== id )]} 
        })
    }
    render() {
        // console.log(this.state.todos.isEditing)
        const todos = this.state.todos.map((todo) => (


            <Todo 
                id={todo.id} 
                key={uuidv4()} 
                task={todo.task} 
                deleteTodo={this.deleteTodo} 
                editTodo={this.editTodo} 
                isEditing={todo.isEditing} 
                updateTodo={this.updateTodo} 
                saveTodo={this.saveTodo} 
                createNewToDo={this.createNewToDo}
                done= {todo.done ? 'done' : ''}
            />
        ))
        return (
            <div>
                <h1>Todo List</h1>
                <div>{todos}</div>
                <NewTodoForm createNewToDo={this.createNewToDo} />
            </div>
        )
    }
}