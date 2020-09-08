import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todolist from "../todolist";

class Todo extends Component {
  constructor(){
    super()
    //loading the todo list data into the state so that the data can be modified,
    //making the state the source of truth
    this.state={
      todos:todolist
    }
    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos=prevState.todos.map(item => {
        if(item.id=== id){
          return {
            /*returning a new object with updated fields
            using spread notation to gather all the properties of the current 
            todo data */
            ...item,
            /* manually override the "completed" property to inverse of the value */
            completed:!item.completed
          }
        }
        return item
      })
      return {todos:updatedTodos}
      })
  }

  render() {
    const tododata = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
    <div className="todoList">
      {tododata}
      </div>
    )
  }
}

export default Todo;
