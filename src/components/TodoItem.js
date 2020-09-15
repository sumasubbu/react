import React from "react";
import "./css/style.css"
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
      <div >
      
       <input type="checkbox" checked={props.item.completed} 
      onChange={()=> props.handleChange(props.item.id)} >
        </input>
       <input style={props.item.completed? completedTodoStyle : null} 
       type="text" value={props.item.text} 
       onChange={(event)=>props.handleEdit(event.target.text,props.item.id)}> 
       </input>
       
       
       <span>
          <FontAwesomeIcon className="faicon" icon="times" 
          onClick={() => props.handleDelete(props.item.id)} />
        </span>
        
        </div>
        
    </div>
  )
}

export default TodoItem;
