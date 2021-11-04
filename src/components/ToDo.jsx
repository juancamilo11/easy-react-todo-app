import React from 'react'

const ToDo = ({toDo, deleteToDo, toggleComplete, setToDoForEdit}) => {

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h3 className={`card-title ${toDo.completed && 'task-completed'}`} >{toDo.title}</h3>
                <p className="card-text">
                {toDo.content}   
                </p>    
                <hr />
                <div>
                    <button className="btn btn-success m-3" onClick={() => toggleComplete(toDo.id)}>
                        {toDo.completed ? 'Set as not completed' : 'Set as completed'}
                    </button>
                    {!toDo.completed && <button className="btn btn-primary m-3" onClick={() => setToDoForEdit(toDo)}>Update</button>}
                    <button className="btn btn-danger m-3" onClick={() => deleteToDo(toDo.id)}>Delete</button>
                </div>
            </div>    
        </div>
    )
}

export default ToDo;
