import React from "react";

function TodoItem({todo, handleDeleteButton}) {
    return(
        <div>
            <p style ={{color: todo.isCompleted ? "green": "red"}}
            
            >{todo.title}
                
            </p>
            <button style={{backgroundColor: "blue" }} 
            onClick={() => {
                handleDeleteButton(todo.id)
            }
                
            }
            >Delete</button>

            <button
                style={{backgroundColor: "green"}}
                onClick={() => {
            

                }

                }
            >Mark Complete</button>
        </div>
    )
}
export default TodoItem