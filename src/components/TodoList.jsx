import React from 'react'
import ToDo from './ToDo'

const TodoList = ({toDoList, deleteToDo, toggleComplete, setToDoForEdit}) => {
    return (
        <div>
            <h1 className="text-center my-4">My Todo List</h1>
            {toDoList.length > 0 ?
                <>
                    {toDoList.map(toDo => {
                        return (
                            <ToDo 
                                key={toDo.id}
                                toDo={toDo}
                                deleteToDo={deleteToDo}
                                toggleComplete={toggleComplete}
                                setToDoForEdit={setToDoForEdit}
                            />
                        );
                    })}
                </>
            :
            <h2 className="display-4 text-center mt-5">No tasks found, Start by creating a new one</h2>
            }
        </div>
    )
}

export default TodoList;
