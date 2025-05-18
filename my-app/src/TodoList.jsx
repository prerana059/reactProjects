import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todos() {
    
    const[todos, setTodos] = useState([])

    const handleAddTodo = (todoTitle) => {
        setTodos([...todos, {id: Math.random(), title:todoTitle, isCompleted: false}])

    }
    

    const handleDeleteButton = (deleteId) => {
         const updatedTodos = todos.filter(todo =>{
            return todo.id !== deleteId
        })
        setTodos(updatedTodos)

    }

    const handleMarkComplete = (updateId) =>{
        const updateTodos = todos.map(todo => {
            if(todo.id === updateId) {
                return {...todo, isCompleted: true}
            }else{
                return todo
            }
        })
        setTodos(updateTodos)
    }

    return(
        <div>
            < AddTodo handleAddTodo={handleAddTodo}/>

            {todos.map(todo =>{
                return  <TodoItem key={todo.id} todo={todo} handleDeleteButton ={handleDeleteButton}
                    handleMarkComplete={handleMarkComplete}
                />
            }
               
            )}
        </div>
    )
    
    
}

export default Todos 


//Hook => 
    //useState