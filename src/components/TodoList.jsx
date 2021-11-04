import React from 'react'
import ToDo from './ToDo'

const TodoList = ({toDoList, deleteToDo, toggleComplete}) => {
    return (
        <div>
            <h1 className="text-center my-4">My Todo List</h1>
            {
                toDoList.map(toDo => {
                    return (
                        <ToDo 
                            key={toDo.id}
                            toDo={toDo}
                            deleteToDo={deleteToDo}
                            toggleComplete={toggleComplete}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;
