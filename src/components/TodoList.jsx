import React from 'react'
import ToDo from './ToDo'

const toDoList = [{
        id:'1',
        title:'todo1',
        content:'Contenido del todo 1',
        completed:false
    },{
        id:'2',
        title:'todo2',
        content:'Contenido del todo 2',
        completed:true
    },{
        id:'3',
        title:'todo3',
        content:'Contenido del todo 3',
        completed:true
    }
];

const TodoList = () => {
    return (
        <div>
            <h1 className="text-center my-4">My Todo List</h1>
            {
                toDoList.map(toDo => {
                    return (
                        <ToDo 
                            key={toDo.id}
                            toDo={toDo}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;
