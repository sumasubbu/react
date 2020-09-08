import React from "react";
import "./css/style.css"

function TodoItem(props) {
  return (
    <div className = "todoItem">
      <input type="checkbox" checked={props.item.completed}></input>
  <label>{props.item.text}</label>
    </div>
  )
}

export default TodoItem;
