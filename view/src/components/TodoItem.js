import React from "react";
import "../css/style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function TodoItem(props) {

  // Inline style definition for completed todos
  const completedTodoStyle = {
    color: "#808080",
    fontStyle: "italic",
    textDecoration: "line-through"
  }

  return (
    <div className = "todoItem">
      
      
      <input id="checkbox" type="checkbox" checked={props.item.completed} 
      onChange={()=> props.handleChange(props.item.id)} >
      </input>
      <textarea className="todo-text" style={props.item.completed? completedTodoStyle : null} 
       type="text" value={props.item.text} 
       onChange={(event)=>props.handleEdit(event.target.value,props.item.id)}/> 
       
       
       
      <span>
          <FontAwesomeIcon className="faicon" icon="times" 
          onClick={() => props.handleDelete(props.item.id)} />
      </span>
        
      
        
    </div>
  )
}

export default TodoItem;
