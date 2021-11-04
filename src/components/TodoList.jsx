import React from 'react'
import ToDo from './ToDo'

const todo1 = {
    title:'todo1',
    content:'Contenido del todo 1',
    completed:false
}

const todo2 = {
    title:'todo2',
    content:'Contenido del todo 2',
    completed:true
}


const TodoList = () => {
    return (
        <div>
            <h1>My Todo List</h1>
            <ToDo todo={todo1}/>
            <ToDo todo={todo2}/>
        </div>
    )
}

export default TodoList;
