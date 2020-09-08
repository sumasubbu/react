import React from "react";
import "./css/style.css"

function TodoItem(props) {
  return (
    <div className = "todoItem">
      {/* */}
      <input type="checkbox" checked={props.item.completed} 
      onChange={(event)=> props.handleChange(props.item.id)} >
        </input>
     <label>{props.item.text}</label>
     
    </div>
  )
}

export default TodoItem;
