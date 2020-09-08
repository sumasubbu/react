import React from "react";
import "./css/style.css"

function TodoItem(props) {

  const completedTodoStyle = {
    color: "#808080",
    fontStyle: "italic",
    textDecoration: "line-through"
  }

  return (
    <div className = "todoItem">
      {/* */}
     
     <label style={props.item.completed? completedTodoStyle : null}>
       <input type="checkbox" checked={props.item.completed} 
      onChange={(event)=> props.handleChange(props.item.id)} >
        </input>
        {props.item.text}
       </label>
     
    </div>
  )
}

export default TodoItem;
