import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

const ToDoList = () =>{
    const [toDos, setToDos] = useState([])

    const addToDo = (todo) => {
        setToDos((toDos) => [...toDos, todo])
    }

    const removeToDo = (id) => {
        setToDos((toDos)=>toDos.filter((toDo) => toDo.id !== id))
    }

    // // finish this later
    // const editTodo = (id, text) => {
    //     setToDos((toDos)=>{
    //         if (toDo.id === id){
    //             toDo.text = text
    //             // this needs work, finish later
    //         }
    //     })
    // }



    return (
    <>
        <ToDoForm addToDo={addToDo} data-testid="new-todo-form"/>
        {toDos.map((toDo) => {
            return (
                <ToDo 
                    key={toDo.id}
                    id={toDo.id}
                    text={toDo.text}
                    removeToDo={removeToDo} 
                    data-testid="todo" 
                />)})}
    </>
    )
}

export default ToDoList