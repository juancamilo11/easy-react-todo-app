import React from 'react'

const ToDo = ({toDo, deleteToDo, toggleComplete}) => {

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h3 className={`card-title ${toDo.completed && 'task-completed'}`} >{toDo.title}</h3>
                <p className="card-text">
                {toDo.content}   
                </p>    
                <hr />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success m-3" onClick={() => toggleComplete(toDo.id)}>
                        {toDo.completed ? 'Set as not completed' : 'Set as completed'}
                    </button>
                    <button className="btn btn-primary m-3">Update</button>
                    <button className="btn btn-danger m-3" onClick={() => deleteToDo(toDo.id)}>Delete</button>
                </div>
            </div>    
        </div>
    )
}

export default ToDo;
