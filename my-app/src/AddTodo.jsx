import React, { useState } from "react";

function AddTodo({ handeleAddTodo}) {
    const [todoTitle, setTodoTitle]= useState("")
    
   return (
     <div>
        <input 
            value={todoTitle}
            type="text"
            onChange={(event) =>
                setTodoTitle(event.target.value)
            }  />
            
            <button onClick={() =>{ 
                handeleAddTodo(todoTitle)
            }
            }> Add New Todo </button>
    </div>
   )
    
}

export default AddTodo