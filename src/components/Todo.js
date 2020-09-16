import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todolist from "../todolist";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

class Todo extends Component {
  constructor() {
    super();
    //loading the todo list data into the state so that the data can be modified,
    //making the state the source of truth
    this.state = {
      todos: todolist,
      newTodo: {
        id: null,
        text: "",
        completed: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  // TODO: need to remove add button and make new todos using enter key

  handleChange(id) {
    //const {id} = event.target.id
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            /*returning a new object with updated fields
            using spread notation to gather all the properties of the current 
            todo data */
            ...item,
            /* manually override the "completed" property to inverse of the value */
            completed: !item.completed,
          };
        }
        return item;
      });
      return { todos: updatedTodos };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const EnteredTodo = this.state.newTodo;
    if (EnteredTodo.text !== "") {
      const updatedTodos = [...this.state.todos, EnteredTodo];
      this.setState({
        todos: updatedTodos,
      });
    }
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      newTodo: {
        id: Math.random(),
        [name]: value,
        completed: false,
      },
    });
  }

  handleDelete(id) {
    const updatedTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({
      todos: updatedTodos,
    });
  }

  handleEdit(text, id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text: text,
          };
        }
        return item;
      });
      return { todos: updatedTodos };
    });
  }

  render() {
    const tododata = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
      />
    ));
    return (
      <div>
        
        <form  onSubmit={this.handleSubmit}>
        <div id="add-todo">
          
          <input id="todo-input"
            type="text"
            placeholder="Click here to add a todo"
            name="text"
            value={this.state.newTodo.text}
            onChange={this.handleInput}
          ></input>
          <button id="add-button" type="submit">Add</button>
          </div>
          <div className="todoList">{tododata}</div>
        </form>
      </div>
    );
  }
}

export default Todo;
