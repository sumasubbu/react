import React from "react";
import TodoItem from "./TodoItem";
import todolist from "../todolist"

function Todo() {
  const tododata = todolist.map(item => <TodoItem key={item.id} item={item} />)
  return (
    <div className = "todoList">
      {tododata}
    </div>
  );
}

export default Todo;
